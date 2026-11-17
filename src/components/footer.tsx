"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { useSite } from "./site-provider";

export function Footer() {
  const { ar } = useSite();
  return <footer className="site-footer" id="contact"><div className="container">
    <div className="footer-main"><div className="footer-about"><Link href="/" className="footer-wordmark">AHRAM<span>.</span></Link><p>{ar ? "خبرة هندسية تربط بين احتياجات صناعتك والحل المناسب." : "Connecting industrial ambition with the right engineering solution."}</p><span className="footer-origin"><span className="red-dot" />{ar ? "من القاهرة، مصر" : "BASED IN CAIRO, EGYPT"}</span></div>
    <div className="footer-links"><p className="eyebrow">{ar ? "اكتشف الأهرام" : "EXPLORE"}</p><Link href="/#company">{ar ? "عن الشركة" : "Our company"}</Link><Link href="/products/">{ar ? "منتجاتنا" : "Our products"}</Link><Link href="/#expertise">{ar ? "خبراتنا" : "Our expertise"}</Link><a href="https://www.ahramvalves.com/" target="_blank" rel="noreferrer">{ar ? "الموقع الأصلي" : "Original website"}<ArrowUpRight size={13} /></a></div>
    <div className="footer-contact"><p className="eyebrow">{ar ? "لنتواصل" : "GET IN TOUCH"}</p><a href="mailto:info@ahramvalves.com"><Mail size={16} />info@ahramvalves.com</a><a href="tel:+20225757721"><Phone size={16} /><span dir="ltr">+20 (2) 2575 7721</span></a><a href="https://www.google.com/maps/search/?api=1&query=58+El+Sabtia+Street+Cairo+Egypt" target="_blank" rel="noreferrer"><MapPin size={17} /><span>{ar ? "٥٨ شارع السبتية، برج الشبراويشي، الدور الثاني، القاهرة، مصر" : "58 El-Sabtia St., El-Shabrawishy Tower, 2nd floor, Cairo, Egypt"}</span><ArrowUpRight size={14} /></a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {ar ? "الأهرام لمهمات المصانع" : "Al-Ahram for Factories Requirements"}</span><span>{ar ? "تصور تصميمي مستقل · المحتوى من موقع الأهرام" : "Independent portfolio concept · Content sourced from Ahram"}</span><a href="#top">{ar ? "للأعلى" : "Back to top"}<ArrowUp size={14} /></a></div>
  </div></footer>;
}
