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
