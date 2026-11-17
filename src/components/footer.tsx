"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { useSite } from "./site-provider";
import { studio } from "@/lib/studio";

export function Footer() {
  const { ar } = useSite();
  const studioName = ar ? studio.nameAr : studio.nameEn;
  const studioUrl = `${studio.website}/${ar ? "ar" : "en"}`;
  return <footer className="site-footer" id="contact"><div className="container">
    <div className="footer-main"><div className="footer-about"><Link href="/" className="footer-wordmark">AHRAM<span>.</span></Link><p>{ar ? "خبرة هندسية تربط بين احتياجات صناعتك والحل المناسب." : "Connecting industrial ambition with the right engineering solution."}</p><span className="footer-origin"><span className="red-dot" />{ar ? "من القاهرة، مصر" : "BASED IN CAIRO, EGYPT"}</span></div>
    <div className="footer-links"><p className="eyebrow">{ar ? "اكتشف الأهرام" : "EXPLORE"}</p><Link href="/#company">{ar ? "عن الشركة" : "Our company"}</Link><Link href="/products/">{ar ? "منتجاتنا" : "Our products"}</Link><Link href="/#expertise">{ar ? "خبراتنا" : "Our expertise"}</Link><a href="https://www.ahramvalves.com/" target="_blank" rel="noreferrer">{ar ? "الموقع الأصلي" : "Original website"}<ArrowUpRight size={13} /></a></div>
    <div className="footer-contact"><p className="eyebrow">{ar ? "لنتواصل" : "GET IN TOUCH"}</p><a href="mailto:info@ahramvalves.com"><Mail size={16} />info@ahramvalves.com</a><a href="tel:+20225757721"><Phone size={16} /><span dir="ltr">+20 (2) 2575 7721</span></a><a href="https://www.google.com/maps/search/?api=1&query=58+El+Sabtia+Street+Cairo+Egypt" target="_blank" rel="noreferrer"><MapPin size={17} /><span>{ar ? "٥٨ شارع السبتية، برج الشبراويشي، الدور الثاني، القاهرة، مصر" : "58 El-Sabtia St., El-Shabrawishy Tower, 2nd floor, Cairo, Egypt"}</span><ArrowUpRight size={14} /></a></div></div>
    <section className="developer-panel" aria-labelledby="developer-heading">
      <div className="developer-intro">
        <p className="eyebrow">{ar ? "الشركة المطوّرة للموقع" : "THE DIGITAL TEAM BEHIND THIS WEBSITE"}</p>
        <a className="developer-brand" href={studioUrl} target="_blank" rel="noreferrer"><img src={studio.logo} alt={studioName} width={170} height={48} /><h2 id="developer-heading" className="sr-only">{studioName}</h2><ArrowUpRight size={23} /></a>
        <p className="developer-role">{ar ? "تصميم وتطوير التجربة الرقمية" : "Website design & development"}</p>
        <p>{ar ? studio.descriptionAr : studio.descriptionEn}</p>
      </div>
      <div className="developer-contact">
        <p className="eyebrow">{ar ? `تواصل مع ${studioName}` : `CONNECT WITH ${studioName}`}</p>
        <a href={studioUrl} target="_blank" rel="noreferrer">musbah.co<ArrowUpRight size={16} /></a>
        <a href={`mailto:${studio.email}`}><Mail size={16} /><span dir="ltr">{studio.email}</span></a>
        <a href={`tel:${studio.phone}`}><Phone size={16} /><span dir="ltr">{studio.phoneDisplay}</span></a>
        <a href={studio.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} />{ar ? "تواصل عبر واتساب" : "Chat on WhatsApp"}<ArrowUpRight size={14} /></a>
      </div>
      <div className="developer-locations">
        <p className="eyebrow">{ar ? "المقر والخدمات" : "LOCATION & SERVICES"}</p>
        <p><MapPin size={16} /><span><strong>{ar ? studio.location.cityAr : studio.location.cityEn}</strong>{ar ? studio.location.regionAr : studio.location.regionEn}</span></p>
        <ul className="developer-services">{studio.services.map(service => <li key={service.path}><a href={`${studioUrl}/${service.path}`} target="_blank" rel="noreferrer">{ar ? service.nameAr : service.nameEn}</a></li>)}</ul>
        <a href={`${studioUrl}/contact-us`} target="_blank" rel="noreferrer">{ar ? "كل بيانات التواصل" : "All contact details"}<ArrowUpRight size={14} /></a>
      </div>
    </section>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {ar ? "الأهرام لمهمات المصانع" : "Al-Ahram for Factories Requirements"}</span><a className="developer-credit" href={studioUrl} target="_blank" rel="noreferrer">{ar ? "تصميم وتطوير" : "Designed & developed by"} <strong>{studioName}</strong><ArrowUpRight size={14} /></a><a href="#top">{ar ? "للأعلى" : "Back to top"}<ArrowUp size={14} /></a></div>
  </div></footer>;
}
