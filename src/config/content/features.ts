export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

/** "Why choose us" section — editable, no unverified claims. */
export const whyChooseUsContent = {
  heading: "Why Choose Best Cloud Accounts",
  subheading: "A focused marketplace for AWS accounts and credit, built around clarity and support.",
  features: [
    {
      title: "Professional Cloud Products",
      description: "AWS accounts and credit packages configured for real, serious workloads.",
      icon: "server",
    },
    {
      title: "Flexible Product Options",
      description: "Multiple compute tiers and credit sizes so you can match the account to your workload.",
      icon: "sliders-horizontal",
    },
    {
      title: "Clear Pricing",
      description: "Every product shows its price up front — no hidden fees at checkout.",
      icon: "tag",
    },
    {
      title: "Fast Support",
      description: "Reach our team directly through Telegram or email with questions before or after ordering.",
      icon: "headset",
    },
    {
      title: "Secure Ordering",
      description: "Product and pricing details are verified server-side before any order is created.",
      icon: "shield-check",
    },
    {
      title: "Scalable Infrastructure",
      description: "Built to grow — more providers and product lines can be added without a redesign.",
      icon: "layers",
    },
  ] satisfies FeatureItem[],
};
