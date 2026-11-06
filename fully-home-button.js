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
  }
  addButton();
  if (!window.__fkHomeTimer) { window.__fkHomeTimer = setInterval(addButton, 1500); }
})();
