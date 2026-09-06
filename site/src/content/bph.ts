import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall, the same way `dms.ts` does: a chapter
 * carries its heading and its frame, and nothing else. Every maxim,
 * standfirst and paragraph the wall wants is typeset inside the frame, so
 * repeating it here would print the same sentence twice.
 *
 * One deliberate divergence from the canvas: the frames there are numbered
 * 2–14 with gaps, because three sections were cut late (a second design
 * concept, the admin-card detail, and the metadata user story). The
 * chapters below run 01–09 instead — a visitor never sees the canvas, and
 * a jump bar that skips 08 and 12 reads as missing chapters rather than as
 * fidelity. The closing frame is a `pull`, not an export: it is one
 * sentence, and set in the site's own type it stays selectable.
 */
export const bph: CaseStudy = {
  slug: "applus-best-practice-hub",
  title: "APplus Best Practice Hub",
  what: "A library of process templates, moved out of a modal and onto cards",
  lead:
    "Over 50 field-tested Flowboard templates that customers install into a running ERP. The old Hub was a table in a modal dialog with a version dropdown on every row: nothing searchable, nothing filterable, and status as an unlabelled dot. I rebuilt it as a catalogue you can narrow, judge and install without leaving the screen.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Best Practice", "Hub"],
    subline: "for APplus ERP",
    stamp: "TEMPLATE LIBRARY · SEARCH · FILTER · VERSIONING · INSTALL",
    credit: "Lead designer · Asseco Solutions · 2024–2025",
    shot: { src: "/work/applus-best-practice-hub/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Best Practice Hub" },
    {
      label: "Design system",
      value: "FOX v2.3, then v3.0 — which I developed with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "2 developers, an architect, a requirements engineer, a PM and one designer",
    },
    { label: "Period", value: "August 2024 – August 2025, thirteen months" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch01.webp" },
      ],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch02.webp" },
      ],
    },
    {
      id: "numbers",
      n: "03",
      heading: "By the numbers",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch03.webp" },
      ],
    },
    {
      id: "audit",
      n: "04",
      heading: "Audit & research",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch04.webp" },
      ],
    },
    {
      id: "exploration",
      n: "05",
      heading: "Exploration",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch05.webp" },
      ],
    },
    {
      id: "concept",
      n: "06",
      heading: "Design concept",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch06.webp" },
      ],
    },
    {
      id: "search-filter",
      n: "07",
      heading: "Use case: Search & filter",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch07.webp" },
      ],
    },
    {
      id: "install",
      n: "08",
      heading: "Use case: Install & import",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch08.webp" },
      ],
    },
    {
      id: "design-system",
      n: "09",
      heading: "Design system",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-best-practice-hub/wall/ch09.webp" },
        {
          kind: "pull",
          text:
            "A modal with a table asked the user to read. A grid of cards asks them to choose.",
        },
      ],
    },
  ],
};
