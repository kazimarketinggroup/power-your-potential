import Image from "next/image";

export default function LeadWithPurpose() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:gap-10">
          <Image
            src="/images/photo-lead-purpose.png"
            alt="Coach having a microphone fitted before speaking at an event"
            width={548}
            height={479}
            className="w-full max-w-[22.5rem] shrink-0 self-center rounded-2xl object-cover"
          />

          <div className="flex-1">
            <h2 className="text-[1.375rem] font-bold leading-snug sm:text-[1.625rem]">
              Lead with Purpose.
              <br />
              Deliver with Impact.
            </h2>

            <div className="mt-4 space-y-4 text-sm font-light leading-6 text-foreground/85">
              <p>The world is changing fast, and the pressure on people has never been greater.</p>
              <p>
                Yet beneath the deadlines, the complexity and the noise lies something
                extraordinary: human potential waiting to be unlocked.
              </p>
              <p>At Power Your Potential, we believe people don&apos;t rise by working harder.</p>
              <p>
                They rise when they feel supported, grounded and deeply connected to who they are
                and what they&apos;re capable of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
