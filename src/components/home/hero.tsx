import { AbstractCloudVisual } from "@/components/shared/abstract-cloud-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/config/content/hero";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(16,185,129,0.16),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_85%_15%,rgba(20,184,166,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(25%_25%_at_60%_75%,rgba(245,158,11,0.06),transparent)]" />
      </div>
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-slide-up">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-cyan">
            {heroContent.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {heroContent.headline}
            <br />
            {heroContent.headlinePrefix}{" "}
            <span className="text-gradient">{heroContent.headlineHighlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink-muted sm:text-lg">{heroContent.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary" size="lg">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>

        <AbstractCloudVisual className="aspect-square w-full animate-fade-in lg:aspect-[5/4]" />
      </Container>
    </section>
  );
}
