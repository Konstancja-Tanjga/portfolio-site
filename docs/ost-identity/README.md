# Ogólnopolska Strefa Talentu: how the case study was made

The wall is `site/src/content/ost.ts`, live at `/work/ogolnopolska-strefa-talentu`.
It is the first wall in the `identity` group, listed on the home page under
"Visual identity".

- [KONCEPCJA.md](KONCEPCJA.md): the plan, written before the build (in Polish),
  with the answers to the open questions from 11 and 12 October 2026.
- [../copy-edit/log-ost.md](../copy-edit/log-ost.md): where every claim on the
  page comes from, and what was cut because no source carried it.

## Where the images come from

| Folder in `site/public/work/ogolnopolska-strefa-talentu/` | Source | How |
| --- | --- | --- |
| `screens/concept-*`, `screens/book-*` | the three concept decks and the brand book 1.0 (PDF) | each page rendered at 3x with PDFKit (`scripts/render.swift`), encoded as WebP at 2400 px |
| `screens/letter*`, `card`, `folder`, `rollup`, `website-design`, `social-series`, `ambassador-v1` | the print, web and social boards (PDF) | rendered at 2x, same pipeline |
| `screens/social-*` | `SocialMedia.zip`, variant B, 12 PNG files | re-encoded as WebP at 1200 px |
| `device/*` | the live generators and www.ost.edu.pl, 14 October 2026 | Playwright at 1440 × 946, 2x (`scripts/shots.js`), set into the MacBook frame at x 284, y 73, 1820 × 1196 (`scripts/build_assets.py`) |
| `clips/*` | the live generators | Playwright video at 1440 × 946 (`scripts/rec.js`), cut at 2.2 s, 12 fps, MP4 and WebM |

The sample photo in the generator shots and clips is the author's own
portrait from `site/public/about/portrait.jpg`. The scripts point at a
scratch directory and at `~/Documents/OST`; change the paths before running
them again.

## Screenshots of the result

- `case-top.png`: cover, metadata and "In short" at 1440 px.
- `case-04-05.png`: chapters 03 to 05, with the hotspots and the three concepts.
- `home-band.png`: the new "Visual identity" band on the home page.
