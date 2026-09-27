import { Route, Routes } from "react-router-dom";
import { Analytics } from "./components/Analytics";
import { ScrollToTop } from "./components/ScrollToTop";
import { Shell } from "./components/Shell";
import { Home } from "./pages/Home";
import { Case } from "./pages/Case";
import { About } from "./pages/About";
import { Watercolours } from "./pages/Watercolours";
import { Practice } from "./pages/Practice";

export default function App() {
  return (
    <Shell>
      <ScrollToTop />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="/watercolours" element={<Watercolours />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Case />} />
      </Routes>
    </Shell>
  );
}
