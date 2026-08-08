import { AbstractCloudVisual } from "@/components/shared/abstract-cloud-visual";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";

const POINTS: { label: string; icon: IconName }[] = [
  { label: "Built to add cloud providers beyond AWS as the catalog grows", icon: "layers" },
  { label: "Every product and variant is stored in a structured, database-driven catalog", icon: "database" },
  { label: "Pricing and specifications are resolved server-side before any order", icon: "shield-check" },
];

export function InfrastructureSection() {
  return (
    <section className="border-t border-border bg-canvas-secondary py-16 sm:py-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">Infrastructure</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            A catalog built to scale beyond AWS
          </h2>
          <p className="mt-4 max-w-lg text-ink-muted">
            The marketplace starts with AWS Accounts, AWS AI Accounts, and AWS Credit Accounts — but the
            underlying product architecture isn&apos;t AWS-specific, so new providers and product lines can be
            added without reworking the site.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point.label} className="flex items-start gap-3 text-sm text-ink-secondary">
                <Icon name={point.icon} size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {point.label}
              </li>
            ))}
          </ul>
        </div>
        <AbstractCloudVisual className="aspect-[4/3] w-full" />
      </Container>
    </section>
  );
}
