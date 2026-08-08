import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center sm:py-32">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Icon name="search" size={26} aria-hidden="true" />
      </span>
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Page Not Found</h1>
      <p className="max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Browse the AWS catalog instead.
      </p>
      <Button href="/aws" size="lg">
        Browse AWS Products
      </Button>
    </Container>
  );
}
