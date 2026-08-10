import type { Metadata } from "next";
import { DigitalOceanArticle } from "@/components/product/digital-ocean-article";
import { ProductDetail } from "@/components/product/product-detail";
import { articleTags } from "@/config/content/digital-ocean-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "digital-ocean-account";

/**
 * Dedicated top-level route for the DigitalOcean product. Previously
 * served at /cloud-accounts/digital-ocean-account; that path now
 * permanently redirects here (see next.config.ts). The product's data
 * category is still "cloud-accounts" — only the URL moved — so it still
 * renders via the same ProductDetail section plus its long-form article
 * content as every other Cloud Account product.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  const base = buildProductMetadata(product, category);
  return { ...base, keywords: [...articleTags] };
}

export default function DigitalOceanAccountPage() {
  return (
    <div>
      {/* Existing DigitalOcean hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy DigitalOcean Account – Choose the Right Cloud Account",
          paragraph:
            "Explore DigitalOcean accounts with different Droplet limits and port configurations for development, hosting, and infrastructure workloads. Compare the available variants and prices below to find the DigitalOcean account that fits your needs.",
        }}
      />

      <DigitalOceanArticle />
    </div>
  );
}
