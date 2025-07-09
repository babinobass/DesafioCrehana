import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ApolloProvider } from "@apollo/client";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import client from "./services/services";
import "./index.css";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen w-screen bg-gray-100 font-sans text-gray-800 px-6 mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<CountriesPage />} />
            <Route path="/country/:code" element={<CountryPage />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}
