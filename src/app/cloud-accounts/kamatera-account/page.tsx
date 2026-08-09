import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { KamateraArticle } from "@/components/product/kamatera-article";
import { articleTags } from "@/config/content/kamatera-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "kamatera-account";

/**
 * Static route that intentionally shadows /cloud-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the Kamatera page carry extra long-form content without
 * touching the generic ProductDetail route used by the other 12 Cloud
 * Account products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  const base = buildProductMetadata(product, category);
  return { ...base, keywords: [...articleTags] };
}

export default function KamateraAccountPage() {
  return (
    <div>
      {/* Existing Kamatera hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing a Kamatera Account?"
        description="Have questions about Kamatera accounts, free trials, cloud servers, VPS configurations, server limits, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <KamateraArticle />
    </div>
  );
}
