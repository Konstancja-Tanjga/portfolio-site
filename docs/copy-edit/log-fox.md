# Edit log: FOX design system (`site/src/content/fox.ts`)

First pass, 11 October 2026, to the standard of `log-bi.md` and `docs/case-study-kit/RULES.md`: the opening as a `brief`, the opening's "what I did" as `points`, a new chapter 01a built from the constraints the evolution block already states, the pipeline from the meta strip as a `flow`, and the mechanical rules (em dashes, arrows, serial comma, contractions). No fact, number, or date was added. FOX is a practice study: a design system has no personas, no use cases and no sign-off chapter, so chapters 02, 04, 07, 08, 09 and 11 of the stack are not written. The existing chapter ids and numbers are kept; `opening` keeps its id because it is a hash target, and takes the number 00 and the heading "In short". Chapter "One component's API" (id `one-component`) keeps its title from the fix in dec8069. The title on the credit and the Role row is "Lead Designer, UX Engineer", because the study is at Asseco Solutions and runs to the present. The team of two senior designers dates from October 2026 and is not claimed here.

| Before | After | Rule |
| --- | --- | --- |
| what: "Around 80 components, six consuming products — and the pull requests I merge" | "Around 80 components, six consuming products, and the pull requests I merge" | 3.6 em dash; serial comma |
| lead: "across Angular, React and web components" | "across Angular, React, and web components" | serial comma |
| credit: "Design system owner · Asseco Solutions · 2023–2026" | credit: "Lead Designer, UX Engineer · Asseco Solutions · 2023–2026" | one title on every channel; 3.7 en dash kept for the range |
| { label: "Role", value: "Design system owner — I review and merge the component pull requests" } | { label: "Role", value: "Lead Designer, UX Engineer; owner of the design system. I review and merge the component pull requests" } | one title; 3.6 em dash |
| { label: "Pipeline", value: "Figma → Storybook → Chromatic → Nexus" } | { label: "Pipeline", value: "Figma to Storybook to Chromatic to Nexus" } | no arrows in prose |
| { label: "Period", value: "November 2023 – present" } | { label: "Period", value: "November 2023 to present" } | 3.7 no en dash as "to" in a meta value |
| { label: "Storybook", value: "Public — design-system-v1.assecosolutions.com" } | { label: "Storybook", value: "Public, design-system-v1.assecosolutions.com" } | 3.6 em dash |
| chapter `opening`, no number, no heading: one passage with "<strong>The problem.</strong> …", "<strong>What I did.</strong> …", "<strong>The result.</strong> …" (131 words) | chapter `opening`, n: "00", heading: "In short", kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome, Period and team | brief: the 30-second read; Context from the lead and the meta, Problem from "The problem", role and the three decisions from "What I did", Outcome from "The result" |
| "Every design system team knows the moment: the Figma library says one thing, the product says another, and nobody is sure which is right. Tokens are copied by hand, specs are rewritten for every ticket, and each release widens the gap." | key: "Problem", value: "The Figma library said one thing and the product another, and nobody was sure which was right. Tokens were copied by hand, specs were rewritten for every ticket, and each release widened the gap." | 1.4 narration in the past; 2.4 the generic opening cut |
| "I built FOX from nothing for APplus ERP and set it up so the two sides stay aligned: one token set…, every component mapped…, Storybook on Chromatic…, and handoff specs generated…" | key: "My role and scope" + Decision 1 (one token set, one build output), Decision 2 (Code Connect and Storybook on Chromatic), Decision 3 (the code is the system, from the v3.0 evolution row) | brief: the decisions as the three things to remember |
| "Around 80 components and six products on one system, migrated to v3 across product lines." | key: "Outcome", value: "Around 80 components and six products on one system, migrated to v3 across product lines. Handoff specs are generated from the design and pulled into Jira instead of written by hand." | brief: Outcome row; the generated specs moved here from "What I did" |
| (no Period and team row) | key: "Period and team", value: "November 2023 to present, as the owner of the system." | brief: Period and team; the file names no team |
| chapter 01: "<p>FOX is Asseco's, and it is public: the catalogue below is the live library, not a mock-up of it. <a …>…</a></p>" | the same passage with "<strong>the catalogue below is the live library</strong>", + points: One token set; Every component mapped; Storybook on Chromatic; Handoff specs generated | 2.6 the key phrase in bold; points: what I set up, as bullets with the claim in bold, from the opening's "What I did" |
| (chapter 01 had no standfirst) | standfirst: "The live library, and the four things that keep its two sides aligned." | a standfirst says what is on the page |
| caption: "Atoms, molecules and organisms in one navigation, published on Chromatic — the end of the pipeline the case study describes." | "Atoms, molecules, and organisms in one navigation, published on Chromatic: the end of the pipeline the case study describes." | 3.6 em dash; 3.4 colon amplifies; serial comma |
| (no chapter 01a) | chapter `hard-brief`, n: "01a", "Why this is a hard brief", points: Six products, three frameworks; Two artefacts claimed to be the component; A change meant asking six teams | RULES 01a: three constraints, hardest first, each a bold claim and one reason; every reason is a sentence from the v2.0 evolution row or the meta strip |
| chapter 02 points: "Shipped components live in code, as versioned packages." / "The Figma library mirrors them through variables and Code Connect." / "Storybook on Chromatic is the reference both design and engineering check against." | the same three items with the claim in bold | a bold claim leads each bullet |
| (chapter 02 had no standfirst and no flow) | standfirst: "Where the component lives, and what each stage of the pipeline hands on." + kind: "flow", stages: Figma; Storybook; Chromatic; Nexus | a sequence of stages is a `flow`; the stages are the Pipeline row of the meta strip, each body a sentence already in the file |
| costs: "The binding has to be maintained, and it silently rots when it isn't." | "…and it silently rots when it is not." | no contractions in running text (STYLE.md, LinkedIn edit) |
| (chapter 05 had no standfirst) | standfirst: "Three versions, and where the truth lived in each." | a standfirst says what is on the page |
| header comment (none) | header comment: what the study is, which chapters of the stack are not written and why, and that the three images are flat exports | the file says what it leaves out |

Not changed, and why:

- The title. The credit and the Role row now say "Lead Designer, UX Engineer" because the study is at Asseco Solutions and runs to the present; the file used to say "Design system owner", which is kept as the second half of the Role row. If the title on the contract for 2023 and 2024 differs, the credit should say so; flagged for Konstancja.
- The team. The file names no one besides the owner, so the "Period and team" row says only that. `bi.ts` says the migration from v2.3 to v3.0 was done with one other designer; that sentence is not carried here, because it is not in this file, its header, or the inventory. Flagged for Konstancja.
- "I built it from nothing and led its migration to v3" (lead) and "Around 80 components" and "November 2023" (meta, stats): the file's own numbers, kept as found; the CV source says the same.
- No cover `layers`, no `carousel`, no MacBook frames: the only images on record are three flat PNG exports of the live Storybook, and no image was created or deleted. The catalogue and the button API are shown on the wall as flat shots, as a Storybook page is.
- No personas, no `dossier` or `usecase`, no `joint`: a design system has no persona on record here, and the file holds no use case and no reflection. None was invented.
- Chapter 03 "Token architecture" stays a two-row `spec`: the rows are facts, not passages, and under 60 words.
- Chapter 06 "What it changed" keeps its stats; none of them is a measured result, and the chapter claims none.

## Layout pass, 13 October 2026

Against `docs/case-study-kit/RULES.md` sections 4 and 5, with `site/src/content/bi.ts` as the reference. One change: the catalogue in chapter 01 is shown in the MacBook mockup that already existed under `device/` and served as the cover art, because RULES 8 says not to use a flat screenshot where a mockup exists. Nothing else in the layout stack applies to the material on record, and no mockup was composited.

| Before | After | Rule |
| --- | --- | --- |
| `{ kind: "shot", width: "wall", src: "/work/fox-design-system/catalogue.png" … }` | `src: "/work/fox-design-system/device/catalogue-2400.webp", frame: "macbook"` | RULES 8: do not use a flat screenshot where a mockup exists |
| file header: "not device mockups" | header says the catalogue is in the mockup under `device/` and the button API stays flat | the comment matches the file |

Not done, and why:

- No cover `layers`: `layers` need four mockups, and only one single desktop screen exists. `button-api.png` (2400 by 2800) and `colors.png` (2400 by 3200) are scrolling captures of a Storybook page, not single screens; set into a 1.52 MacBook screen they would be bars of white around a strip of page.
- No `carousel`: four screens are needed and one exists.
- No `hotspots`, no `folded` shot: no audit, benchmark, or research screen and no diagram is on record.
- No `joint`, `loop`, `dossier`: the file holds no reflection, no use case, and no handoff cycle; the pipeline is already a `flow` in chapter 02.
- The button API page stays a flat shot, as a scrolling Storybook page is.

## AI-ready pass, 14 October 2026

The study now says what the inventory and the other studies already record: FOX is built for agents as well as people. No number, date, or result was added.

| Change | Source |
| --- | --- |
| New chapter 02a "Built for agents": points, a `loop`, the new-query clip, and rule 1 of the Big Hat agent skill as a `code` block | AGENTS.md, skills, Code Connect, MCP write-back, and review of every component change: `bi.ts` chapters 05, 06 and 09, `dms.ts` handoff loop. Four documentation layers and the Markdown pattern catalogue: inventory, September 2026. The clip is already published in `bi.ts`. The code block is copied verbatim from the public Big Hat repository |
| New chapter 02b "Finding the drift" | The Figma to Storybook mapping, naming fixes, and the code-only, design-only, and noise classes: inventory, October 2026. No count is stated, because none is on record |
| "In short": Problem, role, and Decision 1 to 3 rewritten to 25 words or fewer; Decision 3 is now "Built for agents"; the former Decision 3 merged into Decision 2 | RULES 2: each row at most 25 words |
| Chapter 01: a fifth point; standfirst says five things | Same sources as 02a |
| Chapter 01a: a fourth constraint, "Agents build UI too" | Stated as a constraint of the brief, not as an incident |
| Chapter 04: the fox-dialog `code` block | Copied from `bi.ts`, with its source |
| Meta: an "AI tooling" row; the Storybook row says the public link is the v1 line and v3.0 is internal | `bi.ts` code caption |
| what, lead, subline, stamp | Name the agent work on the surface the skimmer reads |

Open for Konstancja: v3.0 Storybook screenshots to replace the v1 exports; counts from the drift audit, with their source; an AGENTS.md excerpt, if the company allows it to be published.

## 14 October 2026, later

Chapter 01a "Why this is a hard brief" (id `hard-brief`) removed at Konstancja's request. Its points were the v2.0 costs, which the evolution block in chapter 05 still states, and the agent constraint, which the Problem row in "In short" still states. The hash `#hard-brief` no longer opens a chapter.

## v3.0 screens and drift audit, 14 October 2026

Six v3.0 screenshots supplied by Konstancja (`screenshots/fox-v3/`, the Nexus one with identifying values already blurred) replace the v1 exports, set into the MacBook mockup under `device/` at 1600, 2400, and full width, each cropped from the right to the screen's proportions. The drift figures are hers. No other fact, number, or date was added.

| Change | Source |
| --- | --- |
| Chapter 01: the catalogue mockup replaced by `v3-get-started`; the passage says the screens are the v3.0 Storybook, internal, and the public link is the v1 line; caption rewritten to what the screen shows | `fox-v3-get-started.png` |
| Cover `art` is `v3-get-started`; cover `shot` is `v3-colors` | The same screenshots |
| Chapter 02a: `v3-button-docs` after the points, caption on the Purpose, Use when, Avoid when, Common pairings, and Important limitations structure. Not cropped to hide "Key events:": the label sits inside the description line, and cutting it would cut Important limitations | `fox-v3-button-docs.png` |
| Chapter 02b: points name the six categories; a passage with the totals; a `stats` row with the six counts; a `spec` with the definitions and the source in its caption. "Behavior" spelt "behaviour" (British spelling). The "34 closed" line is not added, because it is not confirmed | Konstancja's FOX audit, July 2026 (the second of two, March and July). Year 2026 assumed from context; to be confirmed |
| Chapter 03: `v3-colors` after the spec; called scales, not semantic tokens | `fox-v3-colors.png` |
| Chapter 04: `button-api.png` replaced by `v3-list-extended-api`; the v1 fox-dialog code replaced by the v3.0 Default story, transcribed verbatim; source without a link; standfirst rewritten | `fox-v3-list-extended-api.png`, `fox-v3-dialog-code.png` |
| Chapter 05: `v3-nexus-versions` after the evolution block | `fox-v3-nexus-versions.png` |
| Removed: `colors.png`, `catalogue.png`, `button-api.png`, `device/catalogue-1600.webp`, `-2400.webp`, `-full.webp` | Replaced by the v3.0 images above |
| v1 links labelled: the "Design system" meta in `bi.ts`, `dms.ts`, `bph.ts`, `flow.ts`, `elly.ts` now ends "the link opens the public v1 Storybook"; the `bi.ts` fox-dialog source says "(public v1 line)". No v3 URL anywhere | Konstancja: v3.0 is internal and must not be linked |

Not done: AGENTS.md (step 5, skipped at Konstancja's request; the FOX agent rules stay internal).

### Review pass, 14 October 2026

A fact and style review of the branch. Fixed without new facts: "In short" rows Problem, Decision 1, Decision 3, and Outcome are one sentence each and under 25 words; "every change" narrowed to "every component change" in Decision 3, chapter 02a, and the loop, as the source says; "so the file does not drift from it" became "so the file follows the code", because 02b reports drift; chapter 01 says the Storybook screens are v3.0, not every screen; colons after labels in six captions became sentences; serial comma in the AI tooling row; nested series take semicolons; the 02b spec rows are parallel noun phrases; "5 that are noise" became "were"; the chapter 04 standfirst names both components; the Nexus caption says the side panel belongs to another package; the v1 Storybook labels end in a sentence of their own. The AI-ready pass row above that says "No count is stated" for 02b is superseded by the drift audit section.

Open for Konstancja: the audit year (2026 assumed); whether the July audit compared the Figma library with Storybook or the products with the library, since component and behaviour drift describe the products; the "four layers" bullet and Codex reading over MCP in 02a, which come from the first patch and are not on record in the repository.
