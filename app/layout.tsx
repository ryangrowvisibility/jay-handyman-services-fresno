import type { Metadata } from "next";
import { Big_Shoulders, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-display",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay's Handyman Service — Fresno, CA",
  description:
    "Plumbing, electrical, drywall, painting, fans, gutters, tile. One number, one person, ten years on it.",
  openGraph: {
    title: "Jay's Handyman Service — Fresno",
    description: "Most of the list. Fresno, CA. Ten years.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="min-h-[100dvh] flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
