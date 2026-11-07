/* =========================================================
   TEMA TERANG / GELAP + pergantian logo
   ========================================================= */
(function () {
  const root = document.documentElement;
  const LOGO = { light: "assets/logo-light.png", dark: "assets/logo-dark.png" };

  function setTheme(theme) {
    root.dataset.theme = theme;
    document.querySelectorAll("img.logo").forEach((img) => (img.src = LOGO[theme]));
    try { localStorage.setItem("naia-theme", theme); } catch (e) {}
  }

  let saved = null;
  try { saved = localStorage.getItem("naia-theme"); } catch (e) {}
  setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  document.getElementById("themeBtn").addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
})();
