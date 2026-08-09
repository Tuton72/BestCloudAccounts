import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { IbmCloudArticle } from "@/components/product/ibm-cloud-article";
import { articleTags } from "@/config/content/ibm-cloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "ibm-cloud-account";

/**
 * Static route that intentionally shadows /cloud-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the IBM Cloud page carry extra long-form content without
 * touching the generic ProductDetail route used by the other Cloud
 * Account products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  const base = buildProductMetadata(product, category);
  return { ...base, keywords: [...articleTags] };
}

export default function IbmCloudAccountPage() {
  return (
    <div>
      {/* Existing IBM Cloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing an IBM Cloud Account?"
        description="Have questions about IBM Cloud accounts, cloud credits, Lite plans, AI services, VPS, virtual servers, Kubernetes, databases, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <IbmCloudArticle />
    </div>
  );
}
