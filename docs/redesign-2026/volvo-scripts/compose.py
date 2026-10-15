"""MacBook mockups for the Volvo study from 2x Figma exports.

usage: compose.py RAW_DIR OUT_DIR FRAME_WEBP SPEC_JSON   (SPEC_JSON is written by spec.py)

Each spec entry, all coordinates in Figma px (1x) of a 1920-wide frame:
  src         export in RAW_DIR (any scale; scale = width / 1920)
  y0          top of the window shown on the screen (default 0)
  blur        [[x, y, w, h], ...] boxes to Gaussian-blur
  modal       "auto": find the white dialog drawn inside the frame (over its
              scrim), keep it unblurred, then apply only blur_modal inside it
  blur_modal  boxes blurred after the dialog is restored; ignored without modal
  scrim       [hex, opacity] blended over the whole frame
  overlay     [[file, x, y], ...] dialogs that sit on the canvas over the frame;
              exported at the same scale as src, composited after the scrim
  blur_after  boxes blurred after the overlays, for values inside them
  flat        true: also save NAME-flat.png, the processed frame before cropping
Writes NAME-2400.webp, NAME-1600.webp and NAME-full.webp (up to 3000 px).

The screen hole in FRAME_WEBP is x 284-2103, y 73-1268 in frame pixels
(1820 x 1196), so a 1920 x 1262 Figma-px window starting at y0 fills it;
a frame shorter than that is padded white.
"""
import json, os, subprocess, sys
from PIL import Image, ImageFilter
raw, out, frame_path, spec_path = sys.argv[1:5]
FRAME = Image.open(frame_path).convert("RGBA")
W, H = FRAME.size
HOLE = (284, 73, 1820, 1196)
spec = json.load(open(spec_path))
os.makedirs(out, exist_ok=True)

def webp(im, dst, maxw, q=84):
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    tmp = dst + ".png"; im.save(tmp)
    subprocess.run(["cwebp", "-quiet", "-q", str(q), "-alpha_q", "90", tmp, "-o", dst], check=True)
    os.remove(tmp)

def blurred(im, boxes, s):
    for x, y, w, h in boxes:
        b = (round(x * s), round(y * s), round((x + w) * s), round((y + h) * s))
        region = im.crop(b).filter(ImageFilter.GaussianBlur(9 * s))
        im.paste(region, b[:2])
    return im

for name, sp in spec.items():
    src = Image.open(os.path.join(raw, sp["src"])).convert("RGB")
    s = src.width / 1920
    # a dialog drawn inside the frame keeps its own pixels: the screen under it is
    # blurred, the dialog is restored, then only "blur_modal" applies inside it
    modal = None
    if sp.get("modal") == "auto":
        import numpy as np
        a = np.asarray(src); white = (a.min(axis=2) >= 250)
        # needs a scrim in the frame: it makes the page grey, so the dialog is the white block
        rows = np.where(white.mean(axis=1) > 0.15)[0]; cols = np.where(white.mean(axis=0) > 0.15)[0]
        modal = (int(cols.min()), int(rows.min()), int(cols.max()) + 1, int(rows.max()) + 1)
        keep = src.crop(modal)
    src = blurred(src, sp.get("blur", []), s)
    if modal:
        src.paste(keep, modal[:2]); src = blurred(src, sp.get("blur_modal", []), s)
        print("  modal", [round(v / s) for v in modal])
    # a scrim drawn on the canvas over the whole frame: [hex, opacity]
    if sp.get("scrim"):
        hexc, op = sp["scrim"]
        veil = Image.new("RGB", src.size, hexc)
        src = Image.blend(src, veil, op)
    # dialogs that sit on the canvas over the frame rather than inside it
    for file, ox, oy in sp.get("overlay", []):
        ov = Image.open(os.path.join(raw, file)).convert("RGBA")
        base = src.convert("RGBA"); base.alpha_composite(ov, (round(ox * s), round(oy * s))); src = base.convert("RGB")
    src = blurred(src, sp.get("blur_after", []), s)
    if sp.get("flat"):
        src.save(os.path.join(out, f"{name}-flat.png"))
    y0 = sp.get("y0", 0)
    bottom = round((y0 + 1920 * HOLE[3] / HOLE[2]) * s)
    if bottom > src.height:  # a frame shorter than the screen: the page continues white
        pad = Image.new("RGB", (src.width, bottom), "white"); pad.paste(src, (0, 0)); src = pad
    win = src.crop((0, round(y0 * s), round(1920 * s), bottom))
    win = win.resize(HOLE[2:], Image.LANCZOS)
    mac = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    mac.paste(win, HOLE[:2]); mac.alpha_composite(FRAME)
    webp(mac, f"{out}/{name}-2400.webp", 2400)
    webp(mac, f"{out}/{name}-1600.webp", 1600)
    webp(mac, f"{out}/{name}-full.webp", 3000, 86)
    print(name, src.size, "y0", y0)
