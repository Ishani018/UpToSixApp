# Images Folder

Place your images here with the following names:

## Required Images:

1. **uptosix-logo.jpg**
   - Used in: Navbar component (components/Navbar.tsx)
   - Recommended size: 64x64px or larger (will be scaled automatically)
   - Description: UptoSix Kids logo with swan
   - Current status: ✅ Using uptosix-logo.jpg

2. **apple-logo.png** (or .jpg, .svg)
   - Used in: Home page - "Download on App Store" button
   - Recommended size: 24x24px (will be scaled to 24x24px)
   - Description: Apple logo for App Store button
   - Current status: Using apple-logo-placeholder.svg

3. **app-phonics.jpg**
   - Used in: Home page - "Try the UptoSix Apps FREE!" section
   - Recommended size: 128x128px or larger (will be scaled to 112-128px)
   - Description: UptoSix Phonics app icon
   - Current status: Using app-phonics-placeholder.svg

4. **app-phonics-plus.jpg**
   - Used in: Home page - "Try the UptoSix Apps FREE!" section
   - Recommended size: 128x128px or larger
   - Description: UptoSix Phonics PLUS app icon
   - Current status: Using app-phonics-plus-placeholder.svg

5. **app-letter-formation.jpg**
   - Used in: Home page - "Try the UptoSix Apps FREE!" section
   - Recommended size: 128x128px or larger
   - Description: UptoSix Letter Formation app icon
   - Current status: Using app-letter-formation-placeholder.svg

6. **app-spell-board.jpg**
   - Used in: Home page - "Try the UptoSix Apps FREE!" section
   - Recommended size: 128x128px or larger
   - Description: UptoSix Spell Board app icon
   - Current status: Using app-spell-board-placeholder.svg

## How to add your real images:

1. Download your app icon images
2. Rename them to match the filenames above (keep the extension: .png, .jpg, .svg, etc.)
3. Place them in this `public/images/` folder
4. Update `app/page.tsx` to replace the placeholder paths:
   - Apple logo: Change `src="/images/apple-logo-placeholder.svg"` to `src="/images/apple-logo.png"` (or .jpg/.svg)
   - App icons: Change `src="/images/app-phonics-placeholder.svg"` to `src="/images/app-phonics.jpg"`
   - Repeat for all 4 app icons (app-phonics-plus.jpg, app-letter-formation.jpg, app-spell-board.jpg)

## Current Placeholders:

- `placeholder-logo.svg` - Simple blue placeholder (not currently used)
- `apple-logo-placeholder.svg` - Black square with white Apple logo silhouette
- `app-phonics-placeholder.svg` - Pink/magenta placeholder with book emoji
- `app-phonics-plus-placeholder.svg` - Blue placeholder with rocket emoji
- `app-letter-formation-placeholder.svg` - Cyan placeholder with letter 'a'
- `app-spell-board-placeholder.svg` - Blue gradient placeholder with cat emoji

Note: All images in the `public` folder are accessible via `/images/filename.ext` in your code.
