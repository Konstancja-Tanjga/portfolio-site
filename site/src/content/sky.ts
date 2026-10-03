import type { CaseStudy } from "./types";

/**
 * World of Raptors, redesigned: the companion to the `world-of-raptors` wall.
 * That wall is the course and the design system it tested; this one is the
 * redesign that turned the course into a sky you can read. It sits in
 * `practice` for the same reason that wall does: a personal project, run
 * end to end.
 *
 * I wrote the course and directed the redesign; Claude, Anthropic's AI model,
 * designed, animated and built it with me in Claude Code. The credit says
 * both, in this file and on the app's About page (/o-projekcie), because both
 * are true; change them together.
 *
 * The screens are the app in Polish, as on the `world-of-raptors` wall, taken
 * from World of Raptors `feature/redesign` at commit 6d16cea, running
 * locally; the sky shots set the hour with `?pora=`. The redesign reached
 * production in World of Raptors PR #14 (merge commit f45ab72), which the
 * code snippet's link pins. The films are not screen
 * recordings: each frame is a screenshot taken under Playwright's paused
 * clock, stepped exactly 1/30 s per frame and encoded at 30 fps, so they play
 * at the app's speed. The look-alike slider film is the exception: it moves
 * one keyboard step (1%) per frame and its clock never runs, so its pace was
 * chosen for the film, not the app's.
 */
export const sky: CaseStudy = {
  slug: "reading-the-sky",
  title: "Reading the sky",
  what: "World of Raptors redesigned with Claude: birds drawn from numbers, a sky that follows the sun, and motion that teaches identification",
  lead:
    "The first version of my course on birds of prey worked, and it was plain. The redesign keeps to one principle: every piece of motion has to teach something about the birds. The opening screen is the sky above Warsaw at this hour, with a kettle of migrating raptors circling in a thermal by day and an owl crossing the moon at night. Every silhouette in the course is drawn from about twenty numbers, so a buzzard can turn into a honey buzzard while the reader watches the field marks move. I wrote the course and directed the work; Claude, Anthropic's AI model, designed, animated and built it with me.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · MOTION AND INTERACTION",
    headline: ["Reading", "the sky"],
    subline: "World of Raptors, redesigned with Claude",
    stamp: "PARAMETRIC SILHOUETTES · LIVE SKY · MORPHS · SPACED REPETITION",
    credit: "Idea, content and direction · Built with Claude · 2026",
    shot: { src: "/work/reading-the-sky/00-cover.jpg" },
  },
  meta: [
    { label: "Role", value: "Idea, course content and direction. Design, motion and code made with Claude" },
    { label: "Made with", value: "Claude, Anthropic's AI model, in Claude Code. One commit for every milestone" },
    { label: "Scope", value: "Home, atlas, species pages, flashcards and an About page; 42 species drawn from numbers" },
    { label: "System", value: "Big Hat 4.9 underneath, with a product layer for display type, motion and the sky" },
    { label: "Live", value: "Running on Vercel", href: "https://world-of-raptors.vercel.app" },
    { label: "Source", value: "Public, the whole history included", href: "https://github.com/Konstancja-Tanjga/world-of-raptors" },
    { label: "Period", value: "October 2026" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 01 */
    {
      id: "brief",
      n: "01",
      heading: "From plain to gripping",
      maxim: "The first version ended on a sentence I did not enjoy writing: correct, accessible, and plain.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>World of Raptors is the course on birds of prey I wrote for myself: twelve modules, sixty lessons and an atlas of 42 species, the diurnal raptors and the owls of Poland, southern Spain and the Strait of Gibraltar. Its first version did what it had to and nothing more. Nobody would stay on it for the pleasure of it.</p><p>So I asked for the opposite: a site a motion designer would put in a portfolio, one that keeps a reader on the page and makes them want to know more about the birds, without losing a course I can actually learn from. I worked on it with Claude in Claude Code. I set the brief, steered the work as it went and asked for changes; Claude designed, animated and coded it, and kept a commit for every milestone.</p>",
        },
        {
          kind: "video",
          width: "wall",
          src: "/work/reading-the-sky/01-kettle.mp4",
          poster: "/work/reading-the-sky/01-kettle-poster.webp",
          title: "The home page by day: a kettle of raptors circling a thermal",
          caption:
            "Fourteen seconds of the home page by day. The birds in the kettle are the soaring migrants of the Strait: honey buzzards, black kites, booted eagles, short-toed eagles, griffon vultures, buzzards and Egyptian vultures.",
        },
        {
          kind: "thesis",
          label: "Who made what",
          text:
            "The idea, the plan of the course and every lesson are mine. The design, the motion and the code were made with Claude: I decided what the course needed and where it fell short, and Claude proposed, built and revised it. The app says the same on its own About page.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "sky",
      n: "02",
      heading: "The sky at this hour",
      maxim: "The first screen is the sky above Warsaw right now, so it is never the same twice.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The home page works out how high the sun stands over Warsaw and paints the sky to match: dawn, day, dusk or night. By day a kettle of migrating raptors circles in a thermal and climbs, and the birds at the top peel off to the south-west, the way autumn migrants leave the Strait of Gibraltar. New birds join from below, so the column never empties. At night there are stars and the moon, and now and then an owl crosses it.</p><p>The birds are the atlas silhouettes, seen from below as the method lessons teach, banking as they turn and flapping now and then. The scene has a pause button, and with reduced motion it is a single still frame.</p>",
        },
        {
          kind: "set",
          size: "wide",
          items: [
            { src: "/work/reading-the-sky/02-sky-dawn.webp", caption: "Dawn" },
            { src: "/work/reading-the-sky/02-sky-dusk.webp", caption: "Dusk" },
            { src: "/work/reading-the-sky/02-sky-night.webp", caption: "Night" },
          ],
          caption:
            "The same opening at dawn, dusk and night; the film above is the day. The line over the title changes with the light: at night it says the sky belongs to the owls, which are heard more often than seen.",
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
            "<p>The method the course teaches starts with shape: how long and wide the wings are, the wingtip and its “fingers”, the tail, how far the head reaches forward. So that is what each species is made of. A generator turns about twenty proportions into an outline seen from below: the wing's width at the body and at the wrist, how far the hand is swept back, the number and depth of the fingers, the tail's length, fan and fork, and the head's projection.</p><p>All 42 species were calibrated against reference photographs, one silhouette group at a time. Because a bird is numbers, it can be drawn at any size, raise its wings, fold its hand, fan its tail or turn into another bird, and the same outline renders as static SVG on the server and animates in the browser.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/03-plate.webp",
          caption:
            "The red kite as a labelled plate on the About page. The leader lines draw themselves as the plate scrolls into view, from the parts of the bird to the numbers behind them.",
        },
        {
          kind: "code",
          code: `  'kania-ruda': { ...KANIE, ramie: 31, dlon: 28, nadgarstekY: -5.5, koniecY: 15.5, ogonDl: 50, ogonSrodek: [-16, -11] },
  'kania-czarna': {
    ...KANIE, ramie: 33, dlon: 31, nadgarstekY: -3.5, koniecY: 12, palce: 5.5, ogonDl: 40,
    ogonKoniec: [7.5, 14], ogonSrodek: [-5, -0.5], ogonOstry: 0.4, ogonRogi: 1.2,
  },`,
          caption:
            "Two look-alikes, side by side in the source. The red kite has the longer, deeply forked tail (ogonDl, ogonSrodek); the black kite has broader wings (ramie, dlon) and a tail that looks almost straight when fanned. The field names are Polish, like most of the app's identifiers; its comments are in English.",
          source: {
            text: "src/lib/sylwetki.ts, lines 69–73, World of Raptors",
            href: "https://github.com/Konstancja-Tanjga/world-of-raptors/blob/f45ab7260eaecd3c0ceeaaf0a29641e175a68b4f/src/lib/sylwetki.ts#L69-L73",
          },
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "look-alikes",
      n: "04",
      heading: "Look-alikes, one slider apart",
      maxim: "When one bird turns into another, the only things that move are the field marks.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The method sorts raptors into eight silhouette groups. On the home page one silhouette steps through them, from vultures to eagles to buzzards and on, while the cues from the lesson's own table change beside it. What moves on screen is exactly what tells the groups apart.</p><p>The same idea works for single pairs. Every diurnal species page puts the bird next to each of its diurnal look-alikes on a slider: drag it, and the numbers of one silhouette become the numbers of the other, while each species' cues fade in as the drawing comes closer to it.</p>",
        },
        {
          kind: "video",
          width: "wall",
          src: "/work/reading-the-sky/04-groups.mp4",
          poster: "/work/reading-the-sky/04-groups-poster.webp",
          title: "The eight silhouette groups of the method, morphing from one to the next",
          caption:
            "Each group is drawn by one species: griffon vulture, golden eagle, common buzzard, red kite, marsh harrier, sparrowhawk, peregrine and osprey, and the cues beside the drawing come from the lesson's own table.",
        },
        {
          kind: "video",
          width: "wall",
          src: "/work/reading-the-sky/04-pair.mp4",
          poster: "/work/reading-the-sky/04-pair-poster.webp",
          title: "Common buzzard or honey buzzard: the morph slider",
          caption:
            "One of the pairs most often confused; the course compares them in the Strait of Gibraltar module. Sliding pushes the head forward on a longer neck, lengthens the tail and narrows the wings where they meet the body.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "flight",
      n: "05",
      heading: "How it flies",
      maxim: "After shape, the second question is how the bird moves.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Each diurnal species has a flight style, read from its cues in the atlas. A kestrel hovers on fast beats with its tail fanned. A sparrowhawk flaps in a burst and glides. A harrier rocks low from side to side. A kite steers with its tail, fanning and closing it all the time. Soaring birds hold still and drift. On the upstroke the hand folds, as it does in a real wingbeat.</p><p>The species pages and the flashcards use the same animation, so what a reader learns from it is the movement, not one picture.</p>",
        },
        {
          kind: "video",
          width: "column",
          src: "/work/reading-the-sky/05-kestrel.mp4",
          poster: "/work/reading-the-sky/05-kestrel-poster.webp",
          title: "A kestrel hovering on its species page",
          caption:
            "Four seconds of the kestrel's page. Seen from below, a wingbeat shows as the span shortening and the hand folding on the way back up.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "owls",
      n: "06",
      heading: "Owls are heard first",
      maxim: "The course is about birds of prey by day and by night, and at night you listen.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Ten of the 42 species are owls, and the owl module teaches them by ear before eye. The home page answers the day sky with a night one: a chorus of the owls, each with its call as the atlas writes it down. On an owl's own page the voice comes first, set large on a night sky, then the ear tufts, the eyes and the facial disc.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/06-owls.webp",
          caption: "“Nocny chór”, the night chorus on the home page: ten owls and their calls, from the eagle owl to the pygmy owl.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "flashcards",
      n: "07",
      heading: "Flashcards that ask three ways",
      maxim: "Knowing a bird means recognising its photograph, its silhouette and its name.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The flashcards are scheduled by FSRS, the spaced-repetition algorithm newer versions of Anki use: hard cards come back sooner, easy ones less and less often. The deck has 282 cards of three kinds. Photographs are shown whole over a blurred copy of themselves, because a crop can hide the very mark that identifies the bird. Silhouettes fly in the species' own style, at a different heading and spread on every review, and the answer gives the group first, then the species, as the method teaches. Names go both ways between Polish and English or Spanish.</p><p>As in Anki, a new card waits until tomorrow if a card of the same species was answered today, so one card cannot give away the next.</p>",
        },
        {
          kind: "duo",
          items: [
            { src: "/work/reading-the-sky/07-card-front.webp", caption: "The question: a silhouette in flight, against the light." },
            { src: "/work/reading-the-sky/07-card-back.webp", caption: "The answer: the group, the species, its cues and the look-alike to rule out." },
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
      maxim: "A wingspan in centimetres means little until you see it next to your own arms.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The atlas shows the 42 species three ways: as photographs, as silhouettes grouped the way the method teaches, and all at one scale, from the pygmy owl to the cinereous vulture, next to a person's outstretched arms. Each species page opens on its bird, full-bleed, then its plate, its flight, its wingspan to scale, its look-alikes and my own observation.</p><p>Every one of the 82 reference photographs has a focal point, the head of a perched bird or the middle of one in flight, so no crop cuts a head off. That was my first correction during the work, after the black kite, the goshawk and the merlin lost theirs.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/08-species.webp",
          caption: "The red kite's page opens on the bird itself, with the navigation turning light over the dark scene.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/08-scale.webp",
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
      maxim: "A course in Polish should be set in a typeface drawn for Polish.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>Titles are set in Półtawski Nowy, a revival of the antiqua Adam Półtawski drew for Polish text in the 1920s, with the accents and tails designed in from the start; the revival is by Mateusz Machalski, Borys Kosmynka and Ania Wieluńska. Lessons are set in Newsreader by Production Type, a typeface for long reading on screen, with an italic for the Latin names. The interface stays in the system font.</p><p>The interface is kept quiet so that the only saturated colours on screen are the birds'. Light mode is the warm paper of a field guide; dark mode takes the colours of the sky after sunset, and so does every story scene in both modes, whatever sky is drawn behind it.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/09-type.webp",
          caption: "Polish accents in Półtawski Nowy, on the About page.",
        },
        {
          kind: "palette",
          standfirst: "Two palettes, one for each mode. Every pair of text and background passes WCAG AA.",
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

    /* ---------------------------------------------------------------- 10 */
    {
      id: "motion",
      n: "10",
      heading: "Motion that means something",
      maxim: "Nothing on the page waits for an animation.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Motion explains.</strong> A morph shows exactly what separates two groups, and a hovering kestrel shows the hover. Motion that taught nothing was cut.",
            "<strong>Two registers.</strong> Short motion, up to a quarter of a second, answers a click. Long motion, a second or longer, tells the story: the sky, the photo of the species of the day opening as if through binoculars, the morphs.",
            "<strong>Content first.</strong> Every page is complete from its first frame. Scroll-linked effects run only in browsers with scroll-driven animations; elsewhere the page is simply still.",
            "<strong>Less motion is not no motion.</strong> With reduced motion set in the system, movement turns into fading and the scenes hold still. Every loop has a pause button.",
          ],
        },
        {
          kind: "spec",
          caption: "Under the hood.",
          rows: [
            { key: "design system", value: "Big Hat 4.9 for components and colour roles, with a product layer for what it does not cover, each gap recorded in DS-GAPS.md" },
            { key: "framework", value: "Next.js 16 and React 19, every page but the home page generated at build time" },
            { key: "birds", value: "Canvas and SVG drawn from numbers; no image files for any silhouette" },
            { key: "repetition", value: "FSRS through ts-fsrs" },
            { key: "lessons", value: "Markdown files, readable on GitHub without the app" },
            { key: "data", value: "No accounts: progress, the checklist, flashcards and my photographs stay in the browser" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "credits",
      n: "11",
      heading: "Credits",
      maxim: "Made by two of us, with photographs from more than two hundred people.",
      blocks: [
        {
          kind: "passage",
          html:
            "<p>The idea, the plan of the course and all of its content are mine. The redesign was made with Claude, Anthropic's AI model, in Claude Code: the design, the motion and the code, in one long session I steered as it went, with every milestone kept as a commit.</p><p>The photographs come from more than two hundred photographers and institutions on Wikimedia Commons, each credited under the photograph it belongs to; the one exception is the little owl in the atlas, which is mine. The app's About page lists every one of them.</p>",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/11-credits.webp",
          caption: "The opening of the About page in the app.",
        },
      ],
    },
  ],
};
