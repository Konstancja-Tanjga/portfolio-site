import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { asset } from "./asset";

/** x, y, width, height in px of the design space. */
export type Rect = [number, number, number, number];

export type ExplodedScreen = {
  /** The product, for the text a screen reader gets instead of the motion. */
  name: string;
  /** The screen export. A sharper export of the same aspect is scaled to `size`. */
  src: string;
  /** The design space: the export's size at the scale the rects are measured in. */
  size: [number, number];
  /** Where the screen sits inside the export. */
  screen: Rect;
  /**
   * The components that lift off, measured in the export. A part with its own
   * `src` (a layer exported from Figma) shows that file instead of a crop.
   */
  parts: { name: string; rect: Rect; src?: string; rail?: boolean }[];
  /** Outlines on the layout layer, in screen coordinates. */
  layout: Rect[];
  /** Colours sampled from the screen, named by the role they play there. */
  colours: { role: string; value: string }[];
  /** The spacing steps, in px. */
  spacing: number[];
  /** Where the one pixel sits, in screen coordinates. */
  pixel: [number, number];
};

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const map = (v: number, a: number, b: number) => clamp((v - a) / (b - a));
const smooth = (v: number) => { v = clamp(v); return v * v * (3 - 2 * v); };

/** Height of each layer above the screen when the stack is fully apart. */
const Z = { screen: 0, layout: 150, component: 310, token: 480, pixel: 640 };

/**
 * One screen, taken apart.
 *
 * Between the hero and the work, the page pins a product screen and, as
 * the reader scrolls, tilts it into an axonometric view and lifts it into
 * the scales the journey names: layout, components, tokens, one pixel. A
 * dashed plumb line runs from that pixel down through every layer to the
 * point on the screen it belongs to. The components are crops of the same
 * export until a part brings its own Figma layer.
 *
 * CSS 3D only, so the screen stays as sharp as the image. Under
 * prefers-reduced-motion the section does not pin and shows the stack
 * apart, as a still.
 */
export function Exploded({ screen: s, id }: { screen: ExplodedScreen; id?: string }) {
  const track = useRef<HTMLDivElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const rig = useRef<HTMLDivElement | null>(null);
  const [sx, sy, sw, sh] = s.screen;

  useEffect(() => {
    const tr = track.current, st = stage.current, rg = rig.current;
    if (!tr || !st || !rg) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = [...rg.querySelectorAll<HTMLElement>("[data-z]")];
    const fades = [...rg.querySelectorAll<HTMLElement>("[data-fade]")];
    const holes = [...rg.querySelectorAll<HTMLElement>(".xp__hole")];
    const parts = [...rg.querySelectorAll<HTMLElement>(".xp__part")];
    const tags = [...rg.querySelectorAll<HTMLElement>(".xp__tag")];
    const plumb = rg.querySelector<HTMLElement>(".xp__plumb");
    let p = reduced ? 0.8 : 0;
    let orbit = { x: 0, y: 0 }, target = { x: 0, y: 0 }, frame = 0;

    const render = () => {
      frame = 0;
      orbit.x += (target.x - orbit.x) * 0.12;
      orbit.y += (target.y - orbit.y) * 0.12;
      const W = st.clientWidth, H = st.clientHeight;
      const narrow = W < 640;
      const k = Math.min((W * 0.94) / sw, (H * 0.86) / sh);
      const t = smooth(map(p, 0.06, 0.4));
      const e = smooth(map(p, 0.2, 0.72));
      // a phone gets a gentler turn, so the stack stays inside the width
      const rx = (narrow ? 48 : 54) * t - orbit.y * 6 * t;
      const rz = (narrow ? -20 : -34) * t + orbit.x * 10 * t;
      const scale = k * (1 - (narrow ? 0.2 : 0.45) * t);
      rg.style.transform = `translateY(${((narrow ? -160 : -30) * t * k).toFixed(1)}px) scale(${scale.toFixed(4)}) rotateX(${rx.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg)`;
      layers.forEach((l, i) => { l.style.transform = `translateZ(${(+l.dataset.z! * e + i * 0.4).toFixed(1)}px)`; });
      fades.forEach((l) => { l.style.opacity = e.toFixed(3); });
      const shadow = `0 ${(26 * e).toFixed(0)}px ${(46 * e).toFixed(0)}px rgba(0, 0, 0, ${(0.5 * e).toFixed(2)})`;
      parts.forEach((c) => { c.style.boxShadow = shadow; });
      const ho = smooth(map(e, 0.05, 0.4)).toFixed(3);
      holes.forEach((h) => { h.style.opacity = ho; });
      const to = smooth(map(e, 0.45, 0.9)).toFixed(3);
      tags.forEach((g) => { g.style.opacity = to; });
      if (plumb) {
        plumb.style.height = `${(Z.pixel * e).toFixed(1)}px`;
        plumb.style.opacity = smooth(map(e, 0.3, 0.8)).toFixed(3);
      }
      if (Math.abs(target.x - orbit.x) > 0.002 || Math.abs(target.y - orbit.y) > 0.002) frame = requestAnimationFrame(render);
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(render); };
    const measure = () => {
      if (!reduced) {
        const r = tr.getBoundingClientRect();
        const span = tr.offsetHeight - window.innerHeight;
        p = span > 0 ? clamp(-r.top / span) : 0;
      }
      kick();
    };
    const move = (ev: PointerEvent) => {
      const r = st.getBoundingClientRect();
      target = { x: (ev.clientX - r.left) / r.width - 0.5, y: (ev.clientY - r.top) / r.height - 0.5 };
      kick();
    };
    const leave = () => { target = { x: 0, y: 0 }; kick(); };
    const orbitable = !reduced && window.matchMedia("(hover: hover)").matches;

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    if (orbitable) { st.addEventListener("pointermove", move); st.addEventListener("pointerleave", leave); }
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      st.removeEventListener("pointermove", move);
      st.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sw, sh]);

  const sheet = { backgroundImage: `url(${asset(s.src)})`, backgroundSize: `${s.size[0]}px ${s.size[1]}px` };
  const crop = (x: number, y: number): CSSProperties => ({ ...sheet, backgroundPosition: `-${x}px -${y}px` });
  const [px, py] = s.pixel;

  return (
    <section className="xp" id={id} aria-labelledby="xp-heading">
      <div className="xp__track" ref={track}>
        <div className="xp__pin">
          <div className="xp__head">
            <h2 id="xp-heading" className="xp__title">One screen, taken apart</h2>
            <p className="xp__steps" aria-hidden="true">
              <span>Screen 1920 × 1080</span><span>Layout</span><span>Component</span><span>Token 8 px</span><span>Pixel 1 px</span>
            </p>
            <p className="xp__sr">
              The {s.name} dashboard separated into its layers: the layout grid, the FOX components lifted off it,
              the colour and spacing tokens they use, and a single pixel.
            </p>
          </div>
          <div className="xp__stage" ref={stage} aria-hidden="true">
            <div className="xp__rig" ref={rig} style={{ width: sw, height: sh, marginLeft: -sw / 2, marginTop: -sh / 2 }}>
              <div className="xp__layer" data-z={Z.screen}>
                <div className="xp__screen" style={{ ...crop(sx, sy), width: sw, height: sh }} />
                {s.parts.map((p, i) => (
                  <div key={i} className={`xp__hole${p.rail ? " is-rail" : ""}`} style={{ left: p.rect[0] - sx, top: p.rect[1] - sy, width: p.rect[2], height: p.rect[3] }}>
                    {p.rect[2] > 100 && p.rect[3] > 100 && <span>Slot</span>}
                  </div>
                ))}
                <p className="xp__tag">Screen<small>1920 × 1080 px</small></p>
              </div>
              <div className="xp__layer" data-z={Z.layout} data-fade>
                <div className="xp__grid" style={{ left: 86, width: sw - 105, height: sh }} />
                {s.layout.map(([x, y, w, h], i) => (
                  <div key={i} className="xp__outline" style={{ left: x, top: y, width: w, height: h }} />
                ))}
                <p className="xp__tag">Layout<small>rail, header, 12 columns</small></p>
              </div>
              <div className="xp__layer" data-z={Z.component}>
                {s.parts.map((p, i) => (
                  <div
                    key={i}
                    className={`xp__part${p.rail ? " is-rail" : ""}`}
                    style={{
                      left: p.rect[0] - sx, top: p.rect[1] - sy, width: p.rect[2], height: p.rect[3],
                      ...(p.src ? { backgroundImage: `url(${asset(p.src)})`, backgroundSize: "100% 100%" } : crop(p.rect[0], p.rect[1])),
                    }}
                  />
                ))}
                <p className="xp__tag">Component<small>{[...new Set(s.parts.map((p) => p.name))].join(", ")}</small></p>
              </div>
              <div className="xp__layer" data-z={Z.token} data-fade>
                <div className="xp__tokens" style={{ left: sw * 0.27, top: sh * 0.3 }}>
                  <div className="xp__swatches">
                    {s.colours.map((c) => (
                      <div key={c.role}><i style={{ background: c.value }} />{c.role}</div>
                    ))}
                  </div>
                  <div className="xp__space">
                    {s.spacing.map((n) => (
                      <div key={n}><i style={{ width: n, height: n }} />{n}</div>
                    ))}
                  </div>
                </div>
                <p className="xp__tag">Token<small>colour roles, {s.spacing[0]} to {s.spacing[s.spacing.length - 1]} px</small></p>
              </div>
              <div className="xp__layer" data-z={Z.pixel} data-fade>
                <div className="xp__pixel" style={{ left: px - 7, top: py - 7 }} />
                <p className="xp__tag xp__tag--near" style={{ left: px + 26, top: py - 46 }}>1 px</p>
                <p className="xp__tag">Pixel<small>1 px</small></p>
              </div>
              <div className="xp__plumb" style={{ left: px - 1, top: py }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
