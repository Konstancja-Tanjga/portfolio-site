# Edit log: Flow mode (`site/src/content/flow.ts`)

First pass, 11 October 2026, against `docs/case-study-kit/RULES.md` and `docs/STYLE.md`: the "In short" `spec` becomes a `brief`, the three long passages become a lead sentence plus `points`, the two decisions that have screens fold into a `dossier`, the delivery paragraph becomes a `flow` of four stages, the closing "next I would like to measure" becomes a `joint`, and the mechanical rules (em dashes, serial comma, indirect openings). The chapter ids 00 to 06 are unchanged, so every deep link still resolves. The study is at Asseco Solutions and the cover already says 2026, so the title is "Lead Designer, UX Engineer" as on the other 2025 and later APplus studies. No fact, number, date, quote, or result was added; the study has no measured results and still states none. The cover keeps its shot and gets no `layers`: the only screens are flat cuts from the Behance boards at 930 px wide, too small for a hero.

| Before | After | Rule |
| --- | --- | --- |
| header comment: "implementation, QA and usability testing. There are no measured results, so the page states none." | "implementation, QA, and usability testing. No results were measured, so the page states none." | serial comma; 2.2 no indirect opening |
| what: "A new navigation, page layout and FOX v2.5 components for an existing part of APplus ERP" | "A new navigation, page layout, and FOX v2.5 components for an existing part of APplus ERP" | serial comma |
| lead: "the move to FOX v2.5 and the components that move needed" | "the move to FOX v2.5, and the components that move needed" | serial comma |
| credit: "Lead Product Designer · Asseco Solutions · 2026" | "Lead Designer, UX Engineer · Asseco Solutions · 2026" | one title on every channel for Asseco work in 2025 and later |
| { label: "Role", value: "Lead Product Designer" } | { label: "Role", value: "Lead Designer, UX Engineer" } | one title |
| { label: "Product", value: "APplus ERP — Flow mode, in the product since APplus 8 (October 2023)" } | { label: "Product", value: "APplus ERP, Flow mode, in the product since APplus 8 (October 2023)" } | 3.6 em dash |
| (no Period row) | { label: "Period", value: "2026" } | RULES 6: period on every study; the year is the cover credit's |
| (no Product context row) | { label: "Product context", value: "APplus: ERP-System des Jahres 2025, Gold in the User Experience category" } | brief: award carried on every APplus study; the year as chapter 06 of this file states it |
| kind: "spec", rows: Problem, My part, Decision 1 to 3, Evidence, Shipped | kind: "brief", rows: Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team | RULES 2: the 30-second read. Context from chapter 01; Outcome from Evidence and Shipped; Period from the credit; team from "My part" |
| key: "My part", value: "… I worked with the developers, helped with QA and ran usability tests with users." | key: "My role and scope", value: "… I worked with the developers, helped with QA, and ran usability tests with users." | brief row; serial comma |
| key: "Decision 2", value: "A new layout for an item's Page details." | "A new layout for an item's Page details: a panel beside the board, with the order details as a list of labels and values." | brief: the decision, not only its name; facts from chapter 03 |
| key: "Evidence", value: "Usability tests with users during implementation. There are no measured before-and-after figures." + key: "Shipped", value: "Flow mode is live in APplus." | key: "Outcome", value: "Flow mode is live in APplus. Usability tests with users ran during implementation; no before-and-after figures were measured." | brief; 2.2 no indirect opening |
| "<p>Flow mode is a way of working in APplus ERP built around boards. Each board is a set of columns by status, such as Created, Ready for release, Released and Inactive … I did not create it.</p><p>What I changed is how people move around it … designed the components that were missing for the new navigation.</p>" (131 words) | "<p>Flow mode is <strong>a way of working in APplus ERP built around boards</strong>. It has been part of APplus since version 8, released in October 2023.</p>" + points: A board is a set of columns by status; I changed how people move around it; The screens moved to FOX v2.5 | RULES 6: over 60 words becomes a lead sentence plus points; serial comma |
| (no maxim on chapter 01) | maxim: "I did not create Flow mode. I changed how people move around it." | RULES 6: a maxim the chapter earns; both sentences are the passage's |
| "<p>The new navigation came out of a Futures Thinking workshop I designed and facilitated. The team had two questions … started from that brief.</p><p>The workshop has its own page, with the method, the scenarios and what the room decided.</p>" (87 words) | "<p>The new navigation came out of a <strong>Futures Thinking workshop</strong> I designed and facilitated.</p>" + points: Two questions the team could not settle; The workshop turned them into an agreed scope; The workshop has its own page | RULES 6: lead plus points; serial comma |
| chapter 03: three passages ("The new navigation", "The Page details layout", "New components from the gaps") with a `duo` and a `shot` between them | `dossier` of two tiles (d-navigation with its points and the tablet duo; d-page-details with the tablet details shot), then the "New components" passage, which has no screen | RULES 2: two areas each with screens and a rule fold into a dossier; the third decision has no screen and stays a passage |
| (no maxim on chapter 03) | maxim: "The header always tells you where you are." | the first sentence of the navigation passage |
| passage: "On a phone the same jobs move to a bottom bar with Search, Inbox, Filter and More." | points item: "<strong>On a phone the same jobs move to a bottom bar</strong> with Search, Inbox, Filter, and More." | serial comma; bold claim |
| caption: "An item's details in a panel beside the board, on tablet." | "An item's details in a panel beside the board, on tablet: the tag at the top, “Move to”, and the order details as labels and values." | caption says what to look at; the facts are the passage's |
| "<p>I stayed with the work while it was built. I worked with the developers during implementation, and I helped with quality testing. I also ran usability tests with users on the new navigation and layout.</p>" | maxim "I stayed with the work while it was built." + `flow`: Workshop, Design, Implementation and QA, Usability tests | RULES 2: a sequence of stages is a flow; every stage is a sentence from chapters 02 to 04 |
| caption: "The options sheet: Kanban or Focus view, Share, the tenant, Settings and Ask Elly." | "… Settings, and Ask Elly." | serial comma |
| "<p>I have no measured results for this work, so this page states none. What I can show is the navigation, the Page details layout and the FOX v2.5 components …</p><p>Next I would like to measure how often people change board or tenant from the header, and whether the phone's bottom bar covers what they come to do.</p>" | standfirst "No results were measured for this work, so this page states none." + passage "What I can show is <strong>the navigation, the Page details layout, and the FOX v2.5 components</strong> …" + `joint` "What will I measure, and how?" with the two answers | RULES 2, chapter 11: a reflection is a joint; serial comma |

Not changed, and why:

- No "What would I do differently?" joint: the file has no such reflection and none was invented.
- No personas, audit, prototypes, design-system, sign-off, handoff, or evidence chapter: the file has no facts for them. The "how" half of the joint question has no answer in the file beyond the two things to measure, so the answers state only what will be measured.
- The quoted dialog text "Your current context defines data access and system behaviour." is kept verbatim as a product string.

Unresolved facts, for Konstancja:

- The year. The cover credit says 2026 and nothing else in the file or the inventory dates the work; the new Period row and the "Period and team" row repeat that 2026. If the navigation and FOX v2.5 work ran in 2025, the credit, the Period row, and the brief row all change together. The Futures Thinking study is credited 2025.
- The team. The file names developers, QA, and users, with no count and no PM or requirements engineer; the brief row says "The developers and QA of Flow mode, and me". If the team was larger, the row is incomplete.
- The award year. Chapter 06 of this file names ERP-System des Jahres 2025 only; the Analytics and Elly strips say 2025 and 2026, and the CV says 2025 only (the inventory's open row). The Product context row follows this file: 2025 only.
- The title. The role is "Lead Designer, UX Engineer" because the credit says 2026 and the work is at Asseco Solutions. If the work predates 2025 the earlier title applies.
| { label: "Product context", value: "APplus: ERP-System des Jahres 2025, Gold in the User Experience category" } | { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" } | brief: the award row carried on every APplus study, both years (confirmed fact) |
| credit, Period, brief: "2026" | "2023" | settled by her on 11 October 2026 (Flow mode shipped with APplus 8, October 2023) |
| "User Experience ERP category" | "User Experience category" | settled: same wording both years |

## Layout pass, 13 October 2026

Against the layout, microinteractions, and motion of `bi.ts`: a `carousel` of the parts of Flow mode in chapter 01, without a frame, because the screens are tablet cuts and one desktop cut. Titles and bodies are the existing captions. No image file was created or deleted.

| Before | After | Rule |
| --- | --- | --- |
| chapter 01: one `shot` of the desktop board | `carousel` of five: a board on desktop, the tenant dialog, board parameters, Page details, the dark theme | stack 01: every part of the application, one screen per slide; bodies from the captions in chapters 03 and 05 |

Not done, and why:

- No cover `layers` and no `frame` on any slide: the screens are tablet and phone cuts from the Behance boards, not MacBook mockups, and the kit's layers are MacBook mockups.
- The four phone screens are not in the carousel: the carousel stage has a fixed 2530 by 1600 aspect and a slide is the image at full width, so a 442 by 942 phone screen would overflow it. They stay a `set` in chapter 05. A carousel that takes a phone needs a change in the block.
- No `hotspots`: the study has no audit, benchmark, or old-version screen.
- No `folded` shot: no diagram or board on the page.
- No `stats`: the study has no number with a source.
- The tablet cuts are 930 px wide and the carousel draws them at up to 72 rem, so they will be soft on a large screen. Larger exports would fix this; none exist.

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, before the rebuild (1 023 words, 10 708 px at 1440, 7 chapters, 14 images):

- Good: a short study that says what is hers and what is not; the maxim in 01 and the dialog quote in 03 are specific.
- Good: the tablet screens show the three navigation decisions; the phone screens show the bottom bar.
- 00 has eight rows and no picture; Context repeats the lead, Period and team repeats the Period row.
- The role is stated four times: lead, 00 My role and scope, 01 third bullet, 03 closing passage.
- The 01 bullets repeat the lead and 00; the carousel is the only new thing in the chapter.
- 03 is a dossier of two tiles: the decisions hide behind a click, and the third decision has no tile and no screen.
- 04 carries a third maxim and its Workshop stage repeats 02.
- 05 Screens is reference, not argument: the dark theme (already in 01) and four phone screens with no claim beside them.
- 06 repeats the outcome and the award, both in the metadata strip and in 00.
- Tools: the file names FOX and nothing else; no Figma, Storybook, repository, or test tool is on record, so the reader cannot tell how the work was done.

| Before | After | Why |
| --- | --- | --- |
| 00 rows Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team | What, Problem, My role, Decision 1 to 3 with shots, Outcome, Period and team | the sixty-second page; the meta strip has Period but no team, so the team row stays |
| 00 Decision 3 "Where the new navigation needed a pattern FOX did not have, I designed the component" (no screen shows it) | Decision 3 "Board parameters sit under the header as chips and are edited in a popover" with the tablet-parameters shot; the FOX components fact moves to My role and to the "On a phone" tab | each decision carries the screen that shows it taken; the components fact stays, said once |
| 00 shots: none | tablet-tenant (Decision 1), tablet-details (Decision 2), tablet-parameters (Decision 3), all linking to #decisions; no `frame`, the cuts are tablet exports, not MacBook files | brief rule 2 |
| 01 passage + three bullets (board, my part, FOX v2.5) | one passage with the board's columns; bullets cut | the second and third bullets were the lead and 00 |
| 01 carousel of five (desktop, tenant dialog, parameters, details, dark theme) | four: desktop, parameters, details, dark theme | the tenant dialog is the proof of Decision 1 and lives in 03; the dark theme moves here from the dropped 05 |
| 02 three bullets | passage with the workshop link and "has its own page", two bullets | the third bullet was a sentence about the link |
| 03 `dossier` of two tiles + closing passage on FOX components | `tabs` of three peers: The navigation (points + duo), Page details (points + wall shot), On a phone (points + portrait carousel of four phones) | peer content of equal rank in one row; nothing hides behind a tile; the third decision gets its screens |
| 03 standfirst "Open a tile and the decision unfolds to the right." | "Three decisions, one per tab, with the screens that show them." | says what is on the page |
| 04 maxim "I stayed with the work while it was built." | the same line as standfirst | two maxims on the page at most (01 and 03) |
| 04 flow stage bodies, four sentences | fragments | the kit's step bodies |
| 05 Screens (dark theme shot + phone carousel) | chapter dropped; the dark theme is a slide in 01, the phones are the "On a phone" tab in 03; 06 renumbered 05 | reference without a claim; the deep link #screens had no inbound link on the site |
| 06 passage "What I can show is the navigation, the Page details layout, and the FOX v2.5 components … Gold … ERP-System des Jahres 2025" | cut; the standfirst stays | the outcome is in 00, the award in the metadata strip (2025 and 2026, the confirmed fact; the passage said 2025 only) |
| 06 joint "What will I measure, and how?" | "What will I measure?" | the file never answers "how" |
| captions, slide bodies | fragments | kit: captions as fragments |

No `sheet`: the file, its log, and the sources name no tool chain for this work beyond FOX v2.5 (the CV states Figma, Storybook, and Nexus as her general practice, not for Flow mode in 2023). The `flow` of four stages stays as the only process block. No `fold`: nothing on the page is reference a first pass skips. Images: 14 to 11 (two duplicates of the tenant dialog and one of the dark theme gone).

Numbers at 1440: 1 023 to 789 visible words; 10 708 to 8 791 px; 7 to 6 chapters; 14 to 11 images. At 390 px no horizontal scroll.

Unresolved, for Konstancja:

- The tools of this work: Figma for the navigation and the Page details layout, the FOX v2.5 library (Figma or Storybook at that version), the repository, and how the usability tests were run and with how many users. With these on record the chapter 04 flow becomes a sheet.
- Which components were added to FOX for the navigation (the chips and popover for board parameters, the phone bottom bar, the tenant dialog). The page says only "the components FOX lacked".
- Decision 3 now reads "Board parameters sit under the header as chips and are edited in a popover, so the board stays in view": the reason clause is inferred from the screens, not stated in the earlier file.
