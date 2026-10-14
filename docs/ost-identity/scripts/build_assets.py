import os, subprocess, shutil
from PIL import Image
PUB='/Users/konstancjatanjga/Developer/portfolio-site/site/public/work/ogolnopolska-strefa-talentu'
S=f'{PUB}/screens'; D=f'{PUB}/device'
os.makedirs(S,exist_ok=True); os.makedirs(D,exist_ok=True)
FRAME='/Users/konstancjatanjga/Developer/portfolio-site/site/public/work/frames/macbook.webp'
def webp(src_img, out, maxw=2400, q=84):
    im=src_img if isinstance(src_img,Image.Image) else Image.open(src_img)
    im=im.convert('RGBA') if im.mode in ('RGBA','LA','P') else im.convert('RGB')
    if im.width>maxw: im=im.resize((maxw, round(im.height*maxw/im.width)), Image.LANCZOS)
    tmp=out+'.png'; im.save(tmp); subprocess.run(['cwebp','-quiet','-q',str(q),'-alpha_q','90',tmp,'-o',out],check=True); os.remove(tmp)
flat={
 # concepts
 'concept-asterisk':'pdf/k1-01.png','concept-asterisk-generator':'pdf/k1-07.png','concept-asterisk-poster':'pdf/k1-08.png',
 'concept-cursor':'pdf/k2-01.png','concept-cursor-drawing':'pdf/k2-03.png','concept-cursor-risks':'pdf/k2-11.png',
 'concept-forall':'pdf/k3-01.png','concept-forall-idea':'pdf/k3-02.png','concept-forall-drawing':'pdf/k3-03.png',
 'concept-forall-15mm':'pdf/k3-06.png','concept-forall-slogans':'pdf/k3-07.png','concept-forall-keyvisual':'pdf/k3-08.png','concept-forall-risks':'pdf/k3-13.png',
 # brand book
 'book-cover':'pdf/ks-01.png','book-origin':'pdf/ks-03.png','book-formula':'pdf/ks-04.png','book-grid':'pdf/ks-05.png','book-proportions':'pdf/ks-06.png',
 'book-not-ve':'pdf/ks-07.png','book-versions':'pdf/ks-09.png','book-mono':'pdf/ks-10.png','book-backgrounds':'pdf/ks-11.png','book-clearspace':'pdf/ks-12.png',
 'book-min-print':'pdf/ks-14.png','book-min-screen':'pdf/ks-15.png','book-palette':'pdf/ks-16.png','book-proportion':'pdf/ks-17.png','book-contrast':'pdf/ks-18.png',
 'book-logo-on':'pdf/ks-19.png','book-text-colour':'pdf/ks-20.png','book-archivo':'pdf/ks-21.png','book-outfit':'pdf/ks-22.png','book-hierarchy':'pdf/ks-24.png',
 'book-slogans':'pdf/ks-26.png','book-media':'pdf/ks-28.png','book-social':'pdf/ks-29.png','book-engraving':'pdf/ks-30.png','book-animation':'pdf/ks-31.png','book-errors':'pdf/ks-32.png',
 # applications
 'letterhead':'pdf/papier-01.png','letter':'pdf/papier-03.png','letterhead-howto':'pdf/papier-05.png','card':'pdf/wiz-01.png','folder':'pdf/teczka-01.png',
 'rollup':'pdf/rollup-01.png','website-design':'pdf/web-02.png','social-series':'pdf/cal-01.png','social-start':'pdf/cal-02.png','social-towns':'pdf/cal-03.png','social-subjects':'pdf/cal-04.png',
 'ambassador-v1':'pdf/amb-01.png',
}
for name,src in flat.items(): webp(src, f'{S}/{name}.webp')
for f in os.listdir('social/eksport-social/wariant-B'):
    n=f.replace('OST_2026-','social-').replace('.png','')
    webp(f'social/eksport-social/wariant-B/{f}', f'{S}/{n}.webp', maxw=1200)
# site mobile
webp('shots/site-mobile.png', f'{S}/site-mobile.webp', maxw=1170)
# macbook mockups: screen hole x284-2103, y73-1268
frame=Image.open(FRAME).convert('RGBA')
def device(shot,name):
    sc=Image.open(shot).convert('RGB').resize((1820,1196),Image.LANCZOS)
    base=Image.new('RGBA',frame.size,(0,0,0,0)); base.paste(sc,(284,73)); base.alpha_composite(frame)
    webp(base,f'{D}/{name}-2400.webp',2400); webp(base,f'{D}/{name}-1600.webp',1600)
    full=Image.open(shot).convert('RGB'); webp(full,f'{D}/{name}-full.webp',2880,86)
device('shots/site-top.png','site-home')
device('shots/ambasador-photo.png','generator-ambassador')
device('shots/wsparcie-story.png','generator-support-story')
device('shots/ambasador-orig.png','generator-original-colour')
# og / thumbnail
Image.open('pdf/ks-01.png').convert('RGB').resize((1440,810),Image.LANCZOS).save(f'{PUB}/00-cover.jpg',quality=86)
print('done', len(os.listdir(S)), len(os.listdir(D)))
