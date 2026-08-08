import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustContent } from "@/config/content/trust";

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Trust" heading={trustContent.heading} subheading={trustContent.subheading} className="mb-12" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {trustContent.points.map((point) => (
            <div key={point.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                <Icon name={point.icon as IconName} size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
