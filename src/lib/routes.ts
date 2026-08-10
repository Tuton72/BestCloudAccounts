import type { CategorySlug, Product } from "@/types/catalog";

/**
 * Explicit route overrides for the 13 Cloud Account products that moved to
 * dedicated top-level "/buy-*" URLs (previously served at
 * /cloud-accounts/{slug}, which now permanently redirect here — see
 * next.config.ts). Keyed by product slug; only ever consulted for products
 * in the "cloud-accounts" category, so it cannot accidentally match a
 * same-named slug in another category. Product data (name, price, variant,
 * category) is untouched — only where each product's detail page lives.
 */
const CLOUD_ACCOUNT_ROUTE_OVERRIDES: Record<string, string> = {
  "ovhcloud-account": "/buy-ovhcloud-account",
  "ibm-cloud-account": "/buy-ibm-cloud-account",
  "verified-icloud-account": "/buy-verified-icloud-account",
  "alibaba-cloud-account": "/buy-alibaba-cloud-account",
  "upcloud-account": "/buy-upcloud-account",
  "kamatera-account": "/buy-kamatera-account",
  "oracle-cloud-account": "/buy-oracle-cloud-account",
  "google-cloud-account": "/buy-google-cloud-account",
  "linode-account": "/buy-linode-account",
  "vultr-account": "/buy-vultr-account",
  "hetzner-account": "/buy-hetzner-account",
  "digital-ocean-account": "/buy-digital-ocean-account",
  "azure-accounts": "/buy-azure-accounts",
};

/**
 * True for the 13 Cloud Account product slugs that now live at a dedicated
 * /buy-* route instead of /cloud-accounts/[slug] — used by the dynamic
 * [slug] route to exclude them from generateStaticParams (that path now
 * only exists as a redirect, defined in next.config.ts).
 */
export function hasDedicatedCloudAccountRoute(slug: string): boolean {
  return slug in CLOUD_ACCOUNT_ROUTE_OVERRIDES;
}

/** Category slugs double as their listing page path, e.g. /aws-accounts. */
export function categoryHref(categorySlug: CategorySlug): string {
  return `/${categorySlug}`;
}

/**
 * Product detail path, e.g. /aws-accounts/512-vcpu — except the 13 Cloud
 * Account products above, which resolve to their dedicated /buy-* route.
 */
export function productHref(product: Pick<Product, "categorySlug" | "slug">): string {
  if (product.categorySlug === "cloud-accounts") {
    const override = CLOUD_ACCOUNT_ROUTE_OVERRIDES[product.slug];
    if (override) return override;
  }
  return `/${product.categorySlug}/${product.slug}`;
}
