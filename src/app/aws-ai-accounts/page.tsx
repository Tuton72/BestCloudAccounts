import type { Metadata } from "next";
import { CategoryListing } from "@/components/product/category-listing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AWS AI Accounts",
  description: "AWS accounts pre-configured for AI/LLM workloads, with rate limits, compute, and support tiers listed up front.",
  alternates: { canonical: "/aws-ai-accounts" },
  openGraph: {
    title: `AWS AI Accounts | ${siteConfig.name}`,
    description: "AWS accounts pre-configured for AI/LLM workloads.",
    url: `${siteConfig.url}/aws-ai-accounts`,
  },
};

export default function AwsAiAccountsPage() {
  return <CategoryListing categorySlug="aws-ai-accounts" />;
}
