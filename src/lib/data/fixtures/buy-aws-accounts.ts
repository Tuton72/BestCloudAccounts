import type { Product, ProductSpecification } from "@/types/catalog";
import { SHARED_PRODUCT_FAQS, SHARED_PRODUCT_FEATURES } from "./shared";

const CATEGORY_ID = "a0000000-0000-4000-8000-000000000005";

interface Spec {
  n: number;
  name: string;
  slug: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  badge?: string | null;
  featured?: boolean;
  variantName: string;
  specs: ProductSpecification[];
}

/**
 * The "Amazon AWS" listing under Cloud Accounts. This intentionally mirrors
 * the exact names/variants/prices already used by the AWS Accounts, AWS AI
 * Accounts, and AWS Credit Accounts categories — the business asked for the
 * same 19 products re-hosted as their own category/route, not new data.
 * Nothing here is invented: no new specs, variants, or prices.
 */
function buildProduct({
  n,
  name,
  slug,
  shortDescription,
  price,
  compareAtPrice,
  badge = null,
  featured = false,
  variantName,
  specs,
}: Spec): Product {
  const id = `40000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  const variantId = `50000000-0000-4000-8000-${String(n).padStart(12, "0")}`;

  return {
    id,
    categoryId: CATEGORY_ID,
    categorySlug: "buy-aws-accounts",
    provider: "Amazon AWS",
    name,
    slug,
    shortDescription,
    basePrice: price,
    compareAtPrice: compareAtPrice ?? null,
    status: "active",
    featured,
    badge,
    sortOrder: n,
    specifications: specs,
    features: SHARED_PRODUCT_FEATURES,
    faqs: SHARED_PRODUCT_FAQS,
    variants: [
      {
        id: variantId,
        productId: id,
        name: variantName,
        slug,
        price,
        compareAtPrice: compareAtPrice ?? null,
        specifications: Object.fromEntries(specs.map((s) => [s.label, s.value])),
        stockStatus: "in_stock",
        isDefault: true,
        sortOrder: 1,
      },
    ],
  };
}

export const BUY_AWS_ACCOUNTS: Product[] = [
  buildProduct({
    n: 1,
    name: "Buy AWS 512vCPU Account",
    slug: "512-vcpu-account",
    shortDescription: "High-capacity Amazon AWS account for large, demanding workloads.",
    price: 290,
    featured: true,
    variantName: "512 vCPU",
    specs: [{ label: "Compute", value: "512 vCPU" }],
  }),
  buildProduct({
    n: 2,
    name: "Buy AWS 256vCPU Account",
    slug: "256-vcpu-account",
    shortDescription: "High-capacity Amazon AWS account for heavy compute workloads.",
    price: 180,
    featured: true,
    variantName: "256 vCPU",
    specs: [{ label: "Compute", value: "256 vCPU" }],
  }),
  buildProduct({
    n: 3,
    name: "Buy AWS 128 vCPU Account",
    slug: "128-vcpu-account",
    shortDescription: "Mid-to-high tier Amazon AWS account for scaling workloads.",
    price: 110,
    variantName: "128 vCPU",
    specs: [{ label: "Compute", value: "128 vCPU" }],
  }),
  buildProduct({
    n: 4,
    name: "Buy AWS 64 vCPU Account",
    slug: "64-vcpu-account",
    shortDescription: "Balanced Amazon AWS account for general-purpose workloads.",
    price: 70,
    variantName: "64 vCPU",
    specs: [{ label: "Compute", value: "64 vCPU" }],
  }),
  buildProduct({
    n: 5,
    name: "Buy AWS 32 vCPU Account",
    slug: "32-vcpu-account",
    shortDescription: "Amazon AWS account available in multiple configuration tiers.",
    price: 38,
    compareAtPrice: 420,
    badge: "Multiple Variants",
    featured: true,
    variantName: "32 vCPU",
    specs: [
      { label: "Compute", value: "32 vCPU" },
      { label: "Price Range", value: "$38 – $420" },
    ],
  }),
  buildProduct({
    n: 6,
    name: "Buy AWS 8 vCPU Account",
    slug: "8-vcpu-account",
    shortDescription: "Entry-level Amazon AWS account available in multiple configuration tiers.",
    price: 20,
    compareAtPrice: 890,
    badge: "Multiple Variants",
    variantName: "8 vCPU",
    specs: [
      { label: "Compute", value: "8 vCPU" },
      { label: "Price Range", value: "$20 – $890" },
    ],
  }),
  buildProduct({
    n: 7,
    name: "Buy AWS Free Trial Account",
    slug: "free-trial-account",
    shortDescription: "Free trial Amazon AWS account to evaluate before purchasing.",
    price: 15,
    variantName: "Free Trial",
    specs: [{ label: "Access", value: "Free Trial" }],
  }),

  buildProduct({
    n: 8,
    name: "Buy AWS 1k Credit Account",
    slug: "1k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 1,000 of promotional credit.",
    price: 240,
    featured: true,
    variantName: "1,000 Credit",
    specs: [{ label: "Credit Amount", value: "1,000 Credit" }],
  }),
  buildProduct({
    n: 9,
    name: "Buy AWS 5k Credit Account",
    slug: "5k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 5,000 of promotional credit.",
    price: 1199,
    featured: true,
    variantName: "5,000 Credit",
    specs: [{ label: "Credit Amount", value: "5,000 Credit" }],
  }),
  buildProduct({
    n: 10,
    name: "Buy AWS 10k Credit Account",
    slug: "10k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 10,000 of promotional credit.",
    price: 2399,
    featured: true,
    variantName: "10,000 Credit",
    specs: [{ label: "Credit Amount", value: "10,000 Credit" }],
  }),
  buildProduct({
    n: 11,
    name: "Buy AWS 25k Credit Account",
    slug: "25k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 25,000 of promotional credit.",
    price: 4999,
    variantName: "25,000 Credit",
    specs: [{ label: "Credit Amount", value: "25,000 Credit" }],
  }),
  buildProduct({
    n: 12,
    name: "Buy AWS 50k Credit Account",
    slug: "50k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 50,000 of promotional credit.",
    price: 7499,
    variantName: "50,000 Credit",
    specs: [{ label: "Credit Amount", value: "50,000 Credit" }],
  }),
  buildProduct({
    n: 13,
    name: "Buy AWS 100k Credit Account",
    slug: "100k-credit-account",
    shortDescription: "Amazon AWS account pre-loaded with 100,000 of promotional credit.",
    price: 12999,
    variantName: "100,000 Credit",
    specs: [{ label: "Credit Amount", value: "100,000 Credit" }],
  }),

  buildProduct({
    n: 14,
    name: "Buy AWS Account — 10 RPM | 32 vCPU | Gmail | N. Virginia | 2FA + API",
    slug: "10-rpm-32-vcpu-account",
    shortDescription: "Amazon AWS account with 10 RPM, 32 vCPU, Gmail login, and N. Virginia region.",
    price: 70,
    featured: true,
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "10 RPM" },
      { label: "Compute", value: "32 vCPU" },
      { label: "Email", value: "Gmail" },
      { label: "Region", value: "N. Virginia" },
      { label: "Security", value: "2FA" },
      { label: "Access", value: "API" },
    ],
  }),
  buildProduct({
    n: 15,
    name: "Buy AWS Account — 50 RPM | Kiro Working | 32 vCPU | Gmail | 2FA + API",
    slug: "50-rpm-kiro-32-vcpu-account",
    shortDescription: "Amazon AWS account with 50 RPM, Kiro-working status, 32 vCPU, and Gmail login.",
    price: 220,
    featured: true,
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "50 RPM" },
      { label: "Status", value: "Kiro Working" },
      { label: "Compute", value: "32 vCPU" },
      { label: "Email", value: "Gmail" },
      { label: "Security", value: "2FA" },
      { label: "Access", value: "API" },
    ],
  }),
  buildProduct({
    n: 16,
    name: "Buy AWS Account — 10K RPM | 4.6 Support | 5 vCPU | Multi-Year Aged",
    slug: "10k-rpm-5-vcpu-aged-account",
    shortDescription: "Multi-year aged Amazon AWS account with 10K RPM, 5 vCPU, and 4.6-rated support.",
    price: 220,
    badge: "Aged",
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "10K RPM" },
      { label: "Support", value: "4.6 Support" },
      { label: "Compute", value: "5 vCPU" },
      { label: "Account Age", value: "Multi-Year Aged" },
    ],
  }),
  buildProduct({
    n: 17,
    name: "Buy AWS Account — 10K RPM | 4.6 Support | 96 vCPU | Multi-Year Aged",
    slug: "10k-rpm-96-vcpu-aged-account",
    shortDescription: "Multi-year aged Amazon AWS account with 10K RPM, 96 vCPU, and 4.6-rated support.",
    price: 350,
    badge: "Aged",
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "10K RPM" },
      { label: "Support", value: "4.6 Support" },
      { label: "Compute", value: "96 vCPU" },
      { label: "Account Age", value: "Multi-Year Aged" },
    ],
  }),
  buildProduct({
    n: 18,
    name: "Buy AWS Account — 10K RPM | 4.6 Support | 128 vCPU | Multi-Year Aged",
    slug: "10k-rpm-128-vcpu-aged-account",
    shortDescription: "Multi-year aged Amazon AWS account with 10K RPM, 128 vCPU, and 4.6-rated support.",
    price: 850,
    badge: "Aged",
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "10K RPM" },
      { label: "Support", value: "4.6 Support" },
      { label: "Compute", value: "128 vCPU" },
      { label: "Account Age", value: "Multi-Year Aged" },
    ],
  }),
  buildProduct({
    n: 19,
    name: "Buy AWS Account — 10K RPM | 4.6 Support | 256 vCPU | Multi-Year Aged",
    slug: "10k-rpm-256-vcpu-aged-account",
    shortDescription: "Multi-year aged Amazon AWS account with 10K RPM, 256 vCPU, and 4.6-rated support.",
    price: 900,
    badge: "Aged",
    featured: true,
    variantName: "Standard",
    specs: [
      { label: "Rate Limit", value: "10K RPM" },
      { label: "Support", value: "4.6 Support" },
      { label: "Compute", value: "256 vCPU" },
      { label: "Account Age", value: "Multi-Year Aged" },
    ],
  }),
];