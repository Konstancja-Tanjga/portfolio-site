import type { CaseStudy } from "./types";

/**
 * A course I wrote for myself, and the first real project Big Hat had to
 * carry without having been designed around it.
 *
 * It sits in `practice` for the same reason Tinder for Chihuahua does: nothing
 * shipped to a customer, but it is a whole method run end to end — content
 * model, information architecture, a design system under load, a deployed
 * build. The screens on Big Hat 4.1 — the commit the app is pinned to — are
 * the "before". Held until the app runs on Big Hat 4.3 and the slots
 * in the `big-hat-4-3` chapter (07) are filled; the URL
 * does not change when `status` flips to live.
 */
export const raptors: CaseStudy = {
  slug: "world-of-raptors",
  title: "World of Raptors",
  what: "A course on birds of prey I wrote for myself, and the project that tested my design system",
  lead:
    "A private online course on diurnal raptors and owls, focused on Poland, southern Spain and the Strait of Gibraltar: twelve modules, sixty lessons, a 42-species atlas and an observation checklist. I built it to put what I already know in order and to learn to tell these birds apart in the field — and it turned into the first real test of my own design system, Big Hat, by a project it was not designed around.",
  status: {
    state: "held",
    until: "with Big Hat 4.3",
    why: "The course, the atlas and the build on Big Hat 4.1 are finished and live. The chapter this wall is actually about — what 4.3 changes on the same screens — is still being built in the design system repo.",
  },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · LEARNING PRODUCT",
    headline: ["World of", "Raptors"],
    subline: "A course I wrote for myself, and a design system put under load",
    stamp: "CONTENT MODEL · ATLAS · CHECKLIST · BIG HAT 4.1 → 4.3 · NEXT.JS",
    credit: "Content, design and build · Personal project · 2026",
    shot: { src: "/work/world-of-raptors/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Everything — course content, information architecture, design, build" },
    { label: "User", value: "Me: a birder who wants to name what I see, correctly" },
    { label: "Scope", value: "12 modules, 60 lessons, 42 species, an observation checklist" },
    { label: "System", value: "Big Hat design system — 4.1 today, 4.3 in progress" },
    { label: "Live", value: "Running on Vercel", href: "https://world-of-raptors.vercel.app" },
    { label: "Source", value: "Public, course content included", href: "https://github.com/Konstancja-Tanjga/world-of-raptors" },
    { label: "Period", value: "September 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 01 */
    {
      id: "the-promise",
      n: "01",
      heading: "Why a course",
      maxim:
        "Knowing a bird and being able to name it are two different skills, and only the second one survives a distant silhouette against the light.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Birds of prey are the group that interests me most — the day hunters and the night ones. I get to see little owls, kites, booted eagles and Spanish imperial eagles, and every time it is a fascinating adventure. What I did not have was a way to tell them apart with confidence, and to call each one by its proper name.</p><p>So the project had two jobs. The first was to <strong>put in order what I already knew</strong>. The second was to <strong>go deeper</strong> into exactly the birds I keep meeting.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/field/rooftop-falcons.webp", caption: "Two small falcons on a roof, March 2026, on a phone." },
            { src: "/work/world-of-raptors/field/little-owl.webp", caption: "A little owl — one of the night hunters the course covers." },
          ],
          caption: "My own photographs. The phone ones rarely come out better than the one on the left, which is exactly the problem.",
        },
        {
          kind: "passage",
          html:
            "<p>The closest existing thing is Cornell Bird Academy, and it splits the subject in two: biology in one paid course, identification in another — and the identification course covers North America only. Nothing covered the places I actually watch from. So I wrote the course I wanted to take.</p>",
        },
        {
          kind: "thesis",
          label: "The thesis",
          text:
            "Biology and identification are one subject taught twice. Put them in one course, anchor it in three real places — Poland, southern Spain and the Strait of Gibraltar — and hang every lesson off a single atlas, so a species is described once and met everywhere.",
        },
        {
          kind: "spec",
          caption: "The brief, as constraints.",
          rows: [
            { key: "user", value: "One: me, and what I want to be able to name" },
            { key: "regions", value: "Poland, southern Spain, the Strait of Gibraltar" },
            { key: "birds", value: "Diurnal raptors and owls — 32 and 10 species" },
            { key: "output", value: "The ability to name a bird in flight, and the reasoning behind the name" },
            { key: "accounts", value: "None. No login, no backend, progress stays on the device" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "structure",
      n: "02",
      heading: "Two paths, one atlas",
      maxim: "A species described in three modules is three descriptions that will disagree by next month.",
      standfirst: "How sixty lessons were arranged so that nothing is written twice.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The course runs on two paths, the way Pluralsight arranges them. <strong>Path A, biology</strong>, is seven modules: who raptors are, anatomy, hunting, breeding, migration, conservation, and people. <strong>Path B, fieldcraft</strong>, is five: a method for identification in flight, then the raptors of Poland, the Strait, southern Spain, and the owls.</p><p>The regional modules overlap — a black kite is a Polish bird, a Gibraltar bird and an Andalusian bird. So species do not live in lessons. They live in one atlas, each tagged with regions and with day or night activity, and every module reads from it.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "12", label: "modules, in two paths" },
            { value: "60", label: "lessons, 5–15 minutes of reading each" },
            { value: "42", label: "species in one atlas" },
            { value: "68", label: "look-alike links between them" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/home.webp",
          caption:
            "The start page on Big Hat 4.1: both paths, every module, and checklist progress at the top. The navigation mirrors the structure one to one.",
        },
        {
          kind: "passage",
          html:
            "<p>Lessons are Markdown files in the repository, not rows in a CMS. That was a deliberate trade: the course is readable on GitHub without the app, every edit has a diff, and adding a lesson is one file plus one line in <code>moduly.json</code>. The app is a way of reading the course, not the only place it exists.</p>",
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "naming",
      n: "03",
      heading: "Four names for one bird",
      maxim: "Naming a bird correctly is a data problem before it is a memory problem.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>One bird, four names. A booted eagle is <em>orzełek włochaty</em> in Polish, <em>aguililla calzada</em> in Spanish, <em>Booted Eagle</em> in most field guides, and <em>Aquila pennata</em> in current checklists, since it moved out of <em>Hieraaetus</em>. Knowing one of those is not knowing the bird.</p><p>So every species in the atlas carries all four names, and search matches any of them. It sounds like a small feature. It is what makes a name heard in the field findable at all.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/atlas.webp",
          caption:
            "The atlas: search by Polish, Latin, English or Spanish name, filter by region and by day or night. Every photograph comes from Wikimedia Commons, credited on the species card.",
        },
        {
          kind: "spec",
          caption: "One species, as the atlas stores it.",
          rows: [
            { key: "names", value: "Polish, Latin, English, Spanish" },
            { key: "silhouette", value: "Group, wings, “fingers”, tail, head, flight — in the order the method teaches" },
            { key: "confused with", value: "Links to the species it is most often mistaken for, every link pointing at a species that exists in the atlas" },
            { key: "season", value: "When it passes, when it stays — e.g. black kite: VII–X, peak in August" },
            { key: "where", value: "Region tags, plus the places worth standing at" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "method",
      n: "04",
      heading: "Silhouette first",
      maxim:
        "Most of the time a raptor is a shape against the sky, far away and backlit. A method that needs plumage detail is a method for photographs.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>This is my photograph, from September, and the file is still called <em>chyba booted eagle</em> — “probably a booted eagle”. That “probably” is the whole brief. A phone, a bird high up, no plumage detail worth the name: only a shape.</p>",
        },
        {
          kind: "shot",
          width: "column",
          src: "/work/world-of-raptors/field/booted-eagle.webp",
          caption:
            "Mine, on a phone, September 2026. What the course lets me say now: most likely a pale-morph booted eagle — dark flight feathers against pale underwing coverts, a long straight-cut tail, six clear “fingers”. And it taught me to keep the “most likely”.",
        },
        {
          kind: "passage",
          html:
            "<p>Module B1 is the spine of the fieldcraft path. Before asking <em>which species</em>, ask <em>which group</em>: eight silhouettes — vultures, eagles, buzzards, kites, harriers, accipiters, falcons, osprey — tell apart by shape alone, even into the sun, and narrow dozens of candidates to a handful. Only then flight, then plumage and age, then the conditions that make you wrong.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/lesson.webp",
          caption:
            "B1, lesson 1: the eight silhouette groups as a table of wings, tail and head. The species cards later ask the same questions in the same order.",
        },
        {
          kind: "passage",
          html:
            "<p>The species card is where the method pays off. The “what to look at” panel lists the silhouette in lesson order, and the “easy to confuse with” panel puts the look-alikes right underneath — because the useful question in the field is never <em>what is this</em>, it is <em>what else could this be</em>.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/species.webp", caption: "Booted eagle, desktop: perched and in flight, then the silhouette in the order B1 teaches." },
            { src: "/work/world-of-raptors/before/species-mobile.webp", caption: "The same card on a phone — the size it is actually read at, in the field." },
          ],
          caption: "Photographs from Wikimedia Commons, with author and licence under each one.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "checklist",
      n: "05",
      heading: "A checklist with no account",
      maxim: "A login is a feature for the second user. There isn't one.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The checklist is a life list: tick a species, add a date, a place and a note. It lives in the browser's storage, with export and import to a JSON file as the backup — no login, no database, nothing to maintain. Lesson progress works the same way: finish every lesson in a module and it earns a tick in the navigation.</p><p>That is a real limitation — the phone and the laptop do not share a list — and it is written down as a later stage rather than hidden.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/checklist.webp",
          caption:
            "The checklist on Big Hat 4.1: the same filters as the atlas, a “seen / missing” switch, and a count per group.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "big-hat-under-load",
      n: "06",
      heading: "Big Hat 4.1, under load",
      maxim:
        "A design system has not been tested until a project it was not designed around tries to use it.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Big Hat was built for this portfolio and for Docu Manager. World of Raptors was the first project that just <em>consumed</em> it: installed from GitHub at a pinned commit, with the rules its agent documentation sets — components only through one client bridge, no <code>className</code> or <code>style</code> on components, semantic <code>--bh-*</code> tokens only, and every empty, loading or error state through <code>StateBlock</code>.</p><p>It held. Nineteen components cover the whole app, and the project's own stylesheet adds layout, reading typography and a few panels, all from semantic tokens — not one colour of its own. It also looks exactly like what it is: correct, accessible, and plain. Nothing on these screens is wrong, and nothing on them makes you want to open the course again tomorrow.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "19", label: "Big Hat components in use" },
            { value: "1", label: "component built locally, beside the system" },
            { value: "0", label: "hard-coded colours in the project" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The one gap is recorded, not patched quietly. The course needs links that look like buttons — “Start: lesson 1”, previous and next lesson. Big Hat's <code>Button</code> contract explicitly rules out navigation, and rightly: a button breaks middle-click, copy-link and the history model. So the project has a local <code>ButtonLink</code>: a real anchor wearing the button's classes.</p>",
        },
        {
          kind: "thesis",
          label: "The cost, named",
          text:
            "ButtonLink leans on internal class names that are not a versioned API. A change to the system's CSS can break it with no type error, and it will not inherit future Button changes. It is written up in DS-GAPS.md in the project repo — what I reached for, what I built, and what the local version does worse — as a note, not a request. One occurrence is not a pattern.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "big-hat-4-3",
      n: "07",
      heading: "Big Hat 4.3, on the same screens",
      maxim: "The honest way to show a new version of a system is the old screens, redrawn by it, and nothing else changed.",
      standfirst: "In progress. The 4.3 screens land here once World of Raptors is migrated.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Big Hat up to 4.1 answered <em>is it correct</em>. Big Hat 4.3 has to answer <em>is it worth looking at</em> — without giving up any of what 4.1 enforces. It landed in two releases: 4.2 draws surfaces with height instead of lines, 4.3 turns buttons into glass capsules. World of Raptors is the proving ground: same content, same routes, same components, only the system underneath moves.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          slot: "Start page on Big Hat 4.3 — against the 4.1 screen in chapter 02",
        },
        {
          kind: "shot",
          width: "wall",
          slot: "Species card on Big Hat 4.3 — against the 4.1 card in chapter 04",
        },
        {
          kind: "shot",
          width: "wall",
          slot: "Whether ButtonLink survived the migration, or 4.3 made it unnecessary",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "build",
      n: "08",
      heading: "From Markdown to production",
      maxim: "Every page is static, so the course is exactly as fast as the files it is made of.",
      blocks: [
        {
          kind: "stack",
          caption: "The stack, and which part does what.",
          rows: [
            { key: "framework", value: "Next.js 16, App Router — every page generated at build time" },
            { key: "interface", value: "Big Hat design system, pinned to a commit, through one client bridge" },
            { key: "lessons", value: "Markdown in the repo, rendered with react-markdown, remark-gfm and rehype-raw" },
            { key: "data", value: "species, modules and photos as JSON — one source for atlas, checklist and navigation" },
            { key: "photos", value: "Wikimedia Commons, found and credited by a script, author and licence on each", mine: true },
            { key: "checklist", value: "localStorage, with JSON export and import", mine: true },
            { key: "hosting", value: "Vercel — main is production, every branch gets a preview" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "next",
      n: "09",
      heading: "What comes next",
      maxim: "Reading about a silhouette is not the same as recognising one at speed.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Quizzes and flashcards with spaced repetition</strong> — silhouettes, field marks, look-alike pairs and calls, scheduled so the hard ones come back.",
            "<strong>A “compare” quiz</strong> — two similar species side by side, which is the look-alike panel turned into practice.",
            "<strong>A virtual watchpoint</strong> — silhouettes crossing the screen at the pace of real migration over the Strait, to identify and count.",
            "<strong>A map of watchpoints</strong> on OpenStreetMap, and a shared checklist so the phone and the laptop agree.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>It is live: <a href=\"https://world-of-raptors.vercel.app\">open the course</a>. The <a href=\"https://github.com/Konstancja-Tanjga/world-of-raptors\">source</a> is public, lessons and atlas included.</p>",
        },
      ],
    },
  ],
};
