export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup extends NavItem {
  /** Dropdown/mega-menu children, shown under this item on desktop; flattened into the mobile nav. */
  children?: NavItem[];
}

/** The 13 Cloud Account product pages, plus the Amazon AWS listing page — shared by the header dropdown and the footer. */
export const CLOUD_PROVIDER_LINKS: NavItem[] = [
  { label: "OVHCloud", href: "/buy-ovhcloud-account" },
  { label: "IBM Cloud", href: "/buy-ibm-cloud-account" },
  { label: "Verified iCloud", href: "/buy-verified-icloud-account" },
  { label: "Alibaba Cloud", href: "/buy-alibaba-cloud-account" },
  { label: "UpCloud", href: "/buy-upcloud-account" },
  { label: "Kamatera", href: "/buy-kamatera-account" },
  { label: "Oracle Cloud", href: "/buy-oracle-cloud-account" },
  { label: "Google Cloud", href: "/buy-google-cloud-account" },
  { label: "Linode", href: "/buy-linode-account" },
  { label: "Vultr", href: "/buy-vultr-account" },
  { label: "Hetzner", href: "/buy-hetzner-account" },
  { label: "DigitalOcean", href: "/buy-digital-ocean-account" },
  { label: "Azure Accounts", href: "/buy-azure-accounts" },
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
