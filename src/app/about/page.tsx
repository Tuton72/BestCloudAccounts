import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/final-cta";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — a focused marketplace for AWS accounts and credit.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        heading="About Best Cloud Accounts"
        description="A focused marketplace for AWS accounts and credit."
      />

      <Container className="max-w-3xl py-16 sm:py-20">
        <div className="flex flex-col gap-5 text-ink-secondary">
          <p>
            {siteConfig.name} is a marketplace for AWS accounts, AWS accounts configured for AI workloads, and
            AWS accounts pre-loaded with credit. Every product lists its exact configuration and price up
            front, so you know what you&apos;re ordering before you reach out.
          </p>
          <p>
            The catalog currently covers{" "}
            <Link href="/aws-accounts" className="text-accent-cyan hover:underline">
              AWS Accounts
            </Link>
            ,{" "}
            <Link href="/aws-ai-accounts" className="text-accent-cyan hover:underline">
              AWS AI Accounts
            </Link>
            , and{" "}
            <Link href="/aws-credit-accounts" className="text-accent-cyan hover:underline">
              AWS Credit Accounts
            </Link>
            . The underlying architecture is built to support additional cloud providers and product lines
            as the marketplace grows.
          </p>
          <p>
            Questions about a product or an order can be sent through{" "}
            <Link href="/contact" className="text-accent-cyan hover:underline">
              Contact
            </Link>
            .
          </p>
        </div>
      </Container>

      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
}
