import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "accent" | "gold" | "success" | "neutral";

const tones: Record<BadgeTone, string> = {
  accent: "bg-accent/10 text-accent border-accent/30",
  gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/30",
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
