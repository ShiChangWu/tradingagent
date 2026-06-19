export interface RoadmapPhase {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "planned";
  description: string;
  items: string[];
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "desktop-ui-foundation",
    title: "Desktop App UI Foundation",
    status: "completed",
    description:
      "Core desktop application shell with professional terminal-inspired interface, navigation system, and workspace layout.",
    items: [
      "PySide6 application shell",
      "Dark fintech theme system",
      "Multi-panel workspace layout",
      "Navigation & tab system",
      "Resizable panel architecture",
    ],
  },
  {
    id: "live-research-engine",
    title: "Live Research Engine",
    status: "completed",
    description:
      "Real-time market data pipeline with technical indicators, rule engine, and live snapshot generation for rapid research workflows.",
    items: [
      "yfinance data pipeline",
      "Technical indicator engine (pandas-ta)",
      "Rule-based snapshot system",
      "Multi-timeframe data service",
      "Watchlist & positions panel",
    ],
  },
  {
    id: "professional-chart-upgrade",
    title: "Professional Chart Upgrade",
    status: "in-progress",
    description:
      "Upgrading charts to TradingView Lightweight Charts with professional drawing tools, annotations, and advanced overlay capabilities.",
    items: [
      "TradingView Lightweight Charts",
      "Candlestick & volume profiles",
      "Drawing & annotation tools",
      "Multi-indicator overlay system",
      "Chart template persistence",
    ],
  },
  {
    id: "reports-consistency",
    title: "Reports & Consistency",
    status: "in-progress",
    description:
      "Full research report generation pipeline with structured output, markdown rendering, and consistent formatting across all modules.",
    items: [
      "Structured report templates",
      "Multi-module report synthesis",
      "Markdown & PDF export",
      "Embedded chart rendering",
      "Report version history",
    ],
  },
  {
    id: "advanced-research-modules",
    title: "Advanced Research Modules",
    status: "planned",
    description:
      "Expanded research capabilities including options analysis, grid planning, portfolio risk, and sentiment analysis modules.",
    items: [
      "Options insight module",
      "Grid plan research module",
      "Portfolio risk analytics",
      "Sentiment analysis integration",
      "Custom research module SDK",
    ],
  },
  {
    id: "model-provider-layer",
    title: "Model Provider Layer",
    status: "planned",
    description:
      "Flexible LLM provider architecture supporting multiple AI backends with structured output enforcement and research-only output sanitization.",
    items: [
      "Multi-provider LLM layer",
      "Pydantic structured output",
      "Research-only output sanitizer",
      "Provider fallback & routing",
      "Local model support (Ollama)",
    ],
  },
];
