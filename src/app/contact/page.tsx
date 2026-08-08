import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} through Telegram or email.`,
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    label: "Telegram",
    description: "The fastest way to reach us — for product questions and order support.",
    href: siteConfig.links.telegram,
    icon: "send" as const,
    external: true,
  },
  {
    label: "Email",
    description: "For anything you'd rather put in writing.",
    href: `mailto:${siteConfig.links.email}`,
    icon: "mail" as const,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        heading="Contact"
        description="Reach our team before or after placing an order."
      />

      <Container className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon name={channel.icon} size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">{channel.label}</h2>
              <p className="mt-1.5 text-sm text-ink-muted">{channel.description}</p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
