import { award } from "./award";
import { bi } from "./bi";
import { bydgoszcz } from "./bydgoszcz";
import { deloitte } from "./deloitte";
import { dms } from "./dms";
import { elly } from "./elly";
import { flow } from "./flow";
import { fox } from "./fox";
import { futures } from "./futures";
import { possible } from "./possible";
import { pzu } from "./pzu";
import { riyad } from "./riyad";
import { tourist } from "./tourist";
import { volvo } from "./volvo";
import { xecta } from "./xecta";
import type { CaseStudy, Group } from "./types";

/**
 * Every wall, in the order they appear within their band.
 *
 * Within `product`, the order is deliberate: Analytics leads, and FOX
 * is second among practice because the design system is the claim the
 * rest of the site exists to support.
 */
export const cases: CaseStudy[] = [
  // product
  bi,
  dms,
  elly,
  flow,
  volvo,
  xecta,
  riyad,
  pzu,
  deloitte,
  tourist,
  // practice
  fox,
  futures,
  // recognition
  award,
  bydgoszcz,
  possible,
];

/**
 * What the work page lists. A held wall keeps its URL — the reasoning
 * is there and it can be sent to one person — it just isn't advertised
 * until the product it describes is generally available.
 */
export const published: CaseStudy[] = cases.filter((c) => c.status.state === "live");

export const byGroup = (group: Group): CaseStudy[] =>
  published.filter((c) => c.group === group);

export const findCase = (slug?: string): CaseStudy | undefined =>
  cases.find((c) => c.slug === slug);

/**
 * Previous and next, for the foot of a wall. Stays inside the band, so
 * a product case study never hands the reader a competition entry.
 */
export function neighbours(slug: string) {
  const current = findCase(slug);
  const list = current ? byGroup(current.group) : published;
  const pool = list.length ? list : published;
  const i = pool.findIndex((c) => c.slug === slug);
  if (i === -1) return { previous: undefined, next: pool[0] };
  return {
    previous: pool[(i - 1 + pool.length) % pool.length],
    next: pool[(i + 1) % pool.length],
  };
}

export type EarlierEntry = { client: string; what: string; when: string };

/** Work that doesn't get a wall. Text carries these. */
export const earlier: EarlierEntry[] = [
  {
    client: "Wolters Kluwer",
    what:
      "Growth features for wolterskluwer-online.de, a legal and regulatory information platform: user flows, visual patterns, and development of the core design system.",
    when: "2021–2022",
  },
  {
    client: "Deloitte",
    what:
      "Employee health and wellbeing platform, web and mobile. Awarded HR Dream Team for best wellbeing service.",
    when: "2017–2021",
  },
  {
    client: "Other",
    what:
      "A next-generation banking concept; a real-estate investment platform; a brand system for a digital agency.",
    when: "—",
  },
];
