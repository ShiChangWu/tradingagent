import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TradingAgents Advisor 2.0 — AI-Powered Desktop Research Terminal",
  description:
    "TradingAgents Advisor 2.0 is an AI-powered desktop investment research terminal combining market data, technical indicators, AI investment committee views, and full research reports. Research Only. Not Financial Advice.",
  keywords: [
    "trading research",
    "AI investment research",
    "desktop trading terminal",
    "market analysis",
    "technical analysis",
    "investment research",
    "AI trading assistant",
    "research terminal",
  ],
  openGraph: {
    title: "TradingAgents Advisor 2.0 — AI-Powered Desktop Research Terminal",
    description:
      "AI-powered desktop research terminal for market analysis, risk interpretation, tactical reports, and investment research workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-deep text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
