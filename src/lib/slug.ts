/**
 * Deterministic product-URL slug generator.
 *
 * Pure function of the product title — same input always produces the same
 * output, so a slug is stable for as long as the title doesn't change (see
 * `src/lib/data/fixtures/index.ts`, the single place this is applied to
 * every product exactly once).
 *
 * Rules: preserve capitalization and numbers from the title, convert spaces
 * to "-", strip characters that aren't URL-safe, collapse duplicate "-",
 * trim leading/trailing "-".
 */
export function slugifyProductTitle(title: string): string {
  return title
    .trim()
    .replace(/[^\p{L}\p{N}\s-]+/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
