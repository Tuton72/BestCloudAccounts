import { Icon, type IconName } from "@/components/ui/icon";

interface StepItem {
  icon: IconName;
  title: string;
  body?: string;
  checklist?: string[];
}

interface StepListProps {
  heading?: string;
  intro?: string;
  items: StepItem[];
  closing?: string;
}

/** Numbered step cards used for the safety guide and the buying process. */
export function StepList({ heading, intro, items, closing }: StepListProps) {
  return (
    <div className="mx-auto max-w-[1160px]">
      {heading || intro ? (
        <div className="mx-auto max-w-[880px]">
          {heading ? <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</h2> : null}
          {intro ? <p className="mt-4 leading-relaxed text-ink-secondary">{intro}</p> : null}
        </div>
      ) : null}
      <ol className="mt-8 flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <div className="flex shrink-0 flex-col items-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
                {index + 1}
              </span>
              {index < items.length - 1 ? <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" /> : null}
            </div>
            <div className="pb-1">
              <div className="flex items-center gap-2">
                <Icon name={item.icon} size={17} className="text-accent-cyan" aria-hidden="true" />
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              </div>
              {item.body ? <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p> : null}
              {item.checklist ? (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.checklist.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <Icon name="check" size={15} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
      {closing ? <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{closing}</p> : null}
    </div>
  );
}
