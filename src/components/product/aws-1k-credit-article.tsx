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
  deliveryTrustPanel,
  finalThoughtsSection,
  keyFeaturesCards,
  packagesCards,
  reliabilityCards,
  whatIsSection,
  whoBenefitsCards,
  whyChooseCards,
  whyChooseUsCards,
} from "@/config/content/aws-1k-credit-article";

const buyingProcessItems = buyingProcess.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
}));

/**
 * Full AWS 1k Credit article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function Aws1kCreditArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS 1k Credit Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Choose AWS 1k Credit */}
        <FeatureGrid heading={whyChooseCards.heading} intro={whyChooseCards.intro} items={whyChooseCards.items} columns={3} />

        {/* Who Benefits */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={3} />

        {/* What Makes It Reliable */}
        <FeatureGrid heading={reliabilityCards.heading} intro={reliabilityCards.intro} items={reliabilityCards.items} columns={3} />

        {/* Key Features */}
        <FeatureGrid heading={keyFeaturesCards.heading} intro={keyFeaturesCards.intro} items={keyFeaturesCards.items} columns={4} />

        {/* Packages */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid heading={packagesCards.heading} intro={packagesCards.intro} items={packagesCards.items} columns={4} />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{packagesCards.closing}</p>
        </div>

        {/* Buying Process */}
        <StepList heading={buyingProcess.heading} intro={buyingProcess.intro} items={buyingProcessItems} />

        {/* Delivery / Trust statistics panel — figures copied verbatim from the supplied sentence */}
        <div className="mx-auto w-full max-w-[1160px] rounded-2xl border border-accent/20 bg-surface-elevated p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {deliveryTrustPanel.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold tracking-tight text-accent-cyan sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-[880px] text-center leading-relaxed text-ink-secondary">{deliveryTrustPanel.statement}</p>
        </div>

        {/* AWS 1k Credit vs Free Tier */}
        <FeatureGrid heading={comparisonCards.heading} intro={comparisonCards.intro} items={comparisonCards.items} columns={3} />

        {/* FAQ accordion */}
        <Faq items={articleFaq} eyebrow="FAQ" heading="Frequently Asked Questions About Buying AWS 1k Credit Accounts" align="left" />

        {/* Why Choose BestCloudAccounts */}
        <FeatureGrid heading={whyChooseUsCards.heading} intro={whyChooseUsCards.intro} items={whyChooseUsCards.items} columns={4} />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS 1k Credit Account Today"
          description="Start building on the cloud today with $1,000 in AWS credit at zero upfront cost — 100% verified accounts with instant delivery and a 24-month credit validity window."
          primaryCta={{ label: "Browse AWS Credit Accounts", href: "/aws-credit-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
