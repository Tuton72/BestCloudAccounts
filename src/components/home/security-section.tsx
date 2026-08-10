import { PointsGrid } from "@/components/article/points-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { securitySection } from "@/config/content/homepage";

/** Section 15 — "Security / Responsible Use". */
export function SecuritySection() {
  return (
    <section className="border-t border-border bg-canvas-secondary py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={securitySection.eyebrow}
          heading={securitySection.heading}
          subheading={securitySection.intro}
          className="mb-2"
        />
        <PointsGrid points={securitySection.points} />
      </Container>
    </section>
  );
}
