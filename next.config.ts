import type { NextConfig } from "next";

/**
 * Old -> new URLs for the 13 Cloud Account products that moved from
 * /cloud-accounts/{slug} to a dedicated top-level /buy-{slug} route.
 * Kept as permanent (308) redirects so previously indexed/bookmarked URLs
 * do not become dead links. See src/lib/routes.ts for the corresponding
 * productHref() override that makes every internal link point straight at
 * the new URL rather than relying on this redirect hop.
 */
const CLOUD_ACCOUNT_REDIRECTS = [
  ["ovhcloud-account", "buy-ovhcloud-account"],
  ["ibm-cloud-account", "buy-ibm-cloud-account"],
  ["verified-icloud-account", "buy-verified-icloud-account"],
  ["alibaba-cloud-account", "buy-alibaba-cloud-account"],
  ["upcloud-account", "buy-upcloud-account"],
  ["kamatera-account", "buy-kamatera-account"],
  ["oracle-cloud-account", "buy-oracle-cloud-account"],
  ["google-cloud-account", "buy-google-cloud-account"],
  ["linode-account", "buy-linode-account"],
  ["vultr-account", "buy-vultr-account"],
  ["hetzner-account", "buy-hetzner-account"],
  ["digital-ocean-account", "buy-digital-ocean-account"],
  ["azure-accounts", "buy-azure-accounts"],
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return CLOUD_ACCOUNT_REDIRECTS.map(([oldSlug, newSlug]) => ({
      source: `/cloud-accounts/${oldSlug}`,
      destination: `/${newSlug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
