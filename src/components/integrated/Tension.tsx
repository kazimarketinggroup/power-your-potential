export default function Tension() {
  return (
    <section className="relative flex min-h-100 items-center overflow-hidden bg-[#5e1034]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
        style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">The Tension</h2>

        <div className="mt-5 space-y-4 text-sm font-light leading-6 text-white/95">
          <div>
            <p>You are serious about your career.</p>
            <p>You are serious about your family.</p>
          </div>
          <div>
            <p className="font-semibold">You do not want to</p>
            <p>Win at work and lose connection at home.</p>
            <p>Grow professionally and grow distant personally.</p>
          </div>
          <div>
            <p>You want success that does not cost you the life you are building.</p>
            <p>That is not selfish.</p>
          </div>
          <p>It is a signal.</p>
        </div>
      </div>
    </section>
  );
}
