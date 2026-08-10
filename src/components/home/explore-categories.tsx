import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { exploreCategories } from "@/config/content/homepage";
import { categoryHref } from "@/lib/routes";

/**
 * Section 3 — "Explore Cloud Account Categories". Richer than the plain
 * CategoryGrid card (which is reused later for Product Discovery): each
 * card here also carries the supplied "Who it's for" / "Why explore" copy
 * and links straight to the real, existing category route.
 */
export function ExploreCategories() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={exploreCategories.eyebrow}
          heading={exploreCategories.heading}
          subheading={exploreCategories.subheading}
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exploreCategories.items.map((item) => (
            <Link
              key={item.href}
              href={categoryHref(item.href)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent-cyan/15 text-accent transition-colors group-hover:text-accent-cyan">
                <Icon name={item.icon as IconName} size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{item.body}</p>

              <dl className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
                <div>
                  <dt className="font-medium text-ink">Who it&apos;s for</dt>
                  <dd className="mt-0.5 text-ink-muted">{item.whoItsFor}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Why explore</dt>
                  <dd className="mt-0.5 text-ink-muted">{item.whyExplore}</dd>
                </div>
              </dl>

              <span className="mt-5 flex items-center gap-1 text-sm font-medium text-accent-cyan transition-transform group-hover:translate-x-0.5">
                View Products
                <Icon name="arrow-right" size={15} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
