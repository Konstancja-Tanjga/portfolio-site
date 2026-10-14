import subprocess, os
from PIL import Image, ImageDraw, ImageFilter
PUB='/Users/konstancjatanjga/Developer/portfolio-site/site/public/work/ogolnopolska-strefa-talentu'
D=f'{PUB}/device'
FRAME=Image.open('/Users/konstancjatanjga/Developer/portfolio-site/site/public/work/frames/macbook.webp').convert('RGBA')
W,H=FRAME.size  # 2400x1501
def webp(im,out,maxw,q=84):
    if im.width>maxw: im=im.resize((maxw,round(im.height*maxw/im.width)),Image.LANCZOS)
    t=out+'.png'; im.save(t); subprocess.run(['cwebp','-quiet','-q',str(q),'-alpha_q','90',t,'-o',out],check=True); os.remove(t)
def save3(im,name):
    webp(im,f'{D}/{name}-2400.webp',2400); webp(im,f'{D}/{name}-1600.webp',1600); webp(im,f'{D}/{name}-full.webp',3000,86)
def rounded(im,r):
    m=Image.new('L',im.size,0); ImageDraw.Draw(m).rounded_rectangle((0,0,im.width-1,im.height-1),r,fill=255)
    out=im.convert('RGBA'); out.putalpha(m); return out
web=Image.open('pdf/web-02.png').convert('RGB')
# desktop design in the macbook
desk=web.crop((36*4,20*4,755*4,(20+472)*4)).resize((1820,1196),Image.LANCZOS)
mac=Image.new('RGBA',(W,H),(0,0,0,0)); mac.paste(desk,(284,73)); mac.alpha_composite(FRAME)
save3(mac,'website-design-desktop')
# phone with the mobile design
inner=web.crop((798*4,27*4,1016*4,499*4))
ph_h=1150; scale=ph_h/inner.height; iw=round(inner.width*scale)
inner=inner.resize((iw,ph_h),Image.LANCZOS)
b=22; phone=Image.new('RGBA',(iw+2*b,ph_h+2*b),(0,0,0,0)); d=ImageDraw.Draw(phone)
d.rounded_rectangle((0,0,phone.width-1,phone.height-1),64,fill=(20,22,38,255))
phone.alpha_composite(rounded(inner,44),(b,b))
d.rounded_rectangle((phone.width//2-60,b+14,phone.width//2+60,b+38),12,fill=(20,22,38,255))
combo=Image.new('RGBA',(W,H),(0,0,0,0))
small=mac.resize((round(W*0.8),round(H*0.8)),Image.LANCZOS); combo.alpha_composite(small,(0,(H-small.height)//2+60))
# soft shadow under phone
sh=Image.new('RGBA',(W,H),(0,0,0,0)); sx=W-phone.width-30; sy=(H-phone.height)//2
ImageDraw.Draw(sh).rounded_rectangle((sx+20,sy+40,sx+phone.width+20,sy+phone.height+30),64,fill=(0,0,0,150))
combo.alpha_composite(sh.filter(ImageFilter.GaussianBlur(30))); combo.alpha_composite(phone,(sx,sy))
save3(combo,'website-design')
# brand book page 04 on a transparent canvas
def card(src,name,maxw=2200):
    s=Image.open(src).convert('RGB'); s=s.resize((maxw,round(s.height*maxw/s.width)),Image.LANCZOS)
    c=Image.new('RGBA',(W,H),(0,0,0,0)); c.alpha_composite(rounded(s,22),((W-s.width)//2,(H-s.height)//2)); save3(c,name)
card('pdf/ks-04.png','book-formula')
# three posts fanned
posts=['social/eksport-social/wariant-B/OST_2026-10-14_male-miejscowosci_IG.png','social/eksport-social/wariant-B/OST_2026-10-15_przedmioty_IG.png','social/eksport-social/wariant-B/OST_2026-10-16_zespoly_IG.png']
c=Image.new('RGBA',(W,H),(0,0,0,0))
for i,(p,rot,x) in enumerate(zip(posts,[-6,0,6],[110,820,1530])):
    im=Image.open(p).convert('RGB').resize((760,950),Image.LANCZOS); im=rounded(im,18)
    im=im.rotate(-rot,resample=Image.BICUBIC,expand=True)
    y=(H-im.height)//2+(0 if rot==0 else 40)
    s=Image.new('RGBA',(W,H),(0,0,0,0)); s.alpha_composite(im,(x,y)); 
    shadow=Image.new('RGBA',(W,H),(0,0,0,0)); a=s.split()[3].point(lambda v: 120 if v else 0); shadow.putalpha(a)
    shadow=shadow.filter(ImageFilter.GaussianBlur(24)); c.alpha_composite(shadow,(0,0)); c.alpha_composite(s)
save3(c,'social-three')
print('ok')
