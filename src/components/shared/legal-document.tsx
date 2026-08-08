import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import type { LegalDocument } from "@/config/content/legal";

export function LegalDocumentBody({ document }: { document: LegalDocument }) {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <div className="mb-8 flex items-start gap-3 rounded-xl border border-accent-gold/30 bg-accent-gold/10 p-4 text-sm text-ink-secondary">
        <Icon name="shield-check" size={18} className="mt-0.5 shrink-0 text-accent-gold" aria-hidden="true" />
        <p>{document.intro}</p>
      </div>
      <p className="text-xs uppercase tracking-wide text-ink-muted">Last updated: {document.updated}</p>
      <div className="mt-8 flex flex-col gap-8">
        {document.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-ink">{section.heading}</h2>
            <div className="mt-2 flex flex-col gap-2">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
