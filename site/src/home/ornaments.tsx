/**
 * The hero drawing, once per skin.
 *
 * Each one is the skin's own medium drawing the same subject — the
 * work — rather than a decorative background. Deco fans the light
 * upward in stepped rays. Blueprint is an elevation of the APplus
 * shell with its real dimensions on it. Aquarelle is a botanical plate:
 * a raptor's primary feather and a fern frond, inked over wet washes.
 *
 * All three animate once on load (the only non-user motion on the
 * page) and stay still under prefers-reduced-motion.
 */

/* ---------- deco ---------- */

/** One wing: feathers fanned from the shoulder, each a step shorter. */
function Wing({ side, delay }: { side: 1 | -1; delay: number }) {
  const n = 10;
  const feathers = Array.from({ length: n }, (_, i) => {
    const angle = 30 + i * 8.5; // from raised to the lowest primary, out to the side
    const len = 250 - i * 8;
    const w = 26 - i * 1.1;
    return (
      <g key={i} transform={`rotate(${angle})`} style={{ animationDelay: `${delay + i * 60}ms` }} className="orn__feather">
        <rect x={-w / 2} y={-len} width={w} height={len} rx={w / 2} fill="var(--sk-accent)" fillOpacity={i % 2 ? 0.78 : 1} />
        <rect x={-w / 2} y={-len} width={w} height={w * 0.9} rx={w / 2} fill="var(--sk-ground)" fillOpacity="0.35" />
      </g>
    );
  });
  return (
    <g className="orn__wing" transform={`translate(${400 + side * 30} 334) scale(${side} 1)`}>
      {feathers}
    </g>
  );
}

export function DecoOrnament() {
  const cx = 400;
  const cy = 420;
  const rays = 28;
  const R = 700;
  // the arch: a round top, stepped shoulders, straight sides
  const arch =
    "M60 560 V250 Q60 60 400 60 Q740 60 740 250 V560 Z";
  return (
    <svg
      className="orn orn--deco"
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id="deco-arch">
          <path d={arch} />
        </clipPath>
        <linearGradient id="deco-ray" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="var(--sk-accent)" stopOpacity="0.5" />
          <stop offset="1" stopColor="var(--sk-accent)" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* the frame, stepped */}
      <g fill="none" stroke="var(--sk-accent)" strokeWidth="1.5">
        <path className="orn__frame-line" d={arch} pathLength={1} />
        <path className="orn__frame-line" d="M78 560 V256 Q78 78 400 78 Q722 78 722 256 V560" strokeOpacity="0.45" pathLength={1} style={{ animationDelay: "200ms" }} />
      </g>

      <g clipPath="url(#deco-arch)">
        {/* rays behind the bird */}
        <g className="orn__rays">
          {Array.from({ length: rays }, (_, i) => {
            if (i % 2) return null;
            const a0 = Math.PI + (i / rays) * Math.PI;
            const a1 = Math.PI + ((i + 1) / rays) * Math.PI;
            return (
              <path
                key={i}
                d={`M${cx} ${cy} L${(cx + R * Math.cos(a0)).toFixed(1)} ${(cy + R * Math.sin(a0)).toFixed(1)} L${(cx + R * Math.cos(a1)).toFixed(1)} ${(cy + R * Math.sin(a1)).toFixed(1)} Z`}
                fill="url(#deco-ray)"
                style={{ animationDelay: `${i * 30}ms` }}
              />
            );
          })}
        </g>
        {/* stepped arcs */}
        <g className="orn__arcs" fill="none" stroke="var(--sk-accent)" strokeWidth="1">
          {[300, 360, 420, 480].map((rr, i) => (
            <path
              key={rr}
              d={`M${cx - rr} ${cy} A${rr} ${rr} 0 0 1 ${cx + rr} ${cy}`}
              strokeOpacity={0.55 - i * 0.1}
              pathLength={1}
              style={{ animationDelay: `${400 + i * 90}ms` }}
            />
          ))}
        </g>
        {/* the ground: a stepped plinth */}
        <g fill="var(--sk-accent)" className="orn__plinth">
          <rect x="230" y="530" width="340" height="8" />
          <rect x="270" y="542" width="260" height="6" />
        </g>
      </g>

      {/* the falcon */}
      <Wing side={-1} delay={500} />
      <Wing side={1} delay={500} />
      <g className="orn__body" fill="var(--sk-accent)">
        {/* chest and belly */}
        <path d="M400 280 C 440 290 452 360 446 420 C 440 470 420 490 400 494 C 380 490 360 470 354 420 C 348 360 360 300 400 290 Z" />
        {/* banding on the chest, cut into the gold */}
        {[350, 372, 394, 416, 438].map((y, i) => (
          <rect key={y} x={400 - (44 - i * 4)} y={y} width={(44 - i * 4) * 2} height="4" fill="var(--sk-ground)" fillOpacity="0.45" />
        ))}
        {/* tail, stepped */}
        <rect x="352" y="488" width="96" height="10" />
        <rect x="364" y="502" width="72" height="8" />
        <rect x="376" y="514" width="48" height="6" />
        {/* head and hooked beak */}
        <circle cx="400" cy="250" r="34" />
        <path d="M428 236 L462 250 L436 272 Z" />
        <circle cx="412" cy="242" r="4.5" fill="var(--sk-ground)" />
      </g>
    </svg>
  );
}

/* ---------- blueprint ---------- */

/** A dimension line with its figure, drawn the way a sheet draws one. */
function Dim({
  x1,
  y1,
  x2,
  y2,
  label,
  side = 1,
  delay = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  side?: 1 | -1;
  delay?: number;
}) {
  const horizontal = y1 === y2;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const t = 6;
  return (
    <g className="orn__dim" style={{ animationDelay: `${delay}ms` }}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} pathLength={1} />
      {horizontal ? (
        <>
          <line x1={x1} y1={y1 - t} x2={x1} y2={y1 + t} />
          <line x1={x2} y1={y2 - t} x2={x2} y2={y2 + t} />
          <line x1={x1 - 3} y1={y1 + 3} x2={x1 + 3} y2={y1 - 3} />
          <line x1={x2 - 3} y1={y2 + 3} x2={x2 + 3} y2={y2 - 3} />
          <text x={mx} y={my - 5 * side} textAnchor="middle">
            {label}
          </text>
        </>
      ) : (
        <>
          <line x1={x1 - t} y1={y1} x2={x1 + t} y2={y1} />
          <line x1={x2 - t} y1={y2} x2={x2 + t} y2={y2} />
          <line x1={x1 - 3} y1={y1 + 3} x2={x1 + 3} y2={y1 - 3} />
          <line x1={x2 - 3} y1={y2 + 3} x2={x2 + 3} y2={y2 - 3} />
          <text
            x={mx - 6 * side}
            y={my}
            textAnchor="middle"
            transform={`rotate(-90 ${mx - 6 * side} ${my})`}
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
}

export function BlueprintOrnament() {
  // An elevation of the APplus shell, at the numbers the shell is built
  // to: nav rail 56, sub-level panel 248, content 1136 beside a side
  // sheet of 448. Here at 1:4.
  const ox = 76;
  const oy = 84;
  const s = 0.34;
  const rail = 56 * s;
  const panel = 248 * s;
  const content = 1136 * s;
  const sheet = 448 * s;
  const h = 1040 * s;
  const bar = 48 * s;
  const W = ox + rail + panel + content + sheet;
  return (
    <svg
      className="orn orn--blueprint"
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="bp-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke="var(--sk-ink)" strokeOpacity="0.08" strokeWidth="0.5" />
        </pattern>
        <pattern id="bp-grid-major" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0H0V50" fill="none" stroke="var(--sk-ink)" strokeOpacity="0.16" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="800" height="560" fill="url(#bp-grid)" />
      <rect width="800" height="560" fill="url(#bp-grid-major)" />

      {/* the sheet's border */}
      <rect className="orn__frame" x="12" y="12" width="776" height="536" pathLength={1} />

      {/* the elevation */}
      <g className="orn__lines" fill="none" stroke="var(--sk-ink)" strokeWidth="1.4">
        <rect x={ox} y={oy} width={W - ox} height={h} pathLength={1} />
        <rect x={ox} y={oy} width={rail} height={h} pathLength={1} style={{ animationDelay: "250ms" }} />
        <rect x={ox + rail} y={oy} width={panel} height={h} pathLength={1} style={{ animationDelay: "400ms" }} />
        <line x1={ox + rail + panel} y1={oy + bar} x2={W} y2={oy + bar} pathLength={1} style={{ animationDelay: "550ms" }} />
        <rect x={ox + rail + panel + content} y={oy + bar} width={sheet} height={h - bar} pathLength={1} style={{ animationDelay: "700ms" }} />
        {/* rail icons */}
        {Array.from({ length: 7 }, (_, i) => (
          <rect
            key={i}
            x={ox + rail / 2 - 5}
            y={oy + 18 + i * 26}
            width="10"
            height="10"
            pathLength={1}
            style={{ animationDelay: `${800 + i * 50}ms` }}
          />
        ))}
        {/* panel rows */}
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1={ox + rail + 10}
            y1={oy + 26 + i * 24}
            x2={ox + rail + panel - 10 - (i % 3) * 22}
            y2={oy + 26 + i * 24}
            pathLength={1}
            style={{ animationDelay: `${900 + i * 40}ms` }}
          />
        ))}
        {/* content: a table */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={i}
            x1={ox + rail + panel + 16}
            y1={oy + bar + 30 + i * 32}
            x2={ox + rail + panel + content - 16}
            y2={oy + bar + 30 + i * 32}
            pathLength={1}
            strokeOpacity="0.7"
            style={{ animationDelay: `${1000 + i * 40}ms` }}
          />
        ))}
        {/* side sheet fields */}
        {Array.from({ length: 6 }, (_, i) => (
          <rect
            key={i}
            x={ox + rail + panel + content + 16}
            y={oy + bar + 24 + i * 50}
            width={sheet - 32}
            height="28"
            pathLength={1}
            strokeOpacity="0.7"
            style={{ animationDelay: `${1200 + i * 60}ms` }}
          />
        ))}
      </g>

      {/* dimensions, in the real pixels */}
      <g className="orn__dims" stroke="var(--sk-ink-3)" strokeWidth="1" fill="var(--sk-ink)">
        <Dim x1={ox} y1={oy - 24} x2={ox + rail} y2={oy - 24} label="56" delay={1400} />
        <Dim x1={ox + rail} y1={oy - 24} x2={ox + rail + panel} y2={oy - 24} label="248" delay={1500} />
        <Dim x1={ox + rail + panel} y1={oy - 24} x2={ox + rail + panel + content} y2={oy - 24} label="1136" delay={1600} />
        <Dim x1={ox + rail + panel + content} y1={oy - 24} x2={W} y2={oy - 24} label="448" delay={1700} />
        <Dim x1={ox} y1={oy - 48} x2={W} y2={oy - 48} label="1888" delay={1800} />
        <Dim x1={ox - 30} y1={oy} x2={ox - 30} y2={oy + h} label="1040" delay={1900} />
        <Dim x1={W + 30} y1={oy} x2={W + 30} y2={oy + bar} label="48" side={-1} delay={2000} />
      </g>

      {/* red pencil: the one thing being changed */}
      <g className="orn__mark" fill="none" stroke="var(--sk-accent-2)" strokeWidth="2">
        <ellipse cx={ox + rail + panel + content + sheet / 2} cy={oy + bar + 24 + 2 * 50 + 14} rx={sheet / 2 - 6} ry="24" pathLength={1} />
        <path d={`M${ox + rail + panel + content + sheet / 2} ${oy + bar + 24 + 2 * 50 + 40} L${ox + rail + panel + 200} ${oy + h + 34}`} pathLength={1} />
      </g>
      <text className="orn__note" x={ox + rail + panel + 196} y={oy + h + 50} fill="var(--sk-accent-2)" textAnchor="end">
        rev. B — the label moves above the field
      </text>

      {/* title block */}
      <g className="orn__title" fill="var(--sk-ink)" stroke="var(--sk-ink)" strokeWidth="1">
        <rect x="488" y="458" width="300" height="90" fill="none" />
        <line x1="488" y1="488" x2="788" y2="488" />
        <line x1="488" y1="518" x2="788" y2="518" />
        <line x1="640" y1="488" x2="640" y2="548" />
        <text x="498" y="478" stroke="none">APplus ERP — application shell, elevation</text>
        <text x="498" y="508" stroke="none">drawn K. Tanjga-Nawrot</text>
        <text x="650" y="508" stroke="none">scale 1 : 4</text>
        <text x="498" y="538" stroke="none">sheet 01 of 03</text>
        <text x="650" y="538" stroke="none">FOX v3 · 2026</text>
      </g>
    </svg>
  );
}

/* ---------- aquarelle ---------- */

/** Barbs along a curved rachis: a primary feather, generated. */
function Feather({ x, y, len, delay }: { x: number; y: number; len: number; delay: number }) {
  const n = 96;
  const pts = Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    // the rachis: a gentle S
    const px = x + len * t;
    const py = y - 40 * Math.sin(t * Math.PI) - 60 * t;
    return { t, px, py };
  });
  const rachis = pts.map((p, i) => `${i ? "L" : "M"}${p.px.toFixed(1)} ${p.py.toFixed(1)}`).join(" ");
  const barbs = pts.slice(4, n - 1).flatMap((p, i) => {
    // the vane: wide at the base, tapering to the tip; the outer vane
    // narrower than the inner, as a primary is
    const env = Math.sin(Math.pow(p.t, 0.6) * Math.PI) * (1 - p.t * 0.35);
    const w = 52 * env;
    const w2 = 30 * env;
    const lean = 14 + 10 * p.t;
    // barbs sweep toward the tip and curve back slightly at the end
    const a = `M${p.px.toFixed(1)} ${p.py.toFixed(1)} c ${(lean * 0.4).toFixed(1)} ${(-w * 0.35).toFixed(1)} ${(lean * 0.9).toFixed(1)} ${(-w * 0.75).toFixed(1)} ${(lean + 6).toFixed(1)} ${(-w).toFixed(1)}`;
    const b = `M${p.px.toFixed(1)} ${p.py.toFixed(1)} c ${(lean * 0.4).toFixed(1)} ${(w2 * 0.35).toFixed(1)} ${(lean * 0.9).toFixed(1)} ${(w2 * 0.75).toFixed(1)} ${(lean + 6).toFixed(1)} ${w2.toFixed(1)}`;
    // a few barbs split away, as a worn feather's do
    const gap = i % 23 === 11 || i % 31 === 7;
    return [
      <path key={`a${i}`} d={a} pathLength={1} strokeOpacity={gap ? 0.25 : 0.85} style={{ animationDelay: `${delay + 400 + i * 9}ms` }} />,
      <path key={`b${i}`} d={b} pathLength={1} strokeOpacity={gap ? 0.25 : 0.7} style={{ animationDelay: `${delay + 410 + i * 9}ms` }} />,
    ];
  });
  return (
    <g className="orn__ink" fill="none" stroke="var(--sk-ink)" strokeWidth="0.7" strokeLinecap="round">
      <path d={rachis} strokeWidth="2.2" pathLength={1} style={{ animationDelay: `${delay}ms` }} />
      {barbs}
    </g>
  );
}

/** Pinnae along a rachis: a fern frond, generated. */
function Frond({ x, y, len, delay }: { x: number; y: number; len: number; delay: number }) {
  const n = 18;
  const pts = Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n;
    return { t, px: x + len * t * 0.55, py: y - len * t - 30 * Math.sin(t * Math.PI * 0.5) };
  });
  const rachis = pts.map((p, i) => `${i ? "L" : "M"}${p.px.toFixed(1)} ${p.py.toFixed(1)}`).join(" ");
  const pinnae = pts.slice(2, n).flatMap((p, i) => {
    const w = 44 * Math.sin(Math.pow(p.t, 0.8) * Math.PI);
    const left = `M${p.px.toFixed(1)} ${p.py.toFixed(1)} c ${(-w * 0.4).toFixed(1)} -2 ${(-w * 0.8).toFixed(1)} -6 ${(-w).toFixed(1)} -14 c ${(-w * 0.2).toFixed(1)} 10 ${(-w * 0.5).toFixed(1)} 18 ${(-w * 0.0).toFixed(1)} 16 z`;
    const right = `M${p.px.toFixed(1)} ${p.py.toFixed(1)} c ${(w * 0.4).toFixed(1)} -2 ${(w * 0.8).toFixed(1)} -8 ${w.toFixed(1)} -16 c ${(w * 0.2).toFixed(1)} 10 ${(w * 0.5).toFixed(1)} 18 ${(w * 0.0).toFixed(1)} 16 z`;
    return [
      <path key={`l${i}`} d={left} pathLength={1} style={{ animationDelay: `${delay + 300 + i * 50}ms` }} />,
      <path key={`r${i}`} d={right} pathLength={1} style={{ animationDelay: `${delay + 330 + i * 50}ms` }} />,
    ];
  });
  return (
    <g className="orn__ink" fill="none" stroke="var(--sk-ink)" strokeWidth="0.9" strokeLinejoin="round">
      <path d={rachis} strokeWidth="1.4" pathLength={1} style={{ animationDelay: `${delay}ms` }} />
      {pinnae}
    </g>
  );
}

export function AquarelleOrnament() {
  return (
    <svg
      className="orn orn--aquarelle"
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* wet edges: noise displaces the blob's outline, then softens it */}
        <filter id="wash" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="38" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.08" />
          </feComponentTransfer>
        </filter>
        <radialGradient id="w-coral">
          <stop offset="0" stopColor="var(--sk-accent)" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="var(--sk-accent)" stopOpacity="0.32" />
          <stop offset="1" stopColor="var(--sk-accent)" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="w-slate">
          <stop offset="0" stopColor="var(--sk-tint)" stopOpacity="0.5" />
          <stop offset="0.7" stopColor="var(--sk-tint)" stopOpacity="0.25" />
          <stop offset="1" stopColor="var(--sk-tint)" stopOpacity="0.04" />
        </radialGradient>
        <radialGradient id="w-green">
          <stop offset="0" stopColor="var(--sk-tint-2)" stopOpacity="0.5" />
          <stop offset="0.7" stopColor="var(--sk-tint-2)" stopOpacity="0.26" />
          <stop offset="1" stopColor="var(--sk-tint-2)" stopOpacity="0.04" />
        </radialGradient>
      </defs>

      <rect width="800" height="560" filter="url(#grain)" />

      {/* the washes go down first, as they would */}
      <g className="orn__washes" filter="url(#wash)">
        <ellipse className="orn__wash" cx="300" cy="300" rx="190" ry="120" fill="url(#w-slate)" style={{ animationDelay: "0ms" }} />
        <ellipse className="orn__wash" cx="430" cy="250" rx="120" ry="90" fill="url(#w-coral)" style={{ animationDelay: "250ms" }} />
        <ellipse className="orn__wash" cx="610" cy="330" rx="110" ry="150" fill="url(#w-green)" style={{ animationDelay: "500ms" }} />
        {/* a dropped splash */}
        <circle className="orn__wash" cx="690" cy="150" r="9" fill="var(--sk-accent)" fillOpacity="0.5" style={{ animationDelay: "900ms" }} />
        <circle className="orn__wash" cx="712" cy="178" r="4" fill="var(--sk-accent)" fillOpacity="0.5" style={{ animationDelay: "950ms" }} />
        <circle className="orn__wash" cx="668" cy="186" r="3" fill="var(--sk-accent)" fillOpacity="0.4" style={{ animationDelay: "1000ms" }} />
      </g>

      {/* then the ink */}
      <Feather x={130} y={360} len={420} delay={900} />
      <Frond x={560} y={450} len={300} delay={1300} />

      {/* the plate's pencilled notes */}
      <g className="orn__notes" fill="var(--sk-ink-2)" stroke="none">
        <text x="120" y="420">fig. 1 — primary, common buzzard</text>
        <text x="560" y="480">fig. 2 — Dryopteris, male fern</text>
        <text x="40" y="60" className="orn__plate">Plate I</text>
        <text x="760" y="540" textAnchor="end" className="orn__sig">K. Tanjga</text>
      </g>
      <g fill="none" stroke="var(--sk-ink-3)" strokeWidth="0.8" strokeDasharray="2 3">
        <line x1="200" y1="408" x2="260" y2="330" />
        <line x1="640" y1="468" x2="660" y2="360" />
      </g>
    </svg>
  );
}
