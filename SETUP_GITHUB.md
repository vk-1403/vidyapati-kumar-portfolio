# GitHub Setup Instructions

Follow these exact steps to deploy your portfolio to GitHub Pages with your username `vk-1403`.

## 🎯 Step-by-Step Setup

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in with your account `vk-1403`
2. Click the green **"New"** button or the **"+"** icon → **"New repository"**
3. Fill in the repository details:
   - **Repository name**: `vidyapati-kumar-portfolio`
   - **Description**: `Professional academic portfolio showcasing PhD research in AI-enhanced prosthetics`
   - **Visibility**: ✅ **Public** (required for GitHub Pages)
   - **Initialize**: ❌ Don't check any boxes (we have our files ready)
4. Click **"Create repository"**

### 2. Initialize Git and Push Code

Copy and paste these commands one by one in your terminal:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Vidyapati Kumar Portfolio Website"

# Add your GitHub repository as remote
git remote add origin https://github.com/vk-1403/vidyapati-kumar-portfolio.git

# Set main branch and push
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository: `https://github.com/vk-1403/vidyapati-kumar-portfolio`
2. Click **"Settings"** tab (at the top of the repository)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"** from the dropdown
5. The page will refresh and show that GitHub Actions is configured

### 4. Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow called **"Deploy Portfolio to GitHub Pages"** running
3. Wait for it to complete (usually 2-5 minutes)
4. Once it shows a green checkmark ✅, your site is deployed!

### 5. Access Your Live Website

Your portfolio will be available at:
```
https://vk-1403.github.io/vidyapati-kumar-portfolio
```

## 🔍 Verify Everything Works

After deployment, check these features:

- ✅ Website loads properly
- ✅ Navigation works (smooth scrolling between sections)
- ✅ All sections display correctly (About, Education, Research, Publications, etc.)
- ✅ CV download works (click "Download PDF" in footer)
- ✅ Contact form displays properly
- ✅ Website is responsive on mobile devices

## 🐛 Troubleshooting

### If the repository creation fails:
- Make sure you're logged into the correct account (`vk-1403`)
- Check that the repository name doesn't already exist
- Ensure you have enough repository quota

### If git commands fail:
- Make sure Git is installed on your system
- Verify you're in the correct project directory
- Check your internet connection

### If deployment fails:
- Go to Actions tab and check the error logs
- Make sure the repository is public
- Verify all files were committed and pushed

### If website doesn't load:
- Wait 5-10 minutes for propagation
- Try opening in incognito/private mode
- Check the Actions tab for successful deployment

## 🎉 Success!

Once deployed, you'll have:

- ✅ Professional portfolio website live on the internet
- ✅ Automatic updates when you push changes to `main` branch
- ✅ Mobile-responsive design
- ✅ Downloadable CV
- ✅ Contact form
- ✅ SEO-optimized for search engines

Your website URL: `https://vk-1403.github.io/vidyapati-kumar-portfolio`

## 📱 Updated Social Media Links

Your portfolio now includes working links to:
- ✅ **Google Scholar**: https://scholar.google.com/citations?user=thYJjvAAAAAJ&hl=en&oi=ao
- ✅ **LinkedIn**: https://in.linkedin.com/in/vidyapati-kumar-37332251  
- ✅ **ResearchGate**: https://www.researchgate.net/profile/Vidyapati-Kumar
- ✅ **Email**: vidyapatikumar.me@gmail.com

## 📱 Share Your Portfolio

Use this URL to share your portfolio with:
- Potential postdoc supervisors
- Academic institutions
- Research collaborators
- Professional networks
- LinkedIn profile
- Email signatures

---

**Need help?** All files are ready for deployment. Just follow the steps above!