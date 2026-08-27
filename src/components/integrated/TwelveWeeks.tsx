import Image from "next/image";

const phases = [
  {
    title: "Phase One: Awareness",
    intro: "We identify your leadership patterns under pressure.",
    bullets: ["Where you over-carry", "Where you armour up", "Where ambition and depletion intersect"],
    quote: "Clarity first.",
    image: { src: "/images/integrated/il-profile-circles.png", width: 473, height: 404 },
    imageLeft: false,
  },
  {
    title: "Phase Two: Recalibration",
    intro: null,
    bullets: [
      "Strengthen nervous system regulation",
      "Refine boundaries",
      "Shift how you hold responsibility",
      "Practise authority without over-explaining",
    ],
    quote: "This is where leadership begins to feel lighter.",
    image: { src: "/images/integrated/il-hands.png", width: 449, height: 260 },
    imageLeft: true,
  },
  {
    title: "Phase Three: Integration",
    intro: null,
    bullets: [
      "Embed new patterns",
      "Align ambition with capacity",
      "Recalibrate relational dynamics",
      "Future-proof your leadership",
    ],
    quote: "You are structured differently around pressure.",
    image: { src: "/images/integrated/il-circles.png", width: 420, height: 382 },
    imageLeft: false,
  },
];

export default function TwelveWeeks() {
  return (
    <section className="flex min-h-100 items-center bg-[#f5efe6] text-[#2b1420]">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-10">
        <h2 className="text-center font-serif text-2xl font-semibold sm:text-[1.625rem]">
          How the 12 Weeks May Unfold
        </h2>
        <p className="mt-2 text-center text-sm font-light text-[#4b3a42]">
          This is tailored to meet you where you are.
        </p>

        <div className="mt-8 space-y-8">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12"
            >
              <div className={`flex-1 ${phase.imageLeft ? "lg:order-2" : ""}`}>
                <h3 className="font-serif text-xl font-semibold sm:text-[1.375rem]">{phase.title}</h3>

                {phase.intro && (
                  <p className="mt-4 text-sm font-semibold text-[#3c2a33]">{phase.intro}</p>
                )}

                <ul className="mt-3 space-y-1 text-sm font-light leading-6 text-[#4b3a42]">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>&bull; {bullet}</li>
                  ))}
                </ul>

                <p className="mt-4 max-w-xs font-serif text-xl leading-snug text-[#6d1339] sm:text-[1.375rem]">
                  {phase.quote}
                </p>
              </div>

              <Image
                src={phase.image.src}
                alt=""
                width={phase.image.width}
                height={phase.image.height}
                className={`h-auto w-full max-w-[16.25rem] shrink-0 sm:max-w-[18.125rem] ${
                  phase.imageLeft ? "lg:order-1" : ""
                }`}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
