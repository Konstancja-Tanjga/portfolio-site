import type { CaseStudy } from "./types";

export const award: CaseStudy = {
  slug: "erp-of-the-year",
  title: "ERP System of the Year 2025",
  what: "APplus, Gold in the User Experience ERP category",
  lead:
    "APplus won Gold at ERP-System des Jahres 2025, in the User Experience ERP category, awarded by the Center for Enterprise Research (University of Potsdam) and GITO Events.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · ERP-SYSTEM DES JAHRES 2025",
    headline: ["ERP System", "of the Year"],
    subline: "2025 — User Experience category",
    stamp: "APPLUS · ASSECO SOLUTIONS · UX CATEGORY",
    credit: "Lead Designer / UX Engineer (title in 2025) · Asseco Solutions · 2025",
    shot: { src: "/work/erp-of-the-year/01.jpg" },
  },
  meta: [
    { label: "Award", value: "ERP-System des Jahres 2025" },
    { label: "Category", value: "User Experience ERP, Gold" },
    { label: "Product", value: "APplus ERP" },
    { label: "Company", value: "Asseco Solutions AG" },
    { label: "My role", value: "Lead Designer / UX Engineer (title in 2025)" },
  ],
  chapters: [
    {
      id: "award",
      n: "01",
      heading: "The award",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/erp-of-the-year/01.jpg",
          caption: "The trophy and the certificate: ERP-System des Jahres 2025, Gold in the User Experience ERP category, Asseco Solutions AG.",
        },
      ],
    },
  ],
};
