# tablet-home

Home page for the wall-mounted Onn Android tablet, shown in Fully Kiosk Browser.

- **Live page:** https://awulff73.github.io/tablet-home/ (set this as Fully's Start URL)
- `index.html` — the home page: clock, Madison, AL weather from the National Weather Service, sunrise/sunset, moon phase, radar, and tiles for SmartThings, Wyze and ecobee. Settings are in the `CONFIG` block near the top.
- `fully-home-button.js` — paste into Fully → Advanced Web Settings → Inject JavaScript. Adds a floating Home button on other sites; hidden on the home page and sign-in pages.

**Also shown on the kitchen fridge** (Samsung Family Hub RF262BEAESR, 21.5" portrait screen): open the live page in the fridge's built-in Internet browser. The portrait layout is used there. Fully-only features (severe-weather wake, screen brightness, not-charging banner) switch themselves off on the fridge, so the wall tablet stays the storm-alert screen.

**Night view** (wall tablet, 10 PM–6 AM): big dim gray clock, tonight/tomorrow forecast and a dim row of the tiles. Tap the clock or weather for the full dashboard (2 minutes). Severe watches/warnings hide it. Set `nightView` in `CONFIG`: `"tablet"` (default), `true` (fridge too) or `false` (off).
