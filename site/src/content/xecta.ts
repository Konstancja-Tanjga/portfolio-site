import type { CaseStudy } from "./types";

/**
 * Two pieces of work for one client: the product (2020–2021) and the
 * company website, xecta.com (2022). They were two pages until the
 * audit merged them; the role lines below are the ones the boards state.
 */
export const xecta: CaseStudy = {
  slug: "xecta",
  title: "Xecta: product and website",
  what: "A production surveillance platform for upstream oil and gas, and the company website",
  lead:
    "Two projects for Xecta, a Texas company that makes production surveillance and optimisation software for upstream oil and gas. The product is a web application with heavy data visualisation for operators who are not analysts. The second is the company website, xecta.com. I documented my product work in Confluence for a distributed US team.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · INDUSTRIAL ENERGY",
    headline: ["Production", "surveillance"],
    subline: "and optimisation for upstream oil and gas, and the company website",
    stamp: "DATA-DENSE · HEAVY VISUALISATION · CORPORATE SITE",
    credit: "Senior UX & UI designer · Xecta · 2020–2021 and 2022",
    shot: { src: "/work/xecta/00-cover.png" },
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
      value: "UX and UI design, with an additional UI designer and 2 developers",
    },
    { label: "Documentation", value: "Confluence" },
    { label: "Tools (website)", value: "Figma, Adobe Photoshop, Adobe Illustrator" },
    { label: "Period (product)", value: "April 2020 – July 2021" },
    { label: "Period (website)", value: "2022" },
  ],
  chapters: [
    {
      id: "product",
      n: "01",
      heading: "The product",
      maxim:
        "The people reading these charts are operators rather than analysts, and the industry has its own language for every number.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/02.png",
          caption:
            "From the project board: an AI company in the energy and drilling industry. My tasks were mockups and clickable prototypes, together with a UX designer and a researcher.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/03.png",
          caption:
            "Dashboard for one group of wells: the production summary chart, the largest deferrals, and today's opportunities traced from lift type to cash flow.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/04.png",
          caption:
            "Well Performance: a table of wells with setpoint and workover opportunities, one row opened on its setpoint chart and valve pressure traverse.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/05.png",
          caption:
            "From the project board: my manager on how fast I learned the industry's nomenclature, beside the Opportunities list and the Insights screen with a liquid-loading chart.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/06.png",
          caption:
            "Artificial Lift Timing Selection for one well: lift scenarios compared by NPV, with the IPR and VLP curves for each.",
        },
      ],
    },
    {
      id: "website",
      n: "02",
      heading: "The website",
      maxim:
        "A site that has to make a data-dense product legible to someone who will never open it.",
      standfirst:
        "Same client as the product, opposite audience: the product is used daily by the people who run the wells, the website is read by people who will never log in.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/website-01.png",
          caption:
            "From the website board: my role was the website's UX and UI and working with the developers. The team was one more UI designer and two developers.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/website-02.png",
          caption:
            "The home page, a services section, the Operational Efficiency product page and the contact form, on desktop and phone.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/website-03.png",
          caption:
            "The Well Performance Analysis product page on desktop, next to the offices block on a phone.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/website-04.png",
          caption:
            "The Artificial Lift Timing & Selection and Well Performance Analysis pages on a tablet.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/xecta/website-05.png",
          caption:
            "xecta.com on phones: the home page, product pages, the Unconventionals section and the offices.",
        },
      ],
    },
  ],
};
