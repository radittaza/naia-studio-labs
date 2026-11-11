/* =========================================================
   CAROUSEL GESER
   ---------------------------------------------------------
   Elemen dengan class .snap-row menjadi baris geser
   (proyek: semua layar, harga: tablet & HP). Script ini
   menambahkan titik indikator + tombol panah.
   data-start="featured" → saat pertama dibuka di HP, langsung
   menampilkan kartu .featured (paket "Paling dipilih").
   ========================================================= */
window.Carousel = (function () {
  const rows = new Map();

  function isScrollable(el) {
    return el.scrollWidth > el.clientWidth + 4;
  }

  function activeIndex(el) {
    const kids = [...el.children];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bestDist = Infinity;
    kids.forEach((k, i) => {
      const d = Math.abs(k.offsetLeft + k.offsetWidth / 2 - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    return best;
  }

  function scrollToChild(el, child, smooth) {
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2,
      behavior: smooth ? "smooth" : "auto",
    });
  }

  function arrows(el) {
    if (!el.id) return [];
    return document.querySelectorAll(`[data-carousel-prev="#${el.id}"],[data-carousel-next="#${el.id}"]`);
  }

  function update(el) {
    const dots = rows.get(el);
    if (!dots) return;
    // tombol panah: nonaktif di ujung kiri/kanan
    arrows(el).forEach((btn) => {
      const atStart = el.scrollLeft <= 4;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      btn.disabled = btn.hasAttribute("data-carousel-prev") ? atStart : atEnd;
    });
    dots.hidden = !isScrollable(el);
    const idx = activeIndex(el);
    [...dots.children].forEach((d, i) => d.classList.toggle("on", i === idx));
  }

  function buildDots(el) {
    const dots = rows.get(el);
    dots.innerHTML = "";
    [...el.children].forEach((child, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Slide " + (i + 1));
      b.addEventListener("click", () => scrollToChild(el, child, true));
      dots.appendChild(b);
    });
    update(el);

    // Sekali saja: buka langsung di kartu .featured
    if (el.dataset.start === "featured" && !el.dataset.started && el.children.length) {
      el.dataset.started = "1";
      requestAnimationFrame(() => {
        const f = el.querySelector(".featured");
        if (f && isScrollable(el)) scrollToChild(el, f, false);
        update(el);
      });
    }
  }

  function init(el) {
    if (rows.has(el)) return;
    const dots = document.createElement("div");
    dots.className = "snap-dots";
    el.after(dots);
    rows.set(el, dots);

    let ticking = false;
    el.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { update(el); ticking = false; });
    }, { passive: true });

    buildDots(el);
  }

  function refresh(el) {
    if (rows.has(el)) buildDots(el); else init(el);
  }

  // Tombol panah: data-carousel-prev="#id" / data-carousel-next="#id"
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-carousel-prev],[data-carousel-next]");
    if (!btn) return;
    const prev = btn.hasAttribute("data-carousel-prev");
    const el = document.querySelector(btn.getAttribute(prev ? "data-carousel-prev" : "data-carousel-next"));
    if (!el || !el.children.length) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = el.children[0].offsetWidth + gap;
    el.scrollBy({ left: prev ? -step : step, behavior: "smooth" });
  });

  document.querySelectorAll(".snap-row").forEach(init);
  window.addEventListener("resize", () => rows.forEach((_, el) => update(el)));

  return { refresh };
})();
