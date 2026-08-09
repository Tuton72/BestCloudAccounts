interface ComparisonTableProps {
  heading: string;
  intro?: string;
  columns: string[];
  rows: { label: string; cells: string[] }[];
  closing?: string;
}

/**
 * Premium responsive comparison table. Renders as a real <table> with a
 * horizontally scrollable container on narrow viewports (the container
 * scrolls, not the page), keeping every column/row intact rather than
 * collapsing into stacked cards.
 */
export function ComparisonTable({ heading, intro, columns, rows, closing }: ComparisonTableProps) {
  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="mx-auto max-w-[880px]">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{heading}</h2>
        {intro ? <p className="mt-4 leading-relaxed text-ink-secondary">{intro}</p> : null}
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-elevated">
              {columns.map((col) => (
                <th key={col} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold text-ink">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-border bg-surface last:border-b-0 even:bg-canvas-secondary">
                {row.cells.map((cell, i) => (
                  <td
                    key={`${row.label}-${i}`}
                    className={i === 0 ? "px-4 py-3 font-medium text-ink" : "px-4 py-3 text-ink-secondary"}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {closing ? <p className="mx-auto mt-6 max-w-[880px] leading-relaxed text-ink-secondary">{closing}</p> : null}
    </div>
  );
}
