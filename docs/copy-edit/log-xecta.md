# Edit log: Xecta (`site/src/content/xecta.ts`)

One pass, 11 October 2026, against `docs/STYLE.md` and the section stack in `docs/case-study-kit/RULES.md`: an "In short" `brief` (Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team), "What it is" as `points` plus a `carousel`, "Why this is a hard brief" as `points`, and the two pieces of work folded into one chapter with a `dossier` of two tiles, so that the deep links `#product` and `#website` keep opening the right place. The role stays "Senior UX & UI designer" as the boards state it, because the work predates Asseco Solutions. No persona, research, handoff, or results chapter was written: the boards have nothing for them. No `flow` and no `joint`: the file has no sequence of stages and no reflection. The three decisions in the brief are read off the screens and captions already in the file, not added. The only new wording in the captions names what is visible in the image (the Drilling menu, the three laptop screens on board 02, the current setpoint marker on board 04). The `02.png` and `05.png` boards carry typeset text, which the kit discourages, but they also carry screens that exist nowhere else, so they stay, with captions that say what to look at. No image file was created or deleted.

| Before | After | Rule |
| --- | --- | --- |
| lead: "The product is a web application… The second is the company website… I documented my product work in Confluence" | lead: "The first is a web application… The second is the company website… I documented the product work in Confluence" | 2.3 parallelism; first and second |
| { label: "Website", value: "…with an additional UI designer and 2 developers" } | { label: "Website", value: "…with an additional UI designer and two developers" } | numbers under ten in words, consistent with the rest of the file |
| { label: "Period (product)", value: "April 2020 – July 2021" } | { label: "Period (product)", value: "April 2020 to July 2021" } | 3.7 no en dash after a month in a meta value; same as log-elly |
| (no In short chapter) | chapter 00 "In short", kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome ("Not measured. On record are the deliverables…"), Period and team | brief: the 30-second read; Outcome states what is on record and nothing else |
| (no What it is chapter) | chapter 01 "What it is": `points` (mockups and prototypes; Confluence documentation; UX and UI for xecta.com) + `carousel` of five slides (Dashboard, Well Performance, Artificial Lift Timing Selection, xecta.com in the MacBook frame, a product page) | section stack 01; one screen per slide, each with a title and one line |
| maxim (chapter 01 "The product"): "The people reading these charts are operators rather than analysts, and the industry has its own language for every number." | the same sentence as the maxim of chapter 01a "Why this is a hard brief"; the chapter body is `points`: industry language first; a lot of data visualisation; professionals from the drilling industry; a distributed US team | section stack 01a; a maxim is an assertion the chapter earns |
| (quote on board 05, inside the image only) | pull: "“It made her master the nomenclature of the industry.”" (9 words) | pull quotes at most 15 words; verbatim from the board |
| caption: "From the project board: my manager on how fast I learned the industry's nomenclature, beside the Opportunities list and the Insights screen with a liquid-loading chart." | caption: "From the project board: my manager on how fast I learned the industry's nomenclature. Below it, the Opportunities list with a row opened on its recommendation, and the Insights screen with a liquid-loading chart." | section 5: a caption says what to look at |
| chapter "product" (n 01) and chapter "website" (n 02), each a run of `shot` blocks | chapter "two-pieces" (n 02) "Two pieces of work" with a `dossier` of two tiles, ids `product` and `website`, each with cover, maxim, standfirst, and its shots | dossier: two distinct areas, each with screens and a rule; dossier ids keep the deep links |
| standfirst (website): "Same client as the product, opposite audience: the product is used daily by the people who run the wells, the website is read by people who will never log in." | maxim (chapter): "Same client, opposite audience." + standfirst: "The product is used daily by the people who run the wells; the website is read by people who will never log in. Open a tile and the piece unfolds to the right." | 3.15 semicolon between independent clauses; maxim one sentence |
| caption: "From the project board: an AI company in the energy and drilling industry. My tasks were mockups and clickable prototypes, together with a UX designer and a researcher." | caption: "…with a UX designer and a researcher. Below, three screens: Insights for one well, Insights with a liquid-loading chart, and the Well Performance map." | section 5: a caption says what to look at; 2.4 "together with" to "with" |
| caption: "Dashboard for one group of wells: the production summary chart, the largest deferrals, and today's opportunities traced from lift type to cash flow." | caption: "Dashboard for one group of wells. The production summary chart on top; the largest deferrals on the right; today's opportunities below, traced from lift type through opportunity and action to cash flow." | section 5: where to look on the screen |
| caption: "Well Performance: a table of wells with setpoint and workover opportunities, one row opened on its setpoint chart and valve pressure traverse." | caption: "Well Performance: a table of wells with setpoint and workover opportunities. One row is opened on its setpoint chart, with the current setpoint marked, and its valve pressure traverse." | 3.5 no comma splice; section 5 |
| caption: "Artificial Lift Timing Selection for one well: lift scenarios compared by NPV, with the IPR and VLP curves for each." | caption: "Artificial Lift Timing Selection for one well. Lift scenarios are compared by NPV in the table on the left; the IPR and VLP curves for each are drawn on the right." | section 5: where to look on the screen |
| caption: "From the website board: my role was the website's UX and UI and working with the developers. The team was one more UI designer and two developers." | caption: "From the website board: my role was the UX and UI of the website and the work with the developers. The team was one more UI designer and two developers. The home page with the Drilling menu open." | 1.2 no possessive on an inanimate noun; 2.3 parallel nouns; section 5 |
| caption: "The home page, a services section, the Operational Efficiency product page and the contact form, on desktop and phone." | caption: "The home page, a services section, the Operational Efficiency product page, and the contact form, each on desktop and on a phone." | 3.5 serial comma |
| caption: "The Well Performance Analysis product page on desktop, next to the offices block on a phone." | caption: "The Well Performance Analysis product page on desktop, beside the offices block on a phone." | 2.4 plain words |
| caption: "The Artificial Lift Timing & Selection and Well Performance Analysis pages on a tablet." | caption: "The Artificial Lift Timing and Selection page and the Well Performance Analysis page on a tablet." | ampersand in prose; 1.5 repeat the article for two different pages |
| caption: "xecta.com on phones: the home page, product pages, the Unconventionals section and the offices." | caption: "xecta.com on phones: the home page, the product pages, the Unconventionals section, and the offices." | 3.5 serial comma |

Not changed, and why:

- The credit "Senior UX & UI designer · Xecta · 2020–2021 and 2022" keeps the ampersand and the en dash: it is a label in the form the boards state, and 3.7 allows the en dash for an inclusive range. The role is not "Lead Designer, UX Engineer", because the work is not at Asseco Solutions.
- The cover has no `layers`: only one screen exists as a device WebP (`device/website-01-2400.webp`), and the kit asks for four to six. No file was created.
- The product screens `03.png`, `04.png`, `06.png` are flat PNGs of laptop mockups, not device WebPs, so they carry no `frame`. The kit wants WebP mockups; exporting them is a separate job.
- "Decision 1" to "Decision 3" are read off the screens and the captions (industry nomenclature on every number, the dashboard's path from lift type to cash flow, the website for people who never log in). They are not decisions recorded on the boards as decisions. If any is not hers, it should be cut, not reworded.

Unresolved facts, for Konstancja:

- Product dates. The site and the CV say April 2020 to July 2021; LinkedIn says April 2021 to July 2022 (`docs/copy-edit/INVENTORY.md`, "Facts that disagree"). Left as found.
- The board quote is attributed to "Stephen, my manager" on `05.png`. The pull quote carries no name, because the surname and role are not on record outside the board.
- The website board says "My task: to design application (web, iOS, Android) for Xecta company as well as a website service." The file claims only the web application and the website; the iOS and Android claim was not added because nothing else on record supports it.
- Board 02 says "Several-month project"; the meta says fifteen months (April 2020 to July 2021). One of them is loose. Left as found.

## Layout pass, 13 October 2026

Against the blocks the APplus Analytics study uses (`docs/case-study-kit/RULES.md`, sections 2, 4 and 5). Boards 03, 04 and 06 are each one desktop screen of the product set in a photograph. The application rectangle was cropped out of each (`screens/dashboard.png`, 1397 by 716; `screens/well-performance.png`, 1402 by 715; `screens/lift-timing.png`, 1405 by 721) and composited into the MacBook frame with the scratchpad pipeline, giving `device/dashboard-*.webp`, `device/well-performance-*.webp` and `device/lift-timing-*.webp` at 1600, 2400 and full width. No pixel of the application was changed; the photograph around it fell away, as the Volvo crops did.

| Before | After | Rule |
| --- | --- | --- |
| cover: `art` + `shot` only | + `layers` of four mockups: Dashboard, Well Performance, Artificial Lift Timing Selection, xecta.com | 4: a hero cover is four to six screens of the product cycling with opacity |
| chapter 01 `carousel`: `03.png`, `04.png`, `06.png` as flat boards with the photograph around the screen | the three device mockups with `frame: "macbook"`; the two website slides unchanged | 4: a product screen is a MacBook mockup, a flat image is for boards |
| chapter 01a: board `05.png` as an open `shot` | `folded: true`, opened on demand; the pull quote above it stays on the surface | 4: a board with typeset text explains rather than shows |
| dossier `product`: cover `03.png`, then `02.png`, `03.png`, `04.png`, `06.png` as flat shots | cover `device/dashboard-2400.webp` framed; `02.png` folded; the three screens as framed mockups, captions unchanged | 4: one mockup per claim; the board that explains is folded |
| header comment | + the crop and composite, and which boards are folded | the file says where its images come from |

Not done, and why:

- The fourth cover layer is the existing `device/website-01-2400.webp`, which is the website board inside a MacBook, not a page of xecta.com. The website boards (`website-01` to `website-05`) show every page inside a laptop, tablet or phone bezel or in a collage; the only flat desktop pages, in `website-02.png`, are about 1100 pixels wide and would be blurred at mockup size. A page export of xecta.com would replace this layer.
- No `hotspots`: the study has no legacy, audit or research screen. The product screens are the designed screens, and pinning claims on them would be captions in bubbles.
- No `joint`, `flow`, `stats`, `evolution`, `loop` or `video`: the boards record no reflection, no sequence of stages, no measured number, no system versions, no handoff and no clips, as the 11 October pass noted.
- `website-02.png` to `website-05.png` stay as open flat shots: they show screens rather than explain, so folding them would hide the website.
- The carousel keeps `website-01.png` and `website-03.png` flat: they are boards of several devices, not single screens, so a MacBook around them would be a frame around frames.

## 15 October 2026: the Figma prototype, and the dates from the CV

Sources: the product's Figma file "Unconv" (Figma `w7KrgQm0lIMZq54LTq8TS3`, page `0:1`), opened through the Figma connector on the owner's account, and her CV of October 2026 for the dates. Her answers on 15 October: take the dates from the CV; remove "Hess". "Hess" appears only in the file's notes, not on any exported screen, so nothing on the page carries it.

How the images were made: each frame exported at 8/3, so a 1440 px frame is 3840 px wide, the laptop's screen width. The 900 px frame is shorter than the screen, so the band below it takes the frame's own bottom colour. Blurred: the four names in the comments panel (`1:12312`), the user's name in the greeting (`1:12846`), "Updated May 3, 2022" in the Insights header, and "Tuesday, October 12, 2021" in Network Optimization. Weekday dates without a year and chart axes are left.

| Before | After | Source or rule |
| --- | --- | --- |
| credit: "Senior UX & UI designer · Xecta · 2020–2021 and 2022" | "Senior UX & UI designer · Xecta · 2020 to 2021" | CV: Xecta 04/2020 – 07/2021; 3.7 no en dash as "to" |
| { label: "Period (product)", value: "April 2020 to July 2021" } + { label: "Period (website)", value: "2022" } | { label: "Period", value: "April 2020 to July 2021" } | CV: one engagement, "Designed the corporate website" inside it |
| Context: "… Two projects, two years apart: the product, then the company website." | "… Two projects for it: the product and the company website." | CV period |
| Period and team: "April 2020 to July 2021 for the product, … 2022 for the website, …" | "April 2020 to July 2021. The product with a UX designer and a researcher; the website with a UI designer and two developers." | CV period; the team unchanged |
| cover art `cover-art.webp`, shot `00-cover.png` | `device/home-2400.webp` for both | frame `1:12139`; covers keep one app screen |
| cover layers: Dashboard, Well Performance, Artificial Lift Timing Selection (photo crops), xecta.com | Wells, Pro summary, Opportunity, Production centric, Network optimisation, xecta.com | frames `1:12139`, `1:12310`, `1:12827`, `1:12852`, `1:12390`; website layer kept |
| carousel: three product screens cropped from photographs, two website boards | 14 product screens from the prototype, then the same two website boards | frames, in slide order: `1:12139`, `1:12211`, `1:13077`, `1:12342`, `1:13165`, `1:12310`, `1:12316`, `1:12827`, `1:12823`, `1:12312`, `1:12846`, `1:12851`, `1:12852`, `1:12390`; captions describe only what is on screen |
| (no chapter 03) | chapter 03 "Prototype": a `flow` of five stages and two clips in the MacBook | stages from the use-case notes beside the Anomalies frames ("User inspects the well card to see more well details", "User click on the pro summary button to see the well overview", "… deep dive into the 3rd level"); clip 1 along the prototype's links `1:12342` to `1:12310`, tabs to `1:12316` and `1:12827`, Comments to `1:12312`; clip 2 the frames `1:12390`, `1:12818`, `1:12820`, `1:12386`, `1:12387`, `1:12389`, `1:12388` in the file's numbering |

The dossier keeps the three photo-cropped product screens and the boards: they are the record of the earlier screens and of the role lines.

Not done: an early-and-final pair of the home page. The early frame beside the review notes (`1:146556`) is the same component as the final one, so the pair would show one screen twice.

Removed files, no longer referenced: `cover-art.webp`, `00-cover.png`.

Later the same day, at the owner's request:

| Before | After | Source or rule |
| --- | --- | --- |
| lead, plain | `leadAccent` on "production surveillance and optimisation software for upstream oil and gas", in `#e3d2ad`, the site's highlight (`--kt-sand`, `--bh-mark`) | owner: mark the phrase in the highlight colour |
| chapter 01a: pull "“It made her master the nomenclature of the industry.”" and the folded board `05.png` | removed; `05.png` deleted | owner |
| MacBook mockups with the light slab under the base and the silver sliver left of the lid | cleaned with `site/scripts/clean-mockups.py` | owner: no shadows or grey bars |
