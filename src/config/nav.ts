export interface NavItem {
  label: string;
  href: string;
}

/** Primary header navigation (desktop + mobile). */
export const MAIN_NAV: NavItem[] = [
  { label: "Products", href: "/aws" },
  { label: "AWS Accounts", href: "/aws-accounts" },
  { label: "AWS AI", href: "/aws-ai-accounts" },
  { label: "AWS Credits", href: "/aws-credit-accounts" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  products: [
    { label: "AWS Accounts", href: "/aws-accounts" },
    { label: "AWS AI Accounts", href: "/aws-ai-accounts" },
    { label: "AWS Credit Accounts", href: "/aws-credit-accounts" },
  ] satisfies NavItem[],
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
