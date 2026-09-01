import type { CaseStudy } from "./types";

/**
 * Images recovered from the Behance gallery — the original project
 * documentation is no longer accessible, so the exports on Behance are
 * the record. Order matches the gallery.
 */
export const volvo: CaseStudy = {
  slug: "volvo-erp",
  title: "Volvo Group ERP",
  what: "A legacy ERP redesign, and a design system built on the corporate parent system",
  lead:
    "Baldo, the ERP Volvo Group runs for resource and access management across the whole group — inventory, production, finance and logistics. Twenty years old, largely unchanged since 2007. I redesigned it and built its design system on the corporate Volvo Design System, developing it to a later major version.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Enterprise", "Resource Planning"],
    subline: "for Volvo Group",
    stamp: "LEGACY REDESIGN · DESIGN SYSTEM · ACCESS AND PERMISSIONS",
    credit: "Senior UX/UI designer · Volvo Group · 2022–2023",
    shot: { src: "/work/volvo-erp/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Senior UX/UI designer, contract" },
    { label: "Company", value: "Volvo Group — Baldo ERP" },
    { label: "Team", value: "4 Angular developers, a BA, a product owner, a PM" },
    { label: "Design system", value: "Built on the Volvo Design System, taken to a later major version" },
    { label: "Scope", value: "Resource and access management across the group" },
    { label: "Period", value: "August 2022 – August 2023" },
  ],
  chapters: [
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      maxim:
        "A twenty-year-old application is not a design problem with a long history. It is a live dependency you are not allowed to break.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Baldo is the ERP Volvo Group uses for resource and access management across the whole group, covering inventory management, production, finance and logistics.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/02.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/01.jpg" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/03.png" },
      ],
    },
    {
      id: "hard-brief",
      n: "02",
      heading: "Why it was hard",
      standfirst:
        "Unchanged in substance since 2007: hard to maintain, impossible to scale, a standing security risk, and slow to use for the people who had no alternative.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Redesigning a large legacy application is a risk in itself — the complexity is the point of the exercise, and every screen is load-bearing for somebody. TODO — the constraint that mattered most, and one concrete example of what it ruled out.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/04.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/05.jpg" },
      ],
    },
    {
      id: "research",
      n: "03",
      heading: "Research",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Interviews and moderated usability tests with people who use the system daily. TODO — what came back, and the one finding that changed the design rather than confirming it.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/06.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/07.png" },
      ],
    },
    {
      id: "access",
      n: "04",
      heading: "Access and permissions",
      maxim:
        "Roles, entitlements and approval paths are the product. Everything else is a view onto them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The access and permissions redesign: roles, entitlements, approval paths. TODO — the model, and what a non-technical administrator had to be able to reason about without help.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/08.jpg" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/09.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/10.png" },
      ],
    },
    {
      id: "design-system",
      n: "05",
      heading: "Design system",
      standfirst:
        "Not a system from nothing: a product-level system built on the corporate Volvo Design System, extending its tokens into the components the product was rebuilt on.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — what the parent system gave and what it did not, where I extended rather than overrode, and how the product system was taken to a later major version.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/11.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/12.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/13.png" },
      ],
    },
    {
      id: "delivery",
      n: "06",
      heading: "Delivery",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Delivered with four Angular developers, a business analyst, a product owner and a project manager. TODO — how the work actually moved between design and the four developers.</p>",
        },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/14.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/15.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/16.png" },
      ],
    },
    {
      id: "handoff",
      n: "07",
      heading: "What it changed",
      blocks: [
        { kind: "shot", width: "wall", src: "/work/volvo-erp/17.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/18.png" },
        { kind: "shot", width: "wall", src: "/work/volvo-erp/19.png" },
        {
          kind: "passage",
          html:
            "<p>TODO — what shipped, and one thing I would do differently. The original project documentation is no longer accessible to me, so this chapter is written from memory and the exports above; keep it to what you can stand behind.</p>",
        },
      ],
    },
  ],
};
