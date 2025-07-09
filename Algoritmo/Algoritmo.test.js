import { describe, test, expect } from "vitest";
import tickets from "./Algoritmo.js";

describe("tickets function tests", () => {
  test("should return SI for a basic valid case", () => {
    expect(tickets([25, 25, 50])).toBe("SI");
  });

  test("should return NO when there is no initial change", () => {
    expect(tickets([50])).toBe("NO");
  });

  test("should return SI for a complex change with 100 bill", () => {
    expect(tickets([25, 50, 25, 100])).toBe("SI");
  });

  test("should return SI for multiple 100 bills without 50 bills", () => {
    expect(tickets([25, 25, 25, 25, 25, 25, 100, 100])).toBe("SI");
  });

  test("should return NO when there is not enough change in the middle of the line", () => {
    expect(tickets([25, 50, 25, 50, 100])).toBe("NO");
  });
});
