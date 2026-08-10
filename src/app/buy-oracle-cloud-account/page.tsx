import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { OracleCloudArticle } from "@/components/product/oracle-cloud-article";
import { articleTags } from "@/config/content/oracle-cloud-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "oracle-cloud-account";

/**
 * Dedicated top-level route for the Oracle Cloud product. Previously
 * served at /cloud-accounts/oracle-cloud-account; that path now
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

export default function OracleCloudAccountPage() {
  return (
    <div>
      {/* Existing Oracle Cloud hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy Oracle Cloud Account – Choose the Right Cloud Plan",
          paragraph:
            "Explore Oracle Cloud accounts with Always Free resources, Universal Credits, compute, and database configurations across multiple regions. Compare the available variants and prices below to find the Oracle Cloud account that fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an Oracle Cloud Account?"
        description="Have questions about Oracle Cloud accounts, Always Free resources, Universal Credits, VPS, databases, compute, regions, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <OracleCloudArticle />
    </div>
  );
}
