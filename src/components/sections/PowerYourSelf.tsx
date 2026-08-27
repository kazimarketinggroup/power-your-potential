import Image from "next/image";
import PowerYourSelfTabs from "./PowerYourSelfTabs";

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M5 3.5h14a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5H5A1.5 1.5 0 0 1 3.5 19V5A1.5 1.5 0 0 1 5 3.5Z" />
      <path d="M3.5 18.5A1.5 1.5 0 0 1 5 17h14.5" />
      <path d="M14 3.5v8l-2-1.8-2 1.8v-8" />
    </svg>
  );
}

const offers = [
  {
    label: "THE POWER HUB",
    icon: "/images/icon-power-hub.png",
    cta: "Join The Power Hub",
    href: "https://www.skool.com/power-your-potential",
    underline: false,
    external: true,
  },
  {
    label: "Redefining Career Success",
    icon: null,
    cta: "Buy Now",
    href: "https://www.amazon.com/Redefining-Career-Success-W-R/dp/1915771765",
    underline: false,
    external: true,
  },
  {
    label: "The Integrated Leader",
    icon: "/images/icon-integrated-leader.png",
    cta: "Book Your Consultation",
    href: "/integrated-leader",
    underline: false,
    external: false,
  },
];

export default function PowerYourSelf() {
  return (
    <section id="power-your-self" className="scroll-mt-24 px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <h2 className="text-2xl font-bold sm:text-[1.625rem]">Power Your Self</h2>

        <p className="mt-3 text-sm font-semibold text-gold">
          For individuals ready to enjoy career success on their own terms
        </p>

        <div className="mt-6">
          <PowerYourSelfTabs />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.label}
              className="flex min-h-[13.125rem] flex-col items-center rounded-xl bg-[linear-gradient(180deg,#7e2b90_0%,#3a1543_55%,#140812_100%)] px-6 pb-6 pt-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              {offer.icon ? (
                <Image src={offer.icon} alt="" width={66} height={66} className="h-10 w-10 object-contain" aria-hidden />
              ) : (
                <BookIcon className="h-10 w-10 text-white" />
              )}

              <p className="mt-5 text-sm font-light tracking-wide">{offer.label}</p>

              <a
                href={offer.href}
                target={offer.external ? "_blank" : undefined}
                rel={offer.external ? "noopener noreferrer" : undefined}
                className={`mt-auto rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-10 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90 ${
                  offer.underline ? "underline underline-offset-2" : ""
                }`}
              >
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
