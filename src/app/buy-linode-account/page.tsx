import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { LinodeArticle } from "@/components/product/linode-article";
import { articleTags } from "@/config/content/linode-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "linode-account";

/**
 * Dedicated top-level route for the Linode product. Previously served at
 * /cloud-accounts/linode-account; that path now permanently redirects
 * here (see next.config.ts). The product's data category is still
 * "cloud-accounts" — only the URL moved — so it still renders via the
 * same ProductDetail section plus its long-form article content as every
 * other Cloud Account product.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  const base = buildProductMetadata(product, category);
  return { ...base, keywords: [...articleTags] };
}

export default function LinodeAccountPage() {
  return (
    <div>
      {/* Existing Linode hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy Linode Account – Choose the Right VPS Plan",
          paragraph:
            "Explore Linode accounts with different VPS plans, CPU options, storage, and network transfer configurations across multiple data centers. Compare the available variants and prices below to find the Linode account that fits your needs.",
        }}
      />

      <LinodeArticle />
    </div>
  );
}
