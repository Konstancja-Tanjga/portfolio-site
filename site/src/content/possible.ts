import type { CaseStudy } from "./types";

export const possible: CaseStudy = {
  slug: "possible-reality",
  title: "Possible Reality",
  what: "Speculative design — The Wisdom of a Vanishing Adventure, distinction",
  lead:
    "The Wisdom of a Vanishing Adventure — a speculative design entry by a team of two, awarded a distinction at the WUD Silesia 10.5 competition.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · SPECULATIVE DESIGN",
    headline: ["Possible", "Reality"],
    subline: "The Wisdom of a Vanishing Adventure",
    stamp: "SPECULATIVE DESIGN · WUD SILESIA 10.5 · DISTINCTION",
    credit: "Team entry · distinction",
    shot: { src: "/work/possible-reality/01.png" },
  },
  meta: [
    { label: "Competition", value: "WUD Silesia 10.5, speculative design" },
    { label: "Result", value: "Distinction" },
    { label: "Title", value: "The Wisdom of a Vanishing Adventure" },
    { label: "Team", value: "Patrycja Mielewczyk, Karolina Tracz, Konstancja Tanjga-Nawrot" },
  ],
  chapters: [
    {
      id: "entry",
      n: "01",
      heading: "The entry",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/possible-reality/01.png",
          caption:
            "The project page \"Circulence\" on the WUD Silesia site, listing the three authors and marked as distinguished by the WUD Silesia 10.5 jury.",
        },
      ],
    },
  ],
};
