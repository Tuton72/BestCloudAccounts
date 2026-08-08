import { formatPrice, formatPriceRange } from "@/lib/format";
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
  if (isRange && compareAtPrice) {
    return (
      <span className={cn(size === "lg" ? "text-3xl" : "text-xl", "font-semibold text-ink", className)}>
        {formatPriceRange(price, compareAtPrice)}
      </span>
    );
  }

  return (
    <span className={cn("flex items-baseline gap-2", className)}>
      <span className={cn(size === "lg" ? "text-3xl" : "text-xl", "font-semibold text-ink")}>
        {formatPrice(price)}
      </span>
      {compareAtPrice && compareAtPrice > price ? (
        <span className="text-sm text-ink-muted line-through">{formatPrice(compareAtPrice)}</span>
      ) : null}
    </span>
  );
}
