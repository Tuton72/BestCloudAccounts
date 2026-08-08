import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/shared/legal-document";
import { PageHeader } from "@/components/shared/page-header";
import { termsOfServiceContent } from "@/config/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Best Cloud Accounts.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <div>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} heading="Terms of Service" />
      <LegalDocumentBody document={termsOfServiceContent} />
    </div>
  );
}
