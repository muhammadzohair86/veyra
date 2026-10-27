# Veyra: VR Headset Product Website

A single-product website for the Veyra virtual reality headset, built with React and Vite.
It is a frontend-only portfolio demonstration: there is no backend, database, authentication or payment system.

## Features

- Responsive layout for desktop, laptop, tablet and mobile
- Hero, product highlights, interactive image gallery, design close-ups, specifications, FAQ and a demo reserve form
- Accessible navigation: skip link, mobile menu, keyboard-operable tabs and accordion, visible focus states
- Respects the `prefers-reduced-motion` setting
- All content lives in one data file, so copy and specifications are easy to update

## Tech stack

- React 19
- Vite 7
- Plain CSS (design tokens in `src/styles/global.css`, one stylesheet per section)

## Getting started

Requirements: Node.js 20.19 or newer (22 recommended) and npm.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build     # creates the production build in dist/
npm run preview   # serves dist/ locally to check the production build
```

## Project structure

```
index.html              Document shell, metadata, font links
public/favicon.svg      Favicon
netlify.toml            Netlify build settings
src/
  main.jsx              Entry point
  App.jsx               Page composition
  data/content.js       All copy, navigation, specifications and FAQ
  assets/img/           Product images
  components/           Header, Hero, Highlights, Gallery, Design, Specs, Faq, Reserve, Footer, Reveal, Logo, Icons
  styles/               global.css plus one stylesheet per section
```

## Editing content

Almost everything you read on the page comes from `src/data/content.js`.

- **Specifications:** the site only states what the product images show. Technical figures
  (display, field of view, battery, weight and so on) are listed as "Unspecified". When you have
  verified figures, move them from `SPECS.unspecified` into `SPECS.confirmed`.
- **Design close-ups:** each one is a crop of the main product image, controlled by the `crop`
  values (`zoom`, `x`, `y`) in `DESIGN.details`.
- **Images:** replace the files in `src/assets/img/` and update the imports at the top of
  `content.js`. Confirm you have the right to publish any image you use.

## The reserve form

The form in the final section validates the email address in the browser and then shows a
confirmation message. It does not send, store or process anything.

## Deploy

### 1. Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

`node_modules/` and `dist/` are excluded by `.gitignore`.

### 2. Deploy on Netlify

1. In Netlify, choose **Add new site** then **Import an existing project** and connect your GitHub repository.
2. The settings are read from `netlify.toml`. If prompted, use:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy**. Every push to `main` redeploys the site.

Alternatively, run `npm run build` and drag the `dist` folder onto the Netlify dashboard.

The site is a single page with anchor links, so no redirect rules are needed. The Vite
`base` is set to `./`, so the build also works from a sub-path such as GitHub Pages.

## Fonts

The page loads Instrument Sans and Instrument Serif from Google Fonts. If the font request
is blocked, it falls back to system fonts and remains fully usable.
