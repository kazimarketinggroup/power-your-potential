import Image from "next/image";

export default function StoryQuote() {
  return (
    <section className="bg-[#eef0f1] px-4 py-14 text-[#2b2b2b] sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white px-6 py-12 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)] sm:px-16 sm:py-16">
        <div className="mx-auto max-w-2xl space-y-6 text-sm font-light leading-7 text-[#4b4b4b] sm:text-[0.9375rem]">
          <p>
            &ldquo;They&rsquo;re not villains.
            <br />
            And they&rsquo;re not real people - these animals are inspired by patterns
            I&rsquo;ve seen over decades of working with (and observing) leaders and
            teams, as well as the generational stories I grew up with.
          </p>

          <p>
            But in the words of my grandad:
            <br />
            <span className="font-serif text-xl font-semibold text-[#2b2b2b] sm:text-2xl">
              &ldquo;There are only so many moulds.&rdquo;
            </span>
          </p>

          <p>So who knows - perhaps you&rsquo;ll recognise yourself in one?&rdquo;</p>
        </div>

        <div className="mt-9 flex flex-col items-center">
          <Image
            src="/images/lostpotential/Group 1171276373.png"
            alt="Rachel Power"
            width={112}
            height={112}
            className="h-14 w-14 rounded-full object-cover"
          />
          <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[#2b2b2b]">
            Rachel Power
            {/* LinkedIn-style verification badge */}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#8a8f98]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Verified"
              role="img"
            >
              <path d="M12 2.5 4.5 5.5v5.9c0 4.4 3.1 8.5 7.5 9.6 4.4-1.1 7.5-5.2 7.5-9.6V5.5L12 2.5Z" />
              <path d="m8.9 11.9 2.1 2.1 4.1-4.1" />
            </svg>
          </p>
          <p className="mt-1 max-w-md text-xs font-light leading-5 text-[#6b6b6b]">
            Founder &amp; CEO of Power Your Potential | Author of Amazon best-selling book
            Redefining Career Success | Creator of the P.O.W.E.R. Approach&reg; &amp; The
            PowerPathways&trade;
          </p>
          <a
            href="https://www.linkedin.com/in/rachel-power-leadership-development/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rachel Power on LinkedIn"
            className="mt-3 inline-flex items-center gap-0.5 text-[0.9375rem] font-bold tracking-tight text-[#2b2b2b] transition-opacity hover:opacity-75"
          >
            Linked
            <span className="flex h-[1.05em] items-center rounded-[3px] bg-[#0a66c2] px-[0.15em] pb-[0.05em] text-white">
              in
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
