# Weather App

A single-page weather app in React 19 and Vite, at the stage where the UI shell is on screen and
nothing is live yet. It is for anyone who wants to watch a small React app go from static markup to
real data one commit at a time, and for me to practise the plumbing (fetching, loading and error
states, remembering a choice) in a project small enough to read in one sitting. So far it shows one
thing: a component tree laid out and styled, waiting for data.

[![React](https://img.shields.io/badge/React-19.2-61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF)](https://vite.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39-4B32C3)](https://eslint.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E)](#tech-stack)

> **Live demo:** _none_ (runs locally) · **Status:** work in progress, untouched since the last commit (`Added UI`, 22 Feb 2026)

## Contents

- [Where it stands](#where-it-stands)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Roadmap](#roadmap)
- [Known limitations](#known-limitations)
- [Related](#related)
- [License](#license)

## Where it stands

Three components render in a column, top to bottom:

- **`NavBar`**: a dark bar with the heading *Weather App*.
- **`MainIcon`**: a 150 px sun image (`src/assets/sun.png`), an empty `<h2 id="location">`, the
  literal text `25°C` and `Sunny`, then a text input with the placeholder *Enter city name* and a
  **find my city** button. The button has no click handler and nothing reads the input.
- **`HourlyForecast`**: a paragraph that says *Hourly Forecast*, and nothing else.

There is no state in use (the one `useState` is an unused template leftover), no effect, no fetch and
no router. Every value on screen is written into the JSX. `index.html` loads `src/main.jsx`, which
renders `App` inside `StrictMode`, and `App.jsx` stacks the three components inside
`div.app-layout > main.content`. Next is live data from a weather API; which API is still to be chosen.

## Tech stack

| Layer | Choice |
|---|---|
| UI | React 19.2, JSX in plain JavaScript (no TypeScript) |
| Build | Vite 7.3 with `@vitejs/plugin-react` 5.1 |
| Styling | Two plain CSS files, no preprocessor or framework: `src/index.css` (the template base: system font, dark default, a light-mode media query) and `src/App.css` (a token sheet for type and a 4 px spacing scale, plus the component classes). `index.css` loads first, so `App.css` wins where they overlap. |
| Lint | ESLint 9.39 flat config: `@eslint/js` recommended, `eslint-plugin-react-hooks` 7, `eslint-plugin-react-refresh` 0.4, browser globals |

Versions are the ones resolved in `package-lock.json`. There is no data layer yet.

## Getting started

Needs **Node.js `^20.19` or `≥ 22.12`** (Vite 7's engine range) and npm. No API key, no `.env`, no backend.

```bash
git clone https://github.com/Robotbino/weatherApp.git
cd weatherApp
npm ci
npm run dev
```

Open **http://localhost:5173**. `vite.config.js` sets no port, so if 5173 is busy Vite moves to the
next free one and prints it.

## Scripts

```bash
npm run dev       # dev server with HMR
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # eslint .
```

There is no test script and there are no spec files. `npm run lint` is the only check.

## Project structure

```
index.html                 # Mounts src/main.jsx; the tab title is still "weather-app"
vite.config.js             # React plugin only, no port or proxy
eslint.config.js           # Flat config (see Tech stack)
public/vite.svg            # Template favicon
src/
├── main.jsx               # createRoot + StrictMode; imports index.css
├── App.jsx                # NavBar → MainIcon → HourlyForecast inside .app-layout > .content
├── App.css                # Tokens and component classes
├── index.css              # Template base styles
├── assets/                # sun.png (the one weather icon, 512 × 512) and react.svg (template leftover)
└── components/
    ├── NavBar.jsx
    ├── MainIcon.jsx
    └── HourlyForecast.jsx
```

## Roadmap

- [x] UI shell: `NavBar`, `MainIcon`, `HourlyForecast` placeholder
- [ ] Choose a weather API
- [ ] Current conditions from live data, with the location heading filled in
- [ ] Hourly forecast
- [ ] Loading and error states
- [ ] Remember the last city

## Known limitations

- **Nothing is live and the search does nothing.** `25°C` and `Sunny` are literals in `MainIcon.jsx`,
  the `#location` heading is empty, the input is uncontrolled and the button has no handler.
- **`MainIcon.jsx` calls `document.getElementById` five times during render** and assigns the results to
  variables nothing uses. One looks for `locationInput`, but the input's id is `city-input`.
- **Template leftovers, and `npm run lint` fails on them.** `App.jsx` still imports `reactLogo` and
  `viteLogo` and keeps the template's `const [count, setCount] = useState(0)`, none of which it uses;
  `App.css` keeps the template's `.logo` and `logo-spin` rules. `no-unused-vars` is `error` and ignores
  only names that start with a capital letter or an underscore, so those unused bindings are lint errors,
  as are the five unused lookups in `MainIcon.jsx` above. The favicon is still Vite's.
- **Four CSS custom properties are used but never defined:** `--text-4xl` and `--text-3xl` (the `h1`/`h2`
  sizes) and `--space-lg`/`--space-xl` (the `.content` padding). Those declarations still win the cascade
  and then resolve to `unset`, so the `h1` renders at the inherited 16 px rather than `index.css`'s
  `3.2em`, and `.content` has no padding.
- **Not responsive, not tested, not deployed.** `.input-section` is a fixed 500 px wide; there are no
  breakpoints, no test runner and no CI.

## Related

- [Robotbino on GitHub](https://github.com/Robotbino): profile and the other projects.
- [`Robotbino/gameStore`](https://github.com/Robotbino/gameStore): React 19 and Vite again, but in TypeScript and
  backed by a separate API; much further along.

## License

MIT. See [`LICENSE`](LICENSE).
