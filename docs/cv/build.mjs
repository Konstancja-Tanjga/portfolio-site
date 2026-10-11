// Renders cv.html to PDF (A4, two pages) and a PNG preview per page.
// Run from this folder:  PLAYWRIGHT=/path/to/node_modules/playwright/index.mjs node build.mjs
// (or plain `node build.mjs` where playwright is installed).
const { chromium } = await import(process.env.PLAYWRIGHT ?? "playwright");
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "Konstancja_Tanjga-Nawrot_CV_2026-10.pdf");
const b = await chromium.launch();
const p = await b.newPage();
await p.goto("file://" + resolve(here, "cv.html"), { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
await p.pdf({ path: out, format: "A4", printBackground: true, preferCSSPageSize: true });
// previews: emulate print and screenshot each page height
await p.emulateMedia({ media: "print" });
await p.setViewportSize({ width: 794, height: 1123 });
await p.screenshot({ path: resolve(here, "preview-page-1.png"), clip: { x: 0, y: 0, width: 794, height: 1123 } });
await b.close();
console.log("wrote", out);
