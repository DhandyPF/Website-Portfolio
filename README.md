# Portofolio Personal

Landing page portofolio dengan Next.js App Router dan Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Menyesuaikan konten

- Ganti nama dan tagline di `components/Hero.jsx`.
- Isi bio dan deskripsi persona di `components/About.jsx`.
- Ganti placeholder `public/profile-3x4.svg` dengan foto formal atau semi-formal berasio 3:4, lalu sesuaikan `src` pada `components/About.jsx`.
- Isi riwayat pendidikan secara kronologis di `data/education.json`, termasuk path logo resmi setiap institusi. Logo Universitas Jenderal Soedirman berasal dari [situs resminya](https://unsoed.ac.id/). Ganti placeholder logo SMK Negeri 1 Cikedung dengan aset resmi di `public/edu-logos/`.
- Isi riwayat kegiatan dan sertifikat di `data/certificates.json`. Ganti preview awal dengan foto sertifikat atau dokumentasi di `public/certificates/`.
- Sesuaikan teknologi dan AI di `components/TechStack.jsx`. Setiap entri menampilkan ikon SVG lokal dari `public/tech-logos/`.
- Ubah bidang peminatan di `data/peminatan.json`.
- Ganti email publik di `components/ContactForm.jsx` dan nama di `components/Footer.jsx`.
- Warna dan tipografi berada di `tailwind.config.js` serta `app/globals.css`.

Komentar penanda di komponen menunjukkan bagian personal yang perlu disesuaikan. Data pendidikan, kegiatan, sertifikat, dan peminatan menggunakan struktur JSON yang dapat diedit. Logo sekolah pada data awal masih berupa placeholder, bukan logo resmi.

## Mengaktifkan formulir kontak

1. Buat form di [Formspree](https://formspree.io) dan salin endpoint-nya.
2. Salin `.env.example` menjadi `.env.local`.
3. Isi `NEXT_PUBLIC_FORMSPREE_URL` di `.env.local` dengan endpoint milik Anda.
4. Jalankan ulang server pengembangan.

Tanpa endpoint, formulir akan menampilkan pesan bahwa konfigurasi belum tersedia dan tidak mengklaim pesan terkirim. Untuk deployment, tambahkan variabel yang sama pada pengaturan environment platform hosting.
