# Edit log: Best Practice Hub (`site/src/content/bph.ts`)

One pass, 11 October 2026, against `docs/STYLE.md` and the section stack in `docs/case-study-kit/RULES.md`: "In short" as a `brief` (Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team), every passage over 60 words as one lead sentence plus `points`, the exploration chapter as a `flow`, the two use cases folded into one chapter with a `dossier` (ids `uc-search` and `uc-install` kept as hash targets), the audit screen with `hotspots`, the benchmark `folded`, and "What I would measure next" as a `joint`. The chapters are renumbered to the stack (00, 01, 01a, 02 to 08, 10) and keep their ids. The title becomes "Lead Designer, UX Engineer" because the work is at Asseco Solutions and shipped in 2025; the team of two senior designers is not claimed. No number, date, quote, or result was added. No "What would I do differently" joint: the file has none. No personas block: the two audiences are on record as roles, not as people with quotes and goals, so they stay a `spec`. No handoff chapter: nothing on record beyond the library-first rule in chapter 06. No image file was created or deleted.

| Before | After | Rule |
| --- | --- | --- |
| lead: "…a catalogue you can narrow, judge and install without leaving the screen." | lead: "…a catalogue you can narrow, judge, and install without leaving the screen." | 3.5 serial comma |
| credit: "Lead Product Designer · Asseco Solutions · 2024–2025" | credit: "Lead Designer, UX Engineer · Asseco Solutions · 2024–2025" | one title on every channel; Asseco, shipped 2025 |
| { label: "Role", value: "Lead Product Designer, sole designer on the product" } | { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" } | one title; plain words |
| { label: "Product", value: "APplus ERP — Best Practice Hub" } | { label: "Product", value: "APplus ERP, Best Practice Hub" } | 3.6 em dash |
| { label: "Design system", value: "FOX, which I own; the v2.3 → v3.0 migration done with one other designer" } | { label: "Design system", value: "FOX, which I own. The migration from v2.3 to v3.0, with one other designer" } | no arrow in prose; same wording as bi.ts |
| { label: "Team", value: "2 developers, an architect, a requirements engineer, a PM and one designer" } | { label: "Team", value: "Six: two developers, an architect, a requirements engineer, a PM, and me" } | 3.5 serial comma; number in words; the count from the stats block |
| { label: "Period", value: "August 2024 – August 2025, thirteen months; shipped" } | { label: "Period", value: "August 2024 to August 2025, thirteen months" } + { label: "Launch", value: "Shipped inside APplus ERP" } | 3.7 no en dash as "to"; Launch row of the meta strip |
| (no Product context row) | { label: "Product context", value: "APplus: ERP System of the Year 2025, Gold in the User Experience ERP category" } | meta strip: product context, from the file's own results passage |
| kind: "spec", rows: Problem, My part, Decision 1..3, Evidence, Shipped | kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome, Period and team | brief: Context from chapter 01, Outcome from Evidence plus Shipped, Period and team from the meta |
| key: "My part", value: "The audit of the old modal, the benchmark, …" | key: "My role and scope", value: "The only designer on the product, with two developers, an architect, a requirements engineer, and a PM. The audit of the old modal, …" | brief: role and team in one row |
| key: "Evidence" + key: "Shipped", value: "Yes, inside APplus ERP." | key: "Outcome", value: "Shipped inside APplus ERP. Evidence before release: … Use after release was not measured." | brief: a result that was not measured is said to be not measured |
| chapter 01: passage + one `shot` of the grid | chapter 01: the passage with "a library of ready-made process templates inside APplus ERP" in bold, `points` (what I owned, from "My part"), `carousel` of three slides (catalogue, template, installed boards) | section stack 01: points + carousel |
| "for purchasing, production, warehousing and accounting" | "for purchasing, production, warehousing, and accounting" | 3.5 serial comma |
| chapter "hard-brief" n "02", two passages (69 words) | n "01a", lead sentence "A template lands in a system that is already running a company's processes…" + `points`: the install could not cost one step more; every template has versions; each version has its own documentation | 2.3.2 itemisation; sub-chapter lettered |
| standfirst: "APplus runs at over 2,000 customers, mostly mid-sized manufacturers with 50 to 1,000 employees." | "…over 2 000 customers, … 50 to 1 000 employees." (thin space) | 3.5.3 thin space in thousands |
| chapter "audit" n "04" "Audit and research": shot, passage (97 words), benchmark shot, spec | n "03" "Discovery and research": lead sentence + `points` (six columns; the audit in place; the benchmark; reviews), benchmark `folded` | section stack 03; 2.3.2 itemisation; diagrams folded |
| caption: "Benchmark: how a comparable library handles its catalogue, updates and installs, step by step." | caption: "Benchmark, step by step: how the Adobe Creative Cloud desktop app lists its catalogue, announces updates, and runs an update with a confirmation dialog." | section 5: what to look at; the product is legible in the image |
| (old-modal shot and the findings spec inside the audit chapter) | chapter "what-the-audit-asked" n "04": the old-modal shot with four `hotspots` (no entry point; nothing searchable; the unlabelled dot; the version dropdown) + the findings spec | section stack 04: questions pinned to the screen that raised them |
| caption: "…one table in a modal, a version dropdown on every row, status as a coloured dot with no label." | caption: "…one table in a modal, a version dropdown on every row, and status as a coloured dot with no label." | 3.5 serial comma |
| chapter "exploration" n "05" "Exploration": one passage (101 words) | n "05" "First prototypes": `flow` of three stages (an entry point; narrowing the catalogue; what one item must say) with the nine German tags as the note | section stack 05; a sequence of stages is a flow |
| chapter "design-system" n "09": passage (66 words) + tools spec | n "06": lead sentence + `points` (three pieces are the Hub's own; the rest is FOX; library first, product second) + tools spec | section stack 06; 2.3.2 itemisation |
| "Anything the Hub needed that 3.0 did not have yet was proposed, built and published in the library first" | "…was proposed, built, and published in the library before the product used it" | 3.5 serial comma |
| chapter "concept" n "06" "Design concept": passage (86 words) + concept shot | n "07" "Design and sign-off": lead sentence + `points` (an installed board; its documentation language; an available board; the sort rule) + concept shot + `duo` of the two signed-off device screens | section stack 07; 2.3.2 itemisation; the signed-off screens shown as signed off |
| chapter "uc-search" n "07" and chapter "uc-install" n "08", each one `usecase` | chapter "use-cases" n "08" "Two use cases" with a `dossier` of two tiles, ids `uc-search` and `uc-install`, each with cover, maxim (the rule), standfirst (the goal), a shot, and the use case | dossier: two use cases behind one row of tiles; ids keep the deep links |
| why: "AND or OR is a product decision, but it cannot change depending on which chip was clicked. If the same selection returned different results in two places, nobody could trust the filter." | why: "Rejected: a filter whose logic depends on which chip was clicked. AND or OR is a product decision, but if the same selection returned different results in two places, nobody could trust the filter." | section 3: name the rejected alternative; the alternative is the one the sentence already rejected |
| why: "Direct installation into the Board Designer had to keep working as it did. The detail view puts version and action next to each other so that judging a template does not add a step to installing it." | why: "Rejected: a detail view that separates judging a template from installing it. Direct installation into the Board Designer had to keep working as it did, so version and action sit next to each other." | section 3: name the rejected alternative; restated from the same sentence |
| stats: { value: "2,000+" }, { value: "13", label: "months, August 2024 – August 2025" } | { value: "2 000+" }, { label: "months, August 2024 to August 2025" } | 3.5.3 thin space; 3.7 |
| "<p>APplus was named ERP System of the Year 2025 … Product figures are public: applus-erp.de and cobus-concept.de/produkte/applus. Project figures are mine.</p><p><strong>What I would measure next.</strong> How long an install takes …; how many installed boards with “update available” are actually updated; and which process-area tags people filter by…</p>" | passage: the award sentence only, with the award in bold; the sources moved to the chapter standfirst; `joint` "What will I measure next, and how?" with three answers, each led by a bold claim | joint: a reflection becomes a joint; 2.4 "actually" cut; 3.16 no slash path in prose |

Not changed, and why:

- UC-01 has no `exits`, no actor `note`, and no `ruleNote`. The file never had them, and inventing two exits for a search is a guess about the product. The type keeps `exits` optional.
- The two audiences in chapter 02 stay a `spec`, not `personas`: a persona card needs a quote, goals, a breaking point, and a must, none of which is on record.
- The cover has no `layers`: two device WebPs exist (`grid`, `detail`) and the kit asks for four to six. No file was created.
- `concept.png` is a flat export of a prototype screen, not a device WebP, so it carries no frame.
- The en dash in the credit "2024–2025" stays: 3.7 allows it for an inclusive range in a label.

Unresolved facts, for Konstancja:

- The award. This file says ERP System of the Year 2025 and Gold in the User Experience ERP category, 13 October 2025. `bi.ts` and `log-elly.md` carry "2025 and 2026" and the German name "ERP-System des Jahres". `INVENTORY.md` lists the year as a disagreement. The Product context row here states 2025 only, as this file does. One answer, then every APplus study says the same thing.
- The grid device screen (`device/grid-2400.webp`) shows "Explore Solutions" and "Installed" as tabs with a "Filter hub" field, while `concept.png` shows "Installed Best Practice Hub boards" as a list with a search field and a "Filter and sort" select. Both are on the page as concept and signed-off screen; if the device screen is not the signed-off version, the duo caption in chapter 07 is wrong.
- "Over 50 field-tested Flowboard templates" and "30 years of APplus in the ERP market" are product figures from applus-erp.de and cobus-concept.de, per the file header. Not re-verified here.
- The benchmark caption now names Adobe Creative Cloud, because the product is legible in the image. If the benchmark covered more products than that one board, the caption understates it.
| { label: "Product context", value: "APplus: ERP System of the Year 2025, Gold in the User Experience ERP category" } | { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" } | brief: the award row carried on every APplus study, both years (confirmed fact) |

## Layout pass, 13 October 2026

Against the layout, microinteractions, and motion of `bi.ts`: a `stats` row and hotspots on the benchmark in chapter 03, and an `evolution` of the two FOX versions the project ran on in chapter 06. The four hotspots on the old modal were checked by rendering them on the image: each sits on the control it names. No image file was created or deleted.

| Before | After | Rule |
| --- | --- | --- |
| chapter 03: points, then the folded benchmark | `stats` between them: 6 columns in the old table; 5 audit findings, each answered in chapter 04; 1 product benchmarked; 9 process-area tags | stack 03 as in bi.ts: numbers with a source; the four come from the chapter's own points, the chapter 04 spec, and the chapter 05 note |
| benchmark `folded`, no hotspots | benchmark `folded` with four `hotspots`: the catalogue, the updates list, the confirmation dialog, progress in place | section 4: findings pinned where the sheet shows them; the text is the caption's, split per step |
| chapter 06: points + tools spec | points + `evolution` (v2.3 "The file is bound to the code", v3.0 "The code is the system") + tools spec | stack 06: one tab per version. The two entries are the FOX v2.3 and v3.0 tabs from bi.ts, the same system and the same facts; the v3.0 `moved` line adds the Hub's own fact from chapter 06 |

Not done, and why:

- No cover `layers`. Two MacBook mockups exist (`grid`, `detail`); the other desktop screens are `concept.png` (near-square, a prototype board) and `old-modal.webp` (a 2.5:1 crop of the legacy screen), neither of which fits a 3840 by 2522 screen without white bands. `grid-flat.png` and `detail-flat.png` are the same two screens as the mockups. Four distinct desktop screens would be needed; none was composited.
- The chapter 01 carousel stays at three slides (catalogue, template, installed boards): there is no fourth part of the Hub on record.
- `concept.png` stays unfolded: it shows the installed and available boards rather than explaining them.
- The two audiences stay a `spec`, not `personas`, for the reason in the first log.

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, skimming by scroll (18 137 px, 2 086 visible words, 11 chapters, 13 images):

1. The cover, the lead, and the old-modal shot with its four hotspots say the problem in one screen; good.
2. "In short" had eight rows and no picture; Context repeated the lead and Period and team repeated the metadata strip.
3. The role was said four times: meta Role, meta Team, the "My role and scope" row, and the "What I owned" bullets in 01.
4. The two FOX versions, the tools, and the three Hub components were spread over an exploded screen, a passage, points, an evolution, and a spec table in 06, with no picture of how the work was done.
5. The three screens of the product appeared three times each: the 01 carousel, the 07 concept shot and duo, and the two use-case shots on top of the dossier covers.
6. Chapter 05 "First prototypes" restated the answers in the 04 table (entry point, search, what a card says).
7. Four stats blocks: two repeated the metadata strip, one repeated the chapter's own bullets.
8. Four maxims, the kit allows two.
9. The award passage in 10 repeated the Product context row of the meta strip.
10. Decisions had no pictures and no link to the chapter that argues them.

| Before | After | Why |
| --- | --- | --- |
| 00: Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team (eight rows) | What, Problem, My role, Decision 1 to 3 with shots, Outcome (seven rows, each at most 25 words) | the sixty-second page; the meta strip states period and team |
| 00 decisions as text | Decision 1: `device/grid-1600.webp` (macbook), to `#what-the-audit-asked`; Decision 2: `screens/concept.png`, to `#concept`; Decision 3: `device/detail-1600.webp` (macbook), to `#use-cases` | each decision as the screen that shows it taken |
| 01 maxim, standfirst "What the Hub is and what I owned on it", "What I owned" points | standfirst "The Hub's three parts, one screen per slide."; points removed; carousel bodies as fragments | the role is in 00 and in the meta strip; two maxims at most |
| 01a maxim "Installing into the Board Designer had to keep working…" | removed; the first point says it | two maxims at most |
| 02 spec, full sentences | the same two rows as fragments | one line per field |
| 03 maxim; four points; stats (6 columns, 5 findings, 1 product, 9 tags) | maxim as standfirst; three points (five findings folded into the audit point; "six columns" is in the lead sentence); stats removed | the numbers were the chapter's own bullets said again |
| 04 standfirst; spec rows as sentences | maxim "The first approved change was one line in the side drawer." (from 05); rows as fragments; the entry-point row carries "below Board Designer and Process Designer; nothing else in the drawer moved"; the search row carries the nine process-area tags | 05 folded into 04 |
| 05 "First prototypes" `flow` (three stages, the nine-tags note) | chapter dropped; its facts in the 04 table | the stages were the 04 answers restated; Decision 1 now links to 04 |
| 06 passage + points (three Hub pieces, the rest is FOX, library first) + `evolution` open + tools `spec` | `exploded` kept; a `sheet`: Figma audit board (old-modal image), Figma Make concept (concept image), Figma sign-off, Storybook FOX v3.0, Bitbucket merge, APplus shipped (grid-flat image); `evolution` inside a `fold` "FOX under the product: v2.3 to v3.0" | the method in one picture; the system's history is reference |
| 06 evolution entries as full sentences | the bi.ts v2.3 and v3.0 fragments, the Hub's own `moved` line kept | fragments where a sentence adds nothing |
| 07 passage "The entry carries the decision", concept `shot`, `duo` of grid and detail | the passage in the standfirst; one `tabs` block: Concept, Catalogue, Template | peer screens, one screen of scroll |
| 08 maxim "Both protect the thing the old modal already did well" | in the standfirst | two maxims at most |
| 08 each dossier tile: a `shot` of the screen, then the use case | the use case only; the cover carries the screen | the same screen was the tile's cover and the 01 carousel |
| 08 flow steps and conditions as sentences | fragments | step bodies as fragments |
| 10 second stats (13 months, 6 people, 2 FOX versions); award passage | removed | the meta strip says both |
| 10 "What it adds up to" | n "09" after the drop of 05, then "08" | consecutive numbering |
| chapter n: 00, 01, 01a, 02, 03, 04, 05, 06, 07, 08, 10 | 00, 01, 01a, 02, 03, 04, 05, 06, 07, 08 | consecutive; every id kept |

Not done, and why:

- No Nexus station. The file names Nexus only in the FOX v3.0 evolution text copied from bi.ts, not among the Hub's tools, and the `nexus` drawing prints "six installs", an Analytics fact.
- No Chromatic or Codex station. Both are listed as tools in the file (the old 06 spec) with nothing on record about what either did on the Hub; they stay in the sheet's tool strip with a short `what`.
- The 04 findings table renders one row and "Show more: 4 more" (the `spec` block's own behaviour); the hotspots on the screen above carry the same four questions, so the first pass still sees them.
- The exploded screen stays (kept at Konstancja's request); it is about 2 500 px of the 16 700.

Result: 16 702 px at 1440 (from 18 137), 1 683 visible words (from 2 086), 10 chapters (from 11), 17 images in the DOM (from 13: the three decision shots and the three sheet images added, the three 07 and 08 shots removed), 2 maxims (from 4). `tsc --noEmit` and `npm run check` pass; no horizontal scroll at 390.
