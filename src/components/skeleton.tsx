export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return <div className="product-grid" aria-label="Loading products" aria-busy="true">{Array.from({ length: count }, (_, index) => <div className="product-card skeleton-card" key={index}><div className="skeleton skeleton-image" /><div className="skeleton skeleton-line short" /><div className="skeleton skeleton-line" /></div>)}</div>;
}

export function PageSkeleton() {
  return <main className="container page-skeleton" aria-busy="true" aria-label="Loading page"><div className="skeleton skeleton-line short" /><div className="skeleton skeleton-heading" /><div className="skeleton skeleton-line" /><div className="skeleton skeleton-filter" /><ProductGridSkeleton /></main>;
}
