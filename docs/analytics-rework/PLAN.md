# APplus Analytics: rework to Lead-Designer standard — plan

Branch `feat/analytics-lead-standard`, from `main`. Nothing exported or
recorded yet; this is the checklist the brief asked for before either.

## 0. Findings that change the plan

- **Two frame sizes in Figma.** Nine device frames are 2530 × 1483; HOME
  (`278:26883`), Dashboards (`278:27366`) and Analysis (`278:26387`) are
  2016 × 1182, a smaller instance of the same composite. At 2× they export at
  4032 px, still sharp, but the bezel scale differs. I will normalise by
  exporting the `Top` child (lid + screen) of every frame and composing the
  base in CSS, so all twelve share one bezel.
- **The "Macbook Pro" label** is a text layer drawn on the laptop base, under
  the lid. The MCP cannot hide a layer. Exporting the `Top` child drops it
  without a crop; that is the primary route. Fallback: export the whole frame
  and paint the label out with a flat fill sampled from the base.
- **Language.** The probe render of `278:23693` has English chat but German
  table and headline text ("Umsatz 2024–2025 nach Kategorie"). The brief says
  English only. Either the frames get an English variant in Figma, or the
  captions say the data layer is German. Question 2 below.
- **Prototype location.** The brief refers to a running prototype for the
  four clips. It is not linked from `bi.ts`. Question 3.
- **Uncommitted work in the main checkout.** The `portfolio site` working
  tree (branch `feat/raptors-big-hat-4-9`) carries 838 uncommitted lines in
  `bi.ts` plus deleted wall PNGs. This branch starts from `main`; if that
  uncommitted text is newer, it has to be committed first. Question 1.

## 1. Asset inventory (node → file → chapter)

| Node | Screen | Export | Web file | Replaces | Chapters |
| --- | --- | --- | --- | --- | --- |
| 278:23693 | AI Data Analyst, detail thread open | Top child, 2× | `device/analyst-thread.webp` + full-res | `hero-analyst.png`, `analyst-thread.png` | 01 hero, 08 |
| 278:23859 | Analysis Chat, main thread | Top child, 2× | `device/analyst-chat.webp` | `analyst-preview.png` | 07 |
| 278:26276 | Analysis Chat, EMEA week 9 with applied note | Top child, 2× | `device/analyst-applied.webp` | — | 13 closing (01 uses 23693) |
| 278:26883 | HOME | Top child, 2× (2016-size frame) | `device/home.webp` | `home.png` | 07 |
| 278:27366 | Dashboards | Top child, 2× (2016-size frame) | `device/dashboards.webp` | `dashboards.png` | 07 |
| 278:26387 | Analysis gallery | Top child, 2× (2016-size frame) | `device/analysis.webp` | `analysis.png` | 07 |
| 278:25561 | Data Models, empty builder | Top child, 2× | `device/models-empty.webp` | `models-empty.png` | 10 |
| 278:25371 | Data Models, relationship connector | Top child, 2× | `device/models-relationship.webp` | `models-relationship.png`, `data-models.png` | 10, 07 |
| 278:24948 | Data Models, add first query (variant) | inspect first | `device/models-select.webp` | `models-select.png` | 10, only if it shows the query shelf |
| 278:25737 | Queries, state 1 | Top child, 2× | `device/queries-shelf.webp` | `queries-shelf.png` | 09 |
| 278:26086 | Queries, state 2 | Top child, 2× | `device/queries-card.webp` | `queries-card.png` | 09 |
| 278:25145 | Settings | Top child, 2× | `device/settings.webp` | `prototype.png`, `settings.png`, `queries-settings.png` | 05, 07, 09 |
| diagrams | audit-1, audit-2, thread-diagram, tpl-main/menu/sheet/split/enlarged, models-anatomy | re-export 2× from their own nodes (to locate) | same names, `.webp` | current soft PNGs | 03, 06a, 08, 10 |

Rules applied to every export: 2× only, never upscaled; WebP q85–90 for the
page at 1600 and 2400 px widths with `srcset`/`sizes`; full-res WebP for the
lightbox; page files under 600 KB; old PNGs deleted only after
`npm run check` passes with the new references.

Missing from Figma, kept as flat shot in the CSS device frame and listed in
the final report: query detail with the Governance panel (if chapter 09
needs it); anything `278:24948` turns out not to show.

## 2. Content model additions (`types.ts` + `system/`)

1. `frame?: "macbook" | "none"` on `Shot`, rendered by a new `Device.tsx`:
   screen image inside a CSS bezel, on a tinted backdrop from site tokens
   (`--bh-well`), both colour modes, explicit `width`/`height`, `srcset`.
2. `hero` block: full-bleed device, one kicker line, used once at the top of
   chapter 01.
3. `compare` block: before/after with labels, for the Lovable prototype beside
   my screen of the same place, in chapter 03/04.
4. `matrix` block: rules × surfaces grid for chapter 06b (nine rules against
   the controls they govern).
5. `Lightbox.tsx` receives `full` (high-res source) separately from `src`.
6. `video` block gains `loop`, `muted`, `autoplay` on viewport entry
   (IntersectionObserver), pause on exit, `playsInline`, visible play/pause,
   `preload="none"` with poster, reduced-motion → poster + play button, and
   explicit dimensions.

All with comments in the existing voice of `types.ts`.

## 3. Copy changes (`bi.ts`)

- 00 In short → TL;DR rows: Context (dev3 replaced), Problem, My role and
  scope, Three decisions, Outcome, Period/team, Launch (Vision Days 22 Sep
  2026; GA Oct 2026), Product context (ERP System of the Year 2025 and 2026,
  UX category).
- 03/04: I audited the PM's prototype; seven questions → seven rules; eight
  SME sessions run by me (no researcher on the team); weak options killed in
  the room. Before/after compare here.
- 06b: matrix block + keep the "three things the rules changed" table.
- 07: close-up crop of the documentation band (SRS ref, REQ, date, status,
  sign-off).
- 11/12: artefacts of post-handoff work: redacted PR review comment beside the
  preview build; design-QA checklist; Storybook story beside its Figma
  counterpart with Code Connect; redacted reconcile diff. Where not showable,
  a one-line caption saying it is internal and what it contains.
- Handoff wording everywhere: concepts in Claude Design, design in Figma,
  handoff through Dev Mode, Code Connect and Storybook. Remove any sentence
  saying prototype code goes into implementation or that development
  "receives working FOX code". Keep: I own the FOX component API and tokens
  and review every pull request into the library. Rewrite the 01 pull quote,
  05, 11 and the "Code → product" row.
- 13: add "What I would do differently", two or three sentences with a real
  trade-off. Keep the measurement plan.
- Captions: name what is shown and the decision it demonstrates; no
  "screenshot of"; no marketing adjectives.

## 4. Clips (only where prototype = mockup)

| # | Chapter | Record? | Condition to check first |
| --- | --- | --- | --- |
| 1 | 08 UC-01, detail thread → Apply | pending | prototype state matches `278:23693`/`278:26276`: same shell, data, English |
| 2 | 06a/06b R2, side sheet reflow | pending | prototype side sheet matches the chapter 06 stills |
| 3 | 10, relationship drag refused/accepted | pending | prototype canvas matches `278:25371` |
| 4 | 06a R6, enlarge and back | optional | as 2 |

Recording spec from the brief: 1920 × 1200 at DPR 2, light mode, calm cursor,
no chrome, one action per 1.5–2 s, 1 s hold at both ends, cropped to the app
viewport, composed into the same bezel; MP4 H.264 CRF 23 + WebM VP9, 1–3 MB,
WebP poster from the first frame.

## 5. Verification (before the report)

`npm run check`, `npm run build`; serve `dist/` under `/portfolio-site/`;
Playwright at 390 / 1280 / 1920, light and dark; three lightbox opens at
full resolution; Lighthouse ≥ 90 performance, 100 accessibility, no CLS;
keyboard-only pass; reduced-motion check on clips; each clip at 1× and 0.5×
against its still; 30-second read-through written into the report.

## Questions before I export anything

1. The main checkout has 838 uncommitted lines in `bi.ts` on
   `feat/raptors-big-hat-4-9`. Is that newer than `main`, and should it be
   committed first so this branch builds on it?
2. The device frames mix English chat with German table text. Should I wait
   for English variants in Figma, or caption the German data layer as such?
3. Where does the running prototype live (repo or URL), and does it have the
   three states in the clip table in English with the same data as the
   mockups?
4. Chapter 11/12 artefacts: which of the four (PR review comment, QA
   checklist, Storybook + Code Connect pair, reconcile diff) can be shown
   redacted, and where do I find them?
