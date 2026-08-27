import Image from "next/image";

const traits = [
  "Aligns ambition with capacity",
  "Holds boundaries without guilt",
  "Makes decisions without abandoning herself",
  "Brings grounded presence to both boardroom & family life",
];

export default function WhatIsIntegrated() {
  return (
    <section className="min-h-100 overflow-hidden bg-[#f5efe6] text-[#2b1420]">
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-36">
        {/* Line art — sits in the flow between the two copy blocks on mobile,
            and spans the content container as an overlay from lg up */}
        <Image
          src="/images/integrated/il-woman-writing.png"
          alt=""
          width={1440}
          height={714}
          className="pointer-events-none hidden h-auto w-full lg:absolute lg:inset-x-0 lg:top-10 lg:block"
          aria-hidden
        />

        {/* Gold sparkle beside the quote */}
        <Image
          src="/images/integrated/sparkle.png"
          alt=""
          width={199}
          height={222}
          className="pointer-events-none absolute bottom-16 right-[6%] h-auto w-16 opacity-70 sm:right-[22%] sm:w-28 sm:opacity-100"
          aria-hidden
        />

        <div className="relative">
          <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">
            What Is an Integrated Leader?
          </h2>

          <div className="mt-7 text-sm font-light leading-7 text-[#4b3a42]">
            <p>
              An Integrated Leader does not split
              <br />
              herself in two.
              <br />
              She does not perform strength at work
              <br />
              and unravel at home.
            </p>
            <p className="mt-5">
              She does not succeed externally
              <br />
              while quietly depleting internally.
            </p>
          </div>

          {/* Mobile placement of the line art: in the gap between the copy blocks */}
          <Image
            src="/images/integrated/il-woman-writing.png"
            alt=""
            width={1440}
            height={714}
            className="pointer-events-none mt-6 h-auto w-full lg:hidden"
            aria-hidden
          />

          <div className="mt-6 text-sm font-light leading-7 text-[#4b3a42] lg:mt-80">
            <p>She:</p>
            <ul className="mt-2 space-y-1.5">
              {traits.map((trait) => (
                <li key={trait}>&bull; {trait}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <span className="font-serif text-5xl leading-none text-[#6d1339]" aria-hidden>
              &ldquo;
            </span>
            <p className="-mt-3 font-serif text-xl font-medium leading-relaxed text-[#6d1339] sm:text-[1.375rem]">
              Integration is not balance.
              <br />
              It is coherence.
            </p>
            <span className="ml-24 inline-block font-serif text-5xl leading-none text-[#6d1339]" aria-hidden>
              &rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
