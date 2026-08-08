import { Icon } from "@/components/ui/icon";
import type { CardItem } from "@/config/content/buy-aws-article";

interface FeatureGridProps {
  heading: string;
  intro?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
}

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Responsive card grid for feature/reason/audience lists. */
export function FeatureGrid({ heading, intro, items, columns = 3 }: FeatureGridProps) {
  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</h2>
        {intro ? <p className="mt-4 leading-relaxed text-ink-secondary">{intro}</p> : null}
      </div>
      <div className={`mt-8 grid grid-cols-1 gap-5 ${COLS[columns]}`}>
        {items.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name={item.icon} size={20} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
