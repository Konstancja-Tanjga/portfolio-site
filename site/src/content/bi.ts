import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — twelve frames, in its numbering,
 * so the file and the canvas stay walkable side by side.
 */
export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. No analytics surface existed before — the numbers lived in module lists and Excel exports.",
  status: {
    state: "held",
    until: "5 October 2026",
    why: "The product is generally available then. Until it is, this wall is reachable by link but not advertised.",
  },
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
      maxim:
        "Business intelligence on the ERP's own data, inside the ERP, without an export.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Analytics is the business intelligence module inside APplus ERP. It turns the data a company already has into numbers it can act on — dashboards, queries, data models, and an AI analyst that plans and briefs in natural language.</p>",
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I owned:</strong> the audit of the existing concept, the shape of the product, its information architecture, personas and user flows, market and competitor analysis, the surface rules the whole application obeys, and the prototype development receives.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01.png" },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why it is a hard design brief",
      maxim: "Most BI UIs optimise one thing: draw the chart. Here the chart is the last problem.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A number is only as true as the model behind it, the period it covers and the role of the person reading it — and all three are invisible by default. The challenge was never visualisation; it was making authorship, reach and freshness legible on the artefact itself, in a product where the person who builds a query is almost never the person who has to defend the number it produces.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch01a.png" },
      ],
    },
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "Four jobs against one data foundation. The numbering is the handoff: a number is built at 01 and believed at 04, or it is not believed at all.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch02.png" },
      ],
    },
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      maxim:
        "A prototype proves a thing can be built. It does not prove it can be found, named, or returned to.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I did not start by drawing. A working prototype already existed — built in Lovable by the PM — so I imported all of it into Figma and audited it screen by screen: as a benchmark, against market practice for BI tools, and against what APplus users already know how to do.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch03.png" },
      ],
    },
    {
      id: "initial-idea",
      n: "04",
      heading: "Analysis of the initial idea",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch04.png" },
      ],
    },
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch05.png" },
      ],
    },
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      standfirst:
        "With one other designer I took FOX from v2.3 to v3.0. Same system, three homes — what changed each time was not the components, it was where the truth lived, and therefore who was allowed to change it.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch06.png" },
      ],
    },
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      standfirst:
        "Each frame carries its requirement in a documentation band — SRS reference, REQ number, date and status — then a designer sign-off: dated, and marked Approved.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch07.png" },
      ],
    },
    {
      id: "uc-ai-analyst",
      n: "08",
      heading: "AI Data Analyst",
      maxim:
        "An action on a fragment opens a surface scoped to that fragment, and returns exactly one thing to its parent: a change, or nothing.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Question a fragment of an analysis without derailing the analysis. Without a scoped branch, every doubt either derails the main thread or is settled off the record — and the artefact drifts while nobody is watching.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch08.png" },
      ],
    },
    {
      id: "uc-queries",
      n: "09",
      heading: "Queries",
      maxim:
        "If a property determines who can see an object, it belongs on the object — not one click away from it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Publish a query other people can use — and see who else can use it, without opening a permissions dialog to find out. Exposure that is invisible at rest quietly reaches further than its author thought.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch09.png" },
      ],
    },
    {
      id: "uc-data-models",
      n: "10",
      heading: "Data models",
      maxim:
        "Anything that changes what a number means has to be visible at the moment the number is built, not discoverable afterwards.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Four stages — select query, define relationships, validate, publish — and each one changes who is affected by a mistake. Saving keeps your work. Publishing changes what other people are allowed to believe. Two different acts, and two different affordances.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch10.png" },
      ],
    },
    {
      id: "handoff",
      n: "11",
      heading: "Handoff",
      maxim:
        "Design and code kept in sync by tooling, not by discipline.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The loop ran Figma → Storybook → dev, and what development receives is working FOX code in the repository — reviewed, merged, ready to build on, not a spec sheet to rebuild from. Code Connect binds every design component to the implementation that ships, and the loop also runs the other way — Claude → Figma over MCP — so code-side work is reflected into the file rather than drifting from it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-analytics/wall/ch11.png" },
      ],
    },
  ],
};
