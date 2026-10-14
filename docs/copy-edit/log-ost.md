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
