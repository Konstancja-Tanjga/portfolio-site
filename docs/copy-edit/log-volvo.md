# Edit log: Volvo Group ERP (`site/src/content/volvo.ts`)

One pass, 11 October 2026, against `docs/STYLE.md` and the standard set for APplus Analytics: In short as a `brief` (Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team), every passage over about 60 words turned into one lead sentence and bullets, the title as the employer writes it, British spelling, serial commas. Nothing was added that the boards do not state: the Outcome row repeats that no release or measurement is on record. The closing chapter has no "what I learned" or "what I would measure" passage, so no `joint` block was added; chapter 03's passage (50 words) and chapter 07's (55 words) stay as passages. The six insight titles in chapter 03 are quoted from board 07 and were not edited. "Publish/Subscribe" is kept as the service's name.

| Before | After | Rule |
| --- | --- | --- |
| "Baldo is an ERP application in the Volvo Group that handles user authorization for more than 500 applications and works as a master-data hub. I researched h… | "Baldo is an ERP application in the Volvo Group that handles user authorisation for more than 500 applications and works as a master-data hub. I researched h… | British spelling; 3.5 serial comma |
| credit: "Senior UX/UI designer · Volvo Group · 2022–2023" | credit: "Senior UX/UI Designer · Volvo Group · 2022–2023" | 4: a title as the employer writes it, as a label |
| { label: "Role", value: "Senior UX/UI designer, contract" } | { label: "Role", value: "Senior UX/UI Designer, contract" } | 4: one title on every channel |
| { label: "Team", value: "Angular developers, a business analyst, a product owner, a project manager and me" } | { label: "Team", value: "Angular developers, a business analyst, a product owner, a project manager, and me" } | 3.5 serial comma |
| { label: "Scope", value: "User authorization and master data across the group" } | { label: "Scope", value: "User authorisation and master data across the group" } | British spelling |
| { kind: "spec", rows: [ { key: "Problem", value: "Administrators decide in Baldo which of more than 500 applications each user can reach. The screens they di… | { kind: "brief", rows: [ { key: "Context", value: "Baldo is an internal Volvo Group platform: it authorises users for more than 500 applications and, as a ma… | brief: Context and My role and scope rows; 3.5 serial comma |
| { key: "Evidence", value: "Card sorting with 15 administrators in Dovetail, 45-minute semi-structured interviews, prototype and navigation tests on Usability… | { key: "Outcome", value: "Before-and-after boards and prototypes for search, reports, and the e-mail template, grounded in card sorting with 15 administrator… | brief: Evidence and State folded into Outcome; Period and team from the meta strip; 3.7 no en dash after from/to |
| { kind: "passage", html: "<p>Baldo is an internal Volvo Group platform. It plays a central part in authorizing users for more than five hundred applications:… | { kind: "passage", html: "<p>Baldo is an internal Volvo Group platform that <strong>decides which applications a user may reach</strong>.</p>", }, { kind: "p… | 2.3.2 itemisation; 2.4 wordiness (plays a central part in); British spelling; 3.5 serial comma |
| { kind: "passage", html: "<p>Every part of the application sat behind one row of tabs: User, Partner, Unit, Maintenance, Forms, Reports and the rest. The rep… | { kind: "passage", html: "<p>Every part of the application sat behind <strong>one row of tabs</strong>: User, Partner, Unit, Maintenance, Forms, Reports, and… | 2.3.2 itemisation; 3.5 serial comma |
| { kind: "passage", html: "<p>The old Partner screen was a details page with every field of one partner on it. In the new Partner search, further criteria ope… | { kind: "passage", html: "<p>The old Partner screen was a details page with every field of one partner on it; the new one is <strong>a search with its result… | 2.3.2 itemisation; 2.6 emphasis |
| { kind: "passage", html: "<p>In the old screen the criteria and the layout were tables on a long form, reached through Criteria and Layout tabs at the bottom… | { kind: "passage", html: "<p>A report is <strong>two lists side by side</strong>: what it filters on and what it shows.</p>", }, { kind: "points", items: [ "… | 2.3.2 itemisation; 2.6 emphasis |
| { kind: "passage", html: "<p>I designed a new template from scratch for the administrators, and the design of the e-mails users receive. In the old tool an a… | { kind: "passage", html: "<p>I designed a new template from scratch for the administrators, and the e-mails users receive, so that <strong>the message is wri… | 2.3.2 itemisation; 3.5 serial comma |

## Layout pass, 13 October 2026

Against the blocks the APplus Analytics study uses (`docs/case-study-kit/RULES.md`, sections 2, 4 and 5). The five device mockups already in `public/work/volvo-erp/device/` carry the cover, the carousel and the dossier tiles; no new mockup was composited. The three redesign chapters (04 search, 05 reports, 06 e-mail) became one dossier with three tiles whose ids are the old chapter ids, so `#search`, `#reports` and `#email` still open the right place. Every hotspot repeats a fact from the caption or the bullets of the same chapter, pinned where the screen shows it; nothing was added that the boards do not state.

| Before | After | Rule |
| --- | --- | --- |
| cover: `shot` only (the Behance cover) | cover: `layers` of five mockups: Partner search, My reports, Report builder, Send a report template, Components | 4: a hero cover is four to six screens of the product cycling with opacity |
| chapter 01: `passage` + `points`, no screens | + `carousel` of four slides, one per redesigned screen, each with a title and one line taken from its caption | 2: chapter 01 ends with every part of the application, one screen per slide |
| chapter 01: no standfirst | standfirst: "What Baldo does, who I designed for, and the four redesigned screens, one per slide." | a standfirst says what is on the page |
| chapter 02 `duo`: `reports-before`, `report-loading-before` with captions only | the same two with `hotspots` (three and three): the tab row; copies of copies and no search box; the long column; the loading message; criteria row by row; Criteria and Layout tabs | 4: legacy screens carry the finding in a speech bubble at the place that provoked it |
| chapters 04, 05, 06: three chapters, each `passage` + `points` + `duo` + `shot` | chapter 04 "Three parts, redesigned": one `dossier` with tiles `search`, `reports`, `email`; each tile keeps its maxim as the rule, its passage as the standfirst, and its `points`, `duo` and `shot` as panels | 5: a dossier where two or more areas each have screens and a rule; dossier ids keep the deep links |
| `partner-before`, `report-builder-before`, `email-before`: captions only | `hotspots` (three each) with the facts the bullets of the same tile state: one partner per page, business areas in the middle, roles and address as tabs; report information and the two tables one under the other, Criteria and Layout tabs, a second Partner section; the four fields, the preview with its signature line, Send, Don't send and Cancel | 4: hotspots on legacy screens, text from the chapter |
| chapter 07 "What it adds up to", n 07 | n 05, after the dossier | chapter numbers follow the page order |
| component board as an open `shot` | `folded: true`: a drawer with the caption as its title, opened on demand | 4: a board that explains rather than shows is folded |

Not done, and why:

- No `flow` for the research. The passage names the card sort, the interviews, the Usability Hub tests and the Maze tests, but the boards do not state their order, and a flow draws an order. Left as a passage.
- No `joint`. The closing passage says what is not on record; it is not a reflection with answers or a list of what will be measured, and neither was invented.
- No `stats` beyond the three in chapter 03, which already carry their source (board 06). No release or usage figure exists.
- No `evolution`, `loop` or `video`: the project has no design-system versions, no handoff cycle and no clips on record.
- No new mockup. The e-mail template (`email-after.png`, 478 by 970) is a portrait e-mail, not a desktop screen, so its dossier tile shows the flat image as its cover.
- Three pins per legacy screen, not more. A bubble is centred on its pin and about a fifth of the image tall, so on these small crops a fourth pin overlapped its neighbour; the dropped text was folded into the pin beside it, not lost.
- Cover layer five is the component board, not a screen of the application; it is the fifth mockup the study has and the kit asks for four to six. Drop it if a board on the cover reads wrong.
| reports dossier: "My reports in the new layout" shot | removed; the mockup stays in the cover layers and the carousel | her decision, 13 October 2026 |
| reports dossier: "Prototype: My reports with the Send link dialog open" shot | removed; the mockup stays in the cover layers and the carousel | her decision, 13 October 2026 |

## Partner and User screens, user flows, and the 3D screen, 15 October 2026

Her request, 15 October 2026: rebuild the study in the APplus Analytics layout from two Figma files of the project, add the 3D screen, build user flows (Partner, User, My reports, Unit), add screens to the carousel, and fill what is missing.

Sources: Figma "Partner" (`J0cHEcdNS0lpwc7JZTDRL4`, page Partner Details, 19 frames) and "USER" (`LSETdjNVpAhJH8uP2i2rXV`, page User, about 30 frames), opened on her personal account. Each frame has a status card ("Approved /Done" on most; "On hold", "To approve", "Draft file", or "Work in progress" on a few) and a note card, most reading "This is an example of the solution prepared by @Konstancja". The Search User card names "Designer: Konstancja Tanjga-Nawrot", dated 10/10/2022. Every new caption describes only what its screen shows.

Personal data blurred on every new mockup: the signed-in user's ID and name in the Partner header; on the User screens the user's ID, name, surname, e-mail, alias ID, changed-by ID, and the principal partner's ID, name, manager, party, Parma, and CTDI unit; the user, partner, and name columns of Search User; the partner IDs in Partner structure; the serial numbers in Business Info Authorization; the group ID in Search service; the Name, Surname, and Unit ID values typed into the Search User in VCD and Select Partner dialogs. Labels, dates, and placeholder values ("01", "Name surname") are left as they are.

| Before | After | Source |
| --- | --- | --- |
| what: "A legacy ERP redesign: search, reports and the e-mails administrators send" | "A legacy ERP redesign: partners, users, search, reports, and e-mail" | the two Figma files; 3.5 serial comma |
| lead: "…redesigned three parts of it: search, reports, and the e-mails sent to new users." | "…redesigned its search, its reports, the e-mails sent to new users, and the Partner and User screens." | Figma note cards, "solution prepared by @Konstancja" |
| stamp: "LEGACY REDESIGN · SEARCH · REPORTS · E-MAIL" | "LEGACY REDESIGN · PARTNERS · USERS · REPORTS" | as above |
| cover layers: Partner search, My reports, Report builder, Send a report template, Components | Partner Details, User applications, Search User, My reports, Report builder | kit 4: screens of the product; the component board left the cover, as the 13 October log allowed |
| My role and scope: "…redesign of search, reports, and the e-mail template…" | "…redesign of search, reports, the e-mail template, and the Partner and User screens…" | Figma note cards |
| 01 standfirst: "…and the four redesigned screens, one per slide." | "…and its redesigned screens, one per slide." | the carousel now has twelve |
| 01 third bullet: "…look up partners, build reports…" | "…look up and edit partners and users, build reports…" | the Partner and User frames |
| 01 carousel: four slides | twelve: Partner search, Partner Details, a partner's users, business areas, contact book, partner structure, Search User, new user, a user's applications, then My reports, Report builder, Send a report template | Figma frames 4:362716, 4:366346, 4:366503, 4:365492, 4:364511, 1:505026, 1:35002, 1:307467 |
| (no chapter) | 05 "Design system": the exploded Partner Details (`baldoExploded` in content/exploded.ts, node 4:362716; part names are the component names; colours sampled on the export) and the component board, moved here from 05 "What it adds up to" | her request: 3D as in Analytics |
| (no chapter) | 06 "User flows": a dossier of three tiles, each a `flow` of the steps and `annotated` folders of the screens. Partner (7 screens), User (create a user, 4 screens; copy applications, 4 screens), My reports (the 3 board screens already on the page) | frame order on the canvas and the arrows in the frame names; the snackbar's 5 seconds from its note card ("by default disappears after 5 seconds or user can close it") |
| 05 "What it adds up to" | 07, with: "…and the Figma files for the Partner and User screens. In those files most frames carry the status Approved /Done; a few say On hold, To approve, or Draft file." | the status cards |

Not done, and why:

- The 3D screen's `system` first read "Baldo", the product, because the files do not name a design system; it now reads "Volvo Design System", from her CV (see below).
- No clips. The prototype links in both files point at frames that are no longer in them, so there is no clickable path to record.
- No `usecase` blocks. Their slots (rejected alternative, why) are not on record for these screens; the flows say what the screens show, in order.
- Frames taller than the MacBook screen (1588 px against 1262) show a window of the frame; Client Details (1370 px dialog) did not fit and was left out, as were Clients, Application settings, Services, Search service, User partners, and the advanced search, which the flows do not use.
- Screen text quoted as it is, typos included: the snackbar reads "New user has bees successfully created", so no caption quotes it.

### Unit, added the same day

She pointed to the third file, "UNIT" (`VcGKfGxRr1YB7XA9PryVfa`, Page 1): Search Unit, its advanced search, Unit Details on the Address and Partners tabs, and the Baldo Business Areas and Roles (Legacy) dialogs, all "Approved /Done" and "prepared by @Konstancja". A sticky note by the Roles frames reads "TO-DO: DONE, Zunifikowac modal ROLES" (unify the Roles dialog). The partner ID on Unit Details is blurred. The two dialogs and their 40 per cent scrims sit on the canvas over the frames and were composited.

| Before | After | Source |
| --- | --- | --- |
| dossier: `TODO` in place of a Unit tile | tile 04 "Unit: from a search to its roles": a `flow` of four steps and six folders | UNIT frames 1:149070, 1:149081, 1:20167, 1:20419 with 1:20421, 1:20422 with 1:20424, 1:20427 |
| carousel: twelve slides | thirteen, with Unit Details after Partner structure | frame 1:20167 |
| lead, My role and scope, closing passage: "the Partner and User screens" | "the Partner, User, and Unit screens" | the UNIT note cards |

### Period, 15 October 2026

Her instruction: take the period from her CV (`docs/copy-edit/sources/cv-2026-10.md`, "Senior UX/UI Designer, 08/2022 – 08/2023, Volvo Group").

| Before | After | Source |
| --- | --- | --- |
| meta Period: "2022–2023" | "August 2022 to August 2023" | CV; 3.7 no en dash after from or to, months as on the other studies |
| In short, Period and team: "2022 to 2023." | "August 2022 to August 2023." | CV |
| cover credit: "… · 2022–2023" | unchanged | the credit carries years only on every study |

### My reports tile removed, 15 October 2026

Her decision: the tile "My reports: find, build, send" and its panels (a `flow` of three steps and three folders of the board screens) are removed from "User flows". The report screens stay in the cover layers, the carousel, and the "A report is criteria and layout" tile of chapter 04. The Unit tile is now 03.

### Two facts from the CV, 15 October 2026

She approved both (her answer "3 - ok"). Source: `docs/copy-edit/sources/cv-2026-10.md`, Volvo Group entry.

| Before | After | Source |
| --- | --- | --- |
| meta Team: "Angular developers, a business analyst, …" | "Four Angular developers, a business analyst, …" | CV: "Delivered with four Angular developers, a BA, product owner and project manager" |
| In short, Period and team: "… Angular developers, …" | "… Four Angular developers, …" | as above |
| 3D block `system`: "Baldo" | "Volvo Design System" | CV: "built its design system on the corporate Volvo Design System" |
