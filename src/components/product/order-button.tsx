import { Icon } from "@/components/ui/icon";
import { buildTelegramOrderLink } from "@/lib/telegram";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
  productName: string;
  variantName: string;
  price: number;
  productPath: string;
  size?: "md" | "lg";
  /** "solid" for the prominent detail-page CTA, "ghost" for a lighter card-level affordance. */
  variant?: "solid" | "ghost";
  className?: string;
}

/**
 * Order CTA. Opens Telegram with the product/variant/price prefilled.
 * All values here are expected to already be server-resolved (passed down
 * from the data-access layer) — never editable client state.
 */
export function OrderButton({
  productName,
  variantName,
  price,
  productPath,
  size = "lg",
  variant = "solid",
  className,
}: OrderButtonProps) {
  const href = buildTelegramOrderLink({ productName, variantName, price, productPath });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-cyan",
        variant === "solid"
          ? "bg-gradient-primary text-white shadow-[0_0_0_1px_rgba(16,185,129,0.35)] hover:brightness-110 hover:shadow-[0_0_28px_-6px_rgba(20,184,166,0.55)]"
          : "border border-accent/20 text-ink-secondary hover:border-accent/45 hover:text-ink",
        size === "lg" ? "h-12 px-7 text-base" : "h-10 px-5 text-sm",
        className,
      )}
    >
      Order Now
      <Icon name="arrow-right" size={16} aria-hidden="true" />
    </a>
  );
}
