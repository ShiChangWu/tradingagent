import { AlertTriangle } from "lucide-react";

export function ResearchDisclaimer() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow/5 border border-yellow/20 max-w-2xl mx-auto">
      <AlertTriangle className="h-5 w-5 text-yellow shrink-0 mt-0.5" />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-yellow">
          Research Only. Not Financial Advice.
        </p>
        <p className="text-xs text-text-muted leading-relaxed">
          TradingAgents Advisor 2.0 does not connect to brokers, place orders, or execute
          trades. All outputs are research signals, strategy suggestions, and risk
          interpretations. No real order execution is provided.
        </p>
      </div>
    </div>
  );
}
