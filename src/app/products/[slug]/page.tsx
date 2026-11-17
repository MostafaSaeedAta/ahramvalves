import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ProductDetail } from "@/components/product-detail";

export const dynamicParams = false;
export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  return { title: product?.name || "Product", description: product?.description };
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
