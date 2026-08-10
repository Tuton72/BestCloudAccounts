export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
}

export const howItWorksContent = {
  heading: "Four Steps to Your Cloud Account",
  subheading: undefined as string | undefined,
  steps: [
    {
      step: 1,
      title: "Browse Products",
      description: "Explore the available categories: Cloud Accounts, AWS Accounts, AWS AI Accounts, AWS Credit Accounts, and Amazon AWS.",
      icon: "search",
    },
    {
      step: 2,
      title: "Review Specifications",
      description: "Examine the details of each account, including vCPU, configuration, and available compute resources.",
      icon: "list-checks",
    },
    {
      step: 3,
      title: "Choose Your Account",
      description: "Select the account that best fits your project or business requirements.",
      icon: "shopping-cart",
    },
    {
      step: 4,
      title: "Contact / Order",
      description: "Complete your order through the contact or order process.",
      icon: "circle-check-big",
    },
  ] satisfies HowItWorksStep[],
};
