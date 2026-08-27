export default function CtaBanner() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-9 text-center sm:px-12 sm:py-10">
        <h2 className="mx-auto max-w-2xl text-xl font-semibold leading-snug sm:text-[1.5rem]">
          Ready to see how we can help you power
          <br className="hidden sm:block" /> your potential
        </h2>

        <a
          href="#contact"
          className="mt-6 inline-block rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-8 py-3 text-[0.8125rem] font-semibold text-[#171106] transition-opacity hover:opacity-90"
        >
          Get in Touch Today
        </a>
      </div>
    </section>
  );
}
