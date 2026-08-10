import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { FeatureGrid } from "@/components/article/feature-grid";
import { StepList } from "@/components/article/step-list";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
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
} from "@/config/content/aws-10k-credit-article";

const buyingProcessItems = buyingProcess.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
}));

/**
 * Full AWS 10k Credit article, shown below the existing product detail
 * section and the Contact Us prompt. Every paragraph from the source
 * content is preserved — only organized into premium headings/
 * paragraphs/cards.
 */
export function Aws10kCreditArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Exactly Is an AWS 10k Credit Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Why People Choose AWS 10k Credit */}
        <FeatureGrid heading={whyChooseCards.heading} intro={whyChooseCards.intro} items={whyChooseCards.items} columns={3} />

        {/* Who Benefits */}
        <FeatureGrid heading={whoBenefitsCards.heading} intro={whoBenefitsCards.intro} items={whoBenefitsCards.items} columns={4} />

        {/* What Makes It Reliable */}
        <FeatureGrid heading={reliabilityCards.heading} intro={reliabilityCards.intro} items={reliabilityCards.items} columns={3} />

        {/* Key Features */}
        <FeatureGrid heading={keyFeaturesCards.heading} intro={keyFeaturesCards.intro} items={keyFeaturesCards.items} columns={4} />

        {/* AWS 10k Credit Packages */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid heading={packagesCards.heading} intro={packagesCards.intro} items={packagesCards.items} columns={4} />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{packagesCards.closing}</p>
        </div>

        {/* Buying Process */}
        <StepList heading={buyingProcess.heading} intro={buyingProcess.intro} items={buyingProcessItems} closing={buyingProcess.closing} />

        {/* AWS 10k Credit vs Other Options — the AWS 10k card is visually
            highlighted per the design requirement (wording unchanged). */}
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{comparisonCards.heading}</h2>
            <p className="mt-4 leading-relaxed text-ink-secondary">{comparisonCards.intro}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonCards.items.map((item) => (
              <div
                key={item.title}
                className={
                  item.highlight
                    ? "rounded-2xl border-2 border-accent/50 bg-accent/5 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.15)]"
                    : "rounded-2xl border border-border bg-surface p-6"
                }
              >
                <span
                  className={
                    item.highlight
                      ? "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent"
                      : "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  }
                >
                  <Icon name={item.icon} size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ accordion */}
        <Faq items={articleFaq} eyebrow="FAQ" heading="Frequently Asked Questions About Buying AWS 10k Credit Accounts" align="left" />

        {/* Why Choose BestCloudAccounts */}
        <FeatureGrid heading={whyChooseUsCards.heading} intro={whyChooseUsCards.intro} items={whyChooseUsCards.items} columns={4} />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS 10k Credit Account Today"
          description="Start building on the cloud today with $10,000 in AWS credit at zero upfront cost — 100% verified accounts with instant delivery, safe 100–150 vCPU allocation, and a free 1-hour onboarding call."
          primaryCta={{ label: "Browse AWS Credit Accounts", href: "/aws-credit-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
