# Interaction Design

## Goal

Add a light interaction layer to the reference replica while preserving the Vite React TypeScript stack and static assets.

## Chosen Approach

Use native CSS motion only. The page keeps the existing hero image, gallery collage, and completed wireframe sections, then adds:

- A subtle hero image settle animation on first paint.
- Staggered gallery card reveal timing.
- Desktop hover lift with stronger contrast and shadow.
- Keyboard focus feedback on gallery cards.
- Reduced-motion fallback through the existing media query.

## Boundaries

- No new framework or animation dependency.
- No route, section, content, or image replacement.
- No visible instructional text.
- No interaction pattern that changes section order.

## Verification

Run `npm run check`, search for removed content regressions, and capture desktop plus mobile screenshots from the local preview.
