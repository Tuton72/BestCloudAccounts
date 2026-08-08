import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface FinalCTAProps {
  heading?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** Reused across the homepage, AWS pages, Cloud Accounts pages, and product details. */
export function FinalCTA({
  heading = "Ready to find the right AWS account?",
  description = "Browse the full catalog of AWS Accounts, AWS AI Accounts, and AWS Credit Accounts — pricing is shown up front on every product.",
  primaryCta = { label: "Browse AWS Products", href: "/aws" },
  secondaryCta = { label: "Contact Support", href: "/contact" },
}: FinalCTAProps) {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="glow-accent relative overflow-hidden rounded-3xl border border-border bg-surface-elevated px-6 py-14 text-center sm:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_15%_0%,rgba(16,185,129,0.16),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(45%_55%_at_100%_100%,rgba(20,184,166,0.14),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_50%_45%,rgba(245,158,11,0.05),transparent)]" />
          </div>
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-muted">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
