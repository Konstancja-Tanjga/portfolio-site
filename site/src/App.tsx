import { Route, Routes } from "react-router-dom";
import { Shell } from "./components/Shell";
import { Home } from "./pages/Home";
import { Case } from "./pages/Case";
import { About } from "./pages/About";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Case />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Case />} />
      </Routes>
    </Shell>
  );
}
