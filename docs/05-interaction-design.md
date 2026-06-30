# Interaction Design

## Goal

Add a light interaction layer to the existing reference replica while preserving the current page layout, Vite React TypeScript stack, static assets, and section order.

## Chosen Approach

Use native CSS motion only. The page keeps the existing hero image and gallery collage, then adds:

- A subtle hero image settle animation on first paint.
- Staggered gallery card reveal timing.
- Desktop hover lift with stronger contrast and shadow.
- Keyboard focus feedback on gallery cards.
- Reduced-motion fallback through the existing media query.

## Boundaries

- No new framework or animation dependency.
- No route, section, content, or image replacement.
- No visible instructional text.
- No layout restructuring.

## Verification

Run `npm run check`, search for removed content regressions, and capture desktop plus mobile screenshots from the local preview.
