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
  chooseAccountCards,
  comparisonSection,
  concernsCards,
  finalThoughtsSection,
  reliabilityCards,
  servicesCards,
  whatIsSection,
  whoBenefitsCards,
  whyPreferCards,
} from "@/config/content/aws-free-trial-article";

const buyingProcessItems = buyingProcess.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
}));

/**
 * Full AWS Free Trial article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function AwsFreeTrialArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS Free Trial Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Prefer AWS Free Trial Accounts */}
        <FeatureGrid heading={whyPreferCards.heading} intro={whyPreferCards.intro} items={whyPreferCards.items} columns={3} />

        {/* Reliability section */}
        <FeatureGrid
          heading={reliabilityCards.heading}
          intro={reliabilityCards.intro}
          items={reliabilityCards.items}
          columns={3}
        />

        {/* Who Can Benefit */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={3} />

        {/* Buying Process */}
        <StepList heading={buyingProcess.heading} intro={buyingProcess.intro} items={buyingProcessItems} />

        {/* AWS Services */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid heading={servicesCards.heading} intro={servicesCards.intro} items={servicesCards.items} columns={4} />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{servicesCards.closing}</p>
        </div>

        {/* AWS Free Trial vs Regular AWS Account comparison */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid heading={comparisonSection.heading} items={comparisonSection.panels} columns={2} />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{comparisonSection.closing}</p>
        </div>

        {/* Common Concerns */}
        <FeatureGrid heading={concernsCards.heading} intro={concernsCards.intro} items={concernsCards.items} columns={3} />

        {/* How to Choose the Right Account */}
        <FeatureGrid
          heading={chooseAccountCards.heading}
          intro={chooseAccountCards.intro}
          items={chooseAccountCards.items}
          columns={3}
        />

        {/* FAQ accordion */}
        <Faq
          items={articleFaq}
          eyebrow="FAQ"
          heading="Frequently Asked Questions About Buying AWS Free Trial Accounts"
          align="left"
        />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS Free Trial Account Today"
          description="Experience the speed, privacy, and reliability that thousands of satisfied customers already trust — pre-verified accounts with instant delivery and full AWS Management Console access ready from day one."
          primaryCta={{ label: "Browse AWS Accounts", href: "/aws-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
