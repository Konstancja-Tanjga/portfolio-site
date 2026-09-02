import type { CaseStudy } from "./types";

export const pzu: CaseStudy = {
  slug: "mojepzu",
  title: "MojePZU",
  what: "Insurance and healthcare at consumer scale, under regulatory constraint",
  lead:
    "MojePZU, web and mobile: insurance policies and healthcare services for a national insurer. I owned the information architecture, simplified account setup off the back of user interviews, and defined the interaction and motion models.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INSURANCE AND HEALTHCARE",
    headline: ["MojePZU"],
    subline: "insurance and healthcare, web and mobile",
    stamp: "INFORMATION ARCHITECTURE · ACCOUNT SETUP · INTERACTION AND MOTION",
    credit: "UI designer · PZU · 2019",
    shot: { src: "/work/mojepzu/01.png" },
  },
  meta: [
    { label: "Role", value: "UI designer, freelance" },
    { label: "Company", value: "PZU, Warsaw" },
    { label: "Platforms", value: "Web and mobile" },
    { label: "Constraint", value: "Regulated — insurance policies and health data" },
    { label: "Owned", value: "Information architecture, account setup, interaction and motion models" },
    { label: "Period", value: "January – December 2019" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "Two regulated domains in one account: an insurance policy and a medical record do not get to look like the same object.",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/mojepzu/02.png" },
      ],
    },
  ],
};
