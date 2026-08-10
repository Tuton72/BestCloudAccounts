import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { AwsFreeTrialArticle } from "@/components/product/aws-free-trial-article";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;
const SLUG = "free-trial";

/**
 * Static route that intentionally shadows /aws-accounts/[slug] for this
 * one product (Next.js resolves the more specific static segment first).
 * This lets the AWS Free Trial page carry extra long-form content
 * without touching the generic ProductDetail route used by the other
 * AWS Accounts products.
 */
export async function generateMetadata(): Promise<Metadata> {
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default function AwsFreeTrialAccountPage() {
  return (
    <div>
      {/* Existing AWS Free Trial product/detail section — unchanged, same as every other AWS Accounts product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy AWS Free Trial Account – Get Started with AWS",
          paragraph:
            "Explore the AWS Free Trial account, a low-cost way to evaluate AWS services before committing to a larger configuration. Compare the price and details below to see if this account fits your needs.",
        }}
      />

      <AwsFreeTrialArticle />
    </div>
  );
}
