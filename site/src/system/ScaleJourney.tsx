import { useEffect, useRef, useState } from "react";

/**
 * The journey through the scales of the work.
 *
 * One canvas sits behind the whole home page. As the reader scrolls, it
 * travels from the screen (the hero) through a component (the work), a
 * token (how I work) and a pixel (off screen), and zooms all the way
 * back out at the contact line. Between stops the outgoing scene zooms
 * past and the next one resolves out of it. A ruler on the left edge and
 * a readout in the masthead say where the reader is, in pixels.
 *
 * Every scene is drawn from lines and rectangles in the site's two inks,
 * with dust that streaks while the page moves. Nothing runs off screen,
 * and under prefers-reduced-motion each stop is a still.
 */
export type Stop = { id: string; label: string; unit: string; px: number; scene: Scene };
type Scene = "screen" | "component" | "token" | "pixel";

export const STOPS: Stop[] = [
  { id: "hero", label: "Screen", unit: "1920 × 1080 px", px: 1920, scene: "screen" },
  { id: "work", label: "Component", unit: "304 px", px: 304, scene: "component" },
  { id: "how", label: "Token", unit: "8 px", px: 8, scene: "token" },
  { id: "off", label: "Pixel", unit: "1 px", px: 1, scene: "pixel" },
  { id: "contact", label: "Screen", unit: "1920 × 1080 px", px: 1920, scene: "screen" },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (v: number) => { v = clamp(v); return v * v * (3 - 2 * v); };
const SAND = "227,210,173";
const INK = "241,237,228";
const ZOOM = 6;

export function useJourney() {
  const [pos, setPos] = useState({ index: 0, t: 0 });
  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const tops = STOPS.map((s) => {
        const el = document.getElementById(`stop-${s.id}`);
        return el ? el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35 : 0;
      });
      const y = window.scrollY;
      let i = 0;
      while (i < tops.length - 1 && y >= tops[i + 1]) i++;
      const a = tops[i];
      const b = tops[i + 1] ?? a + 1;
      setPos({ index: i, t: clamp((y - a) / Math.max(1, b - a)) });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return pos;
}

export function ScaleJourney() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const pos = useJourney();
  const posRef = useRef(pos);
  posRef.current = pos;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    };

    // dust
    type Mote = { x: number; y: number; z: number; tw: number };
    const motes: Mote[] = Array.from({ length: 320 }, () => ({ x: Math.random(), y: Math.random(), z: 0.2 + Math.random() * 0.8, tw: Math.random() * 6.28 }));
    let energy = 0, lastY = window.scrollY, px = 0, py = 0;
    const onScroll = () => { const dy = window.scrollY - lastY; lastY = window.scrollY; energy = Math.min(1, energy + Math.abs(dy) / 700); };
    const onMove = (e: MouseEvent) => { px = (e.clientX / W - 0.5) * 2; py = (e.clientY / H - 0.5) * 2; };

    const line = (x1: number, y1: number, x2: number, y2: number) => { ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); };
    const rect = (x: number, y: number, w: number, h: number) => ctx.rect(x, y, w, h);

    /* ---- scenes: each draws centred, at unit scale, alpha a, time t ---- */
    const screen = (a: number, t: number) => {
      // the viewport itself as an app shell: the reader is inside the screen
      const x = W * 0.06, y = H * 0.1, w = W * 0.88, h = H * 0.82;
      ctx.strokeStyle = `rgba(${INK},${(a * 0.16).toFixed(3)})`; ctx.lineWidth = 1;
      ctx.beginPath();
      rect(x, y, w, h);
      rect(x, y, w * 0.025, h);
      rect(x + w * 0.025, y, w * 0.11, h);
      line(x + w * 0.135, y + h * 0.07, x + w, y + h * 0.07);
      for (let i = 0; i < 7; i++) rect(x + w * 0.009, y + h * 0.04 + i * h * 0.06, w * 0.007, w * 0.007);
      for (let i = 0; i < 12; i++) line(x + w * 0.04, y + h * 0.06 + i * h * 0.065, x + w * 0.125 - (i % 3) * w * 0.018, y + h * 0.06 + i * h * 0.065);
      ctx.stroke();
      ctx.strokeStyle = `rgba(${SAND},${(a * 0.55).toFixed(3)})`;
      ctx.setLineDash([6, 8]); ctx.lineDashOffset = -t * 0.02;
      ctx.beginPath(); rect(x - 8, y - 8, w + 16, h + 16); ctx.stroke(); ctx.setLineDash([]);
      label(x, y - 16, "1 screen · 1920 × 1080 · scope: the whole object (R1)", a);
      dim(x, y + h + 22, x + w, y + h + 22, "1920 px", a);
    };
    const component = (a0: number, t: number) => {
      // one card component, exploded: shell, media, title, meta, overflow, with dimension lines.
      // It sits over the work grid, so it is drawn at less than half strength: the covers
      // underneath stay legible and the frame reads as an annotation, not a layer.
      const a = a0 * 0.4;
      const w = Math.min(W * 0.36, 520), h = w * 0.72;
      const x = W * 0.5 - w * 0.5 + W * 0.2, y = H * 0.5 - h * 0.5;
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${INK},${(a * 0.3).toFixed(3)})`;
      ctx.beginPath();
      rect(x, y, w, h);
      rect(x + 12, y + 12, w - 24, h * 0.5);
      line(x + 12, y + h * 0.5 + 34, x + w * 0.6, y + h * 0.5 + 34);
      line(x + 12, y + h * 0.5 + 56, x + w * 0.45, y + h * 0.5 + 56);
      rect(x + w - 40, y + h - 36, 28, 24);
      ctx.stroke();
      // slots named
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.002);
      ctx.strokeStyle = `rgba(${SAND},${(a * (0.5 + 0.4 * pulse)).toFixed(3)})`;
      ctx.beginPath(); rect(x + 12, y + 12, w - 24, h * 0.5); ctx.stroke();
      label(x + 12, y + 4, "slot: media", a);
      label(x + 12, y + h * 0.5 + 24, "slot: title", a);
      label(x + w - 40, y + h - 44, "overflow → menu (R4)", a);
      dim(x, y + h + 18, x + w, y + h + 18, `${Math.round(w)} → 304 px`, a);
      dim(x - 18, y, x - 18, y + h, "", a);
      label(x, y - 18, "1 component · fox-card", a);
    };
    const token = (a: number, t: number) => {
      // the spacing scale as ticks, and the colour ramp as swatches
      const cx = W * 0.66, cy = H * 0.5;
      const steps = [4, 8, 12, 16, 24, 32, 48, 64];
      let x = cx - 260;
      ctx.lineWidth = 1;
      steps.forEach((s, i) => {
        const h = s * 2.2;
        const on = Math.floor(t / 600) % steps.length === i;
        ctx.strokeStyle = on ? `rgba(${SAND},${a.toFixed(3)})` : `rgba(${INK},${(a * 0.3).toFixed(3)})`;
        ctx.beginPath(); rect(x, cy - h / 2, s * 1.2, h); ctx.stroke();
        label(x, cy + 110, `${s}`, a * (on ? 1 : 0.6));
        x += s * 1.2 + 26;
      });
      label(cx - 260, cy - 120, "spacing scale · --bh-gap-*", a);
      // swatches
      const ramp = [0.12, 0.22, 0.35, 0.5, 0.68, 0.85, 1];
      ramp.forEach((v, i) => {
        ctx.fillStyle = `rgba(${SAND},${(a * v * 0.9).toFixed(3)})`;
        ctx.fillRect(cx - 260 + i * 44, cy + 140, 36, 36);
      });
      label(cx - 260, cy + 196, "colour ramp · contrast held by the build", a);
      label(cx - 260, cy - 150, "1 token · 8 px", a);
    };
    const pixel = (a: number, t: number) => {
      // a magnified pixel grid; a few lit in sand, one blinking
      const cell = Math.max(28, Math.min(W, H) * 0.06);
      const cols = Math.ceil(W / cell) + 1, rows = Math.ceil(H / cell) + 1;
      ctx.strokeStyle = `rgba(${INK},${(a * 0.12).toFixed(3)})`; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) line(c * cell, 0, c * cell, H);
      for (let r = 0; r <= rows; r++) line(0, r * cell, W, r * cell);
      ctx.stroke();
      const lit = [[0.62, 0.42], [0.63, 0.42], [0.62, 0.43], [0.64, 0.45], [0.6, 0.47]];
      lit.forEach(([fx, fy], i) => {
        const on = i !== 4 || Math.floor(t / 500) % 2 === 0;
        ctx.fillStyle = `rgba(${SAND},${(a * (on ? 0.85 : 0.2)).toFixed(3)})`;
        ctx.fillRect(Math.round(fx * cols) * cell + 1, Math.round(fy * rows) * cell + 1, cell - 2, cell - 2);
      });
      const lx = Math.round(0.62 * cols) * cell, ly = Math.round(0.42 * rows) * cell;
      label(lx, ly - 14, "1 pixel · #e3d2ad · 1 px", a);
      dim(lx, ly + cell + 14, lx + cell, ly + cell + 14, "1 px", a);
    };
    const label = (x: number, y: number, s: string, a: number) => {
      ctx.fillStyle = `rgba(${SAND},${(a * 0.9).toFixed(3)})`;
      ctx.font = "500 11px Inter, system-ui, sans-serif";
      ctx.fillText(s.toUpperCase(), x, y);
    };
    const dim = (x1: number, y1: number, x2: number, y2: number, s: string, a: number) => {
      ctx.strokeStyle = `rgba(${SAND},${(a * 0.7).toFixed(3)})`; ctx.lineWidth = 1;
      ctx.beginPath(); line(x1, y1, x2, y2);
      if (y1 === y2) { line(x1, y1 - 5, x1, y1 + 5); line(x2, y2 - 5, x2, y2 + 5); } else { line(x1 - 5, y1, x1 + 5, y1); line(x2 - 5, y2, x2 + 5, y2); }
      ctx.stroke();
      if (s) label((x1 + x2) / 2 - 20, y1 === y2 ? y1 - 6 : (y1 + y2) / 2, s, a);
    };
    const SCENES: Record<Scene, (a: number, t: number) => void> = { screen, component, token, pixel };

    const drawScene = (scene: Scene, a: number, z: number, t: number) => {
      if (a <= 0.01) return;
      ctx.save();
      // zoom about the point two thirds across, where the scenes sit
      const fx = W * 0.66, fy = H * 0.5;
      ctx.setTransform(dpr * z, 0, 0, dpr * z, dpr * fx * (1 - z) + dpr * px * 6, dpr * fy * (1 - z) + dpr * py * 6);
      SCENES[scene](a, t);
      ctx.restore();
    };

    let raf = 0;
    const draw = (t: number) => {
      raf = 0;
      const { index, t: k } = posRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // dust, streaking with scroll energy
      ctx.globalCompositeOperation = "lighter";
      const streak = energy * 22;
      for (const m of motes) {
        const x = (m.x + px * 0.012 * m.z) * W, y = (m.y + py * 0.012 * m.z) * H;
        const a = m.z * (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * 0.0006 * (0.5 + m.z) + m.tw)));
        ctx.fillStyle = m.z > 0.8 ? `rgba(${SAND},${(a * 0.8).toFixed(3)})` : `rgba(${INK},${(a * 0.45).toFixed(3)})`;
        if (streak > 0.6) ctx.fillRect(x, y - streak * m.z, 1.2, streak * m.z + 1.2); else ctx.fillRect(x, y, m.z > 0.85 ? 1.6 : 1, m.z > 0.85 ? 1.6 : 1);
        m.y += (0.00004 + energy * 0.002) * m.z;
        if (m.y > 1) { m.y = -0.02; m.x = Math.random(); }
      }
      energy *= 0.92;
      ctx.globalCompositeOperation = "source-over";
      // the scene at this stop, handing over to the next
      const here = STOPS[index], next = STOPS[Math.min(index + 1, STOPS.length - 1)];
      const hand = smooth((k - 0.55) / 0.45); // the last 45% of a stretch is the handover
      const outA = 1 - hand, inA = hand;
      drawScene(here.scene, outA * (reduced ? 1 : 1), 1 + hand * (ZOOM - 1), t);
      if (next !== here && hand > 0) drawScene(next.scene, inA, 1 / ZOOM + (1 - 1 / ZOOM) * hand, t);
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw(performance.now());
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !raf && !reduced) raf = requestAnimationFrame(draw); else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; } });
    io.observe(canvas);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="journey" aria-hidden="true" />;
}

/** The ruler on the left edge: stops, and where the reader is. */
export function JourneyRuler() {
  const { index, t } = useJourney();
  const n = STOPS.length - 1;
  const at = (index + t) / n;
  return (
    <nav className="ruler" aria-label="Scale of the work">
      <span className="ruler__marker" style={{ top: `${(at * 100).toFixed(2)}%` }} aria-hidden="true" />
      {STOPS.map((s, i) => (
        <a key={s.id + i} className={i === index ? "ruler__stop is-current" : "ruler__stop"} href={`#stop-${s.id}`} style={{ top: `${((i / n) * 100).toFixed(2)}%` }}>
          <span className="ruler__label">{s.label}</span>
          <span className="ruler__unit">{s.unit}</span>
        </a>
      ))}
    </nav>
  );
}

/** The readout: current scale, in the masthead. */
export function JourneyReadout() {
  const { index } = useJourney();
  const s = STOPS[index];
  return (
    <span className="readout" aria-live="polite">
      <span className="readout__key">Scale</span>
      <span className="readout__value">{s.unit}</span>
      <span className="readout__name">{s.label}</span>
    </span>
  );
}
