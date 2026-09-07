/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Umami Cloud website ID. Set in CI from the repository variable of the
   * same name; unset locally, which is what keeps `npm run dev` out of the
   * statistics. See src/components/Analytics.tsx.
   */
  readonly VITE_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
