import type { ReactNode } from "react";

/** One numbered clause inside a legal page. */
export default function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="font-serif text-lg font-semibold text-[#2b1420] sm:text-xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm font-light leading-7 text-[#4b4b4b]">{children}</div>
    </section>
  );
}

/** Bulleted list with the site's list styling. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#c2a262]" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
