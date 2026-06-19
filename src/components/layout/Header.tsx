'use client';

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-deep/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/15 border border-blue/30 group-hover:border-blue/60 transition-colors">
              <Terminal className="h-4 w-4 text-blue" />
            </div>
            <span className="text-sm font-semibold text-text-primary tracking-tight">
              TradingAgents
              <span className="text-blue"> Advisor</span>
              <span className="ml-1.5 text-[10px] font-medium text-text-muted bg-panel-elevated px-1.5 py-0.5 rounded border border-border">
                2.0
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-panel-elevated transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button size="sm" className="shadow-lg shadow-blue/20">
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {mainNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-panel-elevated"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button size="sm" className="flex-1">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
