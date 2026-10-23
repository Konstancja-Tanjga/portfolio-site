/**
 * The home page's own content: what the case studies do not carry.
 *
 * Kept as data for the same reason the walls are: the page renders
 * it, and the words can be edited without touching the layout.
 */

export const career: { years: string; org: string; role: string; what: string }[] = [
  {
    years: "2023 –",
    org: "Asseco Solutions DACH",
    role: "Lead Designer, UX Engineer",
    what: "APplus ERP. Team of two senior designers. Design system as code, four products from zero, the platform's first AI assistant. ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026.",
  },
  {
    years: "2022 – 2023",
    org: "Volvo Group",
    role: "Senior UX/UI Designer",
    what: "Enterprise ERP for core operations: end-to-end flows, information architecture, and interaction models across interconnected modules.",
  },
  {
    years: "2021 – 2022",
    org: "Wolters Kluwer",
    role: "Senior User Interface Designer",
    what: "wolterskluwer-online.de, an expert platform for German lawyers, within the global Digital eXperience Group.",
  },
  {
    years: "2020 – 2021",
    org: "Xecta",
    role: "Senior UX & UI Designer",
    what: "Network optimisation products for the energy industry: dense data visualisation in the vocabulary of drilling engineers.",
  },
  {
    years: "",
    org: "PZU",
    role: "UI Designer",
    what: "Redesign of MojePZU, the customer portal and app of Poland's largest insurer.",
  },
  {
    years: "2017 – 2021",
    org: "Deloitte",
    role: "Project Manager, CoE Regional Coordinator",
    what: "Centre of Expertise coordination for Central Europe; an employee wellbeing platform awarded HR Dream Team.",
  },
  {
    years: "2018 –",
    org: "Big Hat",
    role: "Freelance, and my own design system",
    what: "A collective of freelancers. Bydgoszcz Design Challenge 2022, distinction; Gdynia Design Days; a distinction at WUD Silesia for speculative design. @bighatpoland/ui, MIT.",
  },
];

export const offScreen: { src: string; alt: string; caption: string }[] = [
  {
    src: "/watercolours/birds/home-spoonbills-barbate-mockup-thumb.jpg",
    alt: "Ink and watercolour of two white Eurasian spoonbills wading across a wet orange beach under a pale blue sky, lettered Warzęchy z Barbate and dated 14.10.2026, in a pale oak frame on a console",
    caption: "Warzęchy z Barbate",
  },
  {
    src: "/watercolours/birds/home-flamingo-mockup-thumb.jpg",
    alt: "Watercolour of a pink flamingo walking on one raised leg, with splashes of crimson paint beside it, in a pale oak frame on a sideboard",
    caption: "Flamingo",
  },
  {
    src: "/watercolours/birds/home-gaviota-mockup-thumb.jpg",
    alt: "Watercolour of a grey and white gull walking left with something red in its yellow beak, in a white frame on a driftwood shelf",
    caption: "Gaviota",
  },
  {
    src: "/watercolours/birds/home-northern-bald-ibis-mockup-thumb.jpg",
    alt: "Watercolour of a northern bald ibis in profile, a long curved orange bill, a purple crest of loose feathers and dark green plumage with a copper patch on the wing, in a walnut frame on a brick wall",
    caption: "Ibis grzywiasty",
  },
];

/**
 * The sheet on the home page: one component, drawn through every tool it
 * passes on its way from the first option to the shipped screen. The
 * stations follow the design-to-code pipeline described on About (the
 * process block plus its four additions: Storybook, Chromatic, the merge
 * gate, Nexus), compressed to the eight stops the component itself passes
 * through. The words here are the short ones; the long ones stay on About.
 */
export const sheet = {
  stations: [
    { tool: "Claude Design", mark: "claude", file: "options", title: "Options, one chosen", body: "Several options, iterated with the requirements engineer and the PM." },
    { tool: "Figma", mark: "figma", file: "FOX v3 library", title: "Redrawn on FOX components", body: "Every value is a variable, and every component has Code Connect." },
    { tool: "Claude Code", mark: "claude", file: "Figma MCP", title: "Built to my spec, through MCP", body: "Claude Code reads the frame and implements the specification I write." },
    { tool: "Storybook", mark: "storybook", file: "fox-card", title: "Storybook is the contract", body: "Every state has a story, and design and engineering both check against it." },
    { tool: "Chromatic", mark: "chromatic", file: "snapshots", title: "Snapshots against the frames", body: "Visual regression on every pull request; I check the diff against the intent." },
    { tool: "GitHub", mark: "github", file: "pull request", title: "I review and merge", body: "Against the frames and the acceptance criteria, before anything ships." },
    { tool: "Nexus", mark: "sonatype", file: "package", title: "Versioned on Nexus", body: "Product teams install the package; nobody redraws it." },
    { tool: "APplus", mark: "", file: "Analytics", title: "Shipped, six times", body: "The same card on the Analytics dashboard, and five more products that install FOX." },
  ],
  tools: [
    { name: "Figma", mark: "figma", what: "library, Make, MCP, Code Connect" },
    { name: "Claude", mark: "claude", what: "Design, Code, two agent skills" },
    { name: "Codex", mark: "openai", what: "in VS Code" },
    { name: "Cursor", mark: "cursor", what: "editor" },
    { name: "Storybook", mark: "storybook", what: "the contract" },
    { name: "Chromatic", mark: "chromatic", what: "visual regression" },
    { name: "GitHub", mark: "github", what: "pull requests, I merge" },
    { name: "Nexus", mark: "sonatype", what: "versioned packages" },
    { name: "Angular", mark: "angular", what: "components" },
    { name: "React", mark: "react", what: "components" },
    { name: "Web components", mark: "", what: "one more target" },
  ],
  rhythm: [
    { every: "Weekly", what: "critique with my two designers", ticks: 52 },
    { every: "Quarterly", what: "interviews and a revision of the two agent skills", ticks: 4 },
    { every: "Every release", what: "usability testing", ticks: 0 },
  ],
  block: [
    ["Sheet", "How I work"],
    ["Drawn for", "One fox-card, from the first option to the shipped screen"],
    ["Tools", "Figma, Claude Design, Claude Code, Codex, Cursor, Figma Make, Figma MCP, Code Connect, Storybook, Chromatic, GitHub, Nexus"],
    ["Stack", "Angular, React, web components"],
    ["Governed by", "bighat-design-system skill, handoff-readiness skill"],
    ["Rev", "2026-10"],
  ] as [string, string][],
};
