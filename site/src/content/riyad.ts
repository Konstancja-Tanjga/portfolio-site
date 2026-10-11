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
          kind: "shot",
          width: "wall",
          src: "/work/riyad-bank/03.png",
          caption:
            "Paper sketches of the 3D navigation: spinning circles on a dark background, a blob in the centre, glassy video, podcast, and text icons that come under the finger when pressed, and haptic feedback.",
        },
        {
          kind: "set",
          size: "phone",
          caption:
            "The home screen, a topic opened into its CEO interview, report, and case study, Favourites, and the podcast player.",
          items: [
            { src: "/work/riyad-bank/06.png" },
            { src: "/work/riyad-bank/07.png" },
            { src: "/work/riyad-bank/08.png" },
            { src: "/work/riyad-bank/09.png" },
          ],
        },
        {
          kind: "set",
          size: "phone",
          caption:
            "The video player with its article text, then the home screen and the topic view in the steps of the transition between them.",
          items: [
            { src: "/work/riyad-bank/10.png" },
            { src: "/work/riyad-bank/11.png" },
            { src: "/work/riyad-bank/13.png" },
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
