import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { DigitalOceanArticle } from "@/components/product/digital-ocean-article";
import { ProductDetail } from "@/components/product/product-detail";
import { articleTags } from "@/config/content/digital-ocean-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "digital-ocean-account";

/**
 * Static route that intentionally shadows /cloud-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the DigitalOcean page carry extra long-form content without
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

export default function DigitalOceanAccountPage() {
  return (
    <div>
      {/* Existing DigitalOcean hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing a DigitalOcean Account?"
        description="Have questions about DigitalOcean accounts, credits, Droplets, Port 25, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <DigitalOceanArticle />
    </div>
  );
}
