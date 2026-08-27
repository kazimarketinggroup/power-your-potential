export default function WhatChanges() {
  return (
    <section className="relative flex min-h-100 items-center overflow-hidden bg-[#5e1034]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">What Changes</h2>

        <div className="mt-5 space-y-4 text-sm font-light leading-6 text-white/95">
          <div>
            <p className="font-semibold">We work in the gap between</p>
            <p>How powerful you appear</p>
            <p>and</p>
            <p>how much you are carrying.</p>
          </div>
          <div>
            <p className="font-semibold">Over 12 weeks you will</p>
            <p>Identify your pressure patterns</p>
            <p>Regulate under scrutiny</p>
            <p>Stop over-functioning</p>
            <p>Increase influence without increasing effort</p>
            <p>Strengthen relational dynamics</p>
          </div>
        </div>

        <div className="mt-6">
          <span className="font-serif text-5xl leading-none" aria-hidden>
            &ldquo;
          </span>
          <p className="-mt-2 font-serif text-xl font-medium leading-relaxed sm:text-2xl">
            Authority becomes embodied.
            <br />
            Not performed.
          </p>
          <span className="mt-3 inline-block font-serif text-5xl leading-none" aria-hidden>
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}
