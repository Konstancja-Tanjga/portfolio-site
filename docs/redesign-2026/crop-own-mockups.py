"""Tighter crops of Konstancja's own Photoshop mockups: the frame fills most of the image.
Boxes are fractions of the image (x0, y0, x1, y1), read off a 10 % grid around each frame."""
import sys, os
from PIL import Image
P, OUT = sys.argv[1], sys.argv[2]
BOXES = {
    "animals/01-alejandro-w-ramce-4-copy.jpg": (0.38, 0.02, 0.95, 1.00),
    "animals/02-carmela-horse-kiss-ramka-1.jpg": (0.08, 0.24, 0.74, 0.98),
    "animals/03-carmela-mloda-na-siwym-koniu-4-copy.jpg": (0.26, 0.05, 0.80, 1.00),
    "animals/04-geneta-w-ramce-3-copy.jpg": (0.08, 0.04, 0.64, 0.62),
    "animals/05-tuna-squid-and-meduzas.jpg": (0.03, 0.18, 0.97, 0.84),
    "animals/06-tunczyk-na-scianie-nad-sofa.jpg": (0.12, 0.02, 0.82, 0.56),
    "animals/07-orka-w-ramce-copy.jpg": (0.16, 0.08, 0.88, 0.90),
    "architecture/new-york/01-golden-gate-ramka.jpg": (0.02, 0.14, 0.80, 0.92),
    "architecture/new-york/02-guggenheim-museum-new-york-ramka.jpg": (0.10, 0.14, 0.93, 0.80),
    "architecture/sevilla/01-la-giralda-copy.jpg": (0.12, 0.00, 0.90, 1.00),
    "architecture/sevilla/02-maria-luisa-park-copy.jpg": (0.24, 0.08, 0.98, 0.97),
    "architecture/sevilla/03-setas-copy.jpg": (0.04, 0.36, 0.82, 1.00),
    "architecture/sevilla/04-untitled-1-copy.jpg": (0.08, 0.12, 0.92, 0.80),
    "birds/01-flaming-na-krzesle-w-ramce-copy.jpg": (0.16, 0.06, 0.72, 0.80),
    "birds/02-gaviota-i-monstera-copy.jpg": (0.14, 0.06, 0.90, 0.92),
    "birds/03-glossy-ibis-mockup.jpg": (0.15, 0.00, 0.76, 0.62),
}
for rel, (a, b, c, d) in BOXES.items():
    im = Image.open(os.path.join(P, rel)).convert("RGB"); w, h = im.size
    cr = im.crop((round(a * w), round(b * h), round(c * w), round(d * h)))
    os.makedirs(os.path.dirname(os.path.join(OUT, rel)), exist_ok=True)
    cr.save(os.path.join(OUT, rel), quality=90, optimize=True, progressive=True)
    t = cr.copy(); t.thumbnail((700, 700), Image.LANCZOS); t.save(os.path.join(OUT, rel.replace(".jpg", "-thumb.jpg")), quality=84, optimize=True, progressive=True)
    print(rel, cr.size)
