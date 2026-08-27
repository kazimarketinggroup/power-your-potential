import Link from "next/link";

export default function ApplyCta() {
  return (
    <section className="relative flex min-h-100 items-center overflow-hidden bg-[#5e1034]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">
          Apply for The Integrated Leader
        </h2>
        <p className="mt-3 text-sm font-light text-white/90 sm:text-[0.9375rem]">
          Application only. Limited private spaces each quarter.
        </p>

        <Link
          href="/#contact"
          className="mt-6 inline-block rounded-full bg-[linear-gradient(180deg,#d6bd8c_0%,#c2a262_100%)] px-8 py-3 text-[0.8125rem] font-medium text-[#33220a] transition-opacity hover:opacity-90"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
