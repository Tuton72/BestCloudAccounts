import Link from "next/link";
import { ProductBadgeRow } from "@/components/product/product-badge";
import { ProductPrice } from "@/components/product/product-price";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { productHref } from "@/lib/routes";
import type { Category, Product } from "@/types/catalog";

interface VariantPricingGridProps {
  product: Product;
  category: Category;
}

/**
 * Top-of-page pricing section showing every variant of a single product as
 * its own card — the same card hierarchy as ProductCard (provider/category
 * badges, title, description, spec badges, an "Account Variant" box, price,
 * "View Product" CTA), used on category listings like /buy-aws-accounts.
 * Reuses ProductBadgeRow/ProductPrice/Button/Icon directly rather than a
 * second, hand-rolled implementation.
 *
 * Each card's CTA points at this same product page with a #purchase anchor
 * — clicking it scrolls to the existing purchase panel below, where the
 * real VariantSelector + OrderButton flow (unchanged) is used to order.
 * There is no per-variant route, so no new/fake destination is introduced.
 */
export function VariantPricingGrid({ product, category }: VariantPricingGridProps) {
  const href = `${productHref(product)}#purchase`;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {product.variants.map((variant) => (
        <div
          key={variant.id}
          className="group relative flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-hover"
        >
          <ProductBadgeRow provider={product.provider} category={category} badge={product.badge} />

          <Link href={href} className="mt-4 block">
            <h3 className="line-clamp-2 min-h-[3.25rem] text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent-cyan">
              {product.name}
            </h3>
          </Link>

          {product.shortDescription ? (
            <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{product.shortDescription}</p>
          ) : null}

          {product.specifications.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {product.specifications.map((spec) => (
                <li
                  key={spec.label}
                  className="rounded-md border border-border bg-canvas-secondary px-2 py-1 text-xs text-ink-secondary"
                >
                  {spec.value}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-3 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2">
            <span className="block text-[11px] font-semibold uppercase tracking-wide text-accent-cyan">
              Account Variant
            </span>
            <span className="mt-0.5 block break-words text-sm font-medium text-ink">{variant.name}</span>
          </div>

          <div className="mt-auto pt-5">
            <span className="block text-xs text-ink-muted">Starting at</span>
            <ProductPrice price={variant.price} compareAtPrice={variant.compareAtPrice} />
          </div>

          <Button href={href} className="mt-4 w-full">
            View Product
            <Icon name="arrow-right" size={15} aria-hidden="true" />
          </Button>
        </div>
      ))}
    </div>
  );
}
