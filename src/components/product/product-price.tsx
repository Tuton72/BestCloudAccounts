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
  size?: "md" | "lg";
  className?: string;
}

export function ProductPrice({ price, compareAtPrice, isRange, size = "md", className }: ProductPriceProps) {
  const numberSize = size === "lg" ? "text-3xl" : "text-xl";

  if (isRange && compareAtPrice) {
    return (
      <span className={cn("font-semibold", numberSize, className)}>
        <span className="text-accent">$</span>
        <span className="text-ink">{formatNumber(price)}</span>
        <span className="mx-1 text-ink-muted">–</span>
        <span className="text-accent">$</span>
        <span className="text-ink">{formatNumber(compareAtPrice)}</span>
      </span>
    );
  }

  return (
    <span className={cn("flex items-baseline gap-2", className)}>
      <span className={cn("font-semibold", numberSize)}>
        <span className="text-accent">$</span>
        <span className="text-ink">{formatNumber(price)}</span>
      </span>
      {compareAtPrice && compareAtPrice > price ? (
        <span className="text-sm text-ink-muted line-through">{formatPrice(compareAtPrice)}</span>
      ) : null}
    </span>
  );
}
