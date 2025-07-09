# Desafío Países - React + TypeScript + Vite

Debes crear una pequeña aplicación web que muestre información de los países usando como API  
https://countries.trevorblades.com

El stack a usar debe ser: React.js, TypeScript y GraphQL. Es opcional el uso de Server Side Rendering  
y/o React Server Component.

---

You must create a small web application that displays information about countries using the API  
https://countries.trevorblades.com

The stack to use must be: React.js, TypeScript, and GraphQL. Using Server Side Rendering and/or React Server Component is optional.

---

## Tecnologías utilizadas / Technologies used

- [**React**](https://react.dev/): Librería principal para la construcción de interfaces de usuario. / Main library for building user interfaces.
- [**TypeScript**](https://www.typescriptlang.org/): Tipado estático para mayor robustez y mantenibilidad. / Static typing for greater robustness and maintainability.
- [**Vite**](https://vitejs.dev/): Herramienta de build y desarrollo ultrarrápida. / Ultra-fast build and development tool.
- [**Apollo Client**](https://www.apollographql.com/docs/react/): Cliente GraphQL para React. / GraphQL client for React.
- [**React Router**](https://reactrouter.com/): Navegación entre páginas. / Page navigation.
- [**Tailwind CSS**](https://tailwindcss.com/): Utilidades para estilos rápidos y responsivos. / Utilities for fast and responsive styling.
- [**Vitest**](https://vitest.dev/) y [**Testing Library**](https://testing-library.com/): Pruebas unitarias y de integración. / Unit and integration testing.

---

## Estructura principal / Main structure

- `/src/pages`: Páginas principales de la app (listado de países, detalle de país, etc).  
  Main app pages (country list, country detail, etc).
- `/src/components`: Componentes reutilizables (cards, filtros, spinner, etc).  
  Reusable components (cards, filters, spinner, etc).
- `/src/Graphql`: Definición de queries y configuración de Apollo.  
  Queries definition and Apollo configuration.
- `/src/styles`: Archivos de estilos y configuración de Tailwind.  
  Styles and Tailwind configuration files.

---

## ¿Cómo ejecutar el proyecto? / How to run the project?

1. **Clona el repositorio / Clone the repository**
   ```bash
   git clone <url-del-repo>
   cd desafio
   ```

2. **Instala las dependencias / Install dependencies**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo / Start the development server**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).  
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port indicated by Vite).

4. **Ejecuta los tests / Run the tests**
   ```bash
   npm run test
   ```

---

## Scripts útiles / Useful scripts

- `npm run dev`: Levanta el servidor de desarrollo. / Starts the development server.
- `npm run test`: Ejecuta los tests unitarios. / Runs unit tests.

---

## Notas / Notes

- El archivo `.env` normalmente no se sube, pero es necesario como parte del desafío.  
  The `.env` file is usually not uploaded, but it is required as part of the challenge.
- No consideré necesario el uso de Server Side Rendering y/o React Server Component. Se podría considerar si el proyecto escala o necesita SEO.  
  Server Side Rendering and/or React Server Component were not considered necessary. They could be added if the project scales or requires SEO.

---
