import type { CaseStudy } from "./types";

/**
 * Two pieces of work for one client: the product (2020–2021) and the
 * company website, xecta.com (2022). They were two pages until the
 * audit merged them; the role lines below are the ones the boards state.
 *
 * Rebuilt to docs/case-study-kit/RULES.md in October 2026. The two
 * pieces sit in one dossier, one tile each, so the deep links
 * #product and #website still open the right place. No chapter was
 * written for a slot the boards have nothing for: no personas, no
 * research, no handoff, no measured result.
 */
const W = "/work/xecta";

export const xecta: CaseStudy = {
  slug: "xecta",
  title: "Xecta: product and website",
  what: "A production surveillance platform for upstream oil and gas, and the company website",
  lead:
    "Two projects for Xecta, a Texas company that makes production surveillance and optimisation software for upstream oil and gas. The first is a web application with heavy data visualisation for operators who are not analysts. The second is the company website, xecta.com. I documented the product work in Confluence for a distributed US team.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Production", "surveillance"],
    subline: "and optimisation for upstream oil and gas, and the company website",
    stamp: "DATA-DENSE · HEAVY VISUALISATION · CORPORATE SITE",
    credit: "Senior UX & UI designer · Xecta · 2020–2021 and 2022",
    art: { src: "/work/xecta/cover-art.webp" },
    shot: { src: `${W}/00-cover.png` },
  },
  meta: [
    { label: "Role", value: "Senior UX & UI designer, freelance" },
    { label: "Company", value: "Xecta, Texas, USA, remote" },
    {
      label: "Product",
      value: "Mockups and clickable prototypes, with a UX designer and a researcher",
    },
    {
      label: "Website",
      value: "UX and UI design, with an additional UI designer and two developers",
    },
    { label: "Documentation", value: "Confluence" },
    { label: "Tools (website)", value: "Figma, Adobe Photoshop, Adobe Illustrator" },
    { label: "Period (product)", value: "April 2020 to July 2021" },
    { label: "Period (website)", value: "2022" },
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
              value:
                "Xecta, a Texas company, makes production surveillance and optimisation software for upstream oil and gas. Two projects, two years apart: the product, then the company website.",
            },
            {
              key: "Problem",
              value:
                "The product shows heavy data visualisation to operators who are not analysts, and the industry has its own language for every number. The website has to make that product legible to people who will never open it.",
            },
            {
              key: "My role and scope",
              value:
                "Senior UX and UI designer, freelance and remote. Mockups and clickable prototypes for the product, with a UX designer and a researcher; UX and UI for the website, with a UI designer and two developers. Documentation in Confluence.",
            },
            {
              key: "Decision 1",
              value:
                "Every number keeps the industry's own name on the screen: lift type, deferral, setpoint, NPV, IPR and VLP, as the operators use them.",
            },
            {
              key: "Decision 2",
              value:
                "A dashboard for a group of wells leads from the production summary to today's opportunities, traced from lift type to cash flow.",
            },
            {
              key: "Decision 3",
              value:
                "The website says what the product does to a reader who will never log in, on desktop, tablet, and phone.",
            },
            {
              key: "Outcome",
              value:
                "Not measured. On record are the deliverables: the product mockups and prototypes, and xecta.com.",
            },
            {
              key: "Period and team",
              value:
                "April 2020 to July 2021 for the product, with a UX designer and a researcher. 2022 for the website, with a UI designer and two developers.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim: "A web application for the people who run the wells, and a website for the people who buy it.",
      standfirst: "What I owned on each piece, then every part of the product and the site, one screen per slide.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Mockups and clickable prototypes</strong> for the product, with a UX designer and a researcher, for a distributed US team.",
            "<strong>The product documentation</strong> in Confluence, so that the team could work from it without me in the room.",
            "<strong>UX and UI for xecta.com</strong>, with an additional UI designer and two developers who built it.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: `${W}/03.png`, title: "Dashboard", body: "One group of wells: the production summary chart, the largest deferrals, and today's opportunities traced from lift type to cash flow." },
            { src: `${W}/04.png`, title: "Well Performance", body: "A table of wells with setpoint and workover opportunities; one row opened on its setpoint chart and valve pressure traverse." },
            { src: `${W}/06.png`, title: "Artificial Lift Timing Selection", body: "Lift scenarios for one well compared by NPV, with the IPR and VLP curves for each." },
            { src: `${W}/website-01.png`, title: "xecta.com", body: "The home page, with the Drilling menu open on its three product lines." },
            { src: `${W}/website-03.png`, title: "A product page", body: "Well Performance Analysis on desktop, beside the offices block on a phone." },
          ],
        },
      ],
    },
    {
      id: "hard-brief",
      n: "01a",
      heading: "Why this is a hard brief",
      maxim: "The people reading these charts are operators rather than analysts, and the industry has its own language for every number.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Industry language first.</strong> Lift types, deferrals, setpoints, and traverses are the operators' words, and the screens had to use them from the first weeks.",
            "<strong>A lot of data visualisation.</strong> Charts, Sankeys, and traverses inside a complex design system and its patterns, for readers who are not analysts.",
            "<strong>Professionals from the drilling industry</strong> as the people to learn from, with a UX designer and a researcher beside me.",
            "<strong>A distributed US team, worked remotely.</strong> The product work was documented in Confluence so that it could be read without me.",
          ],
        },
        {
          kind: "pull",
          text: "“It made her master the nomenclature of the industry.”",
        },
        {
          kind: "shot",
          width: "wall",
          src: `${W}/05.png`,
          caption:
            "From the project board: my manager on how fast I learned the industry's nomenclature. Below it, the Opportunities list with a row opened on its recommendation, and the Insights screen with a liquid-loading chart.",
        },
      ],
    },
    {
      id: "two-pieces",
      n: "02",
      heading: "Two pieces of work",
      maxim: "Same client, opposite audience.",
      standfirst:
        "The product is used daily by the people who run the wells; the website is read by people who will never log in. Open a tile and the piece unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "product",
              n: "01",
              title: "The product",
              maxim: "Operators, not analysts, read these charts, so every number keeps the name the industry gives it.",
              standfirst:
                "Goal: show an operator what a group of wells is doing today and which action on which well is worth the most.",
              cover: { src: `${W}/03.png` },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/02.png`,
                  caption:
                    "From the project board: an AI company in the energy and drilling industry. My tasks were mockups and clickable prototypes, with a UX designer and a researcher. Below, three screens: Insights for one well, Insights with a liquid-loading chart, and the Well Performance map.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/03.png`,
                  caption:
                    "Dashboard for one group of wells. The production summary chart on top; the largest deferrals on the right; today's opportunities below, traced from lift type through opportunity and action to cash flow.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/04.png`,
                  caption:
                    "Well Performance: a table of wells with setpoint and workover opportunities. One row is opened on its setpoint chart, with the current setpoint marked, and its valve pressure traverse.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/06.png`,
                  caption:
                    "Artificial Lift Timing Selection for one well. Lift scenarios are compared by NPV in the table on the left; the IPR and VLP curves for each are drawn on the right.",
                },
              ],
            },
            {
              id: "website",
              n: "02",
              title: "The website",
              maxim: "A site that makes a data-dense product legible to someone who will never open it.",
              standfirst:
                "Goal: tell a reader what Xecta's products do, and get them to the contact form, on desktop, tablet, and phone.",
              cover: { src: `${W}/website-01.png` },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/website-01.png`,
                  caption:
                    "From the website board: my role was the UX and UI of the website and the work with the developers. The team was one more UI designer and two developers. The home page with the Drilling menu open.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/website-02.png`,
                  caption:
                    "The home page, a services section, the Operational Efficiency product page, and the contact form, each on desktop and on a phone.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/website-03.png`,
                  caption:
                    "The Well Performance Analysis product page on desktop, beside the offices block on a phone.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/website-04.png`,
                  caption:
                    "The Artificial Lift Timing and Selection page and the Well Performance Analysis page on a tablet.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/website-05.png`,
                  caption:
                    "xecta.com on phones: the home page, the product pages, the Unconventionals section, and the offices.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
