import Image from "next/image";
import LightHeader from "@/components/layout/LightHeader";

export default function BookHero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#f4f2ee] text-[#2b2b2b] lg:min-h-svh">
      {/* Scattered books background */}
      <Image
        src="/images/freebook/books-hero.png"
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden
      />
      {/* Wash so the copy stays readable over the busy background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(244,242,238,0.55) 0%, rgba(244,242,238,0.35) 45%, rgba(244,242,238,0.8) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full">
        <LightHeader />

        {/* Headline */}
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-12 text-center sm:px-6 lg:pb-16 lg:pt-24">
          <h1 className="fade-up font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.625rem]">
            Download Your Free Copy of
            <br />
            Redefining Career Success Now
          </h1>
          <p className="fade-up mx-auto mt-5 max-w-2xl text-sm font-light leading-6 text-[#4b4b4b] [animation-delay:150ms] sm:text-[0.9375rem]">
            Unlock potential for yourself, your team, or your organisation. Whether
            you&rsquo;re stepping into your next chapter or helping others step into theirs,
            this guide will give you the tools to create lasting success.
          </p>

          <a
            href="#claim"
            aria-label="Scroll to the form"
            className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#d6bd8c_0%,#c2a262_100%)] text-[#33220a] shadow-md transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
