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
 */
export const sky: CaseStudy = {
  slug: "reading-the-sky",
  title: "Reading the sky",
  what: "World of Raptors redesigned with Claude: birds drawn from numbers, a sky that follows the sun, and motion that teaches identification",
  lead:
    "The first version of my course on birds of prey worked, and it was plain. The redesign keeps to one principle: every piece of motion has to teach something about the birds. The opening screen is the sky above Warsaw at this hour, with a kettle of migrating raptors circling in a thermal by day and an owl crossing the moon at night. Every silhouette in the course is drawn from about twenty numbers, so a buzzard can turn into a honey buzzard while the reader watches the field marks move. I wrote the course and directed the work; Claude, Anthropic's AI model, designed, animated, and built it with me.",
  status: { state: "live" },
  group: "practice",
  cover: {
    kicker: "PERSONAL PROJECT · MOTION AND INTERACTION",
    headline: ["Reading", "the sky"],
    subline: "World of Raptors, redesigned with Claude",
    stamp: "PARAMETRIC SILHOUETTES · LIVE SKY · MORPHS · SPACED REPETITION",
    credit: "Idea, content and direction · Built with Claude · 2026",
    org: "Personal project",
    art: { src: "/work/reading-the-sky/device/01-kettle-poster-2400.webp" },
    shot: { src: "/work/reading-the-sky/00-cover.jpg" },
    motif: "kettle",
    layers: [
      { src: "/work/reading-the-sky/device/01-kettle-poster-2400.webp", label: "Home by day" },
      { src: "/work/reading-the-sky/device/08-species-2400.webp", label: "A species page" },
      { src: "/work/reading-the-sky/device/02-sky-night-2400.webp", label: "Home at night" },
      { src: "/work/reading-the-sky/device/11-credits-2400.webp", label: "The About page" },
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
    /* ---------------------------------------------------------------- 01 */
    {
      id: "brief",
      n: "01",
      heading: "From plain to gripping",
      maxim: "The first version was correct, accessible, and plain.",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "Context",
              value:
                "World of Raptors is the course on birds of prey I wrote for myself: twelve modules, sixty lessons, and an atlas of 42 species, the diurnal raptors and the owls of Poland, southern Spain, and the Strait of Gibraltar. Its first version did what it had to and nothing more.",
            },
            {
              key: "Problem",
              value:
                "The first version was correct, accessible, and plain. Nobody would stay on it for the pleasure of it.",
            },
            {
              key: "My role and scope",
              value:
                "The idea, the plan of the course, and every lesson are mine. I set the brief, steered the work as it went, and asked for changes; Claude, Anthropic's AI model, designed, animated, and coded it with me in Claude Code. Home, atlas, species pages, flashcards, and an About page.",
            },
            {
              key: "Decision 1",
              value:
                "Every piece of motion has to teach something about the birds. Motion that taught nothing was cut.",
            },
            {
              key: "Decision 2",
              value:
                "No silhouette is a drawing. Each of the 42 species is about twenty numbers, so a bird can be drawn at any size, fly in its own style, or turn into its look-alike while the field marks move.",
            },
            {
              key: "Decision 3",
              value:
                "The first screen is the sky above Warsaw at this hour: a kettle of migrants in a thermal by day, an owl crossing the moon at night. It is never the same twice.",
            },
            {
              key: "Outcome",
              value:
                "Live on Vercel, with the source public and the whole history included. 42 species drawn from numbers, 282 flashcards scheduled by FSRS, 82 reference photographs, and Big Hat 4.9 underneath with each gap recorded.",
            },
            {
              key: "Period and team",
              value: "October 2026. Two of us: Claude and me, with one commit for every milestone.",
            },
          ],
        },
        {
          kind: "passage",
          html:
            "<p><strong>World of Raptors</strong> is the course on birds of prey I wrote for myself, and its first version did what it had to and nothing more.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Twelve modules, sixty lessons, and an atlas of 42 species:</strong> the diurnal raptors and the owls of Poland, southern Spain, and the Strait of Gibraltar.",
            "<strong>Nobody would stay on it for the pleasure of it.</strong> The first version was correct and accessible, and that was all.",
            "<strong>The brief was the opposite:</strong> a site a motion designer would put in a portfolio, one that keeps a reader on the page and makes them want to know more about the birds, without losing a course I can learn from.",
            "<strong>Who did what.</strong> I set the brief, steered the work as it went, and asked for changes; Claude designed, animated, and coded it in Claude Code, and kept a commit for every milestone.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: "/work/reading-the-sky/device/01-kettle-poster-2400.webp", frame: "macbook", title: "Home by day", body: "The sky above Warsaw at this hour, with a kettle of soaring migrants circling in a thermal." },
            { src: "/work/reading-the-sky/device/02-sky-dawn-2400.webp", frame: "macbook", title: "Home at dawn", body: "The same opening at dawn. The line over the title changes with the light." },
            { src: "/work/reading-the-sky/device/02-sky-dusk-2400.webp", frame: "macbook", title: "Home at dusk", body: "The sky after sunset, whose colours dark mode takes for the whole app." },
            { src: "/work/reading-the-sky/device/02-sky-night-2400.webp", frame: "macbook", title: "Home at night", body: "Stars and the moon, and now and then an owl crosses it. At night the line says the sky belongs to the owls." },
            { src: "/work/reading-the-sky/device/08-species-2400.webp", frame: "macbook", title: "A species page", body: "The red kite's page opens on the bird itself, with the navigation turning light over the dark scene." },
            { src: "/work/reading-the-sky/device/11-credits-2400.webp", frame: "macbook", title: "The About page", body: "The opening of the About page, which carries the same credit to both makers as this page." },
          ],
        },
        {
          kind: "video",
          clip: true,
          width: "wall",
          src: "/work/reading-the-sky/01-kettle.mp4",
          poster: "/work/reading-the-sky/01-kettle-poster.webp",
          title: "The home page by day: a kettle of raptors circling a thermal",
          caption:
            "Fourteen seconds of the home page by day. The birds in the kettle are the soaring migrants of the Strait: honey buzzards, black kites, booted eagles, short-toed eagles, griffon vultures, buzzards, and Egyptian vultures.",
        },
        {
          kind: "stats",
          items: [
            { value: "42", label: "species, each drawn from about twenty numbers" },
            { value: "282", label: "flashcards, scheduled by FSRS" },
            { value: "82", label: "reference photographs, each with a focal point" },
            { value: "60", label: "lessons in twelve modules" },
          ],
        },
        {
          kind: "thesis",
          label: "Who made what",
          text:
            "The course is mine. The design, the motion, and the code were made with Claude.",
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
            "<p>The home page works out how high the sun stands over Warsaw and <strong>paints the sky to match</strong>: dawn, day, dusk, or night.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>By day, a kettle climbs.</strong> Soaring migrants circle in a thermal, and the birds at the top glide off on their way, as migrants do once a thermal has lifted them high enough. New birds join from below, so the column never empties.",
            "<strong>At night, stars and the moon.</strong> Now and then an owl crosses it.",
            "<strong>The birds are the atlas silhouettes,</strong> seen from below as the method lessons teach, banking as they turn and flapping now and then.",
            "<strong>The scene can be stopped.</strong> It has a pause button, and with reduced motion it is a single still frame.",
          ],
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
            "<p>The method the course teaches starts with shape, so <strong>each species is made of about twenty proportions</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Shape first.</strong> How long and wide the wings are, the wingtip and its “fingers”, the tail, and how far the head reaches forward: that is what the method reads, and what the generator takes in.",
            "<strong>Twenty numbers, one outline seen from below:</strong> the wing's width at the body and at the wrist, how far the hand is swept back, the number and depth of the fingers, the tail's length, fan, and fork, and the head's projection.",
            "<strong>All 42 species were calibrated against reference photographs,</strong> one silhouette group at a time.",
            "<strong>A bird that is numbers can do what a drawing cannot.</strong> It can be drawn at any size, raise its wings, fold its hand, fan its tail, or turn into another bird, and the same outline renders as static SVG on the server and animates in the browser.",
          ],
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
            "<p>The method sorts raptors into eight silhouette groups, and <strong>what moves on screen is exactly what tells them apart</strong>.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>One silhouette steps through the groups</strong> on the home page, from vultures to eagles to buzzards and on, while the cues from the lesson's own table change beside it.",
            "<strong>The same idea works for single pairs.</strong> Every diurnal species page puts the bird next to each of its diurnal look-alikes on a slider.",
            "<strong>Drag it, and the numbers of one silhouette become the numbers of the other,</strong> while each species' cues fade in as the drawing comes closer to it.",
          ],
        },
        {
          kind: "video",
          clip: true,
          width: "wall",
          src: "/work/reading-the-sky/04-groups.mp4",
          poster: "/work/reading-the-sky/04-groups-poster.webp",
          title: "The eight silhouette groups of the method, morphing from one to the next",
          caption:
            "Each group is drawn by one species: griffon vulture, golden eagle, common buzzard, red kite, marsh harrier, sparrowhawk, peregrine, and osprey. The cues beside the drawing come from the lesson's own table.",
        },
        {
          kind: "video",
          clip: true,
          width: "wall",
          src: "/work/reading-the-sky/04-pair.mp4",
          poster: "/work/reading-the-sky/04-pair-poster.webp",
          title: "Common buzzard or honey buzzard: the morph slider",
          caption:
            "One of the pairs most often confused; the course compares them in the Strait of Gibraltar module. Sliding pushes the head forward on a longer neck, lengthens the tail, and narrows the wings where they meet the body.",
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
            "<p>Each diurnal species has a <strong>flight style</strong>, read from its cues in the atlas.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>A kestrel hovers</strong> on fast beats with its tail fanned.",
            "<strong>A sparrowhawk flaps in a burst and glides;</strong> a harrier rocks low from side to side.",
            "<strong>A kite steers with its tail,</strong> fanning and closing it all the time, and soaring birds hold still and drift.",
            "<strong>On the upstroke the hand folds,</strong> as it does in a real wingbeat.",
            "<strong>The species pages and the flashcards use the same animation,</strong> so what a reader learns from it is the movement, not one picture.",
          ],
        },
        {
          kind: "video",
          clip: true,
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
            "<p>Ten of the 42 species are owls, and the owl module teaches them by ear before eye. The home page answers the day sky with a night one: a chorus of the owls, each with its call as the atlas writes it down. On an owl's own page the voice comes first, set large on a night sky, then the ear tufts, the eyes, and the facial disc.</p>",
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
            "<p>The flashcards are scheduled by <strong>FSRS</strong>, the spaced-repetition algorithm Anki offers as an option: hard cards come back sooner, easy ones less and less often.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>282 cards of three kinds:</strong> photographs, silhouettes, and names.",
            "<strong>Photographs are shown whole</strong> over a blurred copy of themselves, because a crop can hide the very mark that identifies the bird.",
            "<strong>Silhouettes fly in the species' own style,</strong> at a different heading and spread on every review, and the answer gives the group first, then the species, as the method teaches.",
            "<strong>Names go both ways</strong> between Polish and English or Spanish.",
            "<strong>One card cannot give away the next.</strong> As in Anki, a new card waits until tomorrow if a card of the same species was answered today.",
          ],
        },
        {
          kind: "duo",
          items: [
            { src: "/work/reading-the-sky/07-card-front.webp", caption: "The question: a silhouette in flight, against the light." },
            { src: "/work/reading-the-sky/07-card-back.webp", caption: "The answer: the group, the species, its cues, and the look-alike to rule out." },
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
            "<p>The atlas shows the 42 species <strong>three ways</strong>: as photographs, as silhouettes grouped the way the method teaches, and all at one scale.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>One scale, from the pygmy owl to the cinereous vulture,</strong> next to a person's outstretched arms.",
            "<strong>Each species page opens on its bird, full-bleed,</strong> then its plate, its flight, its wingspan to scale, its look-alikes, and my own observation.",
            "<strong>Every one of the 82 reference photographs has a focal point,</strong> the head of a perched bird or the middle of one in flight, so no crop cuts a head off.",
            "<strong>The focal points were my first correction during the work,</strong> after the black kite, the goshawk, and the merlin lost their heads to the crop.",
          ],
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
            "<p>Titles are set in <strong>Półtawski Nowy</strong>, lessons in <strong>Newsreader</strong>, and the interface stays in the system font.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Półtawski Nowy revives the antiqua Adam Półtawski drew for Polish text in the 1920s,</strong> with the accents and tails designed in from the start; the revival is by Mateusz Machalski, Borys Kosmynka, and Ania Wieluńska.",
            "<strong>Newsreader, by Production Type, is a typeface for long reading on screen,</strong> with an italic for the Latin names.",
            "<strong>The interface is kept quiet</strong> so that the only saturated colours on screen are the birds'.",
            "<strong>Light mode is the warm paper of a field guide; dark mode takes the colours of the sky after sunset,</strong> and so does every story scene in both modes, whatever sky is drawn behind it.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/09-type.webp",
          caption: "Polish accents in Półtawski Nowy, on the About page.",
        },
        {
          kind: "palette",
          standfirst: "Two palettes, one for each mode. Every text colour passes WCAG AA on its background, and text over the skies and photos sits on a shade measured to pass.",
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
            "<strong>Content first.</strong> Nothing waits for a click or a scroll to appear. The opening entrance lasts about a second, and scroll-linked effects run only in browsers with scroll-driven animations; elsewhere the page is simply still.",
            "<strong>Less motion is not no motion.</strong> With reduced motion set in the system, small movements only fade, entrances and page transitions are skipped, and the scenes hold still. Every loop has a pause button.",
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
            { key: "data", value: "No accounts: progress, the checklist, flashcards, and my photographs stay in the browser" },
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
            "<p>The idea, the plan of the course, and all of its content are mine; <strong>the redesign was made with Claude</strong>, Anthropic's AI model, in Claude Code.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>The design, the motion, and the code</strong> were made in one long session I steered as it went, with every milestone kept as a commit.",
            "<strong>The photographs come from more than two hundred photographers and institutions on Wikimedia Commons,</strong> each credited under the photograph it belongs to.",
            "<strong>One exception:</strong> the little owl in the atlas is mine.",
            "<strong>The app's About page lists every one of them,</strong> and says who made what, as this page does.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/reading-the-sky/11-credits.webp",
          caption: "The opening of the About page in the app, which carries the same credit to both makers as this page.",
        },
      ],
    },
  ],
};
