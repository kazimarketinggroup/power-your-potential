import Image from "next/image";
import PowerYourPeopleTabs from "./PowerYourPeopleTabs";

const offerings = [
  {
    label: "Keynote: Take Charge of Your Career",
    key: "keynote",
    icon: "/images/icon-puzzle.png",
  },
  {
    label: "Bespoke Workshops & Programmes",
    key: "workshops",
    icon: "/images/icon-team.png",
  },
];

export default function PowerYourPeople() {
  return (
    <section id="power-your-people" className="scroll-mt-24 px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <h2 className="text-2xl font-bold sm:text-[1.625rem]">Power Your People</h2>

        <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-gold">
          For organisations ready to invest in their people in a way that actually makes a
          difference
        </p>

        <div className="mt-6">
          <PowerYourPeopleTabs />
        </div>

        <div className="mt-5 space-y-4">
          {offerings.map((offering) => (
            <div
              key={offering.key}
              className="flex flex-col items-center gap-4 rounded-xl bg-[linear-gradient(100deg,#0f5c2a_0%,#0a3018_45%,#0b1710_100%)] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={offering.icon}
                  alt=""
                  width={56}
                  height={60}
                  className="h-9 w-8 shrink-0 object-contain"
                  aria-hidden
                />
                <p className="text-base font-semibold leading-snug">{offering.label}</p>
              </div>

              <a
                href="#contact"
                className="shrink-0 rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-6 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90"
              >
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
