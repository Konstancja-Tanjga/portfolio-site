import type { CaseStudy } from "./types";

export const pzu: CaseStudy = {
  slug: "mojepzu",
  title: "MojePZU",
  what: "Insurance and healthcare at consumer scale, under regulatory constraint",
  lead:
    "Web and mobile: insurance policies and healthcare services for a national insurer. I owned the information architecture, simplified account setup off the back of user interviews, and defined the interaction and motion models.",
  status: { state: "live" },
  cover: {
    kicker: "PRODUCT DESIGN · INSURANCE AND HEALTHCARE",
    headline: ["MojePZU"],
    subline: "insurance and healthcare, web and mobile",
    stamp: "INFORMATION ARCHITECTURE · ACCOUNT SETUP · MOTION",
    credit: "UI designer · PZU · 2019",
    shot: { slot: "Cover hero — export 2400px wide, product bleeding off the right edge." },
  },
  meta: [
    { label: "Role", value: "UI designer, freelance" },
    { label: "Company", value: "PZU, Warsaw" },
    { label: "Platforms", value: "Web and mobile" },
    { label: "Constraint", value: "Regulated — insurance and health data" },
    { label: "Period", value: "January – December 2019" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what MojePZU is, in three sentences, and what I owned on it.</p>",
        },
        { kind: "shot", width: "wall", slot: "The account, web and mobile. 2400px." },
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
        { kind: "shot", width: "wall", slot: "Account setup, before and after. 2400px." },
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
