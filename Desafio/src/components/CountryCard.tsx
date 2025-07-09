import { Link } from "react-router-dom";
import type { ICountryDetailsProps } from "../types/types";

const CountryCard = ({
  code,
  name,
  continent,
  currency,
}: ICountryDetailsProps) => {
  return (
    <li key={code}>
      <Link
        to={`/country/${code}`}
        className="block p-6 bg-white rounded-md shadow-sm hover:shadow-md hover:shadow-indigo-200 transition-shadow border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">
          <strong>Continente:</strong> {continent}
        </p>
        <p className="text-gray-600">
          <strong>Moneda:</strong> {currency}
        </p>
      </Link>
    </li>
  );
};

export default CountryCard;
