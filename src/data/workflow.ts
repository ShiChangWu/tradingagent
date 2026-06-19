export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: "market-data",
    title: "Market Data",
    description:
      "Real-time and historical market data ingested through yfinance and processed into structured candle services for downstream analysis.",
    icon: "Database",
  },
  {
    id: "candle-service",
    title: "Candle Service",
    description:
      "OHLCV candle data normalized across timeframes with volume profiles, pre-market/post-market filtering, and gap detection.",
    icon: "CandlestickChart",
  },
  {
    id: "indicator-engine",
    title: "Indicator Engine",
    description:
      "Technical indicator computation engine powered by pandas-ta. Generates RSI, MACD, Bollinger Bands, moving averages, and custom indicators.",
    icon: "TrendingUp",
  },
  {
    id: "rule-engine",
    title: "Rule Engine",
    description:
      "Rule-based snapshot generation detecting technical patterns, indicator crossovers, support/resistance levels, and volatility events.",
    icon: "Zap",
  },
  {
    id: "tactical-modules",
    title: "Tactical Modules",
    description:
      "Specialized research modules for grid planning, options analysis, strategy suggestions, and portfolio risk interpretation.",
    icon: "Grid3X3",
  },
  {
    id: "ai-committee",
    title: "AI Investment Committee",
    description:
      "Multiple AI analyst perspectives aggregated into a committee view with consensus scoring, dissent tracking, and risk-weighted recommendations.",
    icon: "Users",
  },
  {
    id: "research-report",
    title: "Final Research Report",
    description:
      "Comprehensive structured report synthesizing all upstream analysis into a single document with charts, signals, and risk assessment.",
    icon: "FileText",
  },
];
