import { Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "./components/Analytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { Shell } from "./components/Shell";
import { Home } from "./pages/Home";
import { Case } from "./pages/Case";
import { About } from "./pages/About";
import { Watercolours } from "./pages/Watercolours";
import { Practice } from "./pages/Practice";
import { Prototype } from "./proto/Prototype";

export default function App() {
  const { pathname } = useLocation();
  // The prototype is an application, not a page of the site: no masthead.
  if (pathname.startsWith("/prototype/")) {
    return (
      <Routes>
        <Route path="/prototype/analytics/*" element={<Prototype />} />
      </Routes>
    );
  }
  return (
    <Shell>
      <ScrollToTop />
      <Analytics />
      {/* A new key per route re-runs the entrance, so a page arrives
          rather than snaps. */}
      <div className="route" key={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="/watercolours" element={<Watercolours />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Case />} />
      </Routes>
      </div>
    </Shell>
  );
}
