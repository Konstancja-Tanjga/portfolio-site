# Portfolio — Konstancja Tanjga-Nawrot

Vite + React + TypeScript. Three case studies (Analytics, Documents, Elly), an
earlier-work index, and an about page. No CSS framework: everything is driven
from a token layer so you can swap in the real FOX tokens.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then builds to dist/
npm run preview  # serve the production build locally
```

## Deploy

Push to GitHub, then import the repo in Vercel. Framework preset: Vite. Build
command `npm run build`, output directory `dist`. `vercel.json` already contains
the SPA rewrite, so `/work/applus-analytics` resolves on a hard refresh.

## Where to edit what

| What you want to change | File |
|---|---|
| Colours, type scale, spacing, layout widths | `src/styles/tokens.css` |
| Everything visual | `src/styles/app.css` |
| Case study text and structure | `src/content/bi.ts`, `dms.ts`, `elly.ts` |
| Earlier work list | `src/content/index.ts` |
| Order of the work index | `cases` array in `src/content/index.ts` |
| Nav, footer, contact details | `src/components/Shell.tsx` |

A case study is data, not markup. Each one is a list of sections, and each
section is a list of blocks: `prose`, `list`, `figure`, `stats`, `pull`. Adding a
section means adding an object, not writing a component.

## Before you publish

1. **Storybook link is live.** The footer points at
   `https://konstancja-tanjga.github.io/bighat-design-system/` — the Big Hat
   design system, which is yours and public (MIT). FOX belongs to Asseco, so do
   not link it here.
2. **Drop in images.** Every `figure` block currently renders a dashed slot with
   a note about what belongs there. Put exports in `public/` and change
   `{ kind: "figure", slot: "..." }` to `{ kind: "figure", src: "/analytics-home.png", caption: "..." }`.
3. **Fill the TODOs.** Search the `src/content` folder for `TODO` — there are
   four, and they are the sections a hiring manager reads most closely.
4. **Decide what to do about the gate.** See below.

## About the gate on Analytics and Documents

`src/components/Gate.tsx` is **obscurity, not security**. The check runs in the
browser and the case-study text ships inside the JavaScript bundle, so anyone who
opens devtools can read it. It stops a page being indexed and casually stumbled
on. That is all it does.

Both products release on 5 October 2026. Until then, pick one:

- Keep the content out of the repository and publish only the title, the role and
  a "case study on request" line.
- Turn on Vercel password protection for the whole deployment.
- Publish a request-access page and send the PDF yourself.

The passphrase is currently `fox`, in plain text in the component. Change it or
remove the component once the products are out.
