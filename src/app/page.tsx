import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedCategorySection } from "@/components/home/featured-category-section";
import { FinalCTA } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { InfrastructureSection } from "@/components/home/infrastructure-section";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { TrustSection } from "@/components/home/trust-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Faq } from "@/components/shared/faq";
import { siteFaqContent } from "@/config/content/faq";
import { getCategories } from "@/lib/data/categories";
import { getAllProducts, getCatalogStats } from "@/lib/data/products";

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
      <Hero />
      <Stats stats={stats} />
      <CategoryGrid categories={categories} products={products} />

      {categoryBySlug.get("cloud-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("cloud-accounts")!}
          products={featuredByCategory("cloud-accounts")}
          tinted
        />
      ) : null}

      {categoryBySlug.get("aws-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-accounts")!}
          products={featuredByCategory("aws-accounts")}
        />
      ) : null}

      {categoryBySlug.get("aws-ai-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-ai-accounts")!}
          products={featuredByCategory("aws-ai-accounts")}
          tinted
        />
      ) : null}

      {categoryBySlug.get("aws-credit-accounts") ? (
        <FeaturedCategorySection
          category={categoryBySlug.get("aws-credit-accounts")!}
          products={featuredByCategory("aws-credit-accounts")}
        />
      ) : null}

      <WhyChooseUs />
      <HowItWorks />
      <TrustSection />
      <InfrastructureSection />
      <Testimonials />

      <div className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <Faq items={siteFaqContent} />
        </div>
      </div>

      <FinalCTA />
    </>
  );
}
