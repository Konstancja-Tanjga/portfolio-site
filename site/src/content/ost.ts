import type { CaseStudy } from "./types";

/**
 * Ogólnopolska Strefa Talentu: the idea and the visual identity of a national
 * education programme run by Stowarzyszenie Talent. Built to the case-study
 * kit (docs/case-study-kit); the plan behind it is docs/ost-identity/KONCEPCJA.md,
 * and the cuts of 25 October 2026 are in docs/copy-edit/log-ost.md.
 *
 * Ten chapters, numbered consecutively, after the second cut of 25 October
 * 2026. The kit's 01a (hard brief), 04 (audit) and 06a (architecture) are
 * folded into "In short", 03 and 05: the audit questions sit as hotspots in
 * Discovery, the rule pages of the mark in a fold under Design system. The
 * kit's 10 (Evidence) is dropped: its stats repeated 05, and the two clips
 * of the generators now sit in UC-01. 05 has no drawing sheet: the file
 * names no design tool for the mark, and a sheet of artefacts alone would
 * be a handoff list.
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
    "Ogólnopolska Strefa Talentu is a national programme of Stowarzyszenie Talent that brings Prof. Ryszard Szubartowski's method into Polish schools. I wrote its idea as two symbols from logic, ∀∃: for every student there exists a talent. Then I drew the mark, wrote the brand book, designed every application from the letterhead to the roll-up, and built two generators for the programme's ambassadors.",
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
                "The identity of a national programme that brings Prof. Szubartowski's method into Polish schools: mark, brand book, print, social, two generators.",
            },
            {
              key: "Problem",
              value:
                "A name and no picture: one mark for teachers, pupils, and parents, from a 15 mm pin to a 2 m roll-up.",
            },
            {
              key: "My role",
              value:
                "Everything, alone: three concepts, the mark, the brand book, print and social, two browser generators.",
            },
            {
              key: "Decision 1",
              value:
                "Write the method as ∀∃, for every student there exists a talent: the order of the two symbols carries the idea.",
              shot: { src: `${S}/book-origin.webp`, alt: "Brand book page: ∃∀, one pattern for everybody, against ∀∃, a talent of one's own", to: "#discovery" },
            },
            {
              key: "Decision 2",
              value:
                "The coral bar is the student: a gap keeps it apart in every version, and its height is the unit of the clear space.",
              shot: { src: `${S}/book-clearspace.webp`, alt: "Brand book page: the clear space of 2K around the mark, K being the height of the coral bar", to: "#design-system" },
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
                "Adopted by the programme and live on www.ost.edu.pl; recruitment opened on 13 October 2026, so no result is stated yet.",
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
          html: "<p>The idea, the mark, and what the programme puts it on: the brand book, one board at a time.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${S}/book-cover.webp`, title: "The mark", body: "Horizontal logo with the tagline \"Dla każdego ucznia istnieje talent.\"" },
            { src: `${S}/book-formula.webp`, title: "The name as a formula", body: "∀ for \"Ogólnopolska\", every pupil in the country; ∃ for \"Talentu\", a talent of one's own." },
            { src: `${S}/book-versions.webp`, title: "Which version when", body: "Horizontal, vertical, with \"uczeń\" and \"talent\", the pair alone, the ∃ alone." },
            { src: `${S}/book-mono.webp`, title: "Black and white", body: "Stamp, engraving, fax, foil: in one colour the student keeps the gap." },
            { src: `${S}/book-slogans.webp`, title: "Three groups, three slogans", body: "One sentence each for teachers, pupils, and parents." },
            { src: `${S}/book-animation.webp`, title: "Four seconds", body: "Lines from one point, then each to its own point, then ∀∃." },
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
        "Three groups from the brief and a fourth once the programme asked people to spread the word; each quote is that group's slogan.",
      blocks: [
        {
          kind: "personas",
          items: [
            {
              n: "01",
              name: "The teacher",
              badge: "JOINS · ANY SUBJECT, ANY TOWN",
              quote: "Order matters.",
              context: "Grade 6 to secondary school.",
              goals: ["The method in one sentence"],
              breaks: "Talent means olympiads, not their subject.",
              must: "Say the change: a talent of one's own.",
            },
            {
              n: "02",
              name: "The pupil",
              badge: "ASKS · AGED 12 TO 19",
              quote: "Only one like you exists.",
              context: "A noticeboard or a story.",
              goals: ["Addressed, not assessed"],
              breaks: "Posters look like another lesson.",
              must: "A formula for the older, a plain sentence for the younger.",
            },
            {
              n: "03",
              name: "The parent or partner",
              badge: "TRUSTS · PARENTS, HEADS, SPONSORS",
              quote: "For every student there exists a talent.",
              context: "No logic, only a reason to believe.",
              goals: ["The promise without decoding"],
              breaks: "Symbols from logic mean nothing to them.",
              must: "The plain reading under the mark, always the same words.",
            },
            {
              n: "04",
              name: "The ambassador",
              badge: "SHARES · A SUPPORTER",
              quote: "I am an ambassador of Ogólnopolska Strefa Talentu.",
              context: "A friend of the programme; not a designer.",
              goals: ["Their own photo with the programme's name"],
              breaks: "A template file needs a graphics program.",
              must: "Compose for them; leave the face untouched.",
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
            "<strong>One conviction.</strong> Every pupil has a talent of their own.",
            "<strong>School order is the opposite.</strong> ∃∀, one pattern for all; swapped, ∀∃ states the method. Order matters became the teachers' slogan.",
            "<strong>The founder taught informatics.</strong> Logic is the method's own language; his pupils won 126 medals at international olympiads.",
          ],
        },
        {
          kind: "duo",
          items: [
            {
              src: `${S}/book-not-ve.webp`,
              caption: "Not VE: four details keep the pair from reading as letters (M4).",
              hotspots: [
                { x: 43, y: 52, text: "The crossbar of ∀ sits high and runs past the arms; A has it low." },
                { x: 58, y: 59, text: "The middle bar is the longest and stands apart; in an E, the shortest and joined." },
              ],
            },
            {
              src: `${S}/concept-forall-15mm.webp`,
              caption: "15 mm, 8 mm, and 16 px: below about 30 mm the ∃ works alone (K2).",
              hotspots: [
                { x: 56, y: 46, text: "At 16 px the coral bar still separates it from a plain E." },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      id: "prototypes",
      n: "04",
      heading: "First prototypes",
      standfirst: "Three complete directions, each with logo, colour, posters, social, and risks.",
      blocks: [
        {
          kind: "set",
          size: "wide",
          items: [
            { src: `${S}/concept-asterisk.webp`, caption: "Zadanie z gwiazdką (the starred problem): six arms of different length." },
            { src: `${S}/concept-cursor.webp`, caption: "Twoja kolej (your turn): a coral cursor waiting for the pupil." },
            { src: `${S}/concept-forall.webp`, caption: "Dla każdego istnieje (for every, there exists): the pair ∀∃." },
          ],
        },
        {
          kind: "flow",
          stages: [
            { title: "Three directions", body: "Each with a risk table; Your turn read as informatics only, average with parents." },
            { title: "The choice", body: "A representative of the programme chose ∀∃: his picture of it and of Prof. Szubartowski." },
            { title: "The drawing", body: "A joined bar against a bar with a gap; the joined bar vanishes in black, so the gap won." },
          ],
          note: "Tested with parents and pupils of grades 4 to 6; the results belong to the programme.",
        },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      id: "design-system",
      n: "05",
      heading: "Design system",
      standfirst: "The concept deck became a brand book: the palette and the type on the surface, the versions and the rule pages folded.",
      blocks: [
        {
          kind: "palette",
          standfirst: "Four colours, plus plain white and black; shares for the whole set.",
          items: [
            { hex: "#1B1F3B", name: "Navy", role: "Mark, name, and text. 45%", note: "16.1:1 on white" },
            { hex: "#FF5A36", name: "Coral", role: "The student's bar and large shapes. 5%", note: "2.7:1 on warm white: never text there" },
            { hex: "#D8411F", name: "Dark coral", role: "The student's bar below 25 mm. 3%", note: "4.47:1 on white: the bar only" },
            { hex: "#F4EFE6", name: "Warm white", role: "Background. 35%", note: "Plain white takes the other 12%" },
          ],
          caption: "WCAG 2.2: text 4.5:1, large shapes 3:1 (C1, C3).",
        },
        {
          kind: "spec",
          caption: "Both under the SIL Open Font License, so the office can install them (T1).",
          rows: [
            { key: "Archivo ExtraBold", value: "Capitals only, leading 0.9: the name, slogans, headings, large numbers; never running text." },
            { key: "Outfit", value: "Text, leads, the tagline, labels; no italic, emphasis is weight." },
            { key: "∀ and ∃ in text", value: "Glyph files at cap height, in the text colour; neither typeface has them." },
          ],
        },
        {
          kind: "fold",
          title: "From the concept deck to brand book 1.0",
          hint: "Open: two versions",
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
        {
          kind: "fold",
          title: "The rule pages: clear space, construction, proportions, contrast, errors",
          hint: "Open: four annotated pages and fifteen errors",
          blocks: [
            {
              kind: "annotated",
              items: [
                {
                  id: "01",
                  title: "Clear space",
                  standfirst: "K is the height of the coral bar, so the clear space is measured without a ruler.",
                  shot: { src: `${S}/book-clearspace.webp` },
                  rules: [
                    { id: "K1", text: "Clear space of 2K around every version." },
                    { id: "K2", text: "The ∃ alone 8 mm and 16 px; with tagline 72 mm and 380 px." },
                  ],
                },
                {
                  id: "02",
                  title: "Construction",
                  standfirst: "164 by 88 grid units.",
                  shot: { src: `${S}/book-grid.webp` },
                  rules: [
                    { id: "M1", text: "One stroke of 12 units in both symbols." },
                    { id: "M2", text: "A gap of 8 units between the coral bar and the frame, in every version." },
                    { id: "M4", text: "The crossbar of ∀ runs 10 units past the arms; the stem of ∃ overshoots by 8." },
                  ],
                  notes: [{ label: "The bar", body: "56 by 12 units, the longest stroke in ∃." }],
                },
                {
                  id: "03",
                  title: "Mark, name, and tagline",
                  standfirst: "The name spans the height between the frames of ∃.",
                  shot: { src: `${S}/book-proportions.webp` },
                  rules: [{ id: "M3", text: "∀ first, then ∃. The reversed order states the opposite idea." }],
                  notes: [
                    { label: "Name", body: "Three lines of 20-unit capitals, 6 units between: 72 units, frame to frame." },
                    { label: "Tagline", body: "Capitals of 8 units, 40% of the name, always the same words." },
                  ],
                },
                {
                  id: "04",
                  title: "Coral is a shape, not text",
                  standfirst: "Every pair of colours, with its ratio and what it may carry.",
                  shot: { src: `${S}/book-contrast.webp` },
                  rules: [
                    { id: "C1", text: "On a light background coral never carries text; on navy it may set headings." },
                    { id: "C2", text: "Below 25 mm the bar turns dark coral, #D8411F." },
                    { id: "C3", text: "Across the set, coral never outweighs navy." },
                  ],
                },
              ],
            },
            {
              kind: "duo",
              items: [
                { src: `${S}/concept-forall-drawing.webp`, caption: "The joined bar against the gap; the gap was chosen (M1, M2)." },
                { src: `${S}/book-errors.webp`, caption: "Fifteen errors, from stretching to the reversed order ∃∀ (M2, M3)." },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      id: "sign-off",
      n: "06",
      heading: "Design and sign-off",
      standfirst: "The website design, the live site, and the print and social applications, one per tab.",
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
                  caption: "My website design at 1280 and 390: \"uczeń\" under ∀, \"talent\" under ∃, then one card per group (M3).",
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
                  caption: "www.ost.edu.pl, built by the programme's own team, 14 October 2026: the bar as the section marker.",
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
                    { src: `${S}/social-pupils.webp`, title: "A post for pupils", body: "The formula for older pupils, a story with the plain slogan for younger ones." },
                    { src: `${S}/posters-a3.webp`, title: "A3 posters", body: "One slogan, one image, one action per group, each with a QR to the form." },
                    { src: `${S}/folder.webp`, title: "Folder", body: "220 by 310 mm, spine of 4 mm; the key visual on the cover." },
                    { src: `${S}/rollup.webp`, title: "Roll-up", body: "85 by 200 cm; the slogan in the eye zone, a QR of 22 cm that scans from about 2 m." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      id: "use-cases",
      n: "07",
      heading: "Two use cases",
      standfirst: "The ambassadors and the recruitment campaign, each in the hands of someone who is not a designer; open a tile.",
      blocks: [
        {
          kind: "dossier",
          items: [
            {
              id: "uc-ambassadors",
              n: "01",
              title: "Ambassadors and supporters",
              maxim: "A supporter should need a photo and a browser, nothing else.",
              standfirst: "Goal: a supporter posts their own photo in the programme's frame, with a slogan. Two pages of plain HTML on Vercel.",
              cover: { src: `${D}/generator-ambassador-2400.webp`, frame: "macbook" },
              blocks: [
                {
                  kind: "duo",
                  items: [
                    { src: `${S}/ambassador-v1.webp`, caption: "The first frame: the coral bar across the neck. Rejected (G1)." },
                    { src: `${D}/generator-support-story-2400.webp`, frame: "macbook", caption: "The generator: the photo inside the ∃, the bar beside it (G1)." },
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
                      { n: "2", text: "Choose the slogan, in the right grammatical gender, and the format: post 4:5 or story 9:16.", note: "On the support page: \"Wspieram\", \"Kibicuję\", \"Popieram\"." },
                      { n: "3", text: "Drag the photo to set the crop; the slider zooms. Keep the duotone or switch to the original colours.", note: "Arrow keys and plus and minus do the same; a dozen phone photos then look like one campaign." },
                      { n: "4", text: "Download the PNG.", note: "Made on the device, saved to Downloads." },
                    ],
                    exits: [
                      { label: "Download", text: "A finished post in the chosen format." },
                      { label: "Leave", text: "Close the tab; nothing was stored anywhere." },
                    ],
                    exitsNote: "No account and no server, so no half-saved draft.",
                    postcondition: { body: "A post in the programme's look; the programme holds no copy of the photo, by design." },
                    why: "Rejected: a frame file to fill in. The first put the coral bar across the neck; the second needed a graphics program and patience.",
                    rule: "G1: no element of the mark touches a face.",
                    ruleNote: "The same rule places the logo on photos in print: a calm part of the frame, or a strip of navy (brand book page 30).",
                  },
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
                          caption: "The slogan switched, the photo zoomed and dragged, the duotone off and on (G1).",
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
                  caption: "Four stories, 13 to 16 October 2026; each also as an Instagram post and a LinkedIn square (S1).",
                },
                {
                  kind: "usecase",
                  uc: {
                    id: "UC-02",
                    title: "Invite a teacher from a small town who does not teach informatics",
                    actor: { name: "01, the teacher", body: "Polish, history, biology, PE, or art, in a school far from a big city.", note: "Assumes talent means olympiads in maths and informatics, not them." },
                    trigger: { body: "The first week of recruitment.", note: "Two targets: at least 60% of teachers outside informatics, at least 50% from places under 25 000 inhabitants." },
                    precondition: { body: "The application form is open at www.ost.edu.pl." },
                    flow: [
                      { n: "1", text: "Post 1 announces the programme and its idea.", note: "∃∀ turning into ∀∃ explains the mark once, for everybody." },
                      { n: "2", text: "Post 2 invites schools from small towns and villages.", note: "Points in the shape of Poland, each with a line to its own coral point." },
                      { n: "3", text: "Post 3 lists subjects: Polish, history, biology, maths, art, PE.", note: "Each subject ends in an ∃ and a coral point." },
                      { n: "4", text: "Post 4 asks teachers to apply as a team; the coral button lands on the form.", note: "Every post ends the same way: the button, the address, \"Bezpłatny udział\" (free of charge)." },
                    ],
                    exits: [
                      { label: "Slogan A", text: "The literal reading: \"Talent nie zależy od wielkości miejscowości\"." },
                      { label: "Slogan B", text: "The livelier line: \"Dla każdego, także daleko od dużych miast\"." },
                    ],
                    exitsNote: "The programme publishes one of the two; captions, hashtags, and alt text are written for both.",
                    postcondition: { body: "Four posts in three formats, with captions for Instagram, Facebook, and LinkedIn, and alt text." },
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

    /* ---------------------------------------------------------------- 08 */
    {
      id: "handoff",
      n: "08",
      heading: "Handoff",
      standfirst: "What the programme, its printers, and its developers received (T1).",
      blocks: [
        {
          kind: "flow",
          stages: [
            { title: "Mark files", body: "28 files: six versions in four colourways, the grid, the glyphs." },
            { title: "Brand book 1.0", body: "33 pages; measures in grid units, colours in HEX, CMYK, and Pantone." },
            { title: "Print and office", body: "Business card, roll-up, letterhead with bleed and eye zone; a Word template." },
            { title: "Social and generators", body: "12 PNG files with captions and alt text; two HTML pages on Vercel, source on GitHub." },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      id: "reflection",
      n: "09",
      heading: "What I would do differently",
      blocks: [
        {
          kind: "joint",
          question: "What would I do differently?",
          answers: [
            "<strong>Test the ambassador frame on real photos first.</strong> Drawn around a silhouette, on a real portrait the bar crossed the neck.",
            "<strong>Build the four-second animation, not only describe it.</strong> A file in code leaves nothing to interpret.",
          ],
        },
        {
          kind: "joint",
          question: "What will I measure, and how?",
          answers: [
            "<strong>The two recruitment targets.</strong> From the programme's records.",
            "<strong>Whether ambassadors post.</strong> The generators collect nothing; count posts tagged #OgólnopolskaStrefaTalentu.",
          ],
        },
      ],
    },
  ],
};
