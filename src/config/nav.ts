export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup extends NavItem {
  /** Dropdown/mega-menu children, shown under this item on desktop; flattened into the mobile nav. */
  children?: NavItem[];
}

/** The 13 Cloud Account product pages — shared by the header dropdown and the footer. */
export const CLOUD_PROVIDER_LINKS: NavItem[] = [
  { label: "OVHCloud", href: "/cloud-accounts/ovhcloud-account" },
  { label: "IBM Cloud", href: "/cloud-accounts/ibm-cloud-account" },
  { label: "Verified iCloud", href: "/cloud-accounts/verified-icloud-account" },
  { label: "Alibaba Cloud", href: "/cloud-accounts/alibaba-cloud-account" },
  { label: "UpCloud", href: "/cloud-accounts/upcloud-account" },
  { label: "Kamatera", href: "/cloud-accounts/kamatera-account" },
  { label: "Oracle Cloud", href: "/cloud-accounts/oracle-cloud-account" },
  { label: "Google Cloud", href: "/cloud-accounts/google-cloud-account" },
  { label: "Linode", href: "/cloud-accounts/linode-account" },
  { label: "Vultr", href: "/cloud-accounts/vultr-account" },
  { label: "Hetzner", href: "/cloud-accounts/hetzner-account" },
  { label: "DigitalOcean", href: "/cloud-accounts/digital-ocean-account" },
  { label: "Azure Accounts", href: "/cloud-accounts/azure-accounts" },
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
