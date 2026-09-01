import type { CaseStudy } from "./types";

export const deloitte: CaseStudy = {
  slug: "deloitte-career",
  title: "Deloitte career site",
  what: "The global career site for Deloitte Poland, designed from zero",
  lead:
    "kariera.deloitte.pl — the career site for a global corporation, designed from zero. A recruitment surface has one job that most marketing sites do not: it has to tell the wrong candidate that they are the wrong candidate, without insulting them.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · RECRUITMENT AT SCALE",
    headline: ["A career site", "for a global"],
    subline: "corporation",
    stamp: "DESIGNED FROM ZERO · RECRUITMENT · EMPLOYER BRAND",
    credit: "Deloitte Poland · 2017–2021",
    shot: { src: "/work/deloitte-career/01.png" },
  },
  meta: [
    { label: "Role", value: "Designer — owned the site end to end" },
    { label: "Company", value: "Deloitte Poland, Warsaw" },
    { label: "Product", value: "kariera.deloitte.pl" },
    { label: "Audience", value: "Candidates, across every practice and seniority" },
    { label: "Also at Deloitte", value: "Employee health and wellbeing platform, web and mobile — HR Dream Team award" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "A career site is a filter that has to feel like an invitation.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the site had to do, for how many practices, and who else had a stake in it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/deloitte-career/02.png" },
      ],
    },
    {
      id: "handoff",
      n: "02",
      heading: "What it changed",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what shipped, and one thing I would do differently.</p>",
        },
      ],
    },
  ],
};
