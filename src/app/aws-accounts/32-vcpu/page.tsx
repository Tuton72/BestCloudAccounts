import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws32VcpuArticle } from "@/components/product/aws-32vcpu-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "32-vcpu";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS 32 vCPU page carry extra long-form content without
 * touching the generic ProductDetail route used by the other AWS
 * Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws32VcpuAccountPage() {
  return (
    <div>
      {/* Existing AWS 32 vCPU product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail categorySlug={CATEGORY_SLUG} slug={SLUG} />

      <ContactPrompt
        heading="Need Help Choosing an AWS 32 vCPU Account?"
        description="Have questions about 32 vCPU limits, AWS regions, credits, EC2 instances, packages, or choosing the right AWS account? Our team is available to help you choose the appropriate option."
      />
      <Aws32VcpuArticle />
    </div>
  );
}
