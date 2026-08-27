import Image from "next/image";
import PowerYourBusinessTabs from "./PowerYourBusinessTabs";

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path
        d="M4 17.5 2.8 8.6l4.7 3.2L12 5.5l4.5 6.3 4.7-3.2L20 17.5H4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 20.5h12" strokeLinecap="round" />
    </svg>
  );
}

export default function PowerYourBusiness() {
  return (
    <section id="power-your-business" className="scroll-mt-24 px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <h2 className="text-2xl font-bold sm:text-[1.625rem]">Power Your Business</h2>

        <p className="mt-3 text-sm font-semibold text-gold">
          For business owners ready to stop playing small
        </p>

        <div className="mt-6">
          <PowerYourBusinessTabs />
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex flex-col items-center gap-4 rounded-xl bg-[linear-gradient(100deg,#6d3a13_0%,#3d2110_45%,#1d1209_100%)] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <CrownIcon className="h-9 w-9 shrink-0 text-white" />
              <p className="text-base font-semibold leading-snug">Pitch to Win</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-6 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90"
            >
              Book a Discovery Call
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-xl bg-[linear-gradient(100deg,#6d3a13_0%,#3d2110_45%,#1d1209_100%)] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <Image
                src="/images/icon-coaching.png"
                alt=""
                width={56}
                height={60}
                className="h-9 w-8 shrink-0 object-contain"
                aria-hidden
              />
              <p className="text-base font-semibold leading-snug">Coaching for Performance</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-6 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
