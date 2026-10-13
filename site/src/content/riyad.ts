import type { CaseStudy } from "./types";

/**
 * A short wall: the sketches of the 3D navigation, the screens, and the store
 * listing as shipped. No period, no team size, and no measured result are on
 * record, so none is stated.
 */
export const riyad: CaseStudy = {
  slug: "riyad-bank",
  title: "Riyad Bank: Digital Insights",
  what: "A financial-education product designed from scratch, shipped to both stores",
  lead:
    "A mobile financial-education app for Riyad Bank, Saudi Arabia, with banking and finance topics in text, video, and podcast form. Before the build, the work included C-level interviews, sessions with subject-matter experts, and A/B testing. I designed the interactive 3D navigation. The app shipped to the App Store and Google Play.",
  status: { state: "live" },
  group: "product",
  cover: {
    kicker: "PRODUCT DESIGN · BANKING AND PAYMENTS",
    headline: ["The future", "of finance"],
    subline: "Digital Insights, for Riyad Bank",
    stamp: "DESIGNED FROM SCRATCH · 3D NAVIGATION · ILLUSTRATION SYSTEM · SHIPPED",
    credit: "UX/UI Designer · Big Hat, via Intellias · Riyad Bank, Saudi Arabia",
    art: { src: "/work/riyad-bank/cover-art.webp", portrait: true },
    shot: { src: "/work/riyad-bank/00-cover.png" },
  },
  meta: [
    { label: "Role", value: "UX/UI Designer, through Big Hat, my own company, via Intellias" },
    { label: "Client", value: "Riyad Bank, Saudi Arabia" },
    { label: "Shipped", value: "App Store and Google Play" },
    { label: "Research", value: "C-level interviews, SME sessions, and A/B testing before the build" },
    { label: "Owned", value: "Interactive 3D navigation" },
    { label: "Content", value: "Text, video, and podcast" },
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
              key: "Context",
              value:
                "Riyad Bank, Saudi Arabia, wanted a mobile financial-education app with banking and finance topics in text, video, and podcast form.",
            },
            {
              key: "Problem",
              value: "The product did not exist yet: it was designed from scratch, and it had to ship to both stores.",
            },
            {
              key: "My role and scope",
              value:
                "UX/UI Designer, through Big Hat via Intellias. C-level interviews, sessions with subject-matter experts, and A/B testing before the build; the interactive 3D navigation was mine.",
            },
            {
              key: "Decision 1",
              value:
                "A 3D navigation: spinning circles on a dark background, a blob in the centre, and icons that come under the finger when pressed, with haptic feedback.",
            },
            {
              key: "Decision 2",
              value: "A topic opens into its CEO interview, report, and case study, with Favourites and a podcast player beside them.",
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
      id: "navigation",
      n: "01",
      heading: "The 3D navigation",
      standfirst: "The paper sketches first, then the screens built from them.",
      blocks: [
        {
          kind: "points",
          items: [
            "<strong>Spinning circles on a dark background</strong>, with a blob in the centre.",
            "<strong>Glassy video, podcast, and text icons</strong> come under the finger when pressed, with haptic feedback.",
            "<strong>Three content forms, one navigation.</strong> Text, video, and podcast are reached the same way.",
          ],
        },
        {
          kind: "flow",
          stages: [
            { title: "A circle forms", body: "On the dark background, small stars are spinning, with haptic feedback." },
            { title: "The blob spins", body: "A see-through menu appears in the centre; magnify with two fingers." },
            { title: "The bottom menu turns glassy", body: "Video, podcast, and text icons come from the top right corner under the finger when pressed." },
            { title: "Pressed", body: "Haptic feedback on the pressed state." },
          ],
          note: "The four stages as written on the sketches below. Still to be discussed on them: a tag menu, animation as an interactive menu for tags, and AR.",
        },
        {
          kind: "shot",
          width: "wall",
          src: "/work/riyad-bank/03.png",
          hotspots: [
            { x: 5, y: 6, text: "Dark background, spinning circles." },
            { x: 12, y: 44, text: "Circle shape is formed. Small stars are spinning. Haptic." },
            { x: 22, y: 44, text: "Blob in centre is spinning. See-through menu appears. Magnify with two fingers." },
            { x: 45, y: 30, text: "Glassy icons: video, podcast, text." },
            { x: 36, y: 55, text: "Bottom menu becomes glassy but visible. Icons go from the top right corner under the finger when pressed. Haptic." },
            { x: 6, y: 80, text: "Add login with Face ID." },
            { x: 66, y: 70, text: "To be discussed: tag menu, haptic for the icon pressed state, animation as an interactive menu for tags, AR." },
          ],
          caption:
            "Paper sketches of the 3D navigation: spinning circles on a dark background, a blob in the centre, glassy video, podcast, and text icons that come under the finger when pressed, and haptic feedback.",
        },
        {
          kind: "carousel",
          shape: "portrait",
          items: [
            { src: "/work/riyad-bank/06.png", title: "Home", body: "The topics as a feed, the 3D navigation underneath." },
            { src: "/work/riyad-bank/07.png", title: "A topic", body: "Opened into its CEO interview, report, and case study." },
            { src: "/work/riyad-bank/08.png", title: "Favourites", body: "What the reader kept." },
            { src: "/work/riyad-bank/09.png", title: "Podcast player", body: "The audio for a topic, with its chapters." },
            { src: "/work/riyad-bank/10.png", title: "Video player", body: "The video with its article text under it." },
            { src: "/work/riyad-bank/11.png", title: "Transition, step one", body: "Home, as the topic starts to open." },
            { src: "/work/riyad-bank/13.png", title: "Transition, step two", body: "The topic view, arrived at from home." },
          ],
        },
      ],
    },
    {
      id: "shipped",
      n: "02",
      heading: "Shipped",
      blocks: [
        {
          kind: "set",
          size: "wide",
          caption: "The store listing images as shipped to the App Store and Google Play: the podcast list and the video player.",
          items: [
            { src: "/work/riyad-bank/23.png" },
            { src: "/work/riyad-bank/26.png" },
          ],
        },
      ],
    },
  ],
};
