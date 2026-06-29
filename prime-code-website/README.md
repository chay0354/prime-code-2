# Prime Code — Website

Marketing site for **Prime Code**, built with React + Vite.

## Run it

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
```

## Build for production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com/new), import the repository.
3. Set **Root Directory** to `prime-code-website` (the app lives in that folder).
4. Vercel auto-detects Vite. Defaults are fine:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

Or deploy from the CLI:

```bash
cd prime-code-website
npx vercel
```

`vercel.json` is included for SPA routing and Vite output settings.

## Project structure

```
prime-code-website/
├─ index.html              # HTML entry + Google Fonts
├─ public/
│  └─ prime-code-mark.svg  # logo (also the favicon)
├─ src/
│  ├─ main.jsx             # React entry
│  ├─ App.jsx              # the whole page + content data
│  └─ index.css            # all styles + design tokens
└─ vite.config.js
```

## Editing

- **Content** (services, process steps, value props, contact details) lives in the
  arrays/constants at the top of `src/App.jsx`.
- **Theme color**: change the single `--accent` value at the top of `src/index.css`
  to re-color the entire site.
- **Logo**: replace `public/prime-code-mark.svg`.

Fonts: Bricolage Grotesque (display/body) + JetBrains Mono (labels), loaded from Google Fonts in `index.html`.
