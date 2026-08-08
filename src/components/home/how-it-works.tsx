import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorksContent } from "@/config/content/how-it-works";

export function HowItWorks() {
  return (
    <section className="border-t border-border bg-canvas-secondary py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          heading={howItWorksContent.heading}
          subheading={howItWorksContent.subheading}
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksContent.steps.map((step) => (
            <div key={step.step} className="relative rounded-2xl border border-border bg-surface p-6">
              <span className="text-xs font-semibold text-ink-muted">Step {step.step}</span>
              <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent-cyan/15 text-accent">
                <Icon name={step.icon as IconName} size={20} aria-hidden="true" />
              </span>
              {step.step < howItWorksContent.steps.length ? (
                <span
                  aria-hidden="true"
                  className="absolute -right-6 top-[3.25rem] hidden h-px w-6 bg-gradient-to-r from-accent/50 to-transparent lg:block"
                />
              ) : null}
              <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
