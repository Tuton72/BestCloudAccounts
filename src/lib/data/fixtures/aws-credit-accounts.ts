import type { ProductSeed } from "@/types/catalog";
import { SHARED_PRODUCT_FAQS, SHARED_PRODUCT_FEATURES } from "./shared";

const CATEGORY_ID = "a0000000-0000-4000-8000-000000000003";

/**
 * @param kLabel        e.g. "1k" — used in the product name/slug, matching the spec.
 * @param creditLabel   e.g. "1,000" — used in the variant name/spec, matching the spec.
 */
function creditProduct(
  n: number,
  kLabel: string,
  creditLabel: string,
  price: number,
  featured: boolean,
): ProductSeed {
  const id = `d0000000-0000-4000-8000-00000000000${n}`;
  const variantId = `10000000-0000-4000-8000-00000000000${n}`;
  const slug = `${kLabel}-credit`;
  return {
    id,
    categoryId: CATEGORY_ID,
    categorySlug: "aws-credit-accounts",
    provider: "AWS",
    name: `Buy AWS ${kLabel} Credit Account`,
    slug,
    shortDescription: `AWS account pre-loaded with ${creditLabel} of promotional credit.`,
    basePrice: price,
    status: "active",
    featured,
    badge: null,
    sortOrder: n,
    specifications: [{ label: "Credit Amount", value: `${creditLabel} Credit` }],
    features: SHARED_PRODUCT_FEATURES,
    faqs: SHARED_PRODUCT_FAQS,
    variants: [
      {
        id: variantId,
        productId: id,
        name: `${creditLabel} Credit`,
        slug: `${kLabel.replace("k", "000")}-credit`,
        price,
        specifications: { "Credit Amount": `${creditLabel} Credit` },
        stockStatus: "in_stock",
        isDefault: true,
        sortOrder: 1,
      },
    ],
  };
}

export const AWS_CREDIT_ACCOUNTS: ProductSeed[] = [
  creditProduct(1, "1k", "1,000", 240, true),
  creditProduct(2, "5k", "5,000", 1199, true),
  creditProduct(3, "10k", "10,000", 2399, true),
  creditProduct(4, "25k", "25,000", 4999, false),
  creditProduct(5, "50k", "50,000", 7499, false),
  creditProduct(6, "100k", "100,000", 12999, false),
];
