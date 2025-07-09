import { ApolloClient, InMemoryCache } from "@apollo/client";

// GraphQL API URL from Vite environment variables
const API_URL = import.meta.env.VITE_API_COUNTRIES;

const client = new ApolloClient({
  uri: API_URL, // GraphQL endpoint URL
  cache: new InMemoryCache(),
});

export default client;
