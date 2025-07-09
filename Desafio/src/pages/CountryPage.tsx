import { useParams, Link } from "react-router";
import { useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import { GET_COUNTRY } from "../Graphql/queries";
import ErrorMessage from "../components/ErrorMessage";

// Description: Page that displays detailed information about a specific country
const CountryPage = () => {
  const { code } = useParams();
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <Spinner message={"Cargando país..."} />;
  if (error) return <ErrorMessage message={error.message} />;

  const { country } = data;

  return (
    <section
      aria-label="Informacion de pais"
      className="relative flex justify-center -3xl mx-auto p-4"
    >
      <Link
        to="/"
        className="absolute left-4 top-4 text-indigo-600 hover:underline"
      >
        &larr; Volver
      </Link>
      <article className="mt-6 p-6 bg-white rounded-md shadow-sm flex flex-col items-center max-w-80">
        <div className="mt-4">
          <img
            src={`https://flagcdn.com/w320/${country?.code.toLowerCase()}.png`}
            alt={`Bandera de ${country?.name}`}
            className="w-32 h-20 object-cover rounded-md shadow-sm"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">{country?.name}</h1>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Código:</strong> {country?.code}
          </li>
          <li>
            <strong>Capital:</strong> {country?.capital}
          </li>
          <li>
            <strong>Moneda:</strong> {country?.currency}
          </li>
          <li>
            <strong>Continente:</strong> {country?.continent.name}
          </li>
          <li>
            <strong>Idiomas:</strong>{" "}
            {country?.languages
              .map(({ name }: { name: string }) => name)
              .join(", ")}
          </li>
        </ul>
      </article>
    </section>
  );
};

export default CountryPage;
