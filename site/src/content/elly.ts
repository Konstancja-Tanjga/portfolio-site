import type { CaseStudy } from "./types";

/** Structure mirrors the Figma wall — twelve sections, in its numbering. */
export const elly: CaseStudy = {
  slug: "elly-ai-assistant",
  title: "Elly",
  what: "The platform's first AI assistant, designed from zero",
  lead:
    "Streaming answers over the product documentation, with citations, error states and handoff to a person — the states that decide trust, not the chat bubble.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · AI IN PRODUCTION",
    headline: ["Smart help", "for an ERP"],
    subline: "Elly, for APplus ERP",
    stamp: "STREAMING · CITATIONS · ERROR STATES · HANDOFF",
    credit: "Lead designer · Asseco Solutions · released with APplus 9, 2025",
    shot: { src: "/work/elly-ai-assistant/01.png" },
  },
  meta: [
    { label: "Role", value: "Lead designer — designed from zero" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Elly" },
    { label: "Design system", value: "FOX v2.2" },
    { label: "Released", value: "April 2025, with APplus 9" },
    { label: "Research", value: "13 consultants and solution architects" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "Elly Smart Help",
      maxim:
        "The design work was never the conversation. It was the states around it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The first AI surface in the platform, desktop and mobile: streaming answers over the product documentation, with citations, error states and a route to a person.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>What a streaming answer looks like while it is still wrong, where a source goes, and what happens when the assistant cannot help — those decide whether anyone uses it twice. The chat bubble does not.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch01.png" },
      ],
    },
    {
      id: "constraints",
      n: "02a",
      heading: "Three constraints",
      maxim: "TODO — the one-line claim this chapter earns.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — the three constraints, named, and what each one ruled out. This is the chapter that shows the brief was hard rather than open.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch02a.png" },
      ],
    },
    {
      id: "audit",
      n: "03",
      heading: "Audit and research",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — what existed before, who was asked, and what came back.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch03.png" },
      ],
    },
    {
      id: "exploration",
      n: "04",
      heading: "Exploration",
      standfirst:
        "Entry point, affordance and footprint — decided explicitly, because an assistant nobody finds is not an assistant.",
      blocks: [
        {
          kind: "points",
          items: [
            "One click to Elly, from the side menu",
            "A visible button — colour and symbol argued out rather than assumed",
            "A human face at 42px, against stars and a help bulb",
            "A footprint capped at 20 per cent of the page",
          ],
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch04.png" },
      ],
    },
    {
      id: "use-cases",
      n: "05",
      heading: "Twelve use cases",
      maxim: "TODO",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — the twelve, and how they were cut down to the ones that shipped.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch05.png" },
      ],
    },
    {
      id: "decisions",
      n: "06",
      heading: "The decisions inside them",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the decisions, and the alternative each one beat.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch06.png" },
      ],
    },
    {
      id: "states",
      n: "06a",
      heading: "The states that decide trust",
      maxim:
        "A hedge is not a confidence signal. Saying so plainly is.",
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
        { kind: "shot", width: "wall", slot: "State matrix — the four states above, desktop and mobile. 2400px." },
        {
          kind: "passage",
          html:
            '<p>The same states are implemented in my own design system, on my own tokens, and you can click them: <a href="https://konstancja-tanjga.github.io/bighat-design-system/?path=/story/templates-ai-chat--ready">the AI chat template in Big Hat</a>. Elly itself belongs to Asseco, so this is the version I can show in full.</p>',
        },
      ],
    },
    {
      id: "prototype",
      n: "07",
      heading: "The prototype",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — what development received, and what that changed about how the build ran.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch07.png" },
      ],
    },
    {
      id: "unseen",
      n: "08",
      heading: "Nobody had seen it",
      maxim:
        "Eight of thirteen had never seen the assistant. That is a discovery problem, not a usability one.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>And it changed where the entry point lives — a finding about placement, arrived at by asking about trust.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch08.png" },
      ],
    },
    {
      id: "sessions",
      n: "09",
      heading: "Nine sessions, in their words",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the quotes that carried weight, and what each one changed.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch09.png" },
      ],
    },
    {
      id: "trust",
      n: "10",
      heading: "Easy, yes. Trusted, no.",
      maxim:
        "Twelve of thirteen would use it again — and trust still scored lowest of every dimension.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Thirteen consultants and solution architects. Usability scored well; trust did not, because answers appeared without visible sources. Citations shipped as a direct result.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "13", label: "consultants and solution architects" },
            { value: "12/13", label: "would use it again" },
            { value: "8/13", label: "had never seen the assistant" },
          ],
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch10.png" },
      ],
    },
    {
      id: "barriers",
      n: "11",
      heading: "The two barriers users named",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the two, in their words, and what each one cost.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch11.png" },
      ],
    },
    {
      id: "what-i-designed",
      n: "12",
      heading: "What I designed",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — what shipped off the back of the study, and what is still on the roadmap because of it.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>TODO — what I would do differently. Two or three sentences. This section is worth more to a hiring manager than any screen above it, so write it honestly.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/wall/ch12.png" },
      ],
    },
    {
      id: "live",
      n: "13",
      heading: "The live product",
      standfirst:
        "Elly as it ships in APplus 9 — the screens, not the reasoning. The chapters above are how it got here.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/02.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/03.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/04.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/05.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/06.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/07.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/08.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/09.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/10.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/11.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/12.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/13.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/14.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/15.png" },
        { kind: "shot", width: "wall", src: "/work/elly-ai-assistant/16.png" },
      ],
    },
  ],
};
