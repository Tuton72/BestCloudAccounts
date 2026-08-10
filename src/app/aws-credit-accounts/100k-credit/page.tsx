import type { Metadata } from "next";
import { ContactPrompt } from "@/components/product/contact-prompt";
import { ProductDetail } from "@/components/product/product-detail";
import { Aws100kCreditArticle } from "@/components/product/aws-100k-credit-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-credit-accounts" as const;
const SLUG = "100k-credit";

/**
 * Static route that intentionally shadows /aws-credit-accounts/[slug] for
 * this one product (Next.js resolves the more specific static segment
 * first). This lets the AWS 100k Credit page carry extra long-form content
 * without touching the generic ProductDetail route used by the other AWS
 * Credit Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function Aws100kCreditAccountPage() {
  return (
    <div>
      {/* Existing AWS 100k Credit product/detail section — unchanged, same as every other AWS Credit Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS 100K Credit Account – Choose the Right Credit Plan",
          paragraph:
            "Explore the AWS 100K Credit account, pre-loaded with 100,000 of promotional credit for development, testing, and cloud infrastructure workloads. Compare the price and details below to see if this account fits your needs.",
        }}
      />

      <ContactPrompt
        heading="Need Help Choosing an AWS 100K Credit Account?"
        description="Have questions about AWS credits, vCPU limits, enterprise workloads, AI/ML workloads, regions, or choosing the right AWS credit account?"
      />
      <Aws100kCreditArticle />
    </div>
  );
}
