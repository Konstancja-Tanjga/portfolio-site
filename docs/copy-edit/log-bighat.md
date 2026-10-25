# Edit log: Big Hat design system (`site/src/content/bighat.ts`)

First pass, 11 October 2026, against `docs/case-study-kit/RULES.md` and `docs/STYLE.md`: an "In short" `brief` added as chapter 00, the overview and logo passages turned into a lead sentence plus `points`, the three templates folded into a `dossier`, every bullet led by a bold claim, cover `layers` from the device mockups that already exist, and the mechanical rules (em dashes, serial comma, bullets as sentences). Big Hat is a practice study: no personas, use cases, audit, or handoff chapter exist for it, and none was written. The chapter ids and numbers 01 to 09 are unchanged, so every deep link still resolves. The six-stage `process` block in chapter 05 was kept rather than converted to a `flow`, because `flow` is documented for three or four cards and carries no kicker (the file path of each stage) and no "underneath" note; converting it would drop facts. No fact, number, date, or result was added. The role stays "Sole author": Big Hat is my own, not Asseco Solutions, so the Asseco title does not apply.

| Before | After | Rule |
| --- | --- | --- |
| header comment: "shown in full — including the source" | "shown in full, including the source" | 3.6 em dash |
| header comment: "quality, templates, governance and what it does not claim" | "quality, templates, governance, and what it does not claim" | serial comma |
| (paths written out in every block) | `const D = ".../device"; const V = ".../v6";` | TEMPLATE.ts: one constant per image folder |
| what: "My own design system, in code and in Figma — and the site you are reading is built on it" | "My own design system, in code and in Figma, and the site you are reading is built on it" | 3.6 em dash |
| subline: "Big Hat — and this site runs on it" | "Big Hat, and this site runs on it" | 3.6 em dash |
| (no layers) | layers: kanban, records, ai-chat, storybook-button, from `device/*-2400.webp` | RULES 4: a hero cover is four to six screens cycling |
| { label: "Role", value: "Sole author — design, Figma library and code" } | { label: "Role", value: "Sole author: design, Figma library, and code" } | 3.6 em dash; 3.4 colon; serial comma |
| { label: "Package", value: "@bighat/ui — React, with an Angular sibling" } | { label: "Package", value: "@bighat/ui, React, with an Angular sibling" } | 3.6 em dash |
| { label: "Licence", value: "MIT — Storybook and source are public" } | { label: "Licence", value: "MIT; Storybook and source are public" } | 3.6 em dash; 3.15 semicolon |
| (no Period row) | { label: "Period", value: "2025 to 2026" } | RULES 6: period on every study; the years are the cover credit's |
| (no chapter 00) | chapter "in-short", `brief` with Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team | RULES 2: the 30-second read. Context from the lead and About; Problem is the chapter 05 maxim; Decisions from chapters 03, 04, and 05; Outcome from the meta strip and chapter 09; Period from the credit |
| "<p>Small on purpose: not every surface an enterprise product needs, but each decision legible — why it was made, and what it cost. It is what this site, Docu Manager and World of Raptors are built with. Storybook · source.</p>" | "<p><strong>Small on purpose</strong>: … each decision legible, why it was made and what it cost. Storybook · source.</p>" + points: Three things run on it; One set of tokens feeds both sides; Dark is one variable mode; Storybook and source are public | RULES 2, chapter 01 is `points`; 3.6 em dash; serial comma |
| "<p>Big Hat is two layers of tokens. The crown is the primitives: there, but never touched. The brim is the semantic layer … The dot on the i is the brim again.</p>" (62 words) | "<p>The logo draws <strong>the two layers of tokens</strong>, and the gap between them.</p>" + points: The crown is the primitives; The brim is the semantic layer; The gap between them is the boundary; The dot on the i is the brim again | RULES 6: over 60 words becomes a lead sentence plus points |
| caption: "The mark, the horizontal lockup and the stacked lockup, in brand colour and in one colour." | "The mark, the horizontal lockup, and the stacked lockup, in brand colour and in one colour." | serial comma |
| caption: "a 28 × 20 crown, a 4 gap and a 48 × 8 brim" | "a 28 × 20 crown, a 4 gap, and a 48 × 8 brim" | serial comma |
| caption: "the palette and the space, radius and type scales on a 4px grid. Hidden from every picker, as they are banned from product CSS." | "the palette and the space, radius, and type scales on a 4px grid. Hidden from every picker, because they are banned from product CSS." | serial comma; 1.8 *as* only where it cannot be read as time |
| standfirst: "Every component starts as a machine-readable contract — purpose, what it is not for, anatomy, states, keyboard, ARIA — and is built from it in Figma, React and Storybook." | "Every component starts as a machine-readable contract (purpose, what it is not for, anatomy, states, keyboard, ARIA) and is built from it in Figma, React, and Storybook." | 3.6 em dash; 3.10 parentheses for the aside; serial comma |
| caption: "primary, secondary and ghost; sm, md and lg; default, hover and disabled." | "primary, secondary, and ghost; sm, md, and lg; default, hover, and disabled." | serial comma |
| caption: "every do/don't rendered live with its reason" | "every do and don't rendered live with its reason" | 3.16 no slash to join alternatives |
| process stage 3: "Tokens only — a literal fails the build." | "Tokens only; a literal fails the build." | 3.6 em dash; 3.15 semicolon |
| points: "Contrast is a build error: every text and non-text pair is asserted … — 124 assertions" and four more bullets without a lead claim | "<strong>Contrast is a build error.</strong> Every text and non-text pair is asserted …: 124 assertions." and four bullets, each led by a bold claim and ending with a period | RULES 6: a bold claim leads each bullet; 3.6 em dash; 3.11 list items that are sentences take a period |
| "Empty, loading and error are one component with three announcement strategies" | "<strong>Empty, loading, and error are one component</strong>, with three announcement strategies." | serial comma; bold claim |
| caption: "“No invoices match these filters” offers a way out of the filter, not “Create invoice” — empty is two different screens." | "… not “Create invoice”. Empty is two different screens." | 3.6 em dash |
| chapter 07: standfirst "Screens assembled only from library components, each with its loading and error states, and an empty one where the screen can be empty." + two `duo` blocks with one-line captions ("Kanban — filters as chips; cards move without a pointer") | maxim "A template is assembled only from library components, with its loading and error states drawn." + standfirst "Three of the four templates, one tile each…" + `dossier` of three tiles (tpl-kanban, tpl-records, tpl-ai-chat), each with the caption's rule as its maxim, a standfirst, a cover, and the screens | RULES 2: two or more areas each with screens and a rule fold into a dossier; 3.6 em dash; every caption says what to look at |
| caption: "Kanban — filters as chips; cards move without a pointer" | "Kanban in Light: filters as chips above the columns; cards move without a pointer." | 3.6 em dash; caption ends with a period |
| caption: "The same screen in Dark" | "The same screen in Dark, from the same components and one variable mode." | caption says what to look at; the fact is the chapter 01 caption's |
| caption: "Records — one quiet actions button per row" | "Records: one quiet actions button at the end of each row, and nothing else competing with the data." | 3.6 em dash; caption says what to look at |
| caption: "AI chat — the prompt is a form, the modes a radio group" | "AI chat: the prompt is a form and the modes are a radio group, so the screen inherits the library's keyboard and ARIA behaviour." | 3.6 em dash; the reason is the chapter 04 contract (keyboard, ARIA) |
| limits: "No screen reader has been run against it; the announcement rules are tested in code, not in NVDA or VoiceOver" and two more | "<strong>No screen reader has been run against it.</strong> The announcement rules are tested in code, not in NVDA or VoiceOver." and two more, each led by a bold claim | RULES 6: a bold claim leads each bullet |
| "Pressed states are not drawn in Figma — the browser draws them" | "<strong>Pressed states are not drawn in Figma.</strong> The browser draws them." | 3.6 em dash |

Not changed, and why:

- The credit "Sole author · Big Hat · 2025–2026" keeps its en dash: 3.7 allows an en dash for an inclusive date range, and the credit is a label, not prose. The Period row in the meta strip says "2025 to 2026" as the Elly and Analytics strips do.
- The `evolution` block keeps "variant: primary · secondary · ghost · link · danger." and "variant (weight) × tone (consequence)": these are the API as written, not prose.
- The `code` block and the `process` kickers keep their file paths and arrows: code and rule ids are exempt.
- The stats row "46 of them in the Figma library, with Code Connect" repeats the first stat's number. It is the file's own count, and it was left as found.

Unresolved facts, for Konstancja:

- The period "2025 to 2026" is taken from the cover credit; no other place on the site dates when Big Hat was started. The CV says "Big Hat (Poland), my own company, 10/2018 – present", which is the company, not the design system.
- The meta strip says 126 semantic tokens and 233 Figma variables; the CV analysis (`cv-analysis.md`) says 39 components where the page says 46. The page's numbers were kept; the CV is the older count.
- "Docu Manager" is named as one of three things built on Big Hat; the site calls that study "APplus Documents" elsewhere. Left as found.
- Chapter 07 says "Three of the four templates" because the meta strip counts four and the file shows three; the fourth is not named anywhere in the file.

## Layout pass, 13 October 2026

Against `docs/case-study-kit/RULES.md` sections 4 and 5, with `site/src/content/bi.ts` as the reference. Big Hat already had cover `layers`, an `evolution` block, a `dossier` of templates, and `stats`; this pass adds the chapter 01 carousel of every mockup on record, a `loop` for the cycle chapter 05 describes in prose, and folds the logo's spec page. No mockup was composited: all eight already existed under `device/`. No fact, number, or screen was added.

| Before | After | Rule |
| --- | --- | --- |
| chapter 01: `stats`, then the 6.0 cover shot | `stats`, then a `carousel` of the eight mockups (Kanban, Kanban in Dark, Records, Records empty, AI chat, Button in Storybook, colour roles, primitives), each titled with one line from its existing caption | RULES 2, chapter 01: every part of the application, one screen per slide |
| `{ kind: "shot", width: "column", src: \`${V}/logo-use.png\` … }` | `folded: true` | RULES 4: a page that explains (the 4px grid, the sizes, the token names) rather than shows is folded |
| chapter 05: `process`, `code`, `thesis` | the same, then a `loop` of three stations, tokens, the Figma library, the React package, with the edges "Generated over MCP", "Code Connect", and "Pull requests", and the centre "When they disagree, the code wins" | RULES 2, chapter 09: a cycle with no first step is drawn as a ring; every sentence in it is from the process block, the Decision 3 row, and the thesis beside it |

Not done, and why:

- No `hotspots`: no audit or benchmark screen exists for this study.
- No `flow` in place of the six-stage `process`: the first pass already kept it, because a flow would drop the kickers.
- No `joint`: the file holds no reflection, only the "What it does not claim" points, which are limits rather than lessons.
- No clips: nothing is recorded for this study.
- The `v6/` exports (the 6.0 cover, the logo, the button contract and variants) stay flat: they are Figma pages and a lockup sheet, not product screens.

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, two minutes by scroll: 1 743 words, 16 886 px, 10 chapters, 26 images. What is good: the three decisions are real and each has a picture; the contract page, the colour roles, and the Storybook page prove them; the limits chapter is honest. What repeats: the role four times (meta strip, Context, My role and scope, Period and team); the counts three times (meta strip, the stats row, the 6.0 cover caption); the drift sentence twice (Problem, chapter 05 maxim); the tool chain twice (the six-stage process board and the three-station loop, both in chapter 05, with the 4px-grid thesis between them saying the loop's third edge again); the templates twice (the chapter 01 carousel and the chapter 07 dossier, same screens, same captions). What is reference, not argument: the logo spec page (already folded), the breaking-change history, the three product screens in chapter 07. Where the role and the tools were unclear: the eight-slide carousel mixed product screens with Figma pages and Storybook, so a first pass could not tell what Big Hat is from what it is drawn with; and nothing said which tool does what in one place. Four maxims and two theses on a ten-chapter page.

| Before | After | Why |
| --- | --- | --- |
| 00: Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team | What, Problem, My role, Decision 1 to 3 with shots, Outcome | the meta strip states Role and Period; Context said the lead again. Decision shots: colour roles (MacBook) to #foundations, the Button contract page (flat) to #components, Button in Storybook (MacBook) to #workflow |
| 01: passage, four points, stats, eight-slide carousel, the 6.0 cover shot | passage with the templates' rule in it, six-slide carousel | the points said the role, the public source, and the three products again; the stats repeated the meta strip; the 6.0 cover moved into the sheet as the release station; primitives and the records-empty slide left the carousel because chapters 03 and 06 show them with their rule |
| 02: four points, logo, folded logo page | the same, the brim point shortened | no change of substance |
| 03: two MacBook shots stacked, thesis | `tabs` Colour roles and Primitives, thesis | two screens of equal rank; one screen of scroll instead of two |
| 04: three shots stacked (contract, variants, Storybook) | `tabs` Contract, Variants, Storybook | the three surfaces are peers, which is the chapter's point |
| 05: maxim, six-stage `process`, code, thesis on the 4px grid, three-station `loop` | standfirst, `sheet` of seven stations (Contract, Figma, React, Storybook, Figma Code Connect, GitHub merge, Release 6.0), code | the board and the loop told the same chain; the sheet tells it once in the home page's language, with the study's own screens; the thesis is the merge station's body; the maxim was the 00 Problem row |
| 07 Templates: dossier of three tiles (tpl-kanban, tpl-records, tpl-ai-chat) | chapter dropped; its rule is one sentence in the 01 passage | the same three screens with the same captions are the 01 carousel; chapters 08 and 09 renumbered 07 and 08 |
| 08 Governance: `evolution` open | standfirst, `fold` "The split, 1.x to 3.0" with the evolution inside | reference on a first pass; the standfirst says what was split and why it took three versions |
| maxims: 01, 05, 06, 07; theses: 03, 05 | maxims 01 and 06; thesis 03 | two maxims at most; the 05 thesis became a sheet station |

Numbers: 1 743 to 1 364 visible words; 16 886 to 14 384 px at 1440; 10 to 9 chapters; 26 images before and after (the sheet's seven windows carry six of them). No fact, number, tool, date, or result was added. The sheet uses `image` stations with the study's own exports and the neutral `merge` drawing; no FOX drawing. The tool list names only what the file already named: the contract files, Figma, React, Storybook, GitHub. The agent that generated the library over Figma's MCP server is not named in the file, so the station says "an agent".

Deep links lost with chapter 07: `#tpl-kanban`, `#tpl-records`, `#tpl-ai-chat`. Still open for Konstancja: which agent generated the Figma library; the fourth template's name; whether "Docu Manager" should read "APplus Documents" (the Kanban slide shows a "bighat Document Manager" demo, which looks like a separate thing from the Asseco study).
