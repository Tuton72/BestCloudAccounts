/**
 * Central site configuration.
 * Update these values once real domain/branding/contact details are final —
 * metadata, footer, header CTAs, and structured data all read from here.
 */
export const siteConfig = {
  name: "BestCloudAccounts",
  title: "Best Cloud Accounts — Premium AWS Accounts & Credit",
  description:
    "Browse premium AWS accounts, AI-ready AWS accounts, and AWS credit packages. Clear pricing, fast ordering, professional support.",
  // Every SEO URL (metadataBase, canonical, OpenGraph, JSON-LD, sitemap.xml,
  // robots.txt) is built from this one value. Falls back to the real
  // production domain — not localhost — so that if NEXT_PUBLIC_SITE_URL is
  // ever unset in a deployment environment, production output stays
  // correct instead of silently emitting localhost URLs. Override with
  // NEXT_PUBLIC_SITE_URL=http://localhost:3000 in .env.local for local dev
  // if you want dev-time URLs to reflect localhost instead.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bestcloudaccounts.com",
  ogImage: "/og-image.png",
  locale: "en_US",
  keywords: [
    "AWS accounts",
    "buy AWS account",
    "AWS credit account",
    "AWS AI account",
    "cloud accounts marketplace",
  ],
  links: {
    // Fill in the real support/order channel — the OrderButton and header
    // CTAs read from here so there is a single place to update it.
    telegram: "https://t.me/bestcloudaccounts",
    telegramSupport: "https://t.me/bestcloudaccounts_support",
    email: "support@bestcloudaccounts.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
