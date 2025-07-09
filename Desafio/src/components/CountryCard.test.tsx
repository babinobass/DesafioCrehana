import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";
import { MemoryRouter } from "react-router-dom";

describe("CountryCard", () => {
  it("should display the country's name, continent, and currency", () => {
    const country = {
      name: "Argentina",
      continent: "South America",
      currency: "ARS",
      code: "AR",
    };

    render(
      <MemoryRouter>
        <CountryCard {...country} />
      </MemoryRouter>
    );
    expect(screen.getByText("Argentina")).toBeInTheDocument();
    expect(screen.getByText("South America")).toBeInTheDocument();
    expect(screen.getByText("ARS")).toBeInTheDocument();
  });

  it("should render a link to the country detail", () => {
    const country = {
      name: "Brasil",
      continent: "South America",
      currency: "BRL",
      code: "BR",
    };

    render(
      <MemoryRouter>
        <CountryCard {...country} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /brasil/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", expect.stringContaining("/BR"));
  });

  it("should display the country code if rendered", () => {
    const country = {
      name: "Chile",
      continent: "South America",
      currency: "CLP",
      code: "CL",
    };

    render(
      <MemoryRouter>
        <CountryCard {...country} />
      </MemoryRouter>
    );
    expect(
      screen.getByText((content) => content.includes("CL"))
    ).toBeInTheDocument();
  });
});
