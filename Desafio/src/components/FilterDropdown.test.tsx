import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import FilterDropdown from "./FilterDropdown";

describe("FilterDropdown", () => {
  it("should display the title and all items", () => {
    const items = ["Option 1", "Option 2", "Option 3"];
    render(
      <FilterDropdown
        title="Select an option"
        items={items}
        value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByText("Select an option")).toBeInTheDocument();
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("should call onChange with the selected value", () => {
    const items = ["USD", "ARS", "BRL"];
    const handleChange = vi.fn();
    render(
      <FilterDropdown
        title="Currency"
        items={items}
        value=""
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByLabelText("Currency"), {
      target: { value: "ARS" },
    });
    expect(handleChange).toHaveBeenCalledWith("ARS");
  });
});
