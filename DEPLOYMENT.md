# Deployment Guide - KreativLabs.id

Panduan lengkap untuk deploy website KreativLabs.id ke berbagai platform.

## 📋 Prerequisites

- Node.js 18.x atau lebih tinggi
- npm atau yarn
- Git

## 🚀 Deploy ke Vercel (Recommended)

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

### Langkah-langkah:

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Import repository Anda
   - Klik "Deploy"

3. **Configure Domain**
   - Setelah deploy, pergi ke Settings > Domains
   - Tambahkan domain custom `kreativlabs.id`
   - Update DNS records sesuai instruksi Vercel

### Environment Variables (Vercel)

Tambahkan di Vercel Dashboard > Settings > Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://kreativlabs.id
NEXT_PUBLIC_CONTACT_EMAIL=hello@kreativlabs.id
```

## 🌐 Deploy ke Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

## 🐳 Deploy dengan Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build & Run**
   ```bash
   docker build -t kreativlabs .
   docker run -p 3000:3000 kreativlabs
   ```

## 📊 Performance Optimization

### Before Deploy:

1. **Optimize Images**
   - Gunakan format WebP
   - Compress images
   - Lazy loading

2. **Code Splitting**
   - Sudah otomatis dengan Next.js
   - Dynamic imports untuk komponen besar

3. **Caching**
   - Configure headers di `next.config.ts`

### After Deploy:

1. **Monitor Performance**
   - Google PageSpeed Insights
   - Lighthouse
   - Vercel Analytics

2. **SEO Check**
   - Google Search Console
   - Submit sitemap

## 🔒 Security Checklist

- [ ] Update dependencies
- [ ] Configure CORS
- [ ] Add security headers
- [ ] Enable HTTPS
- [ ] Configure CSP (Content Security Policy)

## 📱 Testing

```bash
# Local production build
npm run build
npm start

# Test on different devices
# - Desktop (Chrome, Firefox, Safari)
# - Mobile (iOS Safari, Chrome Android)
# - Tablet
```

## 🔄 CI/CD

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
```

## 📞 Support

Jika ada masalah saat deployment, hubungi:
- Email: hello@kreativlabs.id
- GitHub Issues: [repository-url]/issues

## 📝 Notes

- Pastikan semua environment variables sudah di-set
- Test di local production mode sebelum deploy
- Backup database (jika ada) sebelum deploy
- Monitor error logs setelah deploy
