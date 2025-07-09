import { useQuery } from "@apollo/client";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterDropdown";
import CountryCard from "../components/CountryCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import type { ICountryProps } from "../types/types";
import { GET_COUNTRIES } from "../Graphql/queries";

// Description: Main page that displays a list of countries with search and filter options

const CountriesPage = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("");
  const [currencyFilter, setCurrencyFilter] = useState("");

  if (loading) return <Spinner message={"Cargando..."} />;
  if (error) return <ErrorMessage message={error.message} />;

  // Filters the list of countries based on search criteria and selected filters
  const filteredCountries = data.countries.filter((country: ICountryProps) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesContinent =
      !continentFilter || country.continent.name === continentFilter;
    const matchesCurrency =
      !currencyFilter || country.currency === currencyFilter;
    return matchesSearch && matchesContinent && matchesCurrency;
  });

  // Gets a unique list of currencies for the currency filter
  const uniqueCurrencies = Array.from(
    new Set(data.countries.map((c: ICountryProps) => c.currency))
  ).filter(Boolean) as string[];

  return (
    <section
      aria-label="Visualización de países y filtros de búsqueda"
      className="space-y-6 p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <FilterSelect
          title="Filtrar por continente"
          items={data.continents.map((c: ICountryProps) => c.name)}
          value={continentFilter}
          onChange={setContinentFilter}
        />
        <FilterSelect
          title="Filtrar por moneda"
          items={uniqueCurrencies}
          value={currencyFilter}
          onChange={setCurrencyFilter}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCountries.map((country: ICountryProps) => (
          <CountryCard
            key={country.code}
            code={country.code}
            name={country.name}
            continent={country.continent.name}
            currency={country.currency}
          />
        ))}
      </ul>
    </section>
  );
};

export default CountriesPage;
