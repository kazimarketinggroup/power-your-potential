import Image from "next/image";

const bullets = [
  "People who inspire trust.",
  "People who elevate others.",
  "People who leave the world of work better than they found it.",
];

export default function ShiftWeCreate() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:gap-10">
          <div className="flex-1">
            <h2 className="text-[1.375rem] font-bold sm:text-[1.625rem]">
              That&apos;s the shift we create.
            </h2>

            <div className="mt-4 space-y-4 text-sm font-light leading-6 text-foreground/85">
              <p>
                We develop individuals, leaders and teams who stay centred in challenge, courageous
                in uncertainty and compassionate in the moments that matter.
              </p>

              <ul className="space-y-2 pl-1">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden>•</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p>
                Because this isn&apos;t about hierarchy it&apos;s about humanity.
                <br />
                This is where clarity replaces overwhelm.
                <br />
                Where confidence replaces doubt.
                <br />
                Where performance becomes sustainable,
                <br />
                and potential becomes power.
              </p>

              <p>This is the future of work we&apos;re building. Are you with us?</p>
            </div>
          </div>

          <Image
            src="/images/photo-shift.png"
            alt="Speaker in a red jacket presenting on stage"
            width={503}
            height={540}
            className="w-full max-w-[21.25rem] shrink-0 self-center rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
