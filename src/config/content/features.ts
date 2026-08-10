export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

/** "Why Choose BestCloudAccounts" homepage section. */
export const whyChooseUsContent = {
  heading: "A Premium Cloud Account Marketplace",
  subheading:
    "Choosing the right cloud account marketplace is important for a smooth and effective infrastructure setup. BestCloudAccounts offers a combination of product variety, clear specifications, and a professional presentation that distinguishes it in the market.",
  features: [
    {
      title: "Curated Selection",
      description: "Browse a vetted range of cloud accounts and AWS solutions.",
      icon: "sparkles",
    },
    {
      title: "Clear Specifications",
      description: "Compare vCPU, configurations, and account variants easily.",
      icon: "clipboard-list",
    },
    {
      title: "Multiple Cloud Options",
      description: "Find accounts from various providers in one place.",
      icon: "cloud",
    },
    {
      title: "AWS Focus",
      description: "Dedicated categories for AWS compute, AI, and credit accounts.",
      icon: "server",
    },
    {
      title: "Simple Discovery",
      description: "Product categories and filters help you locate the right account.",
      icon: "search",
    },
    {
      title: "Transparent Information",
      description: "Product pages provide clear details on available configurations.",
      icon: "shield-check",
    },
  ] satisfies FeatureItem[],
};
