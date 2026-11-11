# Ruben Portfolio

Personal portfolio website for Rúben Cerqueira, a Software Engineer based in Portugal.

**Live site:** <https://rubenccerqueira.github.io>

## Overview

Small portfolio project used to showcase my skills as a software engineer.
It presents my professional profile, skills, education and personal/academic
projects, and is built and deployed end to end by myself.

## Tech Stack

- **Framework:** Angular 19 (NgModule-based, strict TypeScript)
- **UI:** Bootstrap 5, Bootstrap Icons, ng-bootstrap
- **Styling:** SCSS with design tokens (`src/styles/_variable.scss`)
- **Testing:** Karma + Jasmine
- **Deployment:** GitHub Pages (build output in `docs/`)

## Getting Started

```bash
npm install
npm start        # dev server -> http://localhost:4200
npm run build    # production build -> docs/
npm run watch    # watch build
npm test         # Karma/Jasmine tests
```

## Project Structure

```
src/
  app/
    app.module.ts / app-routing.module.ts   # root module + routes
    app.component.*                          # shell: nav bar + scroll handling
    dashboard/                               # landing view
    cv/                                      # CV view (data-driven from cvData.json)
    projects/                               # projects view (WIP)
    data/cvData.json                        # CV content
  styles/                                    # design tokens & global styles
docs/                                        # production build output (GitHub Pages)
```

## Deployment

`npm run build` generates the production bundle into `docs/`, which is committed
and served by GitHub Pages (with `.nojekyll`). After source changes, run the
build — never hand-edit files in `docs/`.

## Status

- Dashboard (landing) ✅
- CV ✅ (data-driven)
- Projects 🚧 WIP
