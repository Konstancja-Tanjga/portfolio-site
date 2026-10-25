# Edit log: MojePZU (`site/src/content/pzu.ts`)

First pass, 11 October 2026, to the standard of `log-bi.md` and `docs/case-study-kit/RULES.md`: the TL;DR as a `brief`, the research process as a `flow`, long passages and spec rows as a lead sentence plus `points`, captions on every image, and the mechanical rules (slash compounds, en dash as "to", serial comma, intensifiers). No fact, number, or date was added. The project has no personas, use cases, handoff or reflection on record, so chapters 01a, 02, 08, 09 and 11 of the stack are not written; the existing chapter ids and numbers are kept, because the numbers were written for this page and the ids are deep-link targets. The role stays as it was in 2019, a freelance UX and UI designer; the 2025 title is not claimed here.

| Before | After | Rule |
| --- | --- | --- |
| lead: "I was the only UX/UI designer on the project." | "I was the only UX and UI designer on the project." | 3.16 no slash compound |
| credit: "UX/UI designer · PZU · 2019" | credit: "UX and UI designer · PZU · 2019" | 3.16; role as it was |
| { label: "Role", value: "UX/UI designer, the only designer on the project, freelance" } | { label: "Role", value: "UX and UI designer; the only designer on the project, freelance" } | 3.16; 3.15 semicolon |
| { label: "Team", value: "A UX researcher, a strategist, a developer, a service designer and me" } | { label: "Team", value: "Five: a UX researcher, a strategist, a developer, a service designer, and me" } | same form as the Analytics meta; serial comma; the count is the sum of the list |
| { label: "Platform", value: "mojepzu.pl, on desktop, tablet and phone" } | "mojepzu.pl, on desktop, tablet, and phone" | serial comma |
| { label: "Period", value: "January – December 2019, shipped to production" } | { label: "Period", value: "January to December 2019" } + { label: "Launch", value: "Shipped to production on mojepzu.pl" } | 3.7 no en dash as "to"; Launch row of the meta strip |
| kind: "spec", rows: Problem, My part, Decision 1..3, Evidence, Shipped | kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome, Period and team | brief: the 30-second read; Context from chapter 01; Outcome from Evidence, Shipped, and chapter 06 |
| key: "My part", value: "Workshops with the business, which I co-designed and ran, …" | key: "My role and scope", value: "The only designer on the project, working with a UX researcher, a strategist, a developer, and a service designer: workshops with the business, which I co-designed and ran, …" | brief: role and scope in one row; team named |
| key: "Evidence", value: "6 workshops with the business. 24 in-depth interviews leading to prototype 1.0, 18 leading to 2.0 and 12 leading to 3.0." + key: "Shipped", value: "To production, on mojepzu.pl" | key: "Outcome", value: "Shipped to production on mojepzu.pl, after 54 in-depth interviews in three rounds fed three prototypes. Not measured after launch: usage, self-service rates, and support contacts, so none is claimed." | brief: Outcome row; the research counts stay in chapter 02; "not measured" from chapter 06 |
| (no Period and team row) | key: "Period and team", value: "January to December 2019. Five people: a UX researcher, a strategist, a developer, a service designer, and me." | brief: Period and team |
| chapter 01: "<p>mojepzu.pl is where PZU customers manage … insurance policies, medical services, investments and savings.</p><p>We worked on … The project had two goals, and each came with its own questions.</p>" + spec rows Goal 1 (45 words), Goal 2 (44 words) | two short passages, the second with "<strong>The project had two goals</strong>", + points: "<strong>Make the communication of the offer more coherent.</strong> How do we…"; "<strong>Make the portal easier to use.</strong> How should…" | 2.3.2 itemisation; a bold claim leads each bullet; serial comma; 2.4 "more intuitive and easier to use" to "easier to use" |
| (chapter 01 had no standfirst) | standfirst: "The portal before and after login, and the two goals the project set for it." | a standfirst says what is on the page |
| caption: "…the shortcut bar on the left and the latest updates top right." | "…the shortcut bar on the left, and the latest updates top right." | serial comma |
| kind: "spec", caption: "The process in three streams, as the project board lays it out.", rows: Strategic stream, Research and design stream 1, Research and design stream 2 | kind: "flow", stages: Strategic stream; Research and design stream 1; Research and design stream 2; note: "The process in three streams, as the project board lays it out." | a sequence of stages is a `flow`; serial comma in each stage |
| "<p>I worked with a UX researcher. The first round was 24 individual in-depth interviews, held online over Zoom, and it had three aims: to check the hypotheses…, to find out…, and to decide… The later rounds had 18 and 12 interviews.</p>" (72 words) | "<p>I worked with a UX researcher. The first round was <strong>24 individual in-depth interviews</strong>, held online over Zoom, with three aims.</p>" + points: Check the hypotheses; Find out which information and functions customers need; Decide what the dashboard is for | 2.3.2 itemisation; 2.6 emphasis |
| points: "Customers said the portal offered few functions, so it was not very attractive to them." | "<strong>The portal offered few functions</strong>, customers said, so it did not attract them." | 2.4 empty intensifier; a bold claim leads each bullet |
| points: "They identified the company with insurance. Most were surprised…" / "Self-service was the function that mattered most to them." / "They treated the portal as their own space and took the name literally: myPORTAL means mine." | "<strong>PZU meant insurance.</strong> Most were surprised…" / "<strong>Self-service was the function that mattered most</strong> to them." / "<strong>The portal was their own space.</strong> They took the name literally: myPORTAL means mine." | a bold claim leads each bullet |
| standfirst: "Between prototypes 1.0, 2.0 and 3.0, five things changed." | "Between prototypes 1.0, 2.0, and 3.0, five things changed." | serial comma |
| chapter 03: kind: "spec", rows: Information architecture; Navigation; Screen layout; "Buy" button; New module | kind: "points", the same five facts, each led by its bold key | a list of changes reads as bullets with the claim in bold; the wording is unchanged |
| duo with one shared caption: "First, an early greyscale mockup…. Second, the same section in the final version…" | each item carries its own caption: "An early greyscale mockup of the logged-in home page: …" / "The same section in the final version, …" | every image has a caption that says what to look at |
| rule 03: "payments, claims and benefits, medical services, investments and savings. The shortcut bar holds the actions: pay, book a visit or test, report a claim, see offers." | "payments, claims and benefits, medical services, investments, and savings. … pay, book a visit or test, report a claim, and see offers." | serial comma |
| caption: "The final screens on desktop, tablet and phone." | "The final screens on desktop, tablet, and phone." | serial comma |
| role: "Buttons, links and the active navigation item" | "Buttons, links, and the active navigation item" | serial comma |
| "<p>The redesign shipped to production on mojepzu.pl. … the structure, the navigation and the screens changed.</p>" | "<p>The redesign <strong>shipped to production on mojepzu.pl</strong>. … the structure, the navigation, and the screens changed.</p>" | 2.6 the key phrase in bold; serial comma |
| header comment | header comment, with a note on which chapters of the stack are not written and why | the file says what it leaves out |

Not changed, and why:

- The role. The file says UX and UI designer; the CV source (`sources/cv-2026-10.md`) and the LinkedIn Experience entry say UI Designer. One of them is the title on the contract. Left as found, flagged for Konstancja.
- The research counts (6 workshops, 24, 18, and 12 interviews) and the team list are the board's; the "Five" in the meta and the brief is the sum of the five people the file names, not a new fact.
- No cover `layers`: the project has one device mockup (the prototype-review board), and a cover needs four to six screens of the product. The card thumbnail stays.
- No `carousel` in chapter 01: the screens on record are crops of the project board, not one mockup per part of the application.
- No chapter 01a "Why this is a hard brief", no personas, no use cases or `dossier`, no handoff, no `joint`: the board states no constraints, no personas, no use cases and no reflection, and none was invented. Chapter 06 keeps the two sentences on record, including that nothing was measured after launch.
- The pull quote "The customer expects to be in their world, not ours." (10 words) stays a quote, in its quotation marks, because the board presents it as one; it was not promoted to a maxim.
- The four greyscale screens (`early-mockup`, `offers-final`, `final-screens`, `insights-board`) are flat crops, not MacBook mockups. No image was created or deleted.
| credit and Role: "UX and UI designer" | "UI Designer" | settled by her on 11 October 2026 |

## Layout pass, 13 October 2026

Against the blocks the APplus Analytics study uses (`docs/case-study-kit/RULES.md`, sections 2, 4 and 5). The study has one device mockup (the first-round analysis board) and no flat single-desktop screen: `dashboard.webp` and `cover.webp` are rendered laptop-and-tablet composites, `final-screens.webp` is a three-device collage, and `early-mockup.webp` and `offers-final.webp` are crops. So no mockup was composited, and the cover and chapter 01 stay as they were. The change is to the two research boards.

| Before | After | Rule |
| --- | --- | --- |
| chapter 02: `prototype-review` as an open framed `shot` | `folded: true`, with two `hotspots`: "Each screen of the portal, laid out one by one." and "A column of interview notes beside each screen." | 4: a board that explains rather than shows is folded; the hotspot text is the caption, pinned to a screen and to its notes column |
| chapter 02: `insights-board` as an open `shot` | `folded: true`, with five `hotspots` on the board's rows, staggered across the columns so the bubbles do not cover one another: one column per area; the screen; the observations and conclusions; the challenges; the ideas | 4: research boards carry the finding at the place on the board; the text is the caption's list of rows |
| header comment | + a note on the folded boards and on why there are no cover layers and no carousel | the file says what it leaves out |

Not done, and why:

- No cover `layers`: one device mockup exists, and the kit asks for four to six. The other screens are rendered composites, a collage, and crops, none of which is a flat desktop screen a mockup could be made from.
- No `carousel`: the same reason. The screens on record are not one mockup per part of the portal.
- The four first-round findings are not pinned on the synthesis board. The stickies are not legible at the board's resolution, so a finding cannot be placed where it was written without guessing; the hotspots name the rows instead, which the caption already describes.
- No `joint`: chapter 06 says what was not measured after launch. A question joined to "nothing" would be a slot filled, not a reflection on record.
- No `dossier`: the three decisions in chapter 04 share one set of screens; they are not areas each with their own screens and rule.
- `stats` and `flow` already existed from the 11 October pass and are unchanged.

## 15 October 2026: screens from the final Figma file

Sources: the final screens file `mojePZU_FINAL_2021` (Figma `VSnWUmgg3pJbKqtEjrc7uD`, page `2528:291`) and the process board `MojePZU_redesign-process` (`grHLzFzerDF965YjAlL6rF`), both opened through the Figma connector on the owner's account. Her answers on 15 October: which frames belong to prototype 1.0, 2.0, or 3.0 cannot be established; show no dates; do not use the board's "flow" frame (`1:522`), whose text belongs to another project.

How the images were made: each frame exported at 3x (3840 px wide, the MacBook screen width), cropped to the frame, and blurred where it carries a name (first names included), an address, a policy or case number, a number plate, PESEL, a phone or account number, or a date. The blur boxes are the text layers' own bounds, read from the file and trimmed to the glyphs. The message list on `2528:3082` is a picture, not text, and was blurred by position. A review pass found three names the first filter missed ("Antonina" in the header, "Internista - Tomasz Miś" on `2528:1667`, "KARTA MARYSI" on `2598:81474`); they were added and the mockups and clips rebuilt. The top 3840 × 2522 of each page was laid into the MacBook template at 1600, 2400, and full width.

The clips follow the file's own prototype links: `2528:2244` "Zaloguj się" to `2528:2613`, its button to `2528:2671`, "Pomiń" to `2825:6`, "Dalej" to `2825:961`, "Zakończ samouczek" to `2564:56755`; then "Opłać" to `2598:81474`, "Umów wizytę lub badanie" to `2528:1667`, and "Zgłoś szkodę" to `2528:1584`. Tall pages scroll inside the laptop screen. Rendered at 24 fps from the exports and encoded at 1440 × 946, like the Analytics clips.

| Before | After | Source or rule |
| --- | --- | --- |
| credit: "UI Designer · PZU · 2019" | "UI Designer · PZU", + `org: "PZU"` | owner: no dates; `org` keeps the company on the Work tile, which reads it from a three-part credit |
| { label: "Period", value: "January to December 2019" } | removed | owner: no dates |
| key: "Period and team", value: "January to December 2019. Five people: …" | key: "Team", value: "Five people: …" | owner: no dates; the team is unchanged |
| cover art `cover-art.webp`, shot `screens/cover.webp` (1340 and 1440 px composites) | `device/dashboard-2400.webp` for both | frame `2564:56755`; covers keep one app screen |
| (no cover layers) | `layers`: Dashboard, Before logging in, Medical services, Payments, Klub PZU; `motif: "documents"` | frames `2564:56755`, `2528:2244`, `2528:1667`, `2598:81474`, `2613:15`; kit 4: four to six screens |
| chapter 01: `shot` `screens/dashboard.webp` (a 1440 px crop) | `carousel` of 15 MacBook mockups, one per part of the portal, each with a title and one line on what the screen shows | frames, in slide order: `2528:2244`, `2528:2613`, `2528:2671`, `2564:56755`, `2654:7052`, `2598:81474`, `2528:1584`, `2528:1667`, `2598:78610`, `2600:16121`, `2528:3082`, `2528:1441`, `2528:732`, `2598:79994`, `2613:15`; captions describe only what is on each screen |
| chapter 03 duo, second image: `screens/offers-final.webp` (360 × 345), "The same section in the final version, …" | `screens/dashboard-final.webp`, the whole logged-in home page (1440 px), "The logged-in home page in the final version, where each offer under "Wybrane dla Ciebie" ends in "Dowiedz się więcej" (find out more)." | frame `2564:56755`; the early mockup beside it is a whole page too |
| (chapter 05 had no flow) | `flow`: Before logging in; Logging in; Choosing topics; The tutorial; Dashboard; note: "The path a customer takes on a first login, as the links in the Figma prototype run." | the prototype links above; "five steps" from "Krok 1 / 5" on `2825:961` |
| (no clips) | two `video` clips in the MacBook: "A first login, from the public page to the dashboard" and "The shortcut bar: pay, book a visit, report a claim"; the second caption ends "The bar sits in the same place on every logged-in page." | the prototype links above; the bar is at the same position on every logged-in frame exported |
| header comment: no cover layers and no carousel, and why | where the screens come from, what is blurred, that the clips follow only existing links, and that no screen is given a prototype version | the file says what it leaves out |

Removed files, no longer referenced: `cover-art.webp`, `screens/cover.webp`, `screens/dashboard.webp`, `screens/offers-final.webp`.

The public page (`2528:2244`) shows "KUP" (buy) beside "Szczegóły" on the product cards; the logged-in pages carry no "Buy" button. On 15 October the owner chose to narrow the decision to the logged-in portal:

| Before | After | Source or rule |
| --- | --- | --- |
| Decision 1: "The "Buy" button that sat on every screen was dropped. …" | "After logging in, the "Buy" button that sat on every screen was dropped. …" | owner, 15 October; frames `2564:56755` and the other logged-in pages |
| chapter 03: "<strong>The "Buy" button.</strong> Dropped. It had sat on every screen." | "… Dropped from the logged-in portal. It had sat on every screen." | the same |
| rule 01 title: "Drop the "Buy" button from every screen" | "Drop the "Buy" button from the logged-in portal" | the same |
| rule 01: "No screen carries a "Buy" button. …" | "No screen after logging in carries a "Buy" button. …" | the same |
| `site/src/home/story.tsx`, career row PZU: years: "2019" | years: "" | owner: no dates (the row is not rendered at present) |

Open:

- The final-screens composite in chapter 05 and the early greyscale mockup in chapter 03 have no source in the Figma files and stay as they were.

## 25 October 2026: rebuilt the Analytics way

Review from the reader's chair, skimming by scroll (branch `studies-rebuild`, per the rebuild brief):

- Good: the cover layers and the carousel say what the product is before a word is read; the three decisions in 04 each carry a rule and a round-one finding; the two clips prove the prototype was clickable.
- The research counts were stated four times: the meta strip, the `stats` block, the `flow` cards, and the Outcome row.
- The process was told twice, as a `flow` of three streams and as a passage about Zoom and the three aims, and neither showed a tool.
- 00 had eight rows and no picture; Context repeated the lead and chapter 01, Team repeated the meta strip, My role and scope ran to 50 words.
- 03 listed five changes of which three said only "changed between prototypes"; 04 then said the same three with reasons.
- 05 opened with a `flow` that narrated the first-login clip, then the clip, the second clip, and a composite, stacked: 3 100 px for four peers.
- 06 "What it adds up to" repeated the Outcome row word for word.
- The palette is reference, open at full size at the end of the page.
- Role and tools were clear in the meta strip; the tools (Zoom, Figma) were buried in a passage and a note.
- 1 429 words, 13 395 px at 1440, 7 chapters, 30 images, 2 clips.

| Before | After | Why |
| --- | --- | --- |
| 00: Context, Problem, My role and scope, Decision 1 to 3, Outcome, Team | What, Problem, My role, Decision 1 to 3 with `shot`, Outcome | the sixty-second page; Context was the lead, Team is in the meta strip; the meta strip states the team and, at the owner's request, no period, so no "Period and team" row |
| 00 My role and scope (50 words) | "The only designer: the business workshops, co-designed and run by me, the competitor audit and benchmark, lo-fi mockups tested with users, the clickable prototype." | at most 25 words; the team is in the meta strip |
| 00 decisions as text | Decision 1 with `device/dashboard-1600.webp` (the logged-in dashboard, no Buy button) to `#prototypes`; Decision 2 with `device/medical-1600.webp` to `#decisions`; Decision 3 with `device/shortcuts-1600.webp` to `#decisions` | each decision as the screen that shows it taken, linked to the chapter that argues it |
| 00 Outcome: "after 54 in-depth interviews in three rounds fed three prototypes" | "after three prototypes" | the interview count is in the meta strip |
| 01: two passages and two 45-word bullets on the goals | one passage with the key phrase in bold, two bullets as fragments | a passage over 60 words becomes a lead and points; fragments where a sentence adds nothing |
| 01 carousel: 15 slides | 11 slides, one-line bodies (Logging in, Investments, Archive, Editing shortcuts dropped) | login and shortcuts are in the clips; investments and archive proved nothing the others do not |
| 02 heading "Research" | "Research, and how I worked" | the chapter now carries the sheet |
| 02 `stats` (6, 24, 18, 12) | removed | the meta strip says 6 workshops and 54 interviews; the sheet's first window says 24 · 18 · 12 |
| 02 `flow` of three streams + passage on Zoom and the three aims + three bullets on the aims | one `sheet`: Zoom interviews (analysis board), Figma synthesis board, Figma lo-fi mockup, Figma prototype 3.0 (first-login poster), mojepzu.pl shipped (three-device composite); tools Zoom, Figma, mojepzu.pl | the process in one picture, in the home page's language; the sheet replaces the prose and the diagram that told it; the study's own boards and screens in the windows, no FOX drawings |
| 02 two folded `shot`s, one drawer each | one `fold` "The two research boards: first-round analysis and synthesis", both boards with their hotspots | one control for the reference material |
| 02 pull quote | kept | the board's own words, 10 words, the only quote on the page |
| 03 five bullets, three of them "Changed between prototypes" | one standfirst naming the five changes and pointing to 04 | nothing said twice; 04 argues the three that are decisions |
| 03 duo | kept as a duo | before and after side by side is the comparison; tabs would hide one half |
| 04 why bodies | fragments | the finding is in 02 in full |
| 05 `flow` of five stages (the first-login path) | removed | the first-login clip and its caption show the same path |
| 05 two clips and the composite stacked | one `tabs` block: First login, Shortcut bar, Three devices | peer content; the chapter is one screen |
| 05 `palette` open | inside a `fold` "The palette from the project board", hint "Open: six colours and where the final screens use each" | reference, not argument |
| 06 "What it adds up to" | chapter dropped | it repeated the Outcome row; the id `results` is no longer a hash target |
| header comment | + the 25 October rebuild | the file says what it leaves out |

Numbers: 1 429 words, 13 395 px, 7 chapters, 30 images, 2 clips before; 970 words, 10 973 px at 1440, 6 chapters, 30 images (the sheet's five windows replace the carousel's four dropped slides and the posters), 2 clips in tabs after. `tsc --noEmit` and `npm run check` pass; no horizontal scroll at 390 (13 216 px tall there).

Open for Konstancja:

- Whether rounds two and three were also held over Zoom. The file says so only of round one, so the tools strip says "the first round of interviews, online".
- Whether the lo-fi mockups were made in Figma. The file does not name the tool; the sheet's third window says Figma because the final file and the boards are Figma files. If they were drawn elsewhere, the window's tool label changes.
- The chapter id `results` is gone with chapter 06; any external link to `#results` now lands on the page top.
