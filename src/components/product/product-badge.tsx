import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import type { Category } from "@/types/catalog";

/** Badges that signal a genuinely featured/premium product get gold; everything else stays neutral. */
const PREMIUM_BADGES = new Set(["Popular"]);

interface ProductBadgeRowProps {
  provider: string;
  category: Category;
  badge?: string | null;
}

/** Provider + category + optional featured badge row, shared by cards and detail pages. */
export function ProductBadgeRow({ provider, category, badge }: ProductBadgeRowProps) {
  const isPremiumBadge = badge ? PREMIUM_BADGES.has(badge) : false;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge tone="neutral">
        <Icon name="cloud" size={12} aria-hidden="true" />
        {provider}
      </Badge>
      <Badge tone="accent">{category.name}</Badge>
      {badge ? (
        <Badge tone={isPremiumBadge ? "gold" : "neutral"}>
          <Icon name={isPremiumBadge ? "star" : "info"} size={12} aria-hidden="true" />
          {badge}
        </Badge>
      ) : null}
    </div>
  );
}
