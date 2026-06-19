export interface UIShowcaseCard {
  id: string;
  title: string;
  description: string;
  accent: "blue" | "green" | "yellow" | "red";
  previewLines: string[];
}

export const uiShowcaseCards: UIShowcaseCard[] = [
  {
    id: "watchlist",
    title: "Watchlist & Positions",
    description:
      "Multi-column watchlist with real-time snapshot data, position tracking, and quick-access research triggers.",
    accent: "blue",
    previewLines: [
      "AAPL  \u25b4 $198.45  +2.3%  Vol 45.2M",
      "MSFT  \u25b4 $432.18  +1.1%  Vol 22.1M",
      "NVDA  \u25be $875.30  -0.8%  Vol 38.7M",
      "TSLA  \u25b4 $248.90  +3.2%  Vol 55.3M",
      "SPY   \u25b4 $547.20  +0.5%  Vol 12.4M",
    ],
  },
  {
    id: "chart",
    title: "Chart Center",
    description:
      "Professional candlestick charts with volume profiles, indicator overlays, and multi-timeframe analysis.",
    accent: "green",
    previewLines: [
      "\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
      "\u2502   \u2588\u2584\u2584 \u2584\u2588\u2580 \u2588\u2584\u2584 \u2584\u2588\u2580 \u2588\u2584\u2584 \u2584\u2588\u2580      \u2502",
      "\u2502   \u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588      \u2502",
      "\u2502   \u2580\u2588\u2580 \u2580\u2580\u2580 \u2580\u2588\u2580 \u2580\u2580\u2580 \u2580\u2588\u2580 \u2580\u2580\u2580      \u2502",
      "\u2502\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2582\u2502",
    ],
  },
  {
    id: "ai-summary",
    title: "AI Analysis Summary",
    description:
      "Concise AI-generated research summary with key findings, risk scores, and tactical observations.",
    accent: "yellow",
    previewLines: [
      "\u250c\u2500 AI Research Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
      "\u2502 Risk Score: 6.2/10  Moderate  \u2502",
      "\u2502 Bias: Bullish (0.72 conf)     \u2502",
      "\u2502 Key: Above 50MA, RSI 58       \u2502",
      "\u2502 Note: Volume confirming trend \u2502",
      "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
    ],
  },
  {
    id: "strategy",
    title: "Strategy Suggestions",
    description:
      "Research signal feed with strategy suggestions, pattern detections, and risk-adjusted insights.",
    accent: "red",
    previewLines: [
      "[RSRCH] AAPL: Bull flag on 4H",
      "[RSRCH] MSFT: Support bounce $430",
      "[ALERT] NVDA: High IV percentile",
      "[RSRCH] SPY: VWAP reclaim level",
      "[RSRCH] TSLA: Breakout above $245",
    ],
  },
  {
    id: "report",
    title: "Research Report",
    description:
      "Comprehensive multi-module research report with embedded charts, analysis, and structured findings.",
    accent: "blue",
    previewLines: [
      "\u250c\u2500 Research Report \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510",
      "\u2502 Section 1: Market Overview    \u2502",
      "\u2502 Section 2: Technical Analysis \u2502",
      "\u2502 Section 3: AI Committee View  \u2502",
      "\u2502 Section 4: Risk Assessment    \u2502",
      "\u2502 Section 5: Research Signals   \u2502",
      "\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518",
    ],
  },
];
