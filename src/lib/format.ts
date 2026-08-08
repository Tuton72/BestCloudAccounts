const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Formats a numeric price as USD, e.g. 1199 -> "$1,199". */
export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}

/** "$38 – $420" style range display. */
export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}
