import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { productHref } from "@/lib/routes";
import type { Category, Product } from "@/types/catalog";

/** Builds Next.js Metadata (title, description, canonical, OG, Twitter) for a product page. */
export function buildProductMetadata(product: Product, category: Category): Metadata {
  const title = product.seoTitle ?? product.name;
  const description =
    product.seoDescription ?? product.shortDescription ?? `${product.name} — available now from ${siteConfig.name}.`;
  const path = productHref(product);
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "product:category": category.name,
    },
  };
}

/** schema.org Product structured data for a product detail page. */
export function buildProductJsonLd(product: Product, category: Category) {
  const url = `${siteConfig.url}${productHref(product)}`;
  const lowPrice = Math.min(...product.variants.map((v) => v.price), product.basePrice);
  const highPrice = Math.max(...product.variants.map((v) => v.price), product.compareAtPrice ?? product.basePrice);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription ?? product.description ?? undefined,
    category: category.name,
    url,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice,
      highPrice,
      offerCount: product.variants.length,
      availability: product.variants.some((v) => v.stockStatus !== "out_of_stock")
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url,
    },
  };
}
