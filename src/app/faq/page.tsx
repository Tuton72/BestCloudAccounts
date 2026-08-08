import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/final-cta";
import { PageHeader } from "@/components/shared/page-header";
import { Faq } from "@/components/shared/faq";
import { Container } from "@/components/ui/container";
import { siteFaqContent } from "@/config/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ordering AWS accounts, AI accounts, and credit accounts.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        heading="Frequently Asked Questions"
        description="Answers to common questions about products, ordering, and support."
      />
      <Container className="py-16 sm:py-20">
        <Faq items={siteFaqContent} align="left" />
      </Container>
      <FinalCTA />
    </div>
  );
}
