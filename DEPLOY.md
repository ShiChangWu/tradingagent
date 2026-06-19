# Deploy Instructions

## 1. Deploy Website to Cloudflare Pages

### Option A: Manual Upload (quickest)
1. Go to https://dash.cloudflare.com → Workers & Pages → Create → Pages → Upload assets
2. Drag the `out/` folder to upload
3. Deploy → You'll get `xxx.pages.dev` domain

### Option B: Connect GitHub Repo (auto-deploy on push)
```bash
git add -A
git commit -m "TradingAgents Advisor 2.0 website"
git remote add origin https://github.com/YOUR_USERNAME/tradingagents-advisor.git
git push -u origin main
```
Then in Cloudflare Pages: Create → Connect to Git → Select repo → Deploy

## 2. Host the App Download (GitHub Releases)

The app zip (191MB) is too large for Cloudflare Pages free tier.
Use GitHub Releases instead:

1. Create a GitHub repo (or use the same one)
2. Go to Releases → Create a new release
3. Tag: `v2.0.0`, Title: "TradingAgents Advisor 2.0.0"
4. Attach: `TradingAgentsAdvisor_2.0.0_Windows_Portable.zip`
5. Publish release

Copy the download URL (looks like):
`https://github.com/USER/REPO/releases/download/v2.0.0/TradingAgentsAdvisor_2.0.0_Windows_Portable.zip`

## 3. Update Download Link

In `src/lib/config.ts`, update:
```ts
export const siteConfig = {
  downloadUrl: "https://github.com/USER/REPO/releases/download/v2.0.0/TradingAgentsAdvisor_2.0.0_Windows_Portable.zip",
  // ...
};
```

OR set the env variable before building:
```bash
NEXT_PUBLIC_DOWNLOAD_URL="https://github.com/..." npm run build
```

Then redeploy the `out/` folder.

## 4. User Download Flow

1. User clicks "Download Preview" on the website
2. Downloads the zip from GitHub Releases
3. Extracts and runs `install.bat`
4. Installer copies to `%LOCALAPPDATA%\TradingAgentsAdvisor`, creates shortcuts
5. App launches
