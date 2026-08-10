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
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} showVariantPricingGrid />

      <ContactPrompt
        heading="Need Help Choosing a DigitalOcean Account?"
        description="Have questions about DigitalOcean accounts, credits, Droplets, Port 25, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <DigitalOceanArticle />
    </div>
  );
}
