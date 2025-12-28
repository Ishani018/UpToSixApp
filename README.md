# UptoSix Kids - Website Redesign

A modern, responsive educational website built with Next.js 14+ for UptoSix Kids, showcasing phonics and language learning applications for children. The platform features interactive showcases, animated components, and a clean, accessible design optimized for parents and educators.

## Technology Stack

### Core Framework
- **Next.js 14+** (App Router) - React framework with server-side rendering, static site generation, and API routes
- **React 18+** - UI library with Server Components by default
- **TypeScript** - Type-safe JavaScript for better developer experience and code reliability

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Shadcn/UI** - Component library built on Radix UI primitives
- **Lucide React** - Icon library with consistent design language
- **Framer Motion** - Animation library for smooth, performant transitions and interactions

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Tailwind integration

## Project Architecture

### Directory Structure

```
uptosix-redesign/
├── app/                          # Next.js App Router directory
│   ├── about-us/
│   │   └── page.tsx             # About Us page with interactive app showcase
│   ├── privacy-policy-2/
│   │   └── page.tsx             # Privacy policy documentation
│   ├── sahaj-bangla/
│   │   └── page.tsx             # Sahaj Bangla app landing page
│   ├── terms-conditions/
│   │   └── page.tsx             # Terms and conditions documentation
│   ├── layout.tsx               # Root layout with global providers and Navbar
│   ├── page.tsx                 # Home page with hero, showcases, and sections
│   └── globals.css              # Global styles and Tailwind directives
├── components/                   # Reusable React components
│   ├── AnimatedBackground.tsx   # Parallax blob background component
│   ├── AppShowcase.tsx          # Phone mockup with screenshot carousel
│   ├── FAQ.tsx                  # Frequently Asked Questions accordion component
│   ├── Footer.tsx               # Site-wide footer component
│   ├── IPadShowcase.tsx         # iPad mockup with screenshot carousel
│   ├── Navbar.tsx               # Responsive navigation component
│   ├── Testimonials.tsx         # Testimonials carousel component
│   └── VideoGallery.tsx         # Video gallery section component
├── public/                       # Static assets
│   └── images/                  # Image assets organized by category
│       ├── about/               # About page images
│       ├── app-icons/           # App icon images
│       ├── logos/               # Brand logos
│       ├── people/              # Team/people photos
│       ├── screenshots/         # App screenshots
│       │   ├── ipad/           # iPad screenshots
│       │   ├── iphone/         # iPhone screenshots
│       │   └── sahaj-bangla/   # Sahaj Bangla screenshots
│       └── source-material/     # Source material images (Tagore, Vidyasagar)
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Project dependencies and scripts
```

## Component Architecture

### Page Components

#### Home Page (`app/page.tsx`)
Server Component that serves as the main landing page. Features include:
- Hero section with animated background
- App showcase section with phone mockup
- iPad showcase section
- Testimonials carousel
- FAQ accordion
- Contact/Get in Touch section
- Footer integration

#### About Us Page (`app/about-us/page.tsx`)
Client Component (`'use client'`) featuring:
- Collage hero section with animated GIF background
- Interactive app showcase with tab-based navigation
- Framer Motion animations for smooth transitions
- Responsive iPad mockups for each app
- App descriptions with feature highlights

#### Sahaj Bangla Page (`app/sahaj-bangla/page.tsx`)
Client Component for dedicated app landing page:
- Hero section with Bengali typography
- Voiceover spotlight section
- App showcase with iPad mockup carousel
- Source material sections (Tagore and Vidyasagar) with images
- Wave dividers for visual separation
- Color-coded sections (indigo and orange themes)

### Reusable Components

#### AnimatedBackground (`components/AnimatedBackground.tsx`)
Creates floating blob background with mouse parallax effect:
- Uses Framer Motion for smooth animations
- Responds to mouse movement for interactive parallax
- Lightweight and performant with CSS gradients
- Reusable across multiple pages

#### AppShowcase (`components/AppShowcase.tsx`)
Phone mockup component displaying app screenshots:
- Landscape orientation phone frame
- Screenshot carousel with navigation buttons
- Dot indicators for current image
- Framer Motion transitions between images
- Responsive sizing for mobile and desktop

#### IPadShowcase (`components/IPadShowcase.tsx`)
iPad mockup component with similar functionality:
- Landscape iPad frame design
- Screenshot carousel functionality
- Smooth image transitions
- Responsive design

#### Navbar (`components/Navbar.tsx`)
Responsive navigation bar:
- Desktop horizontal navigation
- Mobile hamburger menu
- Active link highlighting
- Smooth scroll behavior
- Logo integration

#### Footer (`components/Footer.tsx`)
Site-wide footer component:
- Link sections (About, Privacy Policy, Terms)
- Contact information display
- Social media icons with external links
- Copyright information
- Responsive grid layout

#### FAQ (`components/FAQ.tsx`)
Frequently Asked Questions accordion component:
- Expandable/collapsible question sections
- Smooth animations for accordion interactions
- Organized question and answer pairs

#### Testimonials (`components/Testimonials.tsx`)
Testimonials carousel component:
- Auto-scrolling testimonial cards
- Smooth transitions between testimonials
- Star rating display
- Author information and dates

#### VideoGallery (`components/VideoGallery.tsx`)
Video gallery section component:
- Video embed display
- Responsive video containers
- Video organization and presentation

## Styling Approach

### Tailwind CSS Configuration
- Custom color palette for brand consistency
- Responsive breakpoints (mobile-first approach)
- Custom utilities for specific design needs
- Integration with PostCSS for optimization

### Design System
- **Color Palette**: Indigo, orange, blue gradients for primary actions; soft grays for text
- **Typography**: Sans-serif fonts with clear hierarchy (headings, body, captions)
- **Spacing**: Consistent spacing scale using Tailwind's spacing utilities
- **Borders**: Rounded corners (`rounded-xl`, `rounded-2xl`) for modern feel
- **Shadows**: Layered shadows for depth and elevation

### Responsive Design Strategy
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Flexible grid layouts that stack on mobile
- Image optimization with Next.js Image component
- Touch-friendly interactive elements on mobile

## Image Management

### Image Organization
Images are organized into logical folders within `public/images/`:
- `about/` - About page specific images and GIFs
- `app-icons/` - Application icon images (square format)
- `logos/` - Brand logos (UptoSix, Apple, etc.)
- `people/` - Team member and voice artist photos
- `screenshots/ipad/` - iPad app screenshots (PNG format)
- `screenshots/iphone/` - iPhone app screenshots (PNG format)
- `screenshots/sahaj-bangla/` - Sahaj Bangla specific screenshots
- `source-material/` - Historical/educational source images

### Image Optimization
- All images use Next.js `Image` component for automatic optimization
- Lazy loading by default (except above-fold images with `priority` prop)
- Responsive `sizes` attribute for proper image sizing
- `object-contain` or `object-cover` based on design requirements
- `unoptimized` prop used where needed for development/testing

## Animation Strategy

### Framer Motion Implementation
- **Page Transitions**: Smooth fade-in and slide animations on scroll
- **Interactive Elements**: Hover effects, click animations
- **Parallax Effects**: Mouse-tracking parallax for background elements
- **Carousel Animations**: Smooth transitions between carousel items
- **Scroll Animations**: `useInView` hook for triggering animations on scroll

### Performance Considerations
- Animations use hardware-accelerated CSS transforms
- `will-change` properties where appropriate
- Reduced motion support for accessibility
- Lightweight animation configurations

## State Management

### Local Component State
- React `useState` for simple component state (carousel indices, menu toggles)
- React `useRef` for DOM references and scroll detection
- No global state management library (state is component-local or lifted as needed)

### Client Component Boundaries
- Server Components by default for better performance
- `'use client'` directive only where needed (interactivity, hooks, animations)
- Clear separation between server and client components

## Routing Structure

### App Router Pages
- `/` - Home page
- `/about-us` - About Us page with app showcase
- `/sahaj-bangla` - Sahaj Bangla app landing page
- `/privacy-policy-2` - Privacy policy documentation
- `/terms-conditions` - Terms and conditions documentation

### Navigation
- All routes are accessible via Navbar links
- Footer contains links to key pages
- Internal links use Next.js `Link` component for client-side navigation

## Development Workflow

### Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
```bash
npm run dev
```
   Opens at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

### Development Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Code Style & Conventions

### TypeScript Guidelines
- Strict type checking enabled
- Interface definitions for component props
- Type inference where appropriate
- No `any` types unless absolutely necessary

### Component Patterns
- Functional components with hooks
- Props destructuring for cleaner code
- Conditional rendering with logical operators
- Fragment usage to avoid unnecessary DOM nodes

### Naming Conventions
- Components: PascalCase (e.g., `AppShowcase.tsx`)
- Files: kebab-case or PascalCase matching component name
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: Tailwind utility classes (no custom CSS files)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers
- Graceful degradation for unsupported features

## Performance Optimizations

- Next.js Image optimization for all images
- Code splitting via Next.js App Router
- Server Components for reduced JavaScript bundle
- Lazy loading of below-fold content
- Optimized animation performance with Framer Motion
- Minimal JavaScript for initial page load

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for modals and menus
- Alt text for all images
- Color contrast compliance
- Screen reader compatibility

## Content Management

### Adding New Apps
To add a new app to the About Us showcase, update `app/about-us/page.tsx`:

```typescript
const appsData = [
  {
    id: 'new-app',
    name: 'New App Name',
    subtitle: 'Age Range',
    description: 'Detailed description...',
    features: ['Feature 1', 'Feature 2'],
    icon: '/images/app-icons/new-app-icon.jpeg',
    screenshots: [
      '/images/screenshots/ipad/new-app-1.PNG',
      // ... more screenshots
    ]
  },
  // ... existing apps
];
```

### Updating Images
1. Place images in appropriate subdirectory within `public/images/`
2. Reference using absolute path from `public/` (e.g., `/images/category/filename.ext`)
3. Use Next.js `Image` component with proper `width`, `height`, and `alt` attributes
4. Add `priority` prop for above-fold images

### Modifying Footer Links
Edit `components/Footer.tsx` to update footer links and contact information.

## Dependencies

### Production Dependencies
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM renderer
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - CSS framework
- `typescript` - TypeScript compiler

### Development Dependencies
- `@types/node` - Node.js type definitions
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `eslint` - Code linting
- `eslint-config-next` - Next.js ESLint configuration
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixing

## Configuration Files

### `next.config.js`
Next.js configuration including:
- Image domain allowlists (if using external images)
- Environment variables
- Build optimizations

### `tailwind.config.ts`
Tailwind CSS configuration:
- Content paths for class scanning
- Custom theme extensions
- Plugin configurations

### `tsconfig.json`
TypeScript compiler options:
- Path aliases (`@/` for root directory)
- Strict type checking
- Module resolution settings

## Deployment

The application is built for deployment on platforms supporting Node.js:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

Build output includes:
- Optimized static assets
- Server-side rendering capabilities
- API routes (if used)
- Image optimization cache

## Contributing

When contributing to this project:
1. Follow existing code style and conventions
2. Use TypeScript for all new files
3. Ensure responsive design works on mobile devices
4. Test animations and interactions
5. Update documentation for significant changes
6. Run linting before committing

## License

Copyright © 2025 UptoSix Kids Private Limited. All rights reserved.

## Contact

For technical questions or support:
- Email: Dev@uptosix.co.in
- Website: https://uptosix.co.in
