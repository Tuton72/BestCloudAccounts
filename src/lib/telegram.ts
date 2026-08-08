import { siteConfig } from "@/config/site";

export interface OrderIntent {
  productName: string;
  variantName: string;
  price: number;
  /** Relative product path, e.g. "/aws-accounts/512-vcpu". */
  productPath: string;
}

/**
 * Builds a prefilled Telegram deep link for ordering a specific product +
 * variant. This is the "order CTA" architecture referenced across product
 * pages — it does not create a payment or an order record, only opens a
 * chat with the details prefilled so a human can pick up the order.
 *
 * IMPORTANT: the product/variant name and price passed in must always come
 * from server-resolved data (the data-access layer), never from client
 * input — see src/lib/data/products.ts. If/when a server-side order-record
 * flow is added, it must re-resolve product + variant from the database by
 * id before trusting a price, exactly the same way.
 */
export function buildTelegramOrderLink({ productName, variantName, price, productPath }: OrderIntent): string {
  const lines = [
    `Order request — ${siteConfig.name}`,
    `Product: ${productName}`,
    `Variant: ${variantName}`,
    `Price: $${price.toLocaleString("en-US")}`,
    `Link: ${siteConfig.url}${productPath}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `${siteConfig.links.telegram}?text=${text}`;
}
