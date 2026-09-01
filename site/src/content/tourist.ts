import type { CaseStudy } from "./types";

export const tourist: CaseStudy = {
  slug: "tourist-app",
  title: "Tourist app for a Polish town",
  what: "A mobile guide for a town, with two other designers",
  lead:
    "A tourist mobile application for a town in Poland, designed with two other designers. A civic product: the client is the town, the users are visitors who will open it once, and the content is maintained by people who are not designers.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · CIVIC AND CULTURAL",
    headline: ["A town", "in your pocket"],
    subline: "a tourist app for a Polish town",
    stamp: "MOBILE · CIVIC · CONTENT MAINTAINED BY NON-DESIGNERS",
    credit: "One of three designers · 2021",
    shot: { src: "/work/tourist-app/01.png" },
  },
  meta: [
    { label: "Role", value: "One of three designers" },
    { label: "Client", value: "A town in Poland" },
    { label: "Platform", value: "Mobile" },
    { label: "Constraint", value: "Content maintained by the town, not by a design team" },
    { label: "Team", value: "3 designers" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "A visitor opens a town's app once, outdoors, on a bad connection, and never again.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the town, the visitor, and the one thing the app had to do on a first open.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/tourist-app/02.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/03.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/04.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/05.png" },
      ],
    },
    {
      id: "design",
      n: "02",
      heading: "The design",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the decisions, and how the work was split between three designers.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/tourist-app/06.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/07.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/08.png" },
        { kind: "shot", width: "wall", src: "/work/tourist-app/09.png" },
      ],
    },
    {
      id: "handoff",
      n: "03",
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
