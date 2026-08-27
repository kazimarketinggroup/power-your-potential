import Image from "next/image";
import AudioPlayer from "@/components/ui/AudioPlayer";

const trustedRowOne = [
  { src: "/images/logo-tata.png", alt: "Tata Consumer Products", width: 273, height: 34 },
  { src: "/images/logo-haleon.png", alt: "Haleon", width: 108, height: 17 },
  { src: "/images/logo-katapult.png", alt: "Katapult", width: 164, height: 41 },
  { src: "/images/logo-amazon.png", alt: "Amazon", width: 103, height: 40 },
  { src: "/images/logo-westwood.png", alt: "Westwood Global Energy Group", width: 158, height: 51 },
];

const trustedRowTwo = [
  { src: "/images/logo-gsk.png", alt: "GSK", width: 74, height: 32 },
  { src: "/images/logo-social-mobility.png", alt: "Social Mobility Foundation", width: 120, height: 51 },
  { src: "/images/logo-nottingham.png", alt: "Nottingham Business School — Nottingham Trent University", width: 169, height: 52 },
  { src: "/images/logo-clarity.png", alt: "Clarity", width: 105, height: 51 },
  { src: "/images/logo-hillingdon.png", alt: "Hillingdon Chamber of Commerce", width: 142, height: 50 },
  { src: "/images/logo-itm.png", alt: "The Institute of Travel Management", width: 172, height: 37 },
];

function TrustedLogo({ src, alt, width, height }: (typeof trustedRowOne)[number]) {
  return (
    <div className="flex h-11 items-center justify-center rounded-lg bg-white px-4 sm:h-[3.625rem] sm:px-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="max-h-6 w-auto max-w-[6.875rem] object-contain sm:max-h-[2.125rem] sm:max-w-[9.375rem]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      {/* Background video (DNA image as poster/fallback) */}
      <div className="absolute inset-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/dna-bg.avif"
          className="h-full w-full object-cover object-top opacity-70"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
        {/* Audio intro */}
        <div className="fade-up">
          <AudioPlayer />
          <p className="mt-4 text-center text-xs font-light tracking-wide text-muted">
            Want to know how PYP works? Hit play and we&apos;ll walk you through it.
          </p>
        </div>

        {/* Headline */}
        <h1 className="fade-up mx-auto mt-8 text-center font-serif text-4xl leading-snug [animation-delay:150ms] sm:text-5xl lg:text-[3.125rem] lg:leading-[1.25]">
          Building stronger people, stronger teams
          <br className="hidden sm:block" /> and stronger organisations.
        </h1>

        <p className="fade-up mt-5 text-center text-sm font-light tracking-wide text-muted [animation-delay:300ms] sm:text-[0.9375rem]">
          Putting humanity back at the heart of performance.
        </p>

        {/* CTAs */}
        <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4 [animation-delay:450ms]">
          <a
            href="#pathways"
            className="rounded-full bg-gold px-6 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-colors hover:bg-gold-light"
          >
            Choose Your Pathway
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/70 px-6 py-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-foreground transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Book a Call
          </a>
        </div>

        {/* Trusted by */}
        <div className="fade-up mt-16 [animation-delay:600ms]">
          <h2 className="text-center text-[1.625rem] font-semibold sm:text-3xl">Trusted by</h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {trustedRowOne.map((logo) => (
              <TrustedLogo key={logo.src} {...logo} />
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2.5 sm:mt-4 sm:gap-4">
            {trustedRowTwo.map((logo) => (
              <TrustedLogo key={logo.src} {...logo} />
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="mt-14">
          <Image
            src="/images/divider-star.png"
            alt=""
            width={1124}
            height={58}
            className="mx-auto w-full max-w-5xl"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
