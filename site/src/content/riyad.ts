import type { CaseStudy } from "./types";

export const riyad: CaseStudy = {
  slug: "riyad-bank",
  title: "Riyad Bank — Digital Insights",
  what: "A financial-education product designed from scratch, shipped to both stores",
  lead:
    "A mobile financial-education product for Riyad Bank, Saudi Arabia, covering banking and finance topics in text, video and podcast. C-level interviews, SME sessions and A/B testing before build. I designed the interactive 3D navigation and the illustration system, and it shipped to the App Store and Google Play.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · BANKING AND PAYMENTS",
    headline: ["The future", "of finance"],
    subline: "Digital Insights, for Riyad Bank",
    stamp: "DESIGNED FROM SCRATCH · 3D NAVIGATION · ILLUSTRATION SYSTEM · SHIPPED",
    credit: "UX/UI designer · Big Hat, via Intellias · Riyad Bank, Saudi Arabia",
    shot: { src: "/work/riyad-bank/27.png" },
  },
  meta: [
    { label: "Role", value: "UX/UI designer — Big Hat, my own company, via Intellias" },
    { label: "Client", value: "Riyad Bank, Saudi Arabia" },
    { label: "Shipped", value: "App Store and Google Play" },
    { label: "Research", value: "C-level interviews, SME sessions, A/B testing before build" },
    { label: "Owned", value: "Interactive 3D navigation, illustration system" },
    { label: "Content", value: "Text, video and podcast" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "A bank teaching people about money has a credibility problem before it has a design problem.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/riyad-bank/01.png" },
        {
          kind: "passage",
          html: "<p>TODO — what the product teaches, to whom, and why a bank was the one to build it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/02.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/03.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/04.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/05.png" },
      ],
    },
    {
      id: "research",
      n: "02",
      heading: "Before a single screen",
      standfirst:
        "C-level interviews, subject-matter sessions and A/B testing all ran before the build, not after it.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what the C-level interviews and SME sessions settled, and what A/B testing settled after them.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/06.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/07.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/08.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/09.png" },
      ],
    },
    {
      id: "navigation",
      n: "03",
      heading: "The 3D navigation",
      maxim:
        "An interactive metaphor is a promise. If it does not make finding things faster, it is decoration you pay to maintain.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — why 3D rather than a list, and what it had to earn to justify the cost.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/10.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/11.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/12.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/13.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/14.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/15.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/16.png" },
      ],
    },
    {
      id: "illustration",
      n: "04",
      heading: "The illustration system",
      standfirst:
        "Not a set of illustrations — a system, so a topic added next year still looks like it belongs.",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the rules: what the system can and cannot draw, and how a new topic gets an image without a designer.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/17.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/18.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/19.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/20.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/21.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/22.png" },
      ],
    },
    {
      id: "shipped",
      n: "05",
      heading: "Shipped",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/riyad-bank/23.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/24.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/25.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/26.png" },
        {
          kind: "passage",
          html: "<p>TODO — what shipping to both stores changed, and one thing I would do differently.</p>",
        },
      ],
    },
  ],
};
