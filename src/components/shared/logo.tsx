import { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CloudMarkProps {
  size?: number;
  className?: string;
}

/**
 * Custom BestCloudAccounts brand mark: a cloud silhouette (emerald -> teal
 * gradient) with a small connected-node accent representing secure,
 * networked cloud infrastructure. One node renders in gold as the
 * "premium" accent. Built from primitive shapes sharing one gradient
 * fill, not a stock/outline cloud icon.
 */
export function CloudMark({ size = 32, className }: CloudMarkProps) {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="28" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#10B981" />
          <stop offset="1" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      {/* cloud silhouette, built from overlapping primitives sharing one gradient */}
      <circle cx="11" cy="15" r="5.5" fill={`url(#${gradientId})`} />
      <circle cx="17.5" cy="11" r="7.5" fill={`url(#${gradientId})`} />
      <circle cx="24" cy="15" r="5.5" fill={`url(#${gradientId})`} />
      <rect x="5" y="17" width="22" height="9" rx="4.5" fill={`url(#${gradientId})`} />

      {/* connected-node accent: secure, networked infrastructure */}
      <line x1="13" y1="21" x2="18" y2="19.5" stroke="#F8FAFC" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />
      <line x1="18" y1="19.5" x2="23" y2="21.5" stroke="#F8FAFC" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />
      <circle cx="13" cy="21" r="1.5" fill="#F8FAFC" />
      <circle cx="23" cy="21.5" r="1.5" fill="#F8FAFC" />
      <circle cx="18" cy="19.5" r="1.8" fill="#F59E0B" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markSize?: number;
  /** Hide the wordmark for compact/icon-only placements. The mark stays identical either way. */
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

/** Shared brand lockup — used by the header and footer so there is one logo, one source of truth. */
export function Logo({ className, markSize = 32, showWordmark = true, wordmarkClassName }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="BestCloudAccounts — Home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <CloudMark size={markSize} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
      {showWordmark ? (
        <span className={cn("text-lg font-bold tracking-tight text-ink", wordmarkClassName)}>
          Best<span className="text-gradient">Cloud</span>Accounts
        </span>
      ) : null}
    </Link>
  );
}
