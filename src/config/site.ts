/**
 * Central site configuration.
 * Update these values once real domain/branding details are available —
 * everything else (metadata, sitemap, robots, OG tags) reads from here.
 */
export const siteConfig = {
  name: "BestCloudAccounts",
  title: "BestCloudAccounts",
  description: "BestCloudAccounts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  locale: "en_US",
  keywords: [] as string[],
  links: {
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
