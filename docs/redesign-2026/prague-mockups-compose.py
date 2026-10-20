import sys, numpy as np
from PIL import Image, ImageFilter, ImageDraw
S, P = sys.argv[1], sys.argv[2]
N = 2048
def lin(c): return tuple(int(x) for x in c)

def frame_art(art, outer_h, border, mat, frame_rgb, mat_rgb=(244, 241, 234), grain=0.0):
    ar = art.width / art.height
    inner_h = outer_h - 2 * border - 2 * mat
    inner_w = int(round(inner_h * ar))
    W, H = inner_w + 2 * mat + 2 * border, outer_h
    f = Image.new("RGB", (W, H), frame_rgb)
    d = ImageDraw.Draw(f)
    # frame: a lighter top-left edge and a darker bottom-right edge, as moulding catches the light
    for i in range(border):
        t = i / border
        hi = lin(np.clip(np.array(frame_rgb) * (1.18 - 0.18 * t), 0, 255))
        lo = lin(np.clip(np.array(frame_rgb) * (0.78 + 0.22 * t), 0, 255))
        d.line([(i, i), (W - 1 - i, i)], fill=hi); d.line([(i, i), (i, H - 1 - i)], fill=hi)
        d.line([(i, H - 1 - i), (W - 1 - i, H - 1 - i)], fill=lo); d.line([(W - 1 - i, i), (W - 1 - i, H - 1 - i)], fill=lo)
    if grain:
        rng = np.random.default_rng(11)
        def streaks(w, h, along_x):
            n = rng.normal(0, 1, (h, max(4, w // 40)) if along_x else (max(4, h // 40), w))
            img = Image.fromarray(((n - n.min()) / (np.ptp(n) + 1e-6) * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
            fine = Image.fromarray((rng.normal(128, 40, (h, w))).clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
            a = np.asarray(img, dtype=float) / 255 * 0.7 + np.asarray(fine, dtype=float) / 255 * 0.3
            return 1 + (a - 0.5) * grain
        hx, vy = streaks(W, H, True), streaks(W, H, False)
        gy, gx = np.mgrid[0:H, 0:W]
        dist_x = np.minimum(gx, W - 1 - gx); dist_y = np.minimum(gy, H - 1 - gy)
        tex = np.where(dist_y < dist_x, hx, vy)
        arr = np.asarray(f, dtype=float) * tex[..., None]
        f = Image.fromarray(arr.clip(0, 255).astype(np.uint8))
    # mat with a soft inner shadow from the frame lip
    m = Image.new("RGB", (W - 2 * border, H - 2 * border), mat_rgb)
    sh = Image.new("L", m.size, 0); ImageDraw.Draw(sh).rectangle([0, 0, m.width - 1, m.height - 1], outline=255, width=max(4, border // 3))
    sh = sh.filter(ImageFilter.GaussianBlur(border * 0.6))
    m = Image.composite(Image.new("RGB", m.size, lin(np.array(mat_rgb) * 0.82)), m, sh.point(lambda v: int(v * 0.55)))
    f.paste(m, (border, border))
    # bevel: a thin light core around the window, then the paper
    d = ImageDraw.Draw(f)
    x0, y0 = border + mat, border + mat
    d.rectangle([x0 - 5, y0 - 5, x0 + inner_w + 4, y0 + inner_h + 4], fill=(250, 248, 243))
    d.rectangle([x0 - 2, y0 - 2, x0 + inner_w + 1, y0 + inner_h + 1], fill=lin(np.array(mat_rgb) * 0.86))
    f.paste(art.resize((inner_w, inner_h), Image.LANCZOS), (x0, y0))
    return f

def place(bg, fr, cx, bottom, lean, light_strength):
    W, H = fr.size; x, y = int(cx - W / 2), int(bottom - H)
    # shadows: soft cast shadow (light from the left: falls right and down) and, when leaning, a dark contact line
    sh = Image.new("L", bg.size, 0); d = ImageDraw.Draw(sh)
    off = (int(W * 0.035), int(H * (0.012 if lean else 0.03)))
    d.rectangle([x + off[0], y + off[1], x + W + off[0], y + H + off[1]], fill=150)
    sh = sh.filter(ImageFilter.GaussianBlur(W * 0.03))
    if lean:
        c = Image.new("L", bg.size, 0); ImageDraw.Draw(c).rectangle([x - 6, bottom - 6, x + W + 6, bottom + 10], fill=230)
        sh = Image.fromarray(np.maximum(np.asarray(sh), np.asarray(c.filter(ImageFilter.GaussianBlur(9)))))
        fl = Image.new("L", bg.size, 0); ImageDraw.Draw(fl).polygon([(x + 10, bottom), (x + W + int(W * 0.08), bottom), (x + W + int(W * 0.05), bottom + int(H * 0.035)), (x + 30, bottom + int(H * 0.02))], fill=170)
        sh = Image.fromarray(np.maximum(np.asarray(sh), np.asarray(fl.filter(ImageFilter.GaussianBlur(W * 0.02)))))
    a = np.asarray(bg, dtype=float)
    k = np.asarray(sh, dtype=float)[..., None] / 255 * 0.55
    a = a * (1 - k)
    # carry the wall's light onto the frame: luminance of the empty wall, blurred, relative to its mean
    region = np.asarray(bg.convert("L"), dtype=float)[y:y + H, x:x + W]
    lum = np.asarray(Image.fromarray(region.astype(np.uint8)).filter(ImageFilter.GaussianBlur(14)), dtype=float)
    rel = lum / max(lum.mean(), 1)
    rel = 1 + (rel - 1) * light_strength
    f = np.asarray(fr, dtype=float) * np.clip(rel, 0.55, 1.35)[..., None]
    # a faint sheen of glass from the top left
    gy, gx = np.mgrid[0:H, 0:W]
    sheen = np.clip(1 - ((gx / W) + (gy / H)) / 1.1, 0, 1) ** 3 * 10
    f = np.clip(f + sheen[..., None], 0, 255)
    a[y:y + H, x:x + W] = f
    return Image.fromarray(a.astype(np.uint8))

def finish(img, out):
    a = np.asarray(img, dtype=float)
    rng = np.random.default_rng(7); a = np.clip(a + rng.normal(0, 3.2, a.shape[:2])[..., None], 0, 255)
    im = Image.fromarray(a.astype(np.uint8)).resize((2000, 2000), Image.LANCZOS)
    im.save(out, quality=88, optimize=True, progressive=True)
    t = im.copy(); t.thumbnail((700, 700), Image.LANCZOS); t.save(out.replace(".jpg", "-thumb.jpg"), quality=82, optimize=True, progressive=True)

bg = lambda n: Image.open(f"{S}/bg-{n}.png").convert("RGB").resize((N, N), Image.LANCZOS)
art = lambda n: Image.open(f"{P}/{n}").convert("RGB")
# DOX: thin black frame leaning on the oak sideboard, in the window light
fr = frame_art(art("01-dox-copy.jpg"), outer_h=1080, border=22, mat=118, frame_rgb=(28, 28, 30))
finish(place(bg("dox"), fr, cx=1030, bottom=1452, lean=True, light_strength=0.75), f"{S}/01-dox-mockup.jpg")
# Emmaus: pale oak frame leaning against the limewashed wall, on the floor
fr = frame_art(art("02-emaus-monastery-copy.jpg"), outer_h=1240, border=40, mat=128, frame_rgb=(190, 158, 116), grain=0.32)
finish(place(bg("emaus"), fr, cx=960, bottom=1664, lean=True, light_strength=0.6), f"{S}/02-emaus-monastery-mockup.jpg")
# Food: walnut frame hung above the dining table
fr = frame_art(art("03-food-copy.jpg"), outer_h=820, border=30, mat=96, frame_rgb=(92, 62, 40), grain=0.4)
finish(place(bg("food"), fr, cx=900, bottom=1200, lean=False, light_strength=0.5), f"{S}/03-food-mockup.jpg")
print("ok")
