# Daniel Pino — Portfolio

Personal portfolio/resume site built with React, TypeScript, Vite, and Tailwind CSS.
All content is sourced from `Daniel_Pino_Resume_Improved` and lives in one typed
file: `src/data/resume.ts`. Update that file (and the PDF in `public/`) to keep
the site in sync with your resume.

## Getting started

Requires [Node.js](https://nodejs.org) 18+ and [pnpm](https://pnpm.io)
(enable it via `corepack enable && corepack prepare pnpm@latest --activate`
if you don't have it yet).

```bash
pnpm install
pnpm dev       # start local dev server
pnpm build     # production build -> dist/
pnpm preview   # preview the production build locally
```

## Deploying

The production build is a fully static site in `dist/`.

- **Vercel**: import the repo; `vercel.json` already sets the build command and
  output directory.
- **Netlify**: import the repo; `netlify.toml` already sets the build command
  and publish directory.
- **GitHub Pages**: run `pnpm build`, then publish the contents of `dist/`
  to the `gh-pages` branch (e.g. with the `gh-pages` npm package) or via
  GitHub Actions. `vite.config.ts` uses a relative `base: './'` so it works
  from a project subpath (`username.github.io/repo-name/`).

## Before going live

- Replace `https://danielpino.dev` in `index.html` (canonical/OG/Twitter tags)
  and `public/robots.txt` with your real deployed URL.
- Add a `public/og-image.png` (1200×630) for link-preview thumbnails, or
  remove the `og:image`/`twitter:image` tags if you'd rather not have one.
- Swap in `public/Daniel_Pino_Resume.pdf` any time your resume PDF changes —
  keep the filename referenced in `src/data/resume.ts`
  (`contact.resumePdfPath`) in sync.
