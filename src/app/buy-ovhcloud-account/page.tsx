import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { OvhcloudArticle } from "@/components/product/ovhcloud-article";
import { articleTags } from "@/config/content/ovhcloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "ovhcloud-account";

/**
 * Dedicated top-level route for the OVHcloud product. Previously served at
 * /cloud-accounts/ovhcloud-account; that path now permanently redirects
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

export default function OvhcloudAccountPage() {
  return (
    <div>
      {/* Existing OVHcloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy OVHcloud Account – Choose the Right Cloud Plan",
          paragraph:
            "Explore OVHcloud accounts across Public Cloud, Private Cloud, VPS, and Dedicated Server configurations for development, hosting, and business workloads. Compare the available variants and prices below to find the OVHcloud account that fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an OVHcloud Account?"
        description="Have questions about OVHcloud accounts, Public Cloud, Private Cloud, VPS, Dedicated Servers, regions, billing, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <OvhcloudArticle />
    </div>
  );
}
