import { formatPriceRange } from "@/lib/format";
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

interface ExplicitVariantInput {
  name: string;
  slug: string;
  price: number;
}

interface ExplicitVariantsSpec {
  n: number;
  provider: string;
  slug: string;
  name: string;
  shortDescription: string;
  variants: ExplicitVariantInput[];
  featured?: boolean;
}

/**
 * Products with a real, supplied variant breakdown — an exact name and
 * price for every configuration, rather than the single-placeholder price
 * range `rangeProduct()` uses. The first supplied variant becomes the
 * default; basePrice and the "Price Range" spec badge are derived
 * (min/max) from the supplied variant prices, never invented.
 */
function explicitVariantsProduct({
  n,
  provider,
  slug,
  name,
  shortDescription,
  variants,
  featured = false,
}: ExplicitVariantsSpec): Product {
  const id = `20000000-0000-4000-8000-${String(n).padStart(12, "0")}`;
  const prices = variants.map((v) => v.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    id,
    categoryId: CATEGORY_ID,
    categorySlug: "cloud-accounts",
    provider,
    name,
    slug,
    shortDescription,
    basePrice: minPrice,
    status: "active",
    featured,
    badge: null,
    sortOrder: n,
    specifications: [{ label: "Price Range", value: formatPriceRange(minPrice, maxPrice) }],
    features: SHARED_PRODUCT_FEATURES,
    faqs: SHARED_PRODUCT_FAQS,
    variants: variants.map((v, i) => ({
      id: `40000000-0000-4000-8000-${String(n).padStart(6, "0")}${String(i + 1).padStart(6, "0")}`,
      productId: id,
      name: v.name,
      slug: v.slug,
      price: v.price,
      specifications: {},
      stockStatus: "in_stock",
      isDefault: i === 0,
      sortOrder: i + 1,
    })),
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
  explicitVariantsProduct({
    n: 11,
    provider: "Hetzner",
    slug: "hetzner-account",
    name: "Buy Hetzner Account",
    shortDescription: "Hetzner account available in multiple configuration tiers.",
    variants: [
      { name: "Hetzner 5 Server Limit Account", slug: "5-server-limit", price: 50 },
      { name: "Hetzner 10 Server Limit Account", slug: "10-server-limit", price: 70 },
      { name: "Hetzner 50 Server Limit Account", slug: "50-server-limit", price: 320 },
      { name: "Hetzner 100 Server Limit Account", slug: "100-server-limit", price: 599 },
      { name: "Hetzner Open Port Account Account", slug: "open-port-account", price: 180 },
    ],
  }),
  explicitVariantsProduct({
    n: 12,
    provider: "DigitalOcean",
    slug: "digital-ocean-account",
    name: "Buy Digital Ocean Account",
    shortDescription: "DigitalOcean account available in multiple configuration tiers.",
    featured: true,
    variants: [
      { name: "DigitalOcean Close Port 3 Droplet Account", slug: "close-port-3-droplet", price: 20 },
      { name: "DigitalOcean Close Port 10 Droplet Account", slug: "close-port-10-droplet", price: 30 },
      { name: "DigitalOcean Open Port 10 Droplet Account", slug: "open-port-10-droplet", price: 290 },
      { name: "DigitalOcean Close Port 25 Droplet Account", slug: "close-port-25-droplet", price: 700 },
      { name: "DigitalOcean Close Port 100 Droplet Account", slug: "close-port-100-droplet", price: 2499 },
      { name: "DigitalOcean Close Port 500 Droplet Account", slug: "close-port-500-droplet", price: 8999 },
      { name: "DigitalOcean Close Port 2000 Droplet Account", slug: "close-port-2000-droplet", price: 16000 },
    ],
  }),
  explicitVariantsProduct({
    n: 13,
    provider: "Azure",
    slug: "azure-accounts",
    name: "Buy Azure Accounts",
    shortDescription: "Azure account available in multiple configuration tiers.",
    featured: true,
    variants: [
      { name: "Azure Free Trial With $200 Credit Account", slug: "free-trial-200-credit", price: 25 },
      { name: "Azure Pay-As-Go $200 Credit Account", slug: "pay-as-go-200-credit", price: 35 },
      { name: "Azure $1k Credit Account", slug: "1k-credit", price: 220 },
      { name: "Azure $5k Credit Account", slug: "5k-credit", price: 750 },
    ],
  }),
];
