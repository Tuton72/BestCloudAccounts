import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Category, Product } from "@/types/catalog";

interface RelatedProductsProps {
  products: Product[];
  category: Category;
}

export function RelatedProducts({ products, category }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <SectionHeading
        eyebrow="Explore More"
        heading={`Related ${category.name}`}
        align="left"
        className="mb-6"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} category={category} />
        ))}
      </div>
    </section>
  );
}
