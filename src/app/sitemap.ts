import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProducts } from "@/lib/data/products";
import { productHref } from "@/lib/routes";

const STATIC_ROUTES = [
  "",
  "/aws",
  "/aws-accounts",
  "/aws-ai-accounts",
  "/aws-credit-accounts",
  "/about",
  "/how-it-works",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/refund-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteConfig.url}${productHref(product)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}
