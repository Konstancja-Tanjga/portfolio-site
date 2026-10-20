import sys
sys.path.insert(0, sys.argv[1])
from mockuplib import *  # docs/redesign-2026/mockuplib.py
S, P = sys.argv[1], sys.argv[2]
N = 2048
WALNUT, GOLD, WHITE, OAK, BLACK, STEEL, NATURAL = (96, 64, 42), (176, 142, 78), (238, 235, 228), (194, 160, 116), (30, 30, 32), (44, 46, 50), (178, 146, 104)
# name, room, frame colour, grain, centre x, bottom y, frame width, leaning, light carried from the wall
JOBS = [
    ("01-cedre-noir", 1, WALNUT, 0.4, 1000, 1500, 940, True, 0.08),
    ("02-chambord", 2, GOLD, 0.18, 1024, 1030, 960, False, 0.55),
    ("03-chanonceau", 3, WHITE, 0.0, 1024, 1010, 980, False, 0.55),
    ("04-chaumont-sur-loire", 4, OAK, 0.32, 1000, 1262, 840, True, 0.6),
    ("05-chateau-de-saumur", 5, BLACK, 0.0, 1120, 1120, 1000, False, 0.5),
    ("06-chateau-du-clos-luce", 6, OAK, 0.32, 1170, 1368, 820, True, 0.65),
    ("07-great-elephant-from-nantes", 7, STEEL, 0.0, 1080, 1246, 820, True, 0.6),
    ("08-levazereau", 8, WALNUT, 0.4, 1110, 1364, 780, True, 0.6),
    ("09-pierre-bertrand-couly", 9, NATURAL, 0.3, 950, 1380, 1000, False, 0.85),
]
only = sys.argv[3:]  # optional: rebuild only these
for name, room, rgb, grain, cx, bottom, W, lean, light in JOBS:
    if only and name not in only: continue
    art = Image.open(f"{P}/{name}.jpg").convert("RGB")
    b, m = max(14, round(W * 0.026)), round(W * 0.085)
    if rgb in (BLACK, STEEL): b = max(14, round(W * 0.018))
    ar = art.width / art.height
    outer_h = round((W - 2 * (b + m)) / ar + 2 * (b + m))
    fr = frame_art(art, outer_h=outer_h, border=b, mat=m, frame_rgb=rgb, grain=grain)
    bg = Image.open(f"{S}/bg-0{room}.png").convert("RGB").resize((N, N), Image.LANCZOS)
    finish(place(bg, fr, cx=cx, bottom=bottom, lean=lean, light_strength=light), f"{S}/{name}-mockup.jpg")
    print("ok", name, fr.size)
