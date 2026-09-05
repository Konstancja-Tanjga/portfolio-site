import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — twelve frames, in its numbering,
 * so the file and the canvas stay walkable side by side.
 *
 * Chapters carry a heading and their frame, and nothing else. Every
 * maxim, standfirst and paragraph this wall wants is typeset inside the
 * frame itself; repeating it here printed the same sentence twice.
 */
export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. No analytics surface existed before — the numbers lived in module lists and Excel exports.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Business", "Intelligence"],
    subline: "for APplus ERP",
    stamp: "DASHBOARDS · QUERIES · DATA MODELS · AI ANALYST",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { src: "/work/applus-analytics/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Analytics" },
    {
      label: "Design system",
      value: "FOX v2.3 → v3.0, co-authored with one other designer",
      href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs",
    },
    { label: "Team", value: "Seven: three developers, a requirements engineer, QA, a PM and one designer" },
    { label: "Period", value: "January – September 2026" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01.png" }],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why it is a hard design brief",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01a.png" }],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch02.png" }],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch03.png" }],
    },
    {
      id: "initial-idea",
      n: "04",
      heading: "Analysis of the initial idea",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch04.png" }],
    },
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch05.png" }],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch06.png" }],
    },
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch07.png" }],
    },
    {
      id: "uc-ai-analyst",
      n: "08",
      heading: "AI Data Analyst",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch08.png" }],
    },
    {
      id: "uc-queries",
      n: "09",
      heading: "Queries",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch09.png" }],
    },
    {
      id: "uc-data-models",
      n: "10",
      heading: "Data models",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch10.png" }],
    },
    {
      id: "handoff",
      n: "11",
      heading: "Handoff",
      blocks: [{ kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch11.png" }],
    },
  ],
};
