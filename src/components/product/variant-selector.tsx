"use client";

import { Icon } from "@/components/ui/icon";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ProductVariant } from "@/types/catalog";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (variantId: string) => void;
}

export function VariantSelector({ variants, selectedId, onSelect }: VariantSelectorProps) {
  if (variants.length <= 1) return null;

  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink-secondary">Select Variant</legend>
      <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {variants.map((variant) => {
          const selected = variant.id === selectedId;
          const disabled = variant.stockStatus === "out_of_stock";
          return (
            <button
              key={variant.id}
              type="button"
              disabled={disabled}
              aria-pressed={selected}
              onClick={() => onSelect(variant.id)}
              className={cn(
                "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-40",
                selected
                  ? "border-accent bg-accent/10 text-ink"
                  : "border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink",
              )}
            >
              <span>
                <span className="block text-sm font-medium">{variant.name}</span>
                <span className="block text-xs text-ink-muted">{formatPrice(variant.price)}</span>
              </span>
              {selected ? (
                <Icon name="check-circle" size={18} className="shrink-0 text-accent" aria-hidden="true" />
              ) : null}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
