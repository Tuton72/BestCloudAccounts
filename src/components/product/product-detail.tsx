import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/home/final-cta";
import { HowItWorks } from "@/components/home/how-it-works";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductHero } from "@/components/product/product-hero";
import { ProductPurchasePanel } from "@/components/product/product-purchase-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { SpecificationGrid } from "@/components/product/specification-grid";
import { Faq } from "@/components/shared/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { buildProductJsonLd } from "@/lib/seo";
import type { Crumb } from "@/components/ui/breadcrumbs";
import type { CategorySlug } from "@/types/catalog";

interface ProductDetailProps {
  categorySlug: CategorySlug;
  slug: string;
}

/**
 * The three AWS sub-categories share an "AWS" parent crumb + listing page.
 * Cloud Accounts has no such intermediate parent — its category page IS
 * the top-level listing — so no extra crumb is inserted for it.
 */
const CATEGORY_PARENT_CRUMB: Partial<Record<CategorySlug, Crumb>> = {
  "aws-accounts": { label: "AWS", href: "/aws" },
  "aws-ai-accounts": { label: "AWS", href: "/aws" },
  "aws-credit-accounts": { label: "AWS", href: "/aws" },
};

export async function ProductDetail({ categorySlug, slug }: ProductDetailProps) {
  const category = await getCategoryBySlug(categorySlug);
  const product = category ? await getProductBySlug(categorySlug, slug) : null;

  if (!category || !product) {
    notFound();
  }

  const related = await getRelatedProducts(product);
  const jsonLd = buildProductJsonLd(product, category);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Container className="py-8 sm:py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            ...(CATEGORY_PARENT_CRUMB[category.slug] ? [CATEGORY_PARENT_CRUMB[category.slug]!] : []),
            { label: category.name, href: `/${category.slug}` },
            { label: product.name },
          ]}
        />
      </Container>

      <Container className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-10">
        <ProductHero />
        <ProductPurchasePanel product={product} category={category} />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-16 py-16 sm:py-20">
          {product.description ? (
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight text-ink">
                Overview
              </h2>
              <p className="mt-4 max-w-3xl text-ink-muted">{product.description}</p>
            </section>
          ) : null}

          <SpecificationGrid specifications={product.specifications} />
          <ProductFeatures features={product.features} />
        </Container>
      </div>

      <HowItWorks />

      <div className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <Faq items={product.faqs} align="left" />
        </Container>
      </div>

      {related.length > 0 ? (
        <div className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <RelatedProducts products={related} category={category} />
          </Container>
        </div>
      ) : null}

      <FinalCTA />
    </div>
  );
}
