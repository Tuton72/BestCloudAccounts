import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { categoryHref } from "@/lib/routes";
import type { Category, Product } from "@/types/catalog";

interface FeaturedCategorySectionProps {
  category: Category;
  products: Product[];
  tinted?: boolean;
}

export function FeaturedCategorySection({ category, products, tinted }: FeaturedCategorySectionProps) {
  if (products.length === 0) return null;
  const href = categoryHref(category.slug);

  return (
    <section className={tinted ? "border-t border-border bg-canvas-secondary py-16 sm:py-20" : "border-t border-border py-16 sm:py-20"}>
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured"
            heading={category.name}
            subheading={category.description ?? undefined}
            align="left"
          />
          <Link
            href={href}
            className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-ink"
          >
            View All
            <Icon name="arrow-right" size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
