import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws512VcpuArticle } from "@/components/product/aws-512vcpu-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "512-vcpu";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS 512vCPU page carry extra long-form content without
 * touching the generic ProductDetail route used by the other AWS
 * Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws512VcpuAccountPage() {
  return (
    <div>
      {/* Existing AWS 512vCPU product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS 512 vCPU Account – Choose the Right Configuration",
          paragraph:
            "Explore the AWS 512 vCPU account, built for large, demanding compute workloads that need maximum capacity. Compare the price and details below to see if this account fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an AWS 512vCPU Account?"
        description="Have questions about 512 vCPU limits, AWS regions, credits, AI workloads, enterprise workloads, packages, or choosing the right AWS account? Our team is available to help you choose the appropriate option."
      />
      <Aws512VcpuArticle />
    </div>
  );
}
