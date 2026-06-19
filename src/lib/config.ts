// Site configuration
// GitHub Release URL — created after pushing to GitHub
const GITHUB_USER = "ShiChangWu";
const GITHUB_REPO = "tradingagents-advisor";
const VERSION = "v2.0.0";
const ASSET_NAME = "TradingAgentsAdvisor_Setup_v2.0.0.zip";

export const siteConfig = {
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
    `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/${VERSION}/${ASSET_NAME}`,
  githubUrl: `https://github.com/${GITHUB_USER}/${GITHUB_REPO}`,
  appVersion: "2.0.0",
};
