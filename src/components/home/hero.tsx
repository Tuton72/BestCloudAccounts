import { AbstractCloudVisual } from "@/components/shared/abstract-cloud-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/config/content/hero";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.14),transparent)]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-slide-up">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-accent-cyan">
            {heroContent.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            {heroContent.headline}
            <br />
            <span className="text-gradient">{heroContent.headlineAccent}</span>
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
