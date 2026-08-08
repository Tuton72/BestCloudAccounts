import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import type { Category } from "@/types/catalog";

/** Provider + category + optional featured badge row, shared by cards and detail pages. */
export function ProductBadgeRow({ category, badge }: { category: Category; badge?: string | null }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="neutral">
        <Icon name="cloud" size={12} aria-hidden="true" />
        AWS
      </Badge>
      <Badge tone="accent">{category.name}</Badge>
      {badge ? (
        <Badge tone="violet">
          <Icon name="star" size={12} aria-hidden="true" />
          {badge}
        </Badge>
      ) : null}
    </div>
  );
}
