# Repository instructions

## Build and tests

- `npm start` runs the Angular development server at `http://localhost:4200/`.
- `npm run build` runs the production build. Angular writes its output directly to `docs/`, which is the GitHub Pages deployment content.
- `npm test -- --watch=false` runs the Karma/Jasmine unit tests once in Chrome.
- Run one spec with `npm test -- --watch=false --include='src/app/home/home.component.spec.ts'`, replacing the path with the spec to run.

## Architecture

- This is an Angular application bootstrapped through `AppModule`. The root router uses hash-based URLs (`useHash: true`) and lazy-loads each page's feature module; keep this routing strategy for GitHub Pages compatibility.
- `AppComponent` provides the shared page shell. `ThemeModule` supplies the header and footer, and `ThemeService` controls the `.dark` class and persists the selected theme in `localStorage`.
- Page features live under `src/app/` in NgModule-based folders with their own routing modules, components, templates, and optional SCSS.
- Portfolio content is static JSON in `src/assets/configs/`. Core services import these files and expose typed values using interfaces from `src/app/core/models/`; update the matching model when changing a data shape.
- Tailwind CSS utilities are used in templates. Global design tokens and reusable glass-panel styles are in `src/styles.scss`, with Tailwind theme configuration in `tailwind.config.js`.

## Repository conventions

- Keep the existing NgModule and lazy-loaded feature structure when adding pages; these features are not standalone components.
- Use the `@app/*` alias for application imports and `@assets/*` for asset imports, as configured in `tsconfig.json`.
- Keep portfolio data in its JSON configuration rather than embedding content in templates or components, and preserve the corresponding typed model/service boundary.
- Build output is the tracked `docs/` website, not `dist/`; account for generated deployment files when building.
