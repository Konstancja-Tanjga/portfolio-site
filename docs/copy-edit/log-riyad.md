# Edit log: Riyad Bank (`site/src/content/riyad.ts`)

One pass, 11 October 2026, against `docs/STYLE.md` and `docs/case-study-kit/RULES.md`: an "In short" `brief` added as chapter 00, a `points` block at the top of chapter 01 so that a skimmer gets the navigation in three lines before the sketches, serial commas throughout, the two em dashes replaced, "screenshots" removed from the store caption, and the title as a label ("UX/UI Designer"). The two chapters keep their ids and numbers. The brief has two decisions, not three, and no Period and team row: the file names no period and no team size, and none was invented. No `flow`, `joint`, or `dossier`: the study has one area and no reflection.

| Before | After | Rule |
| --- | --- | --- |
| (no header comment) | " * A short wall: the sketches of the 3D navigation, the screens, and the store listing as shipped. No period, no team size, and no measured result are on record, so none is stated." | the file says what it does not claim |
| title: "Riyad Bank — Digital Insights" | title: "Riyad Bank: Digital Insights" | 3.6 em dash |
| lead: "topics in text, video and podcast form. Before the build, the work included C-level interviews, sessions with subject-matter experts and A/B testing." | lead: "topics in text, video, and podcast form. Before the build, the work included C-level interviews, sessions with subject-matter experts, and A/B testing." | 3.5 serial comma |
| credit: "UX/UI designer · Big Hat, via Intellias · Riyad Bank, Saudi Arabia" | credit: "UX/UI Designer · Big Hat, via Intellias · Riyad Bank, Saudi Arabia" | 4: a title as a label, as in log-volvo.md |
| { label: "Role", value: "UX/UI designer — Big Hat, my own company, via Intellias" } | { label: "Role", value: "UX/UI Designer, through Big Hat, my own company, via Intellias" } | 3.6 em dash; 4 title as a label |
| { label: "Research", value: "C-level interviews, SME sessions, A/B testing before build" } | { label: "Research", value: "C-level interviews, SME sessions, and A/B testing before the build" } | 3.5 serial comma; article |
| { label: "Content", value: "Text, video and podcast" } | { label: "Content", value: "Text, video, and podcast" } | 3.5 serial comma |
| (no chapter 00) | chapter "in-short", `brief` with Context, Problem, My role and scope, Decision 1, Decision 2, Outcome | RULES 2: the 30-second read; rows from the lead, the meta strip, and the captions |
| (no standfirst on chapter 01) | standfirst: "The paper sketches first, then the screens built from them." | RULES 6: a standfirst says what is on the page |
| (chapter 01 opened with the sketch) | `points`: "Spinning circles on a dark background, with a blob in the centre." / "Glassy video, podcast, and text icons come under the finger when pressed, with haptic feedback." / "Three content forms, one navigation." | RULES 1: a surface a skimmer can read; facts from the sketch caption and the meta strip |
| caption: "spinning circles on a dark background, a blob in the centre, glassy video, podcast and text icons that come under the finger when pressed, and haptic feedback." | caption: "... glassy video, podcast, and text icons that come under the finger when pressed, and haptic feedback." | 3.5 serial comma |
| caption: "a topic opened into its CEO interview, report and case study, Favourites, and the podcast player." | caption: "a topic opened into its CEO interview, report, and case study, Favourites, and the podcast player." | 3.5 serial comma |
| caption: "Store screenshots as shipped to the App Store and Google Play: the podcast list and the video player." | caption: "The store listing images as shipped to the App Store and Google Play: the podcast list and the video player." | 5: no caption begins or hinges on "screenshot" |

Not changed, and why:

- "UX/UI Designer" keeps its slash: it is the title as it was, used as a label, following the precedent in log-volvo.md. The site-wide decision on slash titles is an open point in INVENTORY.md.
- "A/B testing" keeps its slash: the method's name, not a slash compound.
- No period is on record for the project: not in the file, not in INVENTORY.md. The brief therefore has no Period and team row, and the meta strip has no Period row. Flagged for Konstancja.
- No team size or team composition is on record beyond "Big Hat, via Intellias". Not stated.
- The stamp says "ILLUSTRATION SYSTEM" and nothing else in the file describes one, so the brief has no third decision. Flagged for Konstancja: a line on the illustration system would make Decision 3.
- The phone screens (06 to 13) and store images (23, 26) are flat PNGs; no `device/*-2400.webp` exports exist for this study, so no MacBook frame is used.
- The kicker and stamp keep their capitals and middle dots, pending the open point in INVENTORY.md.

## Layout pass, 13 October 2026

Against the layout, microinteractions, and motion of `bi.ts`: a `flow` of the four stages of the 3D navigation as the sketches write them, and `hotspots` on the sketches that transcribe the handwritten notes at their places, so the sketch can be read by a screen reader and without zooming. Positions were checked by rendering the pins on the image. No image file was created or deleted.

| Before | After | Rule |
| --- | --- | --- |
| chapter 01: points, then the sketch | points, `flow` of four stages (a circle forms; the blob spins; the bottom menu turns glassy; pressed), then the sketch | a sequence of stages is a flow; every stage is a note on the sketch |
| sketch `shot` without hotspots | seven `hotspots`: dark background and spinning circles; circle shape is formed; blob in centre; glassy icons; bottom menu; Face ID login; to be discussed | section 4: the notes pinned where they are written; text transcribed from the sketch, nothing added |

Not done, and why:

- No `carousel` of the seven phone screens: the carousel stage has a fixed 2530 by 1600 aspect and draws each slide at full width, so a 360 by 800 phone screen would overflow it. The screens stay in the two `set` rows. A carousel that takes a phone needs a change in the block.
- No cover `layers`, no `frame`: a phone app, no MacBook mockups.
- No `folded` shot: the sketch is the evidence for the navigation, not a diagram that explains it.
- No `stats`, `joint`, or `dossier`: no number with a source, no reflection, and one area, as in the first log.
- No `evolution`: no design system versions on record.

## 18 October 2026: Riyad Bank as the client

Konstancja's correction: the client was Riyad Bank, so the study names Riyad Bank, not "Big Hat, via Intellias". The cover tile takes the middle part of `credit` as its top-right label, so the tile now reads RIYAD BANK.

| Before | After | Rule |
| --- | --- | --- |
| credit: "UX/UI Designer · Big Hat, via Intellias · Riyad Bank, Saudi Arabia" | credit: "UX/UI Designer · Riyad Bank · Saudi Arabia" | the client as she states it; same shape as the Volvo credit |
| { label: "Role", value: "UX/UI Designer, through Big Hat, my own company, via Intellias" } | { label: "Role", value: "UX/UI Designer" } | the client is already in the Client row |
| "UX/UI Designer, through Big Hat via Intellias. C-level interviews …" | "UX/UI Designer for Riyad Bank. C-level interviews …" | the client as she states it |

Not changed here: the CV (`docs/cv/cv.html`) and the LinkedIn draft (`docs/copy-edit/linkedin-2026-10.md`) still say "(via Intellias)"; that is outside the case study.

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair, two minutes by scroll:

1. The lead, the metadata strip, and the brief said the same six facts three times each: the client, the three content forms, the research, the 3D navigation, the two stores.
2. The 3D navigation was told four times in chapter 01: the points, the flow, the hotspots on the sketch, and the sketch caption.
3. No picture in 00: a reader who stopped there had no screen.
4. The sketches came before the product; a hiring manager wants to see what shipped before how it was drawn.
5. The two transition screens sat in the carousel as "parts of the app", which they are not.
6. The role was clear (UX/UI Designer), the tools were not, and are not on record: no Figma, no prototype tool, no handoff is named anywhere in the file, the log, or the CV.
7. The illustration system is in the stamp and on the CV and nowhere described.
8. The store listing chapter is the one honest piece of evidence and was fine.
9. The meta strip's Owned and Content rows repeated the lead.
10. Nothing in the study is reference material; nothing to fold.

| Before | After | Why |
| --- | --- | --- |
| lead of four sentences (client, research, navigation, stores) | one sentence on what the app is | the research is in the meta strip, the navigation and the stores are in 00 |
| meta: Role, Client, Shipped, Research, Owned, Content | Role, Client, Research, Shipped | Owned is the My role row; Content is the lead |
| 00 rows: Context, Problem, My role and scope, Decision 1, Decision 2, Outcome | What, Problem, My role, Decision 1 with shot 06 (home), Decision 2 with shot 09 (podcast player), Outcome | the sixty-second page; "the illustration system" added to My role from the CV source |
| no Period and team row | still none | no period and no team size on record; not invented |
| chapter 01 "The 3D navigation": points, flow, sketch with hotspots, carousel of seven | 01 "What it is": carousel of five (Home, A topic, Favourites, Podcast player, Video player); 02 "The 3D navigation": sketch with hotspots, then a `duo` of the two transition screens | kit order: the product before the prototypes; the transition is a sequence, not a part of the app |
| `points` (three bullets) and `flow` (four stages) on the navigation | removed | both repeated Decision 1 and the pinned notes on the sketch |
| sketch caption, 28 words | "The 3D navigation on paper, four stages left to right: circles, blob, glassy icons, pressed." | a fragment |
| carousel bodies as sentences ("The topics as a feed, the 3D navigation underneath.") | fragments; "as a feed" dropped, the screen shows the topics in orbit, not a feed | captions say what is shown |
| 02 "Shipped" | 03 "Shipped", `set` kept, caption a fragment | two store images side by side take one screen; tabs would hide one |
| no sheet | no sheet | no tool chain on record: the file, the log and the CV name paper sketches and nothing else |

Numbers at 1440 px: 607 to 452 visible words, 6 879 to 6 454 px, 3 to 4 chapters, 12 image files used before and after. No horizontal scroll at 1440 or 390.

Open for Konstancja: period and team; the tools (Figma? a prototype tool? who built it?); one line on what the illustration system was, which would make Decision 3 with 23.png as its shot; whether the podcast player has chapters (the old caption said so, the screen shows a waveform with Back and Forth, so the caption now says "The audio for a topic").
