<p align="center">
  <img src="ferion/favicon.png" alt="FERION" width="260" />
</p>

<h1 align="center">FERION</h1>

<p align="center">
  Most portfolios are just a list of skills and a contact form. This one actually tells a story.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/license-MIT-FF0055?style=flat-square" alt="License MIT" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome" />
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#why-ferion">Why ferion?</a> ·
  <a href="#getting-started">Getting Started</a> ·
  <a href="#contributing">Contributing</a>
</p>

---

## What is ferion?

I got tired of the standard "here are my projects, here are my skills, here is my LinkedIn" format. Because that's not who I am. I'm not one thing. Never have been. Technology, gaming, psychology, content creation, sports, language, culture, entertainment I live in all of it. Picking one felt like lying. So I built **ferion**. A portfolio that actually reflects how my brain works. Every domain I operate in gets its own large type statement. With personality. Not bullet points. It's not a project showcase. It's a living document of someone who refused to specialize. 
Built on React 19, Vite 8, and Tailwind CSS 4. Fast, clean, and easy to keep building on. Because a portfolio for a polymath should never really be finished.

---

## Features

- **Dark / Light mode** — a glitch-effect transition that feels satisfying every time you toggle it
- **Glassmorphic navigation** — fixed header with a smooth animated pill highlight that follows your scroll position
- **Animated Domains grid** — seven interest areas, each revealed with staggered IntersectionObserver animations
- **Responsive typography** — fluid font sizes using `vmin`/`vw` units; looks great from a phone to a 4K display
- **About section** — personal biography with a live ChatGPT interface mockup embedded inline
- **Noise overlay** — subtle fractal SVG texture that adds depth without distraction
- **Mobile menu** — hamburger overlay navigation for small screens
- **Zero external dependencies for UI** — no heavy component libraries; just React, Tailwind, and lucide-react icons

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/ferion.git
cd ferion

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and you're live.

---

## Why ferion?

Most portfolio templates are built for one type of person. A developer. A few side projects. A skills section. A contact form.

**ferion is built for everyone else.**

---

The people who are hard to put in a box. Who have too many interests to list. Who want their portfolio to show *how they think* before it shows what tools they know.

The layout is bold. The typography hits. The writing is actually honest.

> *"Everyone around me had a plan. I couldn't do it. Not because I was lazy. The opposite, actually. I wanted to do everything."*
> — Ujjwal Kumar Rai

If you read that and felt something, ferion was probably built for you too.

Not a template for a job title. A starting point for people who never wanted just one.

---

## Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later (or pnpm / yarn)

### Installation

```bash
git clone https://github.com/your-username/ferion.git
cd ferion
npm install
```

### Development

```bash
npm run dev       # Start dev server with HMR at localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint checks
```

### Customising Your Content

All the content you'll want to change lives in one file: [src/App.jsx](src/App.jsx).

| What to change | Where to find it |
|---|---|
| Social links (Reddit, LinkedIn, HN) | `socialLinks` array at the top of `App.jsx` |
| Domains / interest areas | `domainsData` array at the top of `App.jsx` |
| About me text | `AboutSection` component |
| Accent color (`#FF0055`) | `--accent` CSS variable in the `<style>` block |
| Fonts | `@import` URL in the `<style>` block |
| Site title | `<title>` in `index.html` |

### Deployment

The `dist/` folder produced by `npm run build` is a fully static site. Deploy it anywhere:

- **Vercel** — drop the repo in, it auto-detects Vite
- **Netlify** — build command: `npm run build`, publish dir: `dist`
- **GitHub Pages** — use the `vite-plugin-gh-pages` package or a GitHub Actions workflow

---

## Project Structure

```
ferion/
├── public/
│   ├── favicon.png
│   └── logo.svg
├── src/
│   ├── App.jsx        # All sections and components
│   ├── main.jsx       # React root entry
│   └── index.css      # Tailwind CSS imports
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
└── package.json
```

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| [React](https://react.dev) | 19 | UI library |
| [Vite](https://vitejs.dev) | 8 | Build tool + dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [lucide-react](https://lucide.dev) | 1.7 | Icon set |
| [Outfit + Caveat](https://fonts.google.com) | — | Typography (Google Fonts) |

---

## Contributing

Contributions are welcome — whether you're fixing a bug, improving accessibility, or adding a feature that makes sense for a portfolio like this.

```bash
# Fork and clone
git clone https://github.com/your-username/ferion.git
cd ferion

# Create a feature branch
git checkout -b feat/your-feature-name

# Make your changes, then stage specific files
git add src/App.jsx

# Commit with a clear message
git commit -m "feat: add scroll progress indicator"

# Push and open a PR
git push origin feat/your-feature-name
```

**Before submitting:**
- Run `npm run lint` and fix any warnings
- Test in both light and dark mode
- Test on mobile (use browser DevTools responsive mode)
- Keep PRs focused — one change per PR

---

## Code of Conduct

This project follows the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) Code of Conduct. Be respectful, constructive, and kind.

---

## Support

- **Bug reports / feature requests** — [open a GitHub Issue](https://github.com/your-username/ferion/issues)
- **Connect with the author** — [LinkedIn](https://www.linkedin.com/in/u-k-r/) · [Reddit](https://www.reddit.com/user/mrujjwalkr/) · [Hacker News](https://news.ycombinator.com/user?id=valzor)

---

## License

MIT © [Ujjwal Kumar Rai](https://www.linkedin.com/in/u-k-r/)

See [MIT LICENSE](LICENSE) for details.
