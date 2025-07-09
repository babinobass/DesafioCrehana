import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import CountriesPage from "./CountriesPage";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRIES } from "../Graphql/queries";
import { MemoryRouter } from "react-router-dom";

const mockCountries = [
  {
    code: "AR",
    name: "Argentina",
    continent: { name: "South America" },
    currency: "ARS",
  },
  {
    code: "BR",
    name: "Brasil",
    continent: { name: "South America" },
    currency: "BRL",
  },
];
const mockContinents = [{ name: "South America" }, { name: "Europe" }];

const mocks = [
  {
    request: { query: GET_COUNTRIES },
    result: {
      data: {
        countries: mockCountries,
        continents: mockContinents,
      },
    },
  },
];

describe("CountriesPage", () => {
  it("should display loading spinner", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountriesPage />
      </MockedProvider>
    );
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  });
  it("should display error message on query failure", async () => {
    const errorMock = [
      {
        request: { query: GET_COUNTRIES },
        error: new Error("Error al cargar los países"),
      },
    ];
    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <CountriesPage />
      </MockedProvider>
    );
    expect(
      await screen.findByText("Error al cargar los países")
    ).toBeInTheDocument();
  });
  it("should display filters and country cards after loading", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <CountriesPage />
        </MemoryRouter>
      </MockedProvider>
    );

    expect(await screen.findByText("Argentina")).toBeInTheDocument();
    expect(await screen.findByText("Brasil")).toBeInTheDocument();

    expect(screen.getByText("Filtrar por continente")).toBeInTheDocument();
    expect(screen.getByText("Filtrar por moneda")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar país")).toBeInTheDocument();
  });
});
