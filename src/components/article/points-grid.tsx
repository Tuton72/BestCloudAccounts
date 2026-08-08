import { Icon } from "@/components/ui/icon";

/** Compact checkmark points grid — for short trust/benefit lists. */
export function PointsGrid({ points }: { points: string[] }) {
  return (
    <ul className="mx-auto mt-6 grid max-w-[880px] grid-cols-1 gap-3 sm:grid-cols-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink-secondary"
        >
          <Icon name="check" size={16} className="shrink-0 text-success" aria-hidden="true" />
          {point}
        </li>
      ))}
    </ul>
  );
}
