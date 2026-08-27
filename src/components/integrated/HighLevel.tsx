import Image from "next/image";

export default function HighLevel() {
  return (
    <section className="flex min-h-100 items-center bg-[#f5efe6] text-[#2b1420]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl flex-1">
          <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">
            You already operate at a high level.
          </h2>

          <div className="mt-4 text-sm font-light leading-6 text-[#4b3a42]">
            <p>
              You deliver.
              <br />
              You influence.
              <br />
              You handle complexity that others avoid.
              <br />
              From the outside, it looks like you&apos;ve got it together.
            </p>
            <p className="mt-4">And in many ways, you do.</p>
          </div>

          <div className="mt-6">
            <span className="font-serif text-5xl leading-none text-[#6d1339]" aria-hidden>
              &ldquo;
            </span>
            <p className="-mt-3 max-w-sm font-serif text-xl font-medium leading-relaxed text-[#6d1339] sm:text-[1.375rem]">
              But you don&apos;t want to give everything at work and have nothing left for the life
              you&apos;re building.
              <span className="ml-2 align-bottom font-serif text-5xl leading-none" aria-hidden>
                &rdquo;
              </span>
            </p>
          </div>
        </div>

        <Image
          src="/images/integrated/il-woman-standing.png"
          alt="Line-art illustration of a professional woman"
          width={443}
          height={959}
          className="h-auto w-full max-w-[14.375rem] shrink-0 self-center sm:max-w-[16.25rem] lg:ml-auto"
        />
      </div>
    </section>
  );
}
