# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Personal portfolio website for Rúben Cerqueira, a Software Engineer based in Portugal.
The site presents his professional profile, skills, education and personal/academic projects.

- **Live site:** https://rubenccerqueira.github.io
- **Source root:** `src/`
- **Deployed build output:** `docs/` — this is what GitHub Pages serves.

Tech stack: Angular 19 (NgModule-based, **not** standalone), Bootstrap 5 + Bootstrap Icons + ng-bootstrap, SCSS design tokens, Karma/Jasmine tests, strict TypeScript.

## Commands

```bash
npm install
npm start        # ng serve -> http://localhost:4200
npm run build    # ng build --configuration production -> outputs to docs/
npm run watch    # ng build --watch --configuration development
npm test         # ng test (Karma + Jasmine, Chrome)
```

## Architecture

- `src/app/app.module.ts` — root NgModule. Declares `AppComponent`, `CvComponent`, `ProjectsComponent`, `DashboardComponent`; imports `BrowserModule`, `AppRoutingModule`, `NgbModule`.
- `src/app/app-routing.module.ts` — routes: `` (empty path redirects to `/dashboard`), `/dashboard`, `/cv`, `/projects`.
- Feature components live in `src/app/<feature>/<feature>.component.{ts,html,scss,spec.ts}` and use the `app-` selector prefix (e.g. `app-cv`).
- CV content is data-driven: components consume `src/app/data/cvData.json` via `resolveJsonModule` (see `CvComponent`). Keep CV content in the JSON file — do not hardcode it in components or templates.

## Code Style

- TypeScript strict mode is enforced (`strict`, `strictTemplates`, `noImplicitOverride`, `noImplicitReturns`, `noFallthroughCasesInSwitch`) — do not weaken these.
- Single quotes for strings; 2-space indentation; final newline; trimmed trailing whitespace; follow `.editorconfig`.
- SCSS design tokens live in `src/styles/_variable.scss` (font weights, colors, gradients, font sizes, breakpoints) and partials in `src/styles/_mixins.scss`; imported via `src/styles/index.scss`. Prefer tokens over hard-coded values.
- Component styles are colocated (`*.component.scss`) and scoped via component selectors / `:host`.

## Testing

- Karma + Jasmine specs are colocated with components as `*.component.spec.ts`; `src/test.ts` loads all specs via require.context.
- The existing specs are mostly stock Angular CLI boilerplate — verify they still reflect the real components before relying on them.

## Deployment

- `npm run build` produces the production bundle into `docs/`, which is committed and served by GitHub Pages (`.nojekyll` present).
- **Never hand-edit files under `docs/`** — it is generated output. After source changes, run `npm run build`.

## Agent Guardrails

- Do not modify files under `docs/` unless the task is a fresh build.
- Do not add new dependencies unless explicitly requested; prefer existing Bootstrap/ng-bootstrap libraries.
- Follow existing naming/structure conventions when adding components or routes.
- Preserve responsive behavior and design tokens consistent with existing patterns.
