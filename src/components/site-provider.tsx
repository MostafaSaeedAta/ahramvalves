"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import type { Product } from "@/lib/products";

type SiteContextType = { ar: boolean; toggleLanguage: () => void; requestQuote: (product?: Product) => void };
const SiteContext = createContext<SiteContextType>({ ar: false, toggleLanguage: () => {}, requestQuote: () => {} });
export const useSite = () => useContext(SiteContext);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [ar, setAr] = useState(false);
  const [quote, setQuote] = useState<{ product?: Product } | null>(null);
  useEffect(() => { setAr(localStorage.getItem("ahram-language") === "ar"); }, []);
  useEffect(() => {
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [ar]);
  function toggleLanguage() {
    setAr(!ar);
    localStorage.setItem("ahram-language", ar ? "en" : "ar");
  }
  return <SiteContext.Provider value={{ ar, toggleLanguage, requestQuote: (product) => setQuote({ product }) }}>
    {children}
    {quote && <QuoteDialog ar={ar} product={quote.product} close={() => setQuote(null)} />}
  </SiteContext.Provider>;
}

function QuoteDialog({ ar, product, close }: { ar: boolean; product?: Product; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [emailLink, setEmailLink] = useState("");
  useEffect(() => {
    const element = dialog.current;
    const previous = document.activeElement as HTMLElement;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; previous?.focus(); };
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Product enquiry — ${product?.name || "Ahram industrial equipment"}`;
    const body = `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nProduct: ${product?.name || "General enquiry"}\n\nRequirements:\n${data.get("requirements")}`;
    setEmailLink(`mailto:info@ahramvalves.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
  return <dialog ref={dialog} aria-labelledby="quote-title" className="quote-dialog" onCancel={close} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
    <button type="button" className="icon-button dialog-close" aria-label={ar ? "إغلاق" : "Close dialog"} onClick={close}><X size={21} /></button>
    {emailLink ? <div className="quote-success">
      <span className="success-icon"><Check size={30} /></span>
      <p className="eyebrow">{ar ? "الخطوة التالية" : "LET’S GET CONNECTED"}</p>
      <h2 id="quote-title">{ar ? "استفسارك جاهز." : "Your enquiry is ready."}</h2>
      <p>{ar ? "افتح مسودة البريد وراجعها، ثم أرسلها من تطبيق البريد الخاص بك. لم يتم إرسال أي رسالة بعد." : "Open your email draft, review it, and send it from your email app. Your enquiry has not been sent yet."}</p>
      <a className="button button-red" href={emailLink}>{ar ? "فتح مسودة البريد" : "Open email draft"}<ArrowUpRight size={19} /></a>
      <a className="text-link" href="tel:+20225757721">{ar ? "أو اتصل بنا" : "Or call us"} <span dir="ltr">+20 (2) 2575 7721</span></a>
    </div> : <>
      <p className="eyebrow"><span className="red-dot" />{ar ? "ابدأ محادثة" : "START A CONVERSATION"}</p>
      <h2 id="quote-title">{ar ? "الحل المناسب يبدأ هنا." : "The right solution starts here."}</h2>
      <p className="muted">{ar ? "حدثنا عن مشروعك وسنجهز استفسارك لإرساله لفريق الأهرام." : "Tell us about your project. We’ll prepare an email enquiry for the Ahram team."}</p>
      {product && <div className="quote-product">{ar ? product.nameAr : product.name}</div>}
      <form onSubmit={submit} className="quote-form">
        <label>{ar ? "الاسم" : "Full name"}<input name="name" autoComplete="name" required maxLength={120} placeholder={ar ? "اسمك الكامل" : "Your full name"} /></label>
        <label>{ar ? "الشركة" : "Company"}<input name="company" autoComplete="organization" maxLength={150} placeholder={ar ? "اسم الشركة" : "Company name"} /></label>
        <label>{ar ? "البريد الإلكتروني" : "Email address"}<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
        <label>{ar ? "رقم الهاتف" : "Phone number"}<input name="phone" type="tel" autoComplete="tel" placeholder="+20" /></label>
        <label className="full-width">{ar ? "متطلبات المشروع" : "Project requirements"}<textarea name="requirements" required rows={4} maxLength={4000} placeholder={ar ? "نوع المنتج، الكمية، المقاسات وظروف التشغيل…" : "Product, quantity, size and operating conditions…"} /></label>
        <button type="submit" className="button button-red full-width">{ar ? "تجهيز الاستفسار" : "Prepare enquiry"}<ArrowUpRight size={19} /></button>
      </form>
    </>}
  </dialog>;
}
