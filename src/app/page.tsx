import type { Metadata } from "next";
import { FeatureGrid } from "@/components/article/feature-grid";
import { CategoryDeepDive } from "@/components/home/category-deep-dive";
import { CategoryGrid } from "@/components/home/category-grid";
import { ExploreCategories } from "@/components/home/explore-categories";
import { FeaturedCategorySection } from "@/components/home/featured-category-section";
import { FinalCTA } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { SecuritySection } from "@/components/home/security-section";
import { Stats } from "@/components/home/stats";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import {
  amazonAwsDeepDive,
  awsAccountsDeepDive,
  awsAiAccountsDeepDive,
  awsCreditAccountsDeepDive,
  cloudAccountsDeepDive,
  finalSeoSummary,
  forBusinesses,
  forDevelopers,
  homepageFaq,
  homepageFinalCta,
  howToChoose,
  productDiscovery,
  trustSnapshot,
  whoIsItFor,
} from "@/config/content/homepage";
import { getCategories } from "@/lib/data/categories";
import { getAllProducts, getCatalogStats } from "@/lib/data/products";

export const metadata: Metadata = {
  title: { absolute: "BestCloudAccounts | Cloud Accounts & AWS Solutions for Developers" },
  description:
    "Explore a curated marketplace for cloud accounts and AWS solutions. Find AWS compute, AI, and credit accounts for your development and business projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BestCloudAccounts – Premium Cloud Account Marketplace",
    description:
      "Discover verified cloud accounts and AWS configurations. Compare cloud infrastructure options for development, AI, and business workloads at BestCloudAccounts.",
    url: siteConfig.url,
  },
};

export default async function Home() {
  const [categories, products, stats] = await Promise.all([
    getCategories(),
    getAllProducts(),
    getCatalogStats(),
  ]);

  const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
  const featuredByCategory = (slug: (typeof categories)[number]["slug"]) =>
    products.filter((p) => p.categorySlug === slug && p.featured).slice(0, 4);

  return (
    <>
      {/* 3. Hero */}
      <Hero />

      {/* Real catalog stats — bonus trust strip, no invented claims */}
      <Stats stats={stats} />

      {/* 4. Trust / Value Snapshot */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <FeatureGrid
            heading={trustSnapshot.heading}
            intro={`${trustSnapshot.intro} ${trustSnapshot.subheading}`}
            items={trustSnapshot.items}
            columns={4}
          />
          <p className="mx-auto mt-6 max-w-[880px] text-center leading-relaxed text-ink-secondary">
            {trustSnapshot.closing}
          </p>
        </Container>
      </section>

      {/* 5. Explore Cloud Account Categories */}
      <ExploreCategories />

      {/* 6-10. Cloud Accounts / AWS Accounts / AWS AI Accounts / AWS Credit Accounts / Amazon AWS */}
      <CategoryDeepDive
        eyebrow={cloudAccountsDeepDive.eyebrow}
        heading={cloudAccountsDeepDive.heading}
        paragraphs={cloudAccountsDeepDive.paragraphs}
        checklist={cloudAccountsDeepDive.checklist}
        closing={cloudAccountsDeepDive.closing}
        visualIcon={cloudAccountsDeepDive.visualIcon}
        href={cloudAccountsDeepDive.href}
        ctaLabel={cloudAccountsDeepDive.ctaLabel}
      />
      {categoryBySlug.get("cloud-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("cloud-accounts")!}
          products={featuredByCategory("cloud-accounts")}
          tinted
        />
      ) : null}

      <CategoryDeepDive
        eyebrow={awsAccountsDeepDive.eyebrow}
        heading={awsAccountsDeepDive.heading}
        paragraphs={awsAccountsDeepDive.paragraphs}
        checklist={awsAccountsDeepDive.checklist}
        closing={awsAccountsDeepDive.closing}
        visualIcon={awsAccountsDeepDive.visualIcon}
        href={awsAccountsDeepDive.href}
        ctaLabel={awsAccountsDeepDive.ctaLabel}
        reverse
        tinted
      />
      {categoryBySlug.get("aws-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-accounts")!}
          products={featuredByCategory("aws-accounts")}
        />
      ) : null}

      <CategoryDeepDive
        eyebrow={awsAiAccountsDeepDive.eyebrow}
        heading={awsAiAccountsDeepDive.heading}
        paragraphs={awsAiAccountsDeepDive.paragraphs}
        checklist={awsAiAccountsDeepDive.checklist}
        closing={awsAiAccountsDeepDive.closing}
        visualIcon={awsAiAccountsDeepDive.visualIcon}
        href={awsAiAccountsDeepDive.href}
        ctaLabel={awsAiAccountsDeepDive.ctaLabel}
      />
      {categoryBySlug.get("aws-ai-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-ai-accounts")!}
          products={featuredByCategory("aws-ai-accounts")}
          tinted
        />
      ) : null}

      <CategoryDeepDive
        eyebrow={awsCreditAccountsDeepDive.eyebrow}
        heading={awsCreditAccountsDeepDive.heading}
        paragraphs={awsCreditAccountsDeepDive.paragraphs}
        checklist={awsCreditAccountsDeepDive.checklist}
        closing={awsCreditAccountsDeepDive.closing}
        visualIcon={awsCreditAccountsDeepDive.visualIcon}
        href={awsCreditAccountsDeepDive.href}
        ctaLabel={awsCreditAccountsDeepDive.ctaLabel}
        reverse
      />
      {categoryBySlug.get("aws-credit-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-credit-accounts")!}
          products={featuredByCategory("aws-credit-accounts")}
        />
      ) : null}

      <CategoryDeepDive
        eyebrow={amazonAwsDeepDive.eyebrow}
        heading={amazonAwsDeepDive.heading}
        paragraphs={amazonAwsDeepDive.paragraphs}
        checklist={amazonAwsDeepDive.checklist}
        closing={amazonAwsDeepDive.closing}
        visualIcon={amazonAwsDeepDive.visualIcon}
        href={amazonAwsDeepDive.href}
        ctaLabel={amazonAwsDeepDive.ctaLabel}
        tinted
      />
      {categoryBySlug.get("buy-aws-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("buy-aws-accounts")!}
          products={featuredByCategory("buy-aws-accounts")}
          tinted
        />
      ) : null}

      {/* 11. Who Is BestCloudAccounts For? */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <FeatureGrid heading={whoIsItFor.heading} intro={whoIsItFor.subheading} items={whoIsItFor.items} columns={3} />
        </Container>
      </section>

      {/* 12. Why Choose BestCloudAccounts? */}
      <WhyChooseUs />

      {/* 13. How It Works */}
      <HowItWorks />

      {/* 14. How to Choose the Right Cloud Account */}
      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <FeatureGrid heading={howToChoose.heading} intro={howToChoose.intro} items={howToChoose.items} columns={4} />
          <p className="mx-auto mt-6 max-w-[880px] text-center leading-relaxed text-ink-secondary">{howToChoose.closing}</p>
        </Container>
      </section>

      {/* 15. Cloud Accounts for Developers */}
      <CategoryDeepDive
        eyebrow={forDevelopers.eyebrow}
        heading={forDevelopers.heading}
        paragraphs={[forDevelopers.intro]}
        checklist={forDevelopers.items.map((item) => `${item.title} – ${item.body}`)}
        visualIcon="cpu"
        tinted
      />

      {/* 16. Cloud Accounts for Businesses */}
      <CategoryDeepDive
        eyebrow={forBusinesses.eyebrow}
        heading={forBusinesses.heading}
        paragraphs={[forBusinesses.paragraph]}
        visualIcon={forBusinesses.visualIcon}
        reverse
      />

      {/* 17. Security / Responsible Use */}
      <SecuritySection />

      {/* 18. Product Discovery */}
      <CategoryGrid
        categories={categories}
        products={products}
        eyebrow={productDiscovery.eyebrow}
        heading={productDiscovery.heading}
        subheading={productDiscovery.subheading}
      />

      {/* 19. Final SEO Summary */}
      <section className="border-t border-border py-12">
        <Container>
          <div className="mx-auto max-w-[880px] text-center">
            <h2 className="text-lg font-semibold text-ink">{finalSeoSummary.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{finalSeoSummary.paragraph}</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <div className="border-t border-border py-16 sm:py-20">
        <Container>
          <Faq items={homepageFaq} eyebrow="FAQ" heading="Frequently Asked Questions" align="left" />
        </Container>
      </div>

      {/* Final CTA */}
      <FinalCTA
        heading={homepageFinalCta.heading}
        description={homepageFinalCta.description}
        primaryCta={homepageFinalCta.primaryCta}
        secondaryCta={homepageFinalCta.secondaryCta}
      />
    </>
  );
}
