export interface TechItem {
  name: string;
  description: string;
  optional?: boolean;
}

export interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    title: "Desktop App",
    description: "Core desktop application framework and data layer.",
    items: [
      { name: "Python", description: "Core application language" },
      { name: "PySide6", description: "Qt for Python desktop UI framework" },
      { name: "QtWebEngine", description: "Chromium-based web rendering for charts" },
      { name: "DuckDB", description: "Embedded analytical database for market data" },
      { name: "Markdown Reports", description: "Structured research report rendering" },
    ],
  },
  {
    title: "Market & Indicators",
    description: "Market data pipeline and technical analysis engine.",
    items: [
      { name: "yfinance", description: "Market data provider" },
      { name: "pandas", description: "Data manipulation and analysis" },
      { name: "numpy", description: "Numerical computing foundation" },
      { name: "pandas-ta", description: "Technical indicator library" },
      { name: "ta", description: "Additional technical analysis" },
      { name: "vectorbt", description: "Vectorized backtesting", optional: true },
      { name: "QuantStats", description: "Performance analytics", optional: true },
    ],
  },
  {
    title: "AI & Reports",
    description: "AI integration layer and research report generation.",
    items: [
      { name: "TradingAgents", description: "Multi-agent AI research framework" },
      { name: "LLM Provider Layer", description: "Multi-model AI backend abstraction" },
      { name: "Pydantic", description: "Structured output validation" },
      { name: "Jinja2", description: "Report template engine" },
      { name: "Research Sanitizer", description: "Ensures research-only output" },
    ],
  },
  {
    title: "Future Charting",
    description: "Planned charting library upgrades for professional visualization.",
    items: [
      { name: "TradingView Lightweight Charts", description: "Professional charting library" },
      { name: "pylightweight-charts", description: "Python bindings for TradingView charts" },
      { name: "Plotly", description: "Interactive visualization library" },
      { name: "PyQtGraph", description: "Fast scientific graphics for Qt" },
    ],
  },
];
