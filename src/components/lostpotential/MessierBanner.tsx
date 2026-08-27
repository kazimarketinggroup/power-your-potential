import Image from "next/image";

export default function MessierBanner() {
  return (
    <section className="relative overflow-hidden bg-[#eef0f1]">
      <div className="relative">
        <Image
          src="/images/lostpotential/boardroom.png"
          alt="Owl, wolf, rabbit, fox and gorilla executives in a corporate boardroom meeting"
          width={1440}
          height={722}
          className="h-full w-full object-cover"
        />

        {/* Light fade so overlaid text stays readable and the image blends into the page */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(238,240,241,0.55) 0%, rgba(238,240,241,0.15) 30%, rgba(238,240,241,0.45) 70%, rgba(238,240,241,0.95) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Stacked under the scene on mobile, overlaid on it from lg up */}
      <div className="relative bg-[#eef0f1] px-4 pb-10 pt-6 text-center sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-[10%] lg:bg-transparent lg:pb-0 lg:pt-0">
        <h2 className="mx-auto max-w-2xl font-serif text-2xl font-semibold leading-snug text-[#1f2530] sm:text-[1.875rem] lg:drop-shadow-[0_1px_12px_rgba(255,255,255,0.7)]">
          For people who know the real work is messier than the models.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm font-light text-[#33333a] sm:text-[0.9375rem] lg:drop-shadow-[0_1px_10px_rgba(255,255,255,0.7)]">
          If these stories resonate, your inbox is where they&rsquo;re meant to be read.
        </p>
      </div>
    </section>
  );
}
