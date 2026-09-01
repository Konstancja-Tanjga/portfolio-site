import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Shell } from "./components/Shell";
import { Home } from "./pages/Home";
import { Case } from "./pages/Case";
import { About } from "./pages/About";
import { Watercolours } from "./pages/Watercolours";

export default function App() {
  return (
    <Shell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="/watercolours" element={<Watercolours />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Case />} />
      </Routes>
    </Shell>
  );
}
