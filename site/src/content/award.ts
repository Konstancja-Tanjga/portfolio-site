import type { CaseStudy } from "./types";

export const award: CaseStudy = {
  slug: "erp-of-the-year",
  title: "ERP System of the Year, 2025 and 2026",
  what: "APplus, Gold in the User Experience category two years running",
  lead:
    "APplus won Gold in the User Experience category at ERP-System des Jahres in 2025 and again in 2026, awarded by the Center for Enterprise Research (University of Potsdam) and GITO Events. The second year covers the work on this site: Analytics, Documents, Elly and the Best Practice Hub.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · ERP-SYSTEM DES JAHRES 2025 · 2026",
    headline: ["ERP System", "of the Year"],
    subline: "2025 and 2026 — User Experience category, Gold both years",
    stamp: "APPLUS · ASSECO SOLUTIONS · UX CATEGORY",
    credit: "Lead Designer · Asseco Solutions · 2025, 2026",
    shot: { src: "/work/erp-of-the-year/01.jpg" },
  },
  meta: [
    { label: "Award", value: "ERP-System des Jahres 2025 and 2026" },
    { label: "Category", value: "User Experience ERP, Gold both years" },
    { label: "Awarded", value: "Frankfurt am Main, 13 October 2025 and 5 October 2026" },
    { label: "Product", value: "APplus ERP" },
    { label: "Company", value: "Asseco Solutions AG" },
    { label: "My role", value: "Lead Designer, leading a team of two" },
  ],
  chapters: [
    {
      id: "award",
      n: "01",
      heading: "2025",
      standfirst:
        "The first Gold. The jury of the Center for Enterprise Research at the University of Potsdam named APplus ERP System of the Year in the User Experience ERP category, citing the Flow mode operating concept and an interface that is ergonomic, visual and learnable without long training.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/erp-of-the-year/01.jpg",
          caption: "The trophy and the certificate: ERP-System des Jahres 2025, Gold in the User Experience ERP category, Asseco Solutions AG.",
        },
      ],
    },
    {
      id: "award-2026",
      n: "02",
      heading: "2026",
      maxim: "A second Gold is harder than a first: the jury has already seen the product once.",
      standfirst:
        "At the 21st ERP-System des Jahres, awarded on 5 October 2026 at the IT-Unternehmertag in Frankfurt am Main, APplus took Gold in the User Experience category again. The jury's stated test this year was concrete benefit, differentiation and practical relevance, not presentation. Between the two ceremonies the platform gained the applications on this site: Analytics, Documents, Elly and the Best Practice Hub, all on the FOX design system.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          slot: "photograph of the 2026 trophy — public/work/erp-of-the-year/02.jpg",
          caption: "ERP-System des Jahres 2026, Gold in the User Experience category, Asseco Solutions AG.",
        },
        {
          kind: "spec",
          caption: "The competition, as the organisers describe it.",
          rows: [
            { key: "Organisers", value: "GITO Verlag with the Chair of Business Informatics and the Center for Enterprise Research, University of Potsdam; ERP Management; SIBB; IT-Unternehmertag" },
            { key: "Edition", value: "21st, 2026. Awards are given per category in Gold, Silver and Bronze; there is no overall winner" },
            { key: "Ceremony", value: "5 October 2026, IT-Unternehmertag, Frankfurt am Main" },
            { key: "Category", value: "User Experience — Gold: Asseco Solutions AG, APplus" },
          ],
        },
      ],
    },
  ],
};
