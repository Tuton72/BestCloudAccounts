import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { RelatedProducts } from "@/components/product/related-products";
import { AzureArticle } from "@/components/product/azure-article";
import { articleTags } from "@/config/content/azure-article";
import { Container } from "@/components/ui/container";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;
const SLUG = "azure-accounts";

/**
 * Dedicated top-level route for the Azure product. Previously served at
 * /cloud-accounts/azure-accounts; that path now permanently redirects
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

export default async function AzureAccountsPage() {
  // Fetched here (not just inside ProductDetail) so "Related Cloud
  // Accounts" can be positioned after the long-form article below,
  // matching the requested page order — ProductDetail is told to skip
  // rendering its own copy via hideRelatedProducts.
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, SLUG) : null;
  const related = product ? await getRelatedProducts(product) : [];

  return (
    <div>
      {/* Existing Azure hero + pricing section — unchanged, same as every other Cloud Account product. */}
      <ProductDetail
        categorySlug={CATEGORY_SLUG}
        slug={SLUG}
        topIntro={{
          title: "Buy Azure Account – Choose the Right Cloud Credit Plan",
          paragraph:
            "Explore Azure accounts with different credit options and configurations for development, applications, cloud infrastructure, testing, and business workloads. Compare the available variants and prices below to find the Azure account that fits your needs.",
        }}
        hideSpecifications
        hideFeatures
        hideHowItWorks
        hideFaq
        hideFinalCta
        hideRelatedProducts
        highlightVariant
        showChatCta
      />

      <AzureArticle />

      {category && related.length > 0 ? (
        <div className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <RelatedProducts products={related} category={category} />
          </Container>
        </div>
      ) : null}
    </div>
  );
}
