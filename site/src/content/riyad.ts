import type { CaseStudy } from "./types";

export const riyad: CaseStudy = {
  slug: "riyad-bank",
  title: "Riyad Bank — Digital Insights",
  what: "A financial-education product designed from scratch, shipped to both stores",
  lead:
    "A mobile financial-education product for Riyad Bank, Saudi Arabia, covering banking and finance topics in text, video and podcast. C-level interviews, SME sessions and A/B testing before build. I designed the interactive 3D navigation, and it shipped to the App Store and Google Play.",
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
    { label: "Owned", value: "Interactive 3D navigation" },
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
        { kind: "shot", width: "wall", src: "/work/riyad-bank/03.png" },
        {
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/riyad-bank/04.png" },
          ],
        },
      ],
    },
    {
      id: "navigation",
      n: "02",
      heading: "The 3D navigation",
      maxim:
        "An interactive metaphor is a promise. If it does not make finding things faster, it is decoration you pay to maintain.",
      blocks: [
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
      id: "shipped",
      n: "03",
      heading: "Shipped",
      blocks: [
        {
          kind: "set",
          size: "wide",
          caption: "As shipped, App Store and Google Play.",
          items: [
            { src: "/work/riyad-bank/23.png" },
            { src: "/work/riyad-bank/26.png" },
          ],
        },
      ],
    },
  ],
};
