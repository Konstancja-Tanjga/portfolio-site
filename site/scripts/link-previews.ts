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
 * work/<slug>.html and work/<slug>/index.html (Pages answers the bare path
 * from either, and one of them avoids the trailing-slash redirect), with
 * that page's own title, description and cover as Open Graph tags. The
 * router still does the rendering; the copy only changes what a crawler
 * reads before JavaScript runs.
 *
 * Preview images must be absolute URLs, so the tags that need one are only
 * written when SITE_ORIGIN is set — which the deploy does, and a local
 * build does not.
 */

type Page = { path: string; title: string; description: string; image?: string };

const NAME = "Konstancja Tanjga-Nawrot";
const DEFAULT_IMAGE = "/work/applus-analytics/00-cover.png";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Preview descriptions are cut at about two lines; end on a word. */
function clip(s: string, max = 200) {
  if (s.length <= max) return s;
  const space = s.lastIndexOf(" ", max - 1);
  return s.slice(0, space > 0 ? space : max - 1).replace(/\s*[,;:—–-]?\s*$/, "") + "…";
}

function pages(defaultDescription: string): Page[] {
  return [
    { path: "", title: `${NAME} — Lead Designer / UX Engineer`, description: defaultDescription },
    { path: "about", title: `About — ${NAME}`, description: defaultDescription },
    { path: "watercolours", title: `Watercolours — ${NAME}`, description: defaultDescription },
    ...published.map((c) => ({
      path: `work/${c.slug}`,
      title: `${c.title} — ${NAME}`,
      description: c.lead,
      image: c.cover.shot.src,
    })),
  ];
}

function render(template: string, page: Page, base: string, origin?: string): string {
  const title = escape(page.title);
  const description = escape(clip(page.description));
  const tags = [
    `<meta property="og:type" content="${page.path.startsWith("work/") ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="${escape(NAME)}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (origin) {
    const url = (p: string) => origin + base + p.replace(/^\//, "");
    tags.push(
      `<meta property="og:url" content="${url(page.path)}" />`,
      `<meta property="og:image" content="${url(page.image ?? DEFAULT_IMAGE)}" />`,
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
      for (const page of pages(fallback)) {
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
