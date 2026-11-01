# Edit log: Ogólnopolska Strefa Talentu (`site/src/content/ost.ts`)

First version, 14 October 2026, written against `docs/case-study-kit/` and
`docs/STYLE.md`. A new wall has no "before", so this log lists the source of
each claim and the drafts that were cut because no source carried them.

## Sources

| Claim on the page | Source |
| --- | --- |
| Programme of Stowarzyszenie Talent, pilot of prof. Szubartowski's method, grade 6 to secondary school, free of charge | social copy (Social_Kalendarz postow.pdf), letterhead letter, brand book p. 24 |
| Recruitment opened on 13 October 2026 | social calendar: "rekrutacja od 13.10" |
| Targets: at least 60% of teachers outside informatics, at least 50% from places under 25 000 inhabitants | the programme's CRM requirements, §5.4 and §6; quoting them approved by Konstancja, 11 October |
| Prof. Szubartowski taught informatics | Konstancja, 12 October |
| A representative of the programme chose ∀∃; his reason | Konstancja, 12 October; paraphrased because his words were not recorded |
| Test with parents and pupils of grades 4 to 6 took place | Konstancja, 11 October; results confidential, not stated |
| She worked alone | Konstancja, 11 October |
| Three audiences and their needs; pupils aged 12 to 19 | concept "Zadanie z gwiazdką", slide 02 |
| Risk table of "Twoja kolej" (average with parents, informatics only) | concept "Twoja kolej", slide 11 |
| Grid 164 × 88 units, stroke 12, gap 8, bar 56, K and 2K, 72 mm and 380 px, 8 mm and 16 px | brand book pp. 05, 06, 12, 14, 15 |
| Colours, Pantone, shares 45, 35, 12, 5, 3% | brand book pp. 16, 17 |
| Contrast ratios | brand book p. 18 (WCAG 2.2) |
| Typefaces, OFL | brand book pp. 21, 22, 27 |
| First ambassador frame with the bar across the neck; "a dozen questions about where to click" | README of ost-ambasador; Dla kazdego istnieje_Ambasador.pdf |
| Generator steps, keyboard, no server | `ambasador/index.html`, README of ost-ambasador |
| Roll-up eye zone, QR 22 cm from about 2 m | Rollup_INFO.pdf |
| Folder 220 × 310 mm, spine 4 mm | Teczka ofertowa.pdf |
| Letterhead margins, styles, Google Docs | Papier firmowy.pdf, p. 5 |
| 24 logo files of 28 in the handoff | `SVG_Dla kazdego istnieje.zip`: six versions × four colourways, a construction grid, two glyphs, a manifest |

## Cut or changed in drafting

| Draft | Final | Why |
| --- | --- | --- |
| "126 medals at international olympiads" (concept decks, website design) | not used | www.ost.edu.pl states 34 medals won by 17 pupils; the two figures disagree, to be settled with Konstancja |
| Decision 1: "the only concept that read for all three audiences" | "Write the method as ∀∃…" | the client chose; the decision on the page must be hers |
| "The asterisk lost because…" | it lost in the client's choice | no source gives a reason |
| "The test came after the choice" | the test took place | its date is not on record |
| "28 SVG files: seven versions" | 24 logo files, six versions | counted in the archive |
| "The animation of ∃∀ turning into ∀∃" in post 1 | "The graphic shows…" | post 1 is a still |
| "Write the plain reading next to every formula from the first draft" | removed from chapter 11 | not a lesson on record |
| "There is never more coral than navy" | "Coral never outweighs navy" | STYLE 2.2, no indirect opening |
| cover headline "For every student / there exists a talent" | "For every / student, a talent" | the long lines ran under the board on the typeset cover |

## Title, 14 October 2026

| Before | After | Why |
| --- | --- | --- |
| "For every / student, a talent" | "∀ For every student, / ∃ there exists a talent" | Konstancja: the title must show the two quantifiers, because they carry the sentence. Standard English reading of ∀x ∃y is "for every x there exists a y"; "there" is required in English, which her draft "exists a talent" dropped |
| ∀ and ∃ set as characters | drawn from the programme's glyph files (`system/Quantifiers.tsx`) | Bricolage Grotesque has neither glyph and fell back to a thin system font; the brand book p. 26 sets formulas from glyph files at cap height, in the text colour |
| cover art: brand book cover board | story 1 of 4 (portrait); intro: four MacBook layers | the landscape board covered the headline on the tile and in the intro |

## Covers, layers and facts, 14 October 2026 (second round)

| Before | After | Why |
| --- | --- | --- |
| tile art: story 1 of 4 | `screens/cover-diagram.webp`: ∃∀ → ∀∃ and five lines, each to its own coral point, drawn transparent from the programme's glyphs | Konstancja: the tile shows the diagram and the title |
| intro layers: the live site and three generator views | brand book p. 04 (the name as a formula), the website design desktop and mobile, three recruitment posts, the ambassador generator, the live site | Konstancja: more of the website design, three posts, a brand book slide that explains the mark |
| chart in sand over the layers | ∀∃ in outline (`cover.overlay: "quantifiers"`); other walls keep the chart | Konstancja: no bar chart on this wall |
| 126 medals not used | "Pupils of prof. Szubartowski won 126 medals at international olympiads" (chapter 03, website board) | Konstancja confirmed 126 |
| www.ost.edu.pl, no author named | "built by the programme's own team" | Konstancja: the programme built the site |
| website design only as a board in the carousel | also as a MacBook and phone mockup opening chapter 07 | Konstancja: show more of the website design |
| lead in one colour | "prof. Ryszard Szubartowski's method" in coral #FF5A36 (`leadAccent`) | Konstancja; 6.2:1 on the page ground #0F0F0E, and brand book C1 allows coral text on dark grounds |
| chapter 01 carousel ended with the ambassador generator in a MacBook | removed; the carousel is boards only | Konstancja: no MacBook in this carousel; the generator stays in the intro layers, chapter 08 and the clips |

## Third round, 14 October 2026

| Before | After | Why |
| --- | --- | --- |
| a grey strip and side wedges under every MacBook base, left by the background key | removed from `frames/macbook.webp` and from every mockup on the site (198 files, all studies) | Konstancja: remove them everywhere; `docs/ost-identity/scripts/unbar.py` plus a pass for the five Analytics frames of 2400 × 1512 |
| chapter 01 carousel: 7 boards | 17: brand book pages 01, 03, 04, 05, 07, 09, 10, 16, 19, 24, 26, 28, 29, 30, 31, the key visual, the social series | Konstancja: show the process and the artefacts |
| no duration | "Five days of work" in chapter 01, the period row of "In short", and the metadata | Konstancja: the work took five days |
| UC-01 "Ambassadors" | "Ambassadors and supporters", with the challenge (no Photoshop, simple and accessible) and "designed, built, and deployed by me on Vercel" as its own panel | Konstancja: the generator is a use case worth stating |
| chapter 01a "Why this is a hard brief" | removed | Konstancja; its facts stay elsewhere: the two recruitment targets in UC-02, the founder as an informatics teacher in chapter 03, 15 mm to 2 m in "In short" |
| chapter 07: "Letter to a head teacher", "Business card" | "A post for pupils" (concept deck p. 11: the formula as a post, the plain slogan as a story) and "A3 posters" (concept deck p. 9: one per group) | Konstancja: the letter and the card were unreadable and did not sell; UC-03 tile cover moved from the letter to the letterhead |
| "A3 posters" squeezed (2.35:1 forced to the 16:10 stage) | board padded with its own background to 1.6:1; `.car--portrait .car__img` gets `object-fit: contain`, so no board in a portrait carousel is distorted again | Konstancja |

## Review fixes, 14 October 2026

Three review agents (code, comments, types) ran before the pull request. Fixed:

| Before | After | Why |
| --- | --- | --- |
| contrast copy from brand book p. 18: navy on white 15.7:1, on warm white 13.7:1, coral on navy 5.1:1, dark coral on white 4.5:1 | 16.1:1, 14.0:1, 5.2:1, and 4.47:1 "just under the 4.5:1 text needs, so the bar only, never text" | recomputed with the WCAG formula from the stated hex values; the brand book p. 18 needs the same correction |
| "prof. Ryszard Szubartowski" (5 places, lead and leadAccent together) | "Prof." | STYLE 4: a title before a name is capitalised |
| six series without the serial comma | serial comma | STYLE 3.5 |
| four "which" pointing at a whole clause | the thing named, or the clause recast | STYLE 1.3 |
| "25 000" with an ordinary space | narrow no-break space | STYLE 3.5, and the number no longer breaks across lines |
| persona quote "There is only one like you." | "Only one like you exists." | RULES 9.8 grep; keeps "istnieje" |
| "one unit is 0.179 mm, and the logo is 398 units wide" | "…398 units wide, 71.2 mm, rounded up to 72" | 398 × 0.179 is 71.2 |
| next-project link on OST went to Reading the sky (Practice) | goes to Analytics: a band of one draws from walls on the same listing | `neighbours` in content/index.ts |
| ∀ and ∃ in the h1 as `role="img"` spans: read twice, missing from copy | glyph `aria-hidden`, the character beside it in `.sr-only` | screen readers and find-in-page |
| glyphs vanish in Windows high-contrast mode | `forced-colors` rule draws them in CanvasText | accessibility |
| portrait carousel `object-fit: contain` letterboxed wide boards on phones | `height: auto; max-height: 100%`; Riyad and Flow slides are taller than the stage, so they look the same | review |
| `leadAccent` unchecked | `LeadAccent` type with `#${string}` hex; development throws when the phrase is not in the lead | type review |
| stale comments in ost.ts, types.ts, index.ts, Cover.tsx, Quantifiers.tsx, case.css; README image table and script paths | rewritten to match the code and the files; `scripts/clips.sh` added; screenshots retaken | comment review |

## 25 October 2026: rebuilt the Analytics way

Review from the hiring manager's chair (two minutes, by scroll), before the rebuild:

1. The cover, the lead, and "In short" all say the role and the scope; the metadata strip says them a fourth time, and chapter 01 a fifth ("What I delivered", six bullets).
2. "In short" has eight rows and no picture; Context repeats the lead, Period and team repeats the strip.
3. The idea (∃∀ against ∀∃) is explained in 01, 03, the 03 fold, 04, and UC-02: five times.
4. Six maxims, one per chapter; none of them earns more than its chapter's standfirst.
5. A 17-slide carousel in 01 shows pages that 03, 04, 06, 06a, and 08 show again.
6. 06a is four annotated brand-book pages with grid-unit notes: reference for whoever rebuilds the mark, not an argument.
7. 07 stacks a MacBook, a five-slide carousel, and a second MacBook: 2 500 px for material of equal rank.
8. UC-03 (a letter from the office) is a Word template; UC-01 repeats Decision 3 in its challenge bullets.
9. 09 is six `steps` for a handoff that is a list of files; 10 counts files that the strip already counts (24 SVG, 12 PNG).
10. No tool for drawing the mark is named anywhere on the page, so the reader cannot tell how the identity was made, only what it is.

| Before | After | Why |
| --- | --- | --- |
| 00: Context, Problem, My role and scope, three decisions, Outcome, Period and team | What, Problem, My role, three decisions with a picture each, Outcome | the sixty-second page; the strip has Team and Period |
| 00 decisions as text | Decision 1 on brand book page 03 (∃∀ against ∀∃), linking to 03; Decision 2 on page 12 (K, the student's bar), linking to 06a; Decision 3 on the ambassador generator in its MacBook, linking to 08 | each shows the decision taken |
| 01: maxim, standfirst, six "What I delivered" bullets, 17 slides | one sentence and 10 slides | the role is in 00 and the strip; the origin, grid, not-VE, palette, media, engraving, and social-series pages are shown where they are argued |
| 02: two standfirsts, teacher with three goals, sentences in every field | one standfirst, two goals each, one line per field | personas rule of the kit |
| 03: six bullets | four | the starred problem is in the 05 captions; the ∃∀ bullet half as long |
| 04: maxim and standfirst | the maxim's claim folded into the standfirst | two maxims on the page: 03 and 06a |
| 05: five flow stages and a duo (risk table, the gap drawing) | three stages; the risk table dropped, the gap drawing moved into the 06a fold | the three concept boards are the set above; the choice and the drawing are the stages that matter |
| 06: maxim, `evolution` open, palette, type spec | palette and type first, the two versions in a `fold` | the deck's history is reference |
| 06: no sheet | none | the file names no design tool for the mark; a sheet of PDFs and SVGs would be the handoff list again. Question for Konstancja below |
| 06a: four annotated pages open, the errors page folded | the clear-space page open with K1 and K2 in the caption; construction, proportions, contrast, the gap drawing, and the errors page in one `fold` | the folder is for whoever rebuilds the mark; the one page that shows Decision 2 stays on the surface |
| 07: MacBook, portrait carousel of five, MacBook, stacked | `tabs`: Website design, www.ost.edu.pl, Print and social (the portrait carousel of four) | peer content; the flat website board left the carousel because the MacBook tab shows it |
| 08: three use cases, UC-01 opening with a three-bullet "challenge" | two use cases; the challenge bullets gone, the Vercel line in the standfirst | UC-03 was the Word template, now a line in 09; the bullets repeated Decision 3 and the strip |
| 09: six `steps` | `flow` of four cards; T1 in the standfirst | a handoff list reads as cards, not rules |
| 10: four stats and two clips stacked | three stats (8 mm, 16.1:1, 2.7:1) and the clips as two `tabs` | 24 files and 12 graphics are in the strip |
| 11: full sentences | fragments | joint answers |
| "25 000" with a plain space (after the rewrite) | narrow no-break space | STYLE 3.5 |

Numbers at 1440 px, measured on the dev server after a full scroll: 2 786 to 2 066 visible words; 20 333 to 16 751 px; 13 chapters before and after; 50 to 36 images on the surface (the folds and the dossier hold the rest); two clips, now one per tab. Still open: which tool drew the mark and set the brand book (not on the page, so no sheet), and whether the 126 medals line in 03 should carry its source on the page.

## 25 October 2026: second cut

Konstancja's brief: cut more, about 1 300 words and 12 000 px, fewer than thirteen chapters; keep the three decision cards, the tabs, and the folds; add nothing.

| Before | After | Why |
| --- | --- | --- |
| 13 chapters (00 to 11, with 06a) | 10 chapters, 00 to 09, numbered consecutively | three merges and one drop, below |
| 04 "What the mark had to answer": duo with seven hotspots, three points | the duo in 03 Discovery with three hotspots; the three points gone | the coral ratio is in the palette, the gap in the prototypes flow, "laypeople" in the parent persona |
| 06a "Mark architecture": maxim, clear-space page open, fold of three annotated pages and a duo | in 05 Design system: the clear-space page is the first of four annotated pages inside the rule fold (K1, K2); maxim dropped | the fold stays; the open page repeated the Decision 2 card. Decision 2 now links to `#design-system` |
| 10 "Evidence": three stats and the two clips as tabs | dropped; the clips (still two tabs) sit in UC-01, after the use case | 8 mm, 16.1:1, and 2.7:1 are already in the palette and the rule fold; the generators at work belong with the generator use case |
| 03: four points, folded shot of page 03 | three points; the folded shot gone | page 03 is the Decision 1 card |
| 01 carousel: 10 slides | 6: mark, formula, versions, black and white, slogans, four seconds | grounds, hierarchy, social, and the key visual are shown or said elsewhere (05, 06, 00) |
| personas: two goals, sentences, `job` | one goal, fragments, no `job`; badges shortened | the type requires badge, quote, context, goals, breaks, and must, so no field could be dropped; each is one fragment |
| UC-01: six steps; UC-02: five | four each: slogan and format in one step, crop and colour in one; the coral button joins post 4 | the brief; nothing lost but a step boundary |
| maxims: 03 and 06a | 03 only ("The method already had a sentence…") | at most one. The dossier tiles keep theirs: the type requires them |
| standfirsts of 02, 04, 05, 06, 07, 08; captions; flow bodies; handoff cards; joints | one sentence; one fragment | the brief |
| lead: "…two generators that let the programme's ambassadors make their own posts" | "…two generators for the programme's ambassadors" | `leadAccent` text kept verbatim |
| palette notes with Pantone numbers; "Pantone" in the handoff card | Pantone numbers gone from the notes; "colours in HEX, CMYK, and Pantone" stays in 08 | the brand book has them; the page states that it does |
| fold hints: "Open: two versions, what each one could and could not do", "Open: three annotated pages, the drawing of the gap, fifteen errors" | "Open: two versions", "Open: four annotated pages and fifteen errors" | one fragment |

Numbers at 1440 px on the dev server after a full scroll: 2 066 to 1 400 visible words (263 of them the cover, lead, and strip, which the brief does not touch); 16 751 to 12 899 px; 13 to 10 chapters; 36 to 29 surface images; the two clips are now inside the dossier. At 390 px: 18 348 px, no horizontal scroll.

Refused or not reached: personas to three fields (the type makes six required; cut to fragments instead); 12 000 px (the last 900 px would cost the brand-book carousel, the three concept boards, or the audit duo, each the only evidence of its chapter; the cover, lead, strip, and the next-project band take about 3 700 px of the total); the dossier maxims (required by `Dossier`). Still open from the first cut: which tool drew the mark, and whether the 126 medals line in 03 carries its source.
