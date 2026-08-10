import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import { hasDedicatedCloudAccountRoute } from "@/lib/routes";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "cloud-accounts" as const;

/**
 * Every current Cloud Account product now has its own dedicated /buy-*
 * route (see next.config.ts for the old-path redirects), so none of them
 * are prerendered here. This route stays in place for any future Cloud
 * Account product that doesn't get a dedicated route of its own.
 */
export async function generateStaticParams() {
  const products = await getProductsByCategory(CATEGORY_SLUG);
  return products.filter((product) => !hasDedicatedCloudAccountRoute(product.slug)).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(CATEGORY_SLUG);
  const product = category ? await getProductBySlug(CATEGORY_SLUG, slug) : null;
  if (!category || !product) return {};
  return buildProductMetadata(product, category);
}

export default async function CloudAccountDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail categorySlug={CATEGORY_SLUG} slug={slug} />;
}
