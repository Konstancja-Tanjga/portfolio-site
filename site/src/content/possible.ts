import type { CaseStudy } from "./types";

export const possible: CaseStudy = {
  slug: "possible-reality",
  title: "Possible Reality",
  what: "Speculative design — The Wisdom of a Vanishing Adventure, distinction",
  lead:
    "The Wisdom of a Vanishing Adventure — a speculative design entry, awarded a distinction at the WUD Silesia 10.5 competition. Speculative work earns its place in a portfolio for one reason: it shows what you do when nobody hands you a requirement.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · SPECULATIVE DESIGN",
    headline: ["Possible", "Reality"],
    subline: "The Wisdom of a Vanishing Adventure",
    stamp: "SPECULATIVE DESIGN · WUD SILESIA 10.5 · DISTINCTION",
    credit: "Competition entry · distinction",
    shot: { src: "/work/possible-reality/01.png" },
  },
  meta: [
    { label: "Competition", value: "WUD Silesia 10.5, speculative design" },
    { label: "Result", value: "Distinction" },
    { label: "Title", value: "The Wisdom of a Vanishing Adventure" },  ],
  chapters: [
    {
      id: "entry",
      n: "01",
      heading: "The entry",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/possible-reality/01.png" },
      ],
    },
  ],
};
