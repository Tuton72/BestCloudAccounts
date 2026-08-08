import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCTA() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="glow-accent relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-surface to-canvas-secondary px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(139,92,246,0.15),transparent)]"
          />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Ready to find the right AWS account?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-muted">
              Browse the full catalog of AWS Accounts, AWS AI Accounts, and AWS Credit Accounts — pricing is
              shown up front on every product.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/aws" size="lg">
                Browse AWS Products
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to Support
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
