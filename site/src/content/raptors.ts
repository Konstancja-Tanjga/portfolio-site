import type { CaseStudy } from "./types";

/**
 * A course I wrote for myself, and the first real project Big Hat had to
 * carry without having been designed around it.
 *
 * It sits in `practice` for the same reason Tinder for Chihuahua does: nothing
 * shipped to a customer, but it is a whole method run end to end — content
 * model, information architecture, a design system under load, a deployed
 * build. The screens on Big Hat 4.1 — the commit the app is pinned to — are
 * the "before"; the "after" in the `big-hat-4-3` chapter (07) is the same
 * commit built locally on 4.3.3. Held until the deployed app runs on 4.3, so
 * the wall never shows screens its live link does not; the URL does not change
 * when `status` flips to live.
 */
export const raptors: CaseStudy = {
  slug: "world-of-raptors",
  title: "World of Raptors",
  what: "A course on birds of prey I wrote for myself, and the project that tested my design system",
  lead:
    "A private online course on diurnal raptors and owls in Poland, southern Spain and the Strait of Gibraltar. It has twelve modules, sixty lessons, an atlas of 42 species and an observation checklist. I built it to put what I know about these birds in order and to learn to tell them apart in the field. It also became the first project to use my design system, Big Hat, without the system having been designed for it.",
  status: {
    state: "held",
    until: "with Big Hat 4.3",
    why: "The course is live on Big Hat 4.1. The 4.3 screens in chapter 07 are the same code built locally. This page goes live once the deployed app runs on 4.3 too.",
  },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · LEARNING PRODUCT",
    headline: ["World of", "Raptors"],
    subline: "A birding course, and a design system tested by it",
    stamp: "CONTENT MODEL · ATLAS · CHECKLIST · BIG HAT 4.1 → 4.3 · NEXT.JS",
    credit: "Content, design and build · Personal project · 2026",
    shot: { src: "/work/world-of-raptors/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "Course content, information architecture, design and build" },
    { label: "User", value: "Me. I want to name the birds I see, and name them correctly" },
    { label: "Scope", value: "12 modules, 60 lessons, 42 species, an observation checklist" },
    { label: "System", value: "Big Hat design system, 4.1 in production, 4.3 in preparation" },
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
        "Recognising a bird you have seen before is easier than naming one that is far away and against the light.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Birds of prey interest me more than any other group of birds, both the ones that hunt by day and the owls. I get to see little owls, kites, booted eagles and Spanish imperial eagles, and each sighting is a small adventure. I could not tell them apart with confidence, though, or always give each one its correct name.</p><p>The project had two goals. The first was to put in order what I already knew. The second was to learn more about the birds I actually meet.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/field/rooftop-falcons.webp", caption: "Two small falcons on a roof, March 2026, taken on a phone." },
            { src: "/work/world-of-raptors/field/little-owl.webp", caption: "A little owl, one of the owls the course covers." },
          ],
          caption: "My own photographs. Most of my phone photos look like the one on the left, which is why the course leans on shape.",
        },
        {
          kind: "passage",
          html:
            "<p>The nearest thing on offer was Cornell Bird Academy. It teaches biology in one paid course and identification in another, and its identification course covers North America only. I wanted one course that did both, for the places I watch birds in.</p>",
        },
        {
          kind: "thesis",
          label: "The idea",
          text:
            "Teach biology and identification in one course, set it in three places (Poland, southern Spain and the Strait of Gibraltar), and keep every species in one atlas that all the lessons link to, so each bird is described once.",
        },
        {
          kind: "spec",
          caption: "The brief.",
          rows: [
            { key: "user", value: "Me" },
            { key: "regions", value: "Poland, southern Spain, the Strait of Gibraltar" },
            { key: "birds", value: "32 diurnal raptors and 10 owls" },
            { key: "goal", value: "Being able to name a bird in flight and explain why it is that bird" },
            { key: "accounts", value: "None. No login and no backend; progress is stored on the device" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "structure",
      n: "02",
      heading: "Two paths, one atlas",
      maxim: "If the same species is described in three modules, the three descriptions will eventually disagree.",
      standfirst: "How the sixty lessons are arranged so that nothing is written twice.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The course has two paths, arranged the way Pluralsight arranges its courses. <strong>Path A, biology</strong>, has seven modules: what makes a raptor, anatomy, hunting, breeding, migration, conservation, and raptors and people. <strong>Path B, fieldcraft</strong>, has five: a method for identifying birds in flight, then the raptors of Poland, the Strait and southern Spain, and a module on owls.</p><p>The regional modules share species. A black kite belongs in the Polish module, the Strait module and the Andalusian one. Species therefore live in the atlas, tagged with their regions and with whether they are active by day or at night, and the modules link to them.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "12", label: "modules, in two paths" },
            { value: "60", label: "lessons, 5–15 minutes of reading each" },
            { value: "42", label: "species in one atlas" },
            { value: "68", label: "links between look-alike species" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/home.webp",
          caption:
            "The start page on Big Hat 4.1: both paths, every module, and checklist progress at the top. The side navigation follows the same structure.",
        },
        {
          kind: "passage",
          html:
            "<p>Lessons are Markdown files in the repository. I chose that over a CMS so the course can be read on GitHub without the app, every edit shows up as a diff, and a new lesson means one file and one line in <code>moduly.json</code>.</p>",
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "naming",
      n: "03",
      heading: "Four names for one bird",
      maxim: "Most naming mistakes happen because a bird goes by several names.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A booted eagle is <em>orzełek włochaty</em> in Polish, <em>aguililla calzada</em> in Spanish and <em>Booted Eagle</em> in English field guides. Current checklists call it <em>Aquila pennata</em>; older sources still use <em>Hieraaetus pennatus</em>. If you know only one of these names, you will not recognise the bird when someone uses another.</p><p>Every species in the atlas stores all four names, and search matches any of them. If I hear or read a name I do not know, I can still find the bird.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/atlas.webp",
          caption:
            "The atlas: search by Polish, Latin, English or Spanish name, and filter by region and by day or night. The photographs come from Wikimedia Commons and are credited on each species card.",
        },
        {
          kind: "spec",
          caption: "What the atlas stores for each species.",
          rows: [
            { key: "names", value: "Polish, Latin, English, Spanish" },
            { key: "silhouette", value: "Group, wings, “fingers”, tail, head and flight, in the order the method teaches" },
            { key: "confused with", value: "Links to the species it is most often mistaken for, each pointing at a species in the atlas" },
            { key: "season", value: "When it migrates and when it stays, e.g. black kite: July to October, peak in August" },
            { key: "where", value: "Region tags and good places to watch from" },
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
        "Most of the raptors I see are shapes against the sky, too far away to show plumage detail.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>I took this photograph in September and saved it as <em>chyba booted eagle</em>, “probably a booted eagle”. The bird was high up and the phone recorded little more than its outline, which is the usual situation in the field.</p>",
        },
        {
          kind: "shot",
          width: "column",
          src: "/work/world-of-raptors/field/booted-eagle.webp",
          caption:
            "My photograph, on a phone, September 2026. With the course I can say more: most likely a pale-morph booted eagle, because of the dark flight feathers against pale underwing coverts, the long square-cut tail and the six clear “fingers”. I still say “most likely”.",
        },
        {
          kind: "passage",
          html:
            "<p>Module B1 teaches the method the rest of Path B relies on. First decide which of eight silhouette groups the bird belongs to: vultures, eagles, buzzards, kites, harriers, accipiters, falcons or osprey. Shape alone is enough for that, even against the light, and it cuts dozens of possible species down to a few. After that come flight, then plumage and age, then the conditions that commonly lead to a wrong answer.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/lesson.webp",
          caption:
            "B1, lesson 1: the eight silhouette groups compared by wings, tail and head. The species cards ask the same questions in the same order.",
        },
        {
          kind: "passage",
          html:
            "<p>The species card applies the method to one bird. The “what to look at” panel lists the silhouette features in lesson order. The “easy to confuse with” panel below it shows the species most often mistaken for this one, because in the field I usually need to rule out the look-alikes before I can be sure.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/species.webp", caption: "Booted eagle on desktop: perched and in flight, then the silhouette in the order B1 teaches." },
            { src: "/work/world-of-raptors/before/species-mobile.webp", caption: "The same card on a phone, which is how I read it outdoors." },
          ],
          caption: "Photographs from Wikimedia Commons, with the author and licence under each one.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "checklist",
      n: "05",
      heading: "A checklist without an account",
      maxim: "With one user, a login would only get in the way.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The checklist is a life list. I tick a species and can add the date, the place and a note. It is saved in the browser, and I can export it to a JSON file and import it again as a backup, so there is no login and no database to maintain. Lesson progress is stored the same way: when every lesson in a module is finished, the module gets a tick in the navigation.</p><p>The drawback is that my phone and laptop keep separate lists. A shared list is planned for a later stage.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/before/checklist.webp",
          caption:
            "The checklist on Big Hat 4.1, with the same filters as the atlas, a “seen / missing” switch and a count for each group.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "big-hat-under-load",
      n: "06",
      heading: "Big Hat 4.1 in a real project",
      maxim:
        "I built Big Hat for my own projects. World of Raptors was the first project that had to live with its rules without shaping them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Big Hat was built for this portfolio and for Docu Manager. World of Raptors installs it from GitHub at a pinned commit and follows the rules in its agent documentation: components come through one client bridge, they take no <code>className</code> or <code>style</code>, styles use semantic <code>--bh-*</code> tokens only, and every empty, loading or error state goes through <code>StateBlock</code>.</p><p>Those rules were enough for the whole app. It uses nineteen Big Hat components. The project's own stylesheet adds layout, the typography for lessons and a few panels, all from semantic tokens and without a single colour of its own. The result is correct and accessible, and also plain. I would not call it inviting.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "19", label: "Big Hat components in use" },
            { value: "1", label: "component built locally, next to the system" },
            { value: "0", label: "hard-coded colours in the project" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>One need was not covered. The course has links that should look like buttons: “Start: lesson 1”, and the previous and next lesson. Big Hat's <code>Button</code> contract rules out navigation, and for good reason, since a button breaks middle-click, copying the link and the browser history. So the project has a local <code>ButtonLink</code>, an anchor that uses the button's classes.</p>",
        },
        {
          kind: "thesis",
          label: "What it costs",
          text:
            "ButtonLink depends on internal class names that are not a versioned API. A change to Big Hat's CSS could break it without a type error, and it will not pick up future changes to Button. I recorded it in DS-GAPS.md in the project repository: what I needed, what I built and where the local version falls short. It is a note for now. One project is not yet enough evidence for a new component.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "big-hat-4-3",
      n: "07",
      heading: "The same screens on Big Hat 4.3",
      maxim: "To see what a new version of a design system changes, keep the product the same and swap only the system.",
      standfirst:
        "The same commit of World of Raptors, built locally with Big Hat raised from 4.1 to 4.3.3. The live app is still on 4.1; these are the screens it will get.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Up to 4.1, Big Hat was mostly about being correct. The 4.2 and 4.3 releases work on how it looks without relaxing any of the rules. In 4.2 surfaces get depth from shadows instead of borders, and in 4.3 buttons become glass capsules. World of Raptors is a good test because the content, routes and components can stay exactly as they are.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/home.webp", caption: "Big Hat 4.1: white boxes with grey borders, a boxy button." },
            { src: "/work/world-of-raptors/after/home.webp", caption: "Big Hat 4.3.3: cards with shadows and 20px corners, and the button as a glass capsule." },
          ],
          caption: "The start page. World of Raptors' own code did not change; the Big Hat components updated themselves.",
        },
        {
          kind: "passage",
          html:
            "<p>The species card changed much less. Its two most useful panels, “what to look at” and “easy to confuse with”, are the project's own CSS. They are built from semantic tokens, so they picked up the new 20px corner, but tokens do not carry the switch from borders to shadows. They are still tinted boxes with a 1px border, while the cards around them have lost theirs.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/species.webp", caption: "Big Hat 4.1." },
            { src: "/work/world-of-raptors/after/species.webp", caption: "Big Hat 4.3.3. The panels belong to the project, so they did not change." },
          ],
          caption: "The species card. A Big Hat release cannot update what the project draws itself.",
        },
        {
          kind: "passage",
          html:
            "<p>ButtonLink, the local link from chapter 06, did get the capsule shape. It uses the button's internal class names, and 4.3 kept those names. So the risk noted in DS-GAPS.md did not happen this time, but only by luck.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/buttonlink.webp", caption: "Big Hat 4.1." },
            { src: "/work/world-of-raptors/after/buttonlink.webp", caption: "Big Hat 4.3.3. The capsule came through class names that are not an API." },
          ],
          caption: "“Start: lesson 1”, a link styled as a button.",
        },
        {
          kind: "thesis",
          label: "What the migration showed",
          text:
            "A Big Hat release updates only what is built from Big Hat components. Anything a project draws itself stays as it was. The comparison points to three local parts of World of Raptors that could become Big Hat components: the tinted panel, the photograph with its credit line, and the link styled as a button. It also raises a question about Big Hat itself. Card's accent stripe now curves around the 20px corner, as Toast's does by design, and on a module card it looks unintended.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "build",
      n: "08",
      heading: "From Markdown to production",
      maxim: "Every page is generated at build time, so the site serves static files.",
      blocks: [
        {
          kind: "stack",
          caption: "The stack, and which part does what.",
          rows: [
            { key: "framework", value: "Next.js 16, App Router, every page generated at build time" },
            { key: "interface", value: "Big Hat design system, pinned to a commit, through one client bridge" },
            { key: "lessons", value: "Markdown in the repository, rendered with react-markdown, remark-gfm and rehype-raw" },
            { key: "data", value: "Species, modules and photos as JSON, one source for the atlas, the checklist and the navigation" },
            { key: "photos", value: "Wikimedia Commons, found and credited by a script, with author and licence on each", mine: true },
            { key: "checklist", value: "localStorage, with JSON export and import", mine: true },
            { key: "hosting", value: "Vercel: main is production, and every branch gets a preview" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "next",
      n: "09",
      heading: "What comes next",
      maxim: "Reading about a silhouette does not train you to recognise one quickly.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Quizzes and flashcards with spaced repetition</strong> for silhouettes, field marks, look-alike pairs and calls, so the difficult ones come back more often.",
            "<strong>A “compare” quiz</strong> that shows two similar species side by side, turning the look-alike panel into practice.",
            "<strong>A virtual watchpoint</strong>, with silhouettes crossing the screen at the speed of real migration over the Strait, to identify and count.",
            "<strong>A map of watchpoints</strong> on OpenStreetMap, and a shared checklist so my phone and laptop show the same list.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The course is live: <a href=\"https://world-of-raptors.vercel.app\">open it here</a>. The <a href=\"https://github.com/Konstancja-Tanjga/world-of-raptors\">source</a> is public, including the lessons and the atlas.</p>",
        },
      ],
    },
  ],
};
