import { Container } from "@/components/ui/container";
import type { CatalogStats } from "@/lib/data/products";

interface StatTile {
  label: string;
  value: string;
}

/** Compact trust-stats strip. Values are derived from the real catalog — never hard-coded. */
export function Stats({ stats }: { stats: CatalogStats }) {
  const tiles: StatTile[] = [
    { label: "Products", value: String(stats.totalProducts) },
    { label: "AWS Accounts", value: String(stats.awsAccounts) },
    { label: "AI Ready", value: String(stats.awsAiAccounts) },
    { label: "Support", value: "Telegram" },
  ];

  return (
    <div className="border-b border-border bg-canvas-secondary">
      <Container className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
        {tiles.map((tile) => (
          <div key={tile.label} className="flex flex-col items-center gap-1 py-6 text-center">
            <span className="text-2xl font-semibold text-ink sm:text-3xl">{tile.value}</span>
            <span className="text-xs text-ink-muted sm:text-sm">{tile.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
