import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { ComparisonTable } from "@/components/article/comparison-table";
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
  comparisonTable,
  finalThoughtsSection,
  keyFeaturesCards,
  reliabilityCards,
  whatIsSection,
  whoBenefitsCards,
  whyChooseCards,
  whyChooseUsCards,
} from "@/config/content/aws-5k-credit-article";

const buyingProcessItems = buyingProcess.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
}));

/**
 * Full AWS 5k Credit article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function Aws5kCreditArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS 5k Credit Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Choose AWS 5k Credit */}
        <FeatureGrid heading={whyChooseCards.heading} intro={whyChooseCards.intro} items={whyChooseCards.items} columns={3} />

        {/* Who Benefits */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={3} />

        {/* What Makes It Reliable */}
        <FeatureGrid heading={reliabilityCards.heading} intro={reliabilityCards.intro} items={reliabilityCards.items} columns={3} />

        {/* Key Features */}
        <FeatureGrid heading={keyFeaturesCards.heading} intro={keyFeaturesCards.intro} items={keyFeaturesCards.items} columns={4} />

        {/* AWS 5k Credit Account Comparison */}
        <ComparisonTable
          heading={comparisonTable.heading}
          intro={comparisonTable.intro}
          columns={comparisonTable.columns}
          rows={comparisonTable.rows}
          closing={comparisonTable.closing}
        />

        {/* Buying Process */}
        <StepList heading={buyingProcess.heading} intro={buyingProcess.intro} items={buyingProcessItems} closing={buyingProcess.closing} />

        {/* AWS 5k Credit vs Free Tier */}
        <FeatureGrid heading={comparisonCards.heading} intro={comparisonCards.intro} items={comparisonCards.items} columns={3} />

        {/* FAQ accordion */}
        <Faq items={articleFaq} eyebrow="FAQ" heading="Frequently Asked Questions About Buying AWS 5k Credit Accounts" align="left" />

        {/* Why Choose BestCloudAccounts */}
        <FeatureGrid heading={whyChooseUsCards.heading} intro={whyChooseUsCards.intro} items={whyChooseUsCards.items} columns={4} />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS 5k Credit Account Today"
          description="Start building on the cloud today with $5,000 in AWS credit at zero upfront cost — 100% verified accounts with instant delivery, high vCPU limits, and full cloud setup support."
          primaryCta={{ label: "Browse AWS Credit Accounts", href: "/aws-credit-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
