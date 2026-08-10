export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup extends NavItem {
  /** Dropdown/mega-menu children, shown under this item on desktop; flattened into the mobile nav. */
  children?: NavItem[];
}

/**
 * The 13 Cloud Account product pages, plus the Amazon AWS listing page —
 * shared by the header dropdown and the footer. Each product href below is
 * that product's real, current `productSlug` (see src/lib/routes.ts /
 * src/lib/slug.ts) — kept here as literal strings, matching this file's
 * existing static/sync architecture, rather than importing the product
 * catalog into client-bundled nav config. If any of these 13 products'
 * titles ever change, its productSlug (and so this href) changes too.
 */
export const CLOUD_PROVIDER_LINKS: NavItem[] = [
  { label: "OVHCloud", href: "/Buy-OVHCloud-Account" },
  { label: "IBM Cloud", href: "/Buy-IBM-Cloud-Account" },
  { label: "Verified iCloud", href: "/Buy-Verified-iCloud-Account" },
  { label: "Alibaba Cloud", href: "/Buy-Alibaba-Cloud-Account" },
  { label: "UpCloud", href: "/Buy-UpCloud-Account" },
  { label: "Kamatera", href: "/Buy-Kamatera-Account" },
  { label: "Oracle Cloud", href: "/Buy-Oracle-Cloud-Account" },
  { label: "Google Cloud", href: "/Buy-Google-Cloud-Account" },
  { label: "Linode", href: "/Buy-Linode-Account" },
  { label: "Vultr", href: "/Buy-Vultr-Account" },
  { label: "Hetzner", href: "/Buy-Hetzner-Account" },
  { label: "DigitalOcean", href: "/Buy-Digital-Ocean-Account" },
  { label: "Azure Accounts", href: "/Buy-Azure-Accounts" },
  { label: "Amazon AWS", href: "/buy-aws-accounts" },
];

/** The 3 AWS sub-categories — shared by the header dropdown and the footer. */
export const AWS_CATEGORY_LINKS: NavItem[] = [
  { label: "AWS Accounts", href: "/aws-accounts" },
  { label: "AWS AI Accounts", href: "/aws-ai-accounts" },
  { label: "AWS Credit Accounts", href: "/aws-credit-accounts" },
];

/** Primary header navigation (desktop mega-menu + mobile). */
export const MAIN_NAV: NavGroup[] = [
  { label: "Cloud Accounts", href: "/cloud-accounts", children: CLOUD_PROVIDER_LINKS },
  { label: "AWS", href: "/aws", children: AWS_CATEGORY_LINKS },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  cloudAccounts: CLOUD_PROVIDER_LINKS,
  aws: AWS_CATEGORY_LINKS,
  company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ] satisfies NavItem[],
};
