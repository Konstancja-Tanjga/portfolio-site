// Shared stage: a drawn phone on the case ground with the deployed app in an iframe.
import { chromium } from 'playwright'

export const APP = 'https://sail-rock.vercel.app/'
export const GROUND = '#15171a'

const html = (transparent) => `<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;background:${transparent ? 'transparent' : GROUND};}
  .stage{position:relative;width:430px;height:900px;background:${transparent ? 'transparent' : GROUND};}
  .phone{position:absolute;inset:0;border-radius:66px;background:#17191c;box-shadow:inset 0 0 0 1.5px #2b2e33;}
  .screen{position:absolute;left:20px;top:28px;width:390px;height:844px;border-radius:46px;overflow:hidden;background:#fff;}
  .status{position:relative;height:44px;display:flex;align-items:flex-end;justify-content:space-between;
    box-sizing:border-box;padding:0 26px 6px;font:600 15px/1 -apple-system,'SF Pro Text','Inter',sans-serif;color:#15171a;background:#fff;}
  .status .right{display:flex;align-items:center;gap:7px;font-weight:500;font-size:12px;letter-spacing:.04em;opacity:.7}
  .bars{display:flex;gap:3px;align-items:flex-end}.bars i{display:block;width:3px;height:11px;background:currentColor;border-radius:1px}
  .notch{position:absolute;top:11px;left:50%;width:86px;height:13px;border-radius:8px;background:#15171a;transform:translateX(-50%);z-index:3}
  iframe{display:block;width:390px;height:800px;border:0;background:#fff}
  .tap{position:absolute;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;z-index:9;pointer-events:none;
    background:rgba(120,130,145,.38);box-shadow:0 0 0 2px rgba(255,255,255,.75), 0 0 0 3px rgba(20,23,26,.25);}
</style></head><body><div class="stage"><div class="phone"><div class="screen">
  <div class="status"><span>9:41</span><span class="right">LTE<span class="bars"><i></i><i></i><i></i></span></span></div>
  <div class="notch"></div><iframe src="${APP}"></iframe></div></div></div></body></html>`

export async function openStage({ dsf = 2, dark = false, transparent = false, acknowledged = true } = {}) {
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 430, height: 900 },
    deviceScaleFactor: dsf,
    colorScheme: dark ? 'dark' : 'light',
    locale: 'en-GB',
  })
  await context.addInitScript((ack) => {
    if (location.hostname.endsWith('vercel.app') && ack) {
      try { localStorage.setItem('sailrock.acknowledged', 'true') } catch {}
    }
  }, acknowledged)
  const page = await context.newPage()
  await page.route('https://stage.local/', (r) => r.fulfill({ contentType: 'text/html', body: html(transparent) }))
  await page.goto('https://stage.local/')
  const app = page.frameLocator('iframe')
  await app.getByText('SailRock').first().waitFor()
  const frame = page.frames().find((f) => f.url().startsWith(APP))
  await syncStatus(page, frame)
  const panel = () => app.locator('[role=tabpanel]:visible')
  return { browser, context, page, app, frame, panel }
}

// status bar takes the colour of the app's own header, so the screen reads as one surface
export async function syncStatus(page, frame) {
  const c = await frame.evaluate(() => {
    const header = document.querySelector('header') ?? document.body
    const s = getComputedStyle(header)
    const bg = s.backgroundColor === 'rgba(0, 0, 0, 0)' ? getComputedStyle(document.body).backgroundColor : s.backgroundColor
    return { bg, fg: getComputedStyle(document.body).color }
  })
  await page.evaluate(({ bg, fg }) => {
    const el = document.querySelector('.status'); el.style.background = bg; el.style.color = fg
  }, c)
}

export const shotPhone = (page, path, transparent = false) =>
  page.locator('.stage').screenshot({ path, omitBackground: transparent })
export const shotScreen = (page, path) => page.locator('.screen').screenshot({ path })

export async function scrollTo(frame, y) {
  await frame.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y)
}
export async function scrollToEl(frame, locator, offset = 12) {
  const y = await locator.evaluate((el, offset) => el.getBoundingClientRect().top + window.scrollY - offset, offset)
  await scrollTo(frame, Math.max(0, y))
  return Math.max(0, y)
}
