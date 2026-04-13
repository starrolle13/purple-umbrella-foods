# Purple Umbrella Foods - Website & Brand Assets

A modern, premium meal prep company website for **Purple Umbrella Foods (PUF)**, founded by **Chef Don Anthony** in 2020.

## Overview

This is a **frontend-only, Netlify-deployable website** built with **React 19**, **TypeScript**, and **Tailwind CSS 4**. The design follows a **Luxe Minimalist** aesthetic with deep purple, brushed gold accents, and elegant serif typography.

**Tagline:** *"Nourishing healthy lives from head to soul."*

## Design System

### Color Palette
- **Primary:** Deep Purple (#4b0082) - Premium, trustworthy, wellness-focused
- **Accent:** Brushed Gold (#daa520) - Luxury, craftsmanship, elegance
- **Neutral:** Off-white (#faf8f5), Charcoal (#282828)

### Typography
- **Headlines:** Playfair Display (serif, bold) - Sophisticated and elegant
- **Body:** Lato (sans-serif, regular) - Clean, readable, approachable

### Key Design Elements
- Generous whitespace and asymmetric layouts
- Thin gold dividers between sections
- Premium card designs with subtle shadows
- Smooth hover transitions and interactions
- Mobile-first responsive design

## Website Sections

### 1. Navigation & Header
- Sticky navigation with logo and quick links
- "Book Now" CTA button in header
- Mobile-responsive menu

### 2. Hero Section
- Premium headline with tagline
- Call-to-action buttons ("Book Your Meals", "View Plans")
- High-quality meal imagery with gradient overlay
- Supporting subheadline

### 3. Meet the Owner
- Chef Don Anthony's photo
- Compelling founder story (30+ years of culinary experience)
- Personal mission statement
- Warm, approachable tone

### 4. Meal Plans Section
Five distinct meal plan categories:
- **High-Protein:** $95+/week
- **Vegan:** $95+/week
- **Keto:** $95+/week
- **Southern Healthy:** $95+/week
- **College Kids:** $60/week

Each plan includes sample meals and direct booking CTA.

### 5. Pricing Section
Clear pricing table with:
- Standard Weekly Plan: $95+/week
- Monthly Plan Discount: $75/week (full month commitment)
- College Student Plan: $60/week
- Sunday Dinner Add-On: $60+/week
- Cheat Day Items: $10 (monthly) / $15 (weekly)

### 6. Add-Ons Section
Marketing cards for:
- Desserts
- Cheat Day Items
- Flavored Popcorn
- Sunday Dinners

### 7. How It Works
Step-by-step process:
1. Book through Calendly
2. Chef Don confirms booking
3. Receive meals on Tuesday or Thursday
4. Enjoy and renew

**Important Details:**
- Delivery days: Tuesday & Thursday
- Last booking day: Saturday
- Private catering: 1 week advance notice required
- Preorders available

### 8. FAQ Section
Expandable FAQ with 7 common questions covering:
- Ordering process
- Delivery schedule
- Meal plan options
- Catering services
- Preorder availability

### 9. Contact Section
Three contact cards:
- **Email:** purpleumbrellafoods@gmail.com
- **Phone:** 803-380-3187
- **Book Now:** Direct Calendly link

### 10. Footer
- Logo and tagline
- Quick navigation links
- Contact information
- Social media placeholders
- Copyright notice

## Booking Integration

**All CTA buttons route to:** https://calendly.com/purpleumbrellafoods/chef

This is a frontend-only implementation. Customers book through Calendly, and Chef Don personally confirms each booking.

## Branded Assets Included

### Banners
- **Hero Banner:** Premium meal presentation with tagline (16:9)
- **Meal Plans Banner:** All five meal options showcase (16:9)
- **Catering Banner:** Elegant family dinner scene (16:9)

### Postcards
- **General Promotion:** Business card design (4:3)
- **College Student Plan:** Student-focused offer (4:3)

### Email Signature
- Professional horizontal layout with logo, contact info, and tagline
- Suitable for Chef Don Anthony's email communications

### Favicon & Branding
- Purple umbrella icon with gold accents
- 1:1 square format for browser tabs and bookmarks
- Recognizable at small sizes (16x16, 32x32, 64x64px)

## Project Structure

```
purple-umbrella-foods/
├── client/
│   ├── public/
│   │   └── (favicon and small config files only)
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/ (shadcn/ui components)
│   │   ├── pages/
│   │   │   ├── Home.tsx (main landing page)
│   │   │   └── NotFound.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css (global styles & design tokens)
│   └── index.html
├── server/
│   └── index.ts (Express server for production)
├── package.json
└── README.md
```

## Development

### Prerequisites
- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation
```bash
cd purple-umbrella-foods
pnpm install
```

### Development Server
```bash
pnpm dev
```
Server runs on `http://localhost:3000`

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## Deployment

### Netlify Deployment
This is a **static frontend application** and is ready for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Deploy!

The site will be live and fully functional with all Calendly integrations working.

## Key Features

✅ **Mobile-Responsive Design** - Optimized for all screen sizes
✅ **Fast Performance** - Static site, minimal JavaScript
✅ **SEO-Friendly** - Semantic HTML, meta tags, proper structure
✅ **Accessibility** - Keyboard navigation, focus states, alt text
✅ **Premium Aesthetic** - Luxe Minimalist design system
✅ **Calendly Integration** - All CTAs route to booking calendar
✅ **No Backend Required** - Frontend-only, Netlify-ready
✅ **Brand Consistency** - Unified color palette and typography

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Optimized images with CDN delivery
- Lazy loading for images
- Minimal CSS and JavaScript
- Static site generation
- Fast page load times

## Content Updates

To update content on the website, edit:
- **Home page content:** `/client/src/pages/Home.tsx`
- **Global styles:** `/client/src/index.css`
- **Typography/colors:** Update CSS variables in `index.css`

## Contact & Support

**Business Contact:**
- Email: purpleumbrellafoods@gmail.com
- Phone: 803-380-3187
- Booking: https://calendly.com/purpleumbrellafoods/chef

**Founded:** 2020
**Founder:** Chef Don Anthony

## License

© 2020-2026 Purple Umbrella Foods. All rights reserved.

---

**Built with:** React 19 • TypeScript • Tailwind CSS 4 • shadcn/ui • Vite
**Deployed on:** Netlify
**Design:** Luxe Minimalist (Deep Purple + Brushed Gold)
