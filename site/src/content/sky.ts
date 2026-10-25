import type { CaseStudy } from "./types";

/**
 * World of Raptors, redesigned: the course on birds of prey turned into a sky
 * you can read. It sits in `practice` because it is a personal project, run
 * end to end.
 *
 * I wrote the course and directed the redesign; Claude, Anthropic's AI model,
 * designed, animated and built it with me in Claude Code. The credit says
 * both, in this file and on the app's About page (/o-projekcie), because both
 * are true; change them together.
 *
 * The screens are the app in Polish, taken
 * from World of Raptors `feature/redesign` at commit 6d16cea, running
 * locally; the sky shots set the hour with `?pora=`. The redesign reached
 * production in World of Raptors PR #14 (merge commit f45ab72), which the
 * code snippet's link pins. The films are not screen
 * recordings: each frame is a screenshot taken under Playwright's paused
 * clock, stepped exactly 1/30 s per frame and encoded at 30 fps, so they play
 * at the app's speed. The look-alike slider film is the exception: it moves
 * one keyboard step (1%) per frame and its clock never runs, so its pace was
 * chosen for the film, not the app's.
 *
 * Rebuilt 25 October 2026 the Analytics way: 00 "In short" with decision
 * shots, the tool chain as a `sheet`, the four clips as `tabs`, the source
 * and the stack as `fold`s. See docs/copy-edit/log-sky.md.
 */
const W = "/work/reading-the-sky";
const D = "/work/reading-the-sky/device";

export const sky: CaseStudy = {
  slug: "reading-the-sky",
  title: "Reading the sky",
  what: "World of Raptors redesigned with Claude: birds drawn from numbers, a sky that follows the sun, and motion that teaches identification",
  lead:
    "The first version of my course on birds of prey worked, and it was plain. The redesign keeps to one principle: every piece of motion has to teach something about the birds. I wrote the course and directed the work; Claude, Anthropic's AI model, designed, animated, and built it with me.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · MOTION AND INTERACTION",
    headline: ["Reading", "the sky"],
    subline: "World of Raptors, redesigned with Claude",
    stamp: "PARAMETRIC SILHOUETTES · LIVE SKY · MORPHS · SPACED REPETITION",
    credit: "Idea, content and direction · Built with Claude · 2026",
    org: "Personal project",
    art: { src: `${D}/01-kettle-poster-2400.webp` },
    shot: { src: `${W}/00-cover.jpg` },
    motif: "kettle",
    layers: [
      { src: `${D}/01-kettle-poster-2400.webp`, label: "Home by day" },
      { src: `${D}/08-species-2400.webp`, label: "A species page" },
      { src: `${D}/02-sky-night-2400.webp`, label: "Home at night" },
      { src: `${D}/11-credits-2400.webp`, label: "The About page" },
    ],
  },
  meta: [
    { label: "Role", value: "Idea, course content, and direction. Design, motion, and code made with Claude" },
    { label: "Made with", value: "Claude, Anthropic's AI model, in Claude Code. One commit for every milestone" },
    { label: "Scope", value: "Home, atlas, species pages, flashcards, and an About page; 42 species drawn from numbers" },
    { label: "System", value: "Big Hat 4.9 underneath, with a product layer for display type, motion and the sky" },
    { label: "Live", value: "Running on Vercel", href: "https://world-of-raptors.vercel.app" },
    { label: "Source", value: "Public, the whole history included", href: "https://github.com/Konstancja-Tanjga/world-of-raptors" },
    { label: "Period", value: "October 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
    {
      id: "brief",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "What",
              value:
                "World of Raptors, the course on birds of prey I wrote for myself: twelve modules, sixty lessons, an atlas of 42 species.",
            },
            {
              key: "Problem",
              value: "The first version was correct, accessible, and plain. Nobody would stay on it for the pleasure of it.",
            },
            {
              key: "My role",
              value:
                "The course and the brief are mine; I steered and asked for changes. Claude designed, animated, and coded it with me in Claude Code.",
            },
            {
              key: "Decision 1",
              value: "Every piece of motion has to teach something about the birds. Motion that taught nothing was cut.",
              shot: { src: `${W}/04-pair-poster.webp`, alt: "The morph slider between a common buzzard and a honey buzzard", to: "#motion" },
            },
            {
              key: "Decision 2",
              value:
                "No silhouette is a drawing. Each species is about twenty numbers, so a bird can fly in its own style or turn into its look-alike.",
              shot: { src: `${W}/03-plate.webp`, alt: "The red kite as a labelled plate, leader lines from the parts of the bird to the numbers behind them", to: "#silhouettes" },
            },
            {
              key: "Decision 3",
              value:
                "The first screen is the sky above Warsaw at this hour: a kettle of migrants by day, an owl crossing the moon at night.",
              shot: { frame: "macbook", src: `${D}/01-kettle-poster-1600.webp`, alt: "The home page by day, a kettle of raptors circling a thermal", to: "#sky" },
            },
            {
              key: "Outcome",
              value:
                "Live on Vercel, source public: 42 species drawn from numbers, 282 flashcards scheduled by FSRS, 82 reference photographs, Big Hat 4.9 underneath.",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 01 */
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>A course in Polish on telling birds of prey apart in flight: the diurnal raptors and the owls of Poland, southern Spain, and the Strait of Gibraltar. <strong>The brief:</strong> a site a motion designer would put in a portfolio, without losing a course I can learn from.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/01-kettle-poster-2400.webp`, frame: "macbook", title: "Home by day", body: "The sky above Warsaw at this hour, with a kettle of soaring migrants circling in a thermal." },
            { src: `${D}/02-sky-night-2400.webp`, frame: "macbook", title: "Home at night", body: "Stars and the moon, and now and then an owl crosses it." },
            { src: `${D}/08-species-2400.webp`, frame: "macbook", title: "A species page", body: "The red kite's page opens on the bird itself, the navigation turning light over the dark scene." },
            { src: `${D}/11-credits-2400.webp`, frame: "macbook", title: "The About page", body: "Who made what, and the credit to more than two hundred photographers." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "sky",
      n: "02",
      heading: "The sky at this hour",
      standfirst: "The first screen is the sky above Warsaw right now, so it is never the same twice.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The home page works out how high the sun stands over Warsaw and <strong>paints the sky to match</strong>: dawn, day, dusk, or night.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>By day, a kettle climbs.</strong> The birds at the top glide off on their way, new ones join from below, the column never empties.",
            "<strong>At night, stars and the moon,</strong> and now and then an owl crosses it.",
            "<strong>The birds are the atlas silhouettes,</strong> seen from below as the method teaches, banking as they turn. A pause button stops the scene; with reduced motion it is one still frame.",
          ],
        },
        {
          kind: "set",
          size: "wide",
          items: [
            { src: `${W}/01-kettle-poster.webp`, caption: "Day" },
            { src: `${W}/02-sky-dawn.webp`, caption: "Dawn" },
            { src: `${W}/02-sky-dusk.webp`, caption: "Dusk" },
            { src: `${W}/02-sky-night.webp`, caption: "Night" },
          ],
          caption:
            "The same opening at four hours; the line over the title changes with the light. The day sky plays as a clip in chapter 10.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "silhouettes",
      n: "03",
      heading: "A bird from twenty numbers",
      maxim: "No silhouette in the course is a drawing. Each one is a list of numbers.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The method starts with shape, so <strong>each species is about twenty proportions</strong>: the wing's width at the body and at the wrist, the sweep of the hand, the number and depth of the fingers, the tail's length, fan, and fork, the head's projection.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>All 42 species calibrated against reference photographs,</strong> one silhouette group at a time; static SVG on the server, animated in the browser.",
            "<strong>A bird that is numbers can do what a drawing cannot:</strong> be drawn at any size, raise its wings, fold its hand, fan its tail, or turn into another bird.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${W}/03-plate.webp`,
          caption:
            "The red kite as a labelled plate on the About page; the leader lines draw themselves as the plate scrolls into view.",
        },
        {
          kind: "fold",
          title: "Two look-alikes in the source",
          hint: "Open: five lines of sylwetki.ts, the red kite and the black kite",
          blocks: [
            {
              kind: "code",
              code: `  'kania-ruda': { ...KANIE, ramie: 31, dlon: 28, nadgarstekY: -5.5, koniecY: 15.5, ogonDl: 50, ogonSrodek: [-16, -11] },
  'kania-czarna': {
    ...KANIE, ramie: 33, dlon: 31, nadgarstekY: -3.5, koniecY: 12, palce: 5.5, ogonDl: 40,
    ogonKoniec: [7.5, 14], ogonSrodek: [-5, -0.5], ogonOstry: 0.4, ogonRogi: 1.2,
  },`,
              caption:
                "The red kite has the longer, deeply forked tail (ogonDl, ogonSrodek); the black kite has broader wings (ramie, dlon) and a tail that looks almost straight when fanned. The field names are Polish, like most of the app's identifiers; the comments are in English.",
              source: {
                text: "src/lib/sylwetki.ts, lines 69–73, World of Raptors",
                href: "https://github.com/Konstancja-Tanjga/world-of-raptors/blob/f45ab7260eaecd3c0ceeaaf0a29641e175a68b4f/src/lib/sylwetki.ts#L69-L73",
              },
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "look-alikes",
      n: "04",
      heading: "Look-alikes, one slider apart",
      standfirst: "The method sorts raptors into eight silhouette groups, and what moves on screen is exactly what tells them apart.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>One silhouette steps through the eight groups</strong> on the home page, from vultures to eagles to buzzards and on, the cues from the lesson's own table changing beside it.",
            "<strong>Every diurnal species page puts the bird next to each look-alike on a slider.</strong> Drag it, and the numbers of one silhouette become the numbers of the other, each species' cues fading in as the drawing comes closer.",
            "<strong>Both play as clips in chapter 10.</strong>",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "flight",
      n: "05",
      heading: "How it flies",
      standfirst: "After shape, the second question is how the bird moves. Each diurnal species has a flight style, read from its cues in the atlas.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>A kestrel hovers</strong> on fast beats with its tail fanned; a sparrowhawk flaps in a burst and glides; a harrier rocks low from side to side; a kite steers with its tail; soaring birds hold still and drift.",
            "<strong>On the upstroke the hand folds,</strong> as in a real wingbeat.",
            "<strong>Species pages and flashcards share the animation,</strong> so what a reader learns is the movement, not one picture.",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "owls",
      n: "06",
      heading: "Owls are heard first",
      standfirst: "Ten of the 42 species are owls, and the owl module teaches them by ear before eye.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${W}/06-owls.webp`,
          caption:
            "“Nocny chór”, the night chorus on the home page: ten owls and their calls as the atlas writes them down, from the eagle owl to the pygmy owl. On an owl's own page the voice comes first, set large on a night sky, then the ear tufts, the eyes, and the facial disc.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "flashcards",
      n: "07",
      heading: "Flashcards that ask three ways",
      standfirst: "Knowing a bird means recognising its photograph, its silhouette, and its name.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>282 cards of three kinds,</strong> photographs, silhouettes, and names, scheduled by FSRS, the spaced-repetition algorithm Anki offers as an option.",
            "<strong>Photographs shown whole</strong> over a blurred copy of themselves; a crop can hide the very mark that identifies the bird.",
            "<strong>Silhouettes fly in the species' own style,</strong> at a different heading and spread on every review; the answer gives the group first, then the species.",
            "<strong>Names go both ways</strong> between Polish and English or Spanish.",
          ],
        },
        {
          kind: "duo",
          items: [
            { src: `${W}/07-card-front.webp`, caption: "The question: a silhouette in flight, against the light." },
            { src: `${W}/07-card-back.webp`, caption: "The answer: the group, the species, its cues, and the look-alike to rule out." },
          ],
          caption: "A silhouette card. Each of the four answers sets when the card comes back, from a minute to days.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "atlas",
      n: "08",
      heading: "Every bird at one scale",
      standfirst: "A wingspan in centimetres means little until you see it next to your own arms.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Three views of the 42 species:</strong> photographs, silhouettes grouped as the method teaches, and all at one scale, from the pygmy owl to the cinereous vulture.",
            "<strong>Each species page opens on its bird, full-bleed,</strong> then its plate, its flight, its wingspan to scale, its look-alikes.",
            "<strong>Every one of the 82 reference photographs has a focal point,</strong> so no crop cuts a head off. My first correction during the work, after the black kite, the goshawk, and the merlin lost theirs.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${W}/08-scale.webp`,
          caption:
            "The scale view. Every cell is the same field, as wide as the largest wingspan in the atlas; the dashed line is a person's arm span, about 170 cm.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "type-and-colour",
      n: "09",
      heading: "Type for Polish, colour from the field",
      standfirst: "Titles in Półtawski Nowy, lessons in Newsreader, the interface in the system font.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Półtawski Nowy revives the antiqua Adam Półtawski drew for Polish text in the 1920s,</strong> accents and tails designed in from the start; the revival is by Mateusz Machalski, Borys Kosmynka, and Ania Wieluńska.",
            "<strong>Newsreader, by Production Type, for long reading on screen,</strong> with an italic for the Latin names.",
            "<strong>The interface stays quiet,</strong> so the only saturated colours on screen are the birds'. Light mode is the warm paper of a field guide; dark mode takes the colours of the sky after sunset.",
          ],
        },
        {
          kind: "shot",
          width: "column",
          src: `${W}/09-type.webp`,
          caption: "Polish accents in Półtawski Nowy, on the About page.",
        },
        {
          kind: "fold",
          title: "Two palettes, one for each mode",
          hint: "Open: eight colours, each with its contrast on its background",
          blocks: [
            {
              kind: "palette",
              standfirst: "Every text colour passes WCAG AA on its background; text over the skies and photographs sits on a shade measured to pass.",
              items: [
                { hex: "#F8F3E9", name: "Paper", role: "The page in light mode: a field guide's paper" },
                { hex: "#261D17", name: "Ink", role: "Text on paper", note: "14.9:1 on Paper" },
                { hex: "#A54A24", name: "Red kite rust", role: "The accent in light mode: links, numbers, progress", note: "5.3:1 on Paper" },
                { hex: "#2B5D86", name: "Focus blue", role: "The keyboard focus ring in light mode", note: "6.3:1 on Paper" },
                { hex: "#0A1018", name: "Night", role: "The page in dark mode" },
                { hex: "#F2EEE6", name: "Bone", role: "Text on the night sky", note: "16.5:1 on Night" },
                { hex: "#F5B75B", name: "Eye gold", role: "The accent at night: a raptor's eye", note: "10.7:1 on Night" },
                { hex: "#A85556", name: "Dusk rose", role: "The middle of the dusk sky, never behind text" },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "motion",
      n: "10",
      heading: "Motion that means something",
      standfirst: "Nothing on the page waits for an animation. Four clips, one per tab.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Motion explains.</strong> A morph shows exactly what separates two groups; a hovering kestrel shows the hover.",
            "<strong>Two registers.</strong> Up to a quarter of a second answers a click; a second or more tells the story: the sky, the photo of the species of the day opening as if through binoculars, the morphs.",
            "<strong>Content first.</strong> Nothing waits for a click or a scroll to appear; scroll-linked effects run only where the browser supports them, elsewhere the page is still.",
            "<strong>Less motion is not no motion.</strong> With reduced motion set, small movements only fade, entrances are skipped, the scenes hold still. Every loop has a pause button.",
          ],
        },
        {
          kind: "tabs",
          label: "Four clips from the app",
          items: [
            {
              label: "The kettle",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "wall",
                  src: `${W}/01-kettle.mp4`,
                  poster: `${W}/01-kettle-poster.webp`,
                  title: "The home page by day: a kettle of raptors circling a thermal",
                  caption:
                    "Fourteen seconds of the home page by day: honey buzzards, black kites, booted eagles, short-toed eagles, griffon vultures, buzzards, and Egyptian vultures, the soaring migrants of the Strait.",
                },
              ],
            },
            {
              label: "Eight groups",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "wall",
                  src: `${W}/04-groups.mp4`,
                  poster: `${W}/04-groups-poster.webp`,
                  title: "The eight silhouette groups of the method, morphing from one to the next",
                  caption:
                    "One species per group: griffon vulture, golden eagle, common buzzard, red kite, marsh harrier, sparrowhawk, peregrine, and osprey. The cues are the lesson's own table.",
                },
              ],
            },
            {
              label: "Buzzard or honey buzzard",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "wall",
                  src: `${W}/04-pair.mp4`,
                  poster: `${W}/04-pair-poster.webp`,
                  title: "Common buzzard or honey buzzard: the morph slider",
                  caption:
                    "One of the pairs most often confused. Sliding pushes the head forward on a longer neck, lengthens the tail, and narrows the wings where they meet the body. This film moves one keyboard step per frame; its pace is the film's, not the app's.",
                },
              ],
            },
            {
              label: "A kestrel",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  width: "wall",
                  src: `${W}/05-kestrel.mp4`,
                  poster: `${W}/05-kestrel-poster.webp`,
                  title: "A kestrel hovering on its species page",
                  caption:
                    "Four seconds of the kestrel's page. Seen from below, a wingbeat shows as the span shortening and the hand folding on the way back up.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "credits",
      n: "11",
      heading: "How it was made, and by whom",
      maxim: "Made by two of us, with photographs from more than two hundred people.",
      standfirst: "The redesign as the tools it passed through, from the brief to the live site.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Claude Code", mark: "claude", what: "design, motion, code" },
              { name: "Next.js, React", mark: "react", what: "16 and 19" },
              { name: "Big Hat 4.9", mark: "", glyph: "BH", what: "components, colour roles" },
              { name: "ts-fsrs", mark: "", glyph: "FS", what: "the flashcard schedule" },
              { name: "Playwright", mark: "", glyph: "PW", what: "the films" },
              { name: "GitHub", mark: "github", what: "public source" },
              { name: "Vercel", mark: "", glyph: "V", what: "live" },
            ],
            stations: [
              { tool: "Claude Code", mark: "claude", file: "the brief", title: "Briefed, steered, built in one session", body: "I set the brief and asked for changes; Claude designed, animated, and coded. A commit for every milestone.", image: { src: `${W}/11-credits.webp`, alt: "The About page of the app, crediting the course to me and the design, motion, and code to Claude" } },
              { tool: "Big Hat 4.9", mark: "", file: "DS-GAPS.md", title: "Big Hat underneath, gaps recorded", body: "Components and colour roles from my design system; a product layer for display type, motion, and the sky.", image: { src: "/work/bighat-design-system/colour-roles.png", alt: "The colour roles of Big Hat, the semantic layer the app builds on" } },
              { tool: "sylwetki.ts", mark: "", file: "42 species", title: "Calibrated against photographs", body: "About twenty proportions per species, checked one silhouette group at a time.", image: { src: `${W}/03-plate.webp`, alt: "The red kite as a labelled plate, with the numbers behind each part of the bird" } },
              { tool: "Playwright", mark: "", file: "paused clock", title: "Filmed frame by frame", body: "Screenshots stepped 1/30 s under a paused clock, encoded at 30 fps: the films play at the app's speed.", image: { src: `${W}/05-kestrel-poster.webp`, alt: "A kestrel hovering on its species page, the first frame of the film" } },
              { drawing: "merge", lines: ["feature/redesign", "One commit per milestone", "Merged as f45ab72"], tool: "GitHub", mark: "github", file: "PR #14", title: "Merged, history public", body: "The redesign reached production in pull request 14; every milestone is a commit anyone can read." },
              { tool: "Vercel", mark: "", file: "world-of-raptors", title: "Live", body: "Every page but the home page generated at build time. No accounts: progress and flashcards stay in the browser.", image: { src: `${W}/01-kettle-poster.webp`, alt: "The live home page by day" } },
            ],
            block: [
              ["Sheet", "How World of Raptors was made"],
              ["Drawn for", "One redesign, from the brief to the live site"],
              ["Governed by", "one principle: every piece of motion has to teach something about the birds"],
              ["Repository", "GitHub, public, the whole history included"],
            ],
          },
        },
        {
          kind: "points",
          items: [
            "<strong>The photographs come from more than two hundred photographers and institutions on Wikimedia Commons,</strong> each credited under its photograph; the little owl in the atlas is mine.",
            "<strong>The app's About page lists every one of them,</strong> and says who made what, as this page does.",
          ],
        },
      ],
    },
  ],
};
