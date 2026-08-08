export interface FaqItem {
  question: string;
  answer: string;
}

/** Site-wide FAQ — used on the homepage FAQ section and the /faq page. */
export const siteFaqContent: FaqItem[] = [
  {
    question: "What is included with the product?",
    answer:
      "Each product page lists the exact specifications for that account or credit package. What's included is shown before you order — nothing is hidden.",
  },
  {
    question: "How does ordering work?",
    answer:
      "Choose a product, select a variant if more than one is available, and place your order through our order flow. Our team follows up with next steps.",
  },
  {
    question: "How quickly is the product delivered?",
    answer: "Delivery timing is confirmed with you directly after your order is placed.",
  },
  {
    question: "Can I choose a specific variant?",
    answer:
      "Yes. Products with multiple configurations show a variant selector — pricing and specifications update as you choose.",
  },
  {
    question: "What happens if I need support?",
    answer: "Contact our support team through Telegram or email — details are in the footer and Contact page.",
  },
  {
    question: "How do I contact support?",
    answer: "The fastest way is Telegram. You can also reach us by email — both are linked in the site footer.",
  },
];
