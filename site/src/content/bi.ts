import type { CaseStudy } from "./types";

export const bi: CaseStudy = {
  slug: "applus-analytics",
  title: "APplus Analytics",
  what: "Business intelligence for an ERP platform, designed from zero",
  lead:
    "A standalone BI platform inside APplus ERP: a data warehouse and the analytics application on top of it. No analytics surface existed before — the numbers lived in module lists and Excel exports.",
  index: {
    role: "Lead designer, sole designer",
    period: "Jan 2026 – Sep 2026",
    system: "FOX v2.3 → v3.0",
    state: "Releases 5 Oct 2026",
  },
  gated: true,
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Analytics (PR-07)" },
    { label: "Design system", value: "FOX v2.3 → v3.0" },
    { label: "Team", value: "3 developers, 1 requirements engineer, QA, a PM and one designer" },
    { label: "Period", value: "January – September 2026" },
  ],
  chapters: [
    {
      id: "claim",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I don't hand over static mockups. I hand over a clickable React prototype built on FOX, and its code goes into the implementation.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>I lead that implementation through Claude Code: skills, AGENTS.md, tokens, review and merge. Development starts from running code instead of reconstructing a picture from a spec.</p>",
        },
        { kind: "shot", slot: "Hero — Analytics home, desktop. Export at 2400px wide." },
      ],
    },
    {
      id: "problem",
      heading: "What was in the way",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — the state before: where the numbers lived, who had to ask whom for them, and what that cost. Two or three sentences, one concrete example.</p>",
        },
      ],
    },
    {
      id: "model",
      heading: "The analytical model, not just the screens",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I defined how data models, analyses, saved queries and visualisations relate, so a report built by one role stays legible to another.</p>",
        },
        { kind: "shot", slot: "Diagram — data model → analysis → saved query → visualisation." },
      ],
    },
    {
      id: "charts",
      heading: "eCharts bound to the design system",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I chose the library over bespoke chart components, then drove its typography, colour, spacing and pagination from FOX tokens. One token change propagates to every chart.</p>",
        },
      ],
    },
    {
      id: "ai-analyst",
      heading: "The AI Data Analyst",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>It reads the documentation and the customer's own data: explains what a figure means in that business, builds the chart that shows it, and says what the numbers suggest is coming. The design problem was making its reasoning legible enough to trust with a decision.</p>",
        },
        { kind: "shot", slot: "AI Data Analyst — answer with source, chart and confidence signalling." },
      ],
    },
    {
      id: "handoff",
      heading: "Handoff",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Design and code kept in sync by tooling, not by discipline. Handoff ran <strong>Figma → Storybook → dev</strong>, and what development receives is <strong>working FOX code in the repository</strong> — reviewed, merged, ready to build on — not a spec sheet to rebuild from. Code Connect binds every design component to the implementation that ships it, and the loop also runs the other way, <strong>Claude → Figma over MCP</strong>, so code-side work is reflected into the file rather than drifting from it.</p>",
        },
        {
          kind: "pull",
          text:
            "By v3.0 the binding is no longer a convention but the distribution model: FOX ships as a versioned package and six products pick it up by moving a version.",
        },
      ],
    },
    {
      id: "validation",
      heading: "Validated before release",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Eight moderated 45-minute sessions with subject-matter experts, plus a two-customer beta. No dedicated researcher on the team, so I fielded it myself.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "9", label: "months, January to September 2026" },
            { value: "7", label: "people on the team" },
            { value: "1", label: "designer — the shape of the product, its rules, and the component code it ships on" },
          ],
        },
      ],
    },
  ],
};
