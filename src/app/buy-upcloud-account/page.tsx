import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { UpCloudArticle } from "@/components/product/upcloud-article";
import { articleTags } from "@/config/content/upcloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "upcloud-account";

/**
 * Dedicated top-level route for the UpCloud product. Previously served at
 * /cloud-accounts/upcloud-account; that path now permanently redirects
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

export default function UpCloudAccountPage() {
  return (
    <div>
      {/* Existing UpCloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy UpCloud Account – Choose the Right Server Plan",
          paragraph:
            "Explore UpCloud accounts built for MaxIOPS storage, VPS, GPU servers, and Kubernetes workloads across multiple data centers. Compare the price and details below to find the UpCloud account that fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an UpCloud Account?"
        description="Have questions about UpCloud accounts, MaxIOPS storage, VPS, GPU servers, Kubernetes, data centers, server plans, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <UpCloudArticle />
    </div>
  );
}
