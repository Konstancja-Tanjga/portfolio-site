// Flow clips: not screen recordings. Each frame is a screenshot of the deployed app inside the
// drawn phone, taken after one scripted step and held for a set time, then encoded at 30 fps.
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { openStage, shotPhone, scrollTo, GROUND } from './stage.mjs'
const out = process.argv[2]
const D = { exact: true }

function recorder(st, name) {
  const dir = `${out}/${name}`
  rmSync(dir, { recursive: true, force: true }); mkdirSync(dir, { recursive: true })
  const frames = []
  const snap = async (seconds) => {
    const file = `${dir}/f${String(frames.length).padStart(4, '0')}.png`
    await shotPhone(st.page, file)
    frames.push({ file, seconds })
  }
  const blur = () => st.frame.evaluate(() => document.activeElement?.blur())
  // show where the finger lands, then act
  const tap = async (locator, act = (l) => l.click()) => {
    await locator.scrollIntoViewIfNeeded()
    const box = await locator.boundingBox()
    await st.page.evaluate(({ x, y }) => {
      const d = document.createElement('div'); d.className = 'tap'; d.style.left = x + 'px'; d.style.top = y + 'px'
      document.querySelector('.stage').appendChild(d)
    }, { x: box.x + box.width / 2, y: box.y + box.height / 2 })
    await snap(0.3)
    await act(locator)
    await st.page.evaluate(() => document.querySelector('.tap')?.remove())
    await st.page.waitForTimeout(120)
  }
  const type = async (locator, text, hold = 0.9) => {
    await tap(locator)
    await snap(0.25)
    for (const ch of text) { await locator.pressSequentially(ch); await snap(0.14) }
    await blur(); await st.page.waitForTimeout(80)
    await snap(hold)
  }
  // time inputs are filled in one go: the native picker is not part of the app
  const setTime = async (locator, value, hold = 0.7) => {
    await tap(locator, (l) => l.fill(value)); await blur(); await snap(hold)
  }
  const glide = async (toY, seconds = 0.7) => {
    const from = await st.frame.evaluate(() => window.scrollY)
    const n = Math.max(2, Math.round(seconds * 30))
    for (let i = 1; i <= n; i++) {
      const t = i / n, e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      await scrollTo(st.frame, from + (toY - from) * e); await snap(1 / 30)
    }
  }
  const glideTo = async (locator, offset = 70, seconds = 0.7) => {
    const y = await locator.evaluate((el, o) => el.getBoundingClientRect().top + window.scrollY - o, offset)
    await glide(Math.max(0, y), seconds)
  }
  const finish = () => {
    const list = frames.map((f) => `file '${f.file}'\nduration ${f.seconds.toFixed(4)}`).join('\n') +
      `\nfile '${frames[frames.length - 1].file}'\n`
    writeFileSync(`${dir}/frames.txt`, list)
    const total = frames.reduce((a, f) => a + f.seconds, 0)
    console.log(`${name}: ${frames.length} frames, ${total.toFixed(1)} s`)
  }
  return { snap, tap, type, setTime, glide, glideTo, finish }
}

// ---- 1. a no-decompression day: two dives, cold water, then the slate
{
  const st = await openStage({ dsf: 2 })
  const r = recorder(st, 'plan-a-day')
  const p = st.panel
  await r.snap(1.0)
  await r.type(p().getByLabel('Depth (m)', D).first(), '20', 0.4)
  await r.type(p().getByLabel('Bottom time (min)', D).first(), '28', 1.4)
  await r.tap(p().getByRole('switch').first()); await r.snap(1.8)
  await r.glideTo(p().locator('.sr-stats').nth(1), 150); await r.snap(1.6)
  await r.glideTo(p().getByRole('button', { name: 'Add a repetitive dive' }), 560)
  await r.tap(p().getByRole('button', { name: 'Add a repetitive dive' })); await r.snap(0.5)
  await r.glideTo(p().getByRole('heading', { name: 'Dive 2' }), 70); await r.snap(0.5)
  await r.setTime(p().getByLabel('Previous dive ended'), '13:00', 0.5)
  await r.setTime(p().getByLabel('This dive starts'), '14:00', 1.0)
  await r.type(p().getByLabel('Depth (m)', D).nth(1), '18', 0.4)
  await r.type(p().getByLabel('Bottom time (min)', D).nth(1), '20', 1.2)
  await r.tap(p().getByRole('switch').nth(1)); await r.snap(2.0)
  await r.glideTo(p().getByRole('button', { name: 'Show the slate' }), 520)
  await r.tap(p().getByRole('button', { name: 'Show the slate' }))
  await st.app.getByRole('dialog', { name: 'Slate' }).waitFor(); await st.page.waitForTimeout(400)
  await r.snap(3.2)
  r.finish(); await st.browser.close()
}

// ---- 2. a decompression dive from the table: stops, then gas
{
  const st = await openStage({ dsf: 2 })
  const r = recorder(st, 'deco-from-the-table')
  await r.snap(0.8)
  await r.tap(st.app.getByRole('tab', { name: 'Deco', exact: true })); await r.snap(1.0)
  const p = st.panel
  await r.type(p().getByLabel('Depth (m)', D).first(), '40', 0.4)
  await r.type(p().getByLabel('Bottom time (min)', D).first(), '30', 1.6)
  await r.glideTo(p().locator('.sr-stats').first(), 90); await r.snap(2.2)
  await r.glideTo(p().locator('.sr-stats').nth(1), 330); await r.snap(2.6)
  r.finish(); await st.browser.close()
}

// ---- 3. a nitrox check
{
  const st = await openStage({ dsf: 2 })
  const r = recorder(st, 'nitrox-check')
  await r.snap(0.8)
  await r.tap(st.app.getByRole('tab', { name: 'Nitrox', exact: true })); await r.snap(1.0)
  const p = st.panel
  await r.type(p().getByLabel('Planned depth (m)'), '30', 2.0)
  const o2 = p().getByLabel('Oxygen in the mix (%)')
  await r.tap(o2, (l) => l.fill('')); await r.snap(0.3)
  for (const ch of '36') { await o2.pressSequentially(ch); await r.snap(0.16) }
  await st.frame.evaluate(() => document.activeElement?.blur()); await r.snap(2.6)
  r.finish(); await st.browser.close()
}
