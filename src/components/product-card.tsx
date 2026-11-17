"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { useSite } from "./site-provider";
import { useEffect, useRef, useState } from "react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { ar } = useSite();
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true);
  }, []);
  return <Link href={`/products/${product.slug}/`} className="product-card">
    <div className={`product-image ${loaded ? "is-loaded" : ""}`}><span className="product-number">{String(index + 1).padStart(2, "0")}</span>{!loaded && <div className="image-skeleton skeleton" aria-hidden="true" />}<img ref={imageRef} src={`/images/${product.image}`} alt={ar ? product.nameAr : product.name} onLoad={() => setLoaded(true)} onError={() => setLoaded(true)} loading="lazy" width={360} height={290} /><span className="product-view">{ar ? "اكتشف المنتج" : "Explore product"}<ArrowUpRight size={15} /></span></div>
    <div className="product-info"><div><span className="product-type">{ar ? product.typeAr : product.type}</span><h3>{ar ? product.nameAr : product.name}</h3></div><span className="card-arrow"><ArrowUpRight size={21} /></span></div>
  </Link>;
}
