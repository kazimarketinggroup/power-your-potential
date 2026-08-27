import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Power Your Self", href: "/#power-your-self" },
  { label: "Power Your People", href: "/#power-your-people" },
  { label: "Power Your Business", href: "/#power-your-business" },
];

/**
 * Light-theme header for the standalone landing pages (freebook, lostpotential,
 * integrated-leader). Mirrors the home Header: logo on the left, the three
 * "Power Your …" links centered, and a gold "Get in Touch" button on the right.
 */
export default function LightHeader() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6">
      <div className="relative flex items-center justify-between rounded-full bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md sm:px-8">
        <Link href="/" aria-label="Power Your Potential home">
          <Image
            src="/images/logo-pyp.png"
            alt="Power Your Potential"
            width={524}
            height={284}
            priority
            className="h-auto w-21"
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-10"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2b2b2b] transition-colors hover:text-[#8a6a2f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90 sm:px-6"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
