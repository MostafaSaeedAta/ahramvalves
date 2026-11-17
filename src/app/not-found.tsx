import Link from "next/link";
export default function NotFound() { return <main className="container empty-state not-found"><p className="eyebrow">404 / CONNECTION NOT FOUND</p><h1>Let’s get you<br />back on track.</h1><p>الصفحة غير موجودة. يمكنك العودة إلى مجموعة المنتجات.</p><Link href="/products/" className="button button-red">Explore our products / المنتجات ↗</Link></main>; }
