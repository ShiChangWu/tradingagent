'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalMockupProps {
  className?: string;
}

export function TerminalMockup({ className }: TerminalMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn("relative", className)}
    >
      <div className="absolute -inset-4 bg-blue/5 blur-3xl rounded-2xl" />

      <div className="relative rounded-xl border border-border bg-panel overflow-hidden shadow-2xl shadow-black/40 terminal-scanline">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-panel-elevated border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red/80" />
            <div className="w-3 h-3 rounded-full bg-yellow/80" />
            <div className="w-3 h-3 rounded-full bg-green/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-text-muted font-medium">
              TradingAgents Advisor 2.0 — Research Terminal
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-[10px] text-text-muted">RL</span>
            <span className="text-[10px] text-text-muted">AI</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 grid grid-cols-12 gap-3 min-h-[380px]">
          {/* Left: Watchlist */}
          <div className="col-span-3 border border-border/50 rounded-lg bg-deep/50 p-2.5">
            <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2 px-1">
              Watchlist
            </div>
            <div className="space-y-1.5">
              {[
                { sym: "AAPL", price: "198.45", change: "+2.3%", up: true },
                { sym: "MSFT", price: "432.18", change: "+1.1%", up: true },
                { sym: "NVDA", price: "875.30", change: "-0.8%", up: false },
                { sym: "TSLA", price: "248.90", change: "+3.2%", up: true },
                { sym: "SPY", price: "547.20", change: "+0.5%", up: true },
                { sym: "QQQ", price: "478.65", change: "-0.3%", up: false },
              ].map((item) => (
                <div
                  key={item.sym}
                  className="flex items-center justify-between px-1.5 py-1 rounded hover:bg-panel-elevated/50 cursor-pointer transition-colors text-xs"
                >
                  <span className="font-mono font-semibold text-text-secondary">
                    {item.sym}
                  </span>
                  <span className="font-mono text-text-primary">${item.price}</span>
                  <span
                    className={cn(
                      "font-mono text-[11px]",
                      item.up ? "text-green" : "text-red"
                    )}
                  >
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Chart */}
          <div className="col-span-6 border border-border/50 rounded-lg bg-deep/50 p-2.5 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text-primary font-mono">AAPL</span>
                <span className="text-[10px] text-text-muted">1D</span>
              </div>
              <div className="flex gap-1">
                {["1m", "5m", "15m", "1H", "4H", "1D"].map((tf) => (
                  <span
                    key={tf}
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded font-mono transition-colors cursor-pointer",
                      tf === "1D" ? "bg-blue/20 text-blue" : "text-text-muted hover:text-text-secondary"
                    )}
                  >
                    {tf}
                  </span>
                ))}
              </div>
            </div>

            {/* Fake candlestick chart */}
            <div className="flex-1 flex items-end gap-[1px]">
              {Array.from({ length: 40 }).map((_, i) => {
                const h = 20 + Math.sin(i * 0.15) * 30 + Math.random() * 25;
                const isUp = Math.random() > 0.45;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end" style={{ height: "100%" }}>
                    <div
                      className="w-full max-w-[3px] rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: isUp ? "#20C997" : "#FF4D4F",
                        opacity: 0.8,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Volume */}
            <div className="flex items-end gap-[1px] h-6 mt-2 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-text-muted/30 rounded-t-sm"
                  style={{ height: `${10 + Math.random() * 60}%` }}
                />
              ))}
            </div>
          </div>

          {/* Right: AI Summary */}
          <div className="col-span-3 border border-border/50 rounded-lg bg-deep/50 p-2.5 flex flex-col gap-2">
            <div className="text-[10px] font-semibold text-blue uppercase tracking-wider">
              AI Research Summary
            </div>

            <div className="bg-panel-elevated rounded-lg p-2.5 border border-border/30">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-text-muted">Risk Score</span>
                <span className="text-xs font-mono font-semibold text-yellow">6.2/10</span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div className="h-full w-[62%] bg-yellow rounded-full" />
              </div>
            </div>

            <div className="text-[11px] text-text-secondary leading-relaxed space-y-1.5">
              <p><span className="text-green font-semibold">Bullish</span> bias detected (0.72 confidence)</p>
              <p>Above 50MA with RSI trending at 58</p>
              <p>Volume confirming upward momentum</p>
              <p>Next resistance: $205.00</p>
            </div>

            <div className="mt-auto">
              <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                Committee Consensus
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={cn("h-1.5 flex-1 rounded-full", i <= 3 ? "bg-green" : "bg-border")}
                  />
                ))}
                <span className="text-[10px] text-text-muted">3/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-panel-elevated border-t border-border text-[10px] text-text-muted">
          <span>RL · Snapshot: 14:32:05 EST</span>
          <span>Research Only · Not Financial Advice</span>
          <span>Session: ACTIVE</span>
        </div>
      </div>
    </motion.div>
  );
}
