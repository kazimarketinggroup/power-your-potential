import Image from "next/image";

export default function WorkHarder() {
  return (
    <section className="bg-[#eef0f1] px-4 pb-16 text-[#2b2b2b] sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">
          Ever feel like work is harder than it needs to be?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-6 text-[#5b5b5b] sm:text-[0.9375rem]">
          You&rsquo;re not alone.
          <br />
          Lost Potential Files are read weekly by thoughtful, capable professionals who
          can feel something isn&rsquo;t quite right even if they don&rsquo;t yet have the
          language for it. This is for people who notice the gap between how work is meant
          to operate and how it actually does.
        </p>
      </div>

      {/* Dark eagle card */}
      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-[#1c2230] shadow-[0_25px_70px_-30px_rgba(0,0,0,0.5)]">
        <div className="relative">
          <Image
            src="/images/lostpotential/eagle-window.jpg"
            alt="Eagle-headed executive in a suit crouching by a high-rise window at sunset"
            width={4796}
            height={2616}
            className="h-48 w-full object-cover sm:h-full"
          />
          {/* Dark gradient so the text stays legible: vertical on mobile, left-to-right from sm up */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,35,0.35)_0%,rgba(20,25,35,0.85)_70%,#1c2230_100%)] sm:bg-[linear-gradient(90deg,rgba(20,25,35,0.94)_0%,rgba(20,25,35,0.82)_40%,rgba(20,25,35,0.35)_65%,rgba(20,25,35,0)_82%)]"
            aria-hidden
          />

          <div className="relative sm:absolute sm:inset-0 sm:flex sm:items-center">
            <div className="max-w-md px-6 py-8 text-white sm:px-12 sm:py-10">
              <h3 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.875rem]">
                You do everything you
                <br />
                were &ldquo;supposed&rdquo; to do.
              </h3>

              <ul className="mt-5 space-y-1.5 text-sm font-light text-white/85 sm:text-[0.9375rem]">
                <li>&bull; You work hard.</li>
                <li>&bull; You take responsibility.</li>
                <li>&bull; You follow the rules.</li>
              </ul>

              <div className="mt-6 space-y-1 text-sm font-medium leading-6 sm:text-[0.9375rem]">
                <p>Yet still, something feels off.</p>
                <p>Not because you&rsquo;re failing</p>
                <p>but because the reality is messier</p>
                <p>than the models suggest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
