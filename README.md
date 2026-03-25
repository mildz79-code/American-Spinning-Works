# American Spinning Works Website

A production-ready React + Vite + TypeScript + Tailwind CSS marketing website for **American Spinning Works**, designed with a premium industrial and patriotic visual direction.

## Stack

- React 18
- Vite 5
- TypeScript 5
- Tailwind CSS 3

## Getting Started

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Type-check and build production assets
- `npm run preview` - Preview built assets locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
.
├─ public/
│  └─ assets/
│     ├─ images/
│     └─ video/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ lib/
│  ├─ sections/
│  ├─ App.tsx
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Placeholder Assets to Replace

- `public/assets/images/hero-mill-placeholder.svg`
- `public/assets/video/video-placeholder.svg`
- `public/assets/images/logo-mark-placeholder.svg` (optional future logo mark)
- Future infographic/diagram asset for Infrastructure section

## Notes for Future Integration

- Contact form in `CTASection` is UI-only and currently non-submitting.
- Comments in code indicate where Supabase or email API integration can be added.
- Copy is centralized in `src/lib/content.ts` for easy content updates.
