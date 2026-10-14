# Ogólnopolska Strefa Talentu: how the case study was made

The wall is `site/src/content/ost.ts`, live at `/work/ogolnopolska-strefa-talentu`.
It is the first wall in the `identity` group, listed on the home page under
"Visual identity".

- [KONCEPCJA.md](KONCEPCJA.md): the plan, written before the build (in Polish),
  with the answers to the open questions from 11 and 12 October 2026.
- [../copy-edit/log-ost.md](../copy-edit/log-ost.md): where every claim on the
  page comes from, and what was cut because no source carried it.

## Where the images come from

| Files in `site/public/work/ogolnopolska-strefa-talentu/` | Source | How |
| --- | --- | --- |
| `screens/concept-*`, `screens/book-*` | the three concept decks and the brand book 1.0 (PDF) | each page rendered at 3x with PDFKit (`scripts/render.swift`), 2160 px wide, encoded as WebP (`scripts/build_assets.py`); `book-grounds` (page 19) was resized to 2400 px by hand |
| `screens/letter*`, `card`, `folder`, `rollup`, `website-design`, `social-series`, `social-start`, `social-towns`, `social-subjects`, `ambassador-v1` | the print, web and social boards (PDF) | rendered at 2x, same pipeline |
| `screens/posters-a3`, `screens/social-pupils` | concept deck, pages 9 and 11 | cropped from the 3x render; the posters padded with the board's own background to 1.6:1 so the carousel does not squeeze them |
| `screens/social-10-*` | `SocialMedia.zip`, variant B, 12 PNG files | re-encoded as WebP at 1200 px |
| `screens/site-mobile` | www.ost.edu.pl at 390 px | Playwright, 3x (`scripts/shots.js`) |
| `screens/cover-diagram` | the programme's ∀ and ∃ glyphs | drawn by `scripts/diagram.js` |
| `device/site-home`, `device/generator-*` | the live generators and www.ost.edu.pl, 14 October 2026 | Playwright at 1440 × 946, 2x (`scripts/shots.js`), set into the MacBook frame at x 284, y 73, 1820 × 1196 (`scripts/build_assets.py`) |
| `device/book-formula`, `device/website-design*`, `device/social-three` | brand book page 04, the website board, three posts | composed by `scripts/compose.py` |
| `clips/*` | the live generators | Playwright video at 1440 × 946 (`scripts/rec.js`); the first 2.2 s trimmed, encoded at 12 fps by `scripts/clips.sh` |
| `glyph-forall.svg`, `glyph-exists.svg` | `SVG_Dla kazdego istnieje.zip`, folder `glify` | copied with the C2PA metadata removed; drawn by `system/Quantifiers.tsx` |

The sample photo in the generator shots and clips is the author's own
portrait from `site/public/about/portrait.jpg`.

The scripts read their inputs from relative folders (`pdf/`, `shots/`,
`social/eksport-social/wariant-B/`, `rec/`), so run them from a working folder
that holds the renders of the PDFs and PNGs from `~/Documents/OST`. They write
into the repository by the absolute path
`/Users/konstancjatanjga/Developer/portfolio-site`; change it before running
them anywhere else.

## The grey strip under every MacBook

`scripts/unbar.py` removed the grey strip and the side wedges that the
background key had left under the MacBook base, in `site/public/work/frames/macbook.webp`
and in every `*/device/*.webp` of the same 2400:1501 shape, in every case
study, not only this one. It needs a mask at `/tmp/macmask.png` (the
light-grey pixels below row 1354 of the frame, widened by 11 px) and runs
from `site/public/work`. The five Analytics mockups of 2400 × 1512 were
cleaned by the same rule below their own base.

## Screenshots of the result

Retaken on 14 October 2026, after the review fixes.

- `case-top.png`: the title with the ∀ and ∃ glyphs, at 1440 px.
- `case-layers.png`: the layered cover with the outlined ∀∃.
- `home-band.png`: the "Visual identity" band on the home page.
