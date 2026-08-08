import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { getCategories } from "@/lib/data/categories";
import { getAllProducts, getProductsByCategory } from "@/lib/data/products";
import type { CategorySlug } from "@/types/catalog";

interface CategoryListingProps {
  /** Omit for the full /aws marketplace view across every category. */
  categorySlug?: CategorySlug;
}

export async function CategoryListing({ categorySlug }: CategoryListingProps) {
  const categories = await getCategories();
  const products = categorySlug ? await getProductsByCategory(categorySlug) : await getAllProducts();
  const activeCategory = categorySlug ? categories.find((c) => c.slug === categorySlug) : undefined;

  const heading = activeCategory?.name ?? "AWS Marketplace";
  const description =
    activeCategory?.description ??
    "Browse every AWS Account, AWS AI Account, and AWS Credit Account in one place — pricing shown up front.";

  return (
    <div>
      <div className="border-b border-border bg-canvas-secondary">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AWS", href: "/aws" },
              ...(activeCategory ? [{ label: activeCategory.name }] : []),
            ]}
          />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{heading}</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">{description}</p>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <ProductFilters categories={categories} />
        <div className="mt-8">
          <ProductGrid products={products} categories={categories} emptyMessage="No products in this category yet." />
        </div>
      </Container>
    </div>
  );
}