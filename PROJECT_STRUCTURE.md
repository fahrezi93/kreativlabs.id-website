# Project Structure - KreativLabs.id

Dokumentasi lengkap struktur folder dan file dalam project ini.

## 📁 Struktur Folder

```
kreativlabsid/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind
│   ├── layout.tsx               # Root layout dengan metadata
│   ├── loading.tsx              # Loading state
│   ├── page.tsx                 # Homepage
│   └── sitemap.ts               # SEO sitemap
│
├── components/                   # React Components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Projects.tsx        # Projects showcase
│   │   ├── About.tsx           # About us
│   │   ├── Services.tsx        # Services offered
│   │   ├── Pricing.tsx         # Pricing plans
│   │   ├── Principles.tsx      # Engineering principles
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   │
│   ├── AnimatedSection.tsx      # Scroll animation wrapper
│   ├── BackToTop.tsx           # Back to top button
│   └── Navbar.tsx              # Navigation bar
│
├── lib/                         # Utility functions
│   └── utils.ts                # Helper utilities
│
├── public/                      # Static assets
│   ├── robots.txt              # SEO robots file
│   └── [images/]               # Image assets
│
├── .env.example                 # Environment variables template
├── .gitignore                  # Git ignore rules
├── components.json             # shadcn/ui config
├── CUSTOMIZATION.md            # Customization guide
├── DEPLOYMENT.md               # Deployment guide
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS configuration
├── PROJECT_STRUCTURE.md        # This file
├── README.md                   # Project overview
└── tsconfig.json               # TypeScript configuration
```

## 📄 File Descriptions

### Core Files

#### `app/layout.tsx`
- Root layout component
- Font configuration (Plus Jakarta Sans)
- Metadata untuk SEO
- Global HTML structure

#### `app/page.tsx`
- Homepage component
- Mengintegrasikan semua sections
- Main entry point

#### `app/globals.css`
- Tailwind CSS imports
- CSS variables untuk theming
- Custom utilities
- Base styles

### Components

#### Navigation
- **Navbar.tsx**: Fixed navigation dengan scroll effect
- **BackToTop.tsx**: Floating button untuk scroll ke atas

#### Sections (Urutan di homepage)
1. **Hero.tsx**: Landing section dengan CTA
2. **Projects.tsx**: Portfolio showcase
3. **About.tsx**: Company information
4. **Services.tsx**: Services grid
5. **Pricing.tsx**: Pricing plans
6. **Principles.tsx**: Engineering principles
7. **Testimonials.tsx**: Client reviews
8. **Contact.tsx**: Contact form
9. **Footer.tsx**: Footer dengan links

#### UI Components (shadcn/ui)
- **button.tsx**: Reusable button component
- **card.tsx**: Card container
- **input.tsx**: Form input
- **textarea.tsx**: Form textarea

### Configuration Files

#### `next.config.ts`
```typescript
// Next.js configuration
// - Image optimization
// - Redirects
// - Headers
```

#### `components.json`
```json
// shadcn/ui configuration
// - Style preferences
// - Component aliases
// - Tailwind config path
```

#### `tsconfig.json`
```json
// TypeScript configuration
// - Compiler options
// - Path aliases (@/*)
// - Include/exclude rules
```

## 🎨 Styling System

### Color Palette
```css
Primary Blue: #3B82F6 (59 130 246)
Background: #0A192F (10 25 47)
Card Background: #0F1E37 (15 30 55)
White: #FFFFFF (255 255 255)
```

### Spacing Scale
- Base unit: 4px (Tailwind default)
- Container max-width: 1280px
- Section padding: py-24 (96px)

### Typography
- Font Family: Plus Jakarta Sans
- Weights: 300, 400, 500, 600, 700, 800
- Base size: 16px

## 🔧 Key Features

### Performance
- ✅ Next.js 16 with App Router
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Font optimization

### SEO
- ✅ Metadata configuration
- ✅ Sitemap generation
- ✅ robots.txt
- ✅ Open Graph tags
- ✅ Semantic HTML

### UX
- ✅ Smooth scroll
- ✅ Responsive design
- ✅ Loading states
- ✅ Hover effects
- ✅ Scroll animations

### Accessibility
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators

## 📦 Dependencies

### Production
- **next**: React framework
- **react**: UI library
- **lucide-react**: Icon library
- **tailwind-merge**: Utility for merging Tailwind classes
- **class-variance-authority**: Component variants
- **@radix-ui/react-slot**: Primitive components

### Development
- **typescript**: Type safety
- **tailwindcss**: Utility-first CSS
- **eslint**: Code linting
- **@tailwindcss/postcss**: Tailwind PostCSS plugin

## 🚀 Development Workflow

### 1. Local Development
```bash
npm run dev
```
- Hot reload enabled
- Development mode
- Port: 3000

### 2. Build
```bash
npm run build
```
- Production optimization
- Static generation
- Bundle analysis

### 3. Production
```bash
npm start
```
- Serve production build
- Optimized performance

### 4. Lint
```bash
npm run lint
```
- Check code quality
- Find potential issues

## 📝 Adding New Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to page in desired order
4. Update navigation if needed

Example:
```tsx
// components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section" className="...">
      {/* Content */}
    </section>
  );
}

// app/page.tsx
import NewSection from "@/components/sections/NewSection";

<NewSection />
```

## 🔍 Code Organization

### Component Structure
```tsx
"use client"; // If using hooks/interactivity

import { ... } from "..."; // Imports

// Constants/Data
const data = [...];

// Component
export default function Component() {
  // State & Effects
  // Handlers
  // Render
}
```

### Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`)
- Files: kebab-case or PascalCase
- CSS classes: Tailwind utilities
- Variables: camelCase

## 💡 Best Practices

1. **Components**: Keep them small and focused
2. **Styling**: Use Tailwind utilities
3. **Images**: Optimize before adding
4. **Performance**: Lazy load when possible
5. **Accessibility**: Always include alt text and ARIA labels
6. **SEO**: Update metadata for each page
7. **Types**: Use TypeScript for type safety

## 🆘 Common Tasks

### Add New Page
```bash
# Create new route
mkdir app/new-page
touch app/new-page/page.tsx
```

### Add New Component
```bash
# Create component
touch components/NewComponent.tsx
```

### Add shadcn Component
```bash
# Add component from shadcn
npx shadcn@latest add [component-name]
```

### Update Dependencies
```bash
# Check outdated
npm outdated

# Update all
npm update

# Update specific
npm install [package]@latest
```

## 📞 Support

Untuk pertanyaan tentang struktur project:
- Email: hello@kreativlabs.id
- Documentation: README.md, CUSTOMIZATION.md, DEPLOYMENT.md
