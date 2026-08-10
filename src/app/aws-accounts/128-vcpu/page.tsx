import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws128VcpuArticle } from "@/components/product/aws-128vcpu-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "128-vcpu";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS 128 vCPU page carry extra long-form content without
 * touching the generic ProductDetail route used by the other AWS
 * Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws128VcpuAccountPage() {
  return (
    <div>
      {/* Existing AWS 128 vCPU product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS 128 vCPU Account – Choose the Right Configuration",
          paragraph:
            "Explore the AWS 128 vCPU account, built for scaling workloads that need more compute headroom. Compare the price and details below to see if this account fits your needs.",
        }}
      />

      <Aws128VcpuArticle />
    </div>
  );
}
