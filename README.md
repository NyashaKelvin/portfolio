# Nyasha Kelvin — DevOps Portfolio

A single-page portfolio for a DevOps engineer, built with React (Vite), Tailwind CSS,
Framer Motion, and lucide-react. Black/orange design system, glassmorphic cards, a
simulated interactive terminal, a mock live operations dashboard, and scroll-triggered
animations throughout.

Personal details (name, email, GitHub, LinkedIn) are sourced from
`https://nyashakelvin.github.io/portfolio/`. Section order, pacing, and "character"
(hero → about → skills → featured projects → project history timeline → contact with a
details table) are modeled on `https://julius-marandure-portfolio.vercel.app/`. Visual
identity (pitch black background, safety-orange accent, circular avatar ring) comes from
the supplied reference image. Featured projects are the real repositories supplied
alongside this brief: **DataV**, **FindIt** (frontend + backend), **RateLimit**, and
**TaskFlow**.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js              # profile, projects, skills content
    └── components/
        ├── Loader.jsx        # page-load transition
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Terminal.jsx      # interactive simulated bash terminal
        ├── About.jsx
        ├── Skills.jsx
        ├── Architecture.jsx  # CI/CD + IaC pipeline diagram
        ├── Projects.jsx
        ├── ProjectHistory.jsx
        ├── OpsDashboard.jsx  # mock live telemetry widget
        ├── Contact.jsx
        └── Footer.jsx
```

## Deploying (Vercel or Netlify)

This is a static Vite build — either platform can deploy it with zero configuration:

**Vercel**
```bash
npm i -g vercel
vercel            # preview deploy
vercel --prod     # production deploy
```
Build command: `npm run build` — Output directory: `dist`

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --build            # preview
netlify deploy --build --prod     # production
```

To connect it to the automated pipeline in the companion `devops-pipeline` package, see
**"How the two packages connect"** in this repo's root delivery notes, or `devops-pipeline/README.md`.

## Editing content

All personal copy, skills, and project cards live in `src/data.js` — update that file to
change the profile details or add/remove featured projects without touching component
markup.
