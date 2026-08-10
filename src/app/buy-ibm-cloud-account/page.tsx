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
 * Dedicated top-level route for the IBM Cloud product. Previously served at
 * /cloud-accounts/ibm-cloud-account; that path now permanently redirects
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

export default function IbmCloudAccountPage() {
  return (
    <div>
      {/* Existing IBM Cloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy IBM Cloud Account – Choose the Right Cloud Plan",
          paragraph:
            "Explore IBM Cloud accounts built for cloud credits, Lite plans, AI services, virtual servers, Kubernetes, and database workloads. Compare the price and details below to find the IBM Cloud account that fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an IBM Cloud Account?"
        description="Have questions about IBM Cloud accounts, cloud credits, Lite plans, AI services, VPS, virtual servers, Kubernetes, databases, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <IbmCloudArticle />
    </div>
  );
}
