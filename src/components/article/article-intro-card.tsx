interface ArticleIntroCardProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

/** Large premium content card used to open a product article. */
export function ArticleIntroCard({ eyebrow, title, paragraphs }: ArticleIntroCardProps) {
  return (
    <div className="mx-auto w-full max-w-[1000px] rounded-3xl border border-accent/20 bg-surface-elevated p-6 sm:p-10">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">{eyebrow}</span>
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-4 leading-relaxed text-ink-secondary">
          {p}
        </p>
      ))}
    </div>
  );
}
