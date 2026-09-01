# Konstancja Tanjga-Nawrot — portfolio

**Lead Designer / UX Engineer · Enterprise products · Design systems in code · AI**

Warsaw, CET · [tanjgakonstancja@gmail.com](mailto:tanjgakonstancja@gmail.com) · +48 787 855 880
Permanent or B2B contract, remote only

[Big Hat design system, in Storybook](https://konstancja-tanjga.github.io/bighat-design-system/) ·
[LinkedIn](https://linkedin.com/in/konstancja-tanjga) ·
[GitHub](https://github.com/konstancja-tanjga)

---

I design products and lead the implementation of the design system they run on.
Ten years in complex, data-rich software — ERP, banking, insurance, legal and
regulatory, industrial energy. Currently Lead Designer / UX Engineer for APplus
ERP (**ERP System of the Year 2025, UX category**), where I have designed two new
applications from zero, analytics and document management, plus the platform's
first AI assistant — all on the design system I built from nothing and still
develop.

Development receives a working React prototype built from those components, not a
picture of one. I review and merge component pull requests myself, across Angular,
React and web components.

- **Four products designed from zero.** APplus Analytics, APplus Documents and
  Elly, the platform's first AI assistant, plus a mobile finance product for Riyad
  Bank — discovery through to release.
- **Design system as code: nearly 80 components, six consuming products.** Built
  FOX from nothing and led its migration to v3 across product lines. I review and
  merge the component pull requests myself.
- **Research to running code, end to end.** Discovery, user interviews and
  usability testing, ideation, information architecture and design, then working
  React prototypes built from design system components — code ready for
  production, not a spec sheet to rebuild from.

## The nine walls

Each project is one long vertical page — cover, the reasoning, the screens, the
numbers. Same eight chapters, same components, so nine projects read as one body
of work.

| # | Project | What it is | Status |
|---|---|---|---|
| 1 | APplus Analytics | BI for an ERP platform, designed from zero | Held to 5 Oct 2026 |
| 2 | FOX design system | Nearly 80 components, six consuming products | Live |
| 3 | APplus Documents | Document management, designed from zero | Held to 5 Oct 2026 |
| 4 | Elly | The platform's first AI assistant | Live |
| 5 | Volvo Group ERP | Redesign, plus a system on the corporate parent system | Live |
| 6 | Xecta | Production surveillance, upstream oil and gas | Live |
| 7 | MojePZU | Insurance and healthcare at consumer scale | Live |
| 8 | Riyad Bank | Financial education from scratch, 3D navigation, illustration system | Live |
| 9 | Futures Thinking | A foresight workshop framework I designed and facilitated | Live |

Earlier, without a wall: Wolters Kluwer (legal and regulatory), Deloitte
(wellbeing platform and career site — HR Dream Team award).

**Held** means the wall exists and its URL works, but the product it describes is
not generally available yet, so it is not listed on the work page and its screens
are not published. Flip `status` to `{ state: "live" }` in the content file on
release day.

## The site is the artefact

The point of building this rather than posting to Behance: the site is a consumer
of its own design system. Everything on every page comes out of
[`site/src/system`](site/src/system) — the components, driven entirely from the
token layer in [`site/src/styles/tokens.css`](site/src/styles/tokens.css). No CSS
framework, no raw values outside the token file.

```
site/src/
  content/          nine walls, as data — never markup
    types.ts        the content model: cover, personas, steps, use cases, evolution
  system/           Big Hat — the closed set of components every page renders with
    Wall.tsx        one column, three widths: column · wall · bleed
    Cover.tsx       the yellow field every project opens on
    Shot.tsx        images, single and 2-up
    Text.tsx        passage · points · pull · thesis · kicker
    Data.tsx        stats · spec · meta strip
    Personas.tsx    the four-up persona set
    Steps.tsx       a numbered flow: the rule, and why it isn't decoration
    UseCase.tsx     actor · trigger · precondition · flow · exits · rule it sets
    Evolution.tsx   how the design system moved, version by version
    Annotated.tsx   a screen with its zone map, legend and surface rules
  components/       page-level: masthead, chapter renderer, jump bar
  pages/            Home (the covers) · Case (a wall) · About
```

A wall is a list of chapters; a chapter is a list of blocks. Adding a section
means adding an object to a content file, not writing a component. If a wall needs
something the block set doesn't cover, the answer is a new block type plus a new
component in `system/` — not markup in a content file.

## Practice

| | |
|---|---|
| **Research & discovery** | In-depth interviews, contextual observation of real workflows, moderated and unmoderated usability testing, survey and analytics synthesis |
| **Structure & mapping** | Information architecture, navigation models and taxonomy for large multi-module systems; current-state workflow mapping, user journeys, personas |
| **Craft** | Figma (design systems, variants, variables and tokens, advanced prototyping, developer handoff), interaction and motion design, data visualisation, UX writing, HTML/CSS, Adobe Creative Suite |
| **Design system stack** | Storybook · Chromatic · Nexus · Git, pull requests, VS Code |
| **AI tooling** | Claude, Claude Code · Codex · Cursor · Figma Make · v0 · Vercel · Builder.io — agentic workflow with authored skills and a project constitution governing tool use |
| **Accessibility** | Contrast tokens so colour decisions can't fail silently · keyboard navigation and focus behaviour defined at component level · WCAG AA as a standing review criterion |
| **Domains** | Enterprise ERP · banking and payments · insurance and healthcare · legal and regulatory · industrial energy · desktop and mobile |
| **Languages** | Polish (native) · English (C2) · German and Spanish (basic) |

**Education** — MA English Philology, BA Management of Organisations, University of
Białystok. Interaction Design (UC San Diego), Creativity & A.I. (Parsons), Google
UX Design, Graphic Design and UI/UX Design (CalArts).

**Recognition** — ERP System of the Year 2025, UX (APplus) · WUD Silesia 10.5
speculative design competition · HR Dream Team, Deloitte.

## Running it

```bash
cd site
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks, then builds to dist/
npm run preview   # serve the production build
```

Deployment, image specs and the checklist before publishing are in
[site/README.md](site/README.md).

## A note on FOX

FOX is Asseco Solutions' design system and belongs to them. This repository
describes how it is built, versioned and adopted; it contains none of its code and
none of its assets. The public design system is
[Big Hat](https://konstancja-tanjga.github.io/bighat-design-system/), which is
mine and MIT-licensed, and it is what this site is built on.
