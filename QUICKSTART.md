# Quick Start Guide - KreativLabs.id

Panduan cepat untuk memulai development website KreativLabs.id.

## 🚀 Getting Started (5 Menit)

### 1. Prerequisites

Pastikan sudah terinstall:
- Node.js 18+ ([Download](https://nodejs.org))
- npm atau yarn
- Git
- Code editor (VS Code recommended)

### 2. Installation

```bash
# Clone repository (jika dari Git)
git clone <repository-url>
cd kreativlabsid

# Install dependencies
npm install

# Run development server
npm run dev
```

### 3. Open Browser

Buka [http://localhost:3000](http://localhost:3000)

✅ Website sudah berjalan!

## 📝 First Steps

### Customize Content

#### 1. Update Company Info

**File: `components/sections/Hero.tsx`**
```tsx
// Ubah nama brand
<h2>Kreativ<span>Labs</span>.id</h2>

// Ubah tagline
<h1>Jasa Kami?</h1>
<p>Kami kenalin....</p>
```

#### 2. Update Contact Info

**File: `components/sections/Contact.tsx`**
```tsx
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@kreativlabs.id", // Ganti dengan email Anda
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812-3456-7890", // Ganti dengan nomor Anda
  },
];
```

#### 3. Update WhatsApp Number

**File: `components/WhatsAppButton.tsx`**
```tsx
const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
```

#### 4. Update Social Media

**File: `components/sections/Footer.tsx`**
```tsx
const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/your-handle", // Update link
  },
  // ... update semua social links
];
```

### Change Colors

**File: `app/globals.css`**
```css
:root {
  --primary: 59 130 246;  /* Ganti dengan RGB warna Anda */
  --background: 10 25 47; /* Ganti dengan RGB background */
}
```

### Add Your Projects

**File: `components/sections/Projects.tsx`**
```tsx
const projects = [
  {
    title: "Project Name",
    category: "Category",
    description: "Description",
    image: "/images/project.jpg", // Simpan di public/images/
  },
  // Tambah project lainnya...
];
```

## 🎨 Customization Quick Tips

### Change Font
```tsx
// app/layout.tsx
import { Your_Font } from "next/font/google";
```

### Update Pricing
```tsx
// components/sections/Pricing.tsx
const pricingPlans = [
  {
    name: "Starter",
    price: "2.5jt", // Update harga
    features: [...], // Update features
  },
];
```

### Add New Section
```tsx
// 1. Create component
// components/sections/NewSection.tsx
export default function NewSection() {
  return <section>...</section>;
}

// 2. Import & use in page.tsx
import NewSection from "@/components/sections/NewSection";
<NewSection />
```

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Check code quality

# Clean
rm -rf .next         # Clear build cache
rm -rf node_modules  # Clear dependencies
npm install          # Reinstall dependencies
```

## 📱 Testing Checklist

Before going live, test:

- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Chrome Android)
- [ ] Tablet
- [ ] All links working
- [ ] Forms submitting
- [ ] Images loading
- [ ] Responsive on all screens
- [ ] WhatsApp button working
- [ ] Navigation smooth scrolling

## 🚀 Deploy (Quick)

### Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Manual Deploy

```bash
# Build
npm run build

# Upload .next folder to server
# Configure web server (nginx/apache)
```

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styles not updating
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

1. **Customize Content**: Update semua text dan images
2. **Add Real Data**: Ganti placeholder dengan data asli
3. **Setup Analytics**: Add Google Analytics
4. **Configure SEO**: Update metadata
5. **Test Everything**: Test di berbagai devices
6. **Deploy**: Deploy ke production
7. **Monitor**: Setup monitoring dan analytics

## 🎯 Quick Wins

### Immediate Improvements

1. **Add Real Images**
   - Replace placeholder images
   - Optimize images (use WebP)
   - Add alt text

2. **Update Copy**
   - Write compelling headlines
   - Add clear CTAs
   - Proofread all text

3. **Configure Contact Form**
   - Setup email service
   - Add form validation
   - Test submissions

4. **SEO Basics**
   - Update page title
   - Add meta description
   - Submit sitemap to Google

## 💡 Pro Tips

1. **Use Environment Variables**
   ```bash
   # Create .env.local
   NEXT_PUBLIC_SITE_URL=https://kreativlabs.id
   ```

2. **Optimize Images**
   ```tsx
   // Use Next.js Image component
   import Image from "next/image";
   <Image src="/image.jpg" width={800} height={600} alt="..." />
   ```

3. **Monitor Performance**
   - Use Lighthouse
   - Check PageSpeed Insights
   - Monitor Core Web Vitals

4. **Keep Dependencies Updated**
   ```bash
   npm outdated
   npm update
   ```

## 📞 Need Help?

- 📖 Read full docs: `README.md`
- 🎨 Customization: `CUSTOMIZATION.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 📁 Structure: `PROJECT_STRUCTURE.md`
- 📧 Email: hello@kreativlabs.id

## ✅ Launch Checklist

Before launching:

- [ ] All content updated
- [ ] Contact info correct
- [ ] Images optimized
- [ ] Forms working
- [ ] Mobile responsive
- [ ] SEO configured
- [ ] Analytics setup
- [ ] SSL certificate
- [ ] Domain configured
- [ ] Backup created
- [ ] Performance tested
- [ ] Cross-browser tested

---

**Ready to launch? 🚀**

```bash
npm run build
npm start
```

Good luck with your website! 🎉
