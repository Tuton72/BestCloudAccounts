import type { Metadata } from "next";
import { ProductDetail } from "@/components/product/product-detail";
import { getCategoryBySlug } from "@/lib/data/categories";
import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import { buildProductMetadata } from "@/lib/seo";

const CATEGORY_SLUG = "aws-accounts" as const;

export async function generateStaticParams() {
  const products = await getProductsByCategory(CATEGORY_SLUG);
  return products.map((product) => ({ slug: product.slug }));
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

export default async function AwsAccountDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail categorySlug={CATEGORY_SLUG} slug={slug} />;
}
