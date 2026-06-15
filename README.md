# Farhan Saiyad — Portfolio (Pure React SPA + Vite, for GitHub Pages)

This folder is a **standalone**, ready-to-deploy version of the portfolio with **no TanStack Start, no SSR, no server functions** — just Vite + React + Tailwind v4 + framer-motion.

## 🚀 Deploy in 5 steps

1. **Copy this folder** into a fresh GitHub repo (or push the contents as the repo root).
2. Open `vite.config.ts` and set `REPO_NAME`:
   - Project site (`github.com/<you>/portfolio` → `<you>.github.io/portfolio/`): keep `"portfolio"` (use your repo name).
   - User/org site (`<you>.github.io`): set `REPO_NAME = ""`.
3. In your GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.
5. Done — visit `https://<you>.github.io/<repo>/`.

## 🛠 Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → ./dist
npm run preview  # preview the build
```

## ✏️ Edit content

- **Projects/apps** — `src/data/projects.ts` (add/remove/edit cards, App Store / Play Store links).
- **Social links** — `src/data/socials.ts`.
- **Hero/About/Experience/Contact copy** — `src/App.tsx`.
- **Photo** — replace `src/assets/farhan.png`.
- **Colors/fonts** — `src/styles.css`.
- **SEO title/description/OG tags** — `index.html`.

## Notes

- `public/.nojekyll` is required so GitHub Pages serves files starting with `_`.
- Site is a single scrolling page (anchor links `#about`, `#work`, etc.) — no router needed.
- No backend. Anything that needs a server (auth, DB, contact form processing) is out of scope for GitHub Pages.