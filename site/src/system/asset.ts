/**
 * Resolve a path in `public/` against the deployment base.
 *
 * On a project GitHub Pages site the app lives under /portfolio-site/, so
 * a hard-coded "/work/foo.png" resolves to the domain root and 404s. Vite
 * rewrites the URLs it can see at build time — it cannot see a string in a
 * content file, so those go through here.
 *
 * `import.meta.env.BASE_URL` is "/" locally and "/portfolio-site/" in the
 * Pages build, and always ends in a slash.
 */
export function asset(path: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, "") + (path.startsWith("/") ? path : `/${path}`);
}
