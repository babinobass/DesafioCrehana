import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should display the value and call onChange when typing", () => {
    const handleChange = vi.fn();
    render(<SearchBar value="abc" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Buscar país");
    expect(input).toHaveValue("abc");
    fireEvent.change(input, { target: { value: "nuevo" } });
    expect(handleChange).toHaveBeenCalledWith("nuevo");
  });
});
