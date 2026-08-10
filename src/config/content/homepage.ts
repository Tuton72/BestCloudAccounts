import type { ArticleFaqItem, CardItem } from "@/types/article";
import type { CategorySlug } from "@/types/catalog";

/**
 * Full homepage content, supplied verbatim by the business. Only the
 * presentation (cards/grids/accordions/section layout) is decided in the
 * components that consume this data — the wording here is preserved as
 * supplied, with markdown bold markers stripped since the design system
 * renders plain text.
 */

/* ------------------------------------------------------------------ */
/* Section 2 — Trust / Value Snapshot                                  */
/* ------------------------------------------------------------------ */

export const trustSnapshot = {
  eyebrow: "Trust",
  heading: "Why Choose BestCloudAccounts for Your Cloud Account Needs?",
  intro:
    "We provide a streamlined marketplace where you can explore a variety of cloud providers and AWS-focused solutions.",
  subheading: "Our approach is built on:",
  items: [
    {
      icon: "sparkles",
      title: "Curated Product Variety",
      body: "Access a range of cloud account options.",
    },
    {
      icon: "clipboard-list",
      title: "Clear Specifications",
      body: "Review vCPU, compute resources, and configurations.",
    },
    {
      icon: "shield-check",
      title: "AWS Expertise",
      body: "Dedicated categories for AWS accounts and AI-ready solutions.",
    },
    {
      icon: "search",
      title: "Simple Discovery",
      body: "Easily find the right account for your project.",
    },
  ] satisfies CardItem[],
  closing:
    "We prioritize transparency and professional presentation, helping you identify the right cloud infrastructure for your specific requirements, backed by accessible support and a simple ordering process.",
};

/* ------------------------------------------------------------------ */
/* Section 3 — Explore Cloud Account Categories                        */
/* ------------------------------------------------------------------ */

interface ExploreCategoryCard {
  icon: string;
  name: string;
  body: string;
  whoItsFor: string;
  whyExplore: string;
  href: CategorySlug;
}

export const exploreCategories = {
  eyebrow: "Categories",
  heading: "Explore Cloud Account Options",
  subheading: "Compare available cloud account types and AWS configurations to find the right fit.",
  items: [
    {
      icon: "cloud",
      name: "Cloud Accounts",
      body: "Explore a range of cloud account solutions from different infrastructure platforms.",
      whoItsFor: "Developers, startups, and businesses seeking cloud computing resources.",
      whyExplore: "Find diverse account configurations for a variety of technical workloads.",
      href: "cloud-accounts",
    },
    {
      icon: "server",
      name: "AWS Accounts",
      body: "Compare available AWS account configurations and compute resources.",
      whoItsFor: "Professionals leveraging Amazon AWS for applications and cloud projects.",
      whyExplore: "Identify AWS account specifications that align with your development needs.",
      href: "aws-accounts",
    },
    {
      icon: "bot",
      name: "AWS AI Accounts",
      body: "Discover AWS account configurations intended for AI development and API-based workflows.",
      whoItsFor: "AI developers, engineers, and teams working with machine learning workloads.",
      whyExplore: "Evaluate accounts designed around compute resources for AI projects.",
      href: "aws-ai-accounts",
    },
    {
      icon: "coins",
      name: "AWS Credit Accounts",
      body: "Review AWS credit-based options organized by account specifications.",
      whoItsFor: "Customers prioritizing AWS credit configurations for their workloads.",
      whyExplore: "Compare credit levels and account details to suit your project scale.",
      href: "aws-credit-accounts",
    },
    {
      icon: "shopping-cart",
      name: "Amazon AWS",
      body: "Access the dedicated collection of Amazon AWS compute and credit configurations.",
      whoItsFor: "Users focused on the Amazon AWS ecosystem.",
      whyExplore: "Find all available AWS configurations in one dedicated section.",
      href: "buy-aws-accounts",
    },
  ] satisfies ExploreCategoryCard[],
};

/* ------------------------------------------------------------------ */
/* Sections 4-8 — long-form category deep-dives                        */
/* ------------------------------------------------------------------ */

export const cloudAccountsDeepDive = {
  eyebrow: "Cloud Accounts",
  heading: "Cloud Accounts for Infrastructure and Development",
  visualIcon: "cloud" as const,
  paragraphs: [
    "Cloud accounts provide access to virtual computing resources, enabling businesses and developers to build, test, and host applications without managing physical hardware. Whether you are deploying a web application, setting up a testing environment, or scaling infrastructure, choosing the right cloud account is a critical first step.",
    "When exploring cloud accounts, it is important to consider the underlying cloud providers and the specific configurations available. For developers and businesses, cloud infrastructure facilitates:",
  ],
  checklist: [
    "Application development and deployment.",
    "Software testing and staging environments.",
    "API-based workflows and automation.",
    "Hosting for websites and cloud applications.",
    "Scalable compute resources for technical projects.",
  ],
  closing: [
    "A wide variety of cloud account options exist, with configurations often including virtual machines, vCPU allocations, and cloud storage. By selecting a cloud account aligned with your technical requirements, you can more effectively build and manage your cloud-based projects.",
    "BestCloudAccounts presents a curated selection of cloud account solutions, allowing you to review specifications and compare options from different providers. The platform is designed to help customers understand which account configurations may work best for their intended use cases.",
  ],
  href: "cloud-accounts" as CategorySlug,
  ctaLabel: "Explore Cloud Accounts",
};

export const awsAccountsDeepDive = {
  eyebrow: "AWS Accounts",
  heading: "Amazon AWS Accounts for Scalable Computing",
  visualIcon: "server" as const,
  paragraphs: [
    "Amazon Web Services (AWS) is a leading cloud computing platform, offering a vast array of services including compute power, storage, and databases. AWS accounts serve as the gateway to the AWS ecosystem, providing access to virtual machines (EC2), API capabilities, and a range of other cloud services.",
    "When you explore AWS accounts on BestCloudAccounts, you can examine available configurations designed for different levels of compute resources. Whether you are managing application workloads, setting up development environments, or deploying cloud applications, the specifications of your AWS account matter.",
    "The platform offers users the ability to compare AWS account options, focusing on vCPU configurations and account variants. This allows you to select the account that seems most appropriate for your specific cloud projects.",
    "Why consider AWS accounts?",
  ],
  checklist: [
    "Access to a comprehensive cloud infrastructure ecosystem.",
    "Scalable resources for growing applications.",
    "Flexible configurations for various technical tasks.",
  ],
  closing: [] as string[],
  href: "aws-accounts" as CategorySlug,
  ctaLabel: "Browse AWS Accounts",
};

export const awsAiAccountsDeepDive = {
  eyebrow: "AWS AI Accounts",
  heading: "AWS AI Accounts for Development and Automation",
  visualIcon: "cpu" as const,
  paragraphs: [
    "Artificial intelligence development and machine learning workflows often require significant cloud resources. AWS AI accounts are designed to meet the demands of developers and engineers building AI applications, managing API workflows, and running automation-focused projects.",
    "These account configurations are organized around compute resources and technical specifications that support:",
  ],
  checklist: [
    "AI development and machine learning workloads.",
    "API-based application development.",
    "Cloud automation and orchestration.",
    "Software engineering and testing environments.",
  ],
  closing: [
    "By reviewing AWS AI accounts on BestCloudAccounts, technical teams can identify configurations that appear suitable for their AI projects. The focus is on providing access to compute resources that help facilitate development rather than getting bogged down by initial infrastructure limitations.",
    "For AI developers, being able to quickly provision an account with appropriate specifications can accelerate the development cycle, allowing more focus on building and iterating on applications.",
  ],
  href: "aws-ai-accounts" as CategorySlug,
  ctaLabel: "Browse AWS AI Accounts",
};

export const awsCreditAccountsDeepDive = {
  eyebrow: "AWS Credit Accounts",
  heading: "AWS Credit Accounts: Flexible Options",
  visualIcon: "coins" as const,
  paragraphs: [
    "AWS credit accounts are organized around credit amounts, offering customers a specific way to align their cloud account selection with their budget or project requirements. These accounts allow customers to explore AWS credit-based options, comparing different credit levels to find the configuration that fits their needs.",
    "When reviewing AWS credit accounts, customers should consider:",
  ],
  checklist: [
    "The credit amount associated with the account.",
    "The specific AWS compute or AI configuration included.",
    "The overall account specifications provided by the seller.",
  ],
  closing: [
    "BestCloudAccounts presents a selection of AWS credit accounts with clear product details, empowering customers to make informed decisions based on their credit preferences. It is important to review the exact product specifications before ordering to understand what is being offered.",
  ],
  href: "aws-credit-accounts" as CategorySlug,
  ctaLabel: "Browse AWS Credit Accounts",
};

export const amazonAwsDeepDive = {
  eyebrow: "Amazon AWS",
  heading: "The Amazon AWS Collection",
  visualIcon: "shopping-cart" as const,
  paragraphs: [
    "For customers specifically focused on the Amazon AWS ecosystem, BestCloudAccounts offers a dedicated Amazon AWS collection. This section brings together all available AWS compute configurations, credit options, and AI-ready accounts in one place.",
    "By browsing the Amazon AWS collection, customers can compare the available options and select the account that best fits their project requirements. Whether you are looking for a specific compute configuration, a credit-based option, or an AI-ready account, the collection streamlines the product discovery process.",
  ],
  checklist: [] as string[],
  closing: [] as string[],
  href: "buy-aws-accounts" as CategorySlug,
  ctaLabel: "Browse Amazon AWS",
};

/* ------------------------------------------------------------------ */
/* Section 9 — Who Is BestCloudAccounts For?                           */
/* ------------------------------------------------------------------ */

export const whoIsItFor: { eyebrow: string; heading: string; subheading: string; items: CardItem[] } = {
  eyebrow: "Audience",
  heading: "Who Can Benefit from Cloud Accounts?",
  subheading:
    "Cloud accounts serve a wide range of professionals and organizations. At BestCloudAccounts, the product selection is designed to cater to various technical needs.",
  items: [
    { icon: "cpu", title: "Developers", body: "Access cloud resources for building, testing, and deploying applications." },
    { icon: "list-checks", title: "Software Engineers", body: "Set up development environments and run automation workflows." },
    { icon: "bot", title: "AI Developers", body: "Leverage AWS AI accounts for machine learning and API development." },
    { icon: "sparkles", title: "Startups", body: "Quickly provision cloud infrastructure for new projects and MVPs." },
    { icon: "layers", title: "Agencies", body: "Manage client projects using scalable cloud account configurations." },
    { icon: "server", title: "Businesses", body: "Utilize cloud services for internal operations and customer-facing applications." },
    { icon: "network", title: "Technical Teams", body: "Coordinate development and infrastructure planning using cloud resources." },
    { icon: "search", title: "Researchers", body: "Access compute resources for data analysis and experimentation." },
    { icon: "cloud", title: "Cloud Professionals", body: "Explore account options for various infrastructure workloads." },
  ],
};

/* ------------------------------------------------------------------ */
/* Section 12 — How to Choose the Right Cloud Account                  */
/* ------------------------------------------------------------------ */

export const howToChoose: { eyebrow: string; heading: string; intro: string; items: CardItem[]; closing: string } = {
  eyebrow: "Buying Guide",
  heading: "A Quick Buying Guide",
  intro:
    "Selecting the right cloud account involves evaluating several factors. Before making a decision, consider the following:",
  items: [
    { icon: "list-checks", title: "Workload", body: "Determine what applications or services you will run. This affects required compute resources." },
    { icon: "cpu", title: "vCPU", body: "Evaluate the computing power needed for your tasks." },
    { icon: "sliders-horizontal", title: "Account Variant", body: "Compare different configurations available for your chosen cloud provider." },
    { icon: "network", title: "Region", body: "Consider where your users or data are located for lower latency." },
    { icon: "send", title: "API Access", body: "If you need automation, ensure the account supports API-based workflows." },
    { icon: "coins", title: "Credit Amount", body: "For AWS credit accounts, review the credit level provided." },
    { icon: "clipboard-list", title: "Intended Project", body: "Match the account specifications to the scope of your project." },
    { icon: "tag", title: "Budget", body: "Compare options within your budget constraints." },
  ],
  closing: "Always review the actual product specifications on the product page before ordering.",
};

/* ------------------------------------------------------------------ */
/* Section 13 — Cloud Accounts for Developers                          */
/* ------------------------------------------------------------------ */

export const forDevelopers: { eyebrow: string; heading: string; intro: string; items: CardItem[]; visualIcon: string } = {
  eyebrow: "For Developers",
  heading: "Cloud Accounts for Development Environments",
  intro:
    "For developers, cloud accounts provide an accessible way to launch virtual environments without local hardware constraints. These accounts enable:",
  items: [
    { icon: "search", title: "Rapid Testing", body: "Quickly spin up instances to test new code or configurations." },
    { icon: "server", title: "Software Development", body: "Use cloud resources to build and iterate on applications." },
    { icon: "send", title: "Automation", body: "Run scripts and workflows using cloud APIs." },
    { icon: "cpu", title: "AI Development", body: "Access compute resources for machine learning and model training." },
  ],
  visualIcon: "cpu",
};

/* ------------------------------------------------------------------ */
/* Section 14 — Cloud Accounts for Businesses                          */
/* ------------------------------------------------------------------ */

export const forBusinesses = {
  eyebrow: "For Businesses",
  heading: "Cloud Accounts for Business Infrastructure",
  paragraph:
    "For businesses, cloud accounts facilitate the deployment of production-grade applications, manage development teams, and support agency projects. They can help with scaling cloud workloads and provide a flexible infrastructure.",
  visualIcon: "database" as const,
};

/* ------------------------------------------------------------------ */
/* Section 15 — Security / Responsible Use                             */
/* ------------------------------------------------------------------ */

export const securitySection = {
  eyebrow: "Security",
  heading: "Responsible Use and Security",
  intro: "Customers are encouraged to:",
  points: [
    "Review account specifications before ordering.",
    "Secure account credentials upon receipt.",
    "Enable two-factor authentication where available.",
    "Protect API credentials.",
    "Follow provider terms and policies.",
    "Use accounts for intended purposes only.",
    "Check regional requirements for compliance.",
  ],
};

/* ------------------------------------------------------------------ */
/* Section 16 — Product Discovery heading override                     */
/* ------------------------------------------------------------------ */

export const productDiscovery = {
  eyebrow: "Product Discovery",
  heading: "Explore the Available Categories",
  subheading: "Browse the full range of cloud account solutions:",
};

/* ------------------------------------------------------------------ */
/* Section 17 — FAQ                                                    */
/* ------------------------------------------------------------------ */

export const homepageFaq: ArticleFaqItem[] = [
  { question: "What are cloud accounts?", answer: "Cloud accounts are access accounts that allow users to provision and manage cloud computing resources from a provider." },
  { question: "What types of cloud accounts are available?", answer: "The site offers a variety of cloud accounts, including AWS accounts, AWS AI accounts, and AWS credit accounts." },
  { question: "What are AWS accounts?", answer: "AWS accounts provide access to Amazon Web Services and its cloud infrastructure." },
  { question: "What are AWS AI accounts?", answer: "These are configurations intended for AI development and API-based workflows on AWS." },
  { question: "What are AWS credit accounts?", answer: "Credit accounts are organized around specific AWS credit amounts." },
  { question: "What is Amazon AWS?", answer: "Amazon AWS is the dedicated collection of available AWS configurations." },
  { question: "Who can use cloud accounts?", answer: "Developers, businesses, startups, and technical teams can use cloud accounts." },
  { question: "How do I choose the right cloud account?", answer: "Consider your workload, vCPU needs, and budget, and review the product specifications." },
  { question: "What should I check before ordering?", answer: "Review the vCPU, configuration, and any other technical details provided." },
  { question: "What is vCPU?", answer: "A virtual CPU, representing a portion of the physical CPU resource." },
  { question: "What is RPM?", answer: "Requests Per Minute, relevant for API-based accounts." },
  { question: "Why does account configuration matter?", answer: "It determines the compute resources available for your workloads." },
  { question: "Can developers use these accounts?", answer: "Yes, they are suitable for development, testing, and deployment." },
  { question: "Can businesses use these accounts?", answer: "Yes, they can be used for business applications and technical operations." },
  { question: "How do I compare different products?", answer: "Use the website's categories and product pages to compare specifications." },
  { question: "How do I contact BestCloudAccounts?", answer: "Contact information is available on the site." },
];

/* ------------------------------------------------------------------ */
/* Section 18 — Final CTA                                              */
/* ------------------------------------------------------------------ */

export const homepageFinalCta = {
  heading: "Find the Right Cloud Account for Your Project",
  description: "Browse available products and review specifications.",
  primaryCta: { label: "Browse Products", href: "/aws" },
  secondaryCta: { label: "Contact Support", href: "/contact" },
};

/* ------------------------------------------------------------------ */
/* Section 19 — Final SEO Summary                                      */
/* ------------------------------------------------------------------ */

export const finalSeoSummary = {
  heading: "About BestCloudAccounts",
  paragraph:
    "BestCloudAccounts is a cloud account marketplace offering a curated selection of cloud accounts and AWS solutions for developers and businesses. With dedicated categories for AWS accounts, AI-focused configurations, and credit-based options, users can compare specifications and identify the right cloud infrastructure.",
};
