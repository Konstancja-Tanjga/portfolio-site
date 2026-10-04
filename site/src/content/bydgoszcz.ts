import type { CaseStudy } from "./types";

export const bydgoszcz: CaseStudy = {
  slug: "bydgoszcz-design-challenge",
  title: "Bydgoszcz Design Challenge",
  what: "A competition entry on promoting Polish design, awarded a distinction",
  lead:
    "Our solution for the Bydgoszcz Design Challenge 2022, on how to promote Polish design. It was awarded a distinction.",
  status: { state: "live" },
  group: "recognition",
  cover: {
    kicker: "RECOGNITION · COMPETITION",
    headline: ["Bydgoszcz", "Design Challenge"],
    subline: "our solution — distinction",
    stamp: "COMPETITION · PROMOTING POLISH DESIGN · DISTINCTION",
    credit: "Team entry · distinction · 2022",
    shot: { src: "/work/bydgoszcz/01.png" },
  },
  meta: [
    { label: "Competition", value: "Bydgoszcz Design Challenge" },
    { label: "Dates", value: "14–16 October 2022" },
    { label: "Theme", value: "How to promote Polish design" },
    { label: "Result", value: "Distinction" },
  ],
  chapters: [
    {
      id: "entry",
      n: "01",
      heading: "The entry",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The Bydgoszcz Design Challenge was a three-day competition, held on 14–16 October 2022, in which teams used the design thinking process to solve one challenge with help from mentors. The theme was how to promote Polish design. Our team chose tourists as the target group and started from the paper dolls Jan Kurzatkowski made for the Ład cooperative. We made a paper prototype, painted it digitally in regional patterns from Kurpie, Kashubia, Masuria and Podlasie, and turned it into a series of regional dolls meant as holiday souvenirs. The entry was awarded a distinction.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bydgoszcz/01.png",
          caption:
            "The brief: a three-day competition in October 2022 on the theme of how to promote Polish design.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bydgoszcz/05.png",
          caption:
            "The paper prototype, based on Jan Kurzatkowski's paper dolls for the Ład cooperative and painted digitally in regional patterns.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/bydgoszcz/06.png",
          caption:
            "The three regional dolls as souvenirs: a Kashubian, a Masurian and a Kurpie doll.",
        },
      ],
    },
  ],
};
