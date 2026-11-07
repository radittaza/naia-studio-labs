/* =========================================================
   UMUM: kontak, menu mobile, animasi scroll, nav aktif
   ========================================================= */
(function () {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  /* ---- Kontak (data dari js/config.js) ---- */
  $("#mailBtn").href = `mailto:${CONFIG.email}`;
  $("#mailText").textContent = CONFIG.email;
  $("#waText").textContent = "+" + CONFIG.whatsapp;
  $("#waBtn").href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.waMessage)}`;
  $("#yr").textContent = new Date().getFullYear();

  /* ---- Menu mobile ---- */
  $("#menuBtn").addEventListener("click", () => $("#mobileMenu").classList.toggle("open"));
  $$("#mobileMenu a").forEach((a) =>
    a.addEventListener("click", () => $("#mobileMenu").classList.remove("open"))
  );

  /* ---- Animasi muncul saat scroll (class .reveal) ---- */
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---- Highlight link nav sesuai section yang terlihat ---- */
  const links = $$(".nav-links a");
  const so = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main section[id]").forEach((s) => so.observe(s));
})();
