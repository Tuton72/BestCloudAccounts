import type { Product } from "@/types/catalog";
import { AWS_ACCOUNTS } from "./aws-accounts";
import { AWS_AI_ACCOUNTS } from "./aws-ai-accounts";
import { AWS_CREDIT_ACCOUNTS } from "./aws-credit-accounts";

export { CATEGORIES } from "./categories";

/**
 * Combined product catalog fixture.
 *
 * This is the seed data described in supabase/seed.sql, expressed as typed
 * TypeScript so pages can render (and be typechecked, linted, and built)
 * without a live Supabase project. See src/lib/data/products.ts for how
 * this gets swapped for real Supabase queries later.
 */
export const ALL_PRODUCTS: Product[] = [
  ...AWS_ACCOUNTS,
  ...AWS_AI_ACCOUNTS,
  ...AWS_CREDIT_ACCOUNTS,
];
