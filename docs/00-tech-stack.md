# Technical Stack

## Goal

Build a deployable single-page UI replica for the `LHyjcy/UIsheji` repository. The output must visually follow the supplied reference images and remain easy to refine.

## Chosen Stack

- **Vite** for a small static front-end build and fast local preview.
- **React** for splitting the page into clear sections.
- **TypeScript** for typed content arrays and safer refactors.
- **Native CSS** with `src/styles/tokens.css` for exact positioning, colors, spacing, and responsive behavior.
- **Phosphor Icons** for the camera icon in the pill control.

## Deliberately Excluded

- No backend, database, login, CMS, or API.
- No Next.js, because this static replica does not need SSR, routing, or server components.
- No UI component library, because default component styles would work against pixel-level reproduction.
- No global state library, because the page is static.
- No external image paths at runtime. All visual assets must live in `public/assets`.

## Deployment Target

Vercel static build:

- Build command: `npm run build`
- Output directory: `dist`
