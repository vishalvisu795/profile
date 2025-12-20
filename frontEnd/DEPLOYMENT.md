# Vercel Deployment Guide

## Step-by-Step Instructions to Deploy Frontend to Vercel

### Prerequisites
- GitHub account
- Vercel account (free at https://vercel.com)

---

## Step 1: Push Code to GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd /Users/vishalkumar/Desktop/myprofile
   git init
   ```

2. **Create .gitignore** (if not exists):
   ```bash
   # Already exists in frontEnd/.gitignore
   ```

3. **Add and Commit Files**:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio website with frontend and backend"
   ```

4. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `my-portfolio`)
   - **Don't** initialize with README, .gitignore, or license

5. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

---

## Step 2: Sign Up / Login to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended for easy integration)
4. Authorize Vercel to access your GitHub account

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Import Project**:
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Select your GitHub repository
   - Click **"Import"**

2. **Configure Project**:
   - **Framework Preset**: Vercel should auto-detect "Create React App"
   - **Root Directory**: Click **"Edit"** and set to `frontEnd`
   - **Build Command**: `npm run build` (should be auto-filled)
   - **Output Directory**: `build` (should be auto-filled)
   - **Install Command**: `npm install` (should be auto-filled)

3. **Environment Variables** (Important!):
   - Click **"Environment Variables"**
   - Add variable:
     - **Name**: `REACT_APP_API_URL`
     - **Value**: Your backend URL (e.g., `http://localhost:8000` for now, or your deployed backend URL later)
     - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

4. **Deploy**:
   - Click **"Deploy"** button
   - Wait for deployment to complete (usually 1-2 minutes)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to Frontend Directory**:
   ```bash
   cd frontEnd
   ```

4. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts:
     - Set up and deploy? **Yes**
     - Which scope? Select your account
     - Link to existing project? **No** (first time)
     - Project name? (Press Enter for default)
     - Directory? **./** (current directory)
     - Override settings? **No**

5. **Set Environment Variables**:
   ```bash
   vercel env add REACT_APP_API_URL
   ```
   - Enter your backend URL when prompted
   - Select environments: Production, Preview, Development

6. **Redeploy with Environment Variables**:
   ```bash
   vercel --prod
   ```

---

## Step 4: Verify Deployment

1. After deployment completes, Vercel will provide you with:
   - **Production URL**: `https://your-project.vercel.app`
   - **Preview URLs**: For each commit/branch

2. **Test Your Site**:
   - Visit the production URL
   - Check if all pages load correctly
   - Test the contact form (will work once backend is deployed)

---

## Step 5: Update Backend CORS (After Backend Deployment)

Once you deploy your backend, update the CORS settings in `backend/main.py`:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://your-project.vercel.app"  # Add your Vercel URL here
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## Step 6: Update Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Update `REACT_APP_API_URL` with your deployed backend URL
4. Redeploy the project (Vercel will auto-redeploy or you can trigger manually)

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)

### Environment Variables Not Working
- Make sure variable name starts with `REACT_APP_`
- Redeploy after adding environment variables
- Check Vercel logs for errors

### API Calls Failing
- Verify CORS is configured correctly in backend
- Check backend URL in environment variables
- Ensure backend is deployed and accessible

### Routing Issues (404 on refresh)
- The `vercel.json` file handles this with rewrites
- If issues persist, check the rewrite configuration

---

## Next Steps

After frontend is deployed:
1. Deploy backend to Render/Railway/Fly.io
2. Update `REACT_APP_API_URL` in Vercel with backend URL
3. Update backend CORS to allow Vercel domain
4. Test the complete application

---

## Useful Vercel Features

- **Automatic Deployments**: Every push to main branch auto-deploys
- **Preview Deployments**: Every PR gets a preview URL
- **Custom Domain**: Add your own domain in project settings
- **Analytics**: View site analytics (free tier available)

