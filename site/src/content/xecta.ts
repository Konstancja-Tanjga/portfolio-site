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
 * research, no measured result. The sheet in 02 draws the tools the
 * metadata strip names and nothing more.
 *
 * The three product screens (boards 03, 04 and 06) are each one desktop
 * screen set in a photograph. The application rectangle is cropped out of
 * each into /work/xecta/screens/ and composited into a MacBook frame in
 * /work/xecta/device/, so the cover, the carousel and the dossier show the
 * product the way every other study does. The board with typeset text
 * (02) is folded and opens on demand.
 *
 * The cover layers, the carousel and chapter 04 come from the product's
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
              key: "What",
              value:
                "A production surveillance and optimisation platform for upstream oil and gas, and the company website, xecta.com.",
            },
            {
              key: "Problem",
              value:
                "Heavy data visualisation for operators who are not analysts, in an industry with its own name for every number.",
            },
            {
              key: "My role",
              value:
                "Mockups and clickable prototypes for the product, written up in Confluence; UX and UI for the website, with the developers who built it.",
            },
            {
              key: "Decision 1",
              value:
                "Every number keeps the industry's own name on the screen: lift type, deferral, setpoint, NPV, IPR, and VLP.",
              shot: { frame: "macbook", src: `${D}/lift-timing-1600.webp`, alt: "Artificial Lift Timing Selection: lift scenarios compared by NPV, with IPR and VLP curves", to: "#product" },
            },
            {
              key: "Decision 2",
              value:
                "A dashboard for a group of wells leads from the production summary to today's opportunities, traced from lift type to cash flow.",
              shot: { frame: "macbook", src: `${D}/dashboard-1600.webp`, alt: "The dashboard for one group of wells, with today's opportunities under the production summary", to: "#product" },
            },
            {
              key: "Decision 3",
              value:
                "The website says what the product does to a reader who will never log in, on desktop, tablet, and phone.",
              shot: { src: `${W}/website-02.png`, alt: "xecta.com pages on a laptop and on phones", to: "#website" },
            },
            {
              key: "Outcome",
              value:
                "Not measured. On record: the product mockups and prototypes, and xecta.com.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A web application for the people who run the wells, and a website for the people who buy it. Every part of the product, one screen per slide.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/home-2400.webp`, frame: "macbook", title: "Wells", body: "Each well a tile with its severity, its chart, and its issue icons; a banner offers the seven wells with the highest opportunity." },
            { src: `${D}/well-hover-2400.webp`, frame: "macbook", title: "One well", body: "A tile hovered: the chart, the opportunity and the recommendation, the latest comment." },
            { src: `${D}/list-view-2400.webp`, frame: "macbook", title: "List view", body: "The same wells as rows: severity, opportunity, production delta, recommendation, issues, status." },
            { src: `${D}/pro-summary-2400.webp`, frame: "macbook", title: "Pro summary", body: "One well: Issues Detected, Opportunity Found, and Forecasting as cards, under five tabs." },
            { src: `${D}/issues-2400.webp`, frame: "macbook", title: "Issues", body: "Water cut, pressure, oil rate, and water rate for the well, each over time." },
            { src: `${D}/opportunity-2400.webp`, frame: "macbook", title: "Opportunity", body: "ESP performance, the historical recommendations, and opportunities executed, by well or by time." },
            { src: `${D}/comments-2400.webp`, frame: "macbook", title: "Comments", body: "The team's notes on the well beside the summary, with a field for a new one." },
            { src: `${D}/individual-well-2400.webp`, frame: "macbook", title: "Well centric", body: "The manager view by well: gas, oil, and opportunity totals, a map, and the month-to-date forecast." },
            { src: `${D}/production-2400.webp`, frame: "macbook", title: "Production centric", body: "The manager view by production: total value, the variance, the forecast, and the opportunities by well." },
            { src: `${D}/network-2400.webp`, frame: "macbook", title: "Network optimisation", body: "The well model as a table: base, high, and low cases, the limits of each well, and its status." },
            { src: `${W}/website-01.png`, title: "xecta.com", body: "The home page, with the Drilling menu open on its three product lines." },
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
            "<strong>Heavy data visualisation</strong> for readers who are not analysts: charts, Sankeys, and traverses inside a complex design system and its patterns.",
            "<strong>A distributed US team, worked remotely,</strong> so the product work was documented in Confluence and read without me in the room.",
          ],
        },
      ],
    },
    {
      id: "how-i-worked",
      n: "02",
      heading: "How I worked",
      standfirst: "The product as a clickable prototype, the website as pages for three screen sizes, each handed to the people who built on it.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Figma", mark: "figma", what: "the product prototype, the website pages" },
              { name: "Confluence", mark: "", glyph: "C", what: "the product documentation" },
              { name: "Photoshop", mark: "", glyph: "Ps", what: "website" },
              { name: "Illustrator", mark: "", glyph: "Ai", what: "website" },
            ],
            stations: [
              { tool: "Figma", mark: "figma", file: "product prototype", title: "Mockups and clickable prototypes", body: "With a UX designer and a researcher; written up in Confluence for a distributed US team.", image: { src: `${D}/home-1600.webp`, alt: "The Wells page of the prototype in the MacBook" } },
              { tool: "Figma, Photoshop, Illustrator", mark: "figma", file: "pages", title: "The website, page by page", body: "Desktop, tablet, and phone, with one more UI designer.", image: { src: `${W}/website-04.png`, alt: "Two product pages of xecta.com on a tablet" } },
              { tool: "xecta.com", mark: "", file: "built", title: "Built by two developers", body: "Well Performance Analysis on desktop; the offices on a phone.", image: { src: `${W}/website-03.png`, alt: "The Well Performance Analysis page of xecta.com on a laptop, beside the offices block on a phone" } },
            ],
            block: [
              ["Sheet", "How I worked for Xecta"],
              ["Drawn for", "Two pieces of work, from the product prototype to the website the developers built"],
            ],
          },
        },
      ],
    },
    {
      id: "two-pieces",
      n: "03",
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
                "Goal: what a group of wells is doing today, and which action on which well is worth the most.",
              cover: { src: `${D}/dashboard-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "tabs",
                  label: "The product screens",
                  items: [
                    {
                      label: "Dashboard",
                      blocks: [
                        {
                          kind: "shot",
                          width: "wall",
                          src: `${D}/dashboard-2400.webp`,
                          frame: "macbook",
                          caption:
                            "One group of wells. The production summary on top; the largest deferrals on the right; today's opportunities below, traced from lift type through opportunity and action to cash flow.",
                        },
                      ],
                    },
                    {
                      label: "Well performance",
                      blocks: [
                        {
                          kind: "shot",
                          width: "wall",
                          src: `${D}/well-performance-2400.webp`,
                          frame: "macbook",
                          caption:
                            "A table of wells with setpoint and workover opportunities. One row opened on its setpoint chart, the current setpoint marked, and its valve pressure traverse.",
                        },
                      ],
                    },
                    {
                      label: "Lift timing",
                      blocks: [
                        {
                          kind: "shot",
                          width: "wall",
                          src: `${D}/lift-timing-2400.webp`,
                          frame: "macbook",
                          caption:
                            "Artificial Lift Timing Selection for one well. Lift scenarios compared by NPV on the left; the IPR and VLP curves for each on the right.",
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "shot",
                  width: "wall",
                  src: `${W}/02.png`,
                  folded: true,
                  caption:
                    "The project board: three earlier screens. Insights for one well, Insights with a liquid-loading chart, and the Well Performance map.",
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
                  kind: "tabs",
                  label: "xecta.com by screen size",
                  items: [
                    {
                      label: "Home",
                      blocks: [
                        { kind: "shot", width: "wall", src: `${W}/website-01.png`, caption: "The home page with the Drilling menu open; a product page on a tablet; the offices on a phone." },
                      ],
                    },
                    {
                      label: "Desktop and phone",
                      blocks: [
                        { kind: "shot", width: "wall", src: `${W}/website-02.png`, caption: "The home page, a services section, the Operational Efficiency page, and the contact form, each on desktop and on a phone." },
                      ],
                    },
                    {
                      label: "Product page",
                      blocks: [
                        { kind: "shot", width: "wall", src: `${W}/website-03.png`, caption: "Well Performance Analysis on desktop, beside the offices block on a phone." },
                      ],
                    },
                    {
                      label: "Tablet",
                      blocks: [
                        { kind: "shot", width: "wall", src: `${W}/website-04.png`, caption: "The Artificial Lift Timing and Selection page and the Well Performance Analysis page on a tablet." },
                      ],
                    },
                    {
                      label: "Phones",
                      blocks: [
                        { kind: "shot", width: "wall", src: `${W}/website-05.png`, caption: "The home page, the product pages, the Unconventionals section, and the offices." },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "prototype",
      n: "04",
      heading: "Prototype",
      standfirst: "Two walks through the Figma prototype along its own links.",
      blocks: [
        {
          kind: "tabs",
          label: "The prototype, clicked through",
          items: [
            {
              label: "Wells to issues",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${W}/clips/well-to-issues.mp4`,
                  poster: `${W}/clips/well-to-issues.webp`,
                  title: "From the wells to one well's issues",
                  caption:
                    "The wells, one tile opened on hover, Pro summary, the Issues and Opportunity tabs, back to the summary, and the comments.",
                },
              ],
            },
            {
              label: "Network optimisation",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${W}/clips/network-optimisation.mp4`,
                  poster: `${W}/clips/network-optimisation.webp`,
                  title: "Network optimisation, step by step",
                  caption:
                    "The frames in the order the file numbers them: a status changed, the contact menu, a row selected, and the model switched from wells to flowlines, then to separators.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
