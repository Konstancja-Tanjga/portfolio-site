"""Render the link-preview card: scripts/og/home.html -> public/og/home.png.

Run after changing the card or its screenshot, then commit the PNG:

    python3 scripts/og/render.py

Needs Playwright with Chromium (pip install playwright; playwright
install chromium). The card is a committed file, not a build step, so
the deploy needs neither.
"""

from pathlib import Path

from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
OUT = HERE.parent.parent / "public" / "og" / "home.png"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    page.goto((HERE / "home.html").as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    page.screenshot(path=str(OUT))
    browser.close()

print(f"wrote {OUT}")
