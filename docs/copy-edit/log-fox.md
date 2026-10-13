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
