import { bi } from "./bi";
import { dms } from "./dms";
import { elly } from "./elly";
import type { CaseStudy } from "./types";

/** Order here is the order in the work index on the home page. */
export const cases: CaseStudy[] = [bi, dms, elly];

export const findCase = (slug?: string): CaseStudy | undefined =>
  cases.find((c) => c.slug === slug);

export type EarlierEntry = {
  client: string;
  what: string;
  when: string;
};

/** Earlier work. Text carries these — no images needed. */
export const earlier: EarlierEntry[] = [
  {
    client: "Volvo Group",
    what:
      "Redesigned the enterprise ERP and built a design system for it on the corporate Volvo Design System, including an access and permissions redesign: roles, entitlements, approval paths. Delivered with four Angular developers.",
    when: "2022–2023",
  },
  {
    client: "Xecta",
    what:
      "One of three designers on a production surveillance platform for upstream oil and gas — safety-critical, data-dense, heavy visualisation for non-technical operators.",
    when: "2021–2022",
  },
  {
    client: "Wolters Kluwer",
    what:
      "Growth features for a legal and regulatory information platform: user flows, visual patterns, and contributions to the core component library.",
    when: "2021–2022",
  },
  {
    client: "PZU",
    what:
      "MojePZU, web and mobile — insurance policies and healthcare services under regulatory constraints. Information architecture and a simplified account setup off the back of user interviews.",
    when: "2019",
  },
  {
    client: "Riyad Bank",
    what:
      "A mobile financial-education product shipped to the App Store and Google Play. C-level interviews, SME sessions and A/B testing before build; the interactive 3D navigation and the illustration system.",
    when: "via Intellias",
  },
  {
    client: "Deloitte",
    what:
      "Employee health and wellbeing platform, web and mobile, plus the global career site. Awarded HR Dream Team for best wellbeing service.",
    when: "2017–2021",
  },
];
