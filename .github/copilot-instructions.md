# Copilot Instructions

Repository-wide guidance for AI coding agents working in this repository lives in [`AGENTS.md`](../AGENTS.md) — follow it as the source of truth for project overview, commands, conventions, and guardrails.

## Copilot-specific operational expectations

- Ensure `npm run build` passes before submitting changes.
- Production builds output to `docs/`, which is committed and served by GitHub Pages; never edit files in `docs/` by hand — run `npm run build` to regenerate.
- Keep changes consistent with the existing architecture and conventions.
