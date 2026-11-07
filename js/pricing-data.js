/* =========================================================
   DATA PAKET HARGA — ubah harga & fitur di sini
   ---------------------------------------------------------
   once        : harga sekali bayar
   bundle      : harga awal paket + biaya maintenance per bulan
   features    : fitur yang tampil di kedua mode
   onceExtra   : fitur tambahan khusus mode "Sekali Bayar"
   bundleExtra : fitur tambahan khusus mode "Paket + Maintenance"
   featured    : true = kartu disorot (warna navy)
   from        : true = tampilkan label "mulai"
   ========================================================= */
const PLANS = [
  {
    name: "Starter",
    for: "Company profile & landing page untuk UMKM atau personal brand.",
    once:   { price: 1500000 },
    bundle: { price: 1200000, monthly: 150000 },
    features: [
      "Hingga 5 halaman / section",
      "Desain responsif (HP & desktop)",
      "React / Next.js atau Blade",
      "Form kontak & tombol WhatsApp",
      "SEO dasar & deploy ke domainmu",
    ],
    onceExtra:   ["Garansi perbaikan bug 14 hari"],
    bundleExtra: ["Update konten hingga 3x / bulan", "Backup & cek uptime bulanan"],
  },
  {
    name: "Business",
    featured: true,
    for: "Aplikasi CRUD & dashboard admin untuk operasional bisnis.",
    once:   { price: 4500000 },
    bundle: { price: 3800000, monthly: 350000 },
    features: [
      "Laravel + MySQL",
      "Login, role & hak akses",
      "Hingga 6 modul CRUD",
      "Laporan, filter & export Excel/PDF",
      "Dashboard grafik ringkasan",
    ],
    onceExtra:   ["Garansi perbaikan bug 30 hari", "Dokumentasi penggunaan"],
    bundleExtra: ["Perbaikan bug tanpa batas waktu", "Backup database mingguan", "Penyesuaian kecil hingga 4 jam / bulan"],
  },
  {
    name: "Scale",
    from: true,
    for: "SaaS & sistem custom — multi-user, langganan, integrasi.",
    once:   { price: 9000000 },
    bundle: { price: 8000000, monthly: 750000 },
    features: [
      "Laravel API + React frontend",
      "Multi-tenant / multi-cabang",
      "Integrasi payment / WhatsApp / API",
      "Arsitektur siap dikembangkan",
      "Pengerjaan bertahap per milestone",
    ],
    onceExtra:   ["Garansi perbaikan bug 30 hari", "Serah terima source code & dokumentasi"],
    bundleExtra: ["Prioritas respon & monitoring", "Backup harian & update keamanan", "Pengembangan fitur hingga 8 jam / bulan"],
  },
];
