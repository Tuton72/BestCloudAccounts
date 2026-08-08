"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryHref } from "@/lib/routes";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/catalog";

interface ProductFiltersProps {
  categories: Category[];
}

/** Tab-style filter nav between the full AWS catalog and each category. */
export function ProductFilters({ categories }: ProductFiltersProps) {
  const pathname = usePathname();
  const tabs = [{ label: "All", href: "/aws" }, ...categories.map((c) => ({ label: c.name, href: categoryHref(c.slug) }))];

  return (
    <nav aria-label="Filter products" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex w-max min-w-full items-center gap-2 sm:w-full sm:flex-wrap">
        {tabs.map((tab) => {
          const active = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors",
                  active
                    ? "border-accent/40 bg-accent/10 text-accent-cyan"
                    : "border-border bg-surface text-ink-secondary hover:border-border-strong hover:text-ink",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
