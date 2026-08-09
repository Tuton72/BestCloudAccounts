import { Icon } from "@/components/ui/icon";

interface ArticleProseSubsection {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs (e.g. two verification methods). */
  checklist?: string[];
  /** Optional paragraphs rendered after the checklist. */
  closing?: string[];
}

interface ArticleProseProps {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  /** Optional bullet list rendered after the top-level paragraphs (e.g. a services list embedded in an overview section). */
  checklist?: string[];
  /** Optional paragraphs rendered after the top-level checklist. */
  closing?: string[];
  subsections?: ArticleProseSubsection[];
  /** H2 by default; product detail-style long pages sometimes need H3 for nested headings. */
  level?: "h2" | "h3";
}

/** Clean, comfortable-width reading section for plain long-form paragraphs — no card/border decoration. */
export function ArticleProse({ heading, intro, paragraphs, checklist, closing, subsections, level = "h2" }: ArticleProseProps) {
  const Heading = level;
  return (
    <div className="mx-auto max-w-[880px]">
      <Heading className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</Heading>
      {intro ? <p className="mt-4 leading-relaxed text-ink-secondary">{intro}</p> : null}
      {paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
          {p}
        </p>
      ))}
      {checklist ? (
        <ul className="mt-4 flex flex-col gap-1.5">
          {checklist.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-ink-secondary">
              <Icon name="check" size={15} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      ) : null}
      {closing?.map((p, i) => (
        <p key={`top-closing-${i}`} className="mt-4 leading-relaxed text-ink-secondary">
          {p}
        </p>
      ))}
      {subsections?.map((sub) => (
        <div key={sub.heading} className="mt-8">
          <h3 className="text-xl font-semibold text-ink">{sub.heading}</h3>
          {sub.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
          {sub.checklist ? (
            <ul className="mt-3 flex flex-col gap-1.5">
              {sub.checklist.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {sub.closing?.map((p, i) => (
            <p key={`closing-${i}`} className="mt-3 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
