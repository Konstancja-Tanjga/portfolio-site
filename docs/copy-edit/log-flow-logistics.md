# Edit log: Flow Logistics (`site/src/content/flow-logistics.ts`)

New study, 8 November 2026, written against `docs/case-study-kit/RULES.md`
and `docs/STYLE.md` from the project's own records: `brief.md` in the Flow
Logistics folder, and the Figma file (pages 1 User flow, 2 Wireframes, 3
Screens with the Documentation block and the handoff spec, 4 Foundations).
Nothing in the study comes from anywhere else.

## What the study is built from

| Chapter | Source |
| --- | --- |
| 00 In short | brief.md sections 1, 4, 10; the three decision crops are screens 3, 5, 7 |
| 01 What it is | the seven screens of flow 1, exported at 3x from page 3 |
| 02 Who it is for | brief.md section 3 (the users table); one persona, the only role in v1 |
| 03 The brief before the pixels | brief.md sections 2, 5, 6, 7; R1 to R8 in the fold as the brief words them |
| 04 User flow | page 1 of the file, hotspots at the node positions from the file's metadata |
| 05 Wireframes | page 2 of the file; the three bullets are the notes under the frames |
| 06 Screens and foundations | page 3 and page 4; the foundation bullets from the handoff spec's token section |
| 06a The flow, as the prototype plays it | two clips rendered from the exported screens, in the order the prototype links them, with the taps drawn; dissolve 200 ms as the spec recommends |
| 07 Two use cases | brief.md sections 4 and 4b, the Documentation block's acceptance criteria |
| 08 Handoff | the Documentation block (AC1.1 to AC6.1) and the handoff spec frame 32:184 |
| 09 Evidence | brief.md section 10: the test on 5 November 2026, two tasks, passed |
| 10 What happens next | brief.md sections 10 and 11 |

## Decisions in the writing

- The client is "a global automotive supplier" throughout, as brief.md
  has it. The cover credit's middle segment, which the tile prints as the
  organisation, is "Automotive supplier". Open for Konstancja: whether
  the client may be named, and whether the work was done at Asseco
  Solutions or elsewhere; the credit and the Role row change with the
  answer.
- Role is "Product Designer", the title Konstancja used when asking for
  the study. Open: the title as on the contract.
- "One designer" in Period and team: the brief has one author and names a
  product owner as the counterpart. Open: who else was involved and what
  was agreed with whom; the study has no "agreed with" line yet because
  none is on record.
- The persona's quote is the brief's problem sentence (section 1),
  reworded in the first person. Not an interview quote; brief.md records
  no interviews.
- No "What I would do differently" joint: nothing on record. Open for
  Konstancja.
- The Outcome row says time per report is not measured: the sixty-second
  criterion is a hypothesis in brief.md section 4, and section 10 records
  only "passed, no cuts needed".
- Vendor figures on reporting-rate lift are mentioned only as left out,
  as brief.md section 5 does.
- "AUDI Warehouse · Hall B" appears on the screens as sample content from
  the file. It is not named in the text. Open: whether it should be
  replaced in the file before the study goes live.
- No MacBook mockups, no `layers`: a phone app. The cover uses `art` with
  `portrait: true`, as Riyad Bank and Chihuahua do.

## The block extended

`beside` gained `video.mockup?: boolean` in `types.ts`, a class in
`Beside.tsx`, and one rule in `case.css`: a clip that already carries its
phone takes its own aspect ratio (720 by 1506) and no second frame. The
Elly voice clip, a bare screen, is unchanged.

## Images and clips

All in `site/public/work/flow-logistics/`, generated from the Figma
exports by two scripts kept in the session scratchpad (`assets.py`,
`clips.py`): nine screens as WebP at 900 wide, three decision crops and
one dossier cover at 16:10, the cover art as a drawn phone with a
transparent ground, the OG card at 2400 by 1829, five boards, and two
clips (mp4, webm, poster) at 720 by 1506 and 30 fps: flow 1 in 14.9 s,
flow 2 in 8.2 s.

## Open for Konstancja

1. Company and contract title for the credit, the Role row, and the
   Period and team row.
2. Whether the client may be named; whether "AUDI" may stay on the sample
   screens.
3. Who the counterparts were and what was agreed with whom (the product
   owner, the client's Quality, anyone at the plant), for a line in 00 and
   a chapter in the kit's "sign-off" slot.
4. The test on 5 November: who the person was, how long each task took,
   anything observed; a line in 09.
5. A "What I would do differently" answer, for a second joint in 10.
6. Whether the Claude Code and Figma MCP workflow used to build the file
   should be named in the Tools row, as the other studies name their tool
   chain.

## 8 November 2026: Konstancja's corrections

| Before | After | Why |
| --- | --- | --- |
| Period: "November 2026, first iteration" | "November 2025 to June 2026" | as stated by Konstancja |
| Client row | removed | as requested |
| Status row | removed | as requested |
| Tools: Figma and the local foundation | adds "Claude Code for quick prototypes; Storybook for the design system" | as requested |
| Period and team: "November 2026. …" | "June 2026. …" | as requested |
| chapter 10 "What happens next" | removed | as requested |
| "tested with one fresh person on 5 November 2026" (00) and "One session on 5 November 2026" (09) | the date dropped | the brief's test date falls after the period now stated; the facts about the test stay |

Still open: items 1 to 3 and 5 of the list above (the company and contract title, whether the client may be named, who agreed what with whom, a "what I would do differently" answer).

## 8 November 2026: the credit and the open points

| Before | After | Why |
| --- | --- | --- |
| credit: "Product Designer · Automotive supplier · 2026" | "Product Designer · APplus · 2025–2026" | company as Konstancja states it; the tile prints APplus as the organisation |
| no Company row | { label: "Company", value: "APplus" } | same |

Closed by Konstancja: the client stays unnamed; no "agreed with" line and no
sign-off chapter; no "What I would do differently". The list of open points
above is closed.

## 10 November 2026: company corrected

| Before | After | Why |
| --- | --- | --- |
| credit: "Product Designer · APplus · 2025–2026" | "Product Designer · Asseco Solutions · 2025–2026" | Konstancja: the company is Asseco Solutions; APplus is its ERP. The organisation segment of the credit now matches the other Asseco studies |
| Company: "APplus" | Company: "Asseco Solutions" and a new row Product: "APplus ERP" | same; company and product in separate rows, as on the other Asseco studies |
