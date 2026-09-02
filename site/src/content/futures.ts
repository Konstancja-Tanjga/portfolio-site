import type { CaseStudy } from "./types";

/**
 * A method, not a product — which is why it sits in the practice band.
 *
 * This wall is images only, on purpose. Every section of the Figma file
 * carries its own type — the maxims, the STEEP chain, the six matrices, the
 * job stories with their verdicts — so transcribing that into blocks as well
 * printed the whole argument twice. The graphics are the artefact; the
 * headings are here for the jump bar and nothing else.
 */
export const futures: CaseStudy = {
  slug: "futures-thinking",
  title: "Futures Thinking",
  what: "A foresight workshop framework I designed and facilitated",
  lead:
    "Flow Hub needed a navigation model, and the team had two arguments it could not close by discussion. I designed and facilitated a three-stage foresight programme — two online sessions and a one-day off-site — that turned those arguments into a decision with an owner on every step.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PRACTICE · FORESIGHT AND FACILITATION",
    headline: ["Futures", "Thinking"],
    subline: "a workshop framework, for the Flow Hub navigation work",
    stamp: "STEEP · MULTIPLE FUTURES · 2×2 SCENARIOS · JOBS TO BE DONE",
    credit: "Designed and facilitated · APplus ERP · 2025",
    shot: { src: "/work/futures-thinking/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Designed the programme and facilitated every session" },
    { label: "Context", value: "APplus ERP — Flow Hub navigation" },
    { label: "Shape", value: "3 stages: two online sessions, one off-site day" },
    { label: "Participants", value: "5, every block timeboxed" },
    { label: "Method", value: "Institute for the Future — Futures Thinking specialisation" },
    { label: "Output", value: "Six matrices, one chosen; job stories with a verdict each" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it was for",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch01.png" },
      ],
    },
    {
      id: "structure",
      n: "02",
      heading: "Structure",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch02.png" },
      ],
    },
    {
      id: "workshop-one",
      n: "03",
      heading: "Inside workshop one",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch03.png" },
      ],
    },
    {
      id: "crosscutting",
      n: "04",
      heading: "What all six groups asked for",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch04.png" },
      ],
    },
    {
      id: "matrices",
      n: "05",
      heading: "Six matrices, one chosen",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch05.png" },
      ],
    },
    {
      id: "the-matrix",
      n: "06",
      heading: "The matrix that decided it",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch06.png" },
      ],
    },
    {
      id: "jobs",
      n: "07",
      heading: "From jobs to decisions",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch07.png" },
      ],
    },
    {
      id: "offsite",
      n: "08",
      heading: "The off-site, Munich",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch08.png" },
      ],
    },
    {
      id: "produced",
      n: "09",
      heading: "What it produced",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch09.png" },
      ],
    },
    {
      id: "method",
      n: "10",
      heading: "Where the method comes from",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/futures-thinking/ch10.png" },
      ],
    },
  ],
};
