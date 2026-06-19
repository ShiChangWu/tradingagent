'use client';

import { motion } from "framer-motion";
import BlurText from "@/components/react-bits/BlurText";
import BorderGlow from "@/components/react-bits/BorderGlow";
import Aurora from "@/components/react-bits/Aurora";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Shield,
  Terminal,
  TrendingUp,
  BarChart3,
  Activity,
  Brain,
  Lightbulb,
  Grid3X3,
  Sparkles,
  Users,
  FileText,
  Database,
  CandlestickChart,
  Zap,
  ArrowDown,
  Star,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { TerminalMockup } from "@/components/sections/TerminalMockup";
import { ResearchDisclaimer } from "@/components/sections/ResearchDisclaimer";
import { features } from "@/data/features";
import { roadmapPhases } from "@/data/roadmap";
import { workflowSteps } from "@/data/workflow";
import { techCategories } from "@/data/tech-stack";
import { safetyCards } from "@/data/safety";
import { uiShowcaseCards } from "@/data/ui-showcase";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

// Icon mapping for workflow steps
const workflowIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  CandlestickChart,
  TrendingUp,
  Zap,
  Grid3X3,
  Users,
  FileText,
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Aurora background */}
        <div className="absolute inset-0 opacity-40">
          <Aurora
            colorStops={["#2F7DF6", "#20C997", "#07111F"]}
            amplitude={0.8}
            blend={0.6}
            speed={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue/5 blur-[120px] rounded-full" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-xs font-medium text-blue mb-6"
            >
              <Star className="h-3 w-3 fill-blue text-blue" />
              Research Terminal — Now in Public Preview
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
            >
              TradingAgents
              <br />
              <span className="bg-gradient-to-r from-[#2F7DF6] to-[#20C997] bg-clip-text text-transparent">Advisor 2.0</span>
            </motion.h1>

            {/* Subtitle with BlurText */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <BlurText
                text="AI-powered desktop research terminal for market analysis, risk interpretation, tactical reports, and investment research workflows."
                className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed text-center"
                delay={80}
                animateBy="words"
                direction="top"
                stepDuration={0.3}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button size="lg" className="group shadow-lg shadow-blue/20 min-w-[160px]">
                View App Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="min-w-[160px]">
                Join Waitlist
              </Button>
              <Button variant="ghost" size="lg" className="min-w-[160px]">
                View GitHub
                <ExternalLink className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
            >
              <ResearchDisclaimer />
            </motion.div>
          </div>

          {/* Hero Mockup */}
          <TerminalMockup className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* ============================================
          SECTION 2: PRODUCT PREVIEW
          ============================================ */}
      <section id="demo" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Product Preview"
            title="Your research cockpit, one terminal."
            description="A unified desktop workspace combining live market data, AI-driven analysis, and structured research reports."
          />

          <motion.div {...fadeInUp} className="mt-12 relative">
            <BorderGlow
              glowColor="215 90 65"
              backgroundColor="#0D1726"
              borderRadius={16}
              glowRadius={60}
              glowIntensity={0.8}
              edgeSensitivity={25}
              colors={["#2F7DF6", "#20C997", "#07111F"]}
            >
            <div className="relative rounded-2xl border border-border bg-panel overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-5 py-3 bg-panel-elevated border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow/60" />
                  <div className="w-3 h-3 rounded-full bg-green/60" />
                </div>
                <span className="text-xs text-text-muted ml-2">TradingAgents Advisor 2.0</span>
              </div>

              <div className="p-4 grid grid-cols-4 gap-3 min-h-[320px]">
                {[
                  { label: "Watchlist", span: "col-span-1", color: "bg-blue/5 border-blue/20" },
                  { label: "Chart Center", span: "col-span-2", color: "bg-green/5 border-green/20" },
                  { label: "AI Summary", span: "col-span-1", color: "bg-yellow/5 border-yellow/20" },
                ].map((panel) => (
                  <div
                    key={panel.label}
                    className={cn("rounded-lg border p-3 flex items-center justify-center", panel.span, panel.color)}
                  >
                    <span className="text-xs font-medium text-text-muted">{panel.label}</span>
                  </div>
                ))}
                <div className="col-span-2 rounded-lg border border-blue/10 bg-blue/5 p-3 flex items-center justify-center">
                  <span className="text-xs font-medium text-text-muted">AI Committee</span>
                </div>
                <div className="col-span-2 rounded-lg border border-green/10 bg-green/5 p-3 flex items-center justify-center">
                  <span className="text-xs font-medium text-text-muted">Portfolio Summary</span>
                </div>
              </div>

              {/* Floating labels */}
              {[
                { text: "Live Snapshot", pos: "top-[10%] left-[8%]", clr: "blue" },
                { text: "AI Research Summary", pos: "top-[10%] right-[8%]", clr: "yellow" },
                { text: "TradingView-style Chart Center", pos: "top-[45%] left-[35%]", clr: "green" },
                { text: "Risk-first Workflow", pos: "bottom-[15%] left-[8%]", clr: "red" },
              ].map((label) => (
                <div key={label.text} className={cn("absolute hidden md:flex items-center gap-2", label.pos)}>
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    label.clr === "blue" && "bg-blue",
                    label.clr === "green" && "bg-green",
                    label.clr === "yellow" && "bg-yellow",
                    label.clr === "red" && "bg-red"
                  )} />
                  <span className="text-[11px] font-medium text-text-secondary bg-panel-elevated/90 backdrop-blur px-2 py-1 rounded-md border border-border">
                    {label.text}
                  </span>
                </div>
              ))}
            </div>
            </BorderGlow>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: CORE FEATURES
          ============================================ */}
      <section id="features" className="py-20 md:py-28 bg-panel/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Core Features"
            title="Everything you need for investment research."
            description="Eight integrated modules form a complete research pipeline — from market data to final report."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                highlights={feature.highlights}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: RESEARCH WORKFLOW
          ============================================ */}
      <section id="workflow" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Research Workflow"
            title="From market data to research report."
            description="A modular pipeline processes raw market data through multiple analysis layers to produce structured research output."
          />

          <div className="mt-16">
            {/* Desktop */}
            <div className="hidden md:block">
              <div className="flex items-start justify-between gap-2">
                {workflowSteps.map((step, i) => {
                  const Icon = workflowIcons[step.icon] || Database;
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex flex-col items-center text-center flex-1"
                    >
                      <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue/10 border border-blue/20 mb-3">
                          <Icon className="h-6 w-6 text-blue" />
                        </div>
                        {i < workflowSteps.length - 1 && (
                          <div className="absolute top-7 left-full h-[2px] w-[calc(100%-3rem)] bg-gradient-to-r from-blue/40 to-blue/10" />
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-text-primary mb-1">{step.title}</h4>
                      <p className="text-xs text-text-muted leading-relaxed max-w-[180px]">{step.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden space-y-0">
              {workflowSteps.map((step, i) => {
                const Icon = workflowIcons[step.icon] || Database;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-4 py-4 border-b border-border/50 last:border-0"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 border border-blue/20 shrink-0">
                      <Icon className="h-5 w-5 text-blue" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-blue">{String(i + 1).padStart(2, "0")}</span>
                        <h4 className="text-sm font-semibold text-text-primary">{step.title}</h4>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: UI SHOWCASE
          ============================================ */}
      <section id="showcase" className="py-20 md:py-28 bg-panel/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="UI Showcase"
            title="A terminal built for research."
            description="Compact, high-density panels designed for professional research workflows."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uiShowcaseCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="h-full card-hover border-border/50 bg-panel/80">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className={cn("h-2 w-2 rounded-full",
                        card.accent === "blue" && "bg-blue",
                        card.accent === "green" && "bg-green",
                        card.accent === "yellow" && "bg-yellow",
                        card.accent === "red" && "bg-red"
                      )} />
                      <CardTitle className="text-sm">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="text-xs">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-deep border border-border/50 p-3 font-mono text-xs leading-relaxed">
                      {card.previewLines.map((line, j) => (
                        <div key={j} className={cn("py-0.5",
                          line.includes("\u25b4") && "text-green",
                          line.includes("\u25be") && "text-red",
                          line.includes("[RSRCH]") && "text-blue",
                          line.includes("[ALERT]") && "text-yellow"
                        )}>{line}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: SAFETY
          ============================================ */}
      <section id="safety" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Built for research, not execution."
            description="TradingAgents Advisor 2.0 does not connect to brokers, place orders, or execute trades. It only provides research signals, strategy suggestions, risk suggestions, research alerts, and reports."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {safetyCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-panel/80 text-center">
                  <CardContent className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red/10 border border-red/20 mx-auto mb-4">
                      <card.icon className="h-7 w-7 text-red" />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">{card.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">{card.description}</p>
                    <ul className="space-y-1.5 text-left">
                      {card.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-text-muted">
                          <CheckCircle2 className="h-3 w-3 text-green shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="mt-10">
            <ResearchDisclaimer />
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: TECHNOLOGY STACK
          ============================================ */}
      <section className="py-20 md:py-28 bg-panel/30">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Technology Stack"
            title="Built on a professional Python stack."
            description="A carefully selected set of tools for desktop UI, market data, technical analysis, and AI integration."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full border-border/50 bg-panel/80">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className={cn("h-2 w-2 rounded-full",
                        i === 0 && "bg-blue", i === 1 && "bg-green",
                        i === 2 && "bg-yellow", i === 3 && "bg-red"
                      )} />
                      {cat.title}
                    </CardTitle>
                    <CardDescription className="text-xs">{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-start gap-2 p-2 rounded-lg bg-deep/50 border border-border/30">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-text-secondary font-mono">{item.name}</span>
                              {item.optional && (
                                <Badge variant="default" className="text-[9px] px-1 py-0">optional</Badge>
                              )}
                            </div>
                            <p className="text-[11px] text-text-muted mt-0.5 leading-tight">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: ROADMAP
          ============================================ */}
      <section id="roadmap" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            label="Roadmap"
            title="What we're building."
            description="A phased development plan from core UI to advanced research capabilities."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roadmapPhases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Card className="h-full border-border/50 bg-panel/80 card-hover">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <Badge
                        variant={phase.status === "completed" ? "green" : phase.status === "in-progress" ? "blue" : "default"}
                        className="text-[11px]"
                      >
                        {phase.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                        {phase.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                        {phase.status === "completed" ? "Completed" : phase.status === "in-progress" ? "In Progress" : "Planned"}
                      </Badge>
                    </div>
                    <CardTitle className="text-sm">{phase.title}</CardTitle>
                    <CardDescription className="text-xs">{phase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                          <ChevronRight className="h-3 w-3 text-text-muted/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: CTA
          ============================================ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue/10 blur-[100px] rounded-full" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title="Build your AI research workflow before making decisions."
              description="Join the waitlist to get early access to TradingAgents Advisor 2.0."
              className="mb-8"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Button size="xl" className="group shadow-lg shadow-blue/20 min-w-[180px]">
                Join Waitlist
                <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="min-w-[180px]">View Demo</Button>
              <a
                href={siteConfig.downloadUrl}
                download
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-medium h-14 px-10 transition-all duration-200 text-text-secondary hover:text-text-primary hover:bg-panel-elevated min-w-[180px]"
              >
                Download Preview
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-text-muted">
              Research Only. Not Financial Advice. No real order execution is provided.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
