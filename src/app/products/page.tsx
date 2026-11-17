import type { Metadata } from "next";
import { Catalog } from "@/components/catalog";
export const metadata: Metadata = { title: "Industrial product portfolio", description: "Explore Ahram’s valves, flow meters, piping, expansion joints and mechanical seals. Browse and enquire in English or Arabic." };
export default function ProductsPage() { return <Catalog />; }
