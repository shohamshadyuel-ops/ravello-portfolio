# Quick Start Guide

Get your portfolio running in 5 minutes!

## 1. Install Node.js (if not installed)

**Check if you have Node.js:**
```bash
node --version
```

If you see a version number (18.x or higher), you're good! Skip to step 2.

**Don't have Node.js?**
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Restart your terminal

## 2. Install Dependencies

```bash
npm install
```

This will take 2-3 minutes. Go grab a coffee! ☕

## 3. Set Up Environment

```bash
# Copy the example file
cp .env.example .env.local
```

Open `.env.local` in a text editor and add your Resend API key:
```env
RESEND_API_KEY=your_resend_api_key
```

**Don't have a Resend key yet?** The UI will still work, but form submissions won't be delivered.

## 4. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 5. Test Everything

### Test Navigation
- Click through all pages
- Make sure everything loads

### Test Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. You should see a success message

### Check Console
- Press F12 in browser
- Look for any red errors
- Should be clean!

## Next Steps

### Update Your Content

**Edit Projects:**
Open `content/projects.ts` and modify the project data.

**Edit About Page:**
Open `app/about/page.tsx` and update your bio.

**Change Contact Info:**
Update WhatsApp URL in `.env.local`

### Deploy to Production

Follow the full guide in `DEPLOYMENT.md` for step-by-step instructions.

**Quick deploy:**
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## Common Issues

### "Module not found" error
```bash
rm -rf node_modules
npm install
```

### "Port 3000 is already in use"
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Form not submitting
- Check `.env.local` exists and has correct values
- Check browser console (F12) for errors
- Verify Base44 endpoint is correct

### 3D scene laggy
- Normal on slower computers
- Automatically disabled on mobile
- Can be disabled completely if needed

## Need Help?

1. Check `README.md` for detailed documentation
2. Check `DEPLOYMENT.md` for deployment help
3. Contact via WhatsApp: https://wa.me/972504242641

## Checklist

Before deploying:
- [ ] Site runs locally without errors
- [ ] All pages load correctly
- [ ] Contact form tested
- [ ] Projects updated with your content
- [ ] About page updated
- [ ] `.env.local` configured
- [ ] Base44 integration tested (if available)

---

🚀 You're ready to deploy! See `DEPLOYMENT.md` for full instructions.
