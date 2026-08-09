import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { FeatureGrid } from "@/components/article/feature-grid";
import { PointsGrid } from "@/components/article/points-grid";
import { StepList } from "@/components/article/step-list";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import {
  articleFaq,
  articleIntro,
  articleSections,
  buySteps,
  chooseBestSection,
  featureCards,
  finalThoughtsSection,
  reasonCards,
  safetySteps,
  takeActionSection,
  trustPartnerSection,
  whoNeedsCards,
  whyBuySection,
} from "@/config/content/buy-aws-article";

const buyStepItems = buySteps.steps.map((step, index) => ({
  icon: (["cloud", "search", "list-checks", "tag", "mail", "check-circle"] as const)[index] ?? "check-circle",
  title: step,
}));

/**
 * Full Amazon AWS article, shown below the product catalog and the Contact
 * Us prompt. Every paragraph from the source content is preserved — only
 * organized into premium headings/paragraphs/cards per section.
 */
export function AmazonAwsArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* A. Article introduction — large premium content card */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* B. Standard informational sections */}
        {articleSections.map((section) => (
          <ArticleProse key={section.id} heading={section.heading} paragraphs={section.paragraphs} />
        ))}

        <ArticleProse
          heading={whyBuySection.heading}
          intro={whyBuySection.intro}
          subsections={whyBuySection.subsections}
        />

        {/* C. Feature sections */}
        <FeatureGrid heading={featureCards.heading} intro={featureCards.intro} items={featureCards.items} columns={4} />

        <FeatureGrid heading={reasonCards.heading} intro={reasonCards.intro} items={reasonCards.items} columns={2} />

        {/* D. Who needs an AWS account */}
        <FeatureGrid heading={whoNeedsCards.heading} intro={whoNeedsCards.intro} items={whoNeedsCards.items} columns={3} />

        {/* E. Safety guide — numbered cards */}
        <StepList heading={safetySteps.heading} intro={safetySteps.intro} items={safetySteps.items} />

        {/* F. How to buy — step-by-step cards */}
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{buySteps.heading}</h2>
          {buySteps.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>
        <StepList intro={buySteps.stepsIntro} items={buyStepItems} closing={buySteps.closing} />

        <ArticleProse heading={chooseBestSection.heading} paragraphs={chooseBestSection.paragraphs} />

        {/* G. Trust section — premium trust cards */}
        <div className="mx-auto max-w-[880px]">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{trustPartnerSection.heading}</h2>
          <p className="mt-4 leading-relaxed text-ink-secondary">{trustPartnerSection.intro}</p>
        </div>
        <PointsGrid points={trustPartnerSection.points} />
        <div className="mx-auto -mt-10 max-w-[880px]">
          {trustPartnerSection.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>

        <ArticleProse heading={finalThoughtsSection.heading} paragraphs={finalThoughtsSection.paragraphs} />

        <ArticleProse heading={takeActionSection.heading} paragraphs={takeActionSection.paragraphs} />

        {/* H. FAQ — accordion */}
        <Faq
          items={articleFaq}
          eyebrow="FAQ"
          heading="Frequently Asked Questions About Buying AWS Accounts"
          align="left"
        />
      </Container>

      {/* I. Final CTA — premium gradient card */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Empower Your Cloud Journey Today"
          description={takeActionSection.closingTagline}
          primaryCta={{ label: "Browse AWS Accounts", href: "/buy-aws-accounts#amazon-aws-products" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
