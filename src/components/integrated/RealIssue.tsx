const lineGroups = [
  ["You are not exhausted because you lack skill.", "You are exhausted because you over-carry."],
  ["You anticipate.", "You absorb tension.", "You over-prepare.", "You smooth conflict."],
  ["That built your success.", "It will not sustain your life."],
  ["Most leadership programmes teach skill.", "Few address pattern."],
];

export default function RealIssue() {
  return (
    <section className="relative flex min-h-100 items-center overflow-hidden bg-[#5e1034]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">The Real Issue</h2>

        <div className="mt-5 space-y-4 text-sm font-light leading-6 text-white/95">
          {lineGroups.map((group, i) => (
            <div key={i}>
              {group.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <span className="font-serif text-5xl leading-none" aria-hidden>
            &ldquo;
          </span>
          <p className="-mt-2 font-serif text-xl font-medium leading-relaxed sm:text-2xl">
            This work does.
            <br />
            Because performance without
            <br />
            integration eventually fractures.
          </p>
          <span className="mt-3 inline-block font-serif text-5xl leading-none" aria-hidden>
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}
