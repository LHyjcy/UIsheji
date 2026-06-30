# UI Replica Implementation Plan

## Architecture

The app is a single React page composed from these sections:

- `HeroDark`
- `GalleryCollage`
- `WireframeCompletion`

Shared content lives in `src/data/pageContent.ts`. Styling is split between tokens and global section CSS.

## Tasks

1. Create Vite/React/TypeScript project files.
2. Copy reference images into `public/assets/reference`.
3. Extract cropped deployable assets into `public/assets/generated`.
4. Implement typed content arrays for the gallery and wireframe completion sections.
5. Build the retained cinematic sections.
6. Complete the wireframe sections below the collage.
7. Add responsive CSS for desktop, tablet, and mobile.
8. Run `npm install`, `npm run build`, and local preview.
9. Compare screenshots against the references and tune spacing.

## Constraints

- Do not use local absolute image paths in runtime code.
- Do not add extra product sections beyond the references.
- Do not turn the retained upper collage into a regular card grid on desktop.
- Do not restore the removed center pill control.
- Do not add backend concerns.
