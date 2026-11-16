# Edit log: SailRock (`site/src/content/sailrock.ts`)

Written 16 November 2026 against `docs/STYLE.md` and
`docs/case-study-kit/RULES.md`, with `sky.ts` and `flow-logistics.ts` as the
references: a personal project credited to two makers, and a phone app with
no MacBook mockup. A new study, so no before and after table; this log
records where each number comes from and what the checklist found.

## Sources

Repository: https://github.com/Konstancja-Tanjga/SailRock at commit `3f4b322`.

| Statement | Source |
| --- | --- |
| 75 tests | `npm test` at `3f4b322`: four test files, 75 tests passed |
| Tests run before every deploy | `vercel.json`, `buildCommand: "npm test && npm run build"` |
| Nine worked examples reproduced | `src/tables/tablePlanner.test.ts` (examples 1 to 4 for the Bühlmann-Hahn table) and `src/tables/rdp.test.ts` (problems 1, 2, 3, 5, and 8 for the Recreational Dive Planner), from the pages named in the SailRock README |
| 351 surface-interval ranges, read from three cards | `src/tables/rdpData.ts`, `RDP_SURFACE`: 26 rows of 1 to 26 ranges; the three readings are described in the SailRock README, "Where the numbers come from" |
| 19 depths, 9 m to 63 m | `src/tables/buhlmannHahn0_250.ts`, `TABLE`; asserted in `tablePlanner.test.ts` |
| 40 m for 30 minutes read as 42 m: stops of 1, 4, 6, and 18 minutes, 29 minutes of decompression, group G | `tablePlanner.test.ts`, "wiersze podane przez użytkowniczkę"; screen `08-deco-result` |
| 20 m for 28 minutes in cold water: 25 m, group P, 29 minutes maximum; after one hour, group E and 22 minutes at 22 m | `rdp.test.ts`, "zadanie 5"; screens `02-no-deco-result` and `03-repetitive-dive` |
| 90 minutes and a 44-minute penalty make 134 | `src/tables/tablePlanner.ts`, the message of `lookupRepetitive`; the figures are the app's for a second dive to 18 m after group G and one hour |
| Gas figures in captions (123, 77, 46; 85, 115, 43; 73 bar short) | The screens themselves, with the default cylinder of 15 litres at 200 bar |
| EANx32 and EANx36 at 30 m against 1.4 ata | 0.32 × 4 ata = 1.28; 0.36 × 4 ata = 1.44; clip `nitrox-check` |
| Big Hat 6.1 | `vendor/bighat-ui-6.1.0.tgz` in the SailRock repository |
| Six gaps and a plan of seven steps | Branch `gaps/sailrock` of the Big Hat repository, `DS-GAPS.md`, entries 11 to 16; not merged on the day of writing, so the page links nothing |
| Six commits in three days, 14 to 16 November 2026 | `git log` of SailRock at `3f4b322` |
| Clip lengths of 27, 15, and 11 seconds | `ffprobe` on the three MP4 files: 26.6, 14.6, and 11.0 seconds |

## What the page does not claim

- No result of use: nothing was measured, so the Outcome row states what
  exists and what was tested.
- No cell-by-cell check of the transcribed tables against the printed
  cards. The page says so in the Outcome row and in chapter 06, as the app
  does on first run.
- The credit follows `sky.ts`: the brief, the rules, and the direction are
  mine; the interface, the code, the transcription, and the tests were made
  with Claude.

## Checklist

- Chapters: In short, What it is, then the three decisions in the order
  the brief states them, the flows, the checks, the design system, the
  credit, and what comes next. The product-study stack (personas, audit,
  handoff) does not apply to a three-day personal project and was not
  filled for the sake of it.
- Images: phone screens at 390 by 844, exported 900 px wide, as on Flow
  Logistics; no MacBook mockup. Every image has a caption that says what
  to look at.
- Language: serial comma, British spelling, no em dashes or arrows; the
  table is written "Bühlmann-Hahn" in prose, with a hyphen, because the
  printed name joins the two with a slash.
- Build: `npm run check` and `npm run build` pass. No horizontal scroll at
  1440 and 390, checked with reduced motion on.
