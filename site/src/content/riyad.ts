import type { CaseStudy } from "./types";

export const riyad: CaseStudy = {
  slug: "riyad-bank",
  title: "Riyad Bank",
  what: "A financial-education product, shipped to both stores — with a 3D navigation and an illustration system",
  lead:
    "A mobile financial-education product covering banking and finance in text, video and podcast. C-level interviews, SME sessions and A/B testing before build; I designed the interactive 3D navigation and the illustration system.",
  status: { state: "live" },
  cover: {
    kicker: "PRODUCT DESIGN · BANKING AND PAYMENTS",
    headline: ["Financial", "education"],
    subline: "for Riyad Bank, Saudi Arabia",
    stamp: "3D NAVIGATION · ILLUSTRATION SYSTEM · SHIPPED TO BOTH STORES",
    credit: "Freelance, via Intellias · Big Hat · 2018–2020",
    shot: { slot: "Cover hero — export 2400px wide, product bleeding off the right edge." },
  },
  meta: [
    { label: "Role", value: "UX/UI designer — Big Hat, via Intellias" },
    { label: "Client", value: "Riyad Bank, Saudi Arabia" },
    { label: "Shipped", value: "App Store and Google Play" },
    { label: "Research", value: "C-level interviews, SME sessions, A/B testing" },
    { label: "Owned", value: "Interactive 3D navigation, illustration system" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the Riyad Bank product is, in three sentences, and what I owned on it.</p>",
        },
        { kind: "shot", width: "wall", slot: "The 3D navigation. 2400px." },
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
        { kind: "shot", width: "wall", slot: "The illustration system. 2400px." },
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
