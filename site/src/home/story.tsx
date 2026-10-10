/**
 * The home page's own content: what the case studies do not carry.
 *
 * Kept as data for the same reason the walls are: the page renders
 * it, and the words can be edited without touching the layout.
 */

export const practices: { title: string; body: string }[] = [
  {
    title: "The design system is code",
    body:
      "Component APIs and tokens are authored in Figma, implemented as code, documented in Storybook, regression-tested in Chromatic and published to Nexus as versioned packages. Product teams install them; nobody redraws them.",
  },
  {
    title: "I merge the pull requests",
    body:
      "Across Angular, React and web components. I take part in code review and check Chromatic snapshots against the design intent myself. Prototypes are running applications built from production components.",
  },
  {
    title: "AI, used agentically",
    body:
      "Claude and Codex in VS Code every day for component work, refactoring and documentation. I write reusable agent skills that encode the system's components and rules, so generated UI comes out on-system rather than plausibly wrong.",
  },
  {
    title: "AI as a product",
    body:
      "Designed and shipped Elly, the product's first assistant: streaming answers over the documentation with cited sources, confidence and error states, and a handoff to a person when the system should not act alone. Now designing AI-driven analysis and dashboards.",
  },
  {
    title: "One model for every module",
    body:
      "Led the redesigns that gave the platform a single navigation, content and interaction model across all of its modules, on desktop and on mobile.",
  },
  {
    title: "Accessibility in the primitives",
    body:
      "Contrast tokens so a colour decision cannot fail silently; keyboard navigation and focus behaviour at component level; WCAG as a standing review criterion, not a pre-release audit.",
  },
  {
    title: "Two senior designers with me",
    body:
      "I lead a team of two. Work is split by application, reviewed together in a weekly critique, and held to the same system: every frame points at a component, every component has a Storybook story, and nobody ships what the others have not seen.",
  },
  {
    title: "Desktop, and the shop floor",
    body:
      "APplus runs on the planner's two monitors and on a phone at a machine. One navigation and one content model serve both; what changes is the density, the touch targets and what goes into the bottom bar.",
  },
  {
    title: "A research rhythm",
    body:
      "Quarterly interviews, journey mapping, usability testing every release. The team's decisions are argued from what users were seen to do, not from what was assumed.",
  },
];

export const career: { years: string; org: string; role: string; what: string }[] = [
  {
    years: "2023 –",
    org: "Asseco Solutions DACH",
    role: "Lead Designer, APplus ERP",
    what: "Team of two. Design system as code, three applications from zero, the platform's first AI assistant. ERP System of the Year, Gold in User Experience in 2025 and again in 2026.",
  },
  {
    years: "2022 – 2023",
    org: "Volvo Group",
    role: "Senior UX/UI Designer",
    what: "Enterprise ERP for core operations: end-to-end flows, information architecture and interaction models across interconnected modules.",
  },
  {
    years: "2021 – 2022",
    org: "Wolters Kluwer",
    role: "Senior User Interface Designer",
    what: "wolterskluwer-online.de, an expert platform for German lawyers, within the global Digital eXperience Group.",
  },
  {
    years: "2021 – 2022",
    org: "Xecta",
    role: "Senior UX & UI Designer",
    what: "Network optimisation products for the energy industry: dense data visualisation in the vocabulary of drilling engineers.",
  },
  {
    years: "2019",
    org: "PZU",
    role: "UI Designer",
    what: "Redesign of MojePZU, the customer portal and app of Poland's largest insurer.",
  },
  {
    years: "2017 – 2021",
    org: "Deloitte",
    role: "Project Manager, regional coordinator",
    what: "Centre of Expertise coordination for Central Europe; an employee wellbeing platform awarded HR Dream Team.",
  },
  {
    years: "2018 –",
    org: "Big Hat",
    role: "Freelance, and my own design system",
    what: "A collective of freelancers. Bydgoszcz Design Challenge, Gdynia Design Days, an award at WUD Silesia for speculative design. @bighatpoland/ui, MIT.",
  },
];

export const offScreen: { src: string; alt: string; caption: string }[] = [
  {
    src: "/watercolours/birds/02-gaviota-i-monstera-copy-thumb.jpg",
    alt: "Watercolour of a gull holding a red berry, framed, between two monstera plants",
    caption: "Gull, Cádiz",
  },
  {
    src: "/watercolours/birds/01-flaming-na-krzesle-w-ramce-copy-thumb.jpg",
    alt: "Watercolour of a flamingo with spattered paint, in a wooden frame on a chair",
    caption: "Flamingo",
  },
  {
    src: "/watercolours/architecture/new-york/02-guggenheim-museum-new-york-ramka-thumb.jpg",
    alt: "Ink and wash sketch of the Guggenheim Museum in New York, in a white frame",
    caption: "Guggenheim, on location",
  },
];
