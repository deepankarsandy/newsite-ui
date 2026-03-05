# React + Vite + Shadcn Template

This template provides a minimal setup to get React working in Vite with HMR, TypeScript, and shadcn/ui components. It's designed to give a quick start for building modern React applications with a beautiful UI out of the box.

## Features

- React 19
- Vite for fast development and building
- TypeScript for type safety
- shadcn/ui components for a sleek UI
- Tailwind CSS for styling
- Dark mode support
- Biome for linting and formatting
- Lefthook for Git hooks
- TanStack Router for routing
- Vitest + Testing Library for unit/component tests

## Getting Started

1. Clone this repository
2. Install dependencies:

   ```shell
   pnpm install
   ```

3. Start the development server:

   ```shell
   pnpm dev
   ```

## Available Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the production build
- `pnpm fix`: Run Biome to check and fix issues
- `pnpm fix:all`: Run Biome on all files
- `pnpm type-check`: Run TypeScript type checking
- `pnpm test`: Run tests once with Vitest
- `pnpm test:watch`: Run Vitest in watch mode

## Project Structure

- `src/`: Source files
  - `components/`: React components
    - `ui/`: shadcn/ui components
    - `layout/`: Layout components
    - `dark-mode/`: Dark mode components
  - `lib/`: Utility functions
  - `routes/`: TanStack Router route components
  - `test/`: Vitest setup files
  - `main.tsx`: Application entry point
- `public/`: Static assets
- `index.html`: HTML entry point

## Configuration Files

- `vite.config.ts`: Vite configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `biome.json`: Biome configuration
- `lefthook.yml`: Lefthook configuration
- `components.json`: shadcn/ui configuration

## Customization

This template is set up with a basic structure and some example components. The `src/routes/index.lazy.tsx` file contains a basic kitchen sink of components.

## Expanding the Biome configuration

The project uses Biome for linting and formatting. You can expand the configuration in the `biome.json` file. Then expand as needed based on <https://biomejs.dev/>

## Routing

This template uses TanStack Router for routing. You can find route definitions in the `src/routes/` directory.

## Dark Mode

Dark mode support is included out of the box. You can toggle between light and dark mode using the `ModeToggle` component in the header.

## Styling

This template uses Tailwind CSS for styling. The main CSS file is located at `src/index.css`, which includes the base Tailwind directives and custom CSS variables for theming.

## Testing (Vitest)

This template uses Vitest with React Testing Library and jsdom for component tests.

- Config is in `vite.config.ts` under the `test` key.
- Test setup is in `src/test/setup.ts`.
- Demo test: `src/components/ui/button.test.tsx`.

Run tests with:

```shell
pnpm test
```

Run in watch mode:

```shell
pnpm test:watch
```

## Components

shadcn/ui components are located in the `src/components/ui/` directory. You can customize these components or add new ones as needed.

## Development Workflow

This template includes Lefthook for Git hooks. The pre-commit hook runs Biome checks and type checking before allowing commits. You can customize the Git hooks in the `lefthook.yml` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
