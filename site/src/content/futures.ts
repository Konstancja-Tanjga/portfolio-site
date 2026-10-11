import type { CaseStudy } from "./types";

/**
 * A method, not a product, which is why it sits in the practice band.
 *
 * This wall is images only, on purpose. Every section of the Figma file
 * carries its own type (the maxims, the STEEP chain, the six matrices, the
 * job stories with their verdicts), so transcribing that into blocks as well
 * printed the whole argument twice. The graphics are the artefact; the
 * headings are here for the jump bar, and each caption says what to look at.
 */
export const futures: CaseStudy = {
  slug: "futures-thinking",
  title: "Futures Thinking",
  what: "A foresight workshop framework I designed and facilitated",
  lead:
    "Flow Hub needed a navigation model, and the team had two arguments it could not close by discussion. I designed and facilitated a three-stage foresight programme, two online sessions and a one-day off-site, that turned those arguments into a decision with an owner on every step.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PRACTICE · FORESIGHT AND FACILITATION",
    headline: ["Futures", "Thinking"],
    subline: "a workshop framework, for the Flow Hub navigation work",
    stamp: "STEEP · MULTIPLE FUTURES · 2×2 SCENARIOS · JOBS TO BE DONE",
    credit: "Designed and facilitated · APplus ERP · 2025",
    art: { src: "/work/futures-thinking/cover-art.webp" },
    shot: { src: "/work/futures-thinking/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Designed the programme and facilitated every session" },
    { label: "Context", value: "APplus ERP, Flow Hub navigation" },
    { label: "Shape", value: "3 stages: two online sessions, one off-site day" },
    { label: "Participants", value: "5, every block timeboxed" },
    { label: "Method", value: "Institute for the Future, Futures Thinking specialisation" },
    { label: "Output", value: "Six matrices, one chosen; job stories with a verdict each" },
    { label: "Period", value: "2025" },
  ],
  chapters: [
    {
      id: "in-short",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "Context",
              value: "Flow Hub, the navigation layer of APplus ERP, needed a navigation model.",
            },
            {
              key: "Problem",
              value: "The team had two arguments about that model it could not close by discussion.",
            },
            {
              key: "My role and scope",
              value:
                "I designed the programme and facilitated every session, on the Institute for the Future's Futures Thinking specialisation.",
            },
            {
              key: "Decision 1",
              value: "A three-stage programme: two online sessions and a one-day off-site, every block timeboxed.",
            },
            {
              key: "Decision 2",
              value: "Six 2×2 scenario matrices, and one chosen to decide it.",
            },
            {
              key: "Decision 3",
              value: "Job stories, each with a verdict, so that every step of the decision has an owner.",
            },
            {
              key: "Outcome",
              value: "A navigation decision with an owner on every step, in place of two open arguments.",
            },
            {
              key: "Period and team",
              value: "2025. Five participants; I designed and facilitated.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it was for",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch01.png",
          caption: "The brief: Flow Hub needed a navigation model, and the team had two arguments it could not close by discussion.",
        },
      ],
    },
    {
      id: "structure",
      n: "02",
      heading: "Structure",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch02.png",
          caption: "Three stages, every block timeboxed: two online sessions and a one-day off-site.",
        },
      ],
    },
    {
      id: "workshop-one",
      n: "03",
      heading: "Inside workshop one",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch03.png",
          caption: "The first online session, block by block, each one timeboxed.",
        },
      ],
    },
    {
      id: "crosscutting",
      n: "04",
      heading: "What all six groups asked for",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch04.png",
          caption: "The requests that came back from every one of the six groups.",
        },
      ],
    },
    {
      id: "matrices",
      n: "05",
      heading: "Six matrices, one chosen",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch05.png",
          caption: "The six 2×2 scenario matrices, and the one the team chose.",
        },
      ],
    },
    {
      id: "the-matrix",
      n: "06",
      heading: "The matrix that decided it",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch06.png",
          caption: "The chosen matrix: its two axes and the four futures they span.",
        },
      ],
    },
    {
      id: "jobs",
      n: "07",
      heading: "From jobs to decisions",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch07.png",
          caption: "Job stories, each with a verdict, and the decision each one feeds.",
        },
      ],
    },
    {
      id: "offsite",
      n: "08",
      heading: "The off-site, Munich",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch08.png",
          caption: "The one-day off-site in Munich, the third stage of the programme.",
        },
      ],
    },
    {
      id: "produced",
      n: "09",
      heading: "What it produced",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch09.png",
          caption: "What the programme produced: a decision with an owner on every step.",
        },
      ],
    },
    {
      id: "method",
      n: "10",
      heading: "Where the method comes from",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/futures-thinking/ch10.png",
          caption: "The method: the Institute for the Future's Futures Thinking specialisation, and what this programme takes from it.",
        },
      ],
    },
  ],
};
