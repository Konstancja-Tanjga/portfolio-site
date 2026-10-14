"""Remove the grey strip and side wedges left under the MacBook base by the
background key, in the shared frame and in every mockup made with it."""
import glob, subprocess, os, sys
from PIL import Image
W,H=2400,1501
mask=Image.open('/tmp/macmask.png')
def clean(f,q):
    im=Image.open(f).convert('RGBA')
    if abs(im.width/im.height - W/H)>0.002: return False
    mk=mask.resize(im.size,Image.NEAREST).load(); px=im.load(); n=0
    y0=int(1340*im.height/H)
    for y in range(y0,im.height):
        for x in range(im.width):
            if not mk[x,y]: continue
            r,g,b,a=px[x,y]
            if a and (r+g+b)/3>95 and max(r,g,b)-min(r,g,b)<35 and y>=int(1366*im.height/H):
                px[x,y]=(r,g,b,0); n+=1
    if n<20: return False
    t=f+'.png'; im.save(t)
    subprocess.run(['cwebp','-quiet','-q',str(q),'-alpha_q','100','-exact',t,'-o',f],check=True); os.remove(t)
    return True
files=['frames/macbook.webp']+sorted(glob.glob('*/device/*.webp'))
done=[f for f in files if clean(f,92)]
print(len(done))
