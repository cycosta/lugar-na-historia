# Lugar na História — Post Generator

Internal tool for generating Instagram post/story artwork for the _Lugar na
História_ project. Fill in a form, preview the rendered card, and export it
as an image (or a zip of images) — no design software required.

## Features

- Post types: Pré Passeio, Pós Passeio, Outros Conteúdos, Agenda, Reels
- Live preview panel rendered from styled-components card templates
- Photo upload/cropping slots per card layout
- Export to PNG via `html-to-image`, batch export to a zip via `jszip`

## Tech stack

- React 18 + TypeScript
- Vite
- styled-components
- Jest + Testing Library

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run test`    | Run the Jest test suite              |
| `npm run lint`    | Lint the codebase with ESLint        |
| `npm run format`  | Check formatting with Prettier       |

## Project structure

```
src/
  components/   Reusable UI primitives (inputs, buttons, icons, card layouts)
  views/        Sidebar, preview panel, export bar, and per-post-type forms
  context/      PostGeneratorContext — shared state for the form/preview flow
  data/         Post type metadata, card builders, and validation
  hooks/        Shared logic (title clamping, photo injection, itinerary fixes)
  tokens/       Design tokens (color, spacing, typography)
  utils/        Formatting, slugify, zip export helpers
```
