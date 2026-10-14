"""Clean the MacBook mockups in public/: keep the laptop, drop render leftovers.

Two kinds of export live in public/work/*/device and public/work/frames:

- Composed by the MacBook pipeline (aspect ~1.599): under the aluminium
  base sits a flat light-grey slab, and a 4-5 px silver sliver runs down
  the left side of the lid only (the right side has none).
- Exported from Figma (aspect ~1.587): a blurred grey shadow under the
  base, sometimes touching it, sometimes separated by empty rows.

Positions are measured per image, not assumed, so every size of the same
export (1600, 2400, full) is cleaned the same way. Everything that is not
the laptop becomes fully transparent.

Usage: python3 scripts/clean-mockups.py [--dry] [paths...]
"""
import glob
import sys

import numpy as np
from PIL import Image


def lum(rgb):
    return rgb[..., 0] * 0.299 + rgb[..., 1] * 0.587 + rgb[..., 2] * 0.114


def clean(path, dry=False):
    im = Image.open(path).convert("RGBA")
    a = np.array(im)
    H, W = a.shape[:2]
    alpha = a[..., 3]
    L = lum(a[..., :3].astype(np.float32))
    changed = 0

    # 1. The base: the first row in the lower fifth that is opaque from edge
    #    to edge (only the aluminium base spans the whole width).
    col = int(W * 0.3)
    start = int(H * 0.8)
    base_top = next((y for y in range(start, H) if alpha[y, 2] > 200 and alpha[y, W - 3] > 200), None)
    if base_top is None:
        return 0
    # the base darkens to its bottom edge; whatever follows the dark edge
    # (a light slab, or a shadow that touches the base) goes
    dark = base_top
    for y in range(base_top, H):
        if L[y, col] < 45 and alpha[y, col] > 200:
            dark = y
        elif dark > base_top and (alpha[y, col] < 8 or L[y, col] > 120):
            changed += int((alpha[y:] > 0).sum())
            alpha[y:] = 0
            break

    # 2. Anything below the first empty row after the base (a floating
    #    shadow). "Empty" ignores the stray 1-3 alpha dust exports carry.
    for y in range(base_top, H):
        if not (alpha[y] > 10).any():
            changed += int((alpha[y:] > 0).sum())
            alpha[y:] = 0
            break

    # 3. The silver sliver left of the lid: light, unsaturated pixels before
    #    the lid's own blue-grey edge, above the base.
    rgb = a[..., :3].astype(np.int16)
    sat = rgb.max(axis=2) - rgb.min(axis=2)
    limit = int(W * 0.12)
    for y in range(0, base_top):
        xs = np.nonzero(alpha[y, :limit])[0]
        if xs.size == 0:
            continue
        for x in range(xs[0], limit):
            if alpha[y, x] <= 10:
                if alpha[y, x]:
                    alpha[y, x] = 0
                    changed += 1
                continue
            if L[y, x] > 160 and sat[y, x] < 24:
                alpha[y, x] = 0
                changed += 1
                continue
            break

    if changed and not dry:
        a[..., 3] = alpha
        Image.fromarray(a).save(path, "WEBP", quality=90, method=4)
    return changed


if __name__ == "__main__":
    args = [x for x in sys.argv[1:] if x != "--dry"]
    dry = "--dry" in sys.argv
    paths = args or sorted(glob.glob("public/work/*/device/*.webp")) + ["public/work/frames/macbook.webp"]
    total = 0
    for p in paths:
        n = clean(p, dry)
        total += bool(n)
        print(f"{'would clean' if dry else 'cleaned'} {n:>8} px  {p}" if n else f"untouched            {p}")
    print(f"{total} of {len(paths)} images {'would change' if dry else 'changed'}")
