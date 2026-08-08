import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/product-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { getCategories } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Amazon AWS",
  description:
    "Browse the Amazon AWS collection — compute accounts, credit accounts, and AI-ready accounts, with pricing shown up front on every product.",
  alternates: { canonical: "/buy-aws-accounts" },
  openGraph: {
    title: `Amazon AWS | ${siteConfig.name}`,
    description: "Browse the Amazon AWS collection — compute, credit, and AI-ready accounts.",
    url: `${siteConfig.url}/buy-aws-accounts`,
  },
};

/**
 * Visual-only grouping of the 19 Amazon AWS products into three sections.
 * All 19 live in the same "buy-aws-accounts" category — this just slices
 * the (already sortOrder-sorted) list; it is not a separate product system.
 */
const SECTIONS = [
  { title: "AWS vCPU / Credit / AI Accounts", start: 0, end: 7 },
  { title: "AWS Credit Accounts", start: 7, end: 13 },
  { title: "AWS AI / Specialized Accounts", start: 13, end: 19 },
];

export default async function BuyAwsAccountsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProductsByCategory("buy-aws-accounts"),
  ]);

  return (
    <div>
      <div className="border-b border-border bg-canvas-secondary">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Cloud Accounts", href: "/cloud-accounts" },
              { label: "Amazon AWS" },
            ]}
          />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Amazon AWS</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Amazon AWS compute, credit, and AI-ready accounts in one collection — pricing shown up front on
            every product.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </Container>
      </div>

      <Container className="flex flex-col gap-14 py-10 sm:py-14">
        {SECTIONS.map((section) => {
          const sectionProducts = products.slice(section.start, section.end);
          if (sectionProducts.length === 0) return null;
          return (
            <section key={section.title}>
              <SectionHeading heading={section.title} align="left" className="mb-6" />
              <ProductGrid products={sectionProducts} categories={categories} />
            </section>
          );
        })}
      </Container>
    </div>
  );
}
