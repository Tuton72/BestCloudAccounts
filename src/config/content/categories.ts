import type { CategorySlug } from "@/types/catalog";

interface CategoryPresentation {
  icon: string; // lucide-react icon name
  ctaLabel: string;
}

/** Presentation-only metadata for category cards; names/descriptions come from the data layer. */
export const CATEGORY_PRESENTATION: Record<CategorySlug, CategoryPresentation> = {
  "aws-accounts": { icon: "server", ctaLabel: "Browse AWS Accounts" },
  "aws-ai-accounts": { icon: "bot", ctaLabel: "Browse AWS AI Accounts" },
  "aws-credit-accounts": { icon: "coins", ctaLabel: "Browse AWS Credit Accounts" },
};
