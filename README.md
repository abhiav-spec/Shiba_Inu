# Shiba Inu Project

## Introduction
This is a React + Vite based interactive Shiba Inu (SHIB) themed website. It includes a 3D dog model experience, animated sections, live crypto market data, social links, and multiple pages (Home, About, Projects) with responsive UI.

## Contents Used in Development
- Frontend framework: React 19
- Build tool: Vite 7
- Routing: react-router-dom
- 3D rendering: three, @react-three/fiber, @react-three/drei
- Animation: gsap, @gsap/react, ScrollTrigger
- Charting: Chart.js (CDN)
- Icons: Remix Icon CDN
- Styling: Custom CSS in App.css and component styles
- Pages and components:
	- Home page with SHIB content, live chart, and live market panel
	- About page with SHIB overview and creator links
	- Projects page with completed, ongoing, and upcoming project cards
	- Reusable navbar and background music control
- Data APIs:
	- SHIB market chart (30 days): CoinGecko market_chart endpoint
	- SHIB live market stats: CoinGecko coin details endpoint
- Environment configuration:
	- VITE_API_KEY
	- VITE_SHIB_CHART_URL
	- VITE_SHIB_STATS_URL
- Media and static assets:
	- 3D model files and textures in public/models and public/matcap
	- Background images and section images in public/
	- Music file in src/assets
	- Brand/logo image in src/assets
- Tooling:
	- ESLint with React hooks and React refresh plugins
	- npm scripts: dev, build, lint, preview

## Features
- Interactive 3D SHIB-themed hero with scroll-based transitions
- SHIB live market data panel with auto refresh every 10 seconds
- SHIB 30-day price line chart with smooth animation
- Responsive layout for desktop and mobile
- Background music control (play/pause)
- External links for project references and social profiles

## Project Structure
- src/pages/Home.jsx
- src/components/About.jsx
- src/components/Projects.jsx
- src/components/Dog.jsx
- src/components/DogAbout.jsx
- src/components/Navbar.jsx
- src/components/BackgroundMusic.jsx
- src/App.jsx
- src/App.css

## Run Locally
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Notes
- The `.env` file is ignored by git. Keep API keys there.
- If port 5173 is in use, Vite may auto-switch to another port.
