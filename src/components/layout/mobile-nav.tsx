"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { MAIN_NAV } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-nav"
      className={cn(
        "grid overflow-hidden border-b border-border bg-canvas transition-[grid-template-rows] duration-300 ease-out md:hidden",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
      )}
    >
      <nav aria-label="Mobile" className="min-h-0">
        <ul className="flex flex-col gap-1 px-4 py-4">
          {MAIN_NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                    active ? "bg-surface text-ink" : "text-ink-secondary hover:bg-surface hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col gap-2 border-t border-border px-4 py-4">
          <a
            href={siteConfig.links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-surface hover:text-ink"
          >
            <Icon name="send" size={16} aria-hidden="true" />
            Telegram
          </a>
          <Button href="/aws" size="lg" onClick={onClose} className="w-full">
            Browse Products
          </Button>
        </div>
      </nav>
    </div>
  );
}
