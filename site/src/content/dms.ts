import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — twelve frames, in its numbering,
 * so the file and the canvas stay walkable side by side.
 *
 * Chapters carry a heading and their frame, and nothing else. Every
 * maxim, standfirst and paragraph this wall wants is typeset inside the
 * frame itself; repeating it here printed the same sentence twice.
 */
export const dms: CaseStudy = {
  slug: "applus-documents",
  title: "APplus Documents",
  what: "Document management for the same platform, designed from zero",
  lead:
    "Versioning, metadata, search, permissions and retention over documents that lived in network drives and mail threads — under German commercial retention law, where a deleted document is not gone.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Document", "Management"],
    subline: "for APplus ERP",
    stamp: "VERSIONING · METADATA · SEARCH · PERMISSIONS · RETENTION",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-documents/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Documents" },
    {
      label: "Design system",
      value: "FOX v2.3, co-authored with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    {
      label: "Team",
      value: "3 developers, a requirements engineer, a researcher, QA, a PM and one designer",
    },
    { label: "Period", value: "October 2025 – August 2026, eleven months" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "12",
      heading: "What it is",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch12.png" }],
    },
    {
      id: "who-for",
      n: "13",
      heading: "Who it is for",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch13.png" }],
    },
    {
      id: "hard-brief",
      n: "14",
      heading: "Why it is a hard design brief",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch14.png" }],
    },
    {
      id: "discovery",
      n: "15",
      heading: "Discovery and research",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch15.png" }],
    },
    {
      id: "competition",
      n: "16",
      heading: "Competition analysis",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch16.png" }],
    },
    {
      id: "specification",
      n: "17",
      heading: "Specification",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch17.png" }],
    },
    {
      id: "inspiration",
      n: "18",
      heading: "Inspiration and ideas",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18.png" }],
    },
    {
      id: "prototypes",
      n: "18a",
      heading: "Prototypes",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18a.png" }],
    },
    {
      id: "sign-off",
      n: "19",
      heading: "Design and sign-off",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch19.png" }],
    },
    {
      id: "documentation",
      n: "20",
      heading: "Documentation",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch20.png" }],
    },
    {
      id: "design-system",
      n: "21",
      heading: "Design system",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch21.png" }],
    },
    {
      id: "handoff",
      n: "22",
      heading: "Handoff",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch22.png" }],
    },
  ],
};
