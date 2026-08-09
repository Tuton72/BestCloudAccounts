import type { IconName } from "@/components/ui/icon";

/**
 * Shared shapes for long-form product-article content (e.g. the Amazon AWS
 * and DigitalOcean pages). Kept generic/business-agnostic so the same
 * presentation components (src/components/article/*) can render any
 * product's article content.
 */

export interface ProseSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface CardItem {
  icon: IconName;
  title: string;
  body: string;
  /** Optional additional paragraphs rendered after body (distinct paragraphs, not merged). */
  paragraphs?: string[];
  /** Optional supporting bullet list rendered below the card body/paragraphs. */
  checklist?: string[];
  /** Optional closing paragraph rendered after the checklist. */
  closing?: string;
}

export type SafetyStep = CardItem;

export interface ArticleFaqItem {
  question: string;
  answer: string;
}
