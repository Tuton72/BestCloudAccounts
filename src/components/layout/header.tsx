"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { MobileNav } from "@/components/layout/mobile-nav";
import { MAIN_NAV } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation. Adjusted during render (React's
  // recommended pattern for resetting state when a prop changes) rather
  // than in an effect, to avoid an extra cascading render.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas/85 backdrop-blur-md">
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-200",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-accent-cyan to-accent-violet">
            <Icon name="cloud" size={18} className="text-white" aria-hidden="true" />
          </span>
          <span>
            Best<span className="text-gradient">Cloud</span>Accounts
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-ink" : "text-ink-secondary hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            Support
          </Link>
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            <Icon name="send" size={15} aria-hidden="true" />
            Telegram
          </a>
          <Button href="/aws" size="md">
            Browse Products
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
        >
          <Icon name={mobileOpen ? "x" : "menu"} size={20} aria-hidden="true" />
        </button>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
