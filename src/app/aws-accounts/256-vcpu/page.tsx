import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws256VcpuArticle } from "@/components/product/aws-256vcpu-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "256-vcpu";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS 256vCPU page carry extra long-form content without
 * touching the generic ProductDetail route used by the other AWS
 * Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws256VcpuAccountPage() {
  return (
    <div>
      {/* Existing AWS 256vCPU product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS 256 vCPU Account – Choose the Right Configuration",
          paragraph:
            "Explore the AWS 256 vCPU account, built for heavy compute workloads that need significant processing power. Compare the price and details below to see if this account fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an AWS 256vCPU Account?"
        description="Have questions about 256 vCPU limits, AWS regions, credits, AI workloads, enterprise workloads, packages, or choosing the right AWS account? Our team is available to help you choose the appropriate option."
      />
      <Aws256VcpuArticle />
    </div>
  );
}
