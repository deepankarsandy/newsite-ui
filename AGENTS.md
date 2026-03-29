# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React 19 + TypeScript app with TanStack Router and shadcn/ui. Main application code lives in `src/`. Use `src/routes/` for route entries, `src/page-parts/` for larger page sections, `src/components/` for reusable UI, `src/hooks/` for custom hooks, and `src/lib/` for shared utilities such as `i18n` and `utils`. Static files live in `public/`, and repository-owned data assets live in `assets/` (for example `assets/locale/` and `assets/youtube-data/`). Avoid manual edits to `src/routeTree.gen.ts`; regenerate routes instead.

## Build, Test, and Development Commands
Use `pnpm` throughout.

- `pnpm dev`: start the Vite dev server on port `8080`.
- `pnpm build`: regenerate routes, type-check, and create the production build.
- `pnpm preview`: serve the production build locally on port `5000`.
- `pnpm type-check`: run TypeScript without emitting files.
- `pnpm test` / `pnpm test:watch`: run Vitest once or in watch mode.
- `pnpm lint`: run Biome checks.
- `pnpm lint:fix`: apply Biome fixes.
- `pnpm format`: format with Prettier.

## Coding Style & Naming Conventions
Prefer TypeScript and path aliases like `@/components/...` and `@assets/...`. Prettier controls formatting: 2-space indentation, 100-character line width, semicolons, double quotes, and trailing commas. Biome is used for linting and import cleanup; formatting is intentionally disabled there. Follow existing file naming: kebab-case for files (`mode-toggle.tsx`, `use-jellyfin-library.ts`) and `.lazy.tsx` suffixes for lazy route modules.

## Testing Guidelines
Vitest runs in `jsdom` with setup in `src/test/setup.ts`. Place tests under `src/**/__tests__/` and use `*.test.tsx` or `*.spec.tsx`; `src/components/ui/__tests__/button.test.tsx` is the current example. Add or update tests for UI behavior, route logic, and shared utilities when changing them.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `social added`, `bio update`, and `location util`. Keep commit subjects concise and focused on one change. For pull requests, include a clear summary, note any route or auth impact, link the related issue when applicable, and attach screenshots or short recordings for UI changes. Ensure `pnpm build`, `pnpm test`, and `pnpm lint` pass before requesting review.

## Automation & Hooks
`lefthook` runs on pre-commit and formats staged files, applies Biome fixes, then runs `pnpm lint` and `pnpm type-check`. Keep generated or external files out of ad hoc edits so hooks stay fast and predictable.
