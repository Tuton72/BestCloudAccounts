import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const NODE_ICONS: IconName[] = ["server", "database", "cpu", "network", "cloud", "shield-check"];

interface AbstractCloudVisualProps {
  className?: string;
  /** Optional center-node icon override, so different homepage sections (Cloud
   * Accounts, AWS AI, AWS Credit, etc.) can reuse this same lightweight,
   * zero-network-weight visual with a distinct focal icon. Defaults to the
   * original "cloud" center node so every existing usage is unaffected. */
  emphasize?: IconName;
}

/**
 * Abstract cloud-infrastructure visual: glowing gradient blobs behind a grid
 * of node icons connected by faint lines. Purely decorative (aria-hidden) —
 * not a copy of any AWS UI or screenshot.
 */
export function AbstractCloudVisual({ className, emphasize = "cloud" }: AbstractCloudVisualProps) {
  const nodes = NODE_ICONS.map((name, index) => (index === 4 ? emphasize : name));
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-border bg-canvas-secondary",
        className,
      )}
    >
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-[80px]" />
      <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-accent-cyan/20 blur-[80px]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gold/10 blur-[60px]" />

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="var(--border-strong)" strokeWidth="1" />
        <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="var(--border-strong)" strokeWidth="1" />
        <line x1="25%" y1="80%" x2="50%" y2="50%" stroke="var(--border-strong)" strokeWidth="1" />
        <line x1="78%" y1="78%" x2="50%" y2="50%" stroke="var(--border-strong)" strokeWidth="1" />
      </svg>

      <div className="relative grid h-full grid-cols-3 place-items-center gap-6 p-10">
        {nodes.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent-cyan shadow-[0_0_24px_-8px_rgba(20,184,166,0.5)]",
              index === 4 && "col-start-2 row-start-2 h-16 w-16 border-accent/40 text-accent shadow-[0_0_28px_-6px_rgba(16,185,129,0.55)]",
            )}
          >
            <Icon name={name} size={index === 4 ? 26 : 20} />
          </div>
        ))}
      </div>
    </div>
  );
}
