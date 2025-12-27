# UptoSix Kids - Website Redesign

A modern, responsive website for UptoSix Kids - educational apps for children focused on synthetic phonics and language learning.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI (Radix UI primitives)
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language:** TypeScript

## 📁 Project Structure

```
uptosix-redesign/
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About Us page with interactive app showcase
│   ├── privacy-policy-2/  # Privacy Policy page
│   ├── sahaj-bangla/      # Sahaj Bangla app landing page
│   ├── terms-conditions/  # Terms and Conditions page
│   ├── layout.tsx         # Root layout with Navbar
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── AnimatedBackground.tsx  # Floating blob background with parallax
│   ├── AppShowcase.tsx    # Phone mockup with app screenshots
│   ├── Footer.tsx         # Site-wide footer component
│   └── IPadShowcase.tsx   # iPad mockup component
└── public/
    └── images/            # Static images and assets
```

## ✨ Features

### Pages
- **Home Page** - Hero section, app showcase (phone/iPad), testimonials, FAQ, Get in Touch section
- **About Us** - Interactive app showcase with tab navigation, colorful "phonics" text, app descriptions
- **Sahaj Bangla** - Dedicated landing page for Bengali learning app with narration spotlight, feature cards, and iPad showcase
- **Privacy Policy** - Comprehensive privacy policy documentation
- **Terms & Conditions** - Terms and conditions page

### Key Components
- **AnimatedBackground** - Floating blob background with mouse parallax effect
- **AppShowcase** - Landscape phone mockup with app screenshots carousel
- **IPadShowcase** - iPad mockup with app screenshots carousel
- **Footer** - Site-wide footer with social links and contact information
- **Navbar** - Responsive navigation with mobile menu

## 🎨 Design Principles

- **Vibe:** Playful, trustworthy, clean, and accessible
- **Color Palette:** Soft whites, vibrant primary colors (blues, oranges, greens), dark slate for text
- **Typography:** Readable sans-serif fonts with bold, friendly headings
- **Layouts:** Heavy use of whitespace, rounded corners, Bento Grid style layouts
- **Responsiveness:** Mobile-first approach with responsive grids

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Apps Covered

- **UptoSix Phonics** - Foundation app for beginners
- **UptoSix Phonics PLUS** - Advanced app with complex rules
- **UptoSix Letter Formation** - Letter and number formation
- **UptoSix Spell Board** - Spelling-focused app
- **Sahaj Bangla** - Bengali language learning app

## 🎯 Key Features

- Interactive iPad showcase with 3D parallax effects
- Animated backgrounds with mouse tracking
- Responsive design for all devices
- SEO-friendly with proper metadata
- Accessible UI components
- Smooth scroll animations
- Image optimization with Next.js Image

## 📝 Content Management

### Adding New Apps
To add a new app to the timeline, edit `app/about-us/page.tsx` and add to the `appsData` array:

```typescript
{
  name: 'App Name',
  description: 'App description',
  icon: '/images/app-icon.jpg',
  screenshot: '/images/app-screenshot.jpg',
  color: 'from-color-400 to-color-600'
}
```

### Updating Images
Place images in `public/images/` and reference them as `/images/filename.ext`

## 🔗 Important Links

- Home: `/`
- About Us: `/about-us`
- Sahaj Bangla: `/sahaj-bangla`
- Privacy Policy: `/privacy-policy-2`
- Terms & Conditions: `/terms-conditions`

## 📧 Contact

For questions or support, contact: **Dev@uptosix.co.in**

## 📄 License

Copyright © 2025 UptoSix Kids Private Limited. All rights reserved.
