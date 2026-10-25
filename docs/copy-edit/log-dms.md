# Edit log: APplus Documents (`site/src/content/dms.ts`)

First pass, 11 October 2026, to the standard of `log-bi.md`: the TL;DR as a `brief`, long passages as a lead sentence plus `points` or a `flow`, the pull quote cut, the handoff wording, a `joint` in the closing chapter built from the After release stage, and the mechanical rules (em dashes, arrows, serial comma, indirect openings). No fact, number, or date was added. The concept tool here is Figma Make, as the file states, so the handoff line says Figma Make where the Analytics page says Claude Design. The team of two senior designers dates from October 2026, after this project, so it is not claimed here.

| Before | After | Rule |
| --- | --- | --- |
| lead: "Versioning, metadata, search, permissions and retention over documents that lived in network drives and mail threads — under German commercial retention law, …" | lead: "Versioning, metadata, search, permissions, and retention over documents that lived in network drives and mail threads, under German commercial retention law, …" | 3.6 em dash; serial comma |
| credit: "Lead Product Designer · Asseco Solutions · 2026" | credit: "Lead Designer, UX Engineer · Asseco Solutions · 2026" | one title on every channel |
| { label: "Role", value: "Lead Product Designer, sole designer on the product" } | { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" } | one title; plain words |
| { label: "Product", value: "APplus ERP — Documents" } | { label: "Product", value: "APplus ERP, Documents" } | 3.6 em dash |
| value: "FOX, which I own; the v2.3 → v3.0 migration done with one other designer" | value: "FOX, which I own. The migration from v2.3 to v3.0, with one other designer" | no arrows in prose; 3.15 semicolon |
| { label: "Team", value: "3 developers, a requirements engineer, a researcher, QA, a PM and one designer" } | { label: "Team", value: "Eight: three developers, a requirements engineer, a researcher, QA, a PM, and me" } | same form as the Analytics meta; serial comma; the count is the sum of the list |
| { label: "Period", value: "October 2025 – August 2026, eleven months" } | { label: "Period", value: "October 2025 to August 2026, eleven months" } | 3.7 no en dash as "to" in a meta value |
| (no Product context row) | { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" } | brief: award carried on every APplus study |
| kind: "spec", rows: Problem, My part, Decision 1..3, Evidence, Period | kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome, Period and team | brief: the 30-second read; Context from chapters 01 and 03 |
| key: "My part", value: "The shape of the product, the user flows, …" | key: "My role and scope", value: "The only designer on the product: the shape of the product, the user flows, …" | brief: role stated in the row; "1 designer" from the results stats |
| key: "Evidence", value: "6 sessions with internal SMEs before specification. A competitor's administration screens annotated… Prototypes in Figma Make walked through…" | key: "Outcome", value: "A paper trail an auditor can walk in either direction… 6 sessions with internal SMEs…; a competitor's administration screens annotated…; prototypes in Figma Make walked through… The patterns this product needed went into FOX and came back at a pinned version." | brief: Outcome row from the Evidence row, the results standfirst, and the results points; no release claim, because the file makes none |
| key: "Period", value: "October 2025 – August 2026" | key: "Period and team", value: "October 2025 to August 2026, eleven months. Eight people: three developers, a requirements engineer, a researcher, QA, a PM, and me." | brief: Period and team |
| "with their versions, metadata, tags, permissions and retention" | "with their versions, metadata, tags, permissions, and retention" | serial comma |
| "<p><strong>What I owned:</strong> the shape of the product, the user flows, the competitive analysis, the early prototypes in Figma Make that I used to test ideas…, the low-fidelity work, and direct day-to-day work with the developers. FOX 2.3, the design system this is built on, I built with one other designer.</p>" (78 words) | "<p><strong>What I owned.</strong> The only designer on the product, from the first requirement to the developers' daily questions.</p>" + points: The shape of the product; The competitive analysis; The early prototypes in Figma Make; The low-fidelity work; Day-to-day work with the developers; FOX, the design system it is built on | 2.3.2 itemisation; ownership first (cv-analysis §2); the FOX sentence now matches the meta and the brief (migration v2.3 to v3.0), where the old sentence said "FOX 2.3 … I built" |
| pull: "The challenge was more than storage. Every document needed a visible status and a clear owner, inside a process where several people, sometimes from different companies, hand documents back and forth without losing track of where things stood." (41 words) | passage: "<p>Storage was the smaller half of the brief. Several people, sometimes from different companies, hand documents back and forth, and nobody may lose track of where things stand.</p>" + pull: "Every document needs a visible status and a clear owner." (10 words) | pull quotes cut to 15 words; the facts kept in a passage |
| standfirst: "across Germany, Italy and Austria" | "across Germany, Italy, and Austria" | serial comma |
| "users in warehouse, finance, compliance and audit roles" | "users in warehouse, finance, compliance, and audit roles" | serial comma |
| "on which features were actually needed" | "on which features were needed" | 2.4 empty intensifier |
| "<p>I walked a competitor's document and user administration screen by screen and annotated it in place: every action, every menu and every modal marked up on the screenshot rather than summarised afterwards.</p><p>What that produces is a map of decisions somebody else already made: …</p>" (84 words) | "<p>I walked a competitor's … and <strong>annotated it in place</strong>: every action, every menu, and every modal marked up on the screen rather than summarised afterwards.</p>" + points: A map of decisions somebody else already made; The cost of reaching a document; What a compliance-bound product cannot copy | 2.3.2 itemisation; "screen" for "screenshot" |
| "<p>I looked at products that solve the same structural problem… and took decisions from them rather than styling.</p><p>What came back: how a landing surface can summarise state…, how a table stays readable…, where a detail panel beats a detail page, and how much of a record…</p>" (80 words) | "<p>I looked at products … and <strong>took decisions from them rather than styling</strong>.</p>" + points: A landing surface summarises state before it offers actions; A table stays readable at a few hundred rows; A detail panel beats a detail page; A record has a limit | 2.3.2 itemisation; 2.6 emphasis |
| "<p>Before a single frame was drawn, a settled requirement went into Figma Make and came back as something clickable in hours. Those prototypes were the argument in the room…: flows walked through end to end, weak options dropped on the spot. The example below is dossier plans…</p>" (74 words) | flow: A settled requirement; Clickable in hours; Argued over in the room; note: "The example below is dossier plans, which define how documents are grouped into dossiers at runtime." | a sequence of stages is a `flow`; same shape as Analytics chapter 05 |
| caption: "Customer, Order and Project are system baselines" | "Customer, Order, and Project are system baselines" | serial comma |
| caption: "reviewed, named and versioned into FOX" | "reviewed, named, and versioned into FOX" | serial comma |
| caption: "its status, owner, reviewer and last update, … the demo in light, dark and client colour" | "its status, owner, reviewer, and last update, … the demo in light, dark, and client colour" | serial comma |
| caption: "each version with its author, number and date" | "each version with its author, number, and date" | serial comma |
| caption: "The same screen on a tablet." | caption: "The same version history on a tablet: the template survives the narrower width." | captions name what is shown and the decision it demonstrates |
| "<p>Every screen ships with its documentation attached: what the screen is for, what each zone does, and the annotations that explain the rules a static image cannot show…</p><p>The point is that a developer, a tester and an auditor all read the same artefact…</p>" (74 words) | "<p>Every screen ships with <strong>its documentation attached</strong>, so that a developer, a tester, and an auditor all read the same artefact, and none of them has to ask a designer what was meant.</p>" + points: What the screen is for; What each zone does; The rules a static image cannot show | 2.3.2 itemisation; the purpose first |
| caption: "the designer and the Approved sign-off. … requirements, development, content, user flow and interaction." | "the designer, and the Approved sign-off. … requirements, development, content, user flow, and interaction." | serial comma |
| standfirst: "Design and code were kept in sync by tooling. Handoff ran Figma → Storybook → dev with Code Connect in play, so FOX components in the design file are tied to their implementations instead of described in a spec sheet." | standfirst: "Concepts in Figma Make, the design in Figma, the handoff through Dev Mode, Code Connect, and Storybook. A prototype answers the behaviour questions and proves the composition; the implementation is the developers' code on the FOX package. I own the component API and the tokens, and I review every pull request into the library." | brief: handoff wording; no arrows in prose |
| caption: "Dashed: the loop also runs the other way, Codex → Figma over MCP, …" | caption: "Dashed: the loop also runs the other way, from Codex to Figma over MCP, …" | no arrows in prose |
| "Light, dark and high contrast were must-haves" | "Light, dark, and high contrast were must-haves" | serial comma |
| standfirst: "Handoff delivers FOX code and annotated frames, so what reaches review is built from the right parts and documented. … that every state tells the truth about the document behind it — deleted, restored, hidden, versioned." | standfirst: "The developers build on the FOX package and work from annotated frames, so what reaches review is made from the right parts and documented. … tells the truth about the document behind it, whether deleted, restored, hidden, or versioned." | brief: handoff wording; 3.6 em dash |
| rule 01: "beside the frame and its annotations — requirements, interaction, user flow, content, development." | "beside the frame and its annotations: requirements, interaction, user flow, content, and development." | 3.6 em dash; 3.4 colon introduces the list; serial comma |
| why 01: "The annotations exist so nobody has to ask what was meant." | "The annotations exist so that nobody has to ask what was meant." | 1.3 do not drop that |
| rule 02: "walks its acceptance criteria one by one — then repeats the walk as each role" | "walks its acceptance criteria one by one, then repeats the walk as each role" | 3.6 em dash |
| rule 03: "Delete, restore, replace and retention flows … Every message has to match what the system actually did — and the audit trail has to show it" | "Delete, restore, replace, and retention flows … Every message has to match what the system did, and the audit trail has to show it" | serial comma; 2.4 intensifier; 3.6 em dash |
| why 04: "Three levels make the trade-off explicit — and a fixed rule for compliance findings means…" | "Three levels make the trade-off explicit, and a fixed rule for compliance findings means…" | 3.6 em dash |
| rule 05: "Each deviation is rejected as a defect or accepted — and an accepted one is written back…" | "Each deviation is rejected as a defect or accepted, and an accepted one is written back…" | 3.6 em dash |
| why 05: "a developer, a tester and an auditor all read. … all three are reading the wrong artefact — and the auditor is the one who will not ask." | "a developer, a tester, and an auditor all read. … all three are reading the wrong artefact, and the auditor is the one who will not ask." | serial comma; 3.6 em dash |
| title 06: "Design acceptance is part of the Definition of Done" | "Design acceptance is part of the definition of done" | 4.1 down style; the Analytics page writes it lowercase |
| rule 06: "Design acceptance is a dated status on it — the build counterpart of the sign-off each frame carries — recorded next to functional QA" | "Design acceptance is a dated status on it, the build counterpart of the sign-off each frame carries, recorded next to functional QA" | 3.6 em dashes replaced by a pair of commas |
| why 06: "Build acceptance approves what a customer — and an auditor — will actually meet." | "Build acceptance approves what a customer, and an auditor, will meet." | 3.6 em dash; 2.4 intensifier |
| why 07: "Whether it does is only visible after release — in what people still do outside it." | "Whether it does is visible only after release, in what people still do outside it." | 1.6 only next to the word it modifies; 3.6 em dash |
| "Every frame carries its REQ, its requirement text and a dated sign-off." | "Every frame carries its REQ, its requirement text, and a dated sign-off." | serial comma |
| (no closing question) | joint: "What will I measure after release, and how?" with three answers: whether documents left the drives; whether retrieval works; whether hand-offs hold | the After release stage already states these three measures; set as a `joint` in the closing chapter, same as Analytics |

Not changed, and why:

- The artefact lines in the After development steps keep their em dashes and the `v3 → v4` arrow: they are a checklist typeset as code, the same as on the Analytics page, not prose.
- No "What would I do differently?" block: the file contains no such reflection and none was invented.
- The file does not say whether Documents has been released, so the Outcome row states the evidence and the paper trail and makes no release claim.
- The results points keep "went into FOX 2.3" as found.

## Second pass, 11 October 2026

Her decisions on the Documents page, after the first pass shipped.

| Before | After | Rule |
| --- | --- | --- |
| spec "What the annotations on this frame say" (Requirements, Development, Content, User flow, Interaction) | removed | her decision, 11 October 2026: the block duplicated the documented frame above it |
| ref-finance-app in a MacBook frame | flat image | her decision: the reference screenshot is a collage, not one screen |
| detail-info, detail-tags, detail-versions, tablet-versions as flat crops | MacBook mockups; the tablet caption now says "at a narrower width" | her decision: the four sign-off screens framed like the rest |

## Layout pass, 13 October 2026

Bringing the page up to the layout, microinteractions, and motion of the Analytics study: cover layers, a carousel of every part of the application, hotspots on the reference screens, folded diagrams, and the handoff drawn as the `loop` and `flow` the text already describes. No fact, number, persona, quote, or screen was added; every carousel body, hotspot, and loop station repeats a caption, a point, or the handoff standfirst already on the page. No mockup was composited: all sixteen desktop screens already have MacBook exports in `device/`, and the remaining flat files are diagrams, prototype crops at 640px, or a collage.

| Before | After | Rule |
| --- | --- | --- |
| cover: `art` only; the intro showed the typeset cover | cover: `layers` of six mockups, list, detail-invoice, filters, document-type, retention, permission-rule, labelled Documents, A document, Filters, Document types, Retention, Permission rules | RULES 4: a hero cover is `layers`, four to six screens of the product |
| chapter 01: a `duo` of list and detail-invoice | chapter 01: a `carousel` of twelve slides, Documents, Filters, Bulk actions, A document, Document info, Version history, Custom properties, Tags, Retention, Document types, Permission rules, Deleted documents; the duo removed because both its screens are slides | RULES 2: chapter 01 is `points` + `carousel`, every part of the application one screen per slide; bodies from the chapter 10 captions |
| ref-finance-app.png: caption only | three `hotspots`: open tasks counted per company before anything to do; a landing surface summarises state before it offers actions; a table stays readable at a few hundred rows | RULES 4: reference screens carry the finding they provoked; text from the caption and the chapter 07 points |
| ref-xentral mockup: caption only | three `hotspots`: the list stays in view beside the record; a detail panel beats a detail page; a record has a limit | RULES 4; text from the caption and the chapter 07 points; x and y computed from the screen's position inside the frame |
| traceability.png, open on the wall | `folded: true` | RULES 4: a diagram that explains rather than shows opens on demand |
| fox-update.png, open on the wall | `folded: true` | RULES 4 |
| handoff-loop.png, open, with the full caption | a `loop` of three stations, Figma (The file), Code (The FOX package), Prototype (Prototypes in code), edges Code Connect, Built on the package, From Codex to Figma over MCP, centre "Alignment enforced by tooling"; the PNG kept below as `folded: true` with a shortened caption | RULES 2, chapter 09: the handoff drawn as the cycle it is; stations from the standfirst and the old caption; the centre from the chapter maxim |
| `spec` "Three requirements that were in the tokens and templates from the start" | `flow` of three stages, Accessibility, Colour modes, Language, same text, the caption as the `note` | RULES 2, chapter 09: the requirements baked in from the start as `flow` cards; same shape as Analytics |

Not done, and why:

- Chapter 05, Competition analysis, has no image on the page, so the competitor's annotated screens cannot carry hotspots. If the annotated export exists in the Figma file, it belongs here as the `duo` with hotspots that RULES 2 asks for.
- The six-stage process list in chapter 01 (gathering requirements to handoff) stays as `points`: `flow` is documented for three or four cards, and at six the perspective fade leaves the last card at 30 per cent opacity.
- No "what I would do differently" `joint`: the file contains no such reflection and none was invented. The "what I will measure" `joint` from the first pass stays.
- No clip: the study has no screen recording.
- fox-docs.png and the documentation mockup are not folded: they show a real page of the system and a real frame, so they are evidence, not explanation.
- The tablet-versions mockup is not a carousel slide: it is a width variant of version history, not a part of the application.
- The checklist lines in the After development steps keep their em dashes and the `v3 → v4` arrow, as decided on 11 October: code, not prose.
| chapter 07 reference: the xentral screen with its caption and hotspots | removed, with its files | her decision, 13 October 2026 |

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, before the rebuild (28 422 px, 3 408 visible words, 15 chapters, 47 images, 3 clips; the longest study on the site):

1. The product is clear by the end of the carousel; the cover headline said "Document Management" while the tab, the tile, and the title said APplus Documents.
2. The role was stated four times: the metadata strip, "My role and scope", "What I owned" with six bullets, and the "1 designer" stat.
3. The three decisions were there, but as sentences only; a reader stopping at 00 had no picture of any of them.
4. The six-stage process list in 01, the prototype `flow` in 08, the handoff `loop` with its folded PNG in 12, and the folded FOX update diagram in 09 all told the tool chain, four times in four shapes.
5. All twelve sign-off screens in 10 were already slides of the 01 carousel, with longer captions.
6. Chapters 04, 05 and 07 (discovery, competition, inspiration) were three heads for one finding each.
7. The four annotated dossier-plan screens and their standfirsts were reference for the prototype's configuration side, not an argument.
8. Seven after-development steps at full length, each with rule, why, and contrast, was a process manual inside a case study.
9. The results stats repeated the metadata strip (eleven months, one designer) and the discovery chapter (six sessions); the four points repeated the decisions.
10. Eight maxims and a pull quote; two of them earn their place.

| Before | After | Why |
| --- | --- | --- |
| headline "Document Management" | "APplus Documents" | one name for the product, as on Analytics |
| 00: Context, Problem, My role and scope, Decision 1 to 3, Outcome, Period and team; 1 300 px of text | What, Problem, My role, Outcome, and the three decisions as cards: filters (to the sign-off tabs), the document info template (to the sign-off tabs), the documented frame (to the sign-off tabs) | the sixty-second page; period and team are in the metadata strip |
| 01 "What I owned" passage, six ownership bullets, six-stage process list | removed; the customer line from 03 joins the passage | the role is in 00 and the strip; the process is the sheet |
| 01 carousel, twelve slides with two-line bodies | eight slides with one-line bodies; Filters, Document info, Retention, and Deleted documents left for the sign-off tabs | a screen shown once |
| 02 maxim, two passages, pull quote | a standfirst and five points (the pull quote is the fifth) | at most two maxims; no claim twice |
| 03 Who it is for (passage, stats, thesis) | chapter dropped; the stats sit under the hard-brief points; the thesis is Decision 1 | the passage repeated the stats, the thesis repeated 00 |
| 04 Discovery, 05 Competition analysis, 07 Inspiration and ideas (three maxims, three passages, ten points, a stats block) | one chapter "Discovery and research": a standfirst and three points, the finance-tool reference with its hotspots | three heads for one finding each |
| 08 Prototypes: maxim, `flow` of three stages, four annotated dossier-plan screens, three clips stacked | a standfirst and the three clips as `tabs` (A dossier, Down to a document, Nested search); one dossier-plan screen moves to the Figma Make station of the sheet, the other three stay in git history | the flow is the sheet; the folders were reference; peer clips take one screen |
| 09 Design system: folded FOX update diagram, exploded screen, FOX documentation shot | a `sheet` of six stations (Confluence and Jira, Figma Make, Figma, FOX, Pull request, Codex over Figma MCP), then the exploded screen; the FOX documentation page is the FOX station's window, the update diagram's text is that station's body | the method in one picture; never the diagram and the sheet both |
| 06 Specification (maxim, passage, folded traceability diagram) and 11 Documentation (maxim, passage, three points, documented frame) | merged into 08 Design and sign-off: the identifier maxim, one standfirst, the documented frame as the first tab; the traceability diagram is the first station of the sheet | the same argument twice, 2 600 px |
| 10 Design and sign-off: one duo, two shots, four duos (twelve screens, 4 800 px) | five `tabs`: A documented frame, Filters, The template (document info, the tablet width), Deleted not gone (deleted document, retention), A retired policy | peer content; the chapter is one screen |
| 12 Handoff: maxim, `loop` ring, folded loop PNG, `flow` | a standfirst and the `flow` of three baked-in requirements | the loop repeated the sheet |
| 13 After development: seven steps with rule, why, contrast, two artefacts | four steps (Design review, Design QA, Audit walk, Triage), rule and why cut to one or two sentences each, both artefacts kept; Reconcile is the Codex station, Acceptance is in the Pull request station, After release is the results joint | the brief's cut list; the manual is in git history |
| 14 results: stats (11 months, 6 sessions, 5 tabs, 1 designer), four points, joint | the standfirst and the joint | the stats repeat the strip and discovery; the points repeat 00 |
| maxims: 01, 02, 04, 05, 06, 07, 08, 11, 12, 13 and a pull quote | two: 01 (permissions, compliance, search box) and the sign-off chapter (identifier) | at most two |
| chapter ids who-for, competition, inspiration, specification, documentation | dropped | merged as above; the remaining ids are unchanged and the numbers run 00 to 09 |

Numbers: 3 408 to 1 792 visible words; 28 422 to 17 069 px at 1440 (16 932 at 1024); 15 to 10 chapters; 47 to 25 images in the article, 3 clips kept behind tabs. `tsc --noEmit` and `npm run check` pass; no horizontal scroll at 1440, 1024 or 390.

Not added, and why: no "Shipped" station and no release claim, because the file makes none; no Nexus or GitHub station, because the Documents file names neither (the repository row of the sheet block is dropped for the same reason); no "What would I do differently" joint, because there is no such reflection on record.

## 25 October 2026: second cut

Her brief after the rebuild: cut more, to about 1 200 words and 12 000 px; delete "Why this is a hard brief" outright; one sentence per standfirst, one fragment per caption, one line per step body, at most three points, at most six slides, the "After development" steps down to the two that carry a rule; keep the exploded screen, the sheet, the tabs, and the three decision cards; add nothing.

| Before | After | Why |
| --- | --- | --- |
| 02 "Why this is a hard brief": standfirst, five GoBD points, stats (~22 document types, ~10 custom fields, 4 audiences) | chapter dropped, with its id `hard-brief` and its stats | her decision; the first point is the lead and the Problem row, the rest were the audit walk's rule restated |
| 01 passage: what Documents holds, then the customer line | the customer line only (several hundred manufacturers, archives in the tens of thousands) | the first sentence was the What row of 00 |
| 01 carousel: eight slides, Tags and Custom properties among them | six slides, one fragment each: Documents, Bulk actions, A document, Version history, Document types, Permission rules | at most six; Tags and Custom properties are fields of a document, not parts of the application |
| 03 Discovery standfirst: two sentences (the sessions, then the cost of a late question) | the sessions | one sentence |
| 03 points: the competitor "one action and one menu at a time"; the borrowed decisions listed four ways | three shorter points; the borrowed decisions are the three hotspots on the finance tool, not a list beside them | a finding once, on the picture that provoked it |
| 03 caption: "open tasks counted per company before anything to do, and an inbox table of invoices" | "tasks counted first, then an inbox table of invoices" | one fragment; the first hotspot says the rest |
| 04 Prototypes standfirst: Figma Make in hours, who walked it, where disagreements happened, the dossier example | "Disagreements happened in the Figma Make prototype, one step before REQ identifiers and sign-off made them expensive." | one sentence; the Figma Make station of the sheet says the rest; the tabs label names the dossier prototype |
| 04 clip captions, two or three sentences each | one fragment each | her rule |
| 05 Design system standfirst: what is drawn, the FOX double role, "then one screen taken apart" | the FOX double role | the sheet block's "Drawn for" row says what is drawn; the exploded block has its own title |
| 05 sheet: the Confluence station "Spec first, then design: ..."; the Figma station in two sentences; the Governed by row with "design acceptance in the definition of done" | one line each; the Governed by row ends at the sign-off | one line per station body; design acceptance is the Pull request station |
| 06 Sign-off standfirst: what every frame carries, then who reads it | who reads it | one sentence; Decision 3 and the Figma station say what a frame carries |
| 06 tab captions, two sentences each | one fragment each | her rule |
| 07 Handoff standfirst: Dev Mode, Code Connect, Storybook, the prototypes, then the three requirements | the three requirements, "never per screen" | one sentence; the handoff tools are the Figma station; "never per screen" moved up from the Colour modes card |
| 08 After development standfirst: the FOX package and annotated frames, then what is left to check | what is left to check | one sentence; the package and the frames are the sheet |
| 08 steps: Design review, Design QA, Audit walk, Triage, rule and why in one or two sentences | Design QA and Audit walk, renumbered 01 and 02, rule and why one line each, both contrasts and both artefacts kept | the two that carry a rule; Design review is the Pull request station word for word; Triage was a filing convention |
| 09 results standfirst: eleven months and the paper trail in either direction | dropped; the joint stands alone under the heading | it was the Outcome row of 00 and the Period row of the strip |
| 09 joint answers | one fragment each | her rule |
| chapter numbers 00 to 09 | 00 to 08: in-short, what-it-is, discovery, prototypes, design-system, sign-off, handoff, after-development, results | consecutive after the drop; every other id kept |

Numbers: 1 792 to 1 257 visible words; 17 069 to 14 845 px at 1440 (14 902 at 1024, 17 634 at 390); 10 to 9 chapters; 25 to 23 images, the 3 clips kept behind tabs. `tsc --noEmit` and `npm run check` pass; no horizontal scroll at 1440, 1024 or 390.

Why not 12 000 px: the blocks she asked to keep are fixed-height. Cover with its layers and the strip 2 130 px, the 00 cards 1 000, the carousel 870, the sheet 1 255, the exploded screen 1 980, the two tabs blocks 870 each: about 9 000 px before any prose, and the nine chapter heads add roughly 2 400 more. The prose left on the page is under 2 000 px. Reaching 12 000 would mean dropping a chapter she did not name (Handoff at ~500 px, the research reference at ~670 px) or one of the kept blocks, which the brief forbids.

Not cut, and why:

- The three hotspots on the finance tool: they are the only evidence the research chapter has, and the points no longer repeat them.
- The two step artefacts (the QA checklist, the audit walk): they are the rule written the way it is checked, not prose; their em dashes and the `v3 → v4` arrow stay, as decided on 11 October.
- The two maxims (01 and the sign-off chapter): the rebuild's limit is two, and both earn their place.
- The meta strip's Design system value (three sentences): not a passage, and the same shape as on Analytics.
- The tablet-width version history in the Template tab: it is the claim that the template holds at a narrower width, and a duo adds no height.

Noticed, not mine to fix: at 390 the sheet's frame begins a few pixels under the standfirst's last line (the same in the first rebuild's screenshot `applus-documents-m-sheet.png`), a margin in home/Sheet.tsx.
