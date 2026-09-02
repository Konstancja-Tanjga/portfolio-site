import type { CaseStudy } from "./types";

/** Images from the Behance gallery, in gallery order. */
export const flow: CaseStudy = {
  slug: "applus-flow",
  title: "APplus Flow mode",
  what: "A logistics module redesigned around status and ownership, desktop to mobile",
  lead:
    "Flow mode is the logistics module inside APplus ERP. Shipments had been managed across several disconnected screens, so nobody could see one trusted status view. I owned the concept end to end — first workflow sketches through to a shipped native release on desktop, tablet and mobile.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Flow mode"],
    subline: "logistics for APplus ERP",
    stamp: "DESKTOP · TABLET · MOBILE · SHIPPED NATIVE",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-flow/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — owned the concept end to end" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Flow mode, logistics" },
    { label: "Platforms", value: "Desktop, tablet, mobile — shipped native" },
    { label: "Deployed", value: "Across the APplus enterprise client base" },
    { label: "Recognition", value: "Contributed to ERP System of the Year 2025, UX category" },
  ],
  chapters: [
    {
      id: "challenge",
      n: "01",
      heading: "The challenge",
      maxim:
        "Several people, sometimes in different companies and different time zones, working on the same object. Status, ownership and the next action have to be obvious.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Shipments were managed across multiple disconnected screens, which meant there was no single trusted status view — and no way to tell, at a glance, whose move it was next.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-flow/01.png" },
        { kind: "shot", width: "wall", src: "/work/applus-flow/02.png" },
      ],
    },
    {
      id: "discovery",
      n: "02",
      heading: "Discovery and research",
      maxim:
        "People think in terms of where a ticket sits right now and who owns it next — not in terms of which module happens to hold that data.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Observing internal operations staff at work. The module boundary was an implementation fact that had leaked into the interface, and the redesign started by refusing it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-flow/03.png" },
      ],
    },
    {
      id: "desktop",
      n: "03",
      heading: "Desktop",
      standfirst:
        "A ticketing board grouped by status, an integrated details panel, and an explicit tenant switcher for multi-organisation contexts.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-flow/07.png" },
      ],
    },
    {
      id: "tablet",
      n: "04",
      heading: "Tablet",
      standfirst:
        "The same board structure at adapted density: larger touch targets, sliding panels, usable held or propped.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-flow/06.png" },
      ],
    },
    {
      id: "mobile",
      n: "05",
      heading: "Mobile",
      standfirst:
        "An inbox that surfaces priority items, with inline editing of location, owner, floor, weight and timing.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The goods-receipt scan went from five or six clicks to one, and three workarounds users had invented for themselves became unnecessary.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-flow/04.png" },
        { kind: "shot", width: "wall", src: "/work/applus-flow/05.png" },
        {
          kind: "stats",
          items: [
            { value: "6 → 1", label: "clicks for the goods-receipt scan" },
            { value: "3", label: "user-invented workarounds retired" },
            { value: "3", label: "platforms, one model" },
          ],
        },
      ],
    },
    {
      id: "handoff",
      n: "06",
      heading: "What it changed",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The module replaced fragmented processes with workflows that match how logistics teams actually think about a shipment. It is deployed across the APplus enterprise client base and contributed to ERP System of the Year 2025 in the UX category.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>Built in Figma and Figma Make, with design-to-code handoff through Codex and Claude Code.</p>",
        },
      ],
    },
  ],
};
