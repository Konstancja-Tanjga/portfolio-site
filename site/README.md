# Portfolio — build and deploy

Vite + React + TypeScript. No CSS framework: every page renders from the
components in `src/system`, and every value in those components comes from
`src/styles/tokens.css`.

See the [repository README](../README.md) for what the site is and how the
content model works.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks, then builds to dist/
npm run preview   # serve the production build locally
```

## Where to edit what

| What you want to change | File |
|---|---|
| Colours, type scale, spacing, layout widths, wall rhythm | `src/styles/tokens.css` |
| How a component looks | `src/styles/app.css` |
| How a component behaves | `src/system/` |
| A project's text and structure | `src/content/<slug>.ts` |
| Which projects are listed, and in what order | `cases` in `src/content/index.ts` |
| Whether a project is listed at all | `status` in its content file |
| Earlier work, without a wall | `earlier` in `src/content/index.ts` |
| Nav, footer, contact details | `src/components/Shell.tsx` |

## Adding a project

Copy `src/content/xecta.ts`, change the slug, and add it to the `cases` array in
`src/content/index.ts`. That is the whole job — the route, the card on the work
page, the jump bar and the next-project link all come from the data.

`src/content/bi.ts` is the fullest example: it mirrors the Figma wall section for
section, and it uses every block type. Read it before writing a new one.

## Images

```
public/work/<slug>/01-home.png
public/work/<slug>/02-detail.png
```

The number is the wall order, so reordering is renaming. Then swap the slot for a
source in the content file:

```ts
// before
{ kind: "shot", width: "wall", slot: "Home — favourite dashboards. 2400px." }
// after
{ kind: "shot", width: "wall", src: "/work/applus-analytics/01-home.png",
  caption: "Home — favourite dashboards and analyses." }
```

Rules that keep eight long walls loadable:

- **Six to twelve shots per project.** A thirty-shot wall isn't more impressive,
  it's unread. If a shot doesn't earn a sentence of text, cut it.
- **The first shot must carry the project alone** — half of all visitors will see
  only that one.
- **Export at 2400px wide** for `wall` and `bleed`, and keep each file under about
  400 KB. PNG for flat UI, JPEG or WebP for anything photographic. Compress
  everything. Eight projects × ten uncompressed 2400px PNGs is 200 MB and a site
  that feels broken.
- **The eight covers are one set.** Same aspect ratio, same treatment, real UI
  cropped tight on the yellow field. If the covers read as a system, the site does
  too.

### The About page

`public/about/` holds the two images that page wants, and they are the only
images outside `public/work/`:

```
public/about/portrait.jpg      the photograph — 4:5, 858x1073, under 250 KB
public/about/process.png       idea to published prototype — column, 2304px wide
```

The portrait is cropped to 4:5 by CSS whatever it is, so give it 4:5 and put the
face in the upper half. The diagram is drawn in Claude Design and exported at
2304px — 2x the width it renders at, so it stays crisp on a retina screen.

Until a file lands, the block renders its `slot` label instead, so the page is
walkable while empty. When one arrives, add the `src` beside the slot in
[`src/content/about.ts`](src/content/about.ts) — the same swap as a project shot,
and the slot label names the file it is waiting for.

## Held projects

A project whose product hasn't been released carries:

```ts
status: {
  state: "held",
  until: "5 October 2026",
  why: "The product is generally available then; until it is, the reasoning is here and the screens are not.",
}
```

Held projects are left off the work page and out of the previous/next chain. Their
URL still resolves, so the wall can be sent to someone directly. On release day,
change `status` to `{ state: "live" }` and drop the PNGs in.

There is no passphrase gate and there should not be one: a client-side check ships
the content it is hiding inside the JavaScript bundle, and the audience for this
site will find that within a minute.

## Deploy — Vercel

`vercel.json` already carries the SPA rewrite, so `/work/applus-analytics`
resolves on a hard refresh rather than 404ing.

**One important setting: the root directory is `site`, not the repository root.**

### Option A — Git integration (what to use long term)

1. Push the repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Set **Root Directory** to `site`. Framework preset: **Vite** (build
   `npm run build`, output `dist` — both detected automatically).
4. Deploy.

Every push to the default branch then redeploys production, and every branch and
pull request gets its own preview URL — useful for showing a wall to one person
before it goes on the work page.

### Option B — from the terminal, right now

```bash
cd site
npx vercel          # first run: log in, link the project, deploy a preview
npx vercel --prod   # promote to the production URL
```

Run it from `site/`, and the root-directory question answers itself.

### Domains

The free deployment lands on `konstancja-tanjga.vercel.app`. A custom domain is a
DNS record in Vercel's dashboard and nothing else.

Note that `konstancja-tanjga.github.io/bighat-design-system` is GitHub Pages and
stays there — Storybook on Pages, the portfolio on Vercel is a clean split. If the
portfolio should live on `konstancja-tanjga.github.io` instead, Pages needs
`dist/index.html` copied to `dist/404.html` to stand in for the rewrite, plus a
publish workflow; Vercel is less work for a router-driven site.

## Before publishing

1. **Fill the TODOs.** `grep -rn TODO src/content` — these are the paragraphs a
   hiring manager reads most closely, and they are the whole value of the site.
2. **Drop in the covers.** Eight of them, as one set. Nothing matters more.
3. **Check the work page on a phone.** The covers are the page.
