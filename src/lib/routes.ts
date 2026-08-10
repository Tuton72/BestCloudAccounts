import type { CategorySlug, Product } from "@/types/catalog";

/** Category slugs double as their listing page path, e.g. /aws-accounts. */
export function categoryHref(categorySlug: CategorySlug): string {
  return `/${categorySlug}`;
}

/**
 * Product detail path — every product, in every category, lives at a
 * single top-level `/[productSlug]` route (see src/app/[productSlug]/).
 * `productSlug` is generated once from the product's title and stored on
 * the product record (see fixtures/index.ts), so this never needs a
 * category/slug combination or any per-product override.
 */
export function productHref(product: Pick<Product, "productSlug">): string {
  return `/${product.productSlug}`;
}
