import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws8VcpuArticle } from "@/components/product/aws-8vcpu-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "8-vcpu";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS 8 vCPU page carry extra long-form content without
 * touching the generic ProductDetail route used by the other AWS
 * Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws8VcpuAccountPage() {
  return (
    <div>
      {/* Existing AWS 8 vCPU product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS 8 vCPU Account – Choose the Right Configuration",
          paragraph:
            "Explore AWS 8 vCPU accounts with different configuration tiers for development, testing, and lightweight compute workloads. Compare the available variants and prices below to find the account that fits your needs.",
        }}
      />

      <Aws8VcpuArticle />
    </div>
  );
}
