"""
Watercolour mockups, second pass: the painting is the subject, the room is background.

Rooms are generated empty (no frame, no art); each scan is framed and composited in,
never redrawn. Composed at K x the 2048 room so the scan keeps its own sharpness, then
cropped tight: the frame fills about 76 % of the width of a 5:4 crop (landscape) or 78 %
of the height of a 4:5 crop (portrait). Coordinates in JOBS are on the 2048 px room.
"""
import sys, numpy as np
from PIL import Image, ImageFilter, ImageDraw
sys.path.insert(0, sys.argv[1] + "/france")
from mockuplib import frame_art, place

S, PUB = sys.argv[1], sys.argv[2]
OUT = S + "/out"
K = 2
WALNUT, GOLD, WHITE, OAK, BLACK, STEEL, NATURAL, RATTAN = (96, 64, 42), (176, 142, 78), (238, 235, 228), (194, 160, 116), (30, 30, 32), (44, 46, 50), (178, 146, 104), (186, 150, 98)

# series, file stem, room png, frame rgb, grain, centre x, bottom y, frame width, leaning, light
JOBS = [
    ("prague", "01-dox-copy", "prague/bg-dox.png", BLACK, 0.0, 1030, 1452, 832, True, 0.35),
    ("prague", "02-emaus-monastery-copy", "prague/bg-emaus.png", OAK, 0.32, 960, 1664, 995, True, 0.35),
    ("prague", "03-food-copy", "prague/bg-food.png", WALNUT, 0.4, 900, 1200, 1073, False, 0.35),
    ("france", "01-cedre-noir", "france/bg-01.png", WALNUT, 0.4, 1000, 1500, 940, True, 0.08),
    ("france", "02-chambord", "france/bg-02.png", GOLD, 0.18, 1024, 1030, 960, False, 0.35),
    ("france", "03-chanonceau", "france/bg-03.png", WHITE, 0.0, 1024, 1010, 980, False, 0.35),
    ("france", "04-chaumont-sur-loire", "france/bg-04.png", OAK, 0.32, 1000, 1262, 840, True, 0.35),
    ("france", "05-chateau-de-saumur", "france/bg-05.png", BLACK, 0.0, 1120, 1120, 1000, False, 0.35),
    ("france", "06-chateau-du-clos-luce", "france/bg-06.png", OAK, 0.32, 1170, 1368, 820, True, 0.35),
    ("france", "07-great-elephant-from-nantes", "france/bg-07.png", STEEL, 0.0, 1080, 1246, 820, True, 0.35),
    ("france", "08-levazereau", "france/bg-08.png", WALNUT, 0.4, 1110, 1364, 780, True, 0.35),
    ("france", "09-pierre-bertrand-couly", "france/bg-09.png", NATURAL, 0.3, 950, 1380, 1000, False, 0.35),
    ("malaga", "01-centre-pompidou-malaga-copy", "malaga/bg-01.png", BLACK, 0.0, 1024, 1240, 1000, False, 0.35),
    ("malaga", "02-fuente-del-rey-malaga-copy", "malaga/bg-02.png", WALNUT, 0.4, 895, 1222, 720, True, 0.35),
    ("malaga", "03-malaga-catedral-copy", "malaga/bg-03.png", OAK, 0.32, 820, 1740, 620, True, 0.35),
    ("malaga", "04-malaga-palmeral-de-las-sorpresas-copy", "malaga/bg-04.png", RATTAN, 0.35, 1050, 1136, 1000, False, 0.35),
    ("malaga", "05-the-palacio-de-ferias-y-congresos-de-malaga-copy", "malaga/bg-05.png", BLACK, 0.0, 1260, 1352, 700, True, 0.35),
    ("malaga", "06-white-street-in-malaga-copy", "malaga/bg-06.png", OAK, 0.32, 1180, 1476, 560, True, 0.35),
]
JOBS += [tuple(tuple(x) if isinstance(x, list) else x for x in j) for j in __import__("json").load(open(S + "/portugal/jobs.json"))] if __import__("os").path.exists(S + "/portugal/jobs.json") else []

def render(series, stem, room, rgb, grain, cx, bottom, W, lean, light):
    art = Image.open(f"{PUB}/{series}/{stem}.jpg").convert("RGB")
    ar = art.width / art.height
    Wk = W * K
    b, m = max(14, round(Wk * (0.018 if rgb in (BLACK, STEEL) else 0.026))), round(Wk * 0.085)
    outer_h = round((Wk - 2 * (b + m)) / ar + 2 * (b + m))
    fr = frame_art(art, outer_h=outer_h, border=b, mat=m, frame_rgb=rgb, grain=grain)
    N = 2048 * K
    bg = Image.open(f"{S}/{room}").convert("RGB").resize((N, N), Image.LANCZOS)
    img = place(bg, fr, cx=cx * K, bottom=bottom * K, lean=lean, light_strength=light)
    fw, fh = fr.size
    if fw >= fh:
        cw = fw / 0.76; ch = cw * 4 / 5
    else:
        ch = fh / 0.78; cw = ch * 4 / 5
    fcx, fcy = cx * K, bottom * K - fh / 2
    x0 = min(max(0, fcx - cw / 2), N - cw)
    y0 = min(max(0, fcy - ch * 0.46), N - ch)
    crop = img.crop((round(x0), round(y0), round(x0 + cw), round(y0 + ch)))
    out_size = (2000, 1600) if fw >= fh else (1600, 2000)
    crop = crop.resize(out_size, Image.LANCZOS)
    a = np.asarray(crop, dtype=float)
    rng = np.random.default_rng(7); a = np.clip(a + rng.normal(0, 2.6, a.shape[:2])[..., None], 0, 255)
    im = Image.fromarray(a.astype(np.uint8))
    name = stem.replace("-copy", "") + "-mockup"
    im.save(f"{OUT}/{series}/{name}.jpg", quality=88, optimize=True, progressive=True)
    t = im.copy(); t.thumbnail((700, 700), Image.LANCZOS); t.save(f"{OUT}/{series}/{name}-thumb.jpg", quality=84, optimize=True, progressive=True)
    return name

only = sys.argv[3:]
import os
for j in JOBS:
    if only and j[0] not in only and j[1] not in only: continue
    os.makedirs(f"{OUT}/{j[0]}", exist_ok=True)
    print(j[0], render(*j))
