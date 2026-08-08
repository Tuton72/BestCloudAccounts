import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "accent" | "violet" | "success" | "neutral";

const tones: Record<BadgeTone, string> = {
  accent: "bg-accent/10 text-accent border-accent/30",
  violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/30",
  success: "bg-success/10 text-success border-success/30",
  neutral: "bg-surface text-ink-secondary border-border",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
