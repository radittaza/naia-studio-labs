# Naia Studio Labs — Company Profile

Website statis (HTML + CSS + JS), tanpa build step. Siap deploy ke Vercel.

## Struktur folder

```
naia-studio-labs/
├── index.html            ← semua konten teks & struktur halaman
├── assets/               ← logo, favicon, foto tim (raditya.jpg, amanda.jpg)
│   ├── logo-light.png
│   ├── logo-dark.png
│   ├── logo-light-64.png
│   └── logo-dark-64.png  (favicon)
├── css/
│   ├── tokens.css        ← WARNA, FONT, radius (light & dark mode)
│   ├── base.css          ← reset, tipografi, tombol
│   ├── nav.css           ← navbar
│   ├── hero.css          ← beranda + animasi dashboard + marquee
│   ├── about.css         ← section "Di balik Naia" (profil tim)
│   ├── services.css      ← layanan + alur kerja
│   ├── projects.css      ← slider proyek + ilustrasi mockup
│   ├── pricing.css       ← kartu harga + toggle
│   ├── faq.css
│   ├── contact.css
│   ├── footer.css        ← footer + animasi reveal
│   └── responsive.css    ← aturan tablet & HP
└── js/
    ├── config.js         ← EMAIL & NOMOR WHATSAPP
    ├── pricing-data.js   ← HARGA & FITUR PAKET
    ├── projects-data.js  ← DAFTAR PROYEK (judul, deskripsi, tag, screenshot)
    ├── projects.js       ← render kartu proyek + ilustrasi bawaan
    ├── theme.js          ← tombol mode terang/gelap
    ├── carousel.js       ← kartu geser + titik indikator (HP)
    ├── pricing.js        ← render kartu harga
    └── main.js           ← menu mobile, animasi scroll, nav aktif
```

## Yang paling sering diubah

| Mau ubah…                    | Buka file               |
|------------------------------|-------------------------|
| Nomor WA / email             | `js/config.js`          |
| Harga & fitur paket          | `js/pricing-data.js`    |
| Warna brand                  | `css/tokens.css`        |
| Jarak section di bawah navbar | `--nav-offset` di `css/tokens.css` |
| Tampilan HP / tablet         | `css/responsive.css`    |
| Teks, proyek, FAQ, link sosmed | `index.html` (cari komentar `<!-- ===== NAMA SECTION -->`) |
| Foto tim                     | ganti `assets/raditya.jpg` / `assets/amanda.jpg` (1:1, 800×800 px) |
| Proyek portofolio            | `js/projects-data.js` — ganti proyek `demo: true` dengan proyek asli; isi `image` untuk pakai screenshot |
| Profil tim, pendidikan, sosmed | `index.html` → section TENTANG / TIM |

## Jalankan lokal

Buka `index.html` langsung di browser, atau pakai Live Server di VS Code.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub.
2. Vercel → **Add New → Project** → import repo.
3. Framework Preset: **Other**, Build Command: kosong, Output Directory: kosong / `.`
4. Settings → **Domains** → tambahkan domainmu.

Setiap `git push` ke branch utama akan otomatis ter-deploy ulang.
