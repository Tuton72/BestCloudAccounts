import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/shared/legal-document";
import { PageHeader } from "@/components/shared/page-header";
import { privacyPolicyContent } from "@/config/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Best Cloud Accounts.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} heading="Privacy Policy" />
      <LegalDocumentBody document={privacyPolicyContent} />
    </div>
  );
}
