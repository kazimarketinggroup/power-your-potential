import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Power Your Self", href: "/#power-your-self" },
  { label: "Power Your People", href: "/#power-your-people" },
  { label: "Power Your Business", href: "/#power-your-business" },
];

export default function IntegratedHero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden  bg-[#5e1034]">
      {/* Floral pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-5 sm:px-6">
        {/* Cream navbar — mirrors the home Header layout */}
        <div className="relative flex items-center justify-between rounded-full bg-[#f3e5e3] px-5 py-3 sm:px-8">
          <Link href="/" aria-label="Power Your Potential home">
            <Image
              src="/images/logo-pyp.png"
              alt="Power Your Potential"
              width={524}
              height={284}
              priority
              className="h-auto w-21"
            />
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-10"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#33222a] transition-colors hover:text-[#5e1034]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className="rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90 sm:px-6"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hero content */}
        <div className="mt-14 flex flex-col gap-10 pb-4 sm:mt-20 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex-1 lg:pr-14">
            <h1 className="fade-up font-serif text-4xl leading-tight sm:text-5xl lg:text-[3.375rem]">
              The Integrated
              <br />
              Leader
            </h1>

            <p className="fade-up mt-6 max-w-md font-serif text-xl font-light leading-relaxed text-white/90 [animation-delay:150ms] sm:text-[1.4375rem]">
              Lead powerfully &ndash; without carrying everything in your work or your life.
            </p>

            <div className="fade-up mt-9 [animation-delay:300ms]">
              <Link
                href="/#contact"
                className="inline-block rounded-full border border-[#d6bd8c] px-7 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-[#d6bd8c] hover:text-[#33220a]"
              >
                Apply for The Integrated Leader
              </Link>
              <p className="mt-3 text-xs font-light text-white/80">
                Application only. Limited private spaces each quarter.
              </p>
            </div>
          </div>

          <div className="fade-up flex-1 border-white/40 [animation-delay:400ms] lg:border-l lg:pl-14">
            <div className="space-y-7 text-[0.9375rem] font-light leading-relaxed text-white/95 sm:text-base">
              <p>
                A private, high-touch 1:1 leadership experience with Rachel Power for senior women
                leading in high-pressure environments
              </p>
              <p>
                You don&apos;t need more capability.
                <br />
                You need a different way of holding power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
