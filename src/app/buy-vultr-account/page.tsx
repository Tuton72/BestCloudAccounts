import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { VultrArticle } from "@/components/product/vultr-article";
import { articleTags } from "@/config/content/vultr-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "vultr-account";

/**
 * Dedicated top-level route for the Vultr product. Previously served at
 * /cloud-accounts/vultr-account; that path now permanently redirects here
 * (see next.config.ts). The product's data category is still
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

export default function VultrAccountPage() {
  return (
    <div>
      {/* Existing Vultr hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing a Vultr Account?"
        description="Have questions about Vultr accounts, cloud credits, VPS access, instances, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <VultrArticle />
    </div>
  );
}
