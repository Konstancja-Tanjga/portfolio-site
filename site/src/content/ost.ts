import type { CaseStudy } from "./types";

/**
 * Ogólnopolska Strefa Talentu: the idea and the visual identity of a national
 * education programme run by Stowarzyszenie Talent. Built to the case-study
 * kit (docs/case-study-kit); the plan behind it is docs/ost-identity/KONCEPCJA.md,
 * and the cuts of 25 October 2026 are in docs/copy-edit/log-ost.md.
 *
 * Chapter numbers keep the kit's stack. 01a (Why this is a hard brief) is
 * dropped, as the kit allows; its facts live in "In short", chapter 03 and
 * UC-02. Two headings are fitted to a mark rather than a product, with the
 * author's agreement: 04 is "What the mark had to answer" (there was no audit
 * of an existing product) and 06a is "Mark architecture" (there are no
 * screens to architect). 06 has no drawing sheet: the file names no design
 * tool for the mark, and a sheet of artefacts alone would be a handoff list.
 *
 * Sources. The three concept decks (26 September 2026), the brand book 1.0
 * (October 2026, 33 pages), the print and social boards, the CRM requirements
 * of the programme for the two recruitment targets, and the generators in
 * github.com/Konstancja-Tanjga/ost-ambasador. The brand book and concept
 * boards are pages of those PDFs rendered at 3x, the print, web and social
 * boards at 2x; a few are crops or padded pages. The four stories are the
 * programme's PNG exports, and the tile diagram is drawn from its glyphs
 * (docs/ost-identity/scripts). The MacBook shots of the two generators and of
 * www.ost.edu.pl, and the two clips, were taken from the live pages on 14
 * October 2026, with the author's own portrait as the sample photo; the
 * website design in the MacBook is the PDF board set into the frame. The
 * concept was chosen by a representative of the programme; his reason is
 * paraphrased, not quoted, because his words were not written down. The test
 * of the mark with parents and pupils of grades 4 to 6 took place; its results
 * belong to the programme and are not stated.
 */
const S = "/work/ogolnopolska-strefa-talentu/screens";
const D = "/work/ogolnopolska-strefa-talentu/device";
const C = "/work/ogolnopolska-strefa-talentu/clips";

export const ost: CaseStudy = {
  slug: "ogolnopolska-strefa-talentu",
  title: "Ogólnopolska Strefa Talentu",
  what: "A visual identity that reads as a formula: ∀∃, for every student there exists a talent",
  lead:
    "Ogólnopolska Strefa Talentu is a national programme of Stowarzyszenie Talent that brings Prof. Ryszard Szubartowski's method into Polish schools. I wrote its idea as two symbols from logic, ∀∃: for every student there exists a talent. Then I drew the mark, wrote the brand book, designed every application from the letterhead to the roll-up, and built two generators that let the programme's ambassadors make their own posts.",
  /* coral on the page ground #0F0F0E: 6.2:1. The brand book allows coral text on navy for headings and highlights (C1, page 18); the page ground is darker than navy, so the same use holds */
  leadAccent: { text: "Prof. Ryszard Szubartowski's method", hex: "#FF5A36" },
  status: { state: "live" },
  group: "identity",
  cover: {
    kicker: "VISUAL IDENTITY · EDUCATION",
    headline: ["∀ For every student,", "∃ there exists a talent"],
    subline: "Ogólnopolska Strefa Talentu",
    stamp: "MARK · BRAND BOOK · PRINT · SOCIAL · GENERATORS",
    credit: "Idea and visual identity · Stowarzyszenie Talent · 2026",
    org: "Stowarzyszenie Talent",
    art: { src: `${S}/cover-diagram.webp` },
    shot: { src: "/work/ogolnopolska-strefa-talentu/00-cover.jpg" },
    layers: [
      { src: `${D}/book-formula-2400.webp`, label: "The name as a formula" },
      { src: `${D}/website-design-2400.webp`, label: "Website design, desktop and mobile" },
      { src: `${D}/social-three-2400.webp`, label: "Recruitment posts" },
      { src: `${D}/generator-ambassador-2400.webp`, label: "Ambassador generator" },
      { src: `${D}/site-home-2400.webp`, label: "www.ost.edu.pl" },
    ],
    motif: "quantifiers",
  },
  meta: [
    { label: "Role", value: "Idea, visual identity, brand book, applications, and the ambassador generators" },
    { label: "Client", value: "Stowarzyszenie Talent, for its programme Ogólnopolska Strefa Talentu" },
    { label: "Team", value: "Just me. A representative of the programme chose the concept" },
    { label: "Period", value: "Five days of work, September to October 2026" },
    { label: "Delivered", value: "Brand book 1.0 of 33 pages, the mark in 24 SVG files, print files, a Word template, 12 social graphics, two generators" },
    { label: "Live", value: "www.ost.edu.pl", href: "https://www.ost.edu.pl" },
    { label: "Generators", value: "Designed, built, and deployed by me on Vercel: ost-ambasador.vercel.app", href: "https://ost-ambasador.vercel.app" },
    { label: "Source", value: "Public on GitHub", href: "https://github.com/Konstancja-Tanjga/ost-ambasador" },
  ],
  chapters: [
    /* ---------------------------------------------------------------- 00 */
    {
      id: "in-short",
      n: "00",
      heading: "In short",
      blocks: [
        {
          kind: "brief",
          rows: [
            {
              key: "What",
              value:
                "The visual identity of a national programme that brings Prof. Szubartowski's method into Polish schools: a mark, a brand book, print, social, and two generators.",
            },
            {
              key: "Problem",
              value:
                "A name and no picture: one mark for teachers, pupils, and parents, from 15 mm on a pin to 2 m on a roll-up.",
            },
            {
              key: "My role",
              value:
                "Everything, alone: three concepts, the mark, the brand book, the print and social applications, and two browser generators for ambassadors.",
            },
            {
              key: "Decision 1",
              value:
                "Write the method as ∀∃, for every student there exists a talent. The order of the two symbols carries the idea, so the mark explains the method.",
              shot: { src: `${S}/book-origin.webp`, alt: "Brand book page: ∃∀, one pattern for everybody, against ∀∃, a talent of one's own", to: "#discovery" },
            },
            {
              key: "Decision 2",
              value:
                "The coral bar is the student. A gap keeps it apart in every version, and its height is the unit of the clear space.",
              shot: { src: `${S}/book-clearspace.webp`, alt: "Brand book page: the clear space of 2K around the mark, K being the height of the coral bar", to: "#mark-architecture" },
            },
            {
              key: "Decision 3",
              value:
                "A generator in the browser instead of a frame file: nothing covers the face, and the photo never leaves the device.",
              shot: { frame: "macbook", src: `${D}/generator-ambassador-1600.webp`, alt: "The ambassador generator with a photo inside the ∃ and the slogan beside it", to: "#use-cases" },
            },
            {
              key: "Outcome",
              value:
                "Adopted by the programme and live on www.ost.edu.pl. Recruitment opened on 13 October 2026; no result is stated here yet.",
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
            "<p>The idea, the mark, and everything the programme puts it on. The brand book, one board at a time.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${S}/book-cover.webp`, title: "The mark", body: "Horizontal logo with the tagline \"Dla każdego ucznia istnieje talent.\" (For every student there exists a talent.)" },
            { src: `${S}/book-formula.webp`, title: "The name as a formula", body: "∀ for \"Ogólnopolska\", every pupil in the country; ∃ for \"Talentu\", a talent of one's own." },
            { src: `${S}/book-versions.webp`, title: "Which version when", body: "Horizontal, vertical, with \"uczeń\" and \"talent\", the pair alone, the ∃ alone: each with its job." },
            { src: `${S}/book-mono.webp`, title: "Black and white", body: "Stamp, engraving, fax, foil: in one colour the student keeps the gap." },
            { src: `${S}/book-grounds.webp`, title: "Which version on which ground", body: "Every colourway against every background, the forbidden pairs crossed out." },
            { src: `${S}/book-hierarchy.webp`, title: "Hierarchy", body: "Slogan, lead, text, caption, footer: typeface, size for print and screen, leading, tracking." },
            { src: `${S}/book-slogans.webp`, title: "Three groups, three slogans", body: "Teachers, pupils, and parents each get one sentence that solves the mark for them." },
            { src: `${S}/book-social.webp`, title: "Social media and gadgets", body: "Avatar, post, story, a pin of 25 mm, and a sticker with a line for the pupil's own talent." },
            { src: `${S}/book-animation.webp`, title: "Four seconds", body: "Frame by frame: lines from one point, then each to its own point, then ∀∃." },
            { src: `${S}/concept-forall-keyvisual.webp`, title: "Key visual", body: "∃∀, one pattern for every pupil, against ∀∃, every pupil to a point of their own." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst:
        "Three groups from the brief, and a fourth once the programme asked people to spread the word. Each quote is the slogan written for that group, in translation.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The teacher",
              badge: "JOINS · ANY SUBJECT, ANY SIZE OF TOWN",
              quote: "Order matters.",
              context: "Grade 6 to secondary school; often a small school, often not informatics.",
              goals: ["The method in one sentence", "A programme for their subject too"],
              breaks: "Talent means olympiads in maths or physics, not their subject.",
              must: "Say the change out loud: a talent of one's own, not one pattern for all.",
              job: "JOIN",
            },
            {
              n: "02",
              name: "The pupil",
              badge: "ASKS · AGED 12 TO 19",
              quote: "Only one like you exists.",
              context: "Meets the programme on a noticeboard or in a story; decides in a second.",
              goals: ["Addressed, not assessed", "The next step: ask the teacher"],
              breaks: "Most school posters look like another lesson.",
              must: "A formula for older pupils, a plain sentence for younger ones.",
              job: "ASK",
            },
            {
              n: "03",
              name: "The parent or partner",
              badge: "TRUSTS · PARENTS, HEADS, SPONSORS",
              quote: "For every student there exists a talent.",
              context: "Needs no logic, only a reason to believe.",
              goals: ["The promise without decoding", "A credible source behind it"],
              breaks: "Symbols from logic mean nothing to most parents.",
              must: "The plain reading under the mark, always in the same words.",
              job: "TRUST",
            },
            {
              n: "04",
              name: "The ambassador",
              badge: "SHARES · SUPPORTERS OF THE PROGRAMME",
              quote: "I am an ambassador of Ogólnopolska Strefa Talentu.",
              context: "A teacher or a friend of the programme, asked to post. Not a designer.",
              goals: ["A photo of themselves with the programme's name", "Minutes, not an evening"],
              breaks: "A template file means a graphics program and questions about where to click.",
              must: "Do the composition for them; leave the face untouched.",
              job: "SHARE",
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      id: "discovery",
      n: "03",
      heading: "Discovery and research",
      maxim: "The method already had a sentence. The mark only had to write it down.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>The method starts from one conviction.</strong> Every pupil has a talent of their own; the teacher sets the conditions for finding it.",
            "<strong>The usual school order is the opposite.</strong> One pattern for the whole class: ∃∀, there exists one pattern for all. Swapped, ∀∃ states the method. Order matters became the teachers' slogan.",
            "<strong>The founder taught informatics.</strong> Symbols from logic are the method's own language.",
            "<strong>The method has a record.</strong> Pupils of Prof. Szubartowski won 126 medals at international olympiads; the parents' poster and the website carry it.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${S}/book-origin.webp`,
          folded: true,
          caption: "From the method to the mark, brand book page 03: ∃∀ is one pattern for everybody, ∀∃ is a talent of one's own (M3).",
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "what-the-mark-answers",
      n: "04",
      heading: "What the mark had to answer",
      standfirst: "The questions the concept raised, pinned to the boards that answer them. Unfamiliar symbols have to win the argument at 8 mm first.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${S}/book-not-ve.webp`,
              caption: "Four details keep the pair from reading as letters (M4).",
              hotspots: [
                { x: 14, y: 52, text: "Will people read VE or AE?" },
                { x: 43, y: 52, text: "The crossbar of ∀ sits high and runs past the arms; A has it low." },
                { x: 68, y: 45, text: "The stem of ∃ overshoots the frames; in an E it ends flush." },
                { x: 58, y: 59, text: "The middle bar is the longest and stands apart; in an E, the shortest and joined." },
              ],
            },
            {
              src: `${S}/concept-forall-15mm.webp`,
              caption: "The test at 15 mm, 8 mm, and 16 px: below about 30 mm the ∃ works alone (K2).",
              hotspots: [
                { x: 10, y: 46, text: "Does the full logo survive 15 mm? Only the mark; the name needs about 30 mm." },
                { x: 49, y: 46, text: "Is the ∃ readable at 8 mm? Yes, in colour and in black." },
                { x: 56, y: 46, text: "As a favicon of 16 px? The coral bar still separates it from a plain E." },
              ],
            },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Will laypeople understand it?</strong> As a mark, yes. The meaning travels in the tagline and the slogans, never in the symbols alone.",
            "<strong>Does coral survive on white?</strong> Not as text: 2.7:1 on warm white. Coral is a shape only; a darker coral below 25 mm (C1, C2).",
            "<strong>Does the student stay visible in one colour?</strong> Only with the gap; the joined version lost the bar in black (M2).",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      standfirst: "Three complete directions, each with logo, colour, posters, social, gadgets, motion, and its risks.",
      blocks: [
        {
          kind: "set",
          size: "wide",
          items: [
            { src: `${S}/concept-asterisk.webp`, caption: "Zadanie z gwiazdką (the starred problem): an asterisk with six arms of different length." },
            { src: `${S}/concept-cursor.webp`, caption: "Twoja kolej (your turn): a prompt and a coral cursor waiting for the pupil." },
            { src: `${S}/concept-forall.webp`, caption: "Dla każdego istnieje (for every, there exists): the pair ∀∃." },
          ],
        },
        {
          kind: "flow",
          stages: [
            { title: "Three directions", body: "Each with its own risk table. Your turn: strong with pupils, average with parents, read as informatics only." },
            { title: "The choice", body: "A representative of the programme chose ∀∃: it matched his picture of the programme and of Prof. Szubartowski, who taught informatics." },
            { title: "The drawing", body: "A bar joined to the frame against a bar with a gap. The gap won: the joined bar vanishes in black." },
          ],
          note: "The mark was tested with parents and pupils of grades 4 to 6. The results belong to the programme and are not stated here.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      standfirst: "The concept deck became a brand book. The palette and the type, which every application reuses; the two versions folded under them.",
      blocks: [
        {
          kind: "palette",
          standfirst: "Four colours, plus plain white and black. The share is for the whole set, not for each page.",
          items: [
            { hex: "#1B1F3B", name: "Navy", role: "Mark, name, and text. 45% of the set", note: "16.1:1 on white. Pantone 5255 C" },
            { hex: "#FF5A36", name: "Coral", role: "The student's bar and large shapes. 5%", note: "2.7:1 on warm white: never text there. Pantone 171 C" },
            { hex: "#D8411F", name: "Dark coral", role: "The student's bar below 25 mm. 3%", note: "4.47:1 on white: the bar only, never text. Pantone 173 C" },
            { hex: "#F4EFE6", name: "Warm white", role: "Background. 35%", note: "Plain white takes the other 12%. Pantone 9224 C" },
          ],
          caption: "Contrast to WCAG 2.2: text 4.5:1, large graphic elements 3:1 (C1, C3).",
        },
        {
          kind: "spec",
          caption: "Both free under the SIL Open Font License, so the office can install them (T1).",
          rows: [
            { key: "Archivo ExtraBold", value: "Capitals only, leading 0.9: the name in the logo, slogans, headings, large numbers. Never running text." },
            { key: "Outfit", value: "Text, leads, the tagline, labels. No italic: emphasis is weight." },
            { key: "∀ and ∃ in text", value: "Glyph files at cap height, in the colour of the text; neither typeface has them." },
          ],
        },
        {
          kind: "fold",
          title: "From the concept deck to brand book 1.0",
          hint: "Open: two versions, what each one could and could not do",
          blocks: [
            {
              kind: "evolution",
              items: [
                {
                  version: "Concept B",
                  claim: "The pair drawn with a gap, three colours, two typefaces, three slogans.",
                  sourceOfTruth: "The concept deck, 14 slides, 26 September 2026",
                  ships: "Shown to the client as one of three directions",
                  costs: "No grid, no clear space, no print colours: enough to choose, not enough to produce",
                },
                {
                  version: "Brand book 1.0",
                  claim: "Every measure in grid units, so the mark can be rebuilt without me.",
                  sourceOfTruth: "The brand book, 33 pages, October 2026, and the logo in 24 SVG files with the clear space built in",
                  ships: "Printers, the programme office, and whoever builds the website",
                  costs: "Each rule had to be derived: 72 mm for the logo with tagline follows from a tagline of 6 pt",
                  moved: "Dark coral for small sizes; Pantone and two CMYK profiles; a minimum for every version",
                },
              ],
            },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- 06a */
    {
      id: "mark-architecture",
      n: "06a",
      heading: "Mark architecture",
      maxim: "The student's bar is the ruler: every distance around the mark is measured in it.",
      standfirst: "K is the height of the coral bar. Clear space and minimum sizes follow from it; the other rule pages are folded below.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${S}/book-clearspace.webp`,
          caption: "Clear space of 2K around every version, measured without a ruler because the bar is in every version (K1). Minimum sizes: the ∃ alone 8 mm and 16 px; with tagline 72 mm and 380 px (K2).",
        },
        {
          kind: "fold",
          title: "The pages that set the rules: construction, proportions, contrast, errors",
          hint: "Open: three annotated pages, the drawing of the gap, fifteen errors",
          blocks: [
            {
              kind: "annotated",
              items: [
                {
                  id: "01",
                  title: "Construction",
                  standfirst: "164 by 88 grid units.",
                  shot: { src: `${S}/book-grid.webp` },
                  rules: [
                    { id: "M1", text: "One stroke of 12 units in both symbols." },
                    { id: "M2", text: "A gap of 8 units between the coral bar and the frame, in every version, black and white included." },
                    { id: "M4", text: "The crossbar of ∀ runs 10 units past the arms; the stem of ∃ overshoots the frames by 8." },
                  ],
                  notes: [{ label: "The bar", body: "56 by 12 units, the longest stroke in ∃. In an E the middle bar is the shortest." }],
                },
                {
                  id: "02",
                  title: "Mark, name, and tagline",
                  standfirst: "The name spans exactly the height between the frames of ∃.",
                  shot: { src: `${S}/book-proportions.webp` },
                  rules: [
                    { id: "M3", text: "∀ first, then ∃. The reversed order is an error, because it states the opposite idea." },
                  ],
                  notes: [
                    { label: "Name", body: "Three lines of 20-unit capitals, 6 units between: 72 units, frame to frame." },
                    { label: "Tagline", body: "Capitals of 8 units, 40% of the name, always the same words." },
                  ],
                },
                {
                  id: "03",
                  title: "Coral is a shape, not text",
                  standfirst: "Every pair of colours, with its ratio and what it may carry.",
                  shot: { src: `${S}/book-contrast.webp` },
                  rules: [
                    { id: "C1", text: "On a light background coral never carries text. On navy it may set headings." },
                    { id: "C2", text: "Below 25 mm the bar turns dark coral, #D8411F." },
                    { id: "C3", text: "Across the set, coral never outweighs navy." },
                  ],
                },
              ],
            },
            {
              kind: "duo",
              items: [
                { src: `${S}/concept-forall-drawing.webp`, caption: "One stroke, one logic: the joined bar against the gap; the gap was chosen (M1, M2)." },
                { src: `${S}/book-errors.webp`, caption: "Fifteen errors, from stretching to the reversed order ∃∀ and the missing gap (M2, M3)." },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      standfirst: "The website design, the identity on the programme's site, and the print and social applications, one per tab.",
      blocks: [
        {
          kind: "tabs",
          label: "The identity as delivered",
          items: [
            {
              label: "Website design",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/website-design-2400.webp`,
                  frame: "macbook",
                  caption: "My website design at 1280 and 390: the promise with the mark read aloud, \"uczeń\" under ∀ and \"talent\" under ∃, then one card per group (M3).",
                },
              ],
            },
            {
              label: "www.ost.edu.pl",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: `${D}/site-home-2400.webp`,
                  frame: "macbook",
                  caption: "The identity in use: www.ost.edu.pl, built by the programme's own team, on 14 October 2026. Logo without tagline in the header, the bar as the section marker.",
                },
              ],
            },
            {
              label: "Print and social",
              blocks: [
                {
                  kind: "carousel",
                  shape: "portrait",
                  items: [
                    { src: `${S}/social-pupils.webp`, title: "A post for pupils", body: "Older pupils get the formula, ∀x ∈ Uczniowie ∃t ∈ Talenty: x ma t; younger ones a story with the plain slogan." },
                    { src: `${S}/posters-a3.webp`, title: "A3 posters", body: "One slogan, one image, one action per group, each with a QR to the form." },
                    { src: `${S}/folder.webp`, title: "Folder", body: "220 by 310 mm, spine of 4 mm; the key visual on the cover, a pocket with slits for a card." },
                    { src: `${S}/rollup.webp`, title: "Roll-up", body: "85 by 200 cm. The slogan in the eye zone, 100 to 180 cm above the floor; a QR of 22 cm scans from about 2 m." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "use-cases",
      n: "08",
      heading: "Two use cases",
      standfirst: "The ambassadors and the recruitment campaign, each in the hands of someone who is not a designer. Open a tile; the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-ambassadors",
              n: "01",
              title: "Ambassadors and supporters",
              maxim: "A supporter should need a photo and a browser, nothing else.",
              standfirst: "Goal: a supporter posts their own photo in the programme's frame, with a slogan. Two pages of plain HTML on Vercel: ambassadors, supporters.",
              cover: { src: `${D}/generator-ambassador-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "duo",
                  items: [
                    { src: `${S}/ambassador-v1.webp`, caption: "The first frame: the coral bar across the neck of whoever is in the photo. Rejected (G1)." },
                    { src: `${D}/generator-support-story-2400.webp`, frame: "macbook", caption: "The generator: the photo inside the ∃, the bar beside it, above the slogan (G1)." },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Post my own photo in the programme's frame, without Photoshop",
                    actor: { name: "04, the ambassador", body: "A teacher or a friend of the programme.", note: "Willing to help, unwilling to learn software for one post." },
                    trigger: { body: "The programme asks a dozen people to post about the launch of recruitment.", note: "The first question back: can I have a frame for my photo?" },
                    precondition: { body: "A photo on the phone or the laptop, ideally upright with the face in the upper part." },
                    flow: [
                      { n: "1", text: "Upload a photo.", note: "Read in the browser; goes nowhere else." },
                      { n: "2", text: "Choose the slogan: \"Jestem ambasadorką\" or \"Jestem ambasadorem\"; on the support page \"Wspieram\", \"Kibicuję\", \"Popieram\".", note: "Grammatical gender is a choice, not a guess." },
                      { n: "3", text: "Choose post 4:5 or story 9:16.", note: "The two formats people publish." },
                      { n: "4", text: "Drag the photo to set the crop; the slider zooms.", note: "Arrow keys and plus and minus do the same." },
                      { n: "5", text: "Keep the duotone in navy and warm white, or switch to the original colours.", note: "A dozen photos from phones and staff rooms then look like one campaign." },
                      { n: "6", text: "Download the PNG.", note: "Made on the device, saved to Downloads." },
                    ],
                    exits: [
                      { label: "Download", text: "A finished post in the chosen format." },
                      { label: "Leave", text: "Close the tab; nothing was stored anywhere." },
                    ],
                    exitsNote: "No account and no server, so no third state such as a half-saved draft.",
                    postcondition: { body: "A post in the programme's look. The programme holds no copy of the photo, by design." },
                    why: "Rejected: a frame file to fill in. The first put the coral bar across the neck, like a censor's bar; the second needed a graphics program and patience.",
                    rule: "G1: no element of the mark touches a face.",
                    ruleNote: "The same rule places the logo on photos in print: a calm part of the frame, or a strip of navy (brand book page 30).",
                  },
                },
              ],
            },
            {
              id: "uc-recruitment",
              n: "02",
              title: "Recruitment",
              maxim: "Each post speaks to one group the programme must reach.",
              standfirst: "Goal: a teacher from a small town, who does not teach informatics, applies.",
              cover: { src: `${S}/social-series.webp` },
              blocks: [
                {
                  kind: "set",
                  size: "phone",
                  items: [
                    { src: `${S}/social-10-13_start_story.webp`, caption: "1 of 4: the programme starts; ∃∀ turns into ∀∃." },
                    { src: `${S}/social-10-14_male-miejscowosci_story.webp`, caption: "2 of 4: for everyone, also far from big cities." },
                    { src: `${S}/social-10-15_przedmioty_story.webp`, caption: "3 of 4: talent does not choose a subject." },
                    { src: `${S}/social-10-16_zespoly_story.webp`, caption: "4 of 4: apply as a team of two or three." },
                  ],
                  caption: "The four stories, scheduled for 13 to 16 October 2026; each also as an Instagram post and a LinkedIn square (S1).",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Invite a teacher from a small town who does not teach informatics",
                    actor: { name: "01, the teacher", body: "Polish, history, biology, PE, or art, in a school far from a big city.", note: "Assumes talent means olympiads in maths and informatics, not them." },
                    trigger: { body: "The first week of recruitment.", note: "Two targets: at least 60% of teachers outside informatics, at least 50% from places under 25 000 inhabitants." },
                    precondition: { body: "The application form is open at www.ost.edu.pl." },
                    flow: [
                      { n: "1", text: "Post 1 announces the programme and its idea.", note: "∃∀ turning into ∀∃ explains the mark once, for everybody." },
                      { n: "2", text: "Post 2 invites schools from small towns and villages.", note: "Points in the shape of Poland, without its outline, each with a line to its own coral point." },
                      { n: "3", text: "Post 3 lists subjects: Polish, history, biology, maths, art, PE.", note: "Each subject ends in an ∃ and a coral point." },
                      { n: "4", text: "Post 4 asks teachers to apply as a team.", note: "Three teachers in one school; the diagram branches out to eight pupils." },
                      { n: "5", text: "The teacher taps the coral button and lands on the form.", note: "Every post ends the same way: the button, the address, \"Bezpłatny udział\" (free of charge)." },
                    ],
                    exits: [
                      { label: "Slogan A", text: "The literal reading: \"Talent nie zależy od wielkości miejscowości\" (talent does not depend on the size of the town)." },
                      { label: "Slogan B", text: "The livelier line: \"Dla każdego, także daleko od dużych miast\"." },
                    ],
                    exitsNote: "The programme publishes one of the two; captions, hashtags, and alt text are written for both.",
                    postcondition: { body: "Four posts in three formats, with captions for Instagram and Facebook, a longer one for LinkedIn, and alt text." },
                    why: "Rejected: one general launch post. It speaks to everybody and therefore to nobody the targets count.",
                    rule: "S1: every post shares one foot, the coral button on navy, the address, and \"free of charge\".",
                    ruleNote: "The roll-up, the website, and the folder end with the same call to action and a QR to the same form.",
                  },
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "handoff",
      n: "09",
      heading: "Handoff",
      standfirst: "What the programme, its printers, and its web developers received. The identity works without its designer: typefaces free to install, logo files outlined, margins in the template (T1).",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Mark files", body: "28 files: six versions in four colourways, clear space in the bounds, the grid, the two glyphs, a manifest." },
            { title: "Brand book 1.0", body: "33 pages. Every measure in grid units, every colour in HEX, RGB, two CMYK profiles, and Pantone." },
            { title: "Print and office", body: "Business card, roll-up, and letterhead with bleed and eye zone marked; a Word template with styles, and an instruction for Google Docs." },
            { title: "Social and generators", body: "12 PNG files with captions, hashtags, and alt text. Two pages of plain HTML on Vercel, no build step, source on GitHub." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "evidence",
      n: "10",
      heading: "Evidence",
      standfirst: "What was measured, and the generators at work. Recruitment results are not stated: the campaign opened on 13 October 2026.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "8 mm", label: "Smallest printed mark, the ∃ alone; 16 px on screen" },
            { value: "16.1:1", label: "Navy on white; 14.0:1 on warm white" },
            { value: "2.7:1", label: "Coral on warm white, so coral never carries text there" },
          ],
        },
        {
          kind: "tabs",
          label: "The generators",
          items: [
            {
              label: "Ambassador page",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/generator-ambassador.mp4`,
                  poster: `${C}/generator-ambassador.webp`,
                  title: "The ambassador generator: slogan, zoom, crop, and colour",
                  caption: "The slogan switched, the photo zoomed and dragged, the duotone off and on again (G1).",
                },
              ],
            },
            {
              label: "Support page",
              blocks: [
                {
                  kind: "video",
                  clip: true,
                  frame: "macbook",
                  width: "wall",
                  src: `${C}/generator-story.mp4`,
                  poster: `${C}/generator-story.webp`,
                  title: "The support generator: three slogans, a post, and a story",
                  caption: "Three slogans, then the same photo as a story of 9:16 and back to a post of 4:5.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 11 */
    {
      id: "reflection",
      n: "11",
      heading: "What I would do differently",
      blocks: [
        {
          kind: "joint",
          question: "What would I do differently?",
          answers: [
            "<strong>Test the ambassador frame on real photos before sending it.</strong> Drawn around a placeholder silhouette; on a real portrait the bar crossed the neck.",
            "<strong>Build the four-second animation, not only describe it.</strong> A file in code would leave the video team nothing to interpret.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure, and how?",
          answers: [
            "<strong>The two recruitment targets.</strong> Teachers outside informatics, and places under 25 000 inhabitants, from the programme's records at the end of recruitment.",
            "<strong>Whether ambassadors post.</strong> The generators collect nothing, so the count comes from posts tagged #OgólnopolskaStrefaTalentu.",
          ],
        },
      ],
    },
  ],
};
