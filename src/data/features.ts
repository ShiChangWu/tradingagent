import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Activity,
  TrendingUp,
  Lightbulb,
  Grid3X3,
  Sparkles,
  Users,
  FileText,
} from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
}

export const features: Feature[] = [
  {
    id: "ai-research-workspace",
    title: "AI Research Workspace",
    description:
      "A unified workspace where AI-powered research modules analyze markets, generate signals, and produce structured reports — all within a single desktop terminal.",
    icon: Brain,
    highlights: [
      "Multi-module research pipeline",
      "AI-driven market analysis",
      "Structured research output",
      "Session persistence",
    ],
  },
  {
    id: "live-market-snapshot",
    title: "Live Market Snapshot",
    description:
      "Real-time market data snapshot with technical indicators, volume profiles, and rule-based alerts. Designed for rapid situational awareness before deeper research.",
    icon: Activity,
    highlights: [
      "Technical indicator panel",
      "Volume & price action",
      "Rule-based snapshot alerts",
      "Multi-timeframe view",
    ],
  },
  {
    id: "chart-center",
    title: "TradingView-Style Chart Center",
    description:
      "Professional-grade interactive charts with candlestick patterns, drawing tools, and overlay indicators. Built for technical analysis workflows.",
    icon: TrendingUp,
    highlights: [
      "Candlestick & line charts",
      "Drawing & annotation tools",
      "Multi-indicator overlays",
      "Timeframe switching",
    ],
  },
  {
    id: "strategy-suggestions",
    title: "Strategy Suggestions",
    description:
      "AI-generated strategy suggestions based on technical patterns, market conditions, and research module outputs. Research signals only — no automated execution.",
    icon: Lightbulb,
    highlights: [
      "Pattern recognition",
      "Rule-based signal generation",
      "Risk-adjusted suggestions",
      "Research-only output",
    ],
  },
  {
    id: "grid-plan-research",
    title: "Grid Plan Research",
    description:
      "Advanced grid-based research module for analyzing price levels, accumulation zones, and distribution patterns. Visualize potential price grids without execution.",
    icon: Grid3X3,
    highlights: [
      "Price level mapping",
      "Grid density analysis",
      "Accumulation zone detection",
      "Visual grid overlay",
    ],
  },
  {
    id: "options-insight",
    title: "Options Insight",
    description:
      "Options market research module providing volatility analysis, Greeks visualization, and options flow interpretation. Research signals for options market awareness.",
    icon: Sparkles,
    highlights: [
      "IV rank & percentile",
      "Greeks analysis panel",
      "Options flow interpretation",
      "Volatility surface research",
    ],
  },
  {
    id: "ai-investment-committee",
    title: "AI Investment Committee",
    description:
      "Multiple AI analyst perspectives aggregated into a committee view. Each AI analyst provides independent research signals with rationale and risk assessment.",
    icon: Users,
    highlights: [
      "Multi-analyst perspectives",
      "Consensus & dissent views",
      "Risk-weighted scoring",
      "Structured debate output",
    ],
  },
  {
    id: "full-research-report",
    title: "Full Research Report",
    description:
      "Comprehensive research report generation combining all modules into a single structured document. Includes charts, analysis, signals, and risk assessment.",
    icon: FileText,
    highlights: [
      "Multi-module synthesis",
      "Markdown & PDF export",
      "Embedded charts & tables",
      "Audit trail & citations",
    ],
  },
];
