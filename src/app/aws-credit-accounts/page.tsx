import type { Metadata } from "next";
import { CategoryListing } from "@/components/product/category-listing";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "AWS Credit Accounts",
  description: "AWS accounts pre-loaded with promotional credit, from 1,000 up to 100,000 credit.",
  alternates: { canonical: "/aws-credit-accounts" },
  openGraph: {
    title: `AWS Credit Accounts | ${siteConfig.name}`,
    description: "AWS accounts pre-loaded with promotional credit.",
    url: `${siteConfig.url}/aws-credit-accounts`,
  },
};

export default function AwsCreditAccountsPage() {
  return <CategoryListing categorySlug="aws-credit-accounts" />;
}
