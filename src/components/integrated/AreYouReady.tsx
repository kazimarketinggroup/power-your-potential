import Image from "next/image";
import Link from "next/link";

const wants = [
  "A powerful career",
  "A connected partnership",
  "A strong family life",
  "A regulated nervous system",
];

export default function AreYouReady() {
  return (
    <>
      <section className="flex min-h-100 items-center overflow-hidden bg-[#ebddc3] text-[#2b1420]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-12 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:pt-0">
          <div className="flex-1 pb-12 lg:py-12">
            <h2 className="font-serif text-2xl font-semibold sm:text-[1.625rem]">Are You Ready?</h2>

            <div className="mt-4 space-y-4 text-sm font-light leading-6 text-[#4b3a42]">
              <p>You are allowed to want:</p>
              <ul className="space-y-1">
                {wants.map((want) => (
                  <li key={want}>&bull; {want}</li>
                ))}
              </ul>
              <p>
                You do not have to sacrifice one to secure the other.
                <br />
                You are ready to lead as an Integrated Leader.
              </p>
            </div>
          </div>

          <Image
            src="/images/integrated/il-flower-head.png"
            alt=""
            width={373}
            height={565}
            className="h-auto w-full max-w-[16.25rem] shrink-0 self-center sm:max-w-[18.125rem]"
            aria-hidden
          />
        </div>
      </section>

      {/* Apply strip */}
      <section className="relative flex min-h-100 items-center overflow-hidden bg-[#5e1034]">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-70"
          style={{ backgroundImage: "url(/images/integrated/heroBg.png)" }}
          aria-hidden
        />
        <Link href="/#contact" className="relative z-10 block w-full px-4 py-12 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-semibold sm:text-[1.625rem]">
            Apply for The Integrated Leader
          </h2>
          <p className="mt-3 text-sm font-light text-white/90 sm:text-[0.9375rem]">
            Application only. Limited private spaces each quarter.
          </p>
        </Link>
      </section>
    </>
  );
}
