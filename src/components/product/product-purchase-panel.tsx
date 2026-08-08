"use client";

import { useMemo, useState } from "react";
import { OrderButton } from "@/components/product/order-button";
import { ProductBadgeRow } from "@/components/product/product-badge";
import { ProductPrice } from "@/components/product/product-price";
import { Icon } from "@/components/ui/icon";
import { productHref } from "@/lib/routes";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/types/catalog";
import { VariantSelector } from "@/components/product/variant-selector";

const STOCK_LABEL: Record<string, { label: string; tone: string }> = {
  in_stock: { label: "Available", tone: "text-success" },
  limited: { label: "Limited Availability", tone: "text-accent-cyan" },
  out_of_stock: { label: "Out of Stock", tone: "text-ink-muted" },
};

interface ProductPurchasePanelProps {
  product: Product;
  category: Category;
}

export function ProductPurchasePanel({ product, category }: ProductPurchasePanelProps) {
  const defaultVariant = product.variants.find((v) => v.isDefault) ?? product.variants[0];
  const [selectedId, setSelectedId] = useState(defaultVariant?.id ?? "");

  const selectedVariant = useMemo(
    () => product.variants.find((v) => v.id === selectedId) ?? defaultVariant,
    [product.variants, selectedId, defaultVariant],
  );

  if (!selectedVariant) return null;

  const isRange = Boolean(product.compareAtPrice);
  const stock = STOCK_LABEL[selectedVariant.stockStatus] ?? STOCK_LABEL.in_stock;
  const specEntries = Object.entries(selectedVariant.specifications);
  const href = productHref(product);

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-7 shadow-[0_0_0_1px_rgba(16,185,129,0.06)]">
      <ProductBadgeRow provider={product.provider} category={category} badge={product.badge} />

      <h1 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {product.name}
      </h1>

      {product.shortDescription ? <p className="mt-2 text-ink-muted">{product.shortDescription}</p> : null}

      <div className={cn("mt-4 flex items-center gap-1.5 text-sm font-medium", stock.tone)}>
        <Icon name="check-circle" size={16} aria-hidden="true" />
        {stock.label}
      </div>

      <div className="mt-5">
        <ProductPrice
          price={selectedVariant.price}
          compareAtPrice={isRange ? product.compareAtPrice : selectedVariant.compareAtPrice}
          isRange={isRange}
          size="lg"
        />
      </div>

      {specEntries.length > 0 ? (
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {specEntries.map(([label, value]) => (
            <li key={label} className="rounded-lg border border-border bg-canvas-secondary px-3 py-2">
              <span className="block text-[11px] uppercase tracking-wide text-ink-muted">{label}</span>
              <span className="block text-sm font-medium text-ink">{value}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6">
        <VariantSelector variants={product.variants} selectedId={selectedVariant.id} onSelect={setSelectedId} />
      </div>

      <OrderButton
        productName={product.name}
        variantName={selectedVariant.name}
        price={selectedVariant.price}
        productPath={href}
        className="mt-6 w-full"
      />

      {product.features.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
          {product.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-sm text-ink-secondary">
              <Icon name="check" size={16} className="shrink-0 text-success" aria-hidden="true" />
              {feature.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
