import { notFound } from "next/navigation";
import { FinalCTA } from "@/components/home/final-cta";
import { HowItWorks } from "@/components/home/how-it-works";
import { ProductFeatures } from "@/components/product/product-features";
import { ProductChatCTA } from "@/components/product/product-chat-cta";
import { ProductHero } from "@/components/product/product-hero";
import { ProductPurchasePanel } from "@/components/product/product-purchase-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { SpecificationGrid } from "@/components/product/specification-grid";
import { VariantPricingGrid } from "@/components/product/variant-pricing-grid";
import { Faq } from "@/components/shared/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { buildDefaultTopIntro } from "@/lib/product-intro";
import { buildProductJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Crumb } from "@/components/ui/breadcrumbs";
import type { CategorySlug } from "@/types/catalog";

interface ProductDetailProps {
  categorySlug: CategorySlug;
  slug: string;
  /**
   * Shows every variant as its own pricing card (matching the ProductCard
   * grid on category listings like /buy-aws-accounts) above the usual
   * hero + purchase panel. Off by default — every product page keeps its
   * current single hero+panel layout unless explicitly opted in.
   */
  showVariantPricingGrid?: boolean;
  /**
   * Page-specific SEO intro (H1 + caption) rendered between the
   * breadcrumb and the pricing area — the site-wide design standard
   * established on /buy-azure-accounts. Pages that want bespoke wording
   * pass it explicitly; every page that doesn't falls back to
   * `buildDefaultTopIntro`, so every product page gets one automatically.
   * This is always the page's one H1 — the purchase panel's own heading
   * is always demoted to h2.
   */
  topIntro?: { title: string; paragraph: string };
  /** Hides the standalone "Specifications" section below the pricing area. */
  hideSpecifications?: boolean;
  /** Hides the standalone "Features" section below the pricing area (the same bullets still show inside the purchase panel). */
  hideFeatures?: boolean;
  /** Hides the generic "Four Steps to Your Cloud Account" process section. */
  hideHowItWorks?: boolean;
  /** Hides the generic shared FAQ block below the pricing area. */
  hideFaq?: boolean;
  /** Hides the generic FinalCTA at the end — for pages whose own long-form content already ends with an appropriate CTA. */
  hideFinalCta?: boolean;
  /** Hides the "Related ..." section here — for pages that render it themselves further down the page instead. */
  hideRelatedProducts?: boolean;
  /**
   * Premium pricing-card treatment: a more prominent accent-colored
   * Account Variant value, a larger accent-colored price, and a matching
   * accent on the selected variant card. On by default — this is the
   * site-wide pricing-card design standard; pass `false` to opt a page
   * out.
   */
  highlightVariant?: boolean;
  /**
   * Shows the generic, reusable customer-contact CTA (no product/provider
   * name) directly below the product image. On by default — every
   * product page shows it; pass `false` to opt a page out.
   */
  showChatCta?: boolean;
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
  "buy-aws-accounts": { label: "Cloud Accounts", href: "/cloud-accounts" },
};

export async function ProductDetail({
  categorySlug,
  slug,
  showVariantPricingGrid,
  topIntro,
  hideSpecifications,
  hideFeatures,
  hideHowItWorks,
  hideFaq,
  hideFinalCta,
  hideRelatedProducts,
  highlightVariant = true,
  showChatCta = true,
}: ProductDetailProps) {
  const category = await getCategoryBySlug(categorySlug);
  const product = category ? await getProductBySlug(categorySlug, slug) : null;

  if (!category || !product) {
    notFound();
  }

  const related = hideRelatedProducts ? [] : await getRelatedProducts(product);
  const jsonLd = buildProductJsonLd(product, category);
  const intro = topIntro ?? buildDefaultTopIntro(product, category);

  const showOverview = Boolean(product.description);
  const showSpecifications = !hideSpecifications && product.specifications.length > 0;
  const showFeatures = !hideFeatures && product.features.length > 0;
  const showOverviewBlock = showOverview || showSpecifications || showFeatures;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b border-border bg-canvas-secondary">
        <Container className="py-8 sm:py-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              ...(CATEGORY_PARENT_CRUMB[category.slug] ? [CATEGORY_PARENT_CRUMB[category.slug]!] : []),
              { label: category.name, href: `/${category.slug}` },
              { label: product.name },
            ]}
          />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{intro.title}</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">{intro.paragraph}</p>
        </Container>
      </div>

      {showVariantPricingGrid ? (
        <Container className="pb-10 pt-10 sm:pb-14 sm:pt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Available Account Variants</h2>
          <div className="mt-8">
            <VariantPricingGrid product={product} category={category} />
          </div>
        </Container>
      ) : null}

      <Container
        id="purchase"
        className={cn(
          "grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-10",
          highlightVariant && "pt-10 sm:pt-14",
        )}
      >
        <div className="flex flex-col gap-5">
          <ProductHero image={product.image} imageAlt={product.image ? `${product.name} illustration` : undefined} />
          {showChatCta ? <ProductChatCTA /> : null}
        </div>
        <ProductPurchasePanel
          product={product}
          category={category}
          headingLevel="h2"
          highlightVariant={highlightVariant}
        />
      </Container>

      {showOverviewBlock ? (
        <div className="border-t border-border">
          <Container className="flex flex-col gap-16 py-16 sm:py-20">
            {showOverview ? (
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="text-2xl font-semibold tracking-tight text-ink">
                  Overview
                </h2>
                <p className="mt-4 max-w-3xl text-ink-muted">{product.description}</p>
              </section>
            ) : null}

            {showSpecifications ? <SpecificationGrid specifications={product.specifications} /> : null}
            {showFeatures ? <ProductFeatures features={product.features} /> : null}
          </Container>
        </div>
      ) : null}

      {hideHowItWorks ? null : <HowItWorks />}

      {hideFaq ? null : (
        <div className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <Faq items={product.faqs} align="left" />
          </Container>
        </div>
      )}

      {!hideRelatedProducts && related.length > 0 ? (
        <div className="border-t border-border">
          <Container className="py-16 sm:py-20">
            <RelatedProducts products={related} category={category} />
          </Container>
        </div>
      ) : null}

      {hideFinalCta ? null : <FinalCTA />}
    </div>
  );
}
