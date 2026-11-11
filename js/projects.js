/* =========================================================
   RENDER KARTU PROYEK (data di js/projects-data.js)
   VISUALS = ilustrasi bawaan per jenis proyek
   ========================================================= */
(function () {
  const nfcIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 4a13 13 0 0 1 0 16"/></svg>';
  const bar = '<div class="mock-top"><i></i><i></i><i></i></div>';

  const VISUALS = {
    inventory: () => `
      <div class="mock">${bar}
        <table>
          <tr><th>Barang</th><th>Gudang</th><th>Stok</th><th>Status</th></tr>
          <tr><td>Panel ACP 4mm</td><td>Jawa</td><td>240</td><td><span class="pill p-ok">tersedia</span></td></tr>
          <tr><td>Scaffolding set</td><td>Kalimantan</td><td>36</td><td><span class="pill p-out">ekspedisi</span></td></tr>
          <tr><td>Akrilik 3mm</td><td>Jawa</td><td>118</td><td><span class="pill p-wait">approval</span></td></tr>
          <tr><td>Stiker Oracal</td><td>Jawa</td><td>75</td><td><span class="pill p-ok">tersedia</span></td></tr>
        </table>
      </div>`,

    nfc: () => `
      <div class="nfc-cards">
        <div class="nfc a">${nfcIcon}<div><b>Tap to connect</b><br/><small>NTAG213 · ID CARD</small></div></div>
        <div class="phone"><div class="av"></div><i></i><i style="width:70%;margin:0 auto"></i><i style="margin-top:8px"></i><i></i><i style="background:#9DB0E6;height:14px;border-radius:6px;margin-top:auto"></i></div>
        <div class="nfc b">${nfcIcon}<div><b>Review kami ★</b><br/><small>TABLE CARD 8×8</small></div></div>
      </div>`,

    brand: () => `
      <img src="assets/logo-dark.png" alt="" class="brand-logo" />`,

    pos: () => `
      <div class="mock v-pos">${bar}
        <div class="pos">
          <div class="pos-grid">
            ${["Kopi Susu", "Americano", "Croissant", "Matcha", "Roti Bakar", "Teh Lemon"]
              .map((n, i) => `<div class="pos-item${i === 0 ? " on" : ""}"><i></i><span>${n}</span><b>${[18, 15, 22, 24, 16, 12][i]}k</b></div>`)
              .join("")}
          </div>
          <div class="pos-cart">
            <small>Pesanan #0241</small>
            <p><span>2× Kopi Susu</span><span>36k</span></p>
            <p><span>1× Croissant</span><span>22k</span></p>
            <p><span>1× Teh Lemon</span><span>12k</span></p>
            <p class="tot"><span>Total</span><span>70k</span></p>
            <button>Bayar</button>
          </div>
        </div>
      </div>`,

    booking: () => {
      const days = Array.from({ length: 28 }, (_, i) => {
        const c = [9, 10, 16].includes(i) ? "busy" : i === 13 ? "sel" : "";
        return `<i class="${c}">${i + 1}</i>`;
      }).join("");
      return `
      <div class="mock v-book">${bar}
        <div class="book">
          <div class="cal"><small>November 2026</small><div class="days">${days}</div></div>
          <div class="slots"><small>Pilih jam</small>
            <span>09.00</span><span class="sel">10.30</span><span class="busy">13.00</span><span>15.30</span><span>19.00</span>
          </div>
        </div>
      </div>`;
    },

    attendance: () => `
      <div class="mock v-att">${bar}
        <div class="att">
          <div class="ring" style="--p:92"><b>92%</b><small>hadir</small></div>
          <ul>
            ${[["AR", "Andi R.", "07.52", "ok"], ["SN", "Siti N.", "07.58", "ok"], ["BP", "Budi P.", "08.21", "wait"], ["DW", "Dewi W.", "Cuti", "out"]]
              .map(([a, n, t, s]) => `<li><em>${a}</em><span>${n}</span><span class="pill p-${s}">${t}</span></li>`)
              .join("")}
          </ul>
        </div>
      </div>`,

    analytics: () => `
      <div class="mock v-ana">${bar}
        <div class="ana">
          <div class="ana-kpi"><div><small>Omzet</small><b>Rp 48,2 jt</b><em>+12%</em></div><div><small>Transaksi</small><b>1.906</b><em>+8%</em></div></div>
          <svg viewBox="0 0 300 90" preserveAspectRatio="none">
            <defs><linearGradient id="anaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D5A9E" stop-opacity=".35"/><stop offset="1" stop-color="#3D5A9E" stop-opacity="0"/></linearGradient></defs>
            <path d="M0 70 L30 62 L60 66 L90 48 L120 52 L150 36 L180 42 L210 26 L240 30 L270 14 L300 18 L300 90 L0 90Z" fill="url(#anaG)"/>
            <path d="M0 70 L30 62 L60 66 L90 48 L120 52 L150 36 L180 42 L210 26 L240 30 L270 14 L300 18" fill="none" stroke="#0B1B3F" stroke-width="2.2"/>
            <path d="M0 80 L30 76 L60 78 L90 70 L120 72 L150 64 L180 68 L210 58 L240 62 L270 52 L300 54" fill="none" stroke="#9DB0E6" stroke-width="1.6" stroke-dasharray="4 4"/>
          </svg>
        </div>
      </div>`,

    landing: () => `
      <div class="mock v-land">
        <div class="land-nav"><b>Kopi Senja</b><span>Menu</span><span>Galeri</span><span>Lokasi</span><em>Reservasi</em></div>
        <div class="land-hero">
          <div><small>EST. 2021 · BANJARBARU</small><h4>Ngopi santai,<br/>cerita panjang.</h4><button>Lihat menu</button></div>
          <div class="land-img"><i></i></div>
        </div>
      </div>`,

    design: () => `
      <div class="canvas">
        <div class="frame f1"><i class="h"></i><i></i><i style="width:60%"></i><i class="btn"></i></div>
        <div class="frame f2"><i class="img"></i><i class="h"></i><i></i><i style="width:70%"></i><div class="chips"><i></i><i></i><i></i></div><i class="btn"></i></div>
        <div class="frame f3"><i class="h"></i><i class="row"></i><i class="row"></i><i class="row"></i><i class="btn"></i></div>
        <span class="cursor"><svg viewBox="0 0 24 24"><path d="M4 3l7 17 2.5-7L21 10z" fill="#3D5A9E" stroke="#fff" stroke-width="1.5"/></svg><em>Amanda</em></span>
        <span class="swatch"><i style="background:#0B1B3F"></i><i style="background:#9DB0E6"></i><i style="background:#ECEBE7"></i></span>
      </div>`,
  };

  function card(p) {
    const visual = p.image
      ? `<img class="shot" src="${p.image}" alt="${p.title}" loading="lazy" />`
      : (VISUALS[p.visual] || (() => ""))();
    const title = p.link
      ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title} ↗</a>`
      : p.title;
    return `
      <article class="proj">
        <div class="proj-visual v-${p.bg || "navy"}${p.image ? " has-shot" : ""}">
          <span class="badge">${p.badge || ""}</span>
          ${visual}
        </div>
        <div class="proj-body">
          <small>${p.category}</small>
          <h3>${title}</h3>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      </article>`;
  }

  const cta = `
    <article class="proj cta-card">
      <span class="eyebrow">Slot berikutnya</span>
      <h3>Proyekmu bisa ada di sini.</h3>
      <p>Ceritakan ide atau masalah bisnismu — kita cari solusi web yang paling pas.</p>
      <a href="#kontak" class="btn btn-primary">Mulai diskusi <span class="arr">→</span></a>
    </article>`;

  const list = document.getElementById("projectList");
  list.innerHTML = PROJECTS.map(card).join("") + cta;
  if (window.Carousel) Carousel.refresh(list);
})();
