import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUsContent } from "@/config/content/features";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          heading={whyChooseUsContent.heading}
          subheading={whyChooseUsContent.subheading}
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsContent.features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon name={feature.icon as IconName} size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
