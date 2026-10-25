# Edit log: Elly (`site/src/content/elly.ts`)

First pass, 11 October 2026, to the standard of `log-bi.md`: the TL;DR as a `brief`, long passages as a lead sentence plus `points`, pull quotes cut, the mechanical rules (em dashes, hedges, serial comma, indirect openings). No fact, number, or date was added. Elly has no handoff chapter and ran on FOX v2.2, before Code Connect, so the handoff wording was not inserted here. The team of two senior designers dates from October 2026, after this project, so it is not claimed here either.

| Before | After | Rule |
| --- | --- | --- |
| credit: "Lead Product Designer · Asseco Solutions · released with APplus 9, 2025" | credit: "Lead Designer, UX Engineer · Asseco Solutions · 2025" | one title on every channel; credit line format |
| { label: "Role", value: "Lead Product Designer, sole designer on the product" } | { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" } | one title; plain words |
| { label: "Product", value: "APplus ERP — Elly" } | { label: "Product", value: "APplus ERP, Elly" } | 3.6 em dash |
| { label: "Team", value: "A PM, a requirements engineer, developers, QA and me as the sole designer" } | { label: "Team", value: "A PM, a requirements engineer, developers, QA, and me as the only designer" } | serial comma; plain words |
| { label: "Period", value: "2024 – April 2025" } | { label: "Period", value: "2024 to April 2025" } | 3.7 no en dash as "to" in a meta value |
| (no Product context row) | { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" } | brief: award carried on every APplus study |
| kind: "spec", rows: Problem, My part, Decision 1..3, Evidence, Shipped | kind: "brief", rows: Context, Problem, My role and scope, Decision 1..3, Outcome, Period and team | brief: the 30-second read; Context from chapter 01, Outcome from Evidence + Shipped + chapter 11 scores |
| key: "My part", value: "Lead Product Designer and the only designer on the product: the audit of existing assistants, …" | key: "My role and scope", value: "The only designer on the product, working with a PM, a requirements engineer, developers, and QA: the audit of existing assistants, …" | brief: role and scope in one row; team named |
| key: "Evidence", value: "A moderated study with 13 internal consultants…, 14–25 April 2025, on a prototype with 331 wired interactions." + key: "Shipped" | key: "Outcome", value: "Shipped in April 2025 with APplus 9. Before release, a moderated study with 13 …: 13 of 13 found Elly without prompting, 12 of 13 would use it again, and trust scored lowest…" | brief: Outcome row; numbers from chapter 11 |
| "<p>Elly Smart Help is the first AI assistant shipped in APplus ERP… It answers questions from the APplus documentation…</p><p>APplus is an ERP used by mid-sized and large manufacturers… repeats it as fact.</p>" | "<p>Elly Smart Help is <strong>the first AI assistant shipped in APplus ERP</strong>, on desktop and mobile, with voice input.</p>" + points: It answers from the documentation; The users are manufacturers; The demo is not the test | 2.3.2 itemisation; 2.4 brevity |
| "the design of the assistant from zero, as lead and sole designer, working with a PM, a requirements engineer, developers and QA" | "the design of the assistant from zero, as lead and only designer, working with a PM, a requirements engineer, developers, and QA" | plain words; serial comma |
| "a page that describes a screen which no longer exists in the product" | "a page that describes a screen that no longer exists in the product" | 1.3 that without commas for a restrictive clause |
| pull: "None of the three is fixed by a better model. Each one is fixed, or not fixed, by what the panel decides to show." (22 words) | pull: "None of the three is fixed by a better model. Each is fixed by what the panel shows." (17 words; 15 after the stop words) | pull quotes cut; 2.4 wordiness |
| "which job it is actually good at" | "which job it is good at" | 2.4 empty intensifier |
| "Slides out from the shell on click, keyboard or voice" | "Slides out from the shell on click, keyboard, or voice" | serial comma |
| "annotated for suggestion switching, navigation and the chat entry icon. … Aria's question, thinking and answer-with-links states." | "annotated for suggestion switching, navigation, and the chat entry icon. … Aria's question, thinking, and answer-with-links states." | serial comma |
| standfirst: "Entry point, affordance and footprint, each decided explicitly…" | "Entry point, affordance, and footprint, each decided explicitly…" | serial comma |
| caption: "space up to 20% of the page" | caption: "space up to 20 per cent of the page" | consistent with "20 per cent" in the points below it |
| "A visible button — colour and symbol argued out rather than assumed" | "A visible button, with colour and symbol argued out rather than assumed" | 3.6 em dash |
| "<p>The avatar is a human face rather than a sparkle or a robot, because the panel promises documentation answers. Text and voice are two modes… Mobile and responsive behaviour went through the same exploration…</p>" (62 words) | "<p>Four smaller decisions followed from <strong>the promise the panel makes: documentation answers</strong>.</p>" + points: A human face, not a sparkle or a robot; Text and voice are two modes of one assistant; A greeting and suggested prompts; Mobile and responsive behaviour explored at the same time | 2.3.2 itemisation; 2.6 emphasis |
| standfirst: "Developers, QA and the requirements engineer all worked from them" | "Developers, QA, and the requirements engineer all worked from them" | serial comma |
| "It sits where users actually ask the question" | "It sits where users ask the question … The copy states the limits in four sentences: the assistant reads only APplus documentation and performs no actions in APplus; it is available exclusively in Flow mode; no chat history is saved, and closing the window erases it; and the Bulb icon … switches back to traditional search." | 2.4 intensifier; the facts of the cut pull quote carried into the passage |
| pull: "“Elly accesses only APplus documentation and cannot perform actions in APplus. Available exclusively in Flow mode. No chat history is saved — closing the window erases it. Switch to traditional search…”" (41 words) | pull: "“Elly accesses only APplus documentation and cannot perform actions in APplus.”" (11 words) | pull quotes cut to 15 words; 3.6 em dash |
| note: "The consent moment comes first, while there is still nothing to lose." | note: "The consent moment comes first, while nothing can be lost yet." | 2.2 no indirect opening |
| text: "Closes voice mode. There is no “new voice chat”, because starting over and leaving are the same intention…" | text: "Closes voice mode. A “new voice chat” does not exist, because starting over and leaving are the same intention…" | 2.2 no indirect opening |
| ruleNote: "By release there were five: retrieval failure, model failure, …" | ruleNote: "Five states shipped by release: retrieval failure, model failure, …" | 2.2 no indirect opening; concrete subject |
| standfirst: "the whole research question was about latency, waiting and doubt" | "the whole research question was about latency, waiting, and doubt" | serial comma |
| "<p>Every demo runs inside a complete 1920×1080 APplus Flow screen… the prototype had to be able to prove it.</p><p>Demos aimed at the places where trust is won or lost… a fix in one place fixes it everywhere.</p>" (118 words) | "<p>Every demo runs inside <strong>a complete 1920×1080 APplus Flow screen</strong>: app bar, navigation, content, and the Elly sidebar docked at its real 380px.</p>" + points: Full scale, to prove the claim; Demos aimed where trust is won or lost; Built on the sidebar component set, not duplicated frames | 2.3.2 itemisation; 2.4 brevity |
| standfirst: "deliberately before the APplus 9 release so findings could still reach launch" | "deliberately before the APplus 9 release so that findings could still reach launch" | 1.3 do not drop that |
| "<p>The first result was not about the interface. Eight of the thirteen had never seen Elly. Five had only heard the name… Participants had been at the company from one year to twenty.</p><p>The sessions had five objectives… Almost every one of them then hit the same wall.</p>" (112 words) | "<p><strong>The first result was not about the interface.</strong> It was about who knew the assistant existed.</p>" + points: Eight of the thirteen had never seen Elly; Tenure ran from one year to twenty; Five objectives per session; Every participant found the button immediately | 2.3.2 itemisation; 2.6 emphasis |
| "“Elly is answering as ‘I'm sure’ but should say ‘I guess / I think’ in this case.”" | "“Elly is answering as ‘I'm sure’ but should say ‘I guess’ or ‘I think’ in this case.”" | 3.16 no slash to join alternatives |
| "“I got a lot of texts with hints about where I can find information — for me it is more like an advertisement…”" | "“I got a lot of texts with hints about where I can find information; for me it is more like an advertisement…”" | 3.6 em dash; 3.15 semicolon between clauses |
| "“Moving topics are invisible for me — they are adverts.”" | "“Moving topics are invisible for me; they are adverts.”" | 3.6 em dash |
| "“I don't know — is it a stop button?”" | "“I don't know, is it a stop button?”" | 3.6 em dash; 3.13 direct question set off by a comma |
| "<p><strong>How I read it.</strong> The panel worked: discoverability was solved…</p><p>What failed was the contract. People asked for numbers… the assistant never said what kind of thing it was able to know.</p>" (96 words) | "<p><strong>How I read it.</strong> The panel worked; what failed was the contract.</p>" + points: Discoverability was solved; People asked for numbers and got directions to documentation; One answer came confidently from an old release note; Three complaints, one cause | 2.3.2 itemisation; 2.6 the short sentence carries the verdict |
| "<p>Easy to use clustered at 4–5. Helpful spread across the full range. Trustworthy was the low score…</p><p>Two causes, both traceable to the interface… are the parts of the design that answer it.</p>" (86 words) | "<p><strong>Trustworthy was the low score</strong>, between 2 and 3.5 for five participants, while easy to use clustered at 4 to 5 and helpful spread across the full range.</p>" + points: Two causes, both in the interface; The risk was verifiability; Four parts of the design answer it | 2.3.2 itemisation; first principles: the one thing first |
| "Elly should know which board, module and task the user is currently in" | "Elly should know which board, module, and task the user is currently in" | serial comma |
| standfirst: "Elly as it ships in APplus 9 — the screens, not the reasoning." | "Elly as it ships in APplus 9: the screens, not the reasoning." | 3.6 em dash; 3.4 colon amplifies |
| caption: "Elly Help as APplus ships it — the vendor's own product film, four minutes. Spoken in German; English subtitles are my translation." | caption: "Elly Help as APplus ships it: the vendor's own product film, four minutes. Spoken in German; the English subtitles are my translation." | 3.6 em dash; article |
| results points: "The study confirmed what the panel has to show: …" / "Each of the four decisions is something the interface shows or hides: …" | the same two items with the claim in bold | points: a bold claim leads each bullet |

Not changed, and why:

- The stats block in chapter 10 says 9 moderated sessions; the standfirst and the file header say thirteen sessions of 45 minutes. One of them is wrong and the frames do not say which. Left as found, flagged for Konstancja.
- The two shots at the end of chapter 14 (`12.png`, `15.png`) have no captions. Without seeing the frames a caption would be invented, so none was added.
- The video `title` keeps its em dash: it is the player's accessible name, not prose, and the brief said not to touch video blocks except their captions.
- No "What would I do differently?" and no "What will I measure?" block: the file contains no such reflection and none was invented. The barriers chapter already carries what participants asked for next.
| { value: "9", label: "moderated sessions, 45 minutes each" } | { value: "13", label: "moderated sessions, 45 minutes each" } | settled by her on 11 October 2026: thirteen sessions |
| headline: ["Smart help", "for an ERP"] | headline: ["AI assistant", "for ERP"] | her wording, 11 October 2026 |

## Layout pass, 13 October 2026

Bringing the page up to the layout, microinteractions, and motion of the Analytics study: cover layers, a carousel of the parts of the application, hotspots on the audit and exploration boards, and captions on the two live-product shots now that the frames have been looked at. No fact, number, persona, quote, or screen was added; every hotspot and caption repeats what the existing caption or chapter text already said, or names what is visibly on the frame. No mockup was composited: every flat desktop screen in `screens/` already has a MacBook export in `device/`, and `09.png`, `12.png`, and `15.png` are device collages, not single screens.

| Before | After | Rule |
| --- | --- | --- |
| cover: `art` only; the intro showed the typeset cover | cover: `layers` of four mockups, answer-desktop, resources-desktop, proto-text, proto-voice, labelled An answer with citations, Resources, The scope answer, Voice mode | RULES 4: a hero cover is `layers`, four to six screens of the product |
| chapter 01: `points` then the devices collage | chapter 01: `points`, then a `carousel` of four slides (An answer, Resources, The scope answer, Voice mode), then the devices collage | RULES 2: chapter 01 is `points` + `carousel`, one screen per part; bodies taken from the captions in chapters 09 and 11 |
| audit-aria.png: a flat shot with a caption | the same shot with five `hotspots`: switching between suggestions, the chat entry icon on desktop, navigation on mobile, the chat entry icon on mobile, the early Elly drafts set against Aria's states | RULES 4: audit screens carry hotspots; text from the existing caption |
| exploration-options mockup: caption only | the same mockup with six `hotspots` on the board's own notes: space up to 20 per cent, one click from the side menu, a human face at 42px, option 1 overlapping, option 2 pinned, stars or a help bulb | RULES 4; text from the caption and the two options in the spec above it; x and y computed from the note positions on the board inside the frame |
| `{ kind: "shot", src: ".../12.png" }` with no caption | caption: "As shipped, across devices: the scope answer docked beside a Flow board on desktop and on a tablet, and the greeting on a phone. The footer on every screen says that Elly accesses APplus documentation and can make mistakes." | RULES 9.5: every image has a caption; what is on the frame |
| `{ kind: "shot", src: ".../15.png" }` with no caption | caption: "A German answer on the phone with markers [1] to [3] and the Resources list under it; on the tablet and the desktop, the suggested prompt carousel, Ask precise questions." | RULES 9.5; what is on the frame |

Not done, and why:

- No `joint`: the file still has no "what I would do differently" and no "what I will measure" content, and none was invented. The barriers chapter carries what participants asked for next.
- No `loop`: Elly ran on FOX v2.2, before Code Connect, and the file describes no file, code, and prototype cycle.
- No `flow`: the only sequences on the page are the use-case flows, which already live in their `usecase` blocks; the twelve use-case groups in chapter 05 are a list, not stages.
- No clip: the only video is the vendor's product film, in German with subtitles, which stays a film.
- The exploration board is not `folded`: it is the one image in chapter 04 and the chapter is about it, so hiding it would hide the evidence; it carries hotspots instead.
- `stats` already exist in chapters 10, 11, 12, and 15; nothing new to add with a source.
- The video `title` keeps its em dash, as decided on 11 October: it is the player's accessible name, not prose.
| exploration board in a MacBook frame with hotspots | flat board, hotspots remapped to the board | her request, 13 October 2026: a board of six screens is not one screen |
| Voice mode: two phone stills at full set size | prose on the left, her voice-mode recording on the right at phone size (`beside` block) | her request, 13 October 2026: smaller, read and watch at once |

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, before the rebuild (3 846 visible words, 26 333 px at 1440, 16 chapters, 35 images, 2 clips):

1. The product and the problem are clear by the end of 00, but 00 took 1 300 px and had no picture of a decision.
2. The role was stated four times: the metadata strip, 00 "My role and scope", 00 "Period and team", 01 "What I owned".
3. Three use-case chapters each restated a decision already in 00; UC-02 repeated the `beside` prose beside it line for line.
4. The study spread over four chapters (10, 11, 12, 13) with five stats blocks; 13/13, 12/13, 10/13 and 13 participants each appeared two or three times, 15 repeated 10 and 11 as a scoreboard.
5. Chapter 13 "What I designed" listed the three decisions a fourth time, with a set of five sidebar states already shown in 06, 07 and 08.
6. The prototype chapter (09) was 300 words of method with two screens the carousel already shows.
7. The answer and Resources mockups appeared in the cover layers, the carousel, and a duo in chapter 11.
8. The tools were never drawn: Figma, the Flow board, FOX v2.2 and the study were facts scattered across six chapters.
9. Nine maxims and two pull quotes; one pull quote repeated the passage above it verbatim.
10. The teardown board and the exploration board were both good evidence, but the teardown is reference and sat open at full width.

| Before | After | Why |
| --- | --- | --- |
| 00: Context, Problem, My role and scope, Decision 1 to 3 (text only), Outcome, Period and team | What, Problem, My role, Decision 1 to 3 with shots, Outcome; no Context, no Period and team | the sixty-second page; the strip states period and team; Context repeated the lead |
| Decision shots: none | D1 answer-desktop (MacBook) to #exploration; D2 resources-desktop (MacBook) to #uc-text; D3 09.png (the panel across sizes with the model failure) to #uc-errors | each decision as the screen that shows it taken |
| 01: passage, three points, carousel, devices collage, "What I owned" | one sentence and the carousel | the role is in 00 and the strip; the collage is in 11 behind a tab |
| 02: points, pull quote, 09.png | three points | the pull quote repeated the points; 09.png is now the Decision 3 shot |
| 03: passage, spec of three archetypes, teardown open with hotspots | three points, teardown folded with its hotspots | the archetypes are a list; the teardown is reference |
| 04: spec, board with hotspots, "Pinned won" passage, two points blocks of four | spec (fragments), board with hotspots, one passage carrying the consequences | the two points blocks repeated the hotspots and the passage |
| 09 "The prototype" (passage, two points blocks, two mockups, passage) | dropped; the facts (full scale, 331 interactions, timed voice states, 13 sessions) moved to the sheet stations | the mockups are in the carousel; the method belongs on the sheet |
| (no sheet) | 05 "How I worked": Figma teardown, Figma options board, Figma 12 use cases, Figma prototype, 13 sessions on the prototype, APplus release 9; tools Figma, FOX v2.2, APplus | the tools and the steps as one drawing, in the home page's language |
| 05 "Specified as use cases": points, set of three phones, passage, pull quote | points (fragments) and the scope-answer passage | the pull quote repeated the passage; the greeting and consent states are in 07 and the voice clip |
| 06 UC-01: set of four phones, six-step flow | set of three (the scope state is in the carousel), four-step flow, a rejected alternative named | fragments; "why" now names what lost |
| 07 Voice: `beside` plus UC-02 | `beside` only, with Pause and the one exit folded into its bullets | the use case repeated the prose beside it; the clip proves the claim |
| 08 UC-03: set of four, use case | kept; bodies and exits as fragments; why names the rejected generic error | the four states each prove the rule |
| 10 Study: stats, passage, four points, nine quotes, passage, four points | one chapter: five stats, one passage, four points, the nine quotes in a fold | one copy of every number |
| 11 "Easy, yes. Trusted, no.": stats, passage, points, duo | dropped; its numbers are in the study stats, its mockups in the carousel | said twice |
| 12 "The barriers they named": stats, points, passage | dropped; 10/13 context-awareness is a study stat, sourcing is in "How I read it" | said twice |
| 13 "What I designed": four points, set of five sidebar states | dropped; the decisions are in 00, the states in 07, 08 and the carousel | said a fourth time |
| 14 Live: film, 12.png, 15.png stacked | 11 Live: tabs The film, Across devices, An answer in German | peer content, one screen |
| 15 "What it adds up to": two stats blocks, two points | dropped | repeated the strip, 00 and the study |
| nine maxims, two pull quotes | two maxims (04, 10), no pull quotes | at most two |

Result: 2 011 visible words, 16 570 px at 1440 (measure.mjs, same script as Analytics at 16 446), 12 chapters, 26 images, 2 clips. No console errors; no horizontal scroll at 390.

Not on record, left out: a "what I would do differently" joint and a measure after release; a handoff chapter (Elly ran on FOX v2.2, before Code Connect); which tool the Aria teardown was annotated in (the sheet says Figma, as the board was cropped from the Figma frames). To confirm with Konstancja: the UC-01 "why" now names the rejected alternative as sources listed under the answer, inferred from the rule "Citations sit at the claim, not at the bottom".
