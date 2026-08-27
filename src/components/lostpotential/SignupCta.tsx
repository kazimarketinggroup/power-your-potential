export default function SignupCta() {
  return (
    <section id="contact" className="bg-[#eef0f1] px-4 py-16 text-[#2b2b2b] sm:px-6">
      <div className="mx-auto max-w-4xl rounded-3xl bg-[#f6f5f3] px-6 py-12 text-center shadow-[0_20px_60px_-35px_rgba(0,0,0,0.2)] sm:px-14 sm:py-14">
        <h2 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.625rem]">
          Get every future Lost Potential File first
          <br />
          PLUS the Private Notes, straight to your inbox.
        </h2>

        <form className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full rounded-md border border-[#d8d3c6] bg-[#eceae4] px-4 py-3 text-sm font-light text-[#2b2b2b] outline-none transition-colors placeholder:text-[#8a8578] focus:border-[#c2a262] sm:max-w-50 sm:flex-1"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full rounded-md border border-[#d8d3c6] bg-[#eceae4] px-4 py-3 text-sm font-light text-[#2b2b2b] outline-none transition-colors placeholder:text-[#8a8578] focus:border-[#c2a262] sm:max-w-50 sm:flex-1"
          />
          <button
            type="submit"
            className="rounded-full bg-[linear-gradient(180deg,#d6bd8c_0%,#c2a262_100%)] px-6 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#33220a] transition-opacity hover:opacity-90"
          >
            Get the Files First
          </button>
        </form>

        <p className="mt-6 text-sm font-medium text-[#2b2b2b]">No spam. No noise.</p>
        <p className="mt-1 text-xs font-light italic text-[#6b6b6b]">
          By signing up, you agree to receive emails from us. You can unsubscribe at any
          time.
        </p>
      </div>
    </section>
  );
}
