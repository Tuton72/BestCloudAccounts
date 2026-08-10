import "server-only";
import type { CategorySlug, Product } from "@/types/catalog";
import { ALL_PRODUCTS } from "./fixtures";

/**
 * Data-access layer for products.
 *
 * Every function is async and returns the shared `Product` domain type, so
 * the fixture-backed implementation below can be swapped for real Supabase
 * queries later without touching any page or component. Each function notes
 * its Supabase equivalent (a `.select()` pulling the product plus its
 * related variants/specifications/features/faqs in one round trip).
 */

const byStatusActive = (product: Product) => product.status === "active";

/*
 * Supabase equivalent:
 *   supabase.from("products")
 *     .select("*, product_variants(*), product_specifications(*), product_features(*), product_faqs(*)")
 *     .eq("status", "active")
 *     .order("sort_order");
 */
export async function getAllProducts(): Promise<Product[]> {
  return [...ALL_PRODUCTS].filter(byStatusActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getProductsByCategory(categorySlug: CategorySlug): Promise<Product[]> {
  const products = await getAllProducts();
  return products.filter((product) => product.categorySlug === categorySlug);
}

export async function getFeaturedProducts(limit?: number): Promise<Product[]> {
  const products = await getAllProducts();
  const featured = products.filter((product) => product.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

/*
 * Supabase equivalent:
 *   supabase.from("products")
 *     .select("*, product_variants(*), product_specifications(*), product_features(*), product_faqs(*)")
 *     .eq("slug", slug)
 *     .eq("status", "active")
 *     .maybeSingle();
 */
export async function getProductBySlug(
  categorySlug: CategorySlug,
  slug: string,
): Promise<Product | null> {
  const products = await getProductsByCategory(categorySlug);
  return products.find((product) => product.slug === slug) ?? null;
}

/*
 * Supabase equivalent:
 *   supabase.from("products")
 *     .select("*, product_variants(*), product_specifications(*), product_features(*), product_faqs(*)")
 *     .eq("product_slug", productSlug)
 *     .eq("status", "active")
 *     .maybeSingle();
 */
export async function getProductByProductSlug(productSlug: string): Promise<Product | null> {
  const products = await getAllProducts();
  // Case-insensitive: Next.js's own routing/redirect matching is
  // case-insensitive, so a request can reach this with any casing of a
  // valid slug. The route itself (src/app/[productSlug]/page.tsx)
  // redirects to the exact-case canonical URL when they differ.
  const target = productSlug.toLowerCase();
  return products.find((product) => product.productSlug.toLowerCase() === target) ?? null;
}

/** Products from the same category, excluding the current product. */
export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  const categoryProducts = await getProductsByCategory(product.categorySlug);
  return categoryProducts.filter((p) => p.id !== product.id).slice(0, limit);
}

export interface CatalogStats {
  totalProducts: number;
  awsAccounts: number;
  awsAiAccounts: number;
  awsCreditAccounts: number;
}

/** Real, data-derived counts for the trust-stats section — never hard-coded. */
export async function getCatalogStats(): Promise<CatalogStats> {
  const products = await getAllProducts();
  return {
    totalProducts: products.length,
    awsAccounts: products.filter((p) => p.categorySlug === "aws-accounts").length,
    awsAiAccounts: products.filter((p) => p.categorySlug === "aws-ai-accounts").length,
    awsCreditAccounts: products.filter((p) => p.categorySlug === "aws-credit-accounts").length,
  };
}
