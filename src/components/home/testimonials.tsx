import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/config/content/testimonials";

/** Renders nothing until real customer testimonials are added to the config. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Testimonials" heading="What Customers Say" className="mb-12" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-ink-secondary">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-medium text-ink">
                {testimonial.name}
                {testimonial.role ? <span className="text-ink-muted"> — {testimonial.role}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
