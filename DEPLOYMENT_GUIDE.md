# Deployment Guide for Adamjee Government Science College Website

## Favicon Configuration
The favicon has been configured in `app/layout.tsx` with multiple sizes:
- `/favicon-16x16.png` (16x16 pixels)
- `/favicon-32x32.png` (32x32 pixels)
- `/apple-touch-icon.png` (180x180 pixels)

These are automatically picked up by browsers and mobile devices.

## Deployment to Vercel

### Prerequisites
- A GitHub/GitLab/Bitbucket account with the repository
- A Vercel account (free tier available)

### Steps for Deployment

1. **Prepare the Repository**
   - Ensure all changes are committed to your Git repository
   - Make sure the `package.json` and `package-lock.json` (or `pnpm-lock.yaml`) are up to date

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect it's a Next.js project
   - Configure build settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build` (or `pnpm run build`)
     - Install Command: `npm install` (or `pnpm install`)
     - Output Directory: Leave blank (for Next.js 13+ with App Router)

3. **Environment Variables (if any)**
   - If you have any environment variables, add them in the Environment Variables section

4. **Deploy**
   - Click "Deploy" and Vercel will build and deploy your site
   - You'll get a unique URL like `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to your project settings
   - Navigate to "Domains" section
   - Add your custom domain (e.g., `agsckarachi.edu.pk`)

## Additional Deployment Notes

### Images
- All images are stored in the `public/images` directory
- The main logo is at `public/images/agsc.png`
- Background images like `public/images/agscpics.jpg` are used in the hero section

### Fonts
- Google Fonts used: Geist, Geist_Mono, Playfair_Display, Cinzel, Inter
- These are preloaded and optimized for performance

### Analytics
- Vercel Analytics is integrated (`@vercel/analytics/next`)
- Enabled in `app/layout.tsx`

### Facebook Integration
- Facebook SDK is loaded asynchronously in the layout
- Facebook timeline plugin is implemented in the news section

## Optimization Features
- Next.js 13+ App Router for optimal performance
- Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Image optimization with `next/image`
- Responsive design with Tailwind CSS
- Framer Motion animations optimized for production

## Post-Deployment Checklist
- [ ] Verify favicon appears in browser tabs
- [ ] Check that all images load properly
- [ ] Test responsive design on mobile devices
- [ ] Verify Facebook timeline plugin works
- [ ] Confirm all navigation links work
- [ ] Test contact form functionality (if implemented)
- [ ] Verify analytics tracking is working

## Troubleshooting
- If favicons don't appear, clear browser cache or try incognito mode
- For image loading issues, check that images are in the correct public directory
- If Facebook plugin doesn't load, verify the URL and Facebook app settings

## Maintaining the Site
- Update news items in the `newsItems` array in `app/page.tsx`
- Modify contact information in the contact section of `app/page.tsx`
- Update academic programs in the academics section of `app/page.tsx`
- Adjust SECCAP cutoff marks in the admissions section as needed