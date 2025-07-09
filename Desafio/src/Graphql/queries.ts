import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      currency
      continent {
        name
      }
    }
    continents {
      name
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currency
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;
