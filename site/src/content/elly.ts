import type { CaseStudy } from "./types";

/**
 * The words are text, not pictures of text. This wall used to be twelve PNG
 * exports from Figma (frames 01, 02a, 03–12) with every paragraph typeset
 * inside them. Apart from the cover and the live-product chapter, images are
 * screens and diagrams only, cropped from those frames into
 * /work/elly-ai-assistant/screens/.
 *
 * Every number on this page comes from those frames: the study counts (13
 * participants, 13 sessions of 45 minutes, 14–25 April 2025), the scores, the
 * panel widths and the 331 prototype interactions. Nothing is rounded up.
 *
 * Rebuilt on 25 October 2026 the Analytics way: chapter 00 with decision
 * shots, the tools as a sheet, the study in one chapter, the live product
 * behind tabs. Cut again the same day to nine chapters; the exploration
 * now lives only on the sheet. See docs/copy-edit/log-elly.md.
 */
const S = "/work/elly-ai-assistant/screens";
const D = "/work/elly-ai-assistant/device";

export const elly: CaseStudy = {
  slug: "elly-ai-assistant",
  title: "Elly",
  what: "The platform's first AI assistant, designed from zero",
  lead:
    "Streaming answers over the product documentation, with citations and error states. The work was in the states that decide whether a user trusts the answer.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · AI IN PRODUCTION",
    headline: ["AI assistant", "for ERP"],
    subline: "Elly, for APplus ERP",
    stamp: "STREAMING · CITATIONS · ERROR STATES · VOICE",
    credit: "Lead Designer, UX Engineer · Asseco Solutions · 2025",
    art: { src: `${D}/answer-desktop-2400.webp` },
    shot: { src: "/work/elly-ai-assistant/01.png" },
    motif: "chat",
    layers: [
      { src: `${D}/answer-desktop-2400.webp`, label: "An answer with citations" },
      { src: `${D}/resources-desktop-2400.webp`, label: "Resources" },
      { src: `${D}/proto-text-2400.webp`, label: "The scope answer" },
      { src: `${D}/proto-voice-2400.webp`, label: "Voice mode" },
    ],
  },
  meta: [
    { label: "Role", value: "Lead Designer, UX Engineer; the only designer on this product" },
    { label: "Company", value: "Asseco Solutions" },
    { label: "Product", value: "APplus ERP, Elly" },
    { label: "Design system", value: "FOX v2.2. The link opens the public v1 Storybook", href: "https://design-system-v1.assecosolutions.com/?path=/docs/intro--docs" },
    { label: "Team", value: "A PM, a requirements engineer, developers, QA, and me as the only designer" },
    { label: "Period", value: "2024 to April 2025" },
    { label: "Released", value: "April 2025, with APplus 9" },
    { label: "Research", value: "13 consultants and solution architects" },
    { label: "Product context", value: "APplus: ERP-System des Jahres, Gold in the User Experience category, 2025 and 2026" },
  ],
  chapters: [
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
                "Elly Smart Help, the first AI assistant in APplus ERP: answers from the product documentation, on desktop and mobile, with voice input.",
            },
            {
              key: "Problem",
              value:
                "The documentation is enormous, versioned, and partly out of date; an answer can be fluent and wrong, and only the panel can show which.",
            },
            {
              key: "My role",
              value:
                "The only designer: the audit, the layout options, twelve use cases, the prototype, the moderated study with 13 people, and the design that shipped.",
            },
            {
              key: "Decision 1",
              value:
                "The panel is docked beside the page, not floating over it: 380px by default, resizable to 580px, so the answer sits next to the record.",
              shot: { frame: "macbook", src: `${D}/answer-desktop-1600.webp`, alt: "Elly docked beside a Flow board", to: "#how-i-worked" },
            },
            {
              key: "Decision 2",
              value:
                "Citations sit at the claim: numbered markers resolve in a Resources block naming the documents, so a consultant opens the source before quoting it.",
              shot: { frame: "macbook", src: `${D}/resources-desktop-1600.webp`, alt: "An answer with its Resources block expanded", to: "#uc-text" },
            },
            {
              key: "Decision 3",
              value:
                "Every way an answer can fail has its own state and its own recovery path: retry, rephrase, wait, or ask the administrator.",
              shot: { src: "/work/elly-ai-assistant/09.png", alt: "The panel across sizes, with a model failure and Try again", to: "#uc-errors" },
            },
            {
              key: "Outcome",
              value:
                "Shipped with APplus 9 in April 2025. In the study, 13 of 13 found Elly unprompted and 12 of 13 would use it again; trust scored lowest.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      blocks: [
        {
          kind: "passage",
          html:
            "<p><strong>The first AI assistant shipped in APplus ERP</strong>, an ERP for mid-sized and large manufacturers across the DACH region.</p>",
        },
        {
          kind: "carousel",
          items: [
            { src: `${D}/answer-desktop-2400.webp`, frame: "macbook", title: "An answer", body: "A Flow board, a marker at each claim, Resources collapsed." },
            { src: `${D}/resources-desktop-2400.webp`, frame: "macbook", title: "Resources", body: "Three document identifiers behind markers [1] to [3]." },
            { src: `${D}/proto-text-2400.webp`, frame: "macbook", title: "The scope answer", body: "What Elly says when asked what she is: documentation only, Flow mode only, no history saved." },
            { src: `${D}/proto-voice-2400.webp`, frame: "macbook", title: "Voice mode", body: "“Chats won't be saved”, the avatar in the centre, Pause and Finish." },
          ],
        },
      ],
    },
    {
      id: "discovery",
      n: "02",
      heading: "Discovery and research",
      standfirst: "Three archetypes for an assistant in software, and a teardown of the one closest to our product.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Floating bot.</strong> A corner icon that expands into a panel; cheap to add, easy to ignore.",
            "<strong>Embedded bot.</strong> Always in the layout; suits products where help is the task.",
            "<strong>Collapsible panel.</strong> Slides out from the shell on demand; the only fit for an ERP, where the work is the point.",
          ],
        },
        {
          kind: "shot",
          width: "wall",
          folded: true,
          src: `${S}/audit-aria.png`,
          hotspots: [
            { x: 14, y: 23, text: "Switching between suggestions." },
            { x: 15, y: 50, text: "The chat entry icon on desktop." },
            { x: 76, y: 35, text: "Navigation on mobile." },
            { x: 86, y: 30, text: "The chat entry icon on mobile." },
            { x: 60, y: 86, text: "Early Elly drafts against Aria's states." },
          ],
          caption: "Opera's Aria on desktop and mobile, with early Elly drafts against its states.",
        },
      ],
    },
    {
      id: "how-i-worked",
      n: "03",
      heading: "How I worked",
      standfirst: "One assistant through the tools it passed, on FOX v2.2 before Code Connect: the sidebar component set in Figma was the contract.",
      blocks: [
        {
          kind: "sheet",
          sheet: {
            tools: [
              { name: "Figma", mark: "figma", what: "the teardown, the options, twelve use cases, the prototype" },
              { name: "FOX", mark: "", glyph: "FOX", what: "v2.2, the sidebar component set" },
              { name: "APplus", mark: "", glyph: "AP+", what: "Flow mode, release 9" },
            ],
            stations: [
              { tool: "Figma", mark: "figma", file: "Aria teardown", title: "Audited, state by state", body: "Opera's Aria taken apart beside the first Elly drafts.", image: { src: `${S}/audit-aria.png`, alt: "The Aria teardown board with annotations" } },
              { tool: "Figma", mark: "figma", file: "Flow board, two options", title: "Overlay against pinned", body: "Both built on a real board. Pinned won: an answer you cannot check against the record under it is worth less than the space it costs.", image: { src: `${S}/exploration-options.png`, alt: "The exploration board with option 1 and option 2" } },
              { tool: "Figma", mark: "figma", file: "12 use cases", title: "Specified as use cases", body: "Developers, QA, and the requirements engineer worked from them.", image: { src: `${S}/text-answer.png`, alt: "The text-question use case: the answer with markers and Resources collapsed" } },
              { tool: "Figma", mark: "figma", file: "prototype, 1920 by 1080", title: "A prototype at full scale", body: "331 wired interactions; the voice states change on a timeout, so the wait is felt.", image: { src: `${S}/proto-text.png`, alt: "The prototype on a full Flow screen, the scope answer open" } },
              { tool: "Prototype", mark: "", file: "13 sessions", title: "Tested before release", body: "Thirteen moderated sessions of 45 minutes, 14 to 25 April 2025, on the working prototype.", image: { src: `${S}/proto-voice.png`, alt: "The voice demo participants were given" } },
              { tool: "APplus", mark: "", file: "release 9", title: "Shipped", body: "April 2025, on desktop and mobile, in the customer's colours.", image: { src: "/work/elly-ai-assistant/12.png", alt: "Elly in the live product, across devices" } },
            ],
            block: [
              ["Sheet", "How I worked on Elly"],
              ["Drawn for", "One assistant, from the teardown to the release"],
              ["Governed by", "twelve use cases, each a full path with every state drawn"],
            ],
          },
        },
      ],
    },
    {
      id: "uc-text",
      n: "04",
      heading: "Asking a text question",
      standfirst: "Six states for one question; five of them are where the user decides whether to trust the sixth.",
      blocks: [
        {
          kind: "set",
          size: "phone",
          items: [
            { src: `${S}/text-question.png`, caption: "The question typed." },
            { src: `${S}/text-thinking.png`, caption: "Elly thinking." },
            { src: `${S}/text-answer.png`, caption: "The answer, markers [1] and [2], Resources collapsed." },
          ],
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-01",
            title: "Ask a text question and check where the answer came from",
            actor: {
              name: "An APplus user in Flow mode",
              body: "Working on a Flow screen; Elly exists only there.",
              note: "The risk: a consultant who repeats the answer to a customer.",
            },
            trigger: {
              body: "A how-to question, asked while the work stays on screen.",
            },
            precondition: {
              body: "Elly open in the docked panel.",
            },
            flow: [
              { n: "1", text: "Greeting and suggested prompts." },
              { n: "2", text: "Text mode; the question typed." },
              { n: "3", text: "Send; Elly thinking." },
              {
                n: "4",
                text: "The answer, a numbered marker at each claim; the numbers resolve in a Resources block.",
                note: "The customer's own documentation namespace; the source can be opened before it is quoted.",
              },
            ],
            postcondition: {
              body: "Every claim points to a document the user can open.",
            },
            why: "Rejected: sources listed under the answer. A list under a paragraph says the paragraph has sources, not which claim rests on which.",
            rule: "Citations sit at the claim, not at the bottom.",
          },
        },
      ],
    },
    {
      id: "uc-voice",
      n: "05",
      heading: "Voice mode",
      standfirst: "The user never has to remember which mode they are in; the layout says it.",
      blocks: [
        {
          kind: "beside",
          html:
            "<p><strong>Voice is the same assistant, not a second one.</strong> It opens from the microphone beside the message field.</p><ul><li><strong>Consent first.</strong> Before anything is spoken, the panel says that voice chats are not saved.</li><li><strong>The avatar becomes the panel.</strong> From the top bar in text mode to the centre in voice mode, with Pause and Finish under it.</li><li><strong>Pause stops Elly mid-answer.</strong> On resume she listens again rather than finishing the sentence; Finish is the one exit.</li></ul>",
          video: {
            src: "/work/elly-ai-assistant/voice-mode.mp4",
            poster: "/work/elly-ai-assistant/voice-mode.webp",
            title: "Elly voice mode on a phone, from the greeting to Finish",
          },
          caption: "Voice mode on the phone, in the prototype.",
        },
      ],
    },
    {
      id: "uc-errors",
      n: "06",
      heading: "When it fails",
      standfirst: "Three failures at the same moment in the flow, and three different things to do next.",
      blocks: [
        {
          kind: "set",
          size: "phone",
          items: [
            { src: `${S}/error-retrieval.png`, caption: "Retrieval failure." },
            { src: `${S}/error-model.png`, caption: "Model failure, with Try again." },
            { src: `${S}/error-quota-month.png`, caption: "Monthly quota used up." },
            { src: `${S}/error-quota-limit.png`, caption: "Current question limit hit." },
          ],
        },
        {
          kind: "usecase",
          uc: {
            id: "UC-03",
            title: "Fail in a way the user can act on",
            actor: {
              name: "An APplus user waiting for an answer",
              body: "A question sent; Elly thinking.",
            },
            trigger: {
              body: "Something goes wrong while the response is generated.",
            },
            precondition: {
              body: "The conversation so far stays on screen.",
            },
            flow: [
              {
                n: "1",
                text: "Retrieval failure: the documentation could not be reached. “Give it another go later!”",
                note: "The answer may exist; the lookup did not work.",
              },
              {
                n: "2",
                text: "Model failure: “A small technical blip on my side”, with Try again.",
                note: "A different question may route differently.",
              },
              {
                n: "3",
                text: "Quota reached: nothing is broken. The panel says which limit was hit and points to the administrator.",
                note: "Waiting becomes a decision.",
              },
            ],
            exits: [
              { label: "Retry or rephrase", text: "After a retrieval or model failure." },
              { label: "Wait or ask the administrator", text: "After a reached limit, where retrying cannot help." },
            ],
            postcondition: {
              body: "The user knows whether to retry, rephrase, wait, or ask someone.",
            },
            why: "Rejected: one generic error. An assistant that goes quiet is worse than one that admits it cannot answer.",
            rule: "Each failure gets its own state and its own recovery path.",
            ruleNote:
              "Five states by release: retrieval, model, monthly limit, daily limit, and limit reached mid-voice-input; under all of them the footer, Elly can be wrong.",
          },
        },
      ],
    },
    {
      id: "study",
      n: "07",
      heading: "The study",
      maxim: "Twelve of thirteen would use it again, and trust still scored lowest of every dimension.",
      standfirst:
        "Thirteen consultants and solution architects, 14 to 25 April 2025, in moderated sessions of 45 minutes on the prototype, before the APplus 9 release.",
      blocks: [
        {
          kind: "stats",
          items: [
            { value: "8/13", label: "had never seen Elly, in the company that builds it" },
            { value: "13/13", label: "found her at once, without prompting" },
            { value: "12/13", label: "would use her again; easy to use clustered at 4 to 5" },
            { value: "2 to 3.5", label: "trustworthy, for five participants: the low score" },
            { value: "10/13", label: "asked for context-awareness, the most requested change" },
          ],
        },
        {
          kind: "passage",
          html: "<p><strong>How I read it.</strong> The panel worked; what failed was the contract.</p>",
        },
        {
          kind: "points",
          items: [
            "<strong>Discoverability was solved</strong> once shown: the layout read correctly and the flow needed no instruction.",
            "<strong>People asked for numbers and got directions to documentation;</strong> one answer came confidently from an old release note, with no sign of its age.",
            "<strong>Two causes, both in the interface:</strong> sources not shown, and no statement of what Elly can know. Hence the citations, the error states, and the scope answer.",
          ],
        },
        {
          kind: "fold",
          title: "What they said",
          hint: "Open: nine quotes from the sessions",
          blocks: [
            {
              kind: "points",
              items: [
                "<strong>“Elly is answering as ‘I'm sure’ but should say ‘I guess’ or ‘I think’ in this case.”</strong> Senior consultant, 20 years, on an answer from an outdated release note.",
                "<strong>“It would be great if Elly recognised the page I'm on and gave concrete answers.”</strong> The same participant, unprompted.",
                "<strong>“I got a lot of texts with hints about where I can find information; for me it is more like an advertisement for how to get my answers in APplus.”</strong> Team lead, purchase, who wanted a number.",
                "<strong>“What I have experienced now won't be helpful.”</strong> The same participant, asked whether he would use it.",
                "<strong>“Normal users would not download the PDF from a link given by Elly.”</strong> Team lead, purchase and sales, six years.",
                "<strong>“It's cold blue but warm, separated from the main view, which I like. I feel welcomed.”</strong> Consultant, sales; another called the same panel too high-contrast.",
                "<strong>“Moving topics are invisible for me; they are adverts.”</strong> The same participant, on the animated suggestion carousel.",
                "<strong>“I don't know, is it a stop button?”</strong> Consultant, warehouse and logistics, then surprised that it did stop Elly mid-thought.",
                "<strong>“Much better than F1 help, because it is more specific. It is trustworthy.”</strong> Senior consultant, project module, working with ERP since 1995.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "live",
      n: "08",
      heading: "The live product",
      standfirst: "Elly as it ships in APplus 9: the film and the screens.",
      blocks: [
        {
          kind: "tabs",
          label: "Elly as shipped",
          items: [
            {
              label: "The film",
              blocks: [
                {
                  kind: "video",
                  src: "/work/elly-ai-assistant/elly-help.mp4",
                  title: "Elly Help in APplus — Asseco Solutions product film",
                  poster: "/work/elly-ai-assistant/video-poster.jpg",
                  caption: "The vendor's product film, four minutes, in German; the English subtitles are my translation.",
                  subtitles: {
                    src: "/work/elly-ai-assistant/elly-help.en.vtt",
                    label: "English",
                    srclang: "en",
                  },
                  credit: {
                    text: "Asseco Solutions DACH, August 2025",
                    href: "https://www.youtube.com/watch?v=eFn6maci6mA",
                  },
                },
              ],
            },
            {
              label: "Across devices",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/elly-ai-assistant/12.png",
                  caption: "The scope answer beside a Flow board on desktop and tablet, the greeting on a phone.",
                },
              ],
            },
            {
              label: "An answer in German",
              blocks: [
                {
                  kind: "shot",
                  width: "wall",
                  src: "/work/elly-ai-assistant/15.png",
                  caption: "Markers [1] to [3] and the Resources list on the phone; the suggested prompt carousel on tablet and desktop.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
