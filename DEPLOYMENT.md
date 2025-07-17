# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages using your GitHub username `vk-1403`.

## 🚀 Quick Start

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in with your `vk-1403` account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `vidyapati-kumar-portfolio`
4. Make sure it's set to **Public** (required for GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (we already have these files)
6. Click "Create repository"

### Step 2: Push Your Code

1. **Initialize Git in your project** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Add your GitHub repository as remote**:
   ```bash
   git remote add origin https://github.com/vk-1403/vidyapati-kumar-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/vk-1403/vidyapati-kumar-portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment workflow will automatically trigger

### Step 4: Access Your Website

Your website will be available at:
```
https://vk-1403.github.io/vidyapati-kumar-portfolio
```

## ⚙️ Automatic Deployment

The website uses GitHub Actions for automatic deployment:

- **Trigger**: Every push to the `main` branch
- **Build**: Automatically builds the React application
- **Deploy**: Deploys to GitHub Pages
- **URL**: `https://vk-1403.github.io/vidyapati-kumar-portfolio`

## 📁 Repository Structure

Your repository should contain:

```
vidyapati-kumar-portfolio/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── client/                         # Frontend React application
├── server/                         # Backend (not used for GitHub Pages)
├── shared/                         # Shared TypeScript schemas
├── attached_assets/               # Static assets
├── README.md                      # Project documentation
├── LICENSE                        # MIT License
├── CNAME                         # Custom domain configuration
└── package.json                  # Project dependencies
```

## 🔧 Troubleshooting

### If deployment fails:

1. **Check Actions tab**: Go to your repository → Actions tab to see build logs
2. **Common issues**:
   - Make sure repository is public
   - Verify all files are committed and pushed
   - Check that the workflow file is in `.github/workflows/deploy.yml`

### If website doesn't load:

1. **Wait 5-10 minutes**: Initial deployment can take some time
2. **Check Pages settings**: Ensure GitHub Pages is enabled and source is set to "GitHub Actions"
3. **Try incognito mode**: Browser cache might show old content

### If CV download doesn't work:

1. Make sure `CV_VK_DS_1752654302993.pdf` is in the `client/public/` directory
2. The file will be accessible at: `https://vk-1403.github.io/vidyapati-kumar-portfolio/CV_VK_DS_1752654302993.pdf`

## 🎯 Next Steps

1. **Custom Domain** (Optional):
   - If you want a custom domain like `vidyapatikumar.com`
   - Update the CNAME file with your domain
   - Configure DNS settings with your domain provider

2. **SEO Optimization**:
   - Add meta tags for better search engine visibility
   - Submit to Google Search Console
   - Add structured data markup

3. **Analytics** (Optional):
   - Add Google Analytics to track visitors
   - Monitor website performance

## 📞 Support

If you encounter any issues:

1. Check the GitHub Actions logs first
2. Verify all files are properly committed
3. Ensure repository is public
4. Wait for DNS propagation (can take up to 24 hours for custom domains)

---

**Your portfolio will be live at**: `https://vk-1403.github.io/vidyapati-kumar-portfolio`