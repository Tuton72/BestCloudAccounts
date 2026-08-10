import type { Product, ProductSeed } from "@/types/catalog";
// Relative import (not the "@/" alias) — this module is also imported
// directly by next.config.ts to generate legacy-URL redirects, and the
// alias isn't resolved outside the normal Next.js app build pipeline.
import { slugifyProductTitle } from "../../slug";
import { AWS_ACCOUNTS } from "./aws-accounts";
import { AWS_AI_ACCOUNTS } from "./aws-ai-accounts";
import { AWS_CREDIT_ACCOUNTS } from "./aws-credit-accounts";
import { BUY_AWS_ACCOUNTS } from "./buy-aws-accounts";
import { CLOUD_ACCOUNTS } from "./cloud-accounts";

export { CATEGORIES } from "./categories";

/**
 * Combined product catalog fixture.
 *
 * This is the seed data described in supabase/seed.sql, expressed as typed
 * TypeScript so pages can render (and be typechecked, linted, and built)
 * without a live Supabase project. See src/lib/data/products.ts for how
 * this gets swapped for real Supabase queries later.
 */
const SEED_PRODUCTS: ProductSeed[] = [
  ...CLOUD_ACCOUNTS,
  ...AWS_ACCOUNTS,
  ...AWS_AI_ACCOUNTS,
  ...AWS_CREDIT_ACCOUNTS,
  ...BUY_AWS_ACCOUNTS,
];

/**
 * Attaches `productSlug` to every product, generated once from its title
 * (see slugifyProductTitle) — this is the only place that happens, so every
 * current and future product in the arrays above gets a URL-ready slug
 * automatically, with no per-product or per-page work required.
 *
 * The "buy-aws-accounts" category deliberately mirrors the same 19 product
 * titles already used by aws-accounts / aws-credit-accounts / aws-ai-accounts
 * (re-hosted as their own collection — see buy-aws-accounts.ts), so a
 * title-only slug would collide for those 19 pairs. Resolved deterministically
 * by assembly order: the first product to claim a slug keeps it clean; any
 * later product whose title produces the same slug gets "-2", "-3", etc.
 * appended. In practice this only ever affects the buy-aws-accounts mirrors,
 * since they're assembled last.
 */
function withProductSlugs(products: ProductSeed[]): Product[] {
  const used = new Set<string>();
  return products.map((product) => {
    const base = slugifyProductTitle(product.name);
    let candidate = base;
    let suffix = 2;
    while (used.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }
    used.add(candidate);
    return { ...product, productSlug: candidate };
  });
}

export const ALL_PRODUCTS: Product[] = withProductSlugs(SEED_PRODUCTS);
