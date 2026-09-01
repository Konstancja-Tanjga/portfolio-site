import type { CaseStudy } from "./types";

export const elly: CaseStudy = {
  slug: "elly-ai-assistant",
  title: "Elly",
  what: "The platform's first AI assistant, desktop and mobile",
  lead:
    "Streaming answers over the product documentation, with citations, error states and handoff to a person — the states that decide trust, not the chat bubble.",
  status: { state: "live" },
  cover: {
    kicker: "PRODUCT DESIGN · AI IN PRODUCTION",
    headline: ["Elly"],
    subline: "the platform's first AI assistant",
    stamp: "STREAMING · CITATIONS · ERROR STATES · HANDOFF",
    credit: "Lead designer · Asseco Solutions · 2025",
    shot: { slot: "Cover — Elly answering, with its sources visible. 3232×2528." },
  },
  meta: [
    { label: "Role", value: "Lead designer" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Elly" },
    { label: "Design system", value: "FOX v2.2" },
    { label: "Released", value: "April 2025, with APplus 9" },
    { label: "Research", value: "13 consultants and solution architects" },
  ],
  chapters: [
    {
      id: "claim",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The first AI surface in the platform. The design work was not the conversation — it was the states around it: what a streaming answer looks like while it is still wrong, where a source goes, and what happens when the assistant cannot help.</p>",
        },
        { kind: "shot", slot: "Hero — Elly answering with a citation, desktop and mobile side by side." },
      ],
    },
    {
      id: "study",
      heading: "The study that changed the roadmap",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Thirteen consultants and solution architects. Twelve of thirteen would use it again, but trust scored lowest of every dimension: answers appeared without visible sources. Citations shipped as a direct result.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>Eight of thirteen had never seen the assistant at all. That is a discovery problem, not a usability one, and it changed where the entry point lives.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "13", label: "consultants and solution architects" },
            { value: "12/13", label: "would use it again" },
            { value: "8/13", label: "had never seen the assistant" },
          ],
        },
      ],
    },
    {
      id: "states",
      heading: "The states that decide trust",
      blocks: [
        {
          kind: "points",
          items: [
            "Streaming answer, with the source arriving attached rather than after",
            "Low confidence, said plainly instead of hedged prose",
            "No answer in the documentation, with a route to a person",
            "Error and retry, without losing the question",
          ],
        },
        { kind: "shot", slot: "State matrix — the four states above, desktop and mobile." },
        {
          kind: "passage",
          html:
            '<p>The same states are implemented in my own design system, on my own tokens, and you can click them: <a href="https://konstancja-tanjga.github.io/bighat-design-system/?path=/story/templates-ai-chat--ready">the AI chat template in the Big Hat design system</a>. Elly itself belongs to Asseco, so this is the version I can show in full.</p>',
        },
      ],
    },
    {
      id: "next",
      heading: "What I would do differently",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — two or three sentences. This section is worth more to a hiring manager than any screen above it, so write it honestly.</p>",
        },
      ],
    },
  ],
};
