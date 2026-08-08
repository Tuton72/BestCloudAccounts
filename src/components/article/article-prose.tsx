interface ArticleProseProps {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
  /** H2 by default; product detail-style long pages sometimes need H3 for nested headings. */
  level?: "h2" | "h3";
}

/** Clean, comfortable-width reading section for plain long-form paragraphs — no card/border decoration. */
export function ArticleProse({ heading, intro, paragraphs, subsections, level = "h2" }: ArticleProseProps) {
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
      {subsections?.map((sub) => (
        <div key={sub.heading} className="mt-8">
          <h3 className="text-xl font-semibold text-ink">{sub.heading}</h3>
          {sub.paragraphs.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-ink-secondary">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
