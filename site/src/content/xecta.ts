import type { CaseStudy } from "./types";

export const xecta: CaseStudy = {
  slug: "xecta",
  title: "Xecta",
  what: "Production surveillance for upstream oil and gas — safety-critical, data-dense",
  lead:
    "One of three designers on a production surveillance and optimisation platform: heavy visualisation for non-technical operators, where a misread chart has physical consequences. I owned my streams end to end and documented them in Confluence for a distributed US team.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Production", "surveillance"],
    subline: "and optimisation, for upstream oil and gas",
    stamp: "SAFETY-CRITICAL · DATA-DENSE · HEAVY VISUALISATION",
    credit: "Senior UX & UI designer · Xecta · 2020–2021",
    shot: { src: "/work/xecta/01.png" },
  },
  meta: [
    { label: "Role", value: "Senior UX & UI designer, freelance — owned my streams end to end" },
    { label: "Company", value: "Xecta, Texas, USA, remote" },
    { label: "Team", value: "3 designers, a distributed US team" },
    { label: "Documentation", value: "Confluence" },
    { label: "Also", value: "The corporate website, xecta.com" },
    { label: "Period", value: "April 2020 – July 2021" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "The operators are not analysts. A chart they misread is not a usability problem, it is a safety one.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the platform monitors, who reads it, and what happens when they read it wrong.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/xecta/02.png" },
        { kind: "shot", width: "wall", src: "/work/xecta/03.png" },
      ],
    },
    {
      id: "visualisation",
      n: "02",
      heading: "Visualisation for non-analysts",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the visualisation decisions, and what each one refused to do.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/xecta/04.png" },
        { kind: "shot", width: "wall", src: "/work/xecta/05.png" },
        { kind: "shot", width: "wall", src: "/work/xecta/06.png" },
      ],
    },
    {
      id: "website",
      n: "03",
      heading: "The corporate website",
      standfirst:
        "Same client, opposite problem: the product had to be read by six people who use it daily, the website by hundreds who will never log in.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the brief for xecta.com, and what it had to do that the product did not.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/01.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/02.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/03.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/04.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/05.png" },
      ],
    },
    {
      id: "handoff",
      n: "04",
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
