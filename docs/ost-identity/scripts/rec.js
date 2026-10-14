const {chromium}=require('playwright');
const PORTRAIT='/Users/konstancjatanjga/Developer/portfolio-site/site/public/about/portrait.jpg';
const W=1440,H=946;
async function run(b,name,fn){
  const ctx=await b.newContext({viewport:{width:W,height:H},recordVideo:{dir:'rec/'+name,size:{width:W,height:H}}});
  const p=await ctx.newPage(); await fn(p); await ctx.close();
}
async function drag(p,dx,dy){
  const cv=await p.$('#cv'); const r=await cv.boundingBox();
  const x=r.x+r.width/2, y=r.y+r.height*0.4;
  await p.mouse.move(x,y); await p.mouse.down();
  for(let i=1;i<=20;i++){ await p.mouse.move(x+dx*i/20,y+dy*i/20); await p.waitForTimeout(30); }
  await p.mouse.up();
}
(async()=>{
 const b=await chromium.launch();
 await run(b,'ambassador',async p=>{
   await p.goto('https://ost-ambasador.vercel.app/ambasador/',{waitUntil:'networkidle'}); await p.waitForTimeout(1000);
   await p.setInputFiles('#file',PORTRAIT); await p.waitForTimeout(1500);
   await p.click('#sloganSeg button:nth-child(2)'); await p.waitForTimeout(900);
   await p.click('#sloganSeg button:nth-child(1)'); await p.waitForTimeout(900);
   await p.fill('#zoom','1.4'); await p.dispatchEvent('#zoom','input'); await p.waitForTimeout(700);
   await drag(p,-60,40); await p.waitForTimeout(900);
   await p.click('#toneSeg button[data-v=orig]'); await p.waitForTimeout(1200);
   await p.click('#toneSeg button[data-v=duo]'); await p.waitForTimeout(1200);
 });
 await run(b,'story',async p=>{
   await p.goto('https://ost-ambasador.vercel.app/wsparcie/',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
   await p.setInputFiles('#file',PORTRAIT); await p.waitForTimeout(1200);
   for (const i of [2,3,1]) { await p.click(`#sloganSeg button:nth-child(${i})`); await p.waitForTimeout(900); }
   await p.click('#fmtSeg button[data-v=story]'); await p.waitForTimeout(1200);
   await drag(p,0,-80); await p.waitForTimeout(1000);
   await p.click('#fmtSeg button[data-v=post]'); await p.waitForTimeout(1200);
 });
 await b.close();
})();
