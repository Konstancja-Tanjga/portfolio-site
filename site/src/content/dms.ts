import type { CaseStudy } from "./types";

/**
 * Structure mirrors the Figma wall — eleven frames, in its numbering,
 * so the file and the canvas stay walkable side by side.
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
      maxim:
        "Where finding a file is a permissions problem and deleting one is a compliance problem, neither can be solved by a search box.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>DMS is the document management module inside APplus ERP: document services and search, the digital dossier, retention and audit-proof archiving, a migration assistant, and the platform integration around them.</p>",
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I owned:</strong> the shape of the product, the user flows, competitive analysis, early prototypes used to settle open questions with the PM, the requirements engineer and a group of SMEs, the low-fidelity work, and direct day-to-day work with the developers. FOX v2.3, the design system this is built on, I built with one other designer.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch12.png" },
      ],
    },
    {
      id: "who-for",
      n: "13",
      heading: "Who it is for",
      maxim:
        "Tens of thousands of documents means browsing is not a retrieval strategy. Filtering is the only one.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Several hundred mid-sized and large manufacturers across Germany, Italy and Austria. A typical customer runs an archive in the tens of thousands of documents, configures around 22 document types and about 10 custom metadata fields, and has users in warehouse, finance, compliance and audit roles — four audiences with genuinely different jobs against the same archive.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch13.png" },
      ],
    },
    {
      id: "hard-brief",
      n: "14",
      heading: "Why it is a hard design brief",
      maxim: "Most document UIs optimise one thing: get the file.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>This one has to satisfy German commercial retention law (GoBD) at the same time. That means a deleted document is not gone, a restored document is not the same document, an audit trail is append-only, and a metadata field the user is not cleared to see must behave as though it does not exist. Every one of those is a UI constraint before it is a backend constraint, because the UI is where a user forms a false belief about what just happened.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch14.png" },
      ],
    },
    {
      id: "discovery",
      n: "15",
      heading: "Discovery and research",
      maxim:
        "Questions settled before specification cost a conversation. Settled after, they cost a rewrite.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch15.png" },
      ],
    },
    {
      id: "competition",
      n: "16",
      heading: "Competition analysis",
      maxim:
        "A competitor screenshot with no annotation is a mood board. The annotation is where the analysis actually happens.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch16.png" },
      ],
    },
    {
      id: "specification",
      n: "17",
      heading: "Specification",
      maxim:
        "A frame without an identifier is an opinion. A frame with one is a commitment somebody can check.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch17.png" },
      ],
    },
    {
      id: "inspiration",
      n: "18",
      heading: "Inspiration and ideas",
      maxim:
        "Borrowing a look is a shortcut you pay for later. Borrowing a decision means you also inherit the reasoning behind it.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18.png" },
      ],
    },
    {
      id: "prototypes",
      n: "18a",
      heading: "Prototypes",
      maxim:
        "A generated prototype is cheap enough to throw away. A designed and signed-off screen is not.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Before a single frame was drawn, a settled requirement went into Figma Make and came back as something clickable in hours. Those prototypes were the argument in the room with the PM, the requirements engineer and the SMEs — flows walked through end to end, weak options dropped on the spot.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>So the disagreements happen here, one step before REQ- identifiers and sign-off make them expensive.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch18a.png" },
      ],
    },
    {
      id: "sign-off",
      n: "19",
      heading: "Design and sign-off",
      standfirst:
        "Each frame carries its requirement text in a documentation band, then a designer sign-off: dated, and marked Approved.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch19.png" },
      ],
    },
    {
      id: "documentation",
      n: "20",
      heading: "Documentation",
      maxim:
        "Documentation written after handoff describes what was built. Documentation written into the frame decides it.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch20.png" },
      ],
    },
    {
      id: "design-system",
      n: "21",
      heading: "Design system",
      standfirst:
        "FOX v2.3 — the system this product is built on, and which I co-authored with one other designer while building on it.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch21.png" },
      ],
    },
    {
      id: "handoff",
      n: "22",
      heading: "Handoff",
      maxim:
        "On a team this size, tooling-enforced alignment is the only version that survives eleven months. Discipline-enforced alignment does not.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Handoff ran Figma → Storybook → dev with Code Connect in play, so FOX components in the design file are tied to their implementations instead of described in a spec sheet. The loop also ran the other way — Codex → Figma over MCP — so code-side work got reflected back into the design file rather than drifting from it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/applus-documents/wall/ch22.png" },
      ],
    },
  ],
};
