import type { CategorySlug, Product } from "@/types/catalog";

/** Category slugs double as their listing page path, e.g. /aws-accounts. */
export function categoryHref(categorySlug: CategorySlug): string {
  return `/${categorySlug}`;
}

/** Product detail path, e.g. /aws-accounts/512-vcpu. */
export function productHref(product: Pick<Product, "categorySlug" | "slug">): string {
  return `/${product.categorySlug}/${product.slug}`;
}
