import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { LinodeArticle } from "@/components/product/linode-article";
import { articleTags } from "@/config/content/linode-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "linode-account";

/**
 * Dedicated top-level route for the Linode product. Previously served at
 * /cloud-accounts/linode-account; that path now permanently redirects
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

export default function LinodeAccountPage() {
  return (
    <div>
      {/* Existing Linode hero + product section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing a Linode Account?"
        description="Have questions about Linode accounts, VPS plans, CPU options, storage, network transfer, data centers, Kubernetes, or account specifications? Our team is available to help you choose the appropriate option."
      />
      <LinodeArticle />
    </div>
  );
}
