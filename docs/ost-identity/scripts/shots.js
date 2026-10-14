const {chromium}=require('playwright');
const PORTRAIT='/Users/konstancjatanjga/Developer/portfolio-site/site/public/about/portrait.jpg';
(async()=>{
 const b=await chromium.launch();
 // live programme site
 let p=await b.newPage({viewport:{width:1440,height:946},deviceScaleFactor:2});
 await p.goto('https://www.ost.edu.pl',{waitUntil:'networkidle'}); await p.waitForTimeout(1500);
 await p.screenshot({path:'shots/site-top.png'});
 await p.screenshot({path:'shots/site-full.png',fullPage:true});
 const h=await p.evaluate(()=>document.body.scrollHeight); console.log('site height',h);
 for (const y of [900,1800,2700]) { await p.evaluate(y=>window.scrollTo(0,y),y); await p.waitForTimeout(800); await p.screenshot({path:`shots/site-${y}.png`}); }
 const m=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true});
 await m.goto('https://www.ost.edu.pl',{waitUntil:'networkidle'}); await m.waitForTimeout(1000);
 await m.screenshot({path:'shots/site-mobile.png'});
 // generators
 for (const g of ['ambasador','wsparcie']) {
  const q=await b.newPage({viewport:{width:1440,height:946},deviceScaleFactor:2});
  await q.goto(`https://ost-ambasador.vercel.app/${g}/`,{waitUntil:'networkidle'});
  await q.screenshot({path:`shots/${g}-empty.png`});
  await q.setInputFiles('#file',PORTRAIT); await q.waitForTimeout(1200);
  await q.screenshot({path:`shots/${g}-photo.png`});
  await q.click('#fmtSeg button[data-v=story]'); await q.waitForTimeout(800);
  await q.screenshot({path:`shots/${g}-story.png`});
  await q.click('#fmtSeg button[data-v=post]'); await q.click('#toneSeg button[data-v=orig]'); await q.waitForTimeout(800);
  await q.screenshot({path:`shots/${g}-orig.png`});
  console.log(g, await q.evaluate(()=>[...document.querySelectorAll('#sloganSeg button')].map(b=>b.textContent)));
 }
 await b.close();
})();
