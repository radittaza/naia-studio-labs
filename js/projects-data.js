/* =========================================================
   DATA PROYEK — tambah / hapus / ubah kartu proyek di sini
   ---------------------------------------------------------
   title    : judul proyek
   category : teks kecil di atas judul
   desc     : deskripsi singkat
   tags     : label teknologi / fitur
   badge    : label di pojok kiri atas gambar
   bg       : warna latar gambar → "navy" | "paper" | "char"
   visual   : ilustrasi bawaan → "inventory" | "nfc" | "brand" | "pos" |
              "booking" | "attendance" | "analytics" | "landing" | "design"
   image    : (opsional) path screenshot asli, mis. "assets/projects/kasir.jpg"
              → kalau diisi, screenshot dipakai menggantikan ilustrasi
   link     : (opsional) URL demo / live site
   demo     : true = proyek contoh. Ganti dengan proyek asli kalau sudah ada.
   ========================================================= */
const PROJECTS = [
  {
    title: "Sistem Inventaris Konstruksi",
    category: "Sistem internal · Industri konstruksi",
    desc: "Aplikasi inventaris kantor konstruksi: pembelian barang, stok multi-gudang (Jawa & Kalimantan), ekspedisi, dan barang keluar dengan alur approval.",
    tags: ["Laravel", "MySQL", "Role & approval", "Multi-gudang"],
    badge: "Laravel · Dalam pengerjaan",
    bg: "navy",
    visual: "inventory",
  },
  {
    title: "Kartu NFC untuk Bisnis",
    category: "Produk bisnis · B2B",
    desc: "Kartu ID karyawan dengan profil digital, table card restoran, dan standing display kasir untuk review Google Maps atau menu digital.",
    tags: ["NFC", "Profil digital", "Restoran", "Korporat"],
    badge: "Web + NFC",
    bg: "paper",
    visual: "nfc",
  },

  /* ---------- PROYEK DEMO (ganti dengan proyek asli) ---------- */
  {
    demo: true,
    title: "Redesign Aplikasi Layanan",
    category: "UI/UX · Mobile app",
    desc: "Riset pengguna, wireframe, dan desain ulang antarmuka aplikasi agar alur pendaftaran lebih singkat dan mudah dipahami.",
    tags: ["Figma", "UX Research", "Prototype", "Design System"],
    badge: "Demo · UI/UX",
    bg: "paper",
    visual: "design",
  },
  {
    demo: true,
    title: "Aplikasi Kasir UMKM",
    category: "Point of Sale · Retail & F&B",
    desc: "Kasir berbasis web dengan katalog produk, keranjang, cetak struk, dan laporan penjualan harian per kasir.",
    tags: ["Laravel", "Livewire", "Cetak struk", "Laporan"],
    badge: "Demo · Laravel",
    bg: "char",
    visual: "pos",
  },
  {
    demo: true,
    title: "Booking & Reservasi Online",
    category: "Web app · Jasa & layanan",
    desc: "Pelanggan memilih tanggal dan jam layanan sendiri, admin mengatur jadwal, dan notifikasi dikirim lewat WhatsApp.",
    tags: ["React", "Laravel API", "Jadwal", "WhatsApp"],
    badge: "Demo · React + Laravel",
    bg: "navy",
    visual: "booking",
  },
  {
    demo: true,
    title: "SaaS Absensi Karyawan",
    category: "SaaS · HR",
    desc: "Absensi multi-perusahaan dengan check-in lokasi, rekap kehadiran bulanan, pengajuan cuti, dan langganan per paket.",
    tags: ["Laravel", "Multi-tenant", "Langganan", "Export Excel"],
    badge: "Demo · SaaS",
    bg: "paper",
    visual: "attendance",
  },
  {
    demo: true,
    title: "Dashboard Analitik Penjualan",
    category: "Dashboard · Data bisnis",
    desc: "Ringkasan omzet, produk terlaris, dan tren penjualan per cabang dalam grafik interaktif yang mudah dibaca.",
    tags: ["React", "Chart", "REST API", "Filter cabang"],
    badge: "Demo · React",
    bg: "char",
    visual: "analytics",
  },
  {
    demo: true,
    title: "Company Profile Kafe",
    category: "Landing page · F&B",
    desc: "Website profil kafe dengan menu digital, galeri, lokasi Google Maps, dan tombol reservasi via WhatsApp.",
    tags: ["Next.js", "Tailwind", "SEO", "Responsif"],
    badge: "Demo · Next.js",
    bg: "navy",
    visual: "landing",
  },
  {
    title: "Naia Studio Labs",
    category: "Brand & website · 2026",
    desc: "Identitas dan company profile studio ini — mode terang & gelap, responsif, dan di-deploy di Vercel.",
    tags: ["Branding", "Responsive", "Dark mode", "Vercel"],
    badge: "HTML · CSS · JS",
    bg: "char",
    visual: "brand",
  },
];
