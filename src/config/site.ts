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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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
