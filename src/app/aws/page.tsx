import type { Metadata } from "next";
import { CategoryListing } from "@/components/product/category-listing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AWS Marketplace",
  description:
    "Browse every AWS Account, AWS AI Account, and AWS Credit Account from Best Cloud Accounts — transparent pricing on every product.",
  alternates: { canonical: "/aws" },
  openGraph: {
    title: `AWS Marketplace | ${siteConfig.name}`,
    description: "Browse every AWS Account, AWS AI Account, and AWS Credit Account.",
    url: `${siteConfig.url}/aws`,
  },
};

export default function AwsMarketplacePage() {
  return <CategoryListing />;
}
