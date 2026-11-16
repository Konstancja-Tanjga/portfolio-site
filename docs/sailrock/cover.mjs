import { chromium } from 'playwright'
const [html, out] = process.argv.slice(2)
const b = await chromium.launch()
const p = await (await b.newContext({ viewport: { width: 2400, height: 1829 } })).newPage()
await p.goto('file://' + html)
await p.waitForLoadState('networkidle')
await p.locator('.c').screenshot({ path: out })
await b.close()
