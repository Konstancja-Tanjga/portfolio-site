import type { CaseStudy } from "./types";

export const xecta: CaseStudy = {
  slug: "xecta",
  title: "Xecta",
  what: "Production surveillance for upstream oil and gas — safety-critical and data-dense",
  lead:
    "One of three designers on a production surveillance platform: heavy visualisation for non-technical operators, where a misread chart has physical consequences.",
  status: { state: "live" },
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Production", "surveillance"],
    subline: "for upstream oil and gas",
    stamp: "SAFETY-CRITICAL · DATA-DENSE · HEAVY VISUALISATION",
    credit: "Senior UX & UI designer · Xecta · 2021–2022",
    shot: { slot: "Cover hero — export 2400px wide, product bleeding off the right edge." },
  },
  meta: [
    { label: "Role", value: "Senior UX & UI designer, freelance — owned my streams end to end" },
    { label: "Company", value: "Xecta, Texas, remote" },
    { label: "Team", value: "3 designers, distributed US team" },
    { label: "Documentation", value: "Confluence" },
    { label: "Period", value: "April 2021 – July 2022" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the Xecta platform is, in three sentences, and what I owned on it.</p>",
        },
        { kind: "shot", width: "wall", slot: "The surveillance board. 2400px." },
      ],
    },
    {
      id: "hard-brief",
      n: "02",
      heading: "Why it was a hard brief",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the constraint that made this hard. One paragraph, one concrete example.</p>",
        },
      ],
    },
    {
      id: "who-for",
      n: "03",
      heading: "Who it was for",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the roles, and the one place their needs conflicted.</p>",
        },
      ],
    },
    {
      id: "discovery",
      n: "04",
      heading: "Discovery and research",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — who was asked, what was asked, and the finding that changed the product rather than confirming it.</p>",
        },
      ],
    },
    {
      id: "design-system",
      n: "05",
      heading: "Design system",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the system this ran on: what existed, what I added, and how a change shipped.</p>",
        },
      ],
    },
    {
      id: "use-cases",
      n: "06",
      heading: "Use cases",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — one use case on the UC template — actor, trigger, precondition, flow, two exits, the rule it sets.</p>",
        },
        { kind: "shot", width: "wall", slot: "An operator reading a well under alarm. 2400px." },
      ],
    },
    {
      id: "handoff",
      n: "07",
      heading: "Handoff",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what development received, the numbers, and one thing I would do differently.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "TODO", label: "TODO" },
            { value: "TODO", label: "TODO" },
          ],
        },
      ],
    },
  ],
};
