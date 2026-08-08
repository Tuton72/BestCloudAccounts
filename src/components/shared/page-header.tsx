import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";

interface PageHeaderProps {
  crumbs: Crumb[];
  heading: string;
  description?: string;
}

/** Shared header block for static content pages (About, FAQ, legal, etc). */
export function PageHeader({ crumbs, heading, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-canvas-secondary">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{heading}</h1>
        {description ? <p className="mt-2 max-w-2xl text-ink-muted">{description}</p> : null}
      </Container>
    </div>
  );
}
