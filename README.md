# UIsheji Reference Replica

This repository contains a high-fidelity single-page UI replica based on the provided reference screenshots. The implementation is intentionally narrow: static front-end, local assets committed into the repo, and no backend or CMS.

## Stack

- Vite
- React
- TypeScript
- Native CSS with design tokens
- Phosphor Icons for the camera glyph only

## Commands

```powershell
npm install
npm run dev -- --host 127.0.0.1 --port 5173
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

## Deployment

For Vercel, use:

- Build Command: `npm run build`
- Output Directory: `dist`
