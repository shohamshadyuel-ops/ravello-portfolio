# Deployment Guide - Shoham CRM Portfolio

This guide will walk you through deploying your portfolio website to Vercel, step by step.

## Prerequisites

Before you begin:
- ✅ Project is working locally (`npm run dev`)
- ✅ You have a GitHub account
- ✅ You have your Resend API key ready (`RESEND_API_KEY`)

## Step 1: Create GitHub Repository

### 1.1 Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `shoham-crm-portfolio` (or your preferred name)
3. Set as **Private** (recommended for client work)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### 1.2 Push Your Code to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio website"

# Add GitHub as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/shoham-crm-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Verify:** Go to your GitHub repository URL and confirm all files are there.

## Step 2: Deploy to Vercel

### 2.1 Sign Up / Login to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project

1. On Vercel dashboard, click "Add New..." → "Project"
2. Find your `shoham-crm-portfolio` repository
3. Click "Import"

### 2.3 Configure Project Settings

Vercel will auto-detect Next.js. Confirm these settings:

- **Framework Preset:** Next.js
- **Root Directory:** ./
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**Don't click Deploy yet!** We need to add environment variables first.

### 2.4 Add Environment Variables

Click "Environment Variables" section and add:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |
| `NEXT_PUBLIC_WHATSAPP_URL` | `https://wa.me/972504242641` | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | (leave empty for now) | - |

**Important Notes:**
- Select all three environments (Production, Preview, Development) for each variable
- We'll update `NEXT_PUBLIC_SITE_URL` after deployment

### 2.5 Deploy!

1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. You'll see "Congratulations!" when done

## Step 3: Configure Production URL

### 3.1 Get Your Vercel URL

After deployment, Vercel gives you a URL like:
```
https://shoham-crm-portfolio-abc123.vercel.app
```

### 3.2 Update Environment Variable

1. In Vercel dashboard, go to Settings → Environment Variables
2. Find `NEXT_PUBLIC_SITE_URL`
3. Click "Edit"
4. Set value to your Vercel URL
5. Save

### 3.3 Redeploy

1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Wait for completion

## Step 4: Test Everything

### 4.1 Visit Your Live Site

Open your Vercel URL in a browser and check:

- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Projects page displays all projects
- ✅ Individual project pages work
- ✅ About, Pricing, and Contact pages load
- ✅ 3D animations are smooth (if enabled)
- ✅ No console errors (press F12)

### 4.2 Test Contact Form

1. Go to `/contact` page
2. Fill out the form with test data
3. Submit
4. Check for success message
5. **Important:** Confirm you received the email

### 4.3 Test on Mobile

1. Open site on your phone
2. Check responsiveness
3. Test form submission
4. Verify WhatsApp link works

## Step 5: Custom Domain (Optional)

### 5.1 Purchase Domain

Buy a domain from:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

Recommended: `shoham-crm.com` or `shohaememanuel.com`

### 5.2 Add Domain to Vercel

1. In Vercel project, go to Settings → Domains
2. Click "Add"
3. Enter your domain
4. Vercel will show DNS records to add

### 5.3 Configure DNS

Go to your domain registrar and add these records:

**For root domain (example.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 5.4 Verify Domain

1. Wait 5-60 minutes for DNS to propagate
2. Vercel will automatically verify
3. SSL certificate is generated automatically

### 5.5 Update Environment Variable

1. Go to Settings → Environment Variables
2. Update `NEXT_PUBLIC_SITE_URL` to your custom domain
3. Redeploy

## Step 6: Verify Contact Form Email (Resend)

### 6.1 Check Environment Variables

1. Vercel dashboard → Settings → Environment Variables
2. Confirm `RESEND_API_KEY` is set (Production, Preview, Development)

### 6.2 Send a Test Message

1. Go to your live site's contact page
2. Submit a test message
3. Confirm you received the email at `shohamsdesign@gmail.com`

### 6.3 Check Vercel Logs (if issues)

1. Vercel dashboard → Deployments → Latest
2. Click on deployment
3. Go to "Functions" tab
4. Click on `/api/contact`
5. Check logs for errors

## Troubleshooting

### Build Fails on Vercel

**Check build logs:**
1. Go to failed deployment
2. Review build logs
3. Common issues:
   - TypeScript errors: Fix in code
   - Missing dependencies: Run `npm install` locally
   - Environment variable issues: Check Settings

### Form Doesn't Submit

**Check browser console (F12):**
- Network tab shows 4xx/5xx error?
- Check API route logs in Vercel

**Verify environment variables:**
- Are they set in Production environment?
- Did you redeploy after adding them?

### 3D Scene Not Loading

This is normal on some devices:
- Automatically disabled on low-power devices
- Check browser console for WebGL errors
- Consider disabling for mobile in production

## Ongoing Maintenance

### Updating Content

1. Edit files locally (e.g., `content/projects.ts`)
2. Test locally: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update project content"
   git push
   ```
4. Vercel automatically deploys the update

### Updating Code

Same process as updating content. Vercel automatically rebuilds on every push to `main` branch.

### Monitoring

Check Vercel Analytics dashboard:
- Page views
- Response times
- Error rates
- Function logs

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Keep `RESEND_API_KEY` private** - Only in environment variables
3. **Use environment variables** for all sensitive data
4. **Enable Vercel's DDoS protection** - In Settings
5. **Monitor function logs** - Check for suspicious activity

## Performance Optimization

1. **Optimize images** - Use WebP format
2. **Enable Vercel Image Optimization** - Automatic
3. **Review Core Web Vitals** - In Vercel Analytics
4. **Consider CDN** - Vercel Edge Network (automatic)

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **GitHub Issues**: Create in your repository
- **Vercel Support**: support@vercel.com

## Quick Reference

**Deploy new changes:**
```bash
git add .
git commit -m "Your message"
git push
```

**Vercel redeploy via CLI:**
```bash
vercel --prod
```

**View production logs:**
```bash
vercel logs [deployment-url] --follow
```

## Checklist

Before going live:

- [ ] All content is updated and accurate
- [ ] Environment variables are set in Vercel
- [ ] Contact email sending tested and working
- [ ] Form submission tested on live site
- [ ] Mobile responsiveness verified
- [ ] All pages load without errors
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active
- [ ] Analytics tracking set up
- [ ] Contact information is correct
- [ ] WhatsApp link tested
- [ ] Project images optimized
- [ ] SEO meta tags verified

---

🎉 **Congratulations!** Your portfolio is now live and ready to capture leads.
