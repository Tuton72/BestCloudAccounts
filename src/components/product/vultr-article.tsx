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
  articleSections,
  buySteps,
  featureCards,
  finalThoughtsSection,
  safetySteps,
  useCaseCards,
  whoBenefitsCards,
  whyBuySection,
  whyChooseUsCards,
} from "@/config/content/vultr-article";
import type { IconName } from "@/components/ui/icon";

const BUY_STEP_ICONS: IconName[] = [
  "cloud",
  "list-checks",
  "shopping-cart",
  "tag",
  "send",
  "check-circle",
  "lock",
  "server",
];

const buyStepItems = buySteps.steps.map((step, index) => ({
  icon: BUY_STEP_ICONS[index] ?? "check-circle",
  title: step.title,
  body: step.body,
}));

/**
 * Full Vultr article, shown below the existing product section and the
 * Contact Us prompt. Every paragraph from the source content is preserved
 * — only organized into premium headings/paragraphs/cards.
 */
export function VultrArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Is Vultr section */}
        {articleSections.map((section) => (
          <ArticleProse key={section.id} heading={section.heading} paragraphs={section.paragraphs} />
        ))}

        {/* Key Features card grid */}
        <FeatureGrid heading={featureCards.heading} intro={featureCards.intro} items={featureCards.items} columns={4} />

        {/* Why Buy section */}
        <ArticleProse
          heading={whyBuySection.heading}
          intro={whyBuySection.intro}
          subsections={whyBuySection.subsections}
        />

        {/* Who Benefits section */}
        <FeatureGrid heading={whoBenefitsCards.heading} items={whoBenefitsCards.items} columns={3} />

        {/* Safe Buying Guide timeline */}
        <StepList heading={safetySteps.heading} intro={safetySteps.intro} items={safetySteps.items} />

        {/* Use Cases grid */}
        <FeatureGrid heading={useCaseCards.heading} intro={useCaseCards.intro} items={useCaseCards.items} columns={4} />

        {/* Why Choose Us trust cards */}
        <FeatureGrid
          heading={whyChooseUsCards.heading}
          intro={whyChooseUsCards.intro}
          items={whyChooseUsCards.items}
          columns={4}
        />

        {/* Step-by-step purchase process */}
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{buySteps.heading}</h2>
          {buySteps.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>
        <StepList items={buyStepItems} closing={buySteps.closing} />

        {/* FAQ accordion */}
        <Faq
          items={articleFaq}
          eyebrow="FAQ"
          heading="Frequently Asked Questions About Buying Vultr Accounts"
          align="left"
        />

        {/* Final Thoughts */}
        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy a Vultr Account Today"
          description="Experience the speed, reliability, and quality that thousands of satisfied customers already trust — 100% verified accounts with cloud credits, instant delivery, and full VPS access ready from day one."
          primaryCta={{ label: "Browse Cloud Accounts", href: "/cloud-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
