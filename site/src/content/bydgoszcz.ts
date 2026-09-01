import type { CaseStudy } from "./types";

export const bydgoszcz: CaseStudy = {
  slug: "bydgoszcz-design-challenge",
  title: "Bydgoszcz Design Challenge",
  what: "A competition entry, awarded a distinction",
  lead:
    "Our solution for the Bydgoszcz Design Challenge, awarded a distinction. TODO — the brief in one sentence, and what our answer was.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · COMPETITION",
    headline: ["Bydgoszcz", "Design Challenge"],
    subline: "our solution — distinction",
    stamp: "COMPETITION · CIVIC DESIGN · DISTINCTION",
    credit: "Team entry · distinction",
    shot: { src: "/work/bydgoszcz/01.png" },
  },
  meta: [
    { label: "Competition", value: "Bydgoszcz Design Challenge" },
    { label: "Result", value: "Distinction" },
    { label: "Role", value: "TODO — your role in the team" },
    { label: "Team", value: "TODO" },
  ],
  chapters: [
    {
      id: "entry",
      n: "01",
      heading: "The entry",
      blocks: [
        {
          kind: "passage",
          html: "<p>TODO — the brief, our answer, and why the jury singled it out.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/bydgoszcz/02.png" },
        { kind: "shot", width: "wall", src: "/work/bydgoszcz/03.png" },
        { kind: "shot", width: "wall", src: "/work/bydgoszcz/04.png" },
        { kind: "shot", width: "wall", src: "/work/bydgoszcz/05.png" },
        { kind: "shot", width: "wall", src: "/work/bydgoszcz/06.png" },
      ],
    },
  ],
};
