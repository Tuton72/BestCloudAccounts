import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/shared/legal-document";
import { PageHeader } from "@/components/shared/page-header";
import { refundPolicyContent } from "@/config/content/legal";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund policy for Best Cloud Accounts.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]} heading="Refund Policy" />
      <LegalDocumentBody document={refundPolicyContent} />
    </div>
  );
}
