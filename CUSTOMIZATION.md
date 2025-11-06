# Customization Guide - KreativLabs.id

Panduan lengkap untuk mengkustomisasi website sesuai kebutuhan Anda.

## 🎨 Mengubah Warna

### Primary Colors

Edit file `app/globals.css`:

```css
:root {
  --primary: 59 130 246;  /* Blue #3B82F6 */
  --background: 10 25 47; /* Dark Blue #0A192F */
}
```

### Ganti dengan warna brand Anda:

```css
:root {
  --primary: [R G B];     /* Warna utama */
  --background: [R G B];  /* Warna background */
}
```

Gunakan converter RGB untuk mendapatkan nilai yang tepat.

## 📝 Mengubah Konten

### Hero Section

File: `components/sections/Hero.tsx`

```tsx
// Ubah judul
<h1>Jasa Kami?</h1>

// Ubah subjudul
<p>Kami kenalin....</p>

// Ubah CTA button
<Button>Mulai Konsultasi</Button>
```

### Projects Section

File: `components/sections/Projects.tsx`

```tsx
const projects = [
  {
    title: "Nama Project",
    category: "Kategori",
    description: "Deskripsi project",
    image: "/path/to/image.jpg",
  },
  // Tambah project lainnya...
];
```

### Services Section

File: `components/sections/Services.tsx`

```tsx
const services = [
  {
    icon: Code,  // Import dari lucide-react
    title: "Nama Service",
    description: "Deskripsi service",
    features: ["Feature 1", "Feature 2"],
  },
];
```

### Pricing Section

File: `components/sections/Pricing.tsx`

```tsx
const pricingPlans = [
  {
    name: "Starter",
    price: "2.5jt",
    description: "Deskripsi paket",
    features: ["Feature 1", "Feature 2"],
    popular: false,
  },
];
```

## 🖼️ Menambahkan Gambar

### Project Images

1. Simpan gambar di folder `public/images/projects/`
2. Update path di `Projects.tsx`:

```tsx
image: "/images/projects/project1.jpg"
```

### Logo

1. Simpan logo di `public/logo.png`
2. Update di `Navbar.tsx`:

```tsx
<Image src="/logo.png" alt="Logo" width={120} height={40} />
```

## 🔤 Mengubah Font

File: `app/layout.tsx`

```tsx
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  variable: "--font-your-font",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
```

Update di `globals.css`:

```css
--font-sans: var(--font-your-font);
```

## 📧 Konfigurasi Contact Form

### Email Integration

1. Install email service (contoh: EmailJS, SendGrid)

```bash
npm install @sendgrid/mail
```

2. Update `components/sections/Contact.tsx`:

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Kirim email
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

3. Buat API route `app/api/contact/route.ts`

## 🔗 Social Media Links

File: `components/sections/Footer.tsx`

```tsx
const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/your-handle",
    label: "Instagram",
  },
  // Update dengan link Anda
];
```

## 📱 Responsive Breakpoints

Tailwind breakpoints yang digunakan:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Contoh penggunaan:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## ✨ Menambahkan Animasi

### Hover Effects

```tsx
<div className="hover:scale-105 transition-transform duration-300">
  Hover me
</div>
```

### Entrance Animations

Gunakan komponen `AnimatedSection`:

```tsx
import AnimatedSection from "@/components/AnimatedSection";

<AnimatedSection>
  <YourContent />
</AnimatedSection>
```

## 🎯 SEO Optimization

File: `app/layout.tsx`

```tsx
export const metadata = {
  title: "Your Title",
  description: "Your Description",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "OG Title",
    description: "OG Description",
  },
};
```

## 🌐 Multi-language Support

1. Install next-intl:

```bash
npm install next-intl
```

2. Create locale files di `messages/`:
   - `en.json`
   - `id.json`

3. Configure di `next.config.ts`

## 📊 Analytics

### Google Analytics

1. Tambahkan di `app/layout.tsx`:

```tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

## 🔧 Advanced Customization

### Custom Components

Buat komponen baru di `components/`:

```tsx
// components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Custom Component</div>;
}
```

### Custom Hooks

Buat hooks di `hooks/`:

```tsx
// hooks/useMyHook.ts
export function useMyHook() {
  // Your hook logic
}
```

## 💡 Tips

1. **Backup**: Selalu backup sebelum melakukan perubahan besar
2. **Test**: Test di local sebelum deploy
3. **Responsive**: Selalu cek di berbagai ukuran layar
4. **Performance**: Optimize images dan code
5. **Accessibility**: Pastikan website accessible

## 🆘 Troubleshooting

### Build Error

```bash
# Clear cache
rm -rf .next
npm run build
```

### Style tidak muncul

```bash
# Rebuild Tailwind
npm run dev
```

### Font tidak load

Pastikan font sudah di-import dengan benar di `layout.tsx`

## 📞 Need Help?

Email: hello@kreativlabs.id
