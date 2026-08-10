import Link from "next/link";
import { AbstractCloudVisual } from "@/components/shared/abstract-cloud-visual";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { categoryHref } from "@/lib/routes";
import type { CategorySlug } from "@/types/catalog";
import { cn } from "@/lib/utils";

interface CategoryDeepDiveProps {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  checklist?: string[];
  /** Optional paragraphs rendered after the checklist. */
  closing?: string[];
  /** Center-node icon for the accompanying AbstractCloudVisual. */
  visualIcon: IconName;
  /** Put the visual on the left / text on the right for alternating rhythm. */
  reverse?: boolean;
  /** Alternating tinted background, matching FeaturedCategorySection's pattern. */
  tinted?: boolean;
  /** Optional link to the real category page, reusing the existing route helper. */
  href?: CategorySlug;
  ctaLabel?: string;
}

/**
 * Long-form category narrative paired with a lightweight decorative visual —
 * used for the Cloud Accounts / AWS Accounts / AWS AI Accounts / AWS Credit
 * Accounts / Amazon AWS deep-dive sections, and reused for the "Cloud
 * Accounts for Developers" / "Cloud Accounts for Businesses" sections. Text
 * content is data-driven (src/config/content/homepage.ts) and preserved
 * verbatim; this component only decides layout.
 */
export function CategoryDeepDive({
  eyebrow,
  heading,
  paragraphs,
  checklist,
  closing,
  visualIcon,
  reverse,
  tinted,
  href,
  ctaLabel,
}: CategoryDeepDiveProps) {
  return (
    <section
      className={cn(
        "border-t border-border py-16 sm:py-20",
        tinted && "bg-canvas-secondary",
      )}
    >
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className={cn(reverse && "lg:order-2")}>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">{eyebrow}</span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
          {checklist && checklist.length > 0 ? (
            <ul className="mt-4 flex flex-col gap-2.5">
              {checklist.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-secondary">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {closing?.map((p, i) => (
            <p key={`closing-${i}`} className="mt-4 leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
          {href ? (
            <Link
              href={categoryHref(href)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-ink"
            >
              {ctaLabel ?? "View Products"}
              <Icon name="arrow-right" size={15} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <AbstractCloudVisual emphasize={visualIcon} className={cn("aspect-[4/3] w-full", reverse && "lg:order-1")} />
      </Container>
    </section>
  );
}
