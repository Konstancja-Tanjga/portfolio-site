import type { ExplodedScreen } from "../system/Exploded";

/**
 * The screen the home page takes apart: the APplus Analytics dashboard,
 * FOX v3, the same screen the hero shows at 2400 px.
 *
 * Rects are measured from the screen's corner on the 1600 px export and
 * drawn from the 4032 px one, so the crops stay sharp at full width.
 * When the Figma layers arrive, a part takes its own `src`.
 *
 * The colours were sampled from single points in the export (button,
 * chart bar, card, page, card title), so they are close to what the
 * screen shows, named by role, not the FOX token values.
 */
export const analyticsExploded: ExplodedScreen = {
  name: "APplus Analytics",
  system: "FOX",
  src: "/work/applus-analytics/device/dashboards-full.webp",
  size: [1600, 1008],
  screen: [189, 49, 1225, 793],
  parts: [
    { name: "rail", rect: [0, 0, 50, 793], rail: true },
    { name: "tabs", rect: [81, 113, 530, 32] },
    { name: "actions", rect: [1091, 23, 104, 32] },
    { name: "fox-card", rect: [86, 198, 265, 231] },
    { name: "fox-card", rect: [366, 198, 265, 231] },
    { name: "fox-card", rect: [646, 198, 265, 231] },
    { name: "fox-card", rect: [86, 504, 265, 231] },
    { name: "fox-card", rect: [366, 504, 265, 231] },
    { name: "fox-card", rect: [646, 504, 265, 231] },
  ],
  grid: [86, 0, 1120, 793],
  layoutNote: "rail, header, 12 columns",
  layout: [
    [0, 0, 50, 793],
    [50, 0, 1175, 150],
    [86, 198, 825, 232],
    [86, 504, 825, 232],
  ],
  colours: [
    { role: "action", value: "#266ace" },
    { role: "chart", value: "#5f8ed7" },
    { role: "surface", value: "#fbf8f9" },
    { role: "canvas", value: "#eff1f5" },
    { role: "text", value: "#41424a" },
  ],
  spacing: [4, 8, 12, 16, 24, 32],
  tokensAt: [330, 238],
  pixel: [627, 287],
};
