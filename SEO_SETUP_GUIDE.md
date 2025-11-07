# 🚀 Panduan Setup SEO - Google Search Console

## ✅ Yang Sudah Dikonfigurasi

1. ✅ Metadata SEO di `app/layout.tsx`
2. ✅ Sitemap di `app/sitemap.ts`
3. ✅ Robots.txt di `app/robots.ts`
4. ✅ Google Analytics sudah aktif
5. ✅ Domain sudah terhubung ke Vercel

---

## 📋 Step 1: Verifikasi di Google Search Console

### A. Daftar & Tambah Property

1. Buka: https://search.google.com/search-console
2. Login dengan akun Google
3. Klik **"Add Property"**
4. Pilih **"URL prefix"**
5. Masukkan: `https://kreativlabs.my.id`
6. Klik **Continue**

### B. Verifikasi Kepemilikan

Google akan memberikan kode verification seperti ini:
```html
<meta name="google-site-verification" content="abc123xyz..." />
```

**Copy kode `abc123xyz...` (tanpa meta tag)**

### C. Tambahkan Kode ke Website

1. Buka file `.env.local`
2. Cari baris: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=`
3. Paste kode verification setelah tanda `=`
4. Contoh:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz...
   ```

### D. Deploy ke Vercel

```bash
git add .
git commit -m "Add Google Search Console verification"
git push
```

### E. Verifikasi di Google Search Console

1. Tunggu deploy selesai (2-3 menit)
2. Kembali ke Google Search Console
3. Klik **"Verify"**
4. Jika berhasil, akan muncul centang hijau ✅

---

## 📋 Step 2: Submit Sitemap

Setelah verifikasi berhasil:

1. Di Google Search Console, klik **"Sitemaps"** (sidebar kiri)
2. Masukkan: `sitemap.xml`
3. Klik **"Submit"**
4. Status akan berubah menjadi **"Success"** ✅

URL Sitemap Anda: `https://kreativlabs.my.id/sitemap.xml`

---

## 📋 Step 3: Request Indexing

### A. Index Homepage

1. Di Search Console, klik **"URL Inspection"** (sidebar kiri)
2. Masukkan: `https://kreativlabs.my.id`
3. Klik **Enter**
4. Klik **"Request Indexing"**
5. Tunggu 1-2 hari untuk diindex

### B. Index Halaman Penting

Ulangi langkah di atas untuk:
- `https://kreativlabs.my.id#services`
- `https://kreativlabs.my.id#projects`
- `https://kreativlabs.my.id#pricing`
- `https://kreativlabs.my.id#contact`

---

## 📋 Step 4: Optimasi SEO On-Page

### A. Pastikan Konten Berkualitas

- ✅ Judul halaman unik dan deskriptif
- ✅ Meta description menarik (sudah ada)
- ✅ Heading structure (H1, H2, H3) teratur
- ✅ Alt text untuk gambar
- ✅ Internal linking

### B. Kecepatan Website

Cek di: https://pagespeed.web.dev/
- Masukkan: `https://kreativlabs.my.id`
- Target: Score > 90 (Mobile & Desktop)

### C. Mobile-Friendly

Cek di: https://search.google.com/test/mobile-friendly
- Website sudah responsive ✅

---

## 📋 Step 5: Monitoring & Maintenance

### A. Pantau Performance (Setiap Minggu)

Di Google Search Console, cek:
1. **Performance** → Total clicks, impressions, CTR
2. **Coverage** → Pastikan tidak ada error
3. **Core Web Vitals** → Pastikan semua hijau
4. **Mobile Usability** → Pastikan tidak ada issue

### B. Update Konten Rutin

- Tambah blog post baru (jika ada)
- Update portfolio/projects
- Update harga/services
- Tambah testimonial baru

### C. Build Backlinks

- Daftar di direktori bisnis (Google My Business, Bing Places)
- Guest posting di blog lain
- Social media sharing
- Partnership dengan bisnis lain

---

## 🎯 Checklist SEO

### Technical SEO
- [x] Sitemap.xml
- [x] Robots.txt
- [x] SSL Certificate (HTTPS)
- [x] Mobile responsive
- [x] Fast loading speed
- [x] Structured data (Schema.org)

### On-Page SEO
- [x] Meta title & description
- [x] H1-H6 hierarchy
- [x] Alt text untuk images
- [x] Internal linking
- [x] URL structure
- [x] Canonical tags

### Off-Page SEO
- [ ] Google My Business
- [ ] Social media profiles
- [ ] Backlinks berkualitas
- [ ] Local citations
- [ ] Reviews & testimonials

---

## 📊 Tools Monitoring SEO

1. **Google Search Console** → https://search.google.com/search-console
2. **Google Analytics** → https://analytics.google.com (sudah aktif)
3. **PageSpeed Insights** → https://pagespeed.web.dev
4. **Mobile-Friendly Test** → https://search.google.com/test/mobile-friendly
5. **Schema Markup Validator** → https://validator.schema.org

---

## 🔗 URLs Penting

- Website: https://kreativlabs.my.id
- Sitemap: https://kreativlabs.my.id/sitemap.xml
- Robots: https://kreativlabs.my.id/robots.txt

---

## 💡 Tips SEO

1. **Konten adalah Raja** → Buat konten berkualitas dan original
2. **Keyword Research** → Gunakan Google Keyword Planner
3. **Update Rutin** → Minimal 1x per bulan
4. **User Experience** → Fast, mobile-friendly, easy navigation
5. **Build Authority** → Backlinks dari website berkualitas
6. **Local SEO** → Daftar di Google My Business
7. **Social Signals** → Share di social media
8. **Analytics** → Monitor dan improve terus

---

## 📞 Support

Jika ada pertanyaan tentang SEO:
- Email: kreativlabsid@gmail.com
- WhatsApp: 0895380163004

---

**Good luck dengan SEO! 🚀**
