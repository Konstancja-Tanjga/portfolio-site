import type { CaseStudy } from "./types";

export const award: CaseStudy = {
  slug: "erp-of-the-year",
  title: "ERP System of the Year 2025",
  what: "APplus, winner in the User Experience category",
  lead:
    "APplus won ERP-System des Jahres 2025 in the User Experience category. The award covers the work on this site: the Flow mode redesign, Elly, and the design system the platform runs on.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · ERP-SYSTEM DES JAHRES 2025",
    headline: ["ERP System", "of the Year"],
    subline: "2025 — User Experience category",
    stamp: "APPLUS · ASSECO SOLUTIONS · UX CATEGORY",
    credit: "Lead Designer / UX Engineer · Asseco Solutions · 2025",
    shot: { src: "/work/erp-of-the-year/01.jpg" },
  },
  meta: [
    { label: "Award", value: "ERP-System des Jahres 2025" },
    { label: "Category", value: "User Experience" },
    { label: "Product", value: "APplus ERP" },
    { label: "Company", value: "Asseco Solutions DACH" },
    { label: "My role", value: "Lead Designer / UX Engineer" },
  ],
  chapters: [
    {
      id: "award",
      n: "01",
      heading: "The award",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/erp-of-the-year/01.jpg" },
      ],
    },
  ],
};
