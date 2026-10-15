# Tinder for Chihuahua: the cut

October 2026. The study at `/work/tinder-for-chihuahua` carried about 4700
words on the surface, 25 minutes of reading, with no layer a recruiter could
take in thirty seconds. This note records what was cut, what was folded, and
why, so the next study can be checked against the same rule.

## Target

The three-reader rule from `docs/case-study-kit/RULES.md`:

| Pass | Reader | Time | Takes away |
| --- | --- | --- | --- |
| Skim | Recruiter | 30 s | Cover, In short, headings, maxims, bold leads |
| Read | Design lead | 5 min | Bullets, panels, the video, the personas |
| Verify | Engineer | 15 min | Folded panels, the sources, the live app |

The target was about 2000 words on the surface. Everything else is either
behind one click or gone.

## Result

| | Before | After |
| --- | --- | --- |
| Words on the surface | 4717 | 2207 |
| Words behind a click | 548 | 1106 |
| Chapters | 16 | 14 |
| Page height at 1440 | 46 500 px | 34 000 px |

Counted from the content file: everything a reader sees without opening a
drawer, a dossier tile, or a hotspot, including captions, persona cards and
the metadata strip. The lead and metadata alone are 116 words.

## The spine

Five phases, each with one artefact and one sentence about the reasoning:

1. **Brief and thesis** (01, 01a): a signal, never a match; five hard
   constraints.
2. **Research and personas** (02, 03): ten findings with their
   requirements; "Design for Auri, test with Karmel".
3. **The service** (04): one risk from the blueprint and the three numbers
   it produced; the two journeys and the blueprint as dossier tiles.
4. **Rules and screens** (06, 07, 08): three directions, 34 laws, the
   two-hue palette, the session video.
5. **Measurement and correction** (09, 09a, 10): the flicker law a
   measurement disproved; the pipeline; what is still to be measured.

## Chapter by chapter

| Was | Now | What happened |
| --- | --- | --- |
| meta, 7 rows | 5 rows | Frame dropped; Live and Source merged |
| 00 In short | 00 | Rows trimmed towards 20 words |
| 01 The promise | 01 | Two passages and two bullet lists became one passage and three bullets; the constraints table dropped because 01a says the same |
| 01a Hard brief | 01a | Kept; each bullet one sentence |
| 02 Who it is for | 02 | Four bullets dropped (they repeated 01a); the research panel stays visible as the evidence |
| 03 Personas | 03 | Both passages cut; persona cards shortened |
| 04, 05, 06 journeys and blueprint | 04 The service | Merged. The wet-nose risk table on the surface, three panels as dossier tiles. Old ids live on as tile ids |
| 07 Benchmark | 05 | Second table and two passages became three bullets; panel folded |
| 08 Directions | 06 | Captions shortened |
| 09 CIG | 07 | Passage became two bullets; five laws became three; palette notes cut |
| 10 Modes | 08 | Passages inside the tiles became bullets |
| 12 Testing | 09 | Opening three questions dropped (they are in 10); correction story kept as a thesis and four bullets |
| 12a Pipeline | 09a Tools and pipeline | Stack kept whole; passage cut to one sentence |
| 13 What it cost | 10 | Five confessions became three; "Why this is on the site" dropped (00 says it); joint trimmed to three |
| 14 Sources | 11 | Four drawers, closed by default, one per group |

Panel files keep their original numbers (`ch04` to `ch12`) because the app
repo generates them.

## One change to the block set

`points` gained `fold?: string`: the head of a drawer the list sits behind,
rendered with the same drawer a folded `shot` uses, so a reader learns one
control. The CSS adds a `drawer--text` modifier for a drawer with no
thumbnail. Nothing a reader needs is behind one: the sources are for
checking, not reading.

## Checks

- `tsc --noEmit`, `npm run check`, `npm run build`: clean.
- No horizontal scroll at 1440 or 390.
- Every chapter id opens from a hash; `#journey-dog`, `#blueprint`,
  `#dog-mode` and `#human-mode` open their tile.
- Grep for em dashes, arrows, "there is", "screenshot of" and American
  spellings: nothing.

## Screenshots

- `before-1440.jpg`, `after-1440.jpg`: the whole page, before and after.
- `before-390.jpg`, `after-390.jpg`: the same at phone width.
- `after-service.jpg`: the merged chapter 04.
- `after-sources-open.jpg`, `after-sources-open-390.jpg`: a sources drawer
  open.
