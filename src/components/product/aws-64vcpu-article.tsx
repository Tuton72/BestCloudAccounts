import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { FeatureGrid } from "@/components/article/feature-grid";
import { StepList } from "@/components/article/step-list";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import {
  articleFaq,
  articleIntro,
  buyingProcess,
  comparisonCards,
  finalThoughtsSection,
  keyFeaturesCards,
  packagesCards,
  reliabilityCards,
  whatIsSection,
  whoBenefitsCards,
  whyChooseCards,
  whyChooseUsCards,
} from "@/config/content/aws-64vcpu-article";

const buyingProcessItems = buyingProcess.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
}));

/**
 * Full AWS 64 vCPU article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function Aws64VcpuArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS 64 vCPU Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Choose AWS 64 vCPU (Benefits) */}
        <FeatureGrid heading={whyChooseCards.heading} intro={whyChooseCards.intro} items={whyChooseCards.items} columns={4} />

        {/* Who Benefits (Audience) */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={3} />

        {/* What Makes It Reliable */}
        <FeatureGrid
          heading={reliabilityCards.heading}
          intro={reliabilityCards.intro}
          items={reliabilityCards.items}
          columns={3}
        />

        {/* Key Features */}
        <FeatureGrid
          heading={keyFeaturesCards.heading}
          intro={keyFeaturesCards.intro}
          items={keyFeaturesCards.items}
          columns={4}
        />

        {/* Packages */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid heading={packagesCards.heading} intro={packagesCards.intro} items={packagesCards.items} columns={4} />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{packagesCards.closing}</p>
        </div>

        {/* Buying Process */}
        <StepList heading={buyingProcess.heading} intro={buyingProcess.intro} items={buyingProcessItems} closing={buyingProcess.closing} />

        {/* AWS 64 vCPU vs Other Compute Options */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid
            heading={comparisonCards.heading}
            intro={comparisonCards.intro}
            items={comparisonCards.items}
            columns={4}
          />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{comparisonCards.closing}</p>
        </div>

        {/* FAQ accordion */}
        <Faq
          items={articleFaq}
          eyebrow="FAQ"
          heading="Frequently Asked Questions About Buying AWS 64 vCPU Accounts"
          align="left"
        />

        {/* Why Choose BestCloudAccounts */}
        <FeatureGrid
          heading={whyChooseUsCards.heading}
          intro={whyChooseUsCards.intro}
          items={whyChooseUsCards.items}
          columns={4}
        />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS 64 vCPU Account Today"
          description="Experience the speed, reliability, and quality that thousands of satisfied customers already trust — 100% verified accounts with an active 64 vCPU limit, instant delivery, and included AWS credits ready from day one."
          primaryCta={{ label: "Browse AWS Accounts", href: "/aws-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
