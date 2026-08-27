import Image from "next/image";

export default function FounderCard() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 overflow-hidden rounded-3xl bg-[#0f0f0f] px-6 pt-8 text-center shadow-[0_28px_70px_-30px_rgba(0,0,0,0.9)] sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:pl-6 lg:pr-16 lg:pt-0 lg:text-left">
        <Image
          src="/images/rachelImage.png"
          alt="Rachel Power, Founder & CEO of Power Your Potential"
          width={1356}
          height={1617}
          className="w-full max-w-72 shrink-0 object-cover mask-[radial-gradient(ellipse_74%_80%_at_50%_45%,black_62%,transparent_100%)] sm:max-w-76 lg:max-w-72"
        />

        <div className="flex flex-col items-center pb-8 text-left lg:flex-1 lg:items-start lg:pb-0 lg:pl-24">
          <h2 className="text-2xl font-bold sm:text-[1.625rem]">Rachel Power</h2>

      

          <div className=" space-y-1 text-sm font-light leading-6 text-foreground/85">
            <p>Author of Amazon bestselling book &ldquo;Redefining Career Success&rdquo;</p>
            <p>Creator of the P.O.W.E.R. Approach&reg; &amp; The PowerPathways&trade;</p>
          </div>

              <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
            Founder &amp; CEO of Power Your Potential
          </p>

          <a
            href="https://www.linkedin.com/in/rachel-power-leadership-development/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rachel Power on LinkedIn"
            className="mt-5 inline-flex items-center gap-0.5 text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-75"
          >
            Linked
            <span className="flex h-[1.05em] items-center rounded-[3px] bg-white px-[0.15em] pb-[0.05em] text-[#0f0f0f]">
              in
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
