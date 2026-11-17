"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { useSite } from "./site-provider";

export function Footer() {
  const { ar } = useSite();
  return <footer className="site-footer" id="contact"><div className="container">
    <div className="footer-main"><div className="footer-about"><Link href="/" className="footer-wordmark"><img src="/images/ahram-be-project-mark.png" alt="" width={48} height={48} />AHRAM<span>.</span></Link><p>{ar ? "خبرة هندسية تربط بين احتياجات صناعتك والحل المناسب." : "Connecting industrial ambition with the right engineering solution."}</p><span className="footer-origin"><span className="red-dot" />{ar ? "من القاهرة، مصر" : "BASED IN CAIRO, EGYPT"}</span></div>
    <div className="footer-links"><p className="eyebrow">{ar ? "اكتشف الأهرام" : "EXPLORE"}</p><Link href="/#company">{ar ? "عن الشركة" : "Our company"}</Link><Link href="/products/">{ar ? "منتجاتنا" : "Our products"}</Link><Link href="/#expertise">{ar ? "خبراتنا" : "Our expertise"}</Link><a href="https://www.ahramvalves.com/" target="_blank" rel="noreferrer">{ar ? "الموقع الأصلي" : "Original website"}<ArrowUpRight size={13} /></a></div>
    <div className="footer-contact"><p className="eyebrow">{ar ? "لنتواصل" : "GET IN TOUCH"}</p><a href="mailto:info@ahramvalves.com"><Mail size={16} />info@ahramvalves.com</a><a href="tel:+20225757721"><Phone size={16} /><span dir="ltr">+20 (2) 2575 7721</span></a><a href="https://www.google.com/maps/search/?api=1&query=58+El+Sabtia+Street+Cairo+Egypt" target="_blank" rel="noreferrer"><MapPin size={17} /><span>{ar ? "٥٨ شارع السبتية، برج الشبراويشي، الدور الثاني، القاهرة، مصر" : "58 El-Sabtia St., El-Shabrawishy Tower, 2nd floor, Cairo, Egypt"}</span><ArrowUpRight size={14} /></a></div></div>
    <section className="developer-panel" aria-labelledby="developer-heading">
      <div className="developer-intro">
        <p className="eyebrow">{ar ? "الشركة المطوّرة للموقع" : "THE DIGITAL TEAM BEHIND THIS WEBSITE"}</p>
        <a className="developer-brand" href="https://begroup.com.sa/" target="_blank" rel="noreferrer"><img src="/images/be-group-logo.png" alt="BE GROUP" width={83} height={64} /><span><strong id="developer-heading">{ar ? "بي جروب" : "BE GROUP"}</strong><small>{ar ? "تصميم وتطوير التجربة الرقمية" : "Website design & development"}</small></span><ArrowUpRight size={23} /></a>
        <p>{ar ? "حلول رقمية تشمل تصميم وتطوير المواقع وتطبيقات الموبايل والتسويق الرقمي." : "Digital solutions including website design and development, mobile applications and digital marketing."}</p>
      </div>
      <div className="developer-contact">
        <p className="eyebrow">{ar ? "تواصل مع بي جروب" : "CONNECT WITH BE GROUP"}</p>
        <a href="https://begroup.com.sa/" target="_blank" rel="noreferrer">begroup.com.sa<ArrowUpRight size={16} /></a>
        <a href="mailto:info@begroup.com.sa"><Mail size={16} />info@begroup.com.sa</a>
        <a href="tel:+966545390357"><Phone size={16} /><span dir="ltr">+966 54 539 0357</span></a>
        <a href="tel:+201154413311"><Phone size={16} /><span>{ar ? "مكتب القاهرة" : "Cairo office"} · <span dir="ltr">+20 115 441 3311</span></span></a>
      </div>
      <div className="developer-locations">
        <p className="eyebrow">{ar ? "مكاتب الشركة" : "COMPANY OFFICES"}</p>
        <p><MapPin size={16} /><span><strong>{ar ? "الرياض" : "Riyadh"}</strong>{ar ? "شارع وادي هجر، حي الملقا، 13524" : "Wadi Hajar St., Al Malqa, 13524"}</span></p>
        <p><MapPin size={16} /><span><strong>{ar ? "جدة" : "Jeddah"}</strong>{ar ? "مجمع النور، طريق المدينة، حي الرويس، 23215" : "Al Noor Complex, Madinah Rd., Al Ruwais, 23215"}</span></p>
        <p><MapPin size={16} /><span><strong>{ar ? "القاهرة" : "Cairo"}</strong>{ar ? "٢٥ شارع أسماء فهمي، النزهة، مدينة نصر" : "25 Asmaa Fahmy St., El Nozha, Nasr City"}</span></p>
        <a href="https://begroup.com.sa/contact-us" target="_blank" rel="noreferrer">{ar ? "كل بيانات التواصل" : "All contact details"}<ArrowUpRight size={14} /></a>
      </div>
    </section>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {ar ? "الأهرام لمهمات المصانع" : "Al-Ahram for Factories Requirements"}</span><a className="developer-credit" href="https://begroup.com.sa/" target="_blank" rel="noreferrer">{ar ? "تصميم وتطوير" : "Designed & developed by"} <strong>BE GROUP</strong><ArrowUpRight size={14} /></a><a href="#top">{ar ? "للأعلى" : "Back to top"}<ArrowUp size={14} /></a></div>
  </div></footer>;
}
