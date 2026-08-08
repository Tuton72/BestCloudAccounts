import type { Metadata } from "next";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinalCTA } from "@/components/home/final-cta";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How ordering works at Best Cloud Accounts — from choosing a product to receiving access.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        heading="How It Works"
        description="From browsing the catalog to receiving your account — here's the full process."
      />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
}
