import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * `base` is the whole difference between working locally and working on
 * GitHub Pages.
 *
 * A project Pages site is served from a subpath — /portfolio-site/ — so
 * every asset URL the build writes has to carry that prefix. Locally it
 * must not, or the dev server serves the app from a folder that does not
 * exist.
 *
 * So: set BASE_PATH in CI, leave it unset everywhere else. Anything that
 * builds a URL at runtime reads it back through `asset()` in
 * src/system/asset.ts, never by writing a leading slash.
 */
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
});
