import type { ExplodedScreen, Rect } from "../system/Exploded";

/**
 * Screens taken apart in the case studies' "Design system" chapters.
 *
 * Each is one Figma frame exported at 2x and served as WebP; the frame is
 * the screen, so `screen` starts at 0, 0. Every part and outline rect is
 * that layer's position and size in the frame, read from the Figma file,
 * except the Hub card heights, measured on the export. The part names are
 * the layer names; on the Hub they match the three components its case
 * study names, plus `filters`. Colours were sampled from single points on
 * real elements of the frame, named by the role they play there.
 *
 * No `spacing`: FOX's spacing steps are not on record here, and the scale
 * the home page shows is the site's own (Big Hat), not FOX's.
 */

/** Documents: the list, from Figma node 634:19568 ("Dashboard"). */
export const documentsExploded: ExplodedScreen = {
  name: "APplus Documents",
  system: "FOX",
  src: "/work/applus-documents/exploded/documents-list.webp",
  size: [1920, 1080],
  screen: [0, 0, 1920, 1080],
  parts: [
    { name: "navigation bar", rect: [0, 0, 260, 1080], rail: true },
    { name: "app bar", rect: [260, 0, 1660, 112] },
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({ name: "list row", rect: [284, 184 + i * 90, 1612, 90] as Rect })),
    { name: "pagination", rect: [284, 1042, 1297, 38] },
  ],
  grid: [284, 112, 1612, 968],
  layoutNote: "navigation bar, app bar, list",
  layout: [
    [0, 0, 260, 1080],
    [260, 0, 1660, 112],
    [284, 184, 1612, 810], // the nine list rows together
    [284, 1042, 1297, 38],
  ],
  colours: [
    { role: "action", value: "#2567cf" },
    { role: "surface", value: "#ffffff" },
    { role: "canvas", value: "#d4e6fb" },
    { role: "text", value: "#3a414a" },
  ],
  tokensAt: [560, 330],
  // the checked checkbox in the third row
  pixel: [323, 409],
};

/** Best Practice Hub: the boards, from Figma node 632:31992 ("Search with categories"). */
export const hubExploded: ExplodedScreen = {
  name: "APplus Best Practice Hub",
  system: "FOX",
  src: "/work/applus-best-practice-hub/exploded/boards.webp",
  size: [1920, 994],
  screen: [0, 0, 1920, 994],
  parts: [
    { name: "secondary app bar BPH", rect: [0, 0, 1920, 62] },
    { name: "filters", rect: [82, 215, 1100, 32] },
    // heights measured on the export: 268, and 260 for the first card of the second row
    ...[0, 1].flatMap((row) =>
      [98, 535, 972, 1409].map((x, col) => ({
        name: "BPH Card",
        rect: [x, 289 + row * 302, 397, row === 1 && col === 0 ? 260 : 268] as Rect,
      })),
    ),
  ],
  grid: [98, 62, 1724, 932],
  layoutNote: "secondary app bar BPH, filters, card grid BPH",
  layout: [
    [0, 0, 1920, 62],
    [82, 165, 1100, 82],
    [82, 281, 1756, 640],
  ],
  colours: [
    { role: "action", value: "#0a70eb" },
    { role: "newest", value: "#00855d" },
    { role: "legacy", value: "#ffc300" },
    { role: "surface", value: "#ffffff" },
    { role: "text", value: "#202020" },
  ],
  tokensAt: [560, 340],
  // the Install button on the first card
  pixel: [444, 531],
};
