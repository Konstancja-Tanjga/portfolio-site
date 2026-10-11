# Who visits: Umami events and mail

The site counts visits in Umami Cloud (`cloud.umami.is`, website id in the
repository variable `UMAMI_WEBSITE_ID`). Since October 2026 it also sends
named events, so the Events tab shows what a reader did, not only where:

| Event | Data | Fires when |
| --- | --- | --- |
| `skin` | `skin` | the reader picks Deco, Blueprint or Aquarelle |
| `lightbox` | `src` | a screen is opened full size on a wall |
| `video` | `title` | a clip starts playing |
| `outbound` | `to` | a link leaves the site: `linkedin`, `github`, `mail`, `storybook`, or the hostname |

Umami Cloud has no per-event mail. Its own email report is a daily summary
on the Pro plan. For mail without a plan there is `Code.gs` here: a Google
Apps Script that receives one beacon per visit from the site and mails a
daily digest (or a mail per visit, with `INSTANT = true`). Set-up is in the
file's header; the site only sends the beacon when the deploy has the
`NOTIFY_URL` variable, so nothing happens until that is set.

Your own visits: open the site once with `?skipcount=1` and that browser is
left out of both the counter and the mail. `?skipcount=0` reverses it.
