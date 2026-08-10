import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { FeatureGrid } from "@/components/article/feature-grid";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import {
  articleFaq,
  articleIntro,
  comparisonSection,
  finalThoughtsSection,
  keyFeaturesCards,
  reliabilityCards,
  whatIsSection,
  whoBenefitsCards,
  whyChooseCards,
  whyChooseUsCards,
} from "@/config/content/aws-25k-credit-article";

/**
 * Full AWS 25k Credit article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function Aws25kCreditArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS 25k Credit Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Choose AWS 25k Credit */}
        <FeatureGrid heading={whyChooseCards.heading} intro={whyChooseCards.intro} items={whyChooseCards.items} columns={3} />

        {/* Who Benefits */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={3} />

        {/* What Makes It Reliable */}
        <FeatureGrid heading={reliabilityCards.heading} intro={reliabilityCards.intro} items={reliabilityCards.items} columns={3} />

        {/* Key Features — exactly 10 cards */}
        <FeatureGrid heading={keyFeaturesCards.heading} intro={keyFeaturesCards.intro} items={keyFeaturesCards.items} columns={4} />

        {/* AWS 25k Credit vs Official AWS Activate — two-column comparison,
            with the BestCloudAccounts side visually prominent (no new
            wording, only styling). */}
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{comparisonSection.heading}</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {comparisonSection.items.map((item) => (
              <div
                key={item.title}
                className={
                  item.highlight
                    ? "rounded-2xl border-2 border-accent/50 bg-accent/5 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.15)] sm:p-8"
                    : "rounded-2xl border border-border bg-surface p-6 sm:p-8"
                }
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-secondary">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-[880px]">
            <h3 className="text-xl font-semibold text-ink">{comparisonSection.whichIsBetterHeading}</h3>
            <p className="mt-3 leading-relaxed text-ink-secondary">{comparisonSection.whichIsBetter}</p>
          </div>
        </div>

        {/* FAQ accordion — exactly 10 questions */}
        <Faq items={articleFaq} eyebrow="FAQ" heading="Frequently Asked Questions About Buying AWS 25k Credit Accounts" align="left" />

        {/* Why Choose BestCloudAccounts — exactly 9 cards */}
        <FeatureGrid heading={whyChooseUsCards.heading} intro={whyChooseUsCards.intro} items={whyChooseUsCards.items} columns={3} />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS 25k Credit Account Today"
          description="Start building on the cloud today with $25,000 in AWS credit at zero upfront cost — 100% verified accounts with instant delivery and optimized vCPU limits."
          primaryCta={{ label: "Browse AWS Credit Accounts", href: "/aws-credit-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
