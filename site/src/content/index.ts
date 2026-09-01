import { bi } from "./bi";
import { dms } from "./dms";
import { elly } from "./elly";
import { fox } from "./fox";
import { pzu } from "./pzu";
import { riyad } from "./riyad";
import { volvo } from "./volvo";
import { xecta } from "./xecta";
import type { CaseStudy } from "./types";

/**
 * The eight walls, in the order they appear on the work page.
 *
 * FOX sits second on purpose: the second card is where a reader
 * confirms what I am, and the answer should be "she builds the
 * system", not "another ERP screen".
 */
export const cases: CaseStudy[] = [bi, fox, dms, elly, volvo, xecta, pzu, riyad];

/**
 * What the work page lists. A held project keeps its wall — the URL
 * works, the reasoning is there — it just isn't advertised until the
 * product it describes is generally available.
 */
export const published: CaseStudy[] = cases.filter((c) => c.status.state === "live");

export const findCase = (slug?: string): CaseStudy | undefined =>
  cases.find((c) => c.slug === slug);

/** Previous and next, for the foot of a wall. Held projects are skipped. */
export function neighbours(slug: string) {
  const list = published.length ? published : cases;
  const i = list.findIndex((c) => c.slug === slug);
  if (i === -1) return { previous: undefined, next: list[0] };
  return {
    previous: list[(i - 1 + list.length) % list.length],
    next: list[(i + 1) % list.length],
  };
}

export type EarlierEntry = { client: string; what: string; when: string };

/** Work that doesn't get a wall. Text carries these. */
export const earlier: EarlierEntry[] = [
  {
    client: "Wolters Kluwer",
    what:
      "Growth features for a legal and regulatory information platform: user flows, visual patterns, and contributions to the core component library.",
    when: "2021–2022",
  },
  {
    client: "Deloitte",
    what:
      "Employee health and wellbeing platform, web and mobile, plus the global career site. Awarded HR Dream Team for best wellbeing service.",
    when: "2017–2021",
  },
];
