"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import type { NavGroup } from "@/config/nav";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: NavGroup;
}

/** Desktop nav item with an optional dropdown/mega-menu of children. Falls back to a plain link when there are none. */
export function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const children = item.children ?? [];
  const active =
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`) ||
    children.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`));

  // Close on navigation — adjusted during render rather than in an effect
  // (React's recommended pattern for resetting state when a prop changes).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  if (children.length === 0) {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          active ? "bg-accent/10 text-accent" : "text-ink-secondary hover:text-ink",
        )}
      >
        {item.label}
      </Link>
    );
  }

  const mega = children.length > 6;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
          active ? "bg-accent/10 text-accent" : "text-ink-secondary hover:text-ink",
        )}
      >
        {item.label}
        <Icon name="chevron-down" size={14} className={cn("transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute left-0 top-full z-50 mt-2 origin-top rounded-2xl border border-border bg-surface-elevated p-2 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-150",
          mega ? "w-[440px]" : "w-56",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <Link
          href={item.href}
          onClick={() => setOpen(false)}
          className="mb-1 flex items-center justify-between rounded-lg border border-accent/20 bg-accent/10 px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
        >
          View all {item.label}
          <Icon name="arrow-right" size={14} aria-hidden="true" />
        </Link>
        <ul className={cn("gap-0.5", mega ? "grid grid-cols-2" : "flex flex-col")}>
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="block truncate rounded-lg px-3 py-2 text-sm text-ink-secondary transition-colors hover:bg-surface-hover hover:text-ink"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
