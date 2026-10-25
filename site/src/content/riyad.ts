import type { CaseStudy } from "./types";

/**
 * The smallest product study: the sketches of the 3D navigation, the screens,
 * and the store listing as shipped. No period, no team size, no tool chain,
 * and no measured result are on record, so none is stated and the study has no
 * sheet. The illustration system is on the CV and in "In short", and nowhere
 * described: a line on it is still to come from Konstancja.
 */
const R = "/work/riyad-bank";

export const riyad: CaseStudy = {
  slug: "riyad-bank",
  title: "Digital Insights - app for Riyad Bank",
  what: "A financial-education product designed from scratch, shipped to both stores",
  lead:
    "A mobile financial-education app for Riyad Bank, Saudi Arabia: banking and finance topics as text, video, and podcast, reached through an interactive 3D navigation.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · BANKING AND PAYMENTS",
    headline: ["The future", "of finance"],
    subline: "Digital Insights, for Riyad Bank",
    stamp: "DESIGNED FROM SCRATCH · 3D NAVIGATION · ILLUSTRATION SYSTEM · SHIPPED",
    credit: "UX/UI Designer · Riyad Bank · Saudi Arabia",
    art: { src: `${R}/cover-art.webp`, portrait: true },
    shot: { src: `${R}/00-cover.png` },
  },
  meta: [
    { label: "Role", value: "UX/UI Designer" },
    { label: "Client", value: "Riyad Bank, Saudi Arabia" },
    { label: "Research", value: "C-level interviews, SME sessions, and A/B testing before the build" },
    { label: "Shipped", value: "App Store and Google Play" },
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
                "A financial-education app for Riyad Bank: banking and finance topics as text, video, and podcast, in one mobile app for both stores.",
            },
            {
              key: "Problem",
              value:
                "Nothing existed. Three content forms had to become one app, designed from scratch and shipped to the App Store and Google Play.",
            },
            {
              key: "My role",
              value: "UX/UI Designer: the research before the build, the interactive 3D navigation, and the illustration system.",
            },
            {
              key: "Decision 1",
              value:
                "A 3D navigation: spinning circles on a dark background, a blob in the centre, glassy icons under the finger when pressed, with haptic feedback.",
              shot: { src: `${R}/06.png`, alt: "Home, with the topics in the 3D navigation", to: "#navigation" },
            },
            {
              key: "Decision 2",
              value: "A topic opens into its CEO interview, report, and case study; Favourites and a podcast player sit beside them.",
              shot: { src: `${R}/09.png`, alt: "The podcast player for a topic", to: "#what-it-is" },
            },
            {
              key: "Outcome",
              value: "Shipped to the App Store and Google Play.",
            },
          ],
        },
      ],
    },
    {
      id: "what-it-is",
      n: "01",
      heading: "What it is",
      standfirst: "Every part of the app, one screen per slide.",
      blocks: [
        {
          kind: "carousel",
          shape: "portrait",
          items: [
            { src: `${R}/06.png`, title: "Home", body: "The topics, with the 3D navigation underneath." },
            { src: `${R}/07.png`, title: "A topic", body: "Its CEO interview, report, and case study." },
            { src: `${R}/08.png`, title: "Favourites", body: "What the reader kept." },
            { src: `${R}/09.png`, title: "Podcast player", body: "The audio for a topic." },
            { src: `${R}/10.png`, title: "Video player", body: "The video, its article text under it." },
          ],
        },
      ],
    },
    {
      id: "navigation",
      n: "02",
      heading: "The 3D navigation",
      standfirst: "The paper sketches, their notes pinned where they were written, then the transition built from them.",
      blocks: [
        {
          kind: "shot",
          width: "wall",
          src: `${R}/03.png`,
          hotspots: [
            { x: 5, y: 6, text: "Dark background, spinning circles." },
            { x: 12, y: 44, text: "Circle shape is formed. Small stars are spinning. Haptic." },
            { x: 22, y: 44, text: "Blob in centre is spinning. See-through menu appears. Magnify with two fingers." },
            { x: 45, y: 30, text: "Glassy icons: video, podcast, text." },
            { x: 36, y: 55, text: "Bottom menu becomes glassy but visible. Icons go from the top right corner under the finger when pressed. Haptic." },
            { x: 6, y: 80, text: "Add login with Face ID." },
            { x: 66, y: 70, text: "To be discussed: tag menu, haptic for the icon pressed state, animation as an interactive menu for tags, AR." },
          ],
          caption: "The 3D navigation on paper, four stages left to right: circles, blob, glassy icons, pressed.",
        },
        {
          kind: "duo",
          width: "column",
          caption: "The transition from home to a topic: as the topic starts to open, and the topic view it lands on.",
          items: [{ src: `${R}/11.png` }, { src: `${R}/13.png` }],
        },
      ],
    },
    {
      id: "shipped",
      n: "03",
      heading: "Shipped",
      blocks: [
        {
          kind: "set",
          size: "wide",
          caption: "The store listing as shipped to the App Store and Google Play: the podcast list and the video player.",
          items: [{ src: `${R}/23.png` }, { src: `${R}/26.png` }],
        },
      ],
    },
  ],
};
