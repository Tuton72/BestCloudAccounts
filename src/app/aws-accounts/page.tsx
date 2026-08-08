import type { Metadata } from "next";
import { CategoryListing } from "@/components/product/category-listing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AWS Accounts",
  description: "Buy AWS accounts across compute tiers from 8 vCPU up to 512 vCPU, plus a free trial option.",
  alternates: { canonical: "/aws-accounts" },
  openGraph: {
    title: `AWS Accounts | ${siteConfig.name}`,
    description: "Buy AWS accounts across compute tiers from 8 vCPU up to 512 vCPU.",
    url: `${siteConfig.url}/aws-accounts`,
  },
};

export default function AwsAccountsPage() {
  return <CategoryListing categorySlug="aws-accounts" />;
}
