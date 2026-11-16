import { openStage, shotPhone, shotScreen, scrollTo, scrollToEl, syncStatus } from './stage.mjs'
const out = process.argv[2]
const D = { exact: true }

async function capture(name, st) {
  await st.page.waitForTimeout(250)
  await shotScreen(st.page, `${out}/screen-${name}.png`)
  await shotPhone(st.page, `${out}/phone-${name}.png`, true)
}
async function fillDive(st, i, depth, time) {
  await st.panel().getByLabel('Głębokość (m)', D).nth(i).fill(depth)
  await st.panel().getByLabel('Czas denny (min)', D).nth(i).fill(time)
}

// 01 first run
let st = await openStage({ dsf: 3, transparent: true, acknowledged: false })
await st.app.getByRole('dialog').waitFor()
await capture('01-first-run', st)
await st.browser.close()

// 02-07 no-deco day
st = await openStage({ dsf: 3, transparent: true })
await fillDive(st, 0, '20', '28')
await st.panel().getByRole('switch').first().click()
await st.frame.evaluate(() => document.activeElement?.blur())
await scrollTo(st.frame, 0)
await capture('02-no-deco-result', st)
await st.panel().getByRole('button', { name: 'Dodaj nurkowanie powtórzeniowe' }).click()
await st.panel().getByLabel('Koniec poprzedniego').fill('13:00')
await st.panel().getByLabel('Początek tego').fill('14:00')
await fillDive(st, 1, '18', '20')
await st.panel().getByRole('switch').nth(1).click()
await st.frame.evaluate(() => document.activeElement?.blur())
await scrollToEl(st.frame, st.panel().getByRole('heading', { name: 'Nurkowanie 2' }), 70)
await capture('03-repetitive-dive', st)
await scrollToEl(st.frame, st.panel().locator('.sr-stats').nth(1), 16)
await capture('04-gas', st)
await scrollToEl(st.frame, st.panel().getByRole('heading', { name: 'Butla i zużycie gazu' }), 70)
await capture('05-gas-settings', st)
await st.panel().getByLabel('Nazwa planu').fill('Hańcza, sobota')
await st.panel().getByRole('button', { name: 'Zapisz bieżący plan' }).click()
await st.frame.evaluate(() => document.activeElement?.blur())
await scrollToEl(st.frame, st.panel().getByRole('heading', { name: 'Zapisane plany' }), 70)
await capture('06-saved-plans', st)
await st.panel().getByRole('button', { name: 'Pokaż tabliczkę' }).click()
await st.app.getByRole('dialog', { name: 'Tabliczka' }).waitFor()
await capture('07-slate', st)
await st.app.getByRole('dialog', { name: 'Tabliczka' }).getByRole('button', { name: 'Zamknij' }).last().click()
await st.app.getByRole('dialog', { name: 'Tabliczka' }).waitFor({ state: 'hidden' })

// 08-09 deco from the table
await st.app.getByRole('tab', { name: 'Z deko', exact: true }).click()
await fillDive(st, 0, '40', '30')
await st.frame.evaluate(() => document.activeElement?.blur())
await scrollTo(st.frame, 0)
await capture('08-deco-result', st)
await scrollToEl(st.frame, st.panel().getByText('Przystanki dekompresyjne').first(), 90)
await capture('09-deco-stops', st)

// 10 nitrox
await st.app.getByRole('tab', { name: 'Nitrox', exact: true }).click()
await st.panel().getByLabel('Planowana głębokość (m)').fill('30')
await st.frame.evaluate(() => document.activeElement?.blur())
await scrollTo(st.frame, 0)
await capture('10-nitrox', st)
await st.browser.close()

// 11 dark
st = await openStage({ dsf: 3, transparent: true, dark: true })
await fillDive(st, 0, '18', '40')
await st.frame.evaluate(() => document.activeElement?.blur())
await syncStatus(st.page, st.frame)
await capture('11-dark', st)
await st.browser.close()
console.log('stills done')
