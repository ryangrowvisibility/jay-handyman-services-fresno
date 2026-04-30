import type { Metadata } from "next";
import { DM_Serif_Display, Sora } from "next/font/google";
import "./globals.css";

const display = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const body = Sora({
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
    <html
      lang="en"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
