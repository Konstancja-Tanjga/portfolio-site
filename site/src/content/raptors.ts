import type { CaseStudy } from "./types";

/**
 * A course I wrote for myself, and the first real project Big Hat had to
 * carry without having been designed around it.
 *
 * It sits in `practice` for the same reason Tinder for Chihuahua does: nothing
 * shipped to a customer, but it is a whole method run end to end — content
 * model, information architecture, a design system under load, a deployed
 * build.
 *
 * Chapters 06–08 are history and keep their screens: Big Hat 4.1 (commit
 * 9496fc0), the local 4.3.3 experiment, and the 4.9.0 migration (World of
 * Raptors PR #11). Chapter 09 is the redesign that is live now (PR #14, merged
 * 3 October 2026); every screen outside 06–08 comes from it, captured from the
 * live site and set into device frames in /work/world-of-raptors/v2/.
 *
 * Credits follow the project's own rule (its CLAUDE.md and About page): the
 * idea, the plan and the content are Konstancja's; the redesign's design,
 * motion and code were made with Claude.
 */
export const raptors: CaseStudy = {
  slug: "world-of-raptors",
  title: "World of Raptors",
  what: "A course on birds of prey I wrote for myself: an atlas, silhouettes drawn from numbers, flashcards, on my own design system",
  lead:
    "A private online course on diurnal raptors and owls in Poland, southern Spain and the Strait of Gibraltar. It has twelve modules, sixty lessons, an atlas of 42 species and an observation checklist. I built it to put what I know about these birds in order and to learn to tell them apart in the field. It also became the first project to use my design system, Big Hat, without the system having been designed for it, and in October 2026 it was redesigned on top of it.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · LEARNING PRODUCT",
    headline: ["World of", "Raptors"],
    subline: "A birding course, and a design system tested by it",
    stamp: "ATLAS · SILHOUETTES FROM NUMBERS · FLASHCARDS · BIG HAT 4.9 · NEXT.JS",
    credit: "Idea and content mine, built with Claude · Personal project · 2026",
    shot: { src: "/work/world-of-raptors/00-cover.jpg" },
  },
  meta: [
    { label: "Role", value: "Idea, plan and content: me. Design, motion and code of the redesign: made with Claude" },
    { label: "User", value: "Me. I want to name the birds I see, and name them correctly" },
    { label: "Scope", value: "12 modules, 60 lessons, 42 species, an observation checklist" },
    { label: "System", value: "Big Hat 4.9, with the course's own theme on its semantic roles" },
    { label: "Live", value: "Running on Vercel", href: "https://world-of-raptors.vercel.app" },
    { label: "Source", value: "Public, course content included", href: "https://github.com/Konstancja-Tanjga/world-of-raptors" },
    { label: "Period", value: "September – October 2026; redesign live 3 October" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
    {
      id: "in-short",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "spec",
          rows: [
            {
              key: "Problem",
              value:
                "I could not name the raptors I see with confidence. The nearest course teaches biology and identification separately, and identification for North America only.",
            },
            {
              key: "My part",
              value:
                "The idea, the plan and all the content: 12 modules, 60 lessons, the atlas of 42 species. The redesign's design, motion and code were made with Claude, on my design system.",
            },
            {
              key: "Decision 1",
              value: "One atlas that every lesson links to, with four names per species, so each bird is described once.",
            },
            {
              key: "Decision 2",
              value:
                "Silhouette first. Every bird is a couple of dozen numbers, so one outline serves the lessons, the atlas, the flashcards and the look-alike comparisons.",
            },
            {
              key: "Decision 3",
              value:
                "The course's look sits on Big Hat's semantic roles instead of overriding its components. What the system could not do is written down: nine gaps, each with the screen that needed it.",
            },
            {
              key: "Evidence",
              value:
                "42 species, 60 lessons, 122 quiz questions, 282 flashcards, 287 credited photos. 20 Big Hat components in use. Every text and background pair checked to WCAG AA.",
            },
            { key: "Live", value: "world-of-raptors.vercel.app; the redesign went live on 3 October 2026" },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/skies.webp",
          caption:
            "The start page at dawn, by day, at dusk and at night. The sky follows the sun's height over Warsaw: kites circling in a thermal by day, the moon and an owl at night.",
        },
      ],
    },

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
            { src: "/work/world-of-raptors/field/red-kite-commons.webp", caption: "Red kite in flight. Photo: Hansueli Krapf, CC BY-SA 3.0, Wikimedia Commons, cropped." },
            { src: "/work/world-of-raptors/field/little-owl.webp", caption: "Little owl. My own photograph." },
          ],
          caption: "A red kite and a little owl: two birds I get to see, and both are in the course.",
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
          kind: "process",
          process: {
            label: "How the course is put together",
            count: "2 paths · 1 atlas",
            stages: [
              {
                n: "A",
                title: "Path A, biology",
                kicker: "7 modules · 35 lessons",
                body: "What makes a raptor, anatomy, hunting, breeding, migration, conservation, raptors and people.",
              },
              {
                n: "B",
                title: "Path B, fieldcraft",
                kicker: "5 modules · 25 lessons",
                body: "B1 teaches the identification method first. Then Poland, the Strait, southern Spain and the owls.",
                note: { label: "Shared species", body: "A black kite appears in three regional modules and is described once, in the atlas." },
              },
              {
                n: "01",
                title: "Atlas",
                kicker: "42 species",
                body: "Four names, the silhouette in lesson order, look-alikes, season and region for every species. Lessons link here.",
              },
              {
                n: "02",
                title: "Checklist",
                kicker: "stored on the device",
                body: "The atlas as a life list: tick a species, add the date, the place and a note.",
              },
            ],
            underneath: {
              label: "One source of data",
              chips: ["moduly.json", "gatunki.json", "zdjecia.json", "Markdown lessons"],
              body: "The navigation, the atlas and the checklist read the same files, and the lessons stay readable on GitHub without the app.",
            },
          },
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
            "<p>A booted eagle is <em>orzełek włochaty</em> in Polish, <em>aguililla calzada</em> in Spanish and <em>Booted Eagle</em> in English field guides. Some bird lists call it <em>Aquila pennata</em>, others <em>Hieraaetus pennatus</em>. If you know only one of these names, you will not recognise the bird when someone uses another.</p><p>Every species in the atlas stores all four names, and search matches any of them. If I hear or read a name I do not know, I can still find the bird.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/v2/atlas-silhouettes.webp", caption: "The atlas as silhouettes, grouped the way lesson B1 groups them." },
            { src: "/work/world-of-raptors/v2/atlas-scale.webp", caption: "The same 42 birds at one scale, next to a person's arm span of about 170 cm." },
          ],
          caption:
            "The atlas has three views: photographs, silhouettes and to scale. Search takes any of the four names, and the filters are region and day or night.",
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
            "<p>This is the view the course works towards: a booted eagle close enough to show its plumage. In the field I usually get only the outline, which is why the method starts with shape.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/field/booted-eagle-commons.webp",
          caption:
            "A pale-morph booted eagle: dark flight feathers against pale underwing coverts, six clear “fingers” and the pale “landing lights” where the wings meet the body. Photo: Javier Perez Montes, CC BY-SA 4.0, Wikimedia Commons, resized.",
        },
        {
          kind: "passage",
          html:
            "<p>Module B1 teaches the method the rest of Path B relies on. First decide which of eight silhouette groups the bird belongs to: vultures, eagles, buzzards, kites, harriers, accipiters, falcons or osprey. Shape alone is enough for that, even against the light, and it cuts dozens of possible species down to a few. After that come flight, then plumage and age, then the conditions that commonly lead to a wrong answer.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/lesson.webp",
          caption:
            "B1, lesson 1, “Silhouette: 8 groups”, with the module bar above it. Each module ends with a step-by-step quiz with an 80% pass mark; here a wrong answer and the correct one.",
        },
        {
          kind: "passage",
          html:
            "<p>The species card applies the method to one bird, in the order B1 teaches it: the silhouette with its features labelled, how it flies, its size against a person's arm span, then the species it is most often mistaken for.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/species.webp",
          caption:
            "The booted eagle's card on desktop and on a phone, which is how I read it outdoors. Photograph: Javier Perez Montes, CC BY-SA 4.0, Wikimedia Commons, credited on the card.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/plate.webp",
          caption: "“What to look at”: the silhouette from below, with the head, the wings, the six “fingers” and the tail labelled.",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/v2/flight.webp", caption: "“How it flies”: the same outline, animated in the bird's own flight style." },
            { src: "/work/world-of-raptors/v2/wingspan.webp", caption: "“When and where”: wingspan to scale, then season, places and course regions." },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/lookalikes.webp",
          caption:
            "Look-alikes. The slider turns the booted eagle's silhouette into the Egyptian vulture's, with the two descriptions side by side below it.",
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
            "<p>The checklist is a life list. I tick a species and can add the date, the place, a note and my own photos. It is saved in the browser, and I can export it to a JSON file and import it again as a backup, so there is no login and no database to maintain. Lesson progress is stored the same way: when every lesson in a module is finished, the module gets a tick in the navigation.</p><p>The drawback is that my phone and laptop keep separate lists. A shared list is planned for a later stage.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/collection.webp",
          caption:
            "On the start page the checklist becomes a collection: each species I have seen fills in its silhouette.",
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
      standfirst: "World of Raptors as first deployed, on Big Hat 4.1 (commit 9496fc0).",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Big Hat was built for this portfolio and for Docu Manager. World of Raptors installs it from GitHub at a pinned commit and follows the rules in its agent documentation: components come through one client bridge, they take no <code>className</code> or <code>style</code>, styles use semantic <code>--bh-*</code> tokens only, and every empty, loading or error state goes through <code>StateBlock</code>.</p><p>Those rules were enough for the whole app. It used nineteen Big Hat components. The project's own stylesheet added layout, the typography for lessons and a few panels, all from semantic tokens and without a single colour of its own. The result was correct and accessible, and also plain. I would not have called it inviting.</p>",
        },
        {
          kind: "stats",
          items: [
            { value: "19", label: "Big Hat components in use on 4.1" },
            { value: "1", label: "component built locally, next to the system" },
            { value: "0", label: "hard-coded colours at launch" },
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
      heading: "An experiment: the same code on Big Hat 4.3",
      maxim: "To see what a new version of a design system changes, keep the product the same and swap only the system.",
      standfirst:
        "Before the real migration, I built the same commit of World of Raptors locally with Big Hat raised from 4.1 to 4.3.3. Only the system changed.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Up to 4.1, Big Hat was mostly about being correct. The 4.2 and 4.3 releases work on how it looks without relaxing any of the rules. In 4.2 surfaces get depth from shadows instead of borders, and in 4.3 buttons become glass capsules. World of Raptors is a good test because the content, routes and components can stay exactly as they are.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/home-detail.webp", caption: "Big Hat 4.1: cards with grey borders, a boxy button with an outline." },
            { src: "/work/world-of-raptors/after/home-detail.webp", caption: "Big Hat 4.3.3: cards with shadows and 20px corners, the button a glass capsule." },
          ],
          caption: "A detail of the start page. World of Raptors' own code did not change; the Big Hat components updated themselves.",
        },
        {
          kind: "passage",
          html:
            "<p>The species card changed much less. Its two most useful panels, “what to look at” and “easy to confuse with”, are the project's own CSS. They are built from semantic tokens, so they picked up the new 20px corner, but tokens do not carry the switch from borders to shadows. They are still tinted boxes with a 1px border, while the cards around them have lost theirs.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/before/species-detail.webp", caption: "Big Hat 4.1: a tinted panel with a 1px border." },
            { src: "/work/world-of-raptors/after/species-detail.webp", caption: "Big Hat 4.3.3: the corner grew to 20px through the token, the border stayed." },
          ],
          caption: "The “what to look at” panel on the species card. A Big Hat release cannot update what the project draws itself.",
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
          label: "What the experiment showed",
          text:
            "A Big Hat release updates only what is built from Big Hat components. Anything a project draws itself stays as it was. The comparison points to three local parts of World of Raptors that could become Big Hat components: the tinted panel, the photograph with its credit line, and the link styled as a button. It also raises a question about Big Hat itself. Card's accent stripe now curves around the 20px corner, as Toast's does by design, and on a module card it looks unintended.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "big-hat-4-9",
      n: "08",
      heading: "Big Hat 4.9 in production",
      maxim: "The real migration changed the product as well as the system, and it removed the parts a release could not reach.",
      standfirst:
        "World of Raptors moved from Big Hat 4.1 to 4.9.0 in one pull request (PR #11). These screens are the app as it was deployed then; chapter 09 shows what replaced them.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The experiment in chapter 07 showed which parts of the course a Big Hat release could not update. The migration dealt with most of them. The species card no longer has its own tinted panels: it compares the bird with its look-alikes in a single table, built from Big Hat's <code>Card</code> and <code>Table</code>. The table rows follow the order of the silhouette method, and each look-alike links to its own card.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/live/species.webp",
          caption:
            "The booted eagle's card on Big Hat 4.9: photographs, then “what to look at” as one table comparing it with the species it is mistaken for.",
        },
        {
          kind: "passage",
          html:
            "<p>Lessons moved onto <code>Article</code>, a component that arrived in Big Hat 4.9.0. It gives every lesson a title with its length, a contents list that marks the section in view, and a margin for photographs and notes next to the paragraph they belong to. The last lesson of each module now ends with a step-by-step quiz with an 80% pass mark; passing it marks the lesson as finished.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/live/lesson.webp",
          caption:
            "B1, lesson 1 on Article: the module's lessons in the side navigation, the lesson in the middle, “in this lesson” on the right.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/live/home.webp",
          caption: "The start page now opens with a species of the day, a different bird each day.",
        },
        {
          kind: "stats",
          items: [
            { value: "24", label: "Big Hat components in use after PR #11, up from 19" },
            { value: "1", label: "local stand-in for a Big Hat component: ButtonLink" },
            { value: "4", label: "gaps recorded in DS-GAPS.md at the time" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The gaps file grew as the course used more of the system. At that point it listed four things Big Hat did not cover:</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>A link that looks like a button.</strong> ButtonLink is still a local anchor on Big Hat's internal button classes.",
            "<strong>Uppercase labels built into components.</strong> <code>DescriptionList</code>, <code>Divider</code>, <code>NavGroup</code> and <code>Table</code> headers set their labels in capitals, and the product cannot turn that off without overriding Big Hat's classes.",
            "<strong>Table columns and row headers.</strong> <code>Table</code> accepts grid-track widths such as <code>1fr</code> that a real table ignores, and it cannot mark the first column as row headers, which weakens the comparison table for screen readers.",
            "<strong>No text size for a page's one big heading.</strong> The largest step in the type scale is 4px above a section heading, too small for the species of the day.",
          ],
        },
        {
          kind: "thesis",
          label: "What the migration showed",
          text:
            "Moving the course onto new Big Hat components did more for it than any release could do on its own. The local panels went away because the product changed, not because the system reached them. What is left is a short, written list of what Big Hat still lacks, each item with the screen that needed it.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "redesign",
      n: "09",
      heading: "The redesign",
      maxim: "Correct and accessible was the floor. The course also had to make me want to open it.",
      standfirst:
        "Chapter 06 ended on a plain course. PR #14, merged on 3 October 2026, redesigned it on the same system: the sky, the silhouettes, a theme of its own and flashcards. I set the direction and the content; the design, motion and code were made with Claude.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The redesign kept the component rules from chapter 06. Components still come from Big Hat and take no <code>className</code>, and no <code>bh-*</code> class is overridden. What changed is what the course puts around them: scenes that set the time of day, silhouettes that move, type sized for reading, and a palette that belongs to this subject rather than to a dense business application.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/morph.webp",
          caption:
            "“Eight silhouettes against the sky” on the start page. Choosing a group morphs the outline into it and lists its wings, tail, head and examples.",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/world-of-raptors/v2/owls.webp", caption: "The night chorus: the ten owls, introduced by their calls first." },
            { src: "/work/world-of-raptors/v2/morph-kites.webp", caption: "The same scene switched to kites: long, narrow wings and a forked tail." },
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The silhouettes are not drawings. Each species is a couple of dozen numbers: how far the head reaches, the width of the arm, where the wrist sits, how many fingers, how forked the tail is. The outline is computed from them, so the same bird can be drawn at any size, flap its wings, fan its tail or turn into a look-alike, because the numbers interpolate and the outline follows. A group has an archetype, and a species is written as its differences from it.</p>",
        },
        {
          kind: "code",
          code: `const KANIE: Ksztalt = {
  glowa: 15, glowaSzer: 8, glowaPlaska: 0.1, tulow: 12, tulowDl: 35,
  ogonDl: 44, ogonNasada: 5.5, ogonKoniec: [7.5, 14], ogonSrodek: [-12, -9], ogonOstry: 0.9, ogonRogi: 0.6, ogonBoki: 0.5,
  ramie: 32, nadgarstek: 0.45, nadgarstekY: -4.5, dlon: 29, koniecY: 14, koniecSzer: 20, koniecOkragly: 0.6,
  palce: 5, palceDl: 13, wybrzuszenie: 2.5, zwezenie: 0.5,
};

export const SYLWETKI: Record<string, Ksztalt> = {
  // Kanie
  'kania-ruda': { ...KANIE, ramie: 31, dlon: 28, nadgarstekY: -5.5, koniecY: 15.5, ogonDl: 50, ogonSrodek: [-16, -11] },`,
          caption:
            "The kite archetype and the red kite as its differences: a narrower arm, the hand swept further back, a longer and more deeply forked tail. Two excerpts from src/lib/sylwetki.ts; the Ksztalt type is in src/lib/sylwetka.ts.",
          source: {
            text: "Source: world-of-raptors on GitHub.",
            href: "https://github.com/Konstancja-Tanjga/world-of-raptors/blob/main/src/lib/sylwetki.ts",
          },
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/module.webp",
          caption:
            "A module opens with its own page: the method module B1, five lessons and a quiz. Inside it, a module bar replaces the side navigation.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/flashcards.webp",
          caption:
            "Flashcards: “first the group, then the species”. 282 cards from photographs, silhouettes and names, scheduled with FSRS, ten new ones a day.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/mobile.webp",
          caption: "On a phone: the start page at night, the booted eagle, lesson B1 and the eagle owl.",
        },
        {
          kind: "palette",
          standfirst:
            "The theme gives Big Hat's semantic roles this course's values, with the same selectors Big Hat uses for its own themes. No bh-* class is overridden, so every component follows the role.",
          items: [
            { hex: "#fdfaf4", name: "Field paper", role: "Surface in the light theme", note: "Papier terenowy" },
            { hex: "#261d17", name: "Ink", role: "Primary text on paper" },
            { hex: "#a54a24", name: "Kite rufous", role: "Primary action and accent in the light theme", note: "From the red kite" },
            { hex: "#2b5d86", name: "Focus blue", role: "Focus ring in the light theme" },
            { hex: "#0f1620", name: "Dusk", role: "Surface in the dark theme", note: "Zmierzch" },
            { hex: "#f2eee6", name: "Bone", role: "Primary text at dusk" },
            { hex: "#f5b75b", name: "Raptor's eye", role: "Primary action, accent and focus in the dark theme" },
          ],
          caption:
            "Every text and background pair was checked by a script against WCAG AA: 4.5:1 for text, 3:1 for borders. Body text is 15px instead of Big Hat's 13px, because this is a course to read, not a dense application.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/world-of-raptors/v2/themes.webp",
          caption: "The booted eagle's card in both themes. The photographic scenes stay at dusk in both.",
        },
        {
          kind: "stats",
          items: [
            { value: "20", label: "Big Hat components in use; AppShell and the nav set gave way to a local frame" },
            { value: "9", label: "gaps in DS-GAPS.md, up from 4" },
            { value: "0", label: "bh-* classes overridden" },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>The link that looks like a button</strong> now has more cases: the large calls to action in the scenes, “Continue” in the navigation and the next-lesson card. It is an argument for a link-button component with a hero size.",
            "<strong>A product theme.</strong> Big Hat has one cool light theme and one dark one. The course needed its own colours and a larger text size, set on the semantic roles.",
            "<strong>An expressive layer.</strong> Display sizes, layout rhythm and motion for story moments live in a second token layer, --wor-*, because Big Hat has none of them.",
            "<strong>AppShell</strong> is built for applications, and its contract excludes publication pages, so the course uses a local frame instead.",
            "<strong>Page transitions</strong> and a formatted quiz question (RadioGroup's legend takes plain text only) are the last two.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "build",
      n: "10",
      heading: "From Markdown to production",
      maxim: "Every page is generated at build time except the start page, which is rendered per request because its sky depends on the time.",
      blocks: [
        {
          kind: "stack",
          caption: "The stack, and which part does what.",
          rows: [
            { key: "framework", value: "Next.js 16 and React 19, App Router; the start page is dynamic, the rest static" },
            { key: "interface", value: "Big Hat 4.9, pinned to a commit, through one client bridge" },
            { key: "theme", value: "Big Hat's semantic roles set to the course's values, plus a --wor-* layer for display type, rhythm and motion", mine: true },
            { key: "silhouettes", value: "Computed from numbers, rendered as SVG on the server and animated in the browser", mine: true },
            { key: "flashcards", value: "FSRS scheduling with ts-fsrs, stored on the device", mine: true },
            { key: "type", value: "Półtawski Nowy for titles, Newsreader for reading, through next/font" },
            { key: "motion", value: "View Transitions between pages; the scenes have a “stop motion” button, and reduced motion turns movement off" },
            { key: "lessons", value: "Markdown in the repository, rendered with react-markdown, remark-gfm and rehype-raw" },
            { key: "data", value: "Species, modules and photos as JSON, one source for the atlas, the checklist and the navigation" },
            { key: "photos", value: "Wikimedia Commons, found and credited by a script, with author and licence on each", mine: true },
            { key: "checklist", value: "localStorage, own photos in IndexedDB, with JSON export and import", mine: true },
            { key: "hosting", value: "Vercel: main is production, and every branch gets a preview" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "delivery",
      n: "11",
      heading: "How it ships",
      blocks: [
        {
          kind: "spec",
          caption: "How a change ships. The checks are the ones run on the redesign pull request (#14).",
          rows: [
            { key: "branches", value: "Every change on its own branch, with a Vercel preview; main is production" },
            { key: "checks", value: "TypeScript, lint and a production build" },
            { key: "screens", value: "Playwright at 1440 and 390 pixels, light and dark, before merge" },
            { key: "contrast", value: "Every text and background pair measured against WCAG AA" },
            { key: "gaps", value: "Anything Big Hat could not do goes into DS-GAPS.md, not into an override" },
            { key: "not yet", value: "Safari and Firefox are not tested" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 12 */
    {
      id: "results",
      n: "12",
      heading: "What it adds up to",
      standfirst: "The course in numbers, from its About page.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "42", label: "species: 32 diurnal raptors and 10 owls" },
            { value: "60", label: "lessons in 12 modules, about 45,000 words" },
            { value: "122", label: "quiz questions" },
            { value: "282", label: "flashcards" },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "287", label: "photographs, from 214 credited photographers" },
            { value: "58", label: "curiosities" },
            { value: "68", label: "links between look-alike species" },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>What I cannot count yet.</strong> Progress, the checklist and flashcard reviews are stored only in my browser, by design, so there is no usage data. The test that matters is in the field: whether a bird in flight gets the right name, and the reason for it.</p>",
        },
      ],
    },

    /* ---------------------------------------------------------------- 13 */
    {
      id: "next",
      n: "13",
      heading: "What comes next",
      maxim: "Reading about a silhouette does not train you to recognise one quickly.",
      blocks: [
        {
          kind: "points",
          items: [
                        "<strong>A “compare” quiz</strong> that shows two similar species side by side, turning the look-alike panel into practice.",
            "<strong>A virtual watchpoint</strong>, with silhouettes crossing the screen at the speed of real migration over the Strait, to identify and count.",
            "<strong>A map of watchpoints</strong> on OpenStreetMap, and a shared checklist so my phone and laptop show the same list.",
          ],
        },
        {
          kind: "passage",
          html:
            "<p>The course is live: <a href=\"https://world-of-raptors.vercel.app\">open it here</a>. The <a href=\"https://github.com/Konstancja-Tanjga/world-of-raptors\">source</a> is public, including the lessons and the atlas.</p><p><strong>Photo credits.</strong> Red kite: Hansueli Krapf, <a href=\"https://creativecommons.org/licenses/by-sa/3.0\">CC BY-SA 3.0</a>, <a href=\"https://commons.wikimedia.org/wiki/File:Milvus_milvus_(2011-04-17_Switzerland_Kanton_Schaffhausen_Gennersbrunn_2).jpg\">Wikimedia Commons</a>, cropped. Booted eagle: Javier Perez Montes, <a href=\"https://creativecommons.org/licenses/by-sa/4.0\">CC BY-SA 4.0</a>, <a href=\"https://commons.wikimedia.org/wiki/File:Aguila_Calzada_-_Parque_Lineal_del_Manzanares_-_Section_II_-_Madrid_01.jpg\">Wikimedia Commons</a>, resized. The photographs inside the app screenshots also come from Wikimedia Commons and are credited on each species card. The little owl is my own.</p>",
        },
      ],
    },
  ],
};
