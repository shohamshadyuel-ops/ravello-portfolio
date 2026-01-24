# Ravello Studio - Custom CRM Portfolio Website

A production-ready, modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a dark luxury futuristic design with 3D elements, smooth animations, and email-based lead capture (Resend).

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Premium Design**: Dark luxury theme with glassmorphism, neon accents, and 3D elements
- **Smooth Animations**: Framer Motion for section reveals and micro-interactions
- **3D Hero Scene**: React Three Fiber for interactive 3D background (performance-optimized)
- **Lead Capture**: Contact form sends email via Resend (with anti-spam protection)
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and fast load times
- **Accessibility**: WCAG compliant with keyboard navigation and reduced motion support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.x or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
  
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

- **Git** (optional, for version control)
  - Download from: https://git-scm.com/

## 🛠️ Installation & Setup

### 1. Install Node.js

**Windows:**
1. Download the installer from https://nodejs.org/
2. Run the installer and follow the prompts
3. Restart your terminal/command prompt
4. Verify: `node --version` and `npm --version`

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from https://nodejs.org/
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Clone or Download Project

**Option A: Using Git**
```bash
git clone <your-repo-url>
cd shoham-crm-portfolio
```

**Option B: Download ZIP**
1. Download the project ZIP file
2. Extract to a folder
3. Open terminal in that folder

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js, React, TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber
- Zod (validation)
- And more...

### 4. Set Up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Open `.env.local` in a text editor and fill in your values:
```env
# Email (Resend)
RESEND_API_KEY=your_resend_api_key

# Public URLs (already configured)
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/972504242641
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important Notes:**
- Never commit `.env.local` to version control (it's in `.gitignore`)

### 5. Run Development Server

```bash
npm run dev
```

The site will be available at: http://localhost:3000

## 🧪 Testing Contact Form

Submit a test message and confirm you receive the email:

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. You'll see a success message
5. Check your inbox for the message

**Testing Anti-Spam Features:**
- Try submitting 6+ times in an hour → Rate limit kicks in
- Fill the hidden honeypot field → Silently rejected

## 📝 Editing Content

### Update Projects

Edit `/content/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    slug: "unique-project-slug",
    title: "Project Title",
    industry: "Industry Name",
    summary: "Brief description...",
    tags: ["Tag1", "Tag2"],
    keyFeatures: ["Feature 1", "Feature 2"],
    integrations: ["Integration 1"],
    automations: ["Automation 1"],
    stack: ["Tech 1", "Tech 2"],
    timeline: "3 months",
    outcomes: ["Outcome 1"],
    confidentialityLevel: "high",
    images: ["/projects/image.jpg"],
    demoPolicy: "Private demo available upon request",
    featured: true, // Shows on homepage
  },
  // Add more projects...
];
```

**Safe Editing Tips:**
- Keep the structure exactly as shown
- Featured projects appear on the homepage
- Images should be placed in `/public/projects/`
- Slug must be URL-safe (lowercase, hyphens only)

### Update Personal Info

**WhatsApp URL:** Edit in `.env.local`

**Bio & Skills:** Edit `/app/about/page.tsx`

**Pricing Tiers:** Edit `/app/pricing/page.tsx`

## 🌐 Deploying to Vercel

### Method 1: Deploy via Vercel Website (Easiest)

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Set Environment Variables**
   - In Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add your variables:
     - `RESEND_API_KEY`: Your Resend API key
     - `NEXT_PUBLIC_WHATSAPP_URL`: Your WhatsApp URL
     - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - Redeploy after adding variables

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts, then add environment variables via the dashboard.

### Method 3: Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Upload the .next and public folders
```

**Your Own Server:**
```bash
npm run build
npm run start
# Runs on port 3000
```

## ✅ Verifying Contact Form Email

1. **Check Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Confirm `RESEND_API_KEY` is set

2. **Test Form Submission**
   - Go to your live site's contact page
   - Submit a test message
   - Confirm you received the email

3. **Check Vercel Logs**
   - Vercel dashboard → Deployments → Latest → Logs
   - Look for `/api/contact` logs if troubleshooting

4. **Common Issues**
   - **Missing env var**: `RESEND_API_KEY` not set in Production
   - **Resend sending error**: Check Resend dashboard/logs

## 🏗️ Project Structure

```
shoham-crm-portfolio/
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/       # Contact form email API route
│   ├── contact/           # Contact page with form
│   ├── pricing/           # Pricing page
│   ├── work/              # Projects portfolio
│   │   └── [slug]/        # Individual project pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── navbar.tsx         # Navigation
│   ├── footer.tsx         # Footer
│   ├── animated-background.tsx
│   ├── three-hero-scene.tsx
│   ├── project-card.tsx
│   └── cta-section.tsx
├── content/
│   └── projects.ts        # Projects data
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── env.ts             # Environment validation
│   └── rate-limit.ts      # Rate limiting
├── public/                # Static assets
├── .env.example           # Environment template
├── .env.local             # Your actual env (DO NOT COMMIT)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## 🔧 Available Scripts

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "hsl(271 91% 65%)",  // Purple
  secondary: "hsl(217 91% 60%)", // Blue
  // ... more colors
}
```

### Fonts

Edit `app/layout.tsx` to change fonts:

```typescript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// Replace with your preferred font
```

### Animations

Adjust animation speeds in `tailwind.config.ts`:

```typescript
animation: {
  "float": "float 6s ease-in-out infinite",
  // Adjust duration and easing
}
```

## 🐛 Troubleshooting

### Build Errors

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build
# Fix any type errors shown
```

### Runtime Errors

**3D scene not loading**
- Check browser console for WebGL errors
- Disable on mobile for performance

**Form not submitting**
- Check browser console for API errors
- Verify `.env.local` is set up correctly
- Check Vercel logs if deployed

### Performance Issues

**Slow page loads**
- Optimize images (use WebP format)
- Reduce 3D scene complexity
- Enable Vercel Image Optimization

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Support

For technical issues:
1. Check the troubleshooting section above
2. Review Vercel deployment logs
3. Contact via WhatsApp: https://wa.me/972504242641

## 🎯 Next Steps

1. ✅ Install Node.js and npm
2. ✅ Clone/download the project
3. ✅ Run `npm install`
4. ✅ Set up `.env.local`
5. ✅ Run `npm run dev` to test locally
6. ✅ Push to GitHub
7. ✅ Deploy to Vercel
8. ✅ Add environment variables in Vercel
9. ✅ Test lead submission on live site
10. ✅ Verify contact email delivery works

## 📊 Production Checklist

Before going live, ensure:

- [ ] All environment variables are set in Vercel
- [ ] `RESEND_API_KEY` is set and email sending works
- [ ] WhatsApp link is correct
- [ ] All project content is updated
- [ ] Contact form has been tested
- [ ] Site is responsive on mobile
- [ ] 3D scene works smoothly
- [ ] No console errors in production
- [ ] Meta tags are set correctly
- [ ] Custom domain is configured (optional)

---

Built with ❤️ by Ravello Studio
