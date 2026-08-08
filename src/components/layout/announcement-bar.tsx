import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

/** Thin top bar for a single, editable trust/announcement message. */
export function AnnouncementBar() {
  return (
    <div className="border-b border-border bg-canvas-secondary">
      <Container className="flex h-9 items-center justify-center gap-2 text-center text-xs text-ink-muted sm:text-sm">
        <Icon name="sparkles" size={14} className="shrink-0 text-accent-cyan" aria-hidden="true" />
        <p className="truncate">
          Premium AWS accounts and credit — questions before you order?{" "}
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline underline-offset-2 hover:text-accent-cyan"
          >
            Chat with us on Telegram
          </a>
        </p>
      </Container>
    </div>
  );
}
