export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const howItWorksContent = {
  heading: "How It Works",
  subheading: "From browsing to delivery in four straightforward steps.",
  steps: [
    {
      step: 1,
      title: "Choose Product",
      description: "Browse AWS Accounts, AWS AI Accounts, or AWS Credit Accounts and pick what fits your workload.",
      icon: "search",
    },
    {
      step: 2,
      title: "Select Variant",
      description: "Compare available configurations and pricing, then select the exact variant you need.",
      icon: "list-checks",
    },
    {
      step: 3,
      title: "Place Order",
      description: "Confirm your selection and place your order through our order flow.",
      icon: "shopping-cart",
    },
    {
      step: 4,
      title: "Receive Access",
      description: "Our team follows up to deliver your account details and answer any questions.",
      icon: "circle-check-big",
    },
  ] satisfies HowItWorksStep[],
};
