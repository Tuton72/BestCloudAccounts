import { ProductCard } from "@/components/product/product-card";
import type { Category, Product } from "@/types/catalog";

interface ProductGridProps {
  products: Product[];
  categories: Category[];
  emptyMessage?: string;
}

export function ProductGrid({ products, categories, emptyMessage }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center text-sm text-ink-muted">
        {emptyMessage ?? "No products found."}
      </p>
    );
  }

  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        const category = categoryBySlug.get(product.categorySlug);
        if (!category) return null;
        return <ProductCard key={product.id} product={product} category={category} />;
      })}
    </div>
  );
}
