import Link from "next/link";
import { ProductBadgeRow } from "@/components/product/product-badge";
import { OrderButton } from "@/components/product/order-button";
import { ProductPrice } from "@/components/product/product-price";
import { Icon } from "@/components/ui/icon";
import { productHref } from "@/lib/routes";
import type { Category, Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
  category: Category;
}

export function ProductCard({ product, category }: ProductCardProps) {
  const href = productHref(product);
  const defaultVariant = product.variants.find((v) => v.isDefault) ?? product.variants[0];
  const isRange = Boolean(product.compareAtPrice);
  const topSpecs = product.specifications.slice(0, 3);

  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-hover">
      <ProductBadgeRow provider={product.provider} category={category} badge={product.badge} />

      <Link href={href} className="mt-4 block">
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent-cyan">
          {product.name}
        </h3>
      </Link>

      {product.shortDescription ? (
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{product.shortDescription}</p>
      ) : null}

      {topSpecs.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {topSpecs.map((spec) => (
            <li
              key={spec.label}
              className="rounded-md border border-border bg-canvas-secondary px-2 py-1 text-xs text-ink-secondary"
            >
              {spec.value}
            </li>
          ))}
        </ul>
      ) : null}

      {product.variants.length > 1 ? (
        <p className="mt-3 text-xs text-ink-muted">{product.variants.length} configurations available</p>
      ) : null}

      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
        <div>
          <span className="block text-xs text-ink-muted">{isRange ? "Price range" : "Starting at"}</span>
          <ProductPrice price={product.basePrice} compareAtPrice={product.compareAtPrice} isRange={isRange} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Link
          href={href}
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-accent text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          View Details
          <Icon name="arrow-right" size={15} aria-hidden="true" />
        </Link>
        {defaultVariant ? (
          <OrderButton
            productName={product.name}
            variantName={defaultVariant.name}
            price={defaultVariant.price}
            productPath={href}
            size="md"
            variant="ghost"
            className="flex-1"
          />
        ) : null}
      </div>
    </div>
  );
}
