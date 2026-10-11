import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppBar, AppShell, Breadcrumbs, Button, NavRail, ToastProvider } from "@bighatpoland/ui";

import { I } from "./icons";
import { Analysis, Analyst, Home, Queries, Settings } from "./pages";
import { Models } from "./Models";
import "./proto.css";

const BASE = "/prototype/analytics";
const NAV = [
  { id: "", label: "Home", icon: I.home },
  { id: "analysis", label: "Analyses", icon: I.analysis },
  { id: "analyst", label: "AI Data Analyst", icon: I.ai },
  { id: "queries", label: "Queries", icon: I.query },
  { id: "models", label: "Data models", icon: I.model },
];
const TITLES: Record<string, string> = { "": "Home", analysis: "Churn, sales, customers 2025", analyst: "EMEA revenue spike, week 9", queries: "Queries", models: "Umsatz nach Regionen", settings: "Settings" };

/**
 * A working prototype of APplus Analytics on Big Hat components, for the
 * clips on the case study: Home, an analysis with its side sheet and the
 * enlarge toggle, the AI analyst with a detail thread that applies or
 * discards, the query shelf with governance, the data-model canvas, and
 * settings as an overlay. Fictional data throughout.
 */
export function Prototype() {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const seg = pathname.replace(BASE, "").replace(/^\/+/, "").split("/")[0];
  useEffect(() => {
    document.documentElement.setAttribute("data-proto", "1");
    document.documentElement.setAttribute("data-theme", "light");
    document.title = "APplus Analytics, prototype";
    return () => {
      document.documentElement.removeAttribute("data-proto");
      document.documentElement.setAttribute("data-theme", "dark");
    };
  }, []);
  return (
    <ToastProvider>
      <div className="bh-root proto">
        <AppShell
          height="fill"
          header={
            <AppBar
              brand={<span className="p-brand">ap<sup>+</sup> <span className="p-brand__sub">BI</span></span>}
              title={TITLES[seg] ?? "APplus Analytics"}
              center={<Breadcrumbs items={[{ label: "Analytics", onClick: () => nav(BASE) }, { label: TITLES[seg] ?? "" }]} ariaLabel="You are here" />}
              actions={<><Button size="sm" variant="ghost" iconStart={I.settings} onClick={() => nav(`${BASE}/settings`)}>Settings</Button><Button size="sm">New</Button></>}
            />
          }
          rail={<NavRail items={NAV} activeId={seg} onSelect={(id) => nav(id ? `${BASE}/${id}` : BASE)} showLabels ariaLabel="Product areas" />}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="analyst" element={<Analyst />} />
            <Route path="queries" element={<Queries />} />
            <Route path="models" element={<Models />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </AppShell>
      </div>
    </ToastProvider>
  );
}
