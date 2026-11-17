import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteProvider } from "@/components/site-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const manrope = localFont({ src: [
  { path: "../../public/fonts/manrope-400.ttf", weight: "400" },
  { path: "../../public/fonts/manrope-500.ttf", weight: "500" },
  { path: "../../public/fonts/manrope-600.ttf", weight: "600" },
  { path: "../../public/fonts/manrope-700.ttf", weight: "700" },
  { path: "../../public/fonts/manrope-800.ttf", weight: "800" },
], variable: "--font-manrope", display: "swap" });
const arabic = localFont({ src: [
  { path: "../../public/fonts/arabic-400.ttf", weight: "400" },
  { path: "../../public/fonts/arabic-600.ttf", weight: "600" },
  { path: "../../public/fonts/arabic-700.ttf", weight: "700" },
], variable: "--font-arabic", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ahram-industrial-portfolio-2026.iridescentisle16.chatgpt.site"),
  title: { default: "AHRAM — Precision in every connection", template: "%s | AHRAM" },
  description: "Explore Ahram’s industrial valves, static and rotating equipment. Over 40 years of Egyptian engineering expertise. الأهرام لمهمات المصانع — حلول صناعية بخبرة تتجاوز ٤٠ عامًا.",
  openGraph: { title: "AHRAM — Precision in every connection", description: "Egyptian expertise. Industrial confidence. Explore the Ahram product portfolio.", images: [{ url: "/images/facility.jpg", width: 1600, height: 710 }], type: "website" },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" data-scroll-behavior="smooth" className={`${manrope.variable} ${arabic.variable}`}><body id="top"><a className="skip-link" href="#main-content">Skip to content / انتقل للمحتوى</a><SiteProvider><Header /><div id="main-content">{children}</div><Footer /></SiteProvider></body></html>;
}
