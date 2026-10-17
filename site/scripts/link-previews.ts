import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import type { Plugin } from "vite";

import { published } from "../src/content";

/**
 * A real HTML file for every page, with the tags a link preview reads.
 *
 * Pages has no rewrite rule, so until this existed a deep link like
 * /work/applus-analytics was answered by 404.html — the app rendered, but
 * the status was 404. A person never notices; LinkedIn's crawler does, and
 * refuses to preview a page the server says is not there. It also found no
 * title, description or image to show even if it had tried.
 *
 * So after the build, index.html is copied to each route, as both
 * <path>.html and <path>/index.html (e.g. work/<slug>.html and
 * work/<slug>/index.html) (Pages answers the bare path
 * from either, and one of them avoids the trailing-slash redirect), with
 * that page's own title, description and cover as Open Graph tags. The
 * router still does the rendering; the copy only changes what a crawler
 * reads before JavaScript runs.
 *
 * Preview images must be absolute URLs, so the tags that need one are only
 * written when SITE_ORIGIN is set — which the deploy does, and a local
 * build does not.
 */

type Image = { src: string; alt: string; width?: number; height?: number };
type Page = { path: string; title: string; description: string; image?: Image };

const NAME = "Konstancja Tanjga-Nawrot";

// The card drawn for previews: 1200 x 630 is the 1.91:1 every platform
// shows uncropped. Made from scripts/og/home.html by scripts/og/render.py.
// A case-study cover is not that shape, so the size is only stated for
// the card; a crawler measures the cover itself.
const CARD: Image = {
  src: "/og/home.png",
  alt: "Konstancja Tanjga-Nawrot, Lead Designer and UX Engineer: the APplus Analytics dashboards on a MacBook.",
  width: 1200,
  height: 630,
};

// Search results cut a description at about 155 characters; social
// previews at about 125.
const SEARCH_MAX = 155;
const SOCIAL_MAX = 125;

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Cut a description to `max` characters, ending on a word. */
function clip(s: string, max: number) {
  if (s.length <= max) return s;
  const space = s.lastIndexOf(" ", max - 1);
  return s.slice(0, space > 0 ? space : max - 1).replace(/\s*[,;:—–-]?\s*$/, "") + "…";
}

function pages(defaultDescription: string): Page[] {
  return [
    { path: "", title: `Konstancja Tanjga — Portfolio · Lead Designer, UX Engineer`, description: defaultDescription },
    { path: "about", title: `About — ${NAME}`, description: defaultDescription },
    {
      path: "practice",
      title: `Practice — ${NAME}`,
      description: "Design systems, the methods I run, and personal projects that put my design system on a real brief.",
    },
    { path: "watercolours", title: `Watercolours — ${NAME}`, description: defaultDescription },
    ...published.map((c) => ({
      path: `work/${c.slug}`,
      title: `${c.title} — ${NAME}`,
      description: c.lead,
      image: { src: c.cover.shot.src, alt: `Cover of the ${c.title} case study.` },
    })),
  ];
}

function render(template: string, page: Page, base: string, origin?: string): string {
  const title = escape(page.title);
  const description = escape(clip(page.description, SEARCH_MAX));
  const social = escape(clip(page.description, SOCIAL_MAX));
  const tags = [
    `<meta property="og:type" content="${page.path.startsWith("work/") ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="${escape(NAME)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${social}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${social}" />`,
  ];
  if (origin) {
    const url = (p: string) => origin + base + p.replace(/^\//, "");
    const image = page.image ?? CARD;
    tags.push(
      `<meta property="og:url" content="${url(page.path)}" />`,
      `<meta property="og:image" content="${url(image.src)}" />`,
      ...(image.width && image.height
        ? [
            `<meta property="og:image:type" content="image/png" />`,
            `<meta property="og:image:width" content="${image.width}" />`,
            `<meta property="og:image:height" content="${image.height}" />`,
          ]
        : []),
      `<meta property="og:image:alt" content="${escape(image.alt)}" />`,
      `<meta name="twitter:image" content="${url(image.src)}" />`,
      `<meta name="twitter:image:alt" content="${escape(image.alt)}" />`,
      `<link rel="canonical" href="${url(page.path)}" />`,
    );
  }
  return template
    // Functions, not strings: a `$&` in a title must be printed, not expanded.
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${title}</title>`)
    .replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${description}" />`)
    .replace("</head>", () => `    ${tags.join("\n    ")}\n  </head>`);
}

export function linkPreviews(): Plugin {
  let outDir = "dist";
  let base = "/";
  return {
    name: "link-previews",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
      base = config.base;
    },
    closeBundle() {
      const origin = process.env.SITE_ORIGIN?.replace(/\/$/, "");
      const template = readFileSync(resolve(outDir, "index.html"), "utf8");
      // Read back from built HTML, so already escaped: undo it once, or
      // render() would print &amp;amp;.
      const fallback = (template.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "")
        .replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      const all = pages(fallback);
      // A sitemap, so a search engine has the list of routes instead of
      // having to discover them by running the router. Only with an
      // origin: a sitemap of relative URLs is not one.
      if (origin) {
        const today = new Date().toISOString().slice(0, 10);
        const urls = all
          .map((p) => `  <url><loc>${origin}${base}${p.path}</loc><lastmod>${today}</lastmod></url>`)
          .join("\n");
        writeFileSync(
          resolve(outDir, "sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
      }
      for (const page of all) {
        const html = render(template, page, base, origin);
        const targets = page.path
          ? [`${page.path}.html`, `${page.path}/index.html`]
          : ["index.html"];
        for (const target of targets) {
          const file = resolve(outDir, target);
          mkdirSync(dirname(file), { recursive: true });
          writeFileSync(file, html);
        }
      }
    },
  };
}
