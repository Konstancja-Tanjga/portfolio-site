import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { asset } from "./asset";
import { reduced } from "./motion";

/** x, y, width, height in px, measured from the screen's top-left corner. */
export type Rect = [number, number, number, number];

export type ExplodedScreen = {
  /** The product, for the tags and for the text a screen reader gets instead of the motion. */
  name: string;
  /** The design system its components come from, for the same text. */
  system: string;
  /** The screen export. A sharper export of the same aspect is scaled to `size`. */
  src: string;
  /** The design space: the export's size at the scale every rect is measured in. */
  size: [number, number];
  /** Where the screen sits inside the export. The only rect not measured from the screen. */
  screen: Rect;
  /**
   * The components that lift off. A part with its own `src` (a layer
   * exported from Figma, at the rect's aspect) shows that file; the crop
   * of the screen stays under it, so a missing file falls back to the crop.
   */
  parts: { name: string; rect: Rect; src?: string; rail?: boolean }[];
  /** The column grid on the layout layer, and what the layout tag says about it. */
  grid: Rect;
  layoutNote: string;
  /** Outlines on the layout layer. */
  layout: Rect[];
  /** Colours of the screen, named by the role they play there. */
  colours: [{ role: string; value: string }, ...{ role: string; value: string }[]];
  /** The spacing steps, in px, smallest first. */
  spacing: [number, ...number[]];
  /** Where the token panel floats. */
  tokensAt: [number, number];
  /** Where the one pixel sits. */
  pixel: [number, number];
};

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** 0 before `a`, 1 after `b`, eased in between. */
const ease = (v: number, a: number, b: number) => {
  const x = clamp((v - a) / (b - a));
  return x * x * (3 - 2 * x);
};

/** Height of each layer above the screen when the stack is fully apart. */
const Z = { screen: 0, layout: 150, component: 310, token: 480, pixel: 640 };

/**
 * How far the stack turns and where it sits once apart. A narrow stage
 * (under 640 px) turns less and sits higher, so the stack stays in frame.
 */
const POSE = {
  wide: { tilt: 54, turn: -34, shrink: 0.45, lift: -30 },
  narrow: { tilt: 48, turn: -20, shrink: 0.2, lift: -160 },
};

const place = ([x, y, w, h]: Rect): CSSProperties => ({ left: x, top: y, width: w, height: h });

/**
 * One screen, taken apart.
 *
 * Between the hero and the work, the page pins a product screen and, as
 * the reader scrolls, tilts it into a three-quarter view and lifts it
 * into layers: layout, components, tokens, one pixel (the journey's
 * scales, with layout added between screen and component). A dashed
 * plumb line runs from that pixel down through every layer to the point
 * on the screen it belongs to. The components are crops of the same
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
    const still = reduced();
    const layers = [...rg.querySelectorAll<HTMLElement>("[data-z]")].map((el) => ({ el, z: Number(el.dataset.z) }));
    const fades = [...rg.querySelectorAll<HTMLElement>("[data-fade]")];
    const holes = [...rg.querySelectorAll<HTMLElement>(".xp__hole")];
    const parts = [...rg.querySelectorAll<HTMLElement>(".xp__part")];
    const tags = [...rg.querySelectorAll<HTMLElement>(".xp__tag")];
    const plumb = rg.querySelector<HTMLElement>(".xp__plumb");
    let p = still ? 0.8 : 0;
    const orbit = { x: 0, y: 0 };
    let target = { x: 0, y: 0 }, frame = 0;

    const render = () => {
      frame = 0;
      orbit.x += (target.x - orbit.x) * 0.12;
      orbit.y += (target.y - orbit.y) * 0.12;
      const W = st.clientWidth, H = st.clientHeight;
      const pose = W < 640 ? POSE.narrow : POSE.wide;
      const k = Math.min((W * 0.94) / sw, (H * 0.86) / sh);
      const tilt = ease(p, 0.06, 0.4);
      const apart = ease(p, 0.2, 0.72);
      const rx = pose.tilt * tilt - orbit.y * 6 * tilt;
      const rz = pose.turn * tilt + orbit.x * 10 * tilt;
      const scale = k * (1 - pose.shrink * tilt);
      rg.style.transform = `translateY(${(pose.lift * tilt * k).toFixed(1)}px) scale(${scale.toFixed(4)}) rotateX(${rx.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg)`;
      // the small step per layer keeps layers that share a plane from z-fighting
      layers.forEach(({ el, z }, i) => { el.style.transform = `translateZ(${(z * apart + i * 0.4).toFixed(1)}px)`; });
      fades.forEach((l) => { l.style.opacity = apart.toFixed(3); });
      const shadow = `0 ${(26 * apart).toFixed(0)}px ${(46 * apart).toFixed(0)}px rgba(0, 0, 0, ${(0.5 * apart).toFixed(2)})`;
      parts.forEach((c) => { c.style.boxShadow = shadow; });
      const holeOpacity = ease(apart, 0.05, 0.4).toFixed(3);
      holes.forEach((h) => { h.style.opacity = holeOpacity; });
      const tagOpacity = ease(apart, 0.45, 0.9).toFixed(3);
      tags.forEach((g) => { g.style.opacity = tagOpacity; });
      if (plumb) {
        plumb.style.height = `${(Z.pixel * apart).toFixed(1)}px`;
        plumb.style.opacity = ease(apart, 0.3, 0.8).toFixed(3);
      }
      if (Math.abs(target.x - orbit.x) > 0.002 || Math.abs(target.y - orbit.y) > 0.002) frame = requestAnimationFrame(render);
    };
    const kick = () => { if (!frame) frame = requestAnimationFrame(render); };
    const measure = () => {
      const r = tr.getBoundingClientRect();
      const span = tr.offsetHeight - window.innerHeight;
      p = span > 0 ? clamp(-r.top / span) : 0;
      kick();
    };
    const move = (ev: PointerEvent) => {
      const r = st.getBoundingClientRect();
      target = { x: (ev.clientX - r.left) / r.width - 0.5, y: (ev.clientY - r.top) / r.height - 0.5 };
      kick();
    };
    const leave = () => { target = { x: 0, y: 0 }; kick(); };
    const orbitable = !still && window.matchMedia("(hover: hover)").matches;

    // the still has nothing to follow on scroll; it only refits on resize
    if (still) kick();
    else {
      measure();
      window.addEventListener("scroll", measure, { passive: true });
    }
    window.addEventListener("resize", kick);
    if (orbitable) { st.addEventListener("pointermove", move); st.addEventListener("pointerleave", leave); }
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", kick);
      st.removeEventListener("pointermove", move);
      st.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sw, sh]);

  const sheet = `url(${asset(s.src)})`;
  const sheetSize = `${s.size[0]}px ${s.size[1]}px`;
  /** The export, shifted so the screen point x, y sits at the element's corner. */
  const at = (x: number, y: number) => `-${sx + x}px -${sy + y}px`;
  const crop = (x: number, y: number): CSSProperties => ({ backgroundImage: sheet, backgroundSize: sheetSize, backgroundPosition: at(x, y) });
  const fill = (p: ExplodedScreen["parts"][number]): CSSProperties =>
    p.src
      ? { backgroundImage: `url(${asset(p.src)}), ${sheet}`, backgroundSize: `100% 100%, ${sheetSize}`, backgroundPosition: `0 0, ${at(p.rect[0], p.rect[1])}` }
      : crop(p.rect[0], p.rect[1]);
  const [px, py] = s.pixel;
  const steps = s.spacing;

  return (
    <section className="xp" id={id} aria-labelledby="xp-heading">
      <div className="xp__track" ref={track}>
        <div className="xp__pin">
          <div className="xp__head">
            <h2 id="xp-heading" className="xp__title">One screen, taken apart</h2>
            <p className="xp__steps" aria-hidden="true">
              <span>Screen</span><span>Layout</span><span>Component</span><span>Token</span><span>Pixel 1 px</span>
            </p>
            <p className="xp__sr">
              The {s.name} screen separated into its layers: the layout grid, the {s.system} components lifted off it,
              the colour and spacing tokens they use, and a single pixel.
            </p>
          </div>
          <div className="xp__stage" ref={stage} aria-hidden="true">
            <div className="xp__rig" ref={rig} style={{ width: sw, height: sh, marginLeft: -sw / 2, marginTop: -sh / 2 }}>
              <div className="xp__layer" data-z={Z.screen}>
                <div className="xp__screen" style={{ ...crop(0, 0), width: sw, height: sh }} />
                {s.parts.map((p, i) => (
                  <div key={i} className={`xp__hole${p.rail ? " is-rail" : ""}`} style={place(p.rect)}>
                    {p.rect[2] > 100 && p.rect[3] > 100 && <span>Slot</span>}
                  </div>
                ))}
                <p className="xp__tag">Screen<small>{s.name}</small></p>
              </div>
              <div className="xp__layer" data-z={Z.layout} data-fade>
                <div className="xp__grid" style={place(s.grid)} />
                {s.layout.map((r, i) => (
                  <div key={i} className="xp__outline" style={place(r)} />
                ))}
                <p className="xp__tag">Layout<small>{s.layoutNote}</small></p>
              </div>
              <div className="xp__layer" data-z={Z.component}>
                {s.parts.map((p, i) => (
                  <div key={i} className={`xp__part${p.rail ? " is-rail" : ""}`} style={{ ...place(p.rect), ...fill(p) }} />
                ))}
                <p className="xp__tag">Component<small>{[...new Set(s.parts.map((p) => p.name))].join(", ")}</small></p>
              </div>
              <div className="xp__layer" data-z={Z.token} data-fade>
                <div className="xp__tokens" style={{ left: s.tokensAt[0], top: s.tokensAt[1] }}>
                  <div className="xp__swatches">
                    {s.colours.map((c, i) => (
                      <div key={i}><i style={{ background: c.value }} />{c.role}</div>
                    ))}
                  </div>
                  <div className="xp__space">
                    {steps.map((n, i) => (
                      <div key={i}><i style={{ width: n, height: n }} />{n}</div>
                    ))}
                  </div>
                </div>
                <p className="xp__tag">Token<small>colour roles, {steps[0]} to {steps[steps.length - 1]} px</small></p>
              </div>
              <div className="xp__layer" data-z={Z.pixel} data-fade>
                <div className="xp__pixel" style={{ left: px - 7, top: py - 7 }} />
                <p className="xp__tag" style={{ left: px + 26, top: py - 46 }}>1 px</p>
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
