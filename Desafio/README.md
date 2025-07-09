# Desafío Países - React + TypeScript + Vite

Debes crear una pequeña aplicación web que muestre información de los países usando como API  
https://countries.trevorblades.com

El stack a usar debe ser: React.js, TypeScript y GraphQL. Es opcional el uso de Server Side Rendering  
y/o React Server Component.

## Tecnologías utilizadas

- [**React**](https://react.dev/): Librería principal para la construcción de interfaces de usuario.
- [**TypeScript**](https://www.typescriptlang.org/): Tipado estático para mayor robustez y mantenibilidad.
- [**Vite**](https://vitejs.dev/): Herramienta de build y desarrollo ultrarrápida.
- [**Apollo Client**](https://www.apollographql.com/docs/react/): Cliente GraphQL para React.
- [**React Router**](https://reactrouter.com/): Navegación entre páginas.
- [**Tailwind CSS**](https://tailwindcss.com/): Utilidades para estilos rápidos y responsivos.
- [**Vitest**](https://vitest.dev/) y [**Testing Library**](https://testing-library.com/): Pruebas unitarias y de integración.

## Estructura principal

- `/src/pages`: Páginas principales de la app (listado de países, detalle de país, etc).
- `/src/components`: Componentes reutilizables (cards, filtros, spinner, etc).
- `/src/Graphql`: Definición de queries y configuración de Apollo.
- `/src/styles`: Archivos de estilos y configuración de Tailwind.

## ¿Cómo ejecutar el proyecto?

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repo>
   cd desafio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite).

4. **Ejecuta los tests**
   ```bash
   npm run test
   ```

## Scripts útiles

- `npm run dev`: Levanta el servidor de desarrollo.
- `npm run test`: Ejecuta los tests unitarios.

## Notas

- El archivo `.env` normalmente no se sube, pero es necesario como parte del desafío.
- No consideré necesario el uso de Server Side Rendering y/o React Server Component. Se podría considerar si el proyecto escala o necesita SEO.

---
