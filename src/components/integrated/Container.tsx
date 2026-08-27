import Image from "next/image";

const methods = [
  "The P.O.W.E.R. Approach®",
  "Women’s PowerType® profiling",
  "Somatic and trauma-informed leadership",
  "Deep commercial insight",
];

export default function Container() {
  return (
    <section className="bg-[#EFE2C8] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-start lg:gap-16">
        {/* Image */}

        <div className="shrink-0">
          <Image
            src="/images/integrated/framed-rising-authority-cream.png"
            alt="Rising & Authority"
            width={520}
            height={650}
            className="w-65 lg:w-75"
          />
        </div>

        {/* Content */}

        <div className="max-w-xl pt-2">
          <h2 className="font-serif text-3xl leading-none text-[#302A2A] sm:text-[2rem]">
            The Container
          </h2>

          <p className="mt-5 text-[0.9375rem] leading-7 text-[#555]">
            The Integrated Leader is a private 12-week 1:1 experience
            designed to strengthen your internal authority.
          </p>

          <div className="mt-6 text-[0.9375rem] leading-7 text-[#555]">
            <p className="mb-1">We draw from:</p>

            <ul className="space-y-0.5">
              {methods.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Quote */}

          <div className="mt-12 max-w-md">
            <div className="relative">
              {/* Opening quote */}

              <span className="absolute -left-1 -top-6 font-serif text-6xl leading-none text-[#760A3F]">
                “
              </span>

              <p className="pl-5 font-serif text-[1.625rem] leading-snug text-[#302A2A]">
                By the end of this programme, you lead from steadiness not
                survival.
              </p>

              {/* Closing quote */}

              <span className="absolute -bottom-8 right-0 font-serif text-6xl leading-none text-[#760A3F]">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}