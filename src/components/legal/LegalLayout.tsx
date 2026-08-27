import type { ReactNode } from "react";
import LightHeader from "@/components/layout/LightHeader";
import Footer from "@/components/layout/Footer";

/**
 * Shared shell for the legal pages (Terms, Privacy): light header, a cream
 * title banner, the two-column body, then the standard light footer.
 */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 bg-[#fbfaf8] text-[#2b2b2b]">
      <div className="bg-[#f7f2ea]">
        <LightHeader />
      </div>

      {/* Title banner */}
      <section className="mt-5 bg-[#e6ddc6] px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-serif text-3xl leading-tight text-[#2b1420] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-3 text-xs font-light tracking-wide text-[#5c5347] sm:text-sm">
          Last updated {updated}
        </p>
      </section>

      {/* Body — two balanced columns on desktop, single column on mobile */}
      <section className="px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl gap-x-14 gap-y-10 lg:columns-2 [&>*]:break-inside-avoid">
          {children}
        </div>
      </section>

      <Footer variant="light" />
    </main>
  );
}
