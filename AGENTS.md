# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro website. Route files live in `src/pages/`; use kebab-case names such as `tree-trimming-pruning.astro` because filenames define public URLs. Reusable UI is under `src/components/`, with widgets in `components/widgets/`, page sections in `components/sections/`, and primitives in `components/ui/`. Shared page shells are in `src/layouts/`. Business content and settings belong in `src/data/` and `src/config.yaml`. Store imported images in `src/assets/images/` or gallery media in `src/img/`; reserve `public/` for files copied unchanged. Sass is under `src/styles/`, while Tailwind's entrypoint is `src/assets/styles/tailwind.css`. Do not edit generated `dist/` and `.astro/` files.

## Build, Test, and Development Commands

- `npm install` installs the Node dependencies. Use a Node version allowed by `package.json` (18.17.1+, 20.3.0+, or 21+).
- `npm run dev` starts Astro's local server, normally at `http://localhost:4321`.
- `npm run build` creates the production site in `dist/` and catches Astro integration or rendering failures.
- `npm run preview` serves the completed production build for final checks.
- `npm run lint:eslint` checks JavaScript, TypeScript, and Astro files.
- `npm run format` applies Prettier to the repository; review its changes before committing.

## Coding Style & Naming Conventions

Prettier is authoritative: two-space indentation, single quotes, semicolons, trailing commas where valid, and a 120-character line width. Keep Astro components in PascalCase (`CallToAction.astro`), routes and asset filenames in kebab-case, and JavaScript variables/functions in camelCase. Prefer the `~` alias for imports rooted at `src/`. Reuse existing layouts and components before introducing page-specific duplicates.

## Testing Guidelines

There is currently no automated test framework or coverage threshold. Before submitting changes, run `npm run lint:eslint` and `npm run build`. Then use `npm run preview` to inspect affected routes at desktop and mobile widths. For content or SEO changes, verify titles, canonical URLs, structured data, navigation links, forms, and generated sitemap behavior.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, lowercase summaries such as `add sitemap page with structured links for navigation`. Keep each commit focused on one logical change. Pull requests should explain the user-facing impact, list validation performed, and link any relevant issue. Include before/after screenshots for visual work and call out changes to routes, metadata, forms, analytics, or configuration.

## Security & Configuration Tips

Do not commit credentials or local environment files. Treat analytics IDs, production URLs, and integration settings in `astro.config.mjs` and `src/config.yaml` as production-sensitive; document intentional changes in the pull request.
