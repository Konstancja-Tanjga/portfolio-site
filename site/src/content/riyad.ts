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
    shot: { src: "/work/riyad-bank/00-cover.png" },
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
        {
          kind: "passage",
          html: "<p>TODO — what the product teaches, to whom, and why a bank was the one to build it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/27.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/01.png" },
        { kind: "shot", width: "wall", src: "/work/riyad-bank/03.png" },
        {
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/riyad-bank/02.png" },
            { src: "/work/riyad-bank/04.png" },
          ],
        },
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
        {
          kind: "set",
          size: "phone",
          caption: "The 3D navigation, screen by screen.",
          items: [
            { src: "/work/riyad-bank/05.png" },
            { src: "/work/riyad-bank/06.png" },
            { src: "/work/riyad-bank/07.png" },
            { src: "/work/riyad-bank/08.png" },
            { src: "/work/riyad-bank/09.png" },
          ],
        },
        {
          kind: "set",
          size: "phone",
          items: [
            { src: "/work/riyad-bank/10.png" },
            { src: "/work/riyad-bank/11.png" },
            { src: "/work/riyad-bank/12.png" },
            { src: "/work/riyad-bank/13.png" },
            { src: "/work/riyad-bank/14.png" },
          ],
        },
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
        {
          kind: "set",
          size: "square",
          caption: "The illustration system — one rule set, any topic.",
          items: [
            { src: "/work/riyad-bank/15.png" },
            { src: "/work/riyad-bank/16.png" },
            { src: "/work/riyad-bank/17.png" },
            { src: "/work/riyad-bank/18.png" },
            { src: "/work/riyad-bank/19.png" },
            { src: "/work/riyad-bank/20.png" },
            { src: "/work/riyad-bank/21.png" },
            { src: "/work/riyad-bank/22.png" },
          ],
        },
      ],
    },
    {
      id: "shipped",
      n: "05",
      heading: "Shipped",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what shipping to both stores changed, and one thing I would do differently.</p>",
        },
        {
          kind: "set",
          size: "wide",
          caption: "As shipped, App Store and Google Play.",
          items: [
            { src: "/work/riyad-bank/23.png" },
            { src: "/work/riyad-bank/24.png" },
            { src: "/work/riyad-bank/25.png" },
            { src: "/work/riyad-bank/26.png" },
          ],
        },
      ],
    },
  ],
};
