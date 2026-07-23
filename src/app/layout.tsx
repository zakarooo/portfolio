import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WebVitals } from "@/components/ui/WebVitals";
import CustomCursor, { CursorTrail } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Arial",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "Hicham Basr — AI Innovation Lab",
  description:
    "Laboratoire d'innovation personnel de Hicham Basr — 20+ ans à l'intersection du cinéma, de l'intelligence artificielle et du développement logiciel.",
  keywords: [
    "Hicham Basr",
    "AI Innovation Lab",
    "Intelligence Artificielle",
    "Cinéma",
    "Développement Logiciel",
    "FastAPI",
    "Next.js",
    "IA Générative",
    "Production Vidéo",
    "Agents Autonomes",
  ],
  openGraph: {
    title: "Hicham Basr — AI Innovation Lab",
    description:
      "J'imagine, développe et transforme des idées en plateformes d'intelligence artificielle, films et produits numériques.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <CustomCursor />
        <CursorTrail />
        {children}
        <WebVitals />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
