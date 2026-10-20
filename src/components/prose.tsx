import type { ReactNode } from "react";

/*
 * Building blocks for long-form pages such as privacy policies.
 *
 * Whitespace note: in this toolchain, a JSX text node that spans several
 * lines AND contains an HTML entity (&rsquo; &ldquo; &amp; ...) loses its
 * leading space, gluing it to the element before it ("Note:The ..."). Write
 * typographic characters literally (’ “ ” —) instead of using entities, and
 * put text containing `&` or `>` inside a string expression: {"A & B"}.
 */

/** External link that opens in a new tab with safe rel attributes. */
export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="break-words text-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  );
}

/** Inline emphasis for key terms, slightly brighter than body text. */
export function B({ children }: { children: ReactNode }) {
  return (
    <strong className="font-semibold text-foreground">{children}</strong>
  );
}

/** Highlighted aside, e.g. a "Note:" or "Important:" paragraph. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-line bg-accent-soft px-4 py-3 text-sm text-foreground">
      {children}
    </p>
  );
}

/** A numbered policy section: an h2 the section is labelled by, then content. */
export function PolicySection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

/**
 * A table whose first column labels each row.
 *
 * Phones get one stacked card per row ("Column: value" lines) so a policy
 * opened from Google Play never needs sideways scrolling. From the `sm`
 * breakpoint up it is a real table; it still scrolls inside its own
 * focusable region if the text is ever too wide.
 *
 * `columnWidths` takes Tailwind width classes per column (e.g. "w-[22%]");
 * leave an entry undefined to let that column take the remaining space.
 */
export function DataTable({
  caption,
  columns,
  rows,
  columnWidths,
}: {
  caption: string;
  columns: string[];
  rows: ReactNode[][];
  columnWidths?: (string | undefined)[];
}) {
  return (
    <>
      <dl className="mt-4 divide-y divide-line rounded-lg border border-line sm:hidden">
        {rows.map((cells, rowIndex) => (
          <div key={rowIndex} className="px-4 py-3">
            <dt className="font-semibold text-foreground">{cells[0]}</dt>
            {cells.slice(1).map((cell, cellIndex) => (
              <dd key={cellIndex} className="mt-1.5">
                <span className="font-semibold text-foreground">
                  {columns[cellIndex + 1]}:
                </span>{" "}
                {cell}
              </dd>
            ))}
          </div>
        ))}
      </dl>
      <div
        role="region"
        aria-label={caption}
        tabIndex={0}
        className="mt-4 hidden overflow-x-auto rounded-lg border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:block"
      >
        <table
          className={`w-full min-w-[34rem] border-collapse text-left text-sm ${
            columnWidths ? "table-fixed" : ""
          }`}
        >
          <caption className="sr-only">{caption}</caption>
          {columnWidths && (
            <colgroup>
              {columns.map((column, index) => (
                <col key={column} className={columnWidths[index]} />
              ))}
            </colgroup>
          )}
          <thead className="bg-surface">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border-b border-line px-4 py-3 font-semibold text-foreground"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((cells, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-line align-top last:border-b-0"
              >
                {cells.map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th
                      key={cellIndex}
                      scope="row"
                      className="px-4 py-3 font-semibold text-foreground"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={cellIndex} className="px-4 py-3">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
