import Image from "next/image";

const pathways = [
  {
    title: "Power Your Self",
    href: "#power-your-self",
    icon: "/images/icon-phoenix.png",
    gradient: "bg-[linear-gradient(135deg,#45204d_0%,#241322_45%,#141014_100%)]",
    items: ["THE POWER HUB", "Redefining Career Success: Book", "The Integrated Leader"],
  },
  {
    title: "Power Your People",
    href: "#power-your-people",
    icon: "/images/icon-people-chart.png",
    gradient: "bg-[linear-gradient(135deg,#1e5128_0%,#15291a_50%,#121410_100%)]",
    items: ["Keynote: Take Charge of Your Career", "Bespoke Workshops & Programmes"],
  },
  {
    title: "Power Your Business",
    href: "#power-your-business",
    icon: "/images/icon-business-chart.png",
    gradient: "bg-[linear-gradient(135deg,#c8742e_0%,#7c4a1e_45%,#231208_100%)]",
    items: ["Pitch to Win", "Coaching for Performance"],
  },
];

export default function Pathways() {
  return (
    <section id="pathways" className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <h2 className="text-center text-2xl font-semibold sm:text-[1.625rem]">
          The Power Pathways&trade;
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className={`flex min-h-[15rem] flex-col rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-1 ${pathway.gradient}`}
            >
              <Image src={pathway.icon} alt="" width={70} height={70} className="h-10 w-10 object-contain" aria-hidden />

              <h3 className="mt-4 text-base font-semibold">{pathway.title}</h3>

              <ul className="mt-3 space-y-2">
                {pathway.items.map((item) => (
                  <li key={item} className="flex gap-2 text-xs font-light leading-relaxed text-foreground/85">
                    <span aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between pt-6">
                <a href={pathway.href} className="text-xs font-medium text-foreground transition-colors hover:text-gold-light">
                  Learn More
                </a>
                <a
                  href={pathway.href}
                  aria-label={`Learn more about ${pathway.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 transition-colors hover:border-gold-light"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5" aria-hidden>
                    <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
