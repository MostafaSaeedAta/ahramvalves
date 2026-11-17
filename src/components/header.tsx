"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSite } from "./site-provider";

export function Header() {
  const { ar, toggleLanguage, requestQuote } = useSite();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const links = [
    { href: "/", en: "Home", ar: "الرئيسية" },
    { href: "/#company", en: "Our company", ar: "عن الأهرام" },
    { href: "/products/", en: "Products", ar: "المنتجات" },
    { href: "/#expertise", en: "Our expertise", ar: "خبراتنا" },
    { href: "/#contact", en: "Contact", ar: "تواصل معنا" },
  ];
  return <>
    <div className="utility-bar"><div className="container utility-inner"><span>{ar ? "خبرة مصرية. ثقة صناعية." : "EGYPTIAN EXPERTISE. INDUSTRIAL CONFIDENCE."}</span><a href="mailto:info@ahramvalves.com">info@ahramvalves.com <ArrowUpRight size={12} /></a></div></div>
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Ahram home"><img src="/images/logo.png" alt="" width={49} height={49} /><span><strong>AHRAM<span className="brand-dot">.</span></strong><small>{ar ? "لمهمات المصانع" : "INDUSTRIAL SOLUTIONS"}</small></span></Link>
        <nav className="desktop-nav" aria-label={ar ? "القائمة الرئيسية" : "Main navigation"}>{links.map((link, i) => <Link key={link.href} className={(i === 0 && path === "/") || (i === 2 && path.startsWith("/products")) ? "active" : ""} href={link.href}>{ar ? link.ar : link.en}</Link>)}</nav>
        <div className="nav-actions"><button className="language-button" onClick={toggleLanguage} aria-label={ar ? "Switch to English" : "التبديل للعربية"}><Globe2 size={16} /><span>{ar ? "EN" : "العربية"}</span></button><button className="button button-dark nav-quote" onClick={() => requestQuote()}>{ar ? "طلب عرض سعر" : "Let’s talk"}<ArrowUpRight size={17} /></button><button className="icon-button menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{ar ? link.ar : link.en}<ArrowUpRight size={18} /></Link>)}<button className="button button-red" onClick={() => { setOpen(false); requestQuote(); }}>{ar ? "طلب عرض سعر" : "Request a quote"}<ArrowUpRight size={18} /></button></nav>}
    </header>
  </>;
}
