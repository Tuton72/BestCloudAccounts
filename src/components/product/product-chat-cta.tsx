import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

/**
 * Compact, reusable customer-contact CTA for the left column of a product
 * detail page (below the product image). Intentionally generic — no
 * product/provider name is referenced anywhere here — so the same
 * component can be dropped onto any product page (Azure, DigitalOcean,
 * AWS, AWS Credit, AWS AI, etc.) without modification. Reuses the site's
 * existing Telegram destination; no new contact channel is invented.
 */
export function ProductChatCTA() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <p className="text-sm leading-relaxed text-ink-secondary">
        Have questions or looking for a better deal? Chat with our admin for quick assistance and possible
        discounts.
      </p>
      <a
        href={siteConfig.links.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-sm font-medium text-ink transition-colors hover:border-accent-cyan/50 hover:bg-accent-cyan/15"
      >
        <Icon name="send" size={16} aria-hidden="true" />
        Chat on Telegram
      </a>
    </div>
  );
}
