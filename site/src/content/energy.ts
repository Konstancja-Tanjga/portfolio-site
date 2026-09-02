import type { CaseStudy } from "./types";

export const energy: CaseStudy = {
  slug: "xecta-website",
  title: "Energy & Fuel Ind. website",
  what: "The corporate site for an upstream oil and gas platform",
  lead:
    "xecta.com — the corporate website for the production surveillance platform. Same client as the product, opposite problem: the product is read by a handful of people who use it daily, the website by hundreds who will never log in.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Energy & Fuel", "Ind."],
    subline: "the corporate site — xecta.com",
    stamp: "CORPORATE SITE · DATA VISUALISATION · INDUSTRIAL ENERGY",
    credit: "Senior UX & UI designer · Xecta · 2022",
    shot: { src: "/work/energy-fuel/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Senior UX & UI designer, freelance" },
    { label: "Client", value: "Xecta — xecta.com" },
    { label: "Sector", value: "Upstream oil and gas" },
    { label: "Tools", value: "Figma, Adobe Photoshop, Adobe Illustrator" },
    { label: "Period", value: "2022" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "A site that has to make a data-dense product legible to someone who will never open it.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/energy-fuel/01.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/02.png" },
      ],
    },
    {
      id: "design",
      n: "02",
      heading: "The design",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/energy-fuel/03.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/04.png" },
        { kind: "shot", width: "wall", src: "/work/energy-fuel/05.png" },
      ],
    },
  ],
};
