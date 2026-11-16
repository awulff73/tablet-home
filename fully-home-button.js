/* Floating Home button for Fully Kiosk. Paste into Advanced Web Settings > Inject JavaScript. Safe to paste as one line. Stays hidden on the home page and on sign-in pages. */
(function () {
  if (location.protocol === "file:") { return; }
  function isHomePage() { return !!(document.getElementById("tiles") && document.getElementById("radar")); }
  function goHome() {
    if (window.fully && typeof window.fully.loadStartUrl === "function") { window.fully.loadStartUrl(); }
    else { history.go(-(history.length - 1)); }
  }
  function addButton() {
    var existing = document.getElementById("fk-home");
    var onLoginPage = !!document.querySelector("input[type=password]") || /auth|login|signin/i.test(location.hostname + location.pathname);
    if (onLoginPage || isHomePage()) { if (existing) { existing.remove(); } return; }
    if (!document.body || existing) { return; }
    var b = document.createElement("div");
    b.id = "fk-home";
    b.textContent = "⌂ Home";
    b.style.cssText = "position:fixed;left:18px;bottom:18px;z-index:2147483647;background:#2b6cb0;color:#fff;font:600 22px system-ui,sans-serif;padding:16px 26px;border-radius:999px;border:2px solid rgba(255,255,255,.35);box-shadow:0 6px 18px rgba(0,0,0,.45);cursor:pointer;user-select:none;";
    b.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); goHome(); }, true);
    document.body.appendChild(b);
    place();
  }
  /* Keep the button inside what is actually on screen (some sites, e.g. ecobee, make the page taller than the screen) */
  function place() {
    var b = document.getElementById("fk-home");
    if (!b) { return; }
    var vv = window.visualViewport;
    var h = vv ? vv.height : window.innerHeight;
    var top = (vv ? vv.offsetTop : 0) + Math.min(h, window.innerHeight) - b.offsetHeight - 40;
    b.style.bottom = "auto";
    b.style.top = Math.max(8, Math.round(top)) + "px";
    b.style.left = Math.round((vv ? vv.offsetLeft : 0) + 18) + "px";
  }
  if (window.visualViewport && !window.__fkVV) { window.__fkVV = true; window.visualViewport.addEventListener("resize", place); window.visualViewport.addEventListener("scroll", place); }
  if (!window.__fkResize) { window.__fkResize = true; window.addEventListener("resize", place); }
  addButton();
  place();
  if (!window.__fkHomeTimer) { window.__fkHomeTimer = setInterval(function () { addButton(); place(); }, 1500); }
})();
