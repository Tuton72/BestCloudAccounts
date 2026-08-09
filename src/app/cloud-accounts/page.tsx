import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/final-cta";
import { TrustSection } from "@/components/home/trust-section";
import { ProductGrid } from "@/components/product/product-grid";
import { Faq } from "@/components/shared/faq";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { siteFaqContent } from "@/config/content/faq";
import { siteConfig } from "@/config/site";
import { getCategories } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { productHref } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Cloud Accounts",
  description:
    "Browse accounts across major cloud providers — OVHCloud, IBM Cloud, iCloud, Alibaba Cloud, UpCloud, Kamatera, Oracle Cloud, Google Cloud, Linode, Vultr, Hetzner, DigitalOcean, and Azure.",
  alternates: { canonical: "/cloud-accounts" },
  openGraph: {
    title: `Cloud Accounts | ${siteConfig.name}`,
    description: "Browse accounts across major cloud providers, alongside our AWS marketplace.",
    url: `${siteConfig.url}/cloud-accounts`,
  },
};

export default async function CloudAccountsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProductsByCategory("cloud-accounts"),
  ]);

  return (
    <div>
      <div className="border-b border-border bg-canvas-secondary">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cloud Accounts" }]} />
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Cloud Accounts</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Accounts across major cloud providers beyond AWS, in the same marketplace — pricing shown up front
            on every product.
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </Container>
      </div>

      <Container className="py-10 sm:py-14">
        <nav aria-label="Jump to provider" className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <ul className="flex w-max min-w-full flex-wrap gap-2 sm:w-full">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href={productHref(product)}
                  className="inline-flex h-9 items-center whitespace-nowrap rounded-full border border-border bg-surface px-3.5 text-sm text-ink-secondary transition-colors hover:border-accent/40 hover:text-ink"
                >
                  {product.provider}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">New Category</p>
              <h2 className="mt-1 text-xl font-semibold text-ink">Browse Amazon AWS accounts</h2>
              <p className="mt-2 max-w-2xl text-sm text-ink-muted">
                Looking for Amazon AWS listings alongside the broader cloud provider catalog? Explore the dedicated Amazon AWS collection.
              </p>
            </div>
            <Link
              href="/buy-aws-accounts"
              className="inline-flex items-center justify-center rounded-full bg-accent-cyan px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-cyan/90"
            >
              Explore Amazon AWS
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <ProductGrid products={products} categories={categories} emptyMessage="No Cloud Account products yet." />
        </div>
      </Container>

      <TrustSection />

      <Container className="py-16 sm:py-20">
        <Faq items={siteFaqContent} align="left" />
      </Container>

      <FinalCTA
        heading="Ready to find the right cloud account?"
        description="Browse OVHCloud, Google Cloud, Azure, DigitalOcean, and more — every provider's pricing is shown up front."
        primaryCta={{ label: "Browse Cloud Accounts", href: "/cloud-accounts" }}
        secondaryCta={{ label: "Contact Support", href: "/contact" }}
      />
    </div>
  );
}
