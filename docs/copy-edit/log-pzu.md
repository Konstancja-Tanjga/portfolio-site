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
