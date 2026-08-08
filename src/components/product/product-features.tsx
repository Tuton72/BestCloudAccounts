import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/ui/icon";
import type { ProductFeature } from "@/types/catalog";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  if (features.length === 0) return null;

  return (
    <section aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">
        Features
      </h2>
      <SectionHeading eyebrow="Included" heading="Features" align="left" className="mb-6" />
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.label}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name={(feature.icon as IconName) ?? "check"} size={17} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-ink-secondary">{feature.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
