import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { RelatedProducts } from "@/components/product/related-products";
import { AzureArticle } from "@/components/product/azure-article";
import { articleTags as azureArticleTags } from "@/config/content/azure-article";
import { Container } from "@/components/ui/container";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getAllProducts, getProductByProductSlug, getRelatedProducts } from "@/lib/data/products";
import { PRODUCT_PAGE_CONTENT } from "@/lib/data/product-page-content";
import { buildProductMetadata } from "@/lib/seo";

/**
 * Single top-level route for every product on the site — the product URL
 * is `/{productSlug}` (see src/lib/slug.ts + src/lib/data/fixtures/index.ts
 * for how productSlug is generated and stored), regardless of category.
 * Previously each Cloud Account / AWS Account / AWS Credit Account product
 * had its own static route file; those are consolidated here so a new
 * product automatically gets a working, correctly-styled page with zero
 * route work. Bespoke per-product content (SEO intro + long-form article)
 * that used to live in those files now lives in product-page-content.tsx,
 * copied over unchanged.
 */

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ productSlug: product.productSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}): Promise<Metadata> {
  const { productSlug } = await params;
  const product = await getProductByProductSlug(productSlug);
  if (!product) return {};
  const category = await getCategoryBySlug(product.categorySlug);
  if (!category) return {};

  const base = buildProductMetadata(product, category);
  const isAzure = product.categorySlug === "cloud-accounts" && product.slug === "azure-accounts";
  if (isAzure) return { ...base, keywords: [...azureArticleTags] };

  const extra = PRODUCT_PAGE_CONTENT[`${product.categorySlug}:${product.slug}`];
  return extra?.keywords ? { ...base, keywords: [...extra.keywords] } : base;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const product = await getProductByProductSlug(productSlug);
  if (!product) notFound();

  // getProductByProductSlug matches case-insensitively (Next's own routing
  // is case-insensitive too), so a request for any wrong-case variant of a
  // valid slug still resolves here — canonicalize it to the exact-case URL
  // rather than silently serving duplicate-content URLs.
  if (productSlug !== product.productSlug) {
    redirect(`/${product.productSlug}`);
  }

  const isAzure = product.categorySlug === "cloud-accounts" && product.slug === "azure-accounts";

  if (isAzure) {
    // Azure has its own section layout (no Specifications/Features/HowItWorks/
    // FAQ, and Related Cloud Accounts repositioned after the article) — kept
    // as its own branch rather than folding into the generic registry below.
    const category = await getCategoryBySlug(product.categorySlug);
    const related = await getRelatedProducts(product);

    return (
      <div>
        <ProductDetail
          categorySlug={product.categorySlug}
          slug={product.slug}
          topIntro={{
            title: "Buy Azure Account – Choose the Right Cloud Credit Plan",
            paragraph:
              "Explore Azure accounts with different credit options and configurations for development, applications, cloud infrastructure, testing, and business workloads. Compare the available variants and prices below to find the Azure account that fits your needs.",
          }}
          hideSpecifications
          hideFeatures
          hideHowItWorks
          hideFaq
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

  const extra = PRODUCT_PAGE_CONTENT[`${product.categorySlug}:${product.slug}`];
  const Article = extra?.Article;

  return (
    <div>
      <ProductDetail categorySlug={product.categorySlug} slug={product.slug} topIntro={extra?.topIntro} />
      {Article ? <Article /> : null}
    </div>
  );
}
