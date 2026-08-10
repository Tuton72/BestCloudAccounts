import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { HetznerArticle } from "@/components/product/hetzner-article";
import { articleTags } from "@/config/content/hetzner-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "hetzner-account";

/**
 * Dedicated top-level route for the Hetzner product. Previously served at
 * /cloud-accounts/hetzner-account; that path now permanently redirects
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

export default function HetznerAccountPage() {
  return (
    <div>
      {/* Existing Hetzner hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} showVariantPricingGrid />

      <ContactPrompt
        heading="Need Help Choosing a Hetzner Account?"
        description="Have questions about Hetzner Cloud accounts, server plans, traffic limits, data center locations, VPS specifications, or account variants? Our team is available to help you choose the appropriate option."
      />
      <HetznerArticle />
    </div>
  );
}
