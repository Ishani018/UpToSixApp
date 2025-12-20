# UptoSix Kids - Educational Apps Website

A modern, interactive landing page for UptoSix Kids educational apps, built with Next.js 16, React 19, and Tailwind CSS v4. This website showcases phonics learning apps designed for children, featuring smooth animations, responsive design, and an engaging user experience.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components Documentation](#components-documentation)
- [Image Assets](#image-assets)
- [Styling & Design](#styling--design)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

UptoSix Kids is an educational technology company that creates phonics learning apps for children. This website serves as the main landing page, showcasing the apps, features, testimonials, and providing download links for iOS and Android platforms.

**Key Goals:**
- Showcase educational apps with interactive demos
- Provide clear call-to-actions for app downloads
- Build trust through testimonials and social proof
- Create an engaging, kid-friendly design

## 🛠 Tech Stack

### Core Technologies
- **Next.js 16.1.0** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework

### Key Dependencies
- **framer-motion 12.23.26** - Animation library for smooth transitions
- **lucide-react 0.562.0** - Icon library
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 3.4.0** - Merge Tailwind classes

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## ✨ Features

### 🎨 Visual Features
- **Animated Blob Background** - Dynamic, mouse-responsive background animations in the Hero section
- **Wave Dividers** - Smooth transitions between sections using SVG waves
- **Slideshow Showcases** - Interactive phone and iPad mockups with screenshot slideshows
- **Gamified App Cards** - Hover effects with scale and rotation animations
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes

### 🎯 Interactive Components
- **Video Gallery** - YouTube video integration with modal playback
- **Interactive FAQ** - Accordion-style FAQ with smooth animations
- **Testimonials** - Real App Store reviews displayed in an engaging grid
- **App Showcases** - Phone and iPad mockups with navigation controls

### 📱 User Experience
- **Sticky Navigation** - Blur effect navbar that stays visible while scrolling
- **Smooth Scrolling** - Framer Motion animations on scroll
- **Mobile Menu** - Responsive hamburger menu with auto-close functionality
- **External Links** - Proper handling of App Store and Google Play links

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ishani018/UpToSixApp.git
   cd uptosix-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
uptosix-redesign/
├── app/
│   ├── layout.tsx          # Root layout with global Navbar
│   ├── page.tsx           # Main landing page
│   ├── globals.css        # Global styles and Tailwind imports
│   └── favicon.ico        # Site favicon
├── components/
│   ├── Navbar.tsx         # Navigation bar component
│   ├── AppShowcase.tsx    # Phone mockup with screenshots
│   ├── IPadShowcase.tsx   # iPad mockup with screenshots
│   ├── VideoGallery.tsx   # YouTube video gallery with modal
│   ├── Testimonials.tsx   # Customer reviews section
│   ├── FAQ.tsx            # Frequently asked questions
│   ├── InteractivePhonicsDemo.tsx  # Interactive sound board (unused)
│   └── AboutPage.tsx      # About page component
├── public/
│   └── images/            # All image assets
│       ├── uptosix-logo.jpg
│       ├── app-phonics.jpeg
│       ├── app-phonics-plus.jpeg
│       ├── app-letter-formation.jpeg
│       ├── app-spell-board.jpeg
│       ├── apple-logo.jpg
│       ├── example.jpg     # Phone screenshots
│       ├── example1.jpg
│       ├── example2.jpg
│       ├── example3.jpg
│       ├── ipad-example1.jpg  # iPad screenshots
│       ├── ipad-example2.jpg
│       ├── ipad-example3.jpg
│       └── ipad-example4.jpg
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🧩 Components Documentation

### Navbar (`components/Navbar.tsx`)

**Purpose:** Global navigation bar with mobile menu

**Features:**
- Sticky positioning with blur effect
- Mobile hamburger menu
- Auto-closes on link click
- Logo and navigation links

**Props:** None (uses Next.js routing)

**Usage:**
```tsx
<Navbar />
```

---

### AppShowcase (`components/AppShowcase.tsx`)

**Purpose:** Displays app screenshots in a phone mockup with slideshow

**Features:**
- CSS-only phone mockup design
- Slideshow with 4 screenshots
- Navigation arrows and dot indicators
- Floating badges ("No Ads", "100% Safe")
- Pink/purple gradient background

**Screenshots Array:**
```tsx
const screenshots = [
  '/images/example.jpg',
  '/images/example1.jpg',
  '/images/example2.jpg',
  '/images/example3.jpg',
];
```

**State:**
- `currentIndex` - Tracks current screenshot

**Animations:**
- Slide-up on scroll (Framer Motion)
- Fade transitions between screenshots
- Floating badge animations

---

### IPadShowcase (`components/IPadShowcase.tsx`)

**Purpose:** Displays app screenshots in an iPad mockup (landscape orientation)

**Features:**
- Landscape iPad mockup
- Slideshow functionality
- Text content on left, iPad on right
- Light blue gradient background

**Screenshots Array:**
```tsx
const screenshots = [
  '/images/ipad-example1.jpg',
  '/images/ipad-example2.jpg',
  '/images/ipad-example3.jpg',
  '/images/ipad-example4.jpg',
];
```

---

### VideoGallery (`components/VideoGallery.tsx`)

**Purpose:** Displays YouTube videos in a grid with modal playback

**Features:**
- 4-column grid on desktop, 1-column on mobile
- YouTube thumbnail images
- Modal overlay for video playback
- Play icon overlay on thumbnails
- Dark blue/indigo background

**Video IDs:**
```tsx
const videos = [
  { id: 'r5p8Z9FETKk', title: 'What is UptoSix Phonics?' },
  { id: 'GBYtLQqCpuc', title: 'Blending & Segmenting' },
  { id: 'vovWOyxb-ZE', title: 'Letter Formation Demo' },
  { id: 'm8ZzhS_hIEo', title: 'Phonics PLUS Overview' },
];
```

**State:**
- `selectedVideo` - Currently playing video ID

---

### Testimonials (`components/Testimonials.tsx`)

**Purpose:** Displays customer reviews from App Store

**Features:**
- 3-column grid on desktop
- Real App Store reviews with dates
- Playful card design with rotation
- Fade-in animations on scroll

**Testimonials Data:**
- Author name
- Review text
- Date
- Rotation angle for visual interest

---

### FAQ (`components/FAQ.tsx`)

**Purpose:** Interactive accordion-style FAQ section

**Features:**
- Two-column layout on desktop
- Smooth expand/collapse animations
- 12 questions and answers
- Click to toggle individual items

**Questions Covered:**
- Age recommendations
- Subscription model
- Offline functionality
- App features
- Safety and privacy

---

### Main Page (`app/page.tsx`)

**Purpose:** Main landing page with all sections

**Sections (in order):**
1. **Hero Section** - Main headline, CTA buttons, animated blobs
2. **Try Apps FREE** - App icon cards with download links
3. **Video Gallery** - YouTube videos
4. **App Showcase** - Phone mockup
5. **IPad Showcase** - iPad mockup
6. **Testimonials** - Customer reviews
7. **View All Apps Button** - Link to Google Play developer page
8. **FAQ** - Frequently asked questions
9. **About Company** - Company information
10. **Vision/Mission/Philosophy** - Three-column cards
11. **Contact** - Contact information

**Special Features:**
- Mouse parallax effect on blob animations (desktop only)
- Wave divider between Hero and Try Apps sections
- Gamified app cards with hover effects

---

## 🖼 Image Assets

### Required Images

All images should be placed in `public/images/` directory.

#### Logo & Branding
- `uptosix-logo.jpg` - Main logo (used in Navbar)
- `apple-logo.jpg` - Apple logo for App Store button

#### App Icons
- `app-phonics.jpeg` - UptoSix Phonics app icon
- `app-phonics-plus.jpeg` - UptoSix Phonics PLUS app icon
- `app-letter-formation.jpeg` - Letter Formation app icon
- `app-spell-board.jpeg` - Spell Board app icon

#### Phone Screenshots (AppShowcase)
- `example.jpg` - Screenshot 1
- `example1.jpg` - Screenshot 2
- `example2.jpg` - Screenshot 3
- `example3.jpg` - Screenshot 4

#### iPad Screenshots (IPadShowcase)
- `ipad-example1.jpg` - iPad screenshot 1
- `ipad-example2.jpg` - iPad screenshot 2
- `ipad-example3.jpg` - iPad screenshot 3
- `ipad-example4.jpg` - iPad screenshot 4

### Image Optimization

- Next.js automatically optimizes images using the `Image` component
- Images are lazy-loaded by default
- Use `unoptimized` prop for screenshots that change frequently

## 🎨 Styling & Design

### Color Palette

**Primary Colors:**
- Pink: `bg-pink-400`, `bg-pink-600` (brand color)
- Purple: `bg-purple-400`, `bg-purple-600` (brand color)
- Blue: `bg-blue-400`, `bg-blue-600` (accent)
- Orange: `bg-orange-400`, `bg-orange-500` (accent)
- Green: `bg-green-400`, `bg-green-500` (accent)

**Backgrounds:**
- Hero: White with animated blobs
- App Showcase: Pink to purple gradient
- IPad Showcase: Light blue gradient
- Video Gallery: Dark blue/indigo gradient
- Try Apps: Slate-50 (light gray)

### Typography

- **Headings:** Bold, large sizes (text-4xl to text-6xl)
- **Body:** Regular weight, readable sizes (text-lg to text-xl)
- **Font Family:** System default (sans-serif)

### Animations

**Framer Motion Usage:**
- Scroll-triggered animations (`useInView`)
- Hover effects (`whileHover`)
- Page transitions (`AnimatePresence`)
- Continuous animations (blobs, floating badges)

**Animation Patterns:**
- Fade in from bottom on scroll
- Scale and rotate on hover
- Smooth transitions between states

### Responsive Breakpoints

- **Mobile:** Default (< 768px)
- **Tablet:** `md:` (≥ 768px)
- **Desktop:** `lg:` (≥ 1024px)

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**
   - Vercel automatically deploys on every push to main
   - Custom domain can be added in settings

### Manual Build

```bash
npm run build
npm run start
```

### Environment Variables

Currently, no environment variables are required. If you need to add:
1. Create `.env.local` file
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Access via `process.env.NEXT_PUBLIC_API_URL`

## 🔧 Configuration

### Next.js Config (`next.config.ts`)

Currently using default configuration. Can be extended for:
- Image domains
- Redirects
- Headers
- Environment variables

### Tailwind Config

Using Tailwind CSS v4 with PostCSS. Configuration is in `postcss.config.mjs`.

**Note:** Tailwind v4 uses `bg-linear-to-*` instead of `bg-gradient-to-*`.

### TypeScript Config (`tsconfig.json`)

- Strict mode enabled
- Path aliases configured (`@/` for root directory)
- React JSX support

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in `public/images/`
- Ensure file extensions match (`.jpg` vs `.jpeg`)
- Clear Next.js cache: `rm -rf .next`

**Animations not working:**
- Ensure `framer-motion` is installed
- Check browser console for errors
- Verify `'use client'` directive in components

**Styles not applying:**
- Check Tailwind classes are correct
- Verify `globals.css` imports Tailwind
- Clear browser cache

**Build errors:**
- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct

## 📝 Contributing

### Development Workflow

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test on multiple screen sizes

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind utility classes
- Keep components focused and reusable
- Add `'use client'` for interactive components

### Adding New Components

1. Create component in `components/` directory
2. Export as default
3. Import in `app/page.tsx` or other components
4. Add to this README documentation

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### External Links
- **App Store:** [UptoSix Phonics](https://apps.apple.com/in/app/uptosix-phonics/id1617850099)
- **Google Play:** [UptoSix Developer Page](https://play.google.com/store/apps/dev?id=9044915143269037579&hl=en_IN)
- **Worksheets:** [Teachers Pay Teachers](https://www.teacherspayteachers.com/store/uptosix-kids)

## 📄 License

This project is private and proprietary to UptoSix Kids Private Limited.

## 👥 Team

- **Development:** UptoSix Kids Development Team
- **Design:** UptoSix Kids Design Team
- **Content:** UptoSix Kids Content Team

## 📞 Contact

- **Email:** dev@uptosix.co.in
- **Location:** Whitefield, Bangalore
- **Website:** [uptosix.co.in](https://uptosix.co.in)

---

**Last Updated:** January 2025

**Version:** 0.1.0

**Status:** Active Development
