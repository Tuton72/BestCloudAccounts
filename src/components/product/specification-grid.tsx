import { SectionHeading } from "@/components/ui/section-heading";
import type { ProductSpecification } from "@/types/catalog";

interface SpecificationGridProps {
  specifications: ProductSpecification[];
}

/** Base/common specifications for the product (see ProductPurchasePanel for per-variant specs). */
export function SpecificationGrid({ specifications }: SpecificationGridProps) {
  if (specifications.length === 0) return null;

  return (
    <section aria-labelledby="specifications-heading">
      <h2 id="specifications-heading" className="sr-only">
        Specifications
      </h2>
      <SectionHeading eyebrow="Details" heading="Specifications" align="left" className="mb-6" />
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {specifications.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3"
          >
            <dt className="text-sm text-ink-muted">{spec.label}</dt>
            <dd className="text-sm font-medium text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
