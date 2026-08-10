import { ArticleIntroCard } from "@/components/article/article-intro-card";
import { ArticleProse } from "@/components/article/article-prose";
import { ComparisonTable } from "@/components/article/comparison-table";
import { FeatureGrid } from "@/components/article/feature-grid";
import { PointsGrid } from "@/components/article/points-grid";
import { StepList } from "@/components/article/step-list";
import { FinalCTA } from "@/components/home/final-cta";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import {
  articleFaq,
  articleIntro,
  buyingGuide,
  compareDimensionsCards,
  compareTable,
  featuresForDevelopersCards,
  featuresSection,
  finalThoughtsSection,
  forBusinessesSection,
  forDevelopersSection,
  howToChooseSection,
  importantChecks,
  keyComponentsCards,
  optionsSection,
  rpmComparisonSection,
  selectByWorkloadSection,
  understandingRpmSection,
  understandingVcpuSection,
  useCasesCards,
  vcpuComparisonSection,
  vcpuTable1,
  vcpuTable2,
  whatIsSection,
  whyChooseSection,
  whySpecsMatterCards,
} from "@/config/content/aws-ai-accounts-article";

const buyingGuideSteps = buyingGuide.steps.map((step) => ({
  icon: step.icon,
  title: step.title,
  body: step.body,
  checklist: step.checklist,
}));

/**
 * Full long-form AWS AI Accounts category article, rendered below the
 * existing product grid (CategoryListing) on /aws-ai-accounts. Every
 * paragraph/heading/bullet/table/FAQ from the supplied source content is
 * preserved — only organized into the site's existing premium
 * headings/paragraphs/cards/table/accordion presentation.
 */
export function AwsAiAccountsArticle() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="flex flex-col gap-16 sm:gap-20">
        {/* Article header */}
        <ArticleIntroCard eyebrow={articleIntro.eyebrow} title={articleIntro.title} paragraphs={articleIntro.paragraphs} />

        {/* What Is an AWS AI Account? */}
        <ArticleProse heading={whatIsSection.heading} paragraphs={whatIsSection.paragraphs} />

        {/* Key Components of AWS AI Accounts */}
        <FeatureGrid heading={keyComponentsCards.heading} intro={keyComponentsCards.intro} items={keyComponentsCards.items} columns={3} />

        {/* Why Choose an AWS AI Account? */}
        <ArticleProse heading={whyChooseSection.heading} intro={whyChooseSection.intro} subsections={whyChooseSection.subsections} />

        {/* AWS AI Account Features — bespoke layout: prose + embedded table + remaining simple features */}
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{featuresSection.heading}</h2>
            <p className="mt-4 leading-relaxed text-ink-secondary">{featuresSection.intro}</p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-ink">{featuresSection.rpmCapacity.heading}</h3>
              {featuresSection.rpmCapacity.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-ink">{featuresSection.vcpuResources.heading}</h3>
              {featuresSection.vcpuResources.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <ComparisonTable columns={vcpuTable1.columns} rows={vcpuTable1.rows} />
          </div>

          <div className="mx-auto max-w-[880px]">
            <p className="mt-6 leading-relaxed text-ink-secondary">{featuresSection.vcpuResources.closing}</p>

            {featuresSection.simpleFeatures.map((feature) => (
              <div key={feature.heading} className="mt-8">
                <h3 className="text-xl font-semibold text-ink">{feature.heading}</h3>
                {feature.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* AWS AI Account Options Available */}
        <FeatureGrid heading={optionsSection.heading} intro={optionsSection.intro} items={optionsSection.items} columns={3} />

        {/* Compare AWS AI Account Specifications */}
        <div className="mx-auto max-w-[1160px] flex flex-col gap-8">
          <ComparisonTable
            heading={compareTable.heading}
            intro={compareTable.intro}
            columns={compareTable.columns}
            rows={compareTable.rows}
          />
          <FeatureGrid
            heading="Comparison Dimensions"
            intro={compareDimensionsCards.intro}
            items={compareDimensionsCards.items}
            columns={3}
          />
        </div>

        {/* How to Choose the Right AWS AI Account */}
        <ArticleProse heading={howToChooseSection.heading} intro={howToChooseSection.intro} subsections={howToChooseSection.subsections} />

        {/* AWS AI Accounts for Developers */}
        <ArticleProse heading={forDevelopersSection.heading} intro={forDevelopersSection.intro} subsections={forDevelopersSection.subsections} />

        {/* AWS AI Accounts for Businesses and Teams */}
        <ArticleProse heading={forBusinessesSection.heading} intro={forBusinessesSection.intro} subsections={forBusinessesSection.subsections} />

        {/* Understanding RPM in AWS AI Accounts */}
        <ArticleProse
          heading={understandingRpmSection.heading}
          paragraphs={understandingRpmSection.paragraphs}
          checklist={[understandingRpmSection.checklistIntro, ...understandingRpmSection.checklist]}
          closing={[understandingRpmSection.closing]}
        />

        {/* Understanding vCPU in AWS AI Accounts */}
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{understandingVcpuSection.heading}</h2>
            {understandingVcpuSection.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
                {p}
              </p>
            ))}
            <p className="mt-4 leading-relaxed text-ink-secondary">{understandingVcpuSection.tableIntro}</p>
          </div>
          <div className="mt-8">
            <ComparisonTable columns={vcpuTable2.columns} rows={vcpuTable2.rows} closing={understandingVcpuSection.closing} />
          </div>
        </div>

        {/* 10 RPM vs 50 RPM vs 10K RPM */}
        <ArticleProse
          heading={rpmComparisonSection.heading}
          intro={rpmComparisonSection.intro}
          subsections={rpmComparisonSection.subsections}
          closing={[rpmComparisonSection.closing]}
        />

        {/* 5 vCPU vs 32 vCPU vs 96 vCPU vs 128 vCPU vs 256 vCPU */}
        <ArticleProse
          heading={vcpuComparisonSection.heading}
          intro={vcpuComparisonSection.intro}
          subsections={vcpuComparisonSection.subsections}
          closing={[vcpuComparisonSection.closing]}
        />

        {/* AWS AI Account Features for Developers */}
        <FeatureGrid
          heading={featuresForDevelopersCards.heading}
          intro={featuresForDevelopersCards.intro}
          items={featuresForDevelopersCards.items}
          columns={4}
        />

        {/* AWS AI Account Use Cases */}
        <FeatureGrid heading={useCasesCards.heading} items={useCasesCards.items} columns={3} />

        {/* AWS AI Account Buying Guide */}
        <StepList heading={buyingGuide.heading} items={buyingGuideSteps} />

        {/* Why AWS AI Account Specifications Matter */}
        <div className="mx-auto max-w-[1160px]">
          <FeatureGrid
            heading={whySpecsMatterCards.heading}
            intro={whySpecsMatterCards.intro}
            items={whySpecsMatterCards.items}
            columns={3}
          />
          <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{whySpecsMatterCards.closing}</p>
        </div>

        {/* How to Select an AWS AI Account Based on Workload */}
        <ArticleProse heading={selectByWorkloadSection.heading} subsections={selectByWorkloadSection.subsections} />

        {/* Important Things to Check Before Ordering */}
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto max-w-[880px]">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{importantChecks.heading}</h2>
          </div>
          <PointsGrid points={importantChecks.points} />
        </div>

        {/* FAQ accordion */}
        <Faq items={articleFaq} eyebrow="FAQ" heading="Frequently Asked Questions About AWS AI Accounts" align="left" />

        {/* Final Thoughts */}
        <ArticleProse
          heading={finalThoughtsSection.heading}
          paragraphs={finalThoughtsSection.paragraphs}
          checklist={finalThoughtsSection.checklist}
          closing={finalThoughtsSection.closing}
        />
      </Container>

      {/* Final CTA */}
      <div className="mt-16 sm:mt-20">
        <FinalCTA
          heading="Buy an AWS AI Account Today"
          description="Review the available AWS AI account options at BestCloudAccounts and choose the configuration that best supports your technical projects."
          primaryCta={{ label: "Browse AWS AI Accounts", href: "/aws-ai-accounts" }}
          secondaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </div>
    </div>
  );
}
