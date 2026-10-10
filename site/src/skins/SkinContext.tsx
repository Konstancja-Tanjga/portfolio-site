import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * The reader's skin, kept in the browser.
 *
 * `data-skin` on <html> is what the stylesheet reads; `data-theme` tells
 * the design system whether this skin is dark, so its own components
 * (badges, state blocks on the case pages) agree with the ground. A
 * reader who has not chosen gets `deco`.
 */
export type Skin = "deco" | "blueprint" | "aquarelle";

export const SKINS: { id: Skin; name: string; line: string }[] = [
  { id: "deco", name: "Deco", line: "Lacquer, gold and stepped light" },
  { id: "blueprint", name: "Blueprint", line: "A cyanotype drawing sheet" },
  { id: "aquarelle", name: "Aquarelle", line: "Cold-pressed paper and wet washes" },
];

const DEFAULT: Skin = "deco";
const KEY = "kt-skin";
const DARK: Record<Skin, boolean> = { deco: true, blueprint: true, aquarelle: false };

const isSkin = (v: unknown): v is Skin => SKINS.some((s) => s.id === v);

function readStored(): Skin {
  try {
    const v = localStorage.getItem(KEY);
    return isSkin(v) ? v : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

function apply(skin: Skin) {
  const root = document.documentElement;
  root.setAttribute("data-skin", skin);
  root.setAttribute("data-theme", DARK[skin] ? "dark" : "light");
}

const Ctx = createContext<{ skin: Skin; setSkin: (s: Skin) => void }>({
  skin: DEFAULT,
  setSkin: () => {},
});

export function SkinProvider({ children }: { children: ReactNode }) {
  const [skin, set] = useState<Skin>(readStored);

  useEffect(() => {
    apply(skin);
  }, [skin]);

  const setSkin = useCallback((next: Skin) => {
    if (next === skin) return;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private window: the choice lasts the visit */
    }
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (doc.startViewTransition && !reduced) {
      doc.startViewTransition(() => {
        apply(next);
        set(next);
      });
    } else {
      set(next);
    }
  }, [skin]);

  const value = useMemo(() => ({ skin, setSkin }), [skin, setSkin]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useSkin = () => useContext(Ctx);

/** Three swatches in the masthead. The current one is pressed. */
export function SkinSwitcher() {
  const { skin, setSkin } = useSkin();
  return (
    <div className="skins" role="group" aria-label="Skin">
      {SKINS.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`skins__chip skins__chip--${s.id}`}
          aria-pressed={skin === s.id}
          title={s.line}
          onClick={() => setSkin(s.id)}
        >
          <span className="skins__swatch" aria-hidden="true" />
          <span className="skins__name">{s.name}</span>
        </button>
      ))}
    </div>
  );
}
