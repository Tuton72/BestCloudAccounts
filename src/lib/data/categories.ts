import "server-only";
import type { Category, CategorySlug } from "@/types/catalog";
import { CATEGORIES } from "./fixtures";

/**
 * Data-access layer for categories.
 *
 * Every function here is async and returns the same domain shape a real
 * Supabase-backed implementation would — so swapping the fixture read below
 * for an actual query is a one-function change, not a UI rewrite:
 *
 *   const { data } = await supabase
 *     .from("categories")
 *     .select("*")
 *     .order("sort_order");
 */
export async function getCategories(): Promise<Category[]> {
  return [...CATEGORIES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getCategoryBySlug(slug: CategorySlug): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) ?? null;
}
