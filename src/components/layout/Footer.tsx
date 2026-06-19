import { Terminal, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-blue" />
              <span className="font-semibold text-text-primary text-sm">
                TradingAgents Advisor
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              AI-powered desktop research terminal for market analysis and investment research workflows.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.group}>
              <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                {group.group}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-muted hover:text-text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted text-center md:text-left">
            &copy; 2026 TradingAgents Advisor &middot; Powered by Codex &middot; Created by Tony WU &middot; Research Only. Not Financial Advice.
          </p>
          <p className="text-xs text-text-muted/60">
            Research Only. Not Financial Advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
