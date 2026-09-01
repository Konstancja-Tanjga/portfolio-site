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

## The walls

Each project is one long vertical page — cover, the reasoning, the screens, the
numbers. The same chapter vocabulary throughout, so the set reads as one body of
work. Three bands, because fifteen pages of equal weight is not a hierarchy.

**Products** — shipped software.

| Project | What it is | Status |
|---|---|---|
| APplus Analytics | BI for an ERP platform, designed from zero | Held to 5 Oct 2026 |
| APplus Documents | Document management, designed from zero | Held to 5 Oct 2026 |
| Elly | The platform's first AI assistant, designed from zero | Live |
| APplus Flow mode | Logistics, redesigned around status and ownership | Live |
| Volvo Group ERP | A legacy ERP redesign, plus a system on the corporate parent | Live |
| Xecta | Production surveillance for upstream oil and gas | Live |
| Riyad Bank — Digital Insights | Financial education from scratch, shipped to both stores | Live |
| MojePZU | Insurance and healthcare at consumer scale | Live |
| Deloitte career site | The global career site, designed from zero | Live |
| Tourist app | A mobile guide for a Polish town, with two other designers | Live |

**Practice** — how the work gets done.

| Project | What it is |
|---|---|
| FOX design system | Nearly 80 components, six consuming products, v3 migration |
| Futures Thinking | A foresight workshop framework I designed and facilitated |

**Recognition** — short pages, not case studies.

| | |
|---|---|
| ERP System of the Year 2025 | APplus, winner in the User Experience category |
| Bydgoszcz Design Challenge | Competition entry, distinction |
| Possible Reality | Speculative design, WUD Silesia 10.5, distinction |

Plus **Watercolours** at `/watercolours` — architecture, birds, animals, people.
Deliberately off the work page: it says something true, and it should not be the
second thing a hiring manager scrolls past.

Earlier, without a page: Wolters Kluwer, the Deloitte wellbeing platform, and
other selected work.

**Held** means the wall exists and its URL works, but the product it describes is
not generally available yet, so it is not listed on the work page and its screens
are not published. Flip `status` to `{ state: "live" }` in the content file on
release day.

## The site is the artefact

The point of building this rather than posting to Behance: the site is a real
consumer of my own published design system, not a description of one.

`@bighatpoland/ui` — [bighat-design-system](https://github.com/bighatpoland/bighat-design-system),
39 components, two token layers, WCAG AA enforced in CI — is installed as a
dependency. Its `styles.css` supplies every colour, radius, elevation and the
dark theme; its components render the badges, the surface-rule chips and the
empty states. The footer prints the installed version, read from the package at
build time, so the claim is checkable rather than asserted.

[`site/src/styles/tokens.css`](site/src/styles/tokens.css) is what the site adds
on top, and only that: a display type scale the library has no opinion about
(its scale tops out at 26px, right for an application and far too small for a
cover), the wall widths, the vertical rhythm of a project page, and one brand
value — `--bh-site-mark`, green.400 from the library's own primitive ramp.

[`site/src/system`](site/src/system) holds the editorial components the library
does not have and should not: the wall, the cover, the persona set, the use-case
template. They consume the library's semantic tokens and nothing else.

```
site/src/
  content/          the walls, as data — never markup
    types.ts        the content model: cover, personas, steps, use cases, evolution
    watercolours.ts the painting gallery
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
  pages/            Home (three bands) · Case (a wall) · Watercolours · About
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
