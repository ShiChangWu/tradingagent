import type { LucideIcon } from "lucide-react";
import { ShieldBan, FileSearch, ShieldAlert } from "lucide-react";

export interface SafetyCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export const safetyCards: SafetyCard[] = [
  {
    id: "no-execution",
    title: "No Real Order Execution",
    description:
      "TradingAgents Advisor 2.0 does not connect to any broker, exchange, or trading API. It cannot place orders, execute trades, or interact with live markets beyond reading data.",
    icon: ShieldBan,
    details: [
      "No broker connections",
      "No order placement capabilities",
      "No trade execution functionality",
      "No API keys for trading",
    ],
  },
  {
    id: "research-signals",
    title: "Research Signals Only",
    description:
      "All outputs are labeled as research signals, strategy suggestions, and risk interpretations. These are informational tools to support your own analysis — not directives to act.",
    icon: FileSearch,
    details: [
      "Signals are research interpretations",
      "No buy/sell/exchange directives",
      "All output includes research disclaimers",
      "User retains full decision autonomy",
    ],
  },
  {
    id: "risk-first",
    title: "Risk-First Interface",
    description:
      "The interface is designed to surface risk information before any research signal. Risk scores, volatility metrics, and position sizing considerations are displayed prominently.",
    icon: ShieldAlert,
    details: [
      "Risk scores on every view",
      "Volatility metrics displayed first",
      "Position sizing research only",
      "Loss scenario visualizations",
    ],
  },
];
