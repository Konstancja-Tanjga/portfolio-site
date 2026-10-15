import type { CaseStudy } from "./types";

/**
 * Two pieces of work for one client: the product and the company website,
 * xecta.com. The period, April 2020 to July 2021, is the one on the
 * owner's CV (October 2026), which covers both. They were two pages until
 * the audit merged them; the role lines below are the ones the boards state.
 *
 * Rebuilt to docs/case-study-kit/RULES.md in October 2026. The two
 * pieces sit in one dossier, one tile each, so the deep links
 * #product and #website still open the right place. No chapter was
 * written for a slot the boards have nothing for: no personas, no
 * research, no handoff, no measured result.
 *
 * The three product screens (boards 03, 04 and 06) are each one desktop
 * screen set in a photograph. The application rectangle is cropped out of
 * each into /work/xecta/screens/ and composited into a MacBook frame in
 * /work/xecta/device/, so the cover, the carousel and the dossier show the
 * product the way every other study does. The board with typeset text
 * (02) is folded and opens on demand.
 *
 * The cover layers, the carousel and chapter 03 come from the product's
 * Figma prototype ("Unconv", page 0:1), exported at 8/3 so that a 1440 px
 * frame fills the 3840 px laptop screen. The names in the comments panel,
 * the user's name in the greeting, and the two screen dates that carry a
 * year are blurred. The clips walk the prototype's own links; the network
 * optimisation clip follows the frames in the order the file numbers them.
 */
const W = "/work/xecta";
const D = "/work/xecta/device";

export const xecta: CaseStudy = {
  slug: "xecta",
  title: "Xecta: product and website",
  what: "A production surveillance platform for upstream oil and gas, and the company website",
  lead:
    "Two projects for Xecta, a Texas company that makes production surveillance and optimisation software for upstream oil and gas. The first is a web application with heavy data visualisation for operators who are not analysts. The second is the company website, xecta.com. I documented the product work in Confluence for a distributed US team.",
  leadAccent: { text: "production surveillance and optimisation software for upstream oil and gas", hex: "#e3d2ad" },
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Production", "surveillance"],
    subline: "and optimisation for upstream oil and gas, and the company website",
    stamp: "DATA-DENSE · HEAVY VISUALISATION · CORPORATE SITE",
    credit: "Senior UX & UI designer · Xecta · 2020 to 2021",
    art: { src: "/work/xecta/device/home-2400.webp" },
    shot: { src: "/work/xecta/device/home-2400.webp" },
    motif: "network",
    layers: [
      { src: "/work/xecta/device/home-2400.webp", label: "Wells" },
      { src: "/work/xecta/device/pro-summary-2400.webp", label: "Pro summary" },
      { src: "/work/xecta/device/opportunity-2400.webp", label: "Opportunity" },
      { src: "/work/xecta/device/production-2400.webp", label: "Production centric" },
      { src: "/work/xecta/device/network-2400.webp", label: "Network optimisation" },
      { src: "/work/xecta/device/website-01-2400.webp", label: "xecta.com" },
    ],
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
    { label: "Period", value: "April 2020 to July 2021" },
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
                "Xecta, a Texas company, makes production surveillance and optimisation software for upstream oil and gas. Two projects for it: the product and the company website.",
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
                "April 2020 to July 2021. The product with a UX designer and a researcher; the website with a UI designer and two developers.",
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
            { src: `${D}/home-2400.webp`, frame: "macbook", title: "Wells", body: "Each well a tile with its severity, its chart, and its issue icons, under the rates and opportunities at the top. A banner offers the seven wells with the highest opportunity." },
            { src: `${D}/home-alert-2400.webp`, frame: "macbook", title: "Alert", body: "The same page with a red banner: four critical wells, and a link to check their issues." },
            { src: `${D}/opportunity-sorted-2400.webp`, frame: "macbook", title: "Opportunity selected", body: "The well tiles with Opportunity selected, in a different order." },
            { src: `${D}/well-hover-2400.webp`, frame: "macbook", title: "One well", body: "Hovering a tile opens a larger card: the chart, the opportunity and the recommendation, the latest comment, View More, and Done." },
            { src: `${D}/list-view-2400.webp`, frame: "macbook", title: "List view", body: "The same wells as rows: severity, opportunity, production delta, recommendation, issues, and status." },
            { src: `${D}/pro-summary-2400.webp`, frame: "macbook", title: "Pro summary", body: "Insights for one well: Issues Detected, Opportunity Found, and Forecasting as cards, under tabs for summary, issues, opportunity, production, and forecasting." },
            { src: `${D}/issues-2400.webp`, frame: "macbook", title: "Issues", body: "Water cut, pressure, oil rate, and water rate for the well, each over time." },
            { src: `${D}/opportunity-2400.webp`, frame: "macbook", title: "Opportunity", body: "ESP performance, the historical recommendations, and opportunities executed, by well or by time." },
            { src: `${D}/constraints-2400.webp`, frame: "macbook", title: "Constraints", body: "A panel over the Opportunity tab for entering the well's constraint values." },
            { src: `${D}/comments-2400.webp`, frame: "macbook", title: "Comments", body: "The team's notes on the well beside the summary, with a field for a new one." },
            { src: `${D}/individual-well-2400.webp`, frame: "macbook", title: "Well centric", body: "The manager view by well: gas, oil, and opportunity totals, production value per well, issues, opportunities, recommendations, a map, and the month-to-date forecast." },
            { src: `${D}/well-time-2400.webp`, frame: "macbook", title: "Time centric", body: "The manager view over time: production value, production against target, issues, opportunities, and recommendations." },
            { src: `${D}/production-2400.webp`, frame: "macbook", title: "Production centric", body: "The manager view by production: total production value, the variance, a map, the forecast, and issues, opportunities, and recommendations by well." },
            { src: `${D}/network-2400.webp`, frame: "macbook", title: "Network optimisation", body: "The well model as a table, with base, high, and low cases, the limits of each well, and its status." },
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
              cover: { src: `${D}/dashboard-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/02.png`,
                  folded: true,
                  caption:
                    "From the project board: an AI company in the energy and drilling industry. My tasks were mockups and clickable prototypes, with a UX designer and a researcher. Below, three screens: Insights for one well, Insights with a liquid-loading chart, and the Well Performance map.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/dashboard-2400.webp`,
                  frame: "macbook",
                  caption:
                    "Dashboard for one group of wells. The production summary chart on top; the largest deferrals on the right; today's opportunities below, traced from lift type through opportunity and action to cash flow.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/well-performance-2400.webp`,
                  frame: "macbook",
                  caption:
                    "Well Performance: a table of wells with setpoint and workover opportunities. One row is opened on its setpoint chart, with the current setpoint marked, and its valve pressure traverse.",
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/lift-timing-2400.webp`,
                  frame: "macbook",
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
    {
      id: "prototype",
      n: "03",
      heading: "Prototype",
      standfirst: "The path the use-case notes in the Figma file describe, then two walks through the prototype along its own links.",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Wells", body: "Every well a tile, with a banner for the alerts that matter today." },
            { title: "One well", body: "The tile opens into a card with the well's details." },
            { title: "Pro summary", body: "The well overview: issues detected, opportunity found, and the forecast." },
            { title: "Deep dive", body: "Each tab goes a level deeper: issues, opportunity, production, and forecasting." },
            { title: "Network optimisation", body: "The well model as a table, where each row's limits are entered and its status set." },
          ],
          note: "From the use-case notes beside the frames in the prototype file.",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: `${W}/clips/well-to-issues.mp4`,
          poster: `${W}/clips/well-to-issues.webp`,
          title: "From the wells to one well's issues",
          caption:
            "The Figma prototype, clicked through: the wells, one tile opened on hover, Pro summary, the Issues and Opportunity tabs, back to the summary, and the comments.",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          width: "wall",
          src: `${W}/clips/network-optimisation.mp4`,
          poster: `${W}/clips/network-optimisation.webp`,
          title: "Network optimisation, step by step",
          caption:
            "The network optimisation frames in the order the file numbers them: a status changed, the contact menu, a row selected, and the model switched from wells to flowlines, then to separators.",
        },
      ],
    },
  ],
};
