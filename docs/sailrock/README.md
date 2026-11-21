# SailRock: how the images and clips were made

Process notes for `site/src/content/sailrock.ts`. Everything in
`site/public/work/sailrock/` was produced by the scripts in this folder from
the live app at https://sail-rock.vercel.app (SailRock commit `cb7986a`),
on 16 November 2026.

| File | Makes |
| --- | --- |
| `stage.mjs` | The stage every image shares: a drawn phone on the case ground with the live app in an iframe at 390 by 800, under a 44-pixel status bar that takes the colour of the app's header. |
| `stills.mjs` | Eleven states of the app, each as a bare screen (`screens/`, 900 px wide) and as a phone on a transparent ground (`phones/`, 824 px wide). |
| `clips.mjs` | The three flows. Not screen recordings: one screenshot after each scripted step (a tap, a typed character, a scroll increment), each held for a set time. |
| `cover.html`, `cover.mjs` | The 2400 by 1829 cover from three of the phones. |

The scripts run under Playwright (`node stills.mjs <out>`, `node clips.mjs
<out>`). Frames were encoded with ffmpeg at 30 fps to H.264 and VP9 at 720
by 1506, the size of the Flow Logistics clips; stills were encoded with
`cwebp`.

Conventions worth knowing before changing anything:

- The grey dot marks where a tap lands. It is drawn on the stage, not in
  the app.
- Time fields are filled in one step, because the native time picker is
  not part of the app.
- The first-run dialog is dismissed through `localStorage` for every image
  except `01-first-run`, which shows it.
- The app is in Polish and English and follows the browser's language. The
  stage sets the locale to `en-GB`, so every image is in English.
