import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { FOOTER_NAV } from "@/config/nav";
import { siteConfig } from "@/config/site";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas-secondary">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan">
              <Icon name="cloud" size={18} className="text-white" aria-hidden="true" />
            </span>
            <span>
              Best<span className="text-gradient">Cloud</span>Accounts
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-ink-muted">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
            >
              <Icon name="send" size={16} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-border-strong hover:text-ink"
            >
              <Icon name="mail" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <FooterColumn title="Products" links={FOOTER_NAV.products} />
        <FooterColumn title="Company" links={FOOTER_NAV.company} />
        <FooterColumn
          title="Support"
          links={[
            { label: "Telegram", href: siteConfig.links.telegram },
            { label: "Contact Support", href: "/contact" },
          ]}
        />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {FOOTER_NAV.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
