import Image from "next/image";

export default function MeetYourGuide() {
  return (
    <section className="flex min-h-100 items-stretch bg-[#edeeee] py-14 text-[#2b1420]">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:gap-8">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:mx-0 lg:ml-auto lg:max-w-none lg:flex-1 lg:pl-40">
          <h2 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.625rem]">
            Meet Your Guide
            <br />
            Rachel Power
          </h2>

          <div className="mt-4 space-y-4 text-sm font-light leading-6 text-[#4b3a42]">
            <p>Rachel Power partners with ambitious women leading inside complex systems.</p>
            <p>
              Amazon best-selling author of Redefining Career Success.
              <br />
              Certified women&apos;s coach.
              <br />
              Licensed career coach.
              <br />
              Trained in trauma-informed leadership.
            </p>
            <p>Two decades across Pharma, FMCG and manufacturing.</p>
            <p>Operational understanding. Not theoretical.</p>
            <p>
              She recalibrated her own success
              <br />
              not by shrinking ambition,
              <br />
              but by integrating it.
            </p>
          </div>

          <p className="mt-7 font-serif text-2xl font-semibold leading-snug text-[#2b1420] sm:text-[1.625rem]">
            This is serious work.
            <br />
            It is private.
            <br />
            It is contained.
          </p>
        </div>

        <div className="w-full shrink-0 self-center lg:w-auto">
          <Image
            src="/images/integrated/rachel-power.png"
            alt="Rachel Power seated, wearing a navy blazer"
            width={838}
            height={1037}
            className="mx-auto h-auto w-full max-w-115 lg:mx-0 mask-[linear-gradient(to_right,transparent,black_12%)]"
          />
        </div>
      </div>
    </section>
  );
}
