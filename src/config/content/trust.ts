export interface TrustPoint {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

/** Trust/guarantee section — factual process claims only, no unverified numbers. */
export const trustContent = {
  heading: "Ordering You Can Trust",
  subheading: "A transparent process from product page to delivery.",
  points: [
    {
      title: "Secure Ordering",
      description: "Product and variant pricing is always confirmed server-side before an order is recorded.",
      icon: "lock",
    },
    {
      title: "Transparent Pricing",
      description: "Prices are shown on every product and variant — nothing is revealed only at checkout.",
      icon: "eye",
    },
    {
      title: "Professional Support",
      description: "Our team is reachable through Telegram or email for questions about any product.",
      icon: "headset",
    },
    {
      title: "Clear Product Specifications",
      description: "Every account lists its exact specifications so you know what you're ordering.",
      icon: "clipboard-list",
    },
  ] satisfies TrustPoint[],
};
