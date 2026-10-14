import type { ExplodedScreen } from "../system/Exploded";

/**
 * The screen the home page takes apart: the APplus Analytics dashboard,
 * FOX v3, in the MacBook export the hero already shows.
 *
 * Rects are measured on the 1600 px export and drawn from the 4032 px
 * one, so the crops stay sharp at full width. When the Figma layers
 * arrive, a part takes its own `src` and stops being a crop.
 *
 * The colours were sampled from the export (button, chart bar, card,
 * page, card title), so they are what the screen shows, named by role.
 */
export const analyticsExploded: ExplodedScreen = {
  name: "APplus Analytics",
  src: "/work/applus-analytics/device/dashboards-full.webp",
  size: [1600, 1008],
  screen: [189, 49, 1225, 793],
  parts: [
    { name: "rail", rect: [189, 49, 50, 793], rail: true },
    { name: "tabs", rect: [270, 162, 530, 32] },
    { name: "actions", rect: [1280, 72, 104, 32] },
    { name: "fox-card", rect: [275, 247, 265, 231] },
    { name: "fox-card", rect: [555, 247, 265, 231] },
    { name: "fox-card", rect: [835, 247, 265, 231] },
    { name: "fox-card", rect: [275, 553, 265, 231] },
    { name: "fox-card", rect: [555, 553, 265, 231] },
    { name: "fox-card", rect: [835, 553, 265, 231] },
  ],
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
  pixel: [627, 287],
};
