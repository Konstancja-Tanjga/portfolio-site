/**
 * Visitor mail for the portfolio: a Google Apps Script web app.
 *
 * The site sends one small beacon per visit (page, referrer, skin, language,
 * screen width — nothing that identifies a person) to this script's URL.
 * doPost() appends it to a Google Sheet; dailyDigest() mails the last 24
 * hours once a day. Umami Cloud stays the dashboard; this is the inbox.
 *
 * Set-up, once:
 *   1. script.google.com → New project → paste this file.
 *   2. Run setup() once and grant the permissions it asks for. It creates the
 *      sheet, stores its id, and installs the daily trigger (7:00 Warsaw).
 *   3. Deploy → New deployment → Web app → Execute as: me, Who has access:
 *      Anyone. Copy the Web app URL.
 *   4. In the GitHub repository: Settings → Secrets and variables → Actions →
 *      Variables → NOTIFY_URL = that URL. The next deploy picks it up.
 *
 * To get a mail per visit instead of a digest, set INSTANT to true.
 */
const MAIL_TO = Session.getActiveUser().getEmail();
const INSTANT = false;
const TZ = "Europe/Warsaw";

function setup() {
  const ss = SpreadsheetApp.create("Portfolio visits");
  ss.getActiveSheet().appendRow(["when", "page", "referrer", "skin", "language", "width", "country"]);
  PropertiesService.getScriptProperties().setProperty("SHEET_ID", ss.getId());
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("dailyDigest").timeBased().atHour(7).everyDays(1).inTimezone(TZ).create();
  Logger.log("Sheet: " + ss.getUrl());
}

function sheet() {
  const id = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  return SpreadsheetApp.openById(id).getActiveSheet();
}

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents || "{}"); } catch (err) { /* ignore a bad body */ }
  const row = [new Date(), d.page || "", d.referrer || "", d.skin || "", d.language || "", d.width || "", d.country || ""];
  sheet().appendRow(row);
  if (INSTANT) {
    MailApp.sendEmail(MAIL_TO, "Portfolio: a visit on " + (d.page || "/"),
      "Page: " + d.page + "\nFrom: " + (d.referrer || "direct") + "\nSkin: " + d.skin + "\nLanguage: " + d.language + "\nWidth: " + d.width);
  }
  return ContentService.createTextOutput("ok");
}

function dailyDigest() {
  const rows = sheet().getDataRange().getValues().slice(1);
  const since = Date.now() - 24 * 3600 * 1000;
  const recent = rows.filter((r) => new Date(r[0]).getTime() > since);
  if (!recent.length) return;
  const by = (i) => {
    const m = {};
    recent.forEach((r) => { const k = r[i] || "—"; m[k] = (m[k] || 0) + 1; });
    return Object.entries(m).sort((a, b) => b[1] - a[1]).map(([k, v]) => v + "  " + k).join("\n");
  };
  const body =
    recent.length + " visit(s) in the last 24 hours\n\n" +
    "Pages\n" + by(1) + "\n\n" +
    "Came from\n" + by(2) + "\n\n" +
    "Skin\n" + by(3) + "\n\n" +
    "Language\n" + by(4) + "\n";
  MailApp.sendEmail(MAIL_TO, "Portfolio: " + recent.length + " visit(s) yesterday", body);
}
