import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

/** Premium conversion card pointing to the site's real contact channels — no invented contact info. */
export function ContactPrompt() {
  return (
    <section className="border-y border-border py-14 sm:py-16">
      <Container>
        <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-5 rounded-2xl border border-accent/20 bg-surface-elevated px-6 py-10 text-center sm:px-12">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Icon name="headset" size={22} aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Need Help Choosing an AWS Account?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-muted">
              Have questions about an AWS package, vCPU configuration, credit amount, or product specifications?
              Contact our team for assistance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-base font-medium text-ink transition-colors hover:border-accent/40 hover:bg-surface-hover"
            >
              <Icon name="send" size={16} aria-hidden="true" />
              Chat on Telegram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
