import type { CaseStudy } from "./types";

/**
 * Ogólnopolska Strefa Talentu: the idea and the visual identity of a national
 * education programme run by Stowarzyszenie Talent. Built to the case-study
 * kit (docs/case-study-kit); the plan behind it is docs/ost-identity/KONCEPCJA.md.
 *
 * Chapter numbers keep the kit's stack. Two headings are fitted to a mark
 * rather than a product, with the author's agreement: 04 is "What the mark
 * had to answer" (there was no audit of an existing product) and 06a is "Mark
 * architecture" (there are no screens to architect).
 *
 * Sources. The three concept decks (26 September 2026), the brand book 1.0
 * (October 2026, 33 pages), the print and social boards, the CRM requirements
 * of the programme for the two recruitment targets, and the generators in
 * github.com/Konstancja-Tanjga/ost-ambasador. Every board on this page is a
 * page of those PDFs, rendered at 3x; the MacBook shots and the two clips
 * were taken from the live generators on 14 October 2026, with the author's
 * own portrait as the sample photo. The concept was chosen by a
 * representative of the programme; his reason is paraphrased, not quoted,
 * because his words were not written down. The test of the mark with parents
 * and pupils of grades 4 to 6 took place; its results belong to the
 * programme and are not stated.
 */
const S = "/work/ogolnopolska-strefa-talentu/screens";
const D = "/work/ogolnopolska-strefa-talentu/device";
const C = "/work/ogolnopolska-strefa-talentu/clips";

export const ost: CaseStudy = {
  slug: "ogolnopolska-strefa-talentu",
  title: "Ogólnopolska Strefa Talentu",
  what: "A visual identity that reads as a formula: ∀∃, for every student there exists a talent",
  lead:
    "Ogólnopolska Strefa Talentu is a national programme of Stowarzyszenie Talent that brings prof. Ryszard Szubartowski's method into Polish schools. I wrote its idea as two symbols from logic, ∀∃: for every student there exists a talent. Then I drew the mark, wrote the brand book, designed every application from the letterhead to the roll-up, and built two generators that let the programme's ambassadors make their own posts.",
  /* coral on the page ground #0F0F0E: 6.2:1, and the brand book allows coral text on dark grounds (C1) */
  leadAccent: { text: "prof. Ryszard Szubartowski's method", hex: "#FF5A36" },
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
    overlay: "quantifiers",
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
              key: "Context",
              value:
                "Stowarzyszenie Talent started a pilot that brings prof. Szubartowski's method to teachers of pupils from grade 6 to secondary school, across Poland and free of charge.",
            },
            {
              key: "Problem",
              value:
                "The programme had a name and no picture. One mark had to speak to teachers, pupils and parents, and work from a pin of 15 mm to a roll-up of 2 m.",
            },
            {
              key: "My role and scope",
              value:
                "Alone: three concepts, the mark, the brand book, the print and social applications, and two browser generators for ambassadors.",
            },
            {
              key: "Decision 1",
              value:
                "Write the method as ∀∃. The order of the two symbols carries the idea, so the mark explains the method instead of decorating it.",
            },
            {
              key: "Decision 2",
              value:
                "The coral bar is the student. A gap keeps it apart in every version, and its height is the unit of the clear space.",
            },
            {
              key: "Decision 3",
              value:
                "A generator in the browser instead of a frame file: nothing covers the face, and the photo never leaves the device.",
            },
            {
              key: "Outcome",
              value:
                "Adopted by the programme and live on www.ost.edu.pl. Recruitment opened on 13 October 2026; no result is stated here yet.",
            },
            {
              key: "Period and team",
              value: "Five days of work between September and October 2026. I worked alone; a representative of the programme chose the concept.",
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
      maxim: "The name of the programme became a formula a pupil can read.",
      standfirst: "What I delivered in five days of work, then the brand book and its artefacts, one board at a time.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>The idea.</strong> ∀ means \"for every\" and ∃ means \"there exists\". Side by side they read as the programme's promise: for every student there exists a talent.",
            "<strong>The mark.</strong> Both symbols drawn on one grid with one stroke, and a coral bar for the student that never touches the frame around it.",
            "<strong>The brand book.</strong> 33 pages: construction, versions, clear space, minimum sizes, colour with contrast ratios, type, slogans, and errors.",
            "<strong>The applications.</strong> Letterhead with a Word template, business card, folder, roll-up, a one-page website, and a series of four posts in three formats.",
            "<strong>Five days.</strong> From the three concepts to the brand book and every application on this page.",
            "<strong>Two generators, designed and deployed by me on Vercel.</strong> Ambassadors and supporters upload a photo, choose a slogan, and download a finished post. No server, no account, no Photoshop.",
          ],
        },
        {
          kind: "carousel",
          items: [
            { src: `${S}/book-cover.webp`, title: "The mark", body: "Horizontal logo with the tagline \"Dla każdego ucznia istnieje talent.\" (For every student there exists a talent.)" },
            { src: `${S}/book-origin.webp`, title: "From the method to the mark", body: "∃∀ is one pattern for everybody; ∀∃ is a talent of one's own. Order matters." },
            { src: `${S}/book-formula.webp`, title: "The name as a formula", body: "∀ stands for \"Ogólnopolska\", every pupil in the country; ∃ stands for \"Talentu\", a talent of one's own." },
            { src: `${S}/book-grid.webp`, title: "The grid", body: "164 by 88 units, one stroke of 12, a gap of 8 between the coral bar and the frame (M1, M2)." },
            { src: `${S}/book-not-ve.webp`, title: "Not \"VE\", not \"AE\"", body: "Four details that keep the pair from reading as letters (M4)." },
            { src: `${S}/book-versions.webp`, title: "Which version when", body: "Horizontal, vertical, with the words \"uczeń\" and \"talent\", the pair alone, the ∃ alone: each with the job it is for." },
            { src: `${S}/book-mono.webp`, title: "Black and white", body: "Stamp, engraving, fax, foil: in one colour the student keeps the gap." },
            { src: `${S}/book-grounds.webp`, title: "Which version on which ground", body: "Every colourway against every background, the forbidden pairs crossed out." },
            { src: `${S}/book-palette.webp`, title: "Colour", body: "Navy, coral, dark coral, and warm white, each with HEX, RGB, two CMYK profiles, and Pantone." },
            { src: `${S}/book-hierarchy.webp`, title: "Hierarchy", body: "Slogan, lead, text, caption, footer: typeface, size for print and screen, leading, tracking." },
            { src: `${S}/book-slogans.webp`, title: "Three groups, three slogans", body: "Teachers, pupils, and parents each get one sentence that solves the mark for them." },
            { src: `${S}/book-media.webp`, title: "Print and screen", body: "Letter, poster, and website header, each with where the logo sits and which version." },
            { src: `${S}/book-social.webp`, title: "Social media and gadgets", body: "Avatar, post, story, a pin of 25 mm, and a sticker that leaves a line for the pupil's own talent." },
            { src: `${S}/book-engraving.webp`, title: "Engraving, stamp, photographs", body: "One-colour versions for the stamp and the engraving, and where the logo may sit on a photo (G1)." },
            { src: `${S}/book-animation.webp`, title: "Four seconds", body: "The mark animated frame by frame: lines from one point, then each to its own point, then ∀∃." },
            { src: `${S}/concept-forall-keyvisual.webp`, title: "Key visual", body: "∃∀, one pattern for every pupil, against ∀∃, every pupil to a point of their own." },
            { src: `${S}/social-series.webp`, title: "Social series", body: "Four posts for the first week of recruitment, each in three formats." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      id: "who-for",
      n: "02",
      heading: "Who it is for",
      standfirst: "The three groups from the brief, and a fourth that appeared once the programme asked people to spread the word.",
      blocks: [
        {
          kind: "personas",
          standfirst:
            "The line in quotation marks on each card is the slogan written for that group, in translation. It is what the identity says to them, not something they said.",
          items: [
            {
              n: "01",
              name: "The teacher",
              badge: "JOINS · ANY SUBJECT, ANY SIZE OF TOWN",
              quote: "Order matters.",
              context: "Teaches pupils from grade 6 to secondary school, often in a small school, and often a subject other than informatics.",
              goals: [
                "Understand the method in one sentence",
                "See that the programme is for their subject too",
                "Apply with two or three colleagues from the same school",
              ],
              breaks: "Talent is usually associated with olympiads in maths or physics, not with their subject.",
              must: "Say the change in approach out loud: not one pattern for everybody, a talent of one's own for each.",
              job: "JOIN",
            },
            {
              n: "02",
              name: "The pupil",
              badge: "ASKS · AGED 12 TO 19",
              quote: "There is only one like you.",
              context: "Meets the programme on a school noticeboard or in a story, and decides in a second whether it is for them.",
              goals: ["Feel addressed, not assessed", "Know what to do next: ask the teacher"],
              breaks: "Most school posters look like another lesson.",
              must: "Give older pupils a formula to decode, and younger ones a plain sentence.",
              job: "ASK",
            },
            {
              n: "03",
              name: "The parent or partner",
              badge: "TRUSTS · PARENTS, HEADS, SPONSORS",
              quote: "For every student there exists a talent.",
              context: "Needs no logic to follow the programme, only a reason to believe it.",
              goals: ["Read the promise without decoding anything", "See a credible source behind it"],
              breaks: "Symbols from logic mean nothing to most parents.",
              must: "Carry the plain reading of the mark under it, always in the same words.",
              job: "TRUST",
            },
            {
              n: "04",
              name: "The ambassador",
              badge: "SHARES · SUPPORTERS OF THE PROGRAMME",
              quote: "I am an ambassador of Ogólnopolska Strefa Talentu.",
              context: "A teacher or a friend of the programme, asked to post about the launch. Not a designer.",
              goals: ["Post a photo of themselves with the programme's name", "Spend minutes, not an evening"],
              breaks: "A template file means a graphics program and a dozen questions about where to click.",
              must: "Do the composition for them, and leave the face untouched.",
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
            "<strong>The method starts from one conviction.</strong> Every pupil has a talent of their own, and the teacher's job is to set the conditions for finding it. The pupil does the thinking.",
            "<strong>The usual school order is the opposite.</strong> One pattern for the whole class, every pupil measured against it. Written in logic, that is ∃∀: there exists one pattern for all.",
            "<strong>Swapping the two symbols states the method.</strong> ∀∃, for every pupil there exists their own. The order of the quantifiers carries the whole idea, which became the teachers' slogan: order matters.",
            "<strong>The founder taught informatics.</strong> Symbols from logic belong to his subject and to mathematics, so they read as the method's own language rather than a borrowed one.",
            "<strong>The method has a record.</strong> Pupils of prof. Szubartowski won 126 medals at international olympiads, the proof the parents' poster and the website carry.",
            "<strong>Pupils already have a phrase for going beyond the syllabus.</strong> \"Zadanie z gwiazdką\", the starred problem in a Polish textbook, became the first concept.",
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
      maxim: "A mark made of unfamiliar symbols has to win the argument at 8 mm first.",
      standfirst: "The questions the concept raised, pinned to the boards that answer them.",
      blocks: [
        {
          kind: "duo",
          items: [
            {
              src: `${S}/book-not-ve.webp`,
              caption: "Four details keep the pair from reading as letters (M4).",
              hotspots: [
                { x: 14, y: 52, text: "Will people read VE or AE?" },
                { x: 43, y: 52, text: "The crossbar of ∀ sits high and runs past the arms. V has none; A has it low, between the arms." },
                { x: 68, y: 45, text: "The stem of ∃ overshoots the frames. In an E it ends flush." },
                { x: 58, y: 59, text: "The middle bar is the longest and stands apart. In an E it is the shortest and joined." },
              ],
            },
            {
              src: `${S}/concept-forall-15mm.webp`,
              caption: "The test at 15 mm, 8 mm, and 16 px: below about 30 mm the ∃ works alone (K2).",
              hotspots: [
                { x: 10, y: 46, text: "Does the full logo survive 15 mm? Only the mark does; the name needs about 30 mm." },
                { x: 49, y: 46, text: "Is the ∃ still readable at 8 mm? Four rectangles and a gap: yes, in colour and in black." },
                { x: 56, y: 46, text: "And as a favicon of 16 px? The coral bar still separates it from a plain E." },
              ],
            },
          ],
        },
        {
          kind: "points",
          items: [
            "<strong>Will laypeople understand it?</strong> As a mark, yes: a geometric pair with a coral accent. The meaning travels in the tagline and the slogans, never in the symbols alone.",
            "<strong>Does coral survive on white?</strong> Not as text: 2.7:1 on warm white. Coral became a shape only, and a darker coral took over below 25 mm (C1, C2).",
            "<strong>Does the student stay visible in one colour?</strong> Only if the gap stays. The joined version lost the bar in black and was dropped (M2).",
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "prototypes",
      n: "05",
      heading: "First prototypes",
      maxim: "Three concepts, each judged by its own risks before anyone else judged it.",
      standfirst: "I presented three complete directions, each with logo, colour, posters, social, gadgets, and motion, and a table of strengths and risks.",
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
            { title: "The starred problem", body: "Every pupil deserves the problem beyond the syllabus; each pupil and school gets a unique asterisk from a generator." },
            { title: "Your turn", body: "My own risk table named the flaw: strong with pupils, average with parents, and read as informatics only." },
            { title: "For every, there exists", body: "Strong with teachers and with parents; risky only because the symbols are unfamiliar, which a fixed tagline answers." },
            { title: "The choice", body: "A representative of the programme chose ∀∃. It matched his picture of the programme and of prof. Szubartowski, who taught informatics." },
            { title: "The drawing", body: "A bar joined to the frame against a bar with a gap. The gap won, because the joined bar vanishes in black." },
          ],
          note: "The mark was tested with parents and pupils of grades 4 to 6. The results belong to the programme and are not stated here.",
        },
        {
          kind: "duo",
          items: [
            { src: `${S}/concept-cursor-risks.webp`, caption: "Strengths and risks of \"Your turn\": the main risk is a link with informatics alone." },
            { src: `${S}/concept-forall-drawing.webp`, caption: "One stroke, one logic: the joined bar against the gap, which was chosen (M1, M2)." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "design-system",
      n: "06",
      heading: "Design system",
      maxim: "Navy leads, coral marks the student, and coral never outweighs navy.",
      standfirst: "The concept deck became a brand book; the palette and the type are the parts every application reuses.",
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
              moved: "Dark coral added for small sizes; Pantone and two CMYK profiles; a minimum for every version",
            },
          ],
        },
        {
          kind: "palette",
          standfirst: "Four colours, plus plain white and black. The share is for the whole set of materials, not for each page.",
          items: [
            { hex: "#1B1F3B", name: "Navy", role: "Mark, name, and text. 45% of the set", note: "15.7:1 on white, 13.7:1 on warm white. Pantone 5255 C" },
            { hex: "#FF5A36", name: "Coral", role: "The student's bar and large shapes. 5%", note: "2.7:1 on warm white, so never text there; 5.1:1 on navy, so headings on navy may use it. Pantone 171 C" },
            { hex: "#D8411F", name: "Dark coral", role: "The student's bar below 25 mm. 3%", note: "4.5:1 on white. Pantone 173 C" },
            { hex: "#F4EFE6", name: "Warm white", role: "Background. 35%", note: "Plain white takes the other 12%. Pantone 9224 C" },
          ],
          caption: "Contrast measured to WCAG 2.2: text needs 4.5:1, large graphic elements 3:1 (C1, C3).",
        },
        {
          kind: "spec",
          caption: "Both typefaces are free under the SIL Open Font License, so the programme office can install them (T1).",
          rows: [
            { key: "Archivo ExtraBold", value: "Width 78 on the variable axis, capitals only, leading 0.9. The name in the logo, slogans, headings, large numbers. Never running text." },
            { key: "Outfit", value: "Regular for text and captions, Medium for leads, the tagline and footers, SemiBold for labels. No italic: emphasis is weight." },
            { key: "∀ and ∃ in text", value: "Set from glyph files at cap height, in the colour of the text, because neither typeface has them." },
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
      standfirst: "The four pages of the brand book that set the rules the rest of the system obeys.",
      blocks: [
        {
          kind: "annotated",
          items: [
            {
              id: "01",
              title: "Construction",
              standfirst: "The mark is 164 by 88 grid units.",
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
                { id: "M3", text: "∀ first, then ∃. The reversed order is listed as an error, because it states the opposite idea." },
              ],
              notes: [
                { label: "Name", body: "Three lines of 20-unit capitals with 6 units between them: 72 units, from the top frame to the bottom frame." },
                { label: "Tagline", body: "Capitals of 8 units, 40% of the name, always in the same words." },
              ],
            },
            {
              id: "03",
              title: "Clear space",
              standfirst: "K is the height of the coral bar.",
              shot: { src: `${S}/book-clearspace.webp` },
              rules: [
                { id: "K1", text: "Clear space is 2K around every version. The bar is in every version, so the space is measured without a ruler." },
                { id: "K2", text: "Minimum sizes: the ∃ alone 8 mm and 16 px; the logo with tagline 72 mm and 380 px." },
              ],
              notes: [
                { label: "Rejected", body: "The width of ∃ as the unit: it gave a clear space more than three times larger, too much for footers and partner strips." },
                { label: "Where 72 mm comes from", body: "The tagline may not go below 6 pt, so one unit is 0.179 mm, and the logo is 398 units wide." },
              ],
            },
            {
              id: "04",
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
          kind: "shot",
          width: "wall",
          src: `${S}/book-errors.webp`,
          folded: true,
          caption: "Fifteen errors, from stretching to the reversed order ∃∀ and the missing gap (M2, M3).",
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "sign-off",
      n: "07",
      heading: "Design and sign-off",
      standfirst: "The website design first, then the applications as delivered, then the identity in use on the programme's site.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${D}/website-design-2400.webp`,
          frame: "macbook",
          caption: "My website design at 1280 and 390: the promise with the mark read aloud, \"uczeń\" under ∀ and \"talent\" under ∃, then one card per group (M3).",
        },
        {
          kind: "carousel",
          shape: "portrait",
          items: [
            { src: `${S}/social-pupils.webp`, title: "A post for pupils", body: "For older pupils the formula itself, ∀x ∈ Uczniowie ∃t ∈ Talenty: x ma t (every pupil has a talent); for younger ones a story with the plain slogan." },
            { src: `${S}/posters-a3.webp`, title: "A3 posters", body: "One slogan, one image, one action for each group: teachers, pupils, and parents and partners, each with a QR to the form." },
            { src: `${S}/folder.webp`, title: "Folder", body: "220 by 310 mm with a spine of 4 mm; the key visual on the cover, a pocket with slits for a card." },
            { src: `${S}/rollup.webp`, title: "Roll-up", body: "85 by 200 cm. The slogan fills the eye zone, 100 to 180 cm above the floor; a QR of 22 cm scans from about 2 m." },
            { src: `${S}/website-design.webp`, title: "Website design", body: "The whole page at 1280 and 390: the promise, three groups, 126 medals as proof, and a way to join by the QR from the posters." },
          ],
        },
        {
          kind: "shot",
          width: "wall",
          src: `${D}/site-home-2400.webp`,
          frame: "macbook",
          caption: "The identity in use: www.ost.edu.pl, built by the programme's own team, on 14 October 2026. Logo without tagline in the header, the bar as the section marker.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      id: "use-cases",
      n: "08",
      heading: "Three use cases",
      maxim: "Each application had to work in the hands of someone who is not a designer.",
      standfirst: "One per area: the ambassadors, the recruitment campaign, and the programme office. Open a tile and the use case unfolds to the right.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-ambassadors",
              n: "01",
              title: "Ambassadors and supporters",
              maxim: "A supporter should need a photo and a browser, nothing else.",
              standfirst: "Goal: anyone who supports the programme posts their own photo in its frame, with a slogan, on the channel they choose.",
              cover: { src: `${D}/generator-ambassador-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "passage",
                  html:
                    "<p><strong>The challenge.</strong> A dozen supporters had to post their own photo in the programme's look, with a slogan, on Instagram, Facebook, or LinkedIn.</p><ul><li><strong>Not everybody has Photoshop.</strong> A template file would have needed a graphics program and a designer on call, so the tool had to be a web page.</li><li><strong>Simple and accessible.</strong> Five steps, keyboard control for the crop, slogans in both grammatical genders, and nothing to install.</li><li><strong>Designed, built, and deployed by me.</strong> Two pages of plain HTML on Vercel, at ost-ambasador.vercel.app: one for ambassadors, one for supporters.</li></ul>",
                },
                {
                  kind: "duo",
                  items: [
                    { src: `${S}/ambassador-v1.webp`, caption: "The first frame: the coral bar runs across the neck of whoever is in the photo. Rejected (G1)." },
                    { src: `${D}/generator-support-story-2400.webp`, frame: "macbook", caption: "The generator: the photo stands inside the ∃, and the bar stands beside it, above the slogan (G1)." },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-01",
                    title: "Post my own photo in the programme's frame, without Photoshop",
                    actor: { name: "04, the ambassador", body: "A teacher or a friend of the programme.", note: "Willing to help, unwilling to learn software for one post." },
                    trigger: { body: "The programme asks a dozen people to post about the launch of recruitment.", note: "The first question back was: can I have a frame for my photo?" },
                    precondition: { body: "A photo on the phone or the laptop, ideally upright with the face in the upper part." },
                    flow: [
                      { n: "1", text: "Upload a photo.", note: "It is read in the browser and goes nowhere else." },
                      { n: "2", text: "Choose the slogan: \"Jestem ambasadorką\" or \"Jestem ambasadorem\", or on the support page \"Wspieram\", \"Kibicuję\", \"Popieram\".", note: "Grammatical gender is a choice, not a guess." },
                      { n: "3", text: "Choose post 4:5 or story 9:16.", note: "The two formats people actually publish." },
                      { n: "4", text: "Drag the photo to set the crop; the slider zooms.", note: "Arrow keys and plus and minus do the same from the keyboard." },
                      { n: "5", text: "Keep the duotone in navy and warm white, or switch to the original colours.", note: "A dozen photos from phones, gardens and staff rooms then look like one campaign." },
                      { n: "6", text: "Download the PNG.", note: "Made on the device, saved to Downloads." },
                    ],
                    exits: [
                      { label: "Download", text: "A finished post in the chosen format." },
                      { label: "Leave", text: "Close the tab; nothing was stored anywhere." },
                    ],
                    exitsNote: "No account and no server, so no third state such as a half-saved draft.",
                    postcondition: { body: "The ambassador has a post in the programme's look. The programme holds no copy of the photo, by design." },
                    why: "Rejected: a frame file to fill in. The first version put the coral bar across the neck, like a censor's bar in a crime story; the second needed a graphics program and patience.",
                    rule: "G1: no element of the mark touches a face.",
                    ruleNote: "The same rule places the logo on photos in print: on a calm part of the frame, or on a strip of navy (brand book page 30).",
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
                  caption: "The four stories, scheduled for 13 to 16 October 2026; each also exists as an Instagram post and a LinkedIn square (S1).",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Invite a teacher from a small town who does not teach informatics",
                    actor: { name: "01, the teacher", body: "Teaches Polish, history, biology, PE, or art, in a school far from a big city.", note: "Assumes a programme for talent is about olympiads in maths and informatics, and not for them." },
                    trigger: { body: "The first week of recruitment.", note: "Two targets: at least 60% of teachers outside informatics, at least 50% from places under 25 000 inhabitants." },
                    precondition: { body: "The application form is open at www.ost.edu.pl." },
                    flow: [
                      { n: "1", text: "Post 1 announces the programme and its idea.", note: "The graphic shows ∃∀ turning into ∀∃, which explains the mark once, for everybody." },
                      { n: "2", text: "Post 2 invites schools from small towns and villages.", note: "Points scattered in the shape of Poland, without its outline, each with a line to its own coral point." },
                      { n: "3", text: "Post 3 lists subjects: Polish, history, biology, maths, art, PE.", note: "Each subject ends in an ∃ and a coral point: for every subject there exists a talent." },
                      { n: "4", text: "Post 4 asks teachers to apply as a team.", note: "Three teachers join in one school, which branches out to eight pupils." },
                      { n: "5", text: "The teacher taps the coral button and lands on the form.", note: "Every post ends the same way: the button, the address, \"Bezpłatny udział\" (free of charge)." },
                    ],
                    exits: [
                      { label: "Slogan A", text: "The literal reading, for example \"Talent nie zależy od wielkości miejscowości\" (talent does not depend on the size of the town)." },
                      { label: "Slogan B", text: "The shorter, livelier line, for example \"Dla każdego, także daleko od dużych miast\"." },
                    ],
                    exitsNote: "The programme publishes one of the two; captions, hashtags and alt text are written for both.",
                    postcondition: { body: "Four posts in three formats, each with captions for Instagram and Facebook, a longer one for LinkedIn, and alt text describing the graphic." },
                    why: "Rejected: one general launch post. It speaks to everybody and therefore to nobody the targets count.",
                    rule: "S1: every post shares one foot, the coral button on navy, the address, and \"free of charge\".",
                    ruleNote: "The roll-up, the website and the folder end with the same call to action and a QR to the same form.",
                  },
                },
              ],
            },
            {
              id: "uc-office",
              n: "03",
              title: "Programme office",
              maxim: "The identity works without its designer.",
              standfirst: "Goal: the office writes to a head teacher in its own tools.",
              cover: { src: `${S}/letterhead.webp` },
              blocks: [
                {
                  kind: "duo",
                  items: [
                    { src: `${S}/letterhead.webp`, caption: "Letterhead, page 1: logo with tagline and the association's details." },
                    { src: `${S}/letterhead-howto.webp`, caption: "The instruction: Word and Google Docs, step by step, with the margins fixed (T1)." },
                  ],
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-03",
                    title: "Write a letter to a head teacher without a designer",
                    actor: { name: "The project assistant", body: "Runs the day-to-day correspondence of the programme.", note: "Has Word or Google Docs, and no InDesign." },
                    trigger: { body: "A school has to be invited, or an applicant answered." },
                    precondition: { body: "Outfit installed, which is free; the template saved once as a Word template." },
                    flow: [
                      { n: "1", text: "Open a new letter from the template.", note: "Header and footer are ready: the full logo on page 1, the ∃ alone and a page number after it." },
                      { n: "2", text: "Write with the styles OST Adresat, OST Data, OST Temat, OST Podpis.", note: "Recipient, date, subject, and signature never need formatting by hand." },
                      { n: "3", text: "Print at 100% on A4.", note: "Margins of 25, 20, 40, and 32 mm are part of the template." },
                    ],
                    exits: [
                      { label: "Plain paper", text: "The template prints the logo and footer itself." },
                      { label: "Pre-printed paper", text: "A second file has the same margins and no graphics, for sheets from the offset printer." },
                    ],
                    postcondition: { body: "A letter in the programme's look, made by the person who wrote it." },
                    why: "Rejected: a PDF of the letterhead alone. The office writes in Word and Google Docs, and Google Docs does not carry custom styles, so the instruction tells it how to set them once.",
                    rule: "T1: every typeface is free to install and every logo file is outlined, so the brand needs no licence and no designer.",
                    ruleNote: "The SVG files carry the clear space inside their bounds, so the edge of the file is the edge of the space.",
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
      standfirst: "What the programme, its printers, and its web developers received, and in what form.",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              n: "01",
              stage: "Mark files",
              title: "28 files: the mark in SVG, and a manifest",
              rule: { label: "Rule", body: "Six versions in four colourways (colour, negative, black, white), with the clear space built into the bounds; the construction grid; the ∀ and ∃ glyphs for formulas in text." },
            },
            {
              n: "02",
              stage: "Brand book",
              title: "33 pages, version 1.0",
              rule: { label: "Rule", body: "Every measure in grid units and every colour in HEX, RGB, coated and uncoated CMYK, and Pantone, so a printer needs no follow-up question." },
            },
            {
              n: "03",
              stage: "Print",
              title: "Print-ready files with bleed",
              rule: { label: "Rule", body: "Business card, roll-up, and letterhead for the offset printer, each with a board that marks bleed, safe margin, and the eye zone." },
              why: { label: "Why the boards", body: "The folder's die line comes from the printer, so the board says which dimensions will move." },
            },
            {
              n: "04",
              stage: "Office",
              title: "Word template and Google Docs instruction",
              rule: { label: "Rule", body: "Styles, margins, and a different first page are in the file; the instruction covers what Google Docs drops." },
            },
            {
              n: "05",
              stage: "Social",
              title: "12 PNG files and the copy",
              rule: { label: "Rule", body: "Four posts in three formats, two slogans each, captions for Instagram and Facebook and for LinkedIn, hashtags, and alt text." },
            },
            {
              n: "06",
              stage: "Generators",
              title: "Two pages, one file each",
              rule: { label: "Rule", body: "Plain HTML with no framework and no build step, deployed on Vercel; anyone can host them wherever a file can be uploaded." },
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      id: "evidence",
      n: "10",
      heading: "Evidence",
      standfirst: "What was measured or counted. Recruitment results are not stated: the campaign opened on 13 October 2026.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "8 mm", label: "Smallest printed mark, the ∃ alone; 16 px on screen. Brand book pages 14 and 15" },
            { value: "15.7:1", label: "Navy on white. Coral on warm white is 2.7:1, which is why coral never carries text there" },
            { value: "24", label: "Logo files: six versions in four colourways, of 28 files in the handoff" },
            { value: "12", label: "Social graphics: four posts in three formats" },
          ],
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          src: `${C}/generator-ambassador.mp4`,
          poster: `${C}/generator-ambassador.webp`,
          title: "The ambassador generator: slogan, zoom, crop, and colour",
          caption: "The ambassador page: the slogan switched, the photo zoomed and dragged, the duotone switched off and on again (G1).",
        },
        {
          kind: "video",
          clip: true,
          frame: "macbook",
          src: `${C}/generator-story.mp4`,
          poster: `${C}/generator-story.webp`,
          title: "The support generator: three slogans, post and story",
          caption: "The support page: three slogans, then the same photo as a story of 9:16 and back to a post of 4:5.",
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
            "<strong>Test the ambassador frame on real photos before sending it.</strong> The first version was drawn around a placeholder silhouette, and on a real portrait the coral bar crossed the neck.",
            "<strong>Build the four-second animation, not only describe it.</strong> The brand book gives it frame by frame; a file in code would leave the video team nothing to interpret.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure, and how?",
          answers: [
            "<strong>The two recruitment targets.</strong> The share of teachers whose lead subject is not informatics, and the share from places under 25 000 inhabitants, from the programme's own records at the end of recruitment.",
            "<strong>Whether ambassadors post.</strong> The generators collect nothing, by design, so the count comes from posts tagged #OgólnopolskaStrefaTalentu.",
          ],
        },
      ],
    },
  ],
};
