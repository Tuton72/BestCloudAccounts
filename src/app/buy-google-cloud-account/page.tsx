import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { GoogleCloudArticle } from "@/components/product/google-cloud-article";
import { articleTags } from "@/config/content/google-cloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "google-cloud-account";

/**
 * Dedicated top-level route for the Google Cloud product. Previously
 * served at /cloud-accounts/google-cloud-account; that path now
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

export default function GoogleCloudAccountPage() {
  return (
    <div>
      {/* Existing Google Cloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy Google Cloud Account – Choose the Right Cloud Configuration",
          paragraph:
            "Explore Google Cloud accounts with different cloud credit amounts, project access levels, and resource limits for development and business workloads. Compare the available variants and prices below to find the Google Cloud account that fits your needs.",
        }}
      />

      <GoogleCloudArticle />
    </div>
  );
}
