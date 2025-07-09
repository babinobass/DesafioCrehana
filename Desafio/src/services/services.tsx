import { ApolloClient, InMemoryCache } from "@apollo/client";

// URL de la API GraphQL desde las variables de entorno de Vite
const API_URL = import.meta.env.VITE_API_COUNTRIES;

const client = new ApolloClient({
  uri: API_URL, // URL del endpoint GraphQL
  cache: new InMemoryCache(),
});

export default client;
