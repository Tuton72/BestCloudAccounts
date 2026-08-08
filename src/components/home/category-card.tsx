import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { CATEGORY_PRESENTATION } from "@/config/content/categories";
import { categoryHref } from "@/lib/routes";
import type { Category } from "@/types/catalog";

interface CategoryCardProps {
  category: Category;
  productCount: number;
}

export function CategoryCard({ category, productCount }: CategoryCardProps) {
  const presentation = CATEGORY_PRESENTATION[category.slug];
  const href = categoryHref(category.slug);

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface-hover"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 to-accent-cyan/15 text-accent transition-colors group-hover:text-accent-cyan">
        <Icon name={presentation.icon as IconName} size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{category.name}</h3>
      {category.description ? <p className="mt-1.5 text-sm text-ink-muted">{category.description}</p> : null}
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-ink-muted">
          {productCount} {productCount === 1 ? "product" : "products"}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-accent-cyan transition-transform group-hover:translate-x-0.5">
          {presentation.ctaLabel}
          <Icon name="arrow-right" size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
