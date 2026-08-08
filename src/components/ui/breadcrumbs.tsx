import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export interface Crumb {
  label: string;
  href?: string;
}

/** Accessible breadcrumb trail. The final crumb is the current page (no link). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-ink" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast ? <Icon name="chevron-right" size={14} aria-hidden="true" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
