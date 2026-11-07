/* =========================================================
   RENDER KARTU HARGA + TOGGLE "Sekali Bayar / Paket"
   Data harga ada di js/pricing-data.js
   ========================================================= */
(function () {
  const rp = (n) => new Intl.NumberFormat("id-ID").format(n);
  const check =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>';

  const plansEl = document.getElementById("plans");
  const pill = document.getElementById("pillBg");
  const buttons = document.querySelectorAll(".toggle button");
  let mode = "once"; // "once" | "bundle"

  function planCard(p) {
    const d = p[mode];
    const extras = mode === "once" ? p.onceExtra : p.bundleExtra;
    const monthly =
      mode === "bundle"
        ? `+ <b>Rp ${rp(d.monthly)}</b> / bulan maintenance`
        : "Bayar sekali, milikmu sepenuhnya";

    return `
      <article class="plan ${p.featured ? "featured" : ""}">
        ${p.featured ? '<span class="ribbon">Paling dipilih</span>' : ""}
        <div class="pname">${p.name}</div>
        <p class="pfor">${p.for}</p>
        <div class="price">
          ${p.from ? "<small>mulai</small>" : ""}
          <span class="cur">Rp</span><span class="num">${rp(d.price)}</span>
        </div>
        <div class="monthly">${monthly}</div>
        <hr/>
        <ul class="feat">
          ${p.features.map((f) => `<li>${check}<span>${f}</span></li>`).join("")}
          ${extras.map((f) => `<li class="${mode === "bundle" ? "extra" : ""}">${check}<span>${f}</span></li>`).join("")}
        </ul>
        <a href="#kontak" class="btn btn-primary" data-plan="${p.name}">Pilih ${p.name} <span class="arr">→</span></a>
      </article>`;
  }

  function render() {
    const keepScroll = plansEl.scrollLeft; // posisi geser di HP tetap sama saat toggle
    plansEl.innerHTML = PLANS.map(planCard).join("");
    plansEl.scrollLeft = keepScroll;
    if (window.Carousel) Carousel.refresh(plansEl);

    // Tombol "Pilih paket" mengisi pesan WhatsApp sesuai paket
    plansEl.querySelectorAll("[data-plan]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const label = mode === "once" ? "Sekali Bayar" : "Paket + Maintenance";
        const msg = `Halo Naia Studio Labs, saya tertarik dengan paket ${btn.dataset.plan} (${label}).`;
        document.getElementById("waBtn").href =
          `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
      })
    );
  }

  function movePill() {
    const active = document.querySelector(`.toggle button[data-mode="${mode}"]`);
    pill.style.left = active.offsetLeft + "px";
    pill.style.width = active.offsetWidth + "px";
  }

  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      mode = b.dataset.mode;
      buttons.forEach((x) => x.setAttribute("aria-pressed", x === b));
      movePill();
      render();
    })
  );

  render();
  window.addEventListener("load", movePill);
  window.addEventListener("resize", movePill);
  if (document.fonts) document.fonts.ready.then(movePill);
})();
