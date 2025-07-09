// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Necesario para pruebas de React
    globals: true, // Opcional: si quieres usar expect sin importarlo
  },
});
