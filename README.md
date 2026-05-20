# BKK — Website Database Alumni SMK NU Darussalam

Sistem informasi Bursa Kerja Khusus (BKK) dan *Tracer Study* terintegrasi untuk mendata alumni secara dinamis, melacak keterserapan di industri, serta menyelaraskan lulusan SMK NU Darussalam dengan kebutuhan dunia kerja.

---

## 🌟 Fitur Utama

- **Pencatatan Tracer Study:** Pendataan alumni per angkatan (2017–2027) dan kompetensi keahlian (TKJ, AKL, TKR).
- **Integrasi Cloud Database:** Sinkronisasi data dua arah secara real-time dengan **Google Sheets** menggunakan **Google Apps Script (GAS) API**.
- **Fitur Impor & Ekspor Excel:** Memungkinkan pengunggahan data massal dari file Excel (`.xlsx`, `.xls`, `.csv`) langsung ke tabel, serta ekspor data tabel kembali ke format Excel.
- **Sistem Login Admin Terproteksi:** Autentikasi asinkron dengan fitur *fallback* offline jika jaringan internet terputus.
- **Antarmuka (UI) Premium & Responsif:** Desain modern berbasis CSS kustom (*sage green theme*), dilengkapi efek transisi, *sticky header*, dan fitur *freeze columns* pada tabel data yang panjang.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend:** HTML5, Vanilla JavaScript, CSS3 (Custom Styling)
- **Database & API:** Google Sheets & Google Apps Script (GAS)
- **Pustaka Pihak Ketiga:**
  - [SheetJS (XLSX)](https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js) — Untuk pengolahan impor/ekspor Excel di sisi klien.
  - [Font Awesome](https://cdnjs.cloudflare.com/) — Untuk kebutuhan ikon antarmuka.
  - Google Fonts (Plus Jakarta Sans, Cormorant Garamond) — Tipografi.

---

## 📁 Struktur Berkas Proyek

```text
bkk/
├── css/
│   └── styles.css             # Tema warna, layouting dashboard, dan tabel responsif
├── js/
│   └── main.js               # Logika navigasi sidebar, manajemen sesi login, dan auth guard
├── index.html                 # Halaman login utama admin portal
├── admin_dashboard.html       # Beranda dashboard panel admin
├── data_alumni.html           # Manajemen data tracer study alumni (tabel utama)
├── mitra_industri.html        # Pendataan mitra industri sekolah
├── mou_iduka.html             # Manajemen kerja sama (MOU) dengan IDUKA
├── kunjungan_industri.html    # Log kegiatan kunjungan industri siswa
├── pengaturan.html            # Konfigurasi sistem admin
├── banner.png                 # Gambar spanduk selamat datang
├── logo-bkk.png               # Logo Bursa Kerja Khusus
└── logo-smk.png               # Logo SMK NU Darussalam
```

---

## 🚀 Panduan Pemasangan & Hosting (GitHub Pages)

Karena proyek ini merupakan aplikasi **web statis**, Anda dapat meng-host-nya secara gratis di GitHub Pages dengan langkah berikut:

1. Buat repositori baru di GitHub dengan nama `bkk` dan atur visibilitasnya menjadi **Public**.
2. Hubungkan folder lokal Anda ini ke repositori tersebut dan lakukan *Push* semua file.
3. Di halaman repositori GitHub Anda, masuk ke **Settings** -> **Pages**.
4. Pada bagian *Branch*, pilih **`main`** (atau `master`) dan klik **Save**.
5. Situs web Anda akan aktif di alamat: `https://<username-github-anda>.github.io/bkk/`

---

## ⚙️ Konfigurasi Backend (Google Sheets)

URL endpoint API Google Apps Script didefinisikan dalam kode JavaScript di masing-masing file HTML (konstanta `GAS_API`):

```javascript
const GAS_API = "https://script.google.com/macros/s/.../exec";
```

Jika Anda ingin mengganti database spreadsheet:
1. Salin template spreadsheet backend Anda.
2. Buat skrip Google Apps Script baru di Google Drive Anda.
3. Publikasikan skrip tersebut sebagai **Web App** dengan akses *"Anyone"*.
4. Ganti nilai konstanta `GAS_API` di berkas HTML proyek ini dengan tautan Web App baru Anda.

---
*© 2026 TIM TKJ SMK NU Darussalam*
