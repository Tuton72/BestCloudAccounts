import type { NextConfig } from "next";
import { ALL_PRODUCTS } from "./src/lib/data/fixtures";

/**
 * Historical dedicated-route slugs for the 13 Cloud Account products —
 * these products lived at /buy-{slug} (and, before that, at
 * /cloud-accounts/{slug}) before every product moved to the single
 * `/[productSlug]` route. Kept here only so every old URL can redirect
 * straight to the new one in a single hop — not used anywhere else.
 */
const LEGACY_CLOUD_ACCOUNT_DEDICATED_SLUG: Record<string, string> = {
  "ovhcloud-account": "buy-ovhcloud-account",
  "ibm-cloud-account": "buy-ibm-cloud-account",
  "verified-icloud-account": "buy-verified-icloud-account",
  "alibaba-cloud-account": "buy-alibaba-cloud-account",
  "upcloud-account": "buy-upcloud-account",
  "kamatera-account": "buy-kamatera-account",
  "oracle-cloud-account": "buy-oracle-cloud-account",
  "google-cloud-account": "buy-google-cloud-account",
  "linode-account": "buy-linode-account",
  "vultr-account": "buy-vultr-account",
  "hetzner-account": "buy-hetzner-account",
  "digital-ocean-account": "buy-digital-ocean-account",
  "azure-accounts": "buy-azure-accounts",
};

/**
 * Every URL a product has ever lived at, mapped to its current
 * `/{productSlug}` URL — computed from the live catalog so this list can
 * never drift out of sync with the actual products, and so a future
 * product never needs a redirect entry added by hand.
 */
function buildLegacyProductRedirects() {
  const redirects: { source: string; destination: string; permanent: true }[] = [];

  for (const product of ALL_PRODUCTS) {
    const destination = `/${product.productSlug}`;
    const legacySources = new Set<string>();

    if (product.categorySlug === "cloud-accounts") {
      // Oldest URL, before the /buy-* migration.
      legacySources.add(`/cloud-accounts/${product.slug}`);
      const dedicated = LEGACY_CLOUD_ACCOUNT_DEDICATED_SLUG[product.slug];
      if (dedicated) legacySources.add(`/${dedicated}`);
    } else {
      // aws-accounts, aws-credit-accounts, aws-ai-accounts, buy-aws-accounts
      // all previously resolved at /{categorySlug}/{slug}.
      legacySources.add(`/${product.categorySlug}/${product.slug}`);
    }

    for (const source of legacySources) {
      // Next.js matches redirect `source` case-insensitively, so a source
      // that's case-insensitively identical to its destination (true for
      // several of the old dedicated /buy-{slug} paths, which already
      // closely matched the new productSlug casing) would redirect the new
      // URL to itself. Skip those — src/app/[productSlug]/page.tsx handles
      // canonicalizing any wrong-case request to the exact-case URL instead.
      if (source.toLowerCase() !== destination.toLowerCase()) {
        redirects.push({ source, destination, permanent: true });
      }
    }
  }

  return redirects;
}

const nextConfig: NextConfig = {
  async redirects() {
    return buildLegacyProductRedirects();
  },
};

export default nextConfig;
