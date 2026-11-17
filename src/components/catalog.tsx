"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "./product-card";
import { useSite } from "./site-provider";

export function Catalog() {
  const { ar, requestQuote } = useSite();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    const found = products.filter(p => (category === "all" || p.family === category) && `${p.name} ${p.nameAr} ${p.type} ${p.typeAr}`.toLocaleLowerCase().includes(search));
    if (sort === "name") found.sort((a, b) => (ar ? a.nameAr : a.name).localeCompare(ar ? b.nameAr : b.name, ar ? "ar" : "en"));
    return found;
  }, [category, query, sort, ar]);
  return <main><section className="catalog-hero container"><div className="breadcrumbs"><Link href="/">{ar ? "الرئيسية" : "Home"}</Link><span>/</span><span>{ar ? "مجموعة المنتجات" : "Product portfolio"}</span></div><p className="eyebrow"><span className="red-dot" />{ar ? "معدات لمتطلباتك الصناعية" : "EQUIPMENT FOR YOUR INDUSTRIAL AMBITION"}</p><div className="section-heading"><h1>{ar ? <>حلول مترابطة.<br /><span className="muted-heading">احتمالات أوسع.</span></> : <>A world of solutions.<br /><span className="muted-heading">One connection.</span></>}</h1><p>{ar ? "اكتشف مجموعة الأهرام من المحابس والمعدات الثابتة والدوّارة. ابدأ بالمنتج، ودعنا نهتم بالتفاصيل." : "Discover Ahram’s portfolio of valves, static and rotating equipment. Start with the product. Let’s work through the details together."}</p></div></section>
    <section className="container catalog-section"><div className="catalog-toolbar"><label className="search-field"><Search size={19} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={ar ? "ابحث عن منتج…" : "Search the collection…"} aria-label={ar ? "بحث المنتجات" : "Search products"} />{query && <button className="icon-button" onClick={() => setQuery("")} aria-label={ar ? "مسح البحث" : "Clear search"}><X size={17} /></button>}</label><label className="sort-field"><SlidersHorizontal size={16} /><select aria-label={ar ? "ترتيب المنتجات" : "Sort products"} value={sort} onChange={event => setSort(event.target.value)}><option value="featured">{ar ? "المنتجات المختارة" : "Featured first"}</option><option value="name">{ar ? "الاسم: أ - ي" : "Name: A to Z"}</option></select></label></div><div className="product-tabs">{categories.map(item => <button aria-pressed={category === item.id} className={category === item.id ? "selected" : ""} key={item.id} onClick={() => setCategory(item.id)}>{ar ? item.ar : item.en}<span className="category-number">{item.id === "all" ? products.length : products.filter(p => p.family === item.id).length}</span></button>)}</div><div className="results-label" role="status" aria-live="polite"><span>{ar ? (filtered.length === 0 ? "لا توجد منتجات" : filtered.length === 1 ? "منتج واحد" : filtered.length === 2 ? "منتجان" : `${filtered.length} منتجات`) : `${String(filtered.length).padStart(2, "0")} products in this collection`}</span>{(query || category !== "all") && <button onClick={() => { setCategory("all"); setQuery(""); }}>{ar ? "إعادة ضبط الفلاتر" : "Reset filters"}<X size={13} /></button>}</div>
    {filtered.length ? <div className="product-grid catalog-grid">{filtered.map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div> : <div className="empty-state"><Search size={36} strokeWidth={1} /><h2>{ar ? "لم نجد منتجات مطابقة." : "No matches this time."}</h2><p>{ar ? "جرّب اسمًا آخر أو أعد ضبط الفلاتر لاستكشاف المجموعة." : "Try another search or reset the filters to explore the full collection."}</p><button className="button button-dark" onClick={() => { setCategory("all"); setQuery(""); }}>{ar ? "عرض كل المنتجات" : "See all products"}</button></div>}
    <div className="catalog-help"><div><p className="eyebrow">{ar ? "لديك متطلبات خاصة؟" : "SOMETHING SPECIFIC IN MIND?"}</p><h2>{ar ? "لنجد الحل المناسب معًا." : "Let’s find the right fit."}</h2><p>{ar ? "المواصفات والتوافر والأسعار تُؤكد مباشرة مع فريق الأهرام." : "Specifications, availability and pricing are confirmed directly with the Ahram team."}</p></div><button className="button button-red" onClick={() => requestQuote()}>{ar ? "تحدث مع الفريق" : "Talk to the team"}<ArrowUpRight size={19} /></button></div></section>
  </main>;
}
