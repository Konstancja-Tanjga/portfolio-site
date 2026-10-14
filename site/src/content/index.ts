import { award } from "./award";
import { bi } from "./bi";
import { bighat } from "./bighat";
import { bph } from "./bph";
import { bydgoszcz } from "./bydgoszcz";
import { chihuahua } from "./chihuahua";
import { dms } from "./dms";
import { elly } from "./elly";
import { flow } from "./flow";
import { fox } from "./fox";
import { futures } from "./futures";
import { ost } from "./ost";
import { possible } from "./possible";
import { pzu } from "./pzu";
import { riyad } from "./riyad";
import { sky } from "./sky";
import { volvo } from "./volvo";
import { xecta } from "./xecta";
import type { CaseStudy, Group, Process } from "./types";

/**
 * Every wall, in the order they appear within their band.
 *
 * Within `product`, the order is deliberate: Analytics leads, then Elly,
 * Documents and the Best Practice Hub, then Volvo, MojePZU and Flow mode,
 * with the two short pages, Xecta and Riyad Bank, at the end. `identity`
 * holds Ogólnopolska Strefa Talentu. Big Hat
 * opens `practice` because it is the one design system whose artefacts
 * can be shown in full — it is mine. FOX follows: the same discipline
 * at six-product scale, but its exports belong to Asseco. Reading the
 * sky goes before both as the newest wall; after FOX, `practice` runs
 * oldest to newest.
 */
export const cases: CaseStudy[] = [
  // product
  bi,
  elly,
  dms,
  bph,
  volvo,
  pzu,
  flow,
  xecta,
  riyad,
  // identity
  ost,
  // practice
  sky,
  bighat,
  fox,
  futures,
  chihuahua,
  // recognition
  award,
  bydgoszcz,
  possible,
];

/**
 * What the listings show (Work and Practice) and what gets a link-preview page. A held wall keeps its URL — the reasoning
 * is there and it can be sent to one person — it just isn't advertised
 * until the product it describes is generally available.
 */
export const published: CaseStudy[] = cases.filter((c) => c.status.state === "live");

/* A lead accent whose text is missing from the lead would vanish without a
   word (see LeadAccent in types.ts), so development refuses to start with one.
   Guarded like bi.ts: vite.config.ts loads this file in Node, where
   import.meta.env does not exist. */
if ((import.meta as { env?: { DEV?: boolean } }).env?.DEV) {
  for (const c of cases) {
    if (c.leadAccent && !c.lead.includes(c.leadAccent.text)) {
      throw new Error(`${c.slug}: leadAccent.text is not in lead`);
    }
  }
}

export const byGroup = (group: Group): CaseStudy[] =>
  published.filter((c) => c.group === group);

export const findCase = (slug?: string): CaseStudy | undefined =>
  cases.find((c) => c.slug === slug);

/**
 * The listing a wall belongs to: practice walls have their own page, and
 * everything else is listed on the home page. Back links and the masthead
 * read this, so a reader leaving a practice wall returns to Practice. An
 * unknown wall (undefined) belongs to Work.
 */
export const listingFor = (study?: CaseStudy): { to: string; label: string; all: string } =>
  study?.group === "practice"
    ? { to: "/practice", label: "Practice", all: "All practice work" }
    : { to: "/", label: "Work", all: "All work" };

/**
 * Previous and next, for the foot of a wall. Stays inside the band when the
 * band has two or more walls, so a product case study never hands the reader
 * a competition entry. A band of one, such as `identity`, draws from the walls
 * on the same listing instead (product and identity share Work), so the
 * reader is never moved from Work to Practice.
 */
export function neighbours(slug: string) {
  const current = findCase(slug);
  const list = current ? byGroup(current.group) : published;
  // a band of one would hand the reader the page they are on
  const pool =
    list.length > 1
      ? list
      : published.filter((c) => c.group !== "recognition" && listingFor(c).to === listingFor(current).to);
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
      "Employee health and wellbeing platform, web and mobile. Awarded HR Dream Team for best wellbeing service. Redesign of the career site, kariera.deloitte.pl, in September–November 2019, based on 12 in-depth interviews with employees, online surveys and a competitive analysis of the EY, PwC and KPMG career sites.",
    when: "2017–2021",
  },
  {
    client: "Other",
    what:
      "A next-generation banking concept; a real-estate investment platform; a brand system for a digital agency.",
    when: "—",
  },
];

/**
 * How I work, on the home page: the same four steps as the CV, and the one
 * thing underneath all of them. Drawn by the same board as the About
 * pipeline, so it is text a reader can select, not a picture of it.
 */
export const howIWork: Process = {
  label: "From the first interview to the shipped screen",
  count: "Four steps",
  stages: [
    {
      n: "01",
      title: "Discovery",
      body: "Interviews, observation of real work and an audit of what already exists, until the problem is stated in the users' own words.",
    },
    {
      n: "02",
      title: "Design in Figma",
      body: "Flows, information architecture and screens, built from the design system's components and tied to the requirement each one answers.",
    },
    {
      n: "03",
      title: "Prototype and validation",
      body: "A clickable prototype on the same components, walked end to end with users and subject-matter experts before anything is signed off.",
    },
    {
      n: "04",
      title: "Handoff",
      body: "Engineers build from component code and a spec frozen with it. I review the build against the acceptance criteria before it ships.",
    },
  ],
  underneath: {
    label: "The foundation",
    chips: ["Design system in code", "Storybook", "Chromatic"],
    body: "Every step stands on one design system in code. Storybook on Chromatic is the reference design and engineering both check against.",
  },
};
