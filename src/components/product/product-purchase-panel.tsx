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
  /**
   * Heading level for the product name. Defaults to "h1" (the page's only
   * H1 on every normal product page). Pages that render their own H1
   * above this panel (e.g. a page-specific intro) pass "h2" instead, so
   * the page still has exactly one H1.
   */
  headingLevel?: "h1" | "h2";
  /**
   * Subtle premium refinement: a more prominent accent-colored Account
   * Variant value, a larger accent-colored price, and a matching accent on
   * the selected variant card. Off by default — every page keeps its
   * current pricing-card styling unless explicitly opted in.
   */
  highlightVariant?: boolean;
}

export function ProductPurchasePanel({
  product,
  category,
  headingLevel = "h1",
  highlightVariant,
}: ProductPurchasePanelProps) {
  const Heading = headingLevel;
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
  // Mirrors ProductCard's logic: reuse the product's own existing badge text
  // for products explicitly marked as spanning multiple configurations,
  // otherwise show the selected variant's real name — never invented.
  const isMultiVariant = Boolean(product.badge?.toLowerCase().includes("multiple"));
  const variantLabel = isMultiVariant ? product.badge : selectedVariant.name;

  return (
    <div className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-7 shadow-[0_0_0_1px_rgba(16,185,129,0.06)]">
      <ProductBadgeRow provider={product.provider} category={category} badge={product.badge} />

      <Heading className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {product.name}
      </Heading>

      {product.shortDescription ? <p className="mt-2 text-ink-muted">{product.shortDescription}</p> : null}

      <div className={cn("mt-4 flex items-center gap-1.5 text-sm font-medium", stock.tone)}>
        <Icon name="check-circle" size={16} aria-hidden="true" />
        {stock.label}
      </div>

      {variantLabel ? (
        <div
          className={cn(
            "mt-5 rounded-lg border px-3.5 py-2.5",
            highlightVariant ? "border-accent-cyan/30 bg-accent-cyan/[0.07]" : "border-accent/20 bg-accent/5",
          )}
        >
          <span className="block text-[11px] font-semibold uppercase tracking-wide text-accent-cyan">
            Account Variant
          </span>
          <span
            className={cn(
              "block break-words",
              highlightVariant
                ? "mt-1.5 text-base font-semibold text-accent-cyan sm:text-lg"
                : "mt-0.5 text-sm font-medium text-ink",
            )}
          >
            {variantLabel}
          </span>
        </div>
      ) : null}

      <div className="mt-5">
        <ProductPrice
          price={selectedVariant.price}
          compareAtPrice={isRange ? product.compareAtPrice : selectedVariant.compareAtPrice}
          isRange={isRange}
          size={highlightVariant ? "xl" : "lg"}
          accent={highlightVariant}
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
        <VariantSelector
          variants={product.variants}
          selectedId={selectedVariant.id}
          onSelect={setSelectedId}
          accentSelected={highlightVariant}
        />
      </div>

      <OrderButton
        productName={product.name}
        variantName={selectedVariant.name}
        price={selectedVariant.price}
        productPath={href}
        size={highlightVariant ? "xl" : "lg"}
        className="mt-6 w-full"
      />

      {product.features.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
          {product.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-2 text-sm text-ink-secondary">
              {highlightVariant ? (
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                  <Icon name="check" size={13} aria-hidden="true" />
                </span>
              ) : (
                <Icon name="check" size={16} className="shrink-0 text-success" aria-hidden="true" />
              )}
              {feature.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
