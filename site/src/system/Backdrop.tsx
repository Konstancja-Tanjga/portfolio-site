import { useEffect, useRef } from "react";

/**
 * A field of dust behind the hero, drawn on a canvas.
 *
 * Several hundred motes drift slowly in sand and ink-white; scrolling
 * pushes energy into them and they streak in the direction of travel,
 * the way stars do when a camera moves; the pointer tilts the whole
 * field a few pixels. Drawn at quarter resolution and scaled up, so each
 * mote blooms rather than sits as a square. Stops while off screen, and
 * draws one still frame under prefers-reduced-motion.
 */
export function Backdrop() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    const low = document.createElement("canvas");
    const lctx = low.getContext("2d")!;
    const SCALE = 0.35;

    type Mote = { x: number; y: number; z: number; tw: number };
    let motes: Mote[] = [];
    const seed = (n: number) => {
      const out: Mote[] = [];
      for (let i = 0; i < n; i++) out.push({ x: Math.random(), y: Math.random(), z: 0.2 + Math.random() * 0.8, tw: Math.random() * Math.PI * 2 });
      return out;
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = Math.max(1, Math.round(r.width * dpr));
      H = Math.max(1, Math.round(r.height * dpr));
      canvas.width = W;
      canvas.height = H;
      low.width = Math.max(1, Math.round(W * SCALE));
      low.height = Math.max(1, Math.round(H * SCALE));
      motes = seed(Math.round((r.width * r.height) / 9000));
    };

    let energy = 0;
    let lastY = window.scrollY;
    let px = 0;
    let py = 0;
    const onScroll = () => {
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      energy = Math.min(1, energy + Math.abs(dy) / 700);
    };
    const onMove = (e: MouseEvent) => {
      px = (e.clientX / window.innerWidth - 0.5) * 2;
      py = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let raf = 0;
    let running = false;
    const draw = (t: number) => {
      raf = 0;
      const w = low.width;
      const h = low.height;
      lctx.clearRect(0, 0, w, h);
      lctx.globalCompositeOperation = "lighter";
      const streak = energy * 18;
      for (const m of motes) {
        const x = (m.x + px * 0.01 * m.z) * w;
        const y = (m.y + py * 0.01 * m.z) * h;
        const a = m.z * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.0006 * (0.5 + m.z) + m.tw)));
        const sand = m.z > 0.8;
        lctx.fillStyle = sand ? `rgba(227,210,173,${(a * 0.9).toFixed(3)})` : `rgba(241,237,228,${(a * 0.6).toFixed(3)})`;
        const size = m.z > 0.85 ? 1.6 : 1;
        if (streak > 0.6) {
          lctx.fillRect(x, y - streak * m.z, size, streak * m.z + size);
        } else {
          lctx.fillRect(x, y, size, size);
        }
        // drift, downward and a touch sideways, faster when the page moves
        m.y += (0.00004 + energy * 0.0025) * m.z;
        m.x += 0.00001 * Math.sin(t * 0.0002 + m.tw);
        if (m.y > 1) { m.y = -0.02; m.x = Math.random(); }
      }
      energy *= 0.92;
      ctx.clearRect(0, 0, W, H);
      ctx.imageSmoothingEnabled = true;
      ctx.filter = "blur(0.8px)";
      ctx.drawImage(low, 0, 0, W, H);
      ctx.filter = "none";
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !raf) raf = requestAnimationFrame(draw);
    });

    resize();
    draw(performance.now());
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} className="hm-hero__dust" aria-hidden="true" />;
}
