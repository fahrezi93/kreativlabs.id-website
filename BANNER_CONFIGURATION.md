# Banner Configuration - Multi-Language Support

## Overview
Website sekarang menggunakan 2 banner berbeda berdasarkan bahasa:
- **Indonesia**: `bannerkreativlabsid.png`
- **English**: `bannerkreatiflabsen.png`

## Banner Files Location
```
public/
├── bannerkreativlabsid.png  (614 KB) - Banner Bahasa Indonesia
└── bannerkreatiflabsen.png  (612 KB) - Banner Bahasa Inggris
```

## Configuration Mapping

### 🇮🇩 Indonesian Pages (uses `bannerkreativlabsid.png`)

| Route | File | Banner |
|-------|------|--------|
| `/` | `app/layout.tsx` | `bannerkreativlabsid.png` |
| `/blog` | `app/blog/layout.tsx` | `bannerkreativlabsid.png` |
| `/blog/[slug]` | `app/blog/[slug]/layout.tsx` | `bannerkreativlabsid.png` |

### 🇬🇧 English Pages (uses `bannerkreatiflabsen.png`)

| Route | File | Banner |
|-------|------|--------|
| `/en` | `app/en/layout.tsx` | `bannerkreatiflabsen.png` |
| `/en/blog` | `app/en/blog/layout.tsx` | `bannerkreatiflabsen.png` |
| `/en/blog/[slug]` | `app/en/blog/[slug]/layout.tsx` | `bannerkreatiflabsen.png` |

## Technical Details

### Banner Specifications
- **Dimensions**: 1200 x 630 pixels
- **Format**: PNG
- **Aspect Ratio**: 1.91:1 (optimal for Open Graph)
- **File Size**: ~600 KB each
- **URL Format**: Absolute URLs for social media compatibility

### Meta Tags Structure

#### Indonesian Version
```typescript
openGraph: {
  images: [{
    url: "https://kreativlabs.my.id/bannerkreativlabsid.png",
    width: 1200,
    height: 630,
    alt: "KreativLabs.id - Jasa Website & Desain Grafis Mulai 50rb"
  }]
}
```

#### English Version
```typescript
openGraph: {
  images: [{
    url: "https://kreativlabs.my.id/bannerkreatiflabsen.png",
    width: 1200,
    height: 630,
    alt: "KreativLabs.id - Website & Graphic Design Starting from 50k"
  }]
}
```

## How It Works

### Route-Based Banner Selection
Next.js menggunakan layout hierarchy untuk menentukan metadata:

1. **Root Layout** (`app/layout.tsx`)
   - Default untuk semua halaman Indonesia
   - Banner: `bannerkreativlabsid.png`

2. **EN Layout** (`app/en/layout.tsx`)
   - Override untuk semua halaman `/en/*`
   - Banner: `bannerkreatiflabsen.png`

3. **Nested Layouts**
   - Blog layouts inherit dari parent layout
   - Bisa override banner sesuai kebutuhan

### Metadata Inheritance
```
app/layout.tsx (ID banner)
├── page.tsx → uses ID banner
├── blog/layout.tsx (ID banner)
│   ├── page.tsx → uses ID banner
│   └── [slug]/layout.tsx (ID banner)
│       └── page.tsx → uses ID banner
└── en/layout.tsx (EN banner)
    ├── page.tsx → uses EN banner
    └── blog/layout.tsx (EN banner)
        ├── page.tsx → uses EN banner
        └── [slug]/layout.tsx (EN banner)
            └── page.tsx → uses EN banner
```

## Testing

### Test URLs
After deployment, test these URLs:

**Indonesian:**
- Homepage: `https://kreativlabs.my.id/`
- Blog: `https://kreativlabs.my.id/blog`
- Article: `https://kreativlabs.my.id/blog/tutorial-figma-desain-profesional`

**English:**
- Homepage: `https://kreativlabs.my.id/en`
- Blog: `https://kreativlabs.my.id/en/blog`
- Article: `https://kreativlabs.my.id/en/blog/tutorial-figma-desain-profesional`

### Verification Tools
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **LinkedIn Inspector**: https://www.linkedin.com/post-inspector/
3. **Twitter Validator**: https://cards-dev.twitter.com/validator
4. **Meta Tags Checker**: https://metatags.io/

### Expected Results
- ✅ Indonesian pages show `bannerkreativlabsid.png`
- ✅ English pages show `bannerkreatiflabsen.png`
- ✅ Both banners display correctly on social media
- ✅ Image dimensions: 1200x630
- ✅ Proper alt text in respective language

## Troubleshooting

### Banner Not Showing?
1. **Check file exists**:
   ```
   https://kreativlabs.my.id/bannerkreativlabsid.png
   https://kreativlabs.my.id/bannerkreatiflabsen.png
   ```

2. **Clear social media cache**:
   - Use Facebook Debugger "Scrape Again"
   - Wait 24 hours for natural cache expiry
   - Add query param: `?v=2` to bypass cache

3. **Verify meta tags**:
   - View page source (Ctrl+U)
   - Search for `og:image`
   - Confirm correct banner URL

### Wrong Banner Showing?
1. Check you're on the correct route (`/` vs `/en`)
2. Clear browser cache
3. Verify layout.tsx in correct folder
4. Check metadata inheritance

## Maintenance

### Updating Banners
To update banners:

1. **Replace files** in `public/` folder:
   ```bash
   # Backup old banners
   cp public/bannerkreativlabsid.png public/bannerkreativlabsid.old.png
   cp public/bannerkreatiflabsen.png public/bannerkreatiflabsen.old.png
   
   # Add new banners
   # Make sure filenames match exactly
   ```

2. **Clear social media cache**:
   - Use debugging tools
   - Or rename files and update URLs in layouts

3. **Deploy changes**:
   ```bash
   git add public/
   git commit -m "Update banner images"
   git push
   ```

### Adding New Language
To add a new language (e.g., Japanese):

1. Create new banner: `bannerkreatiflabsjp.png`
2. Create layout: `app/jp/layout.tsx`
3. Set banner URL: `bannerkreatiflabsjp.png`
4. Update this documentation

## Notes

- ✅ All URLs use HTTPS for security
- ✅ Absolute URLs required for social media
- ✅ Banner dimensions optimized for all platforms
- ✅ Alt text localized per language
- ✅ File sizes optimized (<1MB)

---

**Last Updated**: November 11, 2024
**Maintained By**: Development Team
