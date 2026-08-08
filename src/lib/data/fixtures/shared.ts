import type { ProductFaq, ProductFeature } from "@/types/catalog";

/**
 * Applied to every seeded product (mirrors supabase/seed.sql's cross-join
 * inserts into product_features / product_faqs). Once real Supabase data
 * exists, per-product rows can override these individually — nothing in
 * the UI assumes every product shares the same list.
 */
export const SHARED_PRODUCT_FEATURES: ProductFeature[] = [
  { label: "Premium cloud access", icon: "shield-check" },
  { label: "Professional support", icon: "headset" },
  { label: "Secure delivery", icon: "lock" },
];

export const SHARED_PRODUCT_FAQS: ProductFaq[] = [
  {
    question: "What is included with the product?",
    answer:
      "You receive the account configuration described on this page, matching the variant you select at checkout.",
  },
  {
    question: "How does ordering work?",
    answer:
      "Select a variant, confirm the price, and place your order through our order flow. We will follow up with next steps.",
  },
  {
    question: "How quickly is the product delivered?",
    answer: "Delivery timing is confirmed with you after your order is placed.",
  },
  {
    question: "Can I choose a specific variant?",
    answer:
      "Yes — use the variant selector on this page to choose the configuration that fits your needs before ordering.",
  },
  {
    question: "What happens if I need support?",
    answer: "Our support team is available to help with questions before and after your order.",
  },
];
