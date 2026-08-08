import type { Product } from "@/types/catalog";
import { SHARED_PRODUCT_FAQS, SHARED_PRODUCT_FEATURES } from "./shared";

const CATEGORY_ID = "a0000000-0000-4000-8000-000000000004";

interface RangeSpec {
  n: number;
  provider: string;
  slug: string;
  minPrice: number;
  maxPrice: number;
  featured?: boolean;
}

/**
 * Products explicitly specified as "Multiple Variants" with only a price
 * range given (no individual variant breakdown provided). One placeholder
 * variant is seeded holding that range — named "Standard", matching the
 * same convention already used for AWS AI accounts — so the price range
 * displays correctly while staying ready for real variants to be added
 * later via the admin/database, without inventing any.
 */
function rangeProduct({ n, provider, slug, minPrice, maxPrice, featured = false }: RangeSpec): Product {
  const id = `20000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  const variantId = `30000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  return {
    id,
    categoryId: CATEGORY_ID,
    categorySlug: "cloud-accounts",
    provider,
    name: `Buy ${provider} Account`,
    slug,
    shortDescription: `${provider} account available in multiple configuration tiers.`,
    basePrice: minPrice,
    compareAtPrice: maxPrice,
    status: "active",
    featured,
    badge: "Multiple Variants",
    sortOrder: n,
    specifications: [{ label: "Price Range", value: `$${minPrice.toLocaleString("en-US")} – $${maxPrice.toLocaleString("en-US")}` }],
    features: SHARED_PRODUCT_FEATURES,
    faqs: SHARED_PRODUCT_FAQS,
    variants: [
      {
        id: variantId,
        productId: id,
        name: "Standard",
        slug: "standard",
        price: minPrice,
        compareAtPrice: maxPrice,
        specifications: {},
        stockStatus: "in_stock",
        isDefault: true,
        sortOrder: 1,
      },
    ],
  };
}

interface SingleSpec {
  n: number;
  provider: string;
  slug: string;
  price: number;
  featured?: boolean;
}

/** Products explicitly specified as "Standard / Single Product" — one default variant, one price. */
function singleProduct({ n, provider, slug, price, featured = false }: SingleSpec): Product {
  const id = `20000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  const variantId = `30000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  return {
    id,
    categoryId: CATEGORY_ID,
    categorySlug: "cloud-accounts",
    provider,
    name: `Buy ${provider} Account`,
    slug,
    shortDescription: `Standard ${provider} account, ready to use.`,
    basePrice: price,
    status: "active",
    featured,
    badge: null,
    sortOrder: n,
    specifications: [],
    features: SHARED_PRODUCT_FEATURES,
    faqs: SHARED_PRODUCT_FAQS,
    variants: [
      {
        id: variantId,
        productId: id,
        name: "Standard",
        slug: "standard",
        price,
        specifications: {},
        stockStatus: "in_stock",
        isDefault: true,
        sortOrder: 1,
      },
    ],
  };
}

export const CLOUD_ACCOUNTS: Product[] = [
  rangeProduct({ n: 1, provider: "OVHCloud", slug: "ovhcloud-account", minPrice: 35, maxPrice: 999 }),
  singleProduct({ n: 2, provider: "IBM Cloud", slug: "ibm-cloud-account", price: 40 }),
  {
    ...rangeProduct({ n: 3, provider: "iCloud", slug: "verified-icloud-account", minPrice: 25, maxPrice: 399 }),
    name: "Buy Verified iCloud Account",
    shortDescription: "Verified iCloud account available in multiple configuration tiers.",
  },
  rangeProduct({ n: 4, provider: "Alibaba Cloud", slug: "alibaba-cloud-account", minPrice: 60, maxPrice: 99 }),
  singleProduct({ n: 5, provider: "UpCloud", slug: "upcloud-account", price: 30 }),
  rangeProduct({ n: 6, provider: "Kamatera", slug: "kamatera-account", minPrice: 25, maxPrice: 40 }),
  rangeProduct({ n: 7, provider: "Oracle Cloud", slug: "oracle-cloud-account", minPrice: 40, maxPrice: 130 }),
  rangeProduct({ n: 8, provider: "Google Cloud", slug: "google-cloud-account", minPrice: 80, maxPrice: 1499, featured: true }),
  rangeProduct({ n: 9, provider: "Linode", slug: "linode-account", minPrice: 25, maxPrice: 130 }),
  rangeProduct({ n: 10, provider: "Vultr", slug: "vultr-account", minPrice: 30, maxPrice: 99, featured: true }),
  rangeProduct({ n: 11, provider: "Hetzner", slug: "hetzner-account", minPrice: 40, maxPrice: 999 }),
  {
    ...rangeProduct({ n: 12, provider: "DigitalOcean", slug: "digital-ocean-account", minPrice: 20, maxPrice: 299, featured: true }),
    name: "Buy Digital Ocean Account",
  },
  {
    ...rangeProduct({ n: 13, provider: "Azure", slug: "azure-accounts", minPrice: 20, maxPrice: 40, featured: true }),
    name: "Buy Azure Accounts",
    shortDescription: "Azure account available in multiple configuration tiers.",
  },
];
