# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Go to Netlify**
   - Visit [https://www.netlify.com/](https://www.netlify.com/)
   - Sign up or log in

3. **Create a new site**
   - Click "New site from Git"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

4. **Configure build settings**
   - Netlify will auto-detect:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

5. **Wait for deployment**
   - Netlify will build and deploy your site
   - You'll get a URL like: `https://random-name-123456.netlify.app`

6. **Customize your domain (Optional)**
   - Go to Site settings > Domain management
   - Click "Add custom domain" or "Options" > "Change site name"
   - Change to: `v-shirt` (or your preferred name)
   - Your site will be available at: `https://v-shirt.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   # Follow the prompts:
   # - Create & configure a new site
   # - Team: Select your team
   # - Site name: v-shirt (or your preferred name)
   # - Build command: npm run build
   # - Directory to deploy: dist
   ```

4. **Deploy to production**
   ```bash
   netlify deploy --prod
   ```

## Build Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects (all routes redirect to `index.html`)

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## Continuous Deployment

Netlify automatically deploys when you push to your main branch:
- Push to `main` → Auto-deploy to production
- Push to other branches → Preview deployments

## Troubleshooting

### Build Fails
- Check Node.js version (requires 20.19+ or 22.12+)
- Verify all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### 404 Errors on Routes
- Ensure `netlify.toml` has the redirect rule
- Verify `dist` folder contains `index.html`

### Images Not Loading
- Check image URLs (using Unsplash/Pexels)
- Verify external image URLs are accessible

## Support

For issues or questions:
- Check Netlify docs: [https://docs.netlify.com/](https://docs.netlify.com/)
- Check build logs in Netlify dashboard
- Review README.md for project setup

