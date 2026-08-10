import { formatNumber, formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ProductPriceProps {
  price: number;
  /**
   * For single-configuration products this renders a strikethrough "was"
   * price. For products badged "Multiple Configurations" it instead renders
   * the top of the advertised price range (no individual variant breakdown
   * was provided for those products).
   */
  compareAtPrice?: number | null;
  isRange?: boolean;
  /** "xl" is a larger, more prominent price display — opt-in, existing sizes unaffected. */
  size?: "md" | "lg" | "xl";
  /** Colors the number in the site's teal accent instead of plain ink — opt-in, off by default. */
  accent?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<ProductPriceProps["size"]>, string> = {
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-4xl sm:text-5xl",
};

export function ProductPrice({ price, compareAtPrice, isRange, size = "md", accent, className }: ProductPriceProps) {
  const numberSize = SIZE_CLASSES[size];
  const numberTone = accent ? "text-accent-cyan" : "text-ink";

  if (isRange && compareAtPrice) {
    return (
      <span className={cn("font-semibold", numberSize, className)}>
        <span className="text-accent">$</span>
        <span className={numberTone}>{formatNumber(price)}</span>
        <span className="mx-1 text-ink-muted">–</span>
        <span className="text-accent">$</span>
        <span className={numberTone}>{formatNumber(compareAtPrice)}</span>
      </span>
    );
  }

  return (
    <span className={cn("flex items-baseline gap-2", className)}>
      <span className={cn("font-semibold", numberSize)}>
        <span className="text-accent">$</span>
        <span className={numberTone}>{formatNumber(price)}</span>
      </span>
      {compareAtPrice && compareAtPrice > price ? (
        <span className="text-sm text-ink-muted line-through">{formatPrice(compareAtPrice)}</span>
      ) : null}
    </span>
  );
}
