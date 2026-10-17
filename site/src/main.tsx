import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// The design system, first: it owns the colour, spacing, radius and
// elevation tokens, plus a dark theme. Everything after this either
// consumes those tokens or adds what an editorial site needs on top.
import "@bighatpoland/ui/styles.css";

import "./styles/tokens.css";
import "./styles/app.css";
import "./styles/brand.css";
import "./styles/home.css";
import "./styles/case.css";

// Agentation: click an element in `npm run dev`, write a note, and hand
// the agent its selector. Dev only — the import sits behind DEV, so the
// production build drops it and the live site never shows the toolbar.
// The endpoint is the agentation-mcp server registered in .mcp.json.
const Agentation = import.meta.env.DEV
  ? React.lazy(() => import("agentation").then((m) => ({ default: m.Agentation })))
  : null;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
    {Agentation && (
      <React.Suspense fallback={null}>
        <Agentation endpoint="http://localhost:4747" appName="portfolio-site" />
      </React.Suspense>
    )}
  </React.StrictMode>
);
