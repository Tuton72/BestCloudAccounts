import Link from "next/link";
import { ProductBadgeRow } from "@/components/product/product-badge";
import { ProductPrice } from "@/components/product/product-price";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { productHref } from "@/lib/routes";
import type { Category, Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
  category: Category;
}

export function ProductCard({ product, category }: ProductCardProps) {
  const href = productHref(product);
  const isRange = Boolean(product.compareAtPrice);
  const defaultVariant = product.variants.find((v) => v.isDefault) ?? product.variants[0];
  // A product's own badge already says "Multiple Variants"/"Multiple Configurations"
  // for the handful of products with more than one real configuration — reuse that
  // existing, unmodified text rather than the single placeholder variant's name.
  const isMultiVariant = Boolean(product.badge?.toLowerCase().includes("multiple"));
  const variantLabel = isMultiVariant ? product.badge : defaultVariant?.name;

  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-hover">
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

      {variantLabel ? (
        <div className="mt-3 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2">
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-accent-cyan">
            Account Variant
          </span>
          <span className="mt-0.5 block break-words text-sm font-medium text-ink">{variantLabel}</span>
        </div>
      ) : null}

      <div className="mt-auto pt-5">
        <span className="block text-xs text-ink-muted">{isRange ? "Price range" : "Starting at"}</span>
        <ProductPrice price={product.basePrice} compareAtPrice={product.compareAtPrice} isRange={isRange} />
      </div>

      <Button href={href} className="mt-4 w-full">
        View Product
        <Icon name="arrow-right" size={15} aria-hidden="true" />
      </Button>
    </div>
  );
}
