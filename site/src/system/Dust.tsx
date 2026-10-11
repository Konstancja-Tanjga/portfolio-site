import { useEffect, useRef } from "react";

/**
 * Depth behind a wall: two slow washes of light and a field of dust that
 * drifts, streaks when the page moves and leans with the pointer. One
 * fixed canvas per page, under the content. Still under
 * prefers-reduced-motion, gone when the tab is hidden.
 */
export function Dust({ density = 1 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1;
    type Mote = { x: number; y: number; z: number; tw: number };
    let motes: Mote[] = [];
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      motes = Array.from({ length: Math.round(((W * H) / 7000) * density) }, () => ({ x: Math.random(), y: Math.random(), z: 0.2 + Math.random() * 0.8, tw: Math.random() * 6.28 }));
    };
    let energy = 0, lastY = window.scrollY, px = 0, py = 0;
    const onScroll = () => { const dy = window.scrollY - lastY; lastY = window.scrollY; energy = Math.min(1, energy + Math.abs(dy) / 600); };
    const onMove = (e: MouseEvent) => { px = (e.clientX / W - 0.5) * 2; py = (e.clientY / H - 0.5) * 2; };
    let raf = 0;
    const draw = (t: number) => {
      raf = 0;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // washes
      const g1 = ctx.createRadialGradient(W * 0.75 + px * 30, H * 0.25 + py * 20, 0, W * 0.75, H * 0.25, W * 0.45);
      g1.addColorStop(0, "rgba(227,210,173,0.10)"); g1.addColorStop(1, "rgba(227,210,173,0)");
      const g2 = ctx.createRadialGradient(W * 0.2 - px * 30, H * 0.8 - py * 20, 0, W * 0.2, H * 0.8, W * 0.5);
      g2.addColorStop(0, "rgba(44,90,80,0.22)"); g2.addColorStop(1, "rgba(44,90,80,0)");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
      // dust
      ctx.globalCompositeOperation = "lighter";
      const streak = energy * 22;
      for (const m of motes) {
        const x = (m.x + px * 0.012 * m.z) * W, y = (m.y + py * 0.012 * m.z) * H;
        const a = m.z * (0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * 0.0006 * (0.5 + m.z) + m.tw)));
        ctx.fillStyle = m.z > 0.8 ? `rgba(227,210,173,${(a * 0.85).toFixed(3)})` : `rgba(241,237,228,${(a * 0.5).toFixed(3)})`;
        if (streak > 0.6) ctx.fillRect(x, y - streak * m.z, 1.2, streak * m.z + 1.2); else ctx.fillRect(x, y, m.z > 0.85 ? 1.6 : 1, m.z > 0.85 ? 1.6 : 1);
        m.y += (0.00004 + energy * 0.002) * m.z;
        if (m.y > 1) { m.y = -0.02; m.x = Math.random(); }
      }
      energy *= 0.92;
      ctx.globalCompositeOperation = "source-over";
      if (!reduced && !document.hidden) raf = requestAnimationFrame(draw);
    };
    resize(); draw(performance.now());
    const onVis = () => { if (!document.hidden && !raf && !reduced) raf = requestAnimationFrame(draw); };
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); document.removeEventListener("visibilitychange", onVis);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [density]);
  return <canvas ref={ref} className="dust" aria-hidden="true" />;
}
