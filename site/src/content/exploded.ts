import type { ExplodedScreen, Rect } from "../system/Exploded";

/**
 * Screens taken apart in the case studies' "Design system" chapters.
 *
 * Each is one Figma frame exported at 2x and served as WebP; the frame is
 * the screen, so `screen` starts at 0, 0. Every part and outline rect is
 * that layer's position and size in the frame, read from the Figma file,
 * except the Hub card heights, measured on the export. The part names are
 * the layer names; on the Hub they match the three components its case
 * study names, plus `filters`; on Baldo they are the names of the
 * components the layers are instances of. Colours were sampled from single
 * points on real elements of the frame, named by the role they play there.
 *
 * No `spacing`: neither FOX's nor the Volvo Design System's spacing steps
 * are on record here, and the scale the home page shows is the site's own
 * (Big Hat).
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

/**
 * Volvo Group ERP: Partner Details, from Figma node 4:362716 in the file
 * "Partner" ("Partner information form_default"). The signed-in user's name
 * and ID in the header are blurred in the export (the frame's 2x export,
 * blurred like the mockups, then converted to WebP). Part names are the names
 * of the components the layers are instances of.
 */
export const baldoExploded: ExplodedScreen = {
  name: "Baldo",
  // from the owner's CV: the ERP's design system was built on the corporate Volvo Design System
  system: "Volvo Design System",
  src: "/work/volvo-erp/exploded/partner-details.webp",
  size: [1920, 1588],
  screen: [0, 0, 1920, 1588],
  parts: [
    { name: "Side menu", rect: [0, 0, 332, 1521], rail: true },
    { name: "Header", rect: [300, 0, 1588, 56] },
    { name: "Partner details top menu", rect: [390, 116, 1506, 56] },
    ...[331, 425, 470, 515, 606, 655, 702].map((y) => ({ name: "Text field", rect: [580, y, 288, 32] as Rect })),
    { name: "Dropdown", rect: [580, 560, 288, 32] },
    { name: "Business Areas", rect: [984, 233, 633, 527] },
    { name: "GDPR information comment", rect: [1614, 699, 269, 269] },
    { name: "Tabs", rect: [366, 1045, 1506, 48] },
    { name: "Footer", rect: [0, 1524, 1920, 64] },
  ],
  grid: [366, 116, 1520, 1408],
  layoutNote: "side menu, header, top menu, partner information, tabs",
  layout: [
    [0, 0, 332, 1521],
    [300, 0, 1588, 56],
    [390, 116, 1506, 56],
    [366, 232, 1520, 768],
    [366, 1045, 1506, 419],
    [0, 1524, 1920, 64],
  ],
  colours: [
    { role: "action", value: "#141414" },
    { role: "active tab", value: "#1f78d1" },
    { role: "table head", value: "#323232" },
    { role: "status", value: "#66b3a6" },
    { role: "surface", value: "#ffffff" },
  ],
  tokensAt: [560, 1150],
  // the checked Subscription Pay checkbox
  pixel: [1058, 879],
};
