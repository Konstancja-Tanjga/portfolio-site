
# Copy edit against STYLE.md: inventory and order of work

Scope, as asked on 10 October 2026: the home page, every case study, About,
the README, the CV, and the LinkedIn profile. Everything is edited against
[docs/STYLE.md](../STYLE.md). The edit runs chapter by chapter, in the
course of other work on each piece, and every edited piece gets a log in
this folder (`log-<piece>.md`: before, after, rule) so the change can be
reviewed without a diff of the whole file.

## What there is

Word counts are of the visible text only (strings in the content files,
markup stripped). "Flags" are mechanical counts of the commonest STYLE.md
violations, found by script, not a full read: em dashes (3.6), slash
compounds such as *UX/UI* or *desktop/mobile* (3.16), indirect openings
(*there is*, *it appears*, 2.2), hedges (*may*, *might*, *tend to*, *appear
to*, 2.2.2), and the word *screenshot* in a caption (section 5).

| Piece | Where | Words | Captions | Em dashes | Slashes | Indirect | Hedges | "screenshot" |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home page | `site/src/home/story.tsx`, `site/src/pages/Home.tsx` | 685 | 4 | 0 | 7 | 0 | 0 | 0 |
| Masthead and footer | `site/src/components/Shell.tsx` | 64 | 0 | 0 | 2 | 0 | 0 | 0 |
| README | `README.md` | 799 | 0 | 9 | 4 | 0 | 0 | 0 |
| About | `site/src/content/about.ts` | 1 741 | 5 | 20 | 10 | 1 | 0 | 4 |
| APplus Analytics | `bi.ts` (in the Analytics rework branch) | 5 154 | 25 | 4 | 4 | 3 | 2 | 2 |
| Elly | `elly.ts` | 3 784 | 30 | 9 | 28 | 3 | 3 | 0 |
| APplus Documents | `dms.ts` | 3 328 | 22 | 17 | 18 | 0 | 2 | 1 |
| Best Practice Hub | `bph.ts` | 1 652 | 8 | 1 | 2 | 0 | 2 | 0 |
| Flow mode | `flow.ts` | 908 | 9 | 1 | 1 | 1 | 0 | 0 |
| Volvo Group ERP | `volvo.ts` | 1 295 | 11 | 0 | 4 | 0 | 0 | 0 |
| MojePZU | `pzu.ts` | 1 186 | 6 | 0 | 4 | 0 | 0 | 0 |
| Xecta | `xecta.ts` | 478 | 10 | 0 | 0 | 0 | 0 | 0 |
| Riyad Bank | `riyad.ts` | 270 | 4 | 2 | 4 | 0 | 0 | 1 |
| Reading the sky | `sky.ts` | 2 401 | 19 | 0 | 4 | 1 | 0 | 0 |
| Big Hat design system | `bighat.ts` | 1 225 | 14 | 15 | 16 | 0 | 2 | 0 |
| FOX design system | `fox.ts` | 516 | 3 | 3 | 3 | 0 | 0 | 0 |
| Futures Thinking | `futures.ts` | 236 | 0 | 4 | 0 | 0 | 0 | 0 |
| Tinder for Chihuahua | `chihuahua.ts` | 4 843 | 36 | 60 | 34 | 6 | 0 | 0 |
| ERP System of the Year | `award.ts` | 363 | 3 | 3 | 0 | 1 | 0 | 0 |
| Bydgoszcz Design Challenge | `bydgoszcz.ts` | 217 | 3 | 1 | 0 | 0 | 0 | 0 |
| Possible Reality | `possible.ts` | 104 | 1 | 2 | 0 | 0 | 0 | 0 |
| Watercolours (captions) | `watercolours.ts` | 616 | 0 | 3 | 0 | 0 | 0 | 0 |
| CV | `sources/cv-2026-10.md` (from the October PDF) | ≈1 500 | | 6 | 4 | 0 | 0 | 0 |
| LinkedIn, Experience | `sources/linkedin-experience-2026-10.md` | ≈1 200 | | 3 | 3 | 0 | 0 | 0 |
| LinkedIn, headline and About | not supplied | | | | | | | |

Site total: about 31 400 words across 17 walls, the home page, About and
the README. Seventeen walls are on `main`; the brief said nineteen, and the
two missing (Deloitte, Energy) exist only as uncommitted files in the main
checkout, so they are listed under open points.

## What the scan says

- **Em dashes are the house habit.** 150 on the site, 60 of them in Tinder
  for Chihuahua, 20 in About. STYLE.md keeps the dash for emphasis only,
  paired; most of these become a comma, a colon, or a new sentence.
- **Slash compounds.** *UX/UI*, *desktop/mobile*, *Angular/React*,
  *design/code* appear 150 times. Each becomes *and*, *or*, or a hyphen.
  *and/or* stays.
- **Uppercase kickers and stamps** on every cover (*PRODUCT DESIGN ·
  ENTERPRISE SOFTWARE*, *DASHBOARDS · QUERIES · DATA MODELS*). Decision
  needed: keep the uppercase as a typographic treatment applied by CSS and
  store the text in sentence case, or drop the all-capital labels. The
  middle dots are a separator convention the handbook does not cover;
  proposal: keep them in stamps, remove them from running text.
- **Indirect openings and hedges** are rare (16 and 11), which is good; they
  go in the pass.
- **"screenshot"** in eight captions, mostly About and Analytics.
- **Headings** are already sentence style on the site. Headline-style
  capitals appear in the CV section labels and the LinkedIn course titles.

## Facts that disagree across the pieces

These are checked before any sentence is edited, because the edit must not
carry a wrong fact forward.

| Fact | CV | LinkedIn | Site |
| --- | --- | --- | --- |
| Current title | Lead Product Designer | Lead Designer | Lead Designer / UX Engineer (About), Lead Product Designer (covers) |
| Team | leads two product designers | not stated | team of two, since 10 Oct |
| Award | 2025 only | 2025 only | 2025 and 2026 |
| Xecta dates | 04/2020 – 07/2021 | 04/2021 – 07/2022 | 2021–2022 (Earlier) |
| Deloitte role | Project Manager, "owned design end to end" | Project Manager and CoE Regional Coordinator | Deloitte wall not on main |
| Products from zero at Asseco | four | not counted | three (home page ledger) |
| Prototype handoff | "a working prototype alongside the Figma file" | "prototypes are running applications built from production components" | Analytics rework brief: do not claim prototype code goes into implementation |

One answer per row, then every piece says the same thing.

## Order of work

1. **CV.** Smallest, sent directly to employers, highest stakes. Slash in
   the Big Hat title, em dashes in Education, the award line, the title
   variants, the Xecta dates. Needs the source file (the PDF is not
   editable); see open points.
2. **LinkedIn profile.** Experience entries first: the all-capital labels,
   the contractions, the Volvo and Xecta paragraphs (passive, wordy,
   *characterized by complexity*, *a lot of*), the Deloitte fragments, the
   *Hackatons* spelling. Then headline and About, once supplied.
3. **Home page, masthead, README.** One voice for the site's front door.
4. **Case studies, in the order readers open them** (Umami, to 10 October):
   Analytics (inside its rework, chapter by chapter), Elly, Reading the sky,
   Volvo, Documents, Xecta, Best Practice Hub, Big Hat, then Flow, PZU,
   FOX, Chihuahua, Riyad, Futures, the three recognition pages, and the
   watercolour captions.
5. **About.** Last, because it summarises everything above and should be
   edited once the facts are settled.

Each step: edit, run the STYLE.md checklist, write `log-<piece>.md`, build,
commit with the log in the same commit.

## Open points

1. The CV source: Figma, Pages, Word, or something else? The PDF cannot be
   edited, and the edit has to land in the file the next PDF comes from.
2. LinkedIn headline, About and Featured descriptions: paste them in, or
   grant access to copy them.
3. The seven fact rows above: one answer each.
4. Deloitte and Energy walls: commit them to `main` first, or leave them out
   of this edit.
5. Uppercase kickers and stamps: CSS treatment, or dropped.
