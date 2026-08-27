import Image from "next/image";
import Link from "next/link";
import LightHeader from "@/components/layout/LightHeader";

export default function LostHero() {
  return (
    <section className="relative overflow-hidden bg-[#eef0f1] text-[#2b2b2b]">
      <LightHeader />

      {/* Headline */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-5 text-center sm:px-6 lg:pt-6">
        <h1 className="fade-up font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.625rem]">
          Lost Potential Files
          <br />
          Stories from the corporate wild
        </h1>

        <p className="fade-up mt-2 text-sm font-light text-[#5b5b5b] [animation-delay:150ms] sm:text-[15px]">
          where potential gets lost, found, and redefined
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mt-2 w-full overflow-hidden">
        <div
          className="relative w-full"
          style={{ height: "clamp(280px, 40vw, 800px)" }}
        >
          <Image
            src="/images/lostpotential/hero-office.jpg"
            alt="Business people with bear, tiger and lion heads working in a bright corporate office"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_92%]"
          />

          {/* Top Fade */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0"
            style={{
              height: "clamp(48px, 6vw, 110px)",
              background:
                "linear-gradient(to bottom, #eef0f1 0%, rgba(238,240,241,.9) 45%, transparent 100%)",
            }}
          />

          {/* Bottom Fade — washes out the scene so the overlaid copy stays readable */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(238,240,241,.45) 30%, rgba(238,240,241,.85) 55%, rgba(238,240,241,.96) 78%, #eef0f1 100%)",
            }}
          />
        </div>

        {/* CTA + copy — stacked under the scene on mobile, overlaid on it from lg up */}
        <div className="relative z-20 mx-auto flex w-full max-w-3xl flex-col items-center px-4 pb-8 pt-6 text-center sm:px-6 lg:absolute lg:bottom-[3%] lg:left-1/2 lg:-translate-x-1/2 lg:pb-0 lg:pt-0">
          <Link
            href="/#contact"
            className="rounded-full bg-[#2b2b2b] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-xl transition-all duration-300 hover:opacity-90"
          >
            Get the Files First
          </Link>

          <div className="mt-6 space-y-1 text-sm font-light leading-6 text-[#3d3d3d] lg:mt-20 lg:[text-shadow:0_1px_12px_rgba(255,255,255,0.95),0_1px_3px_rgba(255,255,255,0.9)]">
            <p className="font-semibold text-[#1f1f1f]">
              Weekly leadership stories inspired by real workplace moments.
            </p>

            <p>
              The messy, human stuff people experience at work but rarely say out
              loud.
            </p>

            <p>
              For those who sense there&apos;s more available to them.
            </p>

            <p>
              Subscribers receive each new file first, privately, before it lands
              on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}