import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "Power Your Self", href: "#power-your-self" },
  { label: "Power Your People", href: "#power-your-people" },
  { label: "Power Your Business", href: "#power-your-business" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 pt-5 sm:px-6">
        <div className="relative flex items-center justify-between rounded-full bg-surface/90 px-5 py-3 backdrop-blur-md sm:px-8">
          <Logo />

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 lg:flex xl:gap-10"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-5 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90 sm:px-6"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
