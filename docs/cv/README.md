# CV

`cv.html` is the source; `build.mjs` renders it to the PDF and the two
preview PNGs. Edit the HTML, then:

    PLAYWRIGHT=/path/to/node_modules/playwright/index.mjs node build.mjs

The text order in the HTML is linear (label, then content), so an applicant
tracking system reads it top to bottom; the two-column look is CSS. The
content follows [docs/STYLE.md](../STYLE.md) and the proposal in
[docs/copy-edit/cv-analysis.md](../copy-edit/cv-analysis.md), with the facts
Konstancja confirmed on 10 October 2026: title *Lead Designer, UX Engineer,
AI-fluent*; four products from zero (Elly, Best Practice Hub, Documents,
Analytics); Xecta 04/2020 – 07/2021; the 2026 award; Deloitte as Project
Manager and Centre of Expertise coordinator; a working prototype alongside
the Figma file, and components designed in code.

Changes against the October PDF are logged in
[../copy-edit/log-cv.md](../copy-edit/log-cv.md).
