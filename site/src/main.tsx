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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
