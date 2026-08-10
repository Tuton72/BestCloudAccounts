import type { Category, Product } from "@/types/catalog";

/**
 * Fallback SEO intro (H1 + caption) shown above the pricing section on
 * every product page, matching the /buy-azure-accounts design reference.
 * Pages that deserve bespoke wording pass their own `topIntro` prop to
 * `ProductDetail`; every other product page (including ones generated
 * from a dynamic [slug] route, where hand-authoring per-product copy
 * isn't practical) falls back to this generator instead. Everything here
 * is derived from the product's own real data (provider, category,
 * shortDescription) — nothing invented, nothing borrowed from Azure.
 */

const CATEGORY_QUALIFIER: Partial<Record<Category["slug"], string>> = {
  "aws-credit-accounts": "Credit Plan",
  "aws-ai-accounts": "AI Configuration",
  "aws-accounts": "Account Configuration",
  "buy-aws-accounts": "Account Configuration",
  "cloud-accounts": "Configuration",
};

export function buildDefaultTopIntro(product: Product, category: Category): { title: string; paragraph: string } {
  const qualifier = CATEGORY_QUALIFIER[category.slug] ?? "Configuration";
  const title = `Buy ${product.provider} Account – Choose the Right ${qualifier}`;

  const lead = product.shortDescription
    ? product.shortDescription.trim()
    : `Explore ${product.provider} accounts with different configurations for development, cloud infrastructure, testing, and business workloads.`;
  const leadSentence = /[.!?]$/.test(lead) ? lead : `${lead}.`;

  const paragraph =
    product.variants.length > 1
      ? `${leadSentence} Compare the available variants and prices below to find the ${product.provider} account that fits your needs.`
      : `${leadSentence} Compare the price and details below to see if this account fits your needs.`;

  return { title, paragraph };
}
