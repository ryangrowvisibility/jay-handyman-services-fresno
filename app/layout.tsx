import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: ["400"], display: "swap" });
const body = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Jay Handyman Services — Fresno's All-In-One Home Repairs",
  description:
    "Fresno's all-in-one handyman. 15 years electrical, 10 years serving Fresno homes. Plumbing, electrical, drywall, ceiling fans, gutters, painting & tile. Punctual, thorough, finished early.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
      <body className="min-h-[100dvh] bg-canvas text-ink font-[family-name:var(--font-body)]">{children}</body>
    </html>
  );
}
