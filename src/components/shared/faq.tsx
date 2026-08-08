"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/config/content/faq";

interface FaqProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  align?: "left" | "center";
}

/** Reusable accordion FAQ — used on product pages, the homepage, and /faq. */
export function Faq({ items, eyebrow = "FAQ", heading = "Frequently Asked Questions", subheading, align = "center" }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading">
      <SectionHeading eyebrow={eyebrow} heading={heading} subheading={subheading} align={align} className="mb-8" />
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div
              key={item.question}
              className={cn(
                "overflow-hidden rounded-xl border bg-surface transition-colors",
                open ? "border-accent/35" : "border-border",
              )}
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-ink"
                >
                  {item.question}
                  <Icon
                    name="chevron-down"
                    size={18}
                    className={cn("shrink-0 transition-transform", open ? "rotate-180 text-accent" : "text-ink-muted")}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn("grid overflow-hidden transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-4 text-sm text-ink-muted">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
