import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { VerifiedICloudArticle } from "@/components/product/verified-icloud-article";
import { articleTags } from "@/config/content/verified-icloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "verified-icloud-account";

/**
 * Dedicated top-level route for the Verified iCloud product. Previously
 * served at /cloud-accounts/verified-icloud-account; that path now
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

export default function VerifiedICloudAccountPage() {
  return (
    <div>
      {/* Existing Verified iCloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy Verified iCloud Account – Choose the Right Storage Plan",
          paragraph:
            "Explore verified iCloud accounts with different regions, storage capacities, and Apple service access. Compare the available variants and prices below to find the iCloud account that fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing a Verified iCloud Account?"
        description="Have questions about iCloud accounts, regions, storage, Apple services, verification, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <VerifiedICloudArticle />
    </div>
  );
}
