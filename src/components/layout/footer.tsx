import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/shared/logo";
import { FOOTER_NAV } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LinkAccent = "cloud" | "aws" | "neutral";

const LINK_HOVER: Record<LinkAccent, string> = {
  cloud: "hover:text-accent-cyan",
  aws: "hover:text-accent",
  neutral: "hover:text-ink",
};

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  accent?: LinkAccent;
  /** Lays 7-then-6 links into two columns instead of one long stack — used for Cloud Accounts. */
  twoColumn?: boolean;
  className?: string;
}

function FooterColumn({ title, links, accent = "neutral", twoColumn = false, className }: FooterColumnProps) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul
        className={cn(
          "mt-4 gap-x-6 gap-y-2.5",
          twoColumn ? "grid grid-cols-2 grid-flow-col grid-rows-[repeat(7,auto)]" : "flex flex-col",
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "inline-block text-sm text-ink-muted transition-all duration-150 hover:translate-x-0.5",
                LINK_HOVER[accent],
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SOCIAL_LINKS = [
  { href: siteConfig.links.telegram, label: "Telegram", icon: "send" as const, external: true },
  { href: `mailto:${siteConfig.links.email}`, label: "Email", icon: "mail" as const, external: false },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-canvas-secondary">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(45%_50%_at_10%_0%,rgba(16,185,129,0.10),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_45%_at_90%_10%,rgba(20,184,166,0.09),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(18%_18%_at_50%_100%,rgba(245,158,11,0.04),transparent)]" />
      </div>

      <Container className="relative grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo markSize={34} wordmarkClassName="text-xl" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink-muted transition-all duration-150 hover:border-accent/40 hover:bg-surface-hover hover:text-accent-cyan"
              >
                <Icon name={social.icon} size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          title="Cloud Accounts"
          links={FOOTER_NAV.cloudAccounts}
          accent="cloud"
          twoColumn
          className="lg:col-span-2"
        />
        <FooterColumn title="AWS Accounts" links={FOOTER_NAV.aws} accent="aws" />
        <FooterColumn title="Company" links={FOOTER_NAV.company} accent="neutral" />
      </Container>

      <div className="relative border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-ink-muted sm:flex-row">
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
