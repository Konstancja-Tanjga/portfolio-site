import type { CaseStudy } from "./types";

export const dms: CaseStudy = {
  slug: "applus-documents",
  title: "APplus Documents",
  what: "Document management for the same platform, designed from zero",
  lead:
    "Versioning, metadata, search, permissions and retention over documents that lived in network drives and mail threads.",
  status: { state: "held", until: "5 October 2026", why: "The product is generally available then; until it is, the reasoning is here and the screens are not." },
  cover: {
    kicker: "PRODUCT DESIGN · ENTERPRISE SOFTWARE",
    headline: ["Document", "Management"],
    subline: "for APplus ERP",
    stamp: "VERSIONING · METADATA · SEARCH · PERMISSIONS · RETENTION",
    credit: "Lead designer · Asseco Solutions · 2026",
    shot: { slot: "Cover — the digital dossier, on the yellow field. 3232×2528." },
  },
  meta: [
    { label: "Role", value: "Lead designer — sole designer on the product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP — Documents" },
    { label: "Design system", value: "FOX v2.3" },
    { label: "Scope", value: "11 functional areas" },
    { label: "Period", value: "December 2025 – October 2026" },
  ],
  chapters: [
    {
      id: "claim",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I don't hand over static mockups. I hand over a clickable React prototype built on FOX, and its code goes into the implementation.</p>",
        },
        { kind: "shot", slot: "Hero — digital dossier, desktop. Export at 2400px wide." },
      ],
    },
    {
      id: "scope",
      heading: "Owned end to end across eleven functional areas",
      blocks: [
        {
          kind: "points",
          items: [
            "Document services and search",
            "Retention and audit-proof archiving",
            "The digital dossier structure",
            "A migration assistant",
            "Platform integration",
          ],
        },
      ],
    },
    {
      id: "permissions",
      heading: "A permission model a non-technical administrator can reason about",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Three layers: 17 default-deny system permissions, content permissions by metadata predicate, and three protection classes. Multi-role assignment resolves additively, so one role's deny never removes another's grant.</p>",
        },
        {
          kind: "passage",
          html:
            "<p>Two default roles ship with the product. The rest are the customer's, defined against the existing identity provider.</p>",
        },
        { kind: "shot", slot: "Diagram — the three permission layers and how a multi-role assignment resolves." },
      ],
    },
    {
      id: "migration",
      heading: "Getting the existing documents in",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>TODO — the migration assistant: what a customer starts with, what the assistant asks them, and what happens to documents it cannot classify.</p>",
        },
      ],
    },
  ],
};
