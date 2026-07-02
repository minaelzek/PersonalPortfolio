# Personal Portfolio

Forward Deployed Engineer portfolio — Next.js 16, React 19, Tailwind CSS 4, Framer Motion.

**Repository:** [github.com/minaelzek/PersonalPortfolio](https://github.com/minaelzek/PersonalPortfolio)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
npm start
```

## Deploy (live website)

GitHub hosts **source code**; for a public URL, connect this repo to [Vercel](https://vercel.com):

1. Sign in to Vercel with GitHub.
2. **Add New Project** → import `minaelzek/PersonalPortfolio`.
3. Use defaults (Framework: Next.js, Build: `npm run build`).
4. Deploy — you get a URL like `https://personal-portfolio-*.vercel.app`.

Update contact links in `src/data/site.ts` before sharing publicly.

## Project structure

| Path | Purpose |
|------|---------|
| `src/data/` | Site copy, experience, projects, stack, credentials |
| `src/components/sections/` | Page sections (Hero, About, Experience, etc.) |
| `src/components/projects/` | Project visuals and showcase |