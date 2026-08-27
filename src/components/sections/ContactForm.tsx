"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-lg bg-[#252222] px-4 py-3 text-sm font-light text-foreground placeholder:text-foreground/60 outline-none transition-shadow focus:ring-1 focus:ring-gold/60";

const pathways = [
  "Power Your Self",
  "Power Your People",
  "Power Your Business",
  
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-8 sm:px-12 sm:py-9">
        <h2 className="text-center text-xl font-semibold sm:text-[1.5rem]">Take the Next Step</h2>

        {submitted ? (
          <p className="mx-auto mt-10 max-w-xl text-center text-[0.9375rem] font-light leading-7 text-foreground/85">
            Thank you for reaching out &mdash; we&apos;ve received your details and will be in
            touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-[55rem] space-y-3">
            <input type="text" name="name" required placeholder="Write your name" className={inputClasses} />

            <div className="grid gap-4 sm:grid-cols-2">
              <input type="email" name="email" required placeholder="Write your email" className={inputClasses} />
              <input type="tel" name="phone" placeholder="Phone" className={inputClasses} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="company" placeholder="Company Name" className={inputClasses} />
              <input type="text" name="role" placeholder="Role" className={inputClasses} />
            </div>

            <div className="relative">
              <select
                name="pathway"
                required
                defaultValue=""
                className={`${inputClasses} appearance-none pr-12 invalid:text-foreground/60`}
              >
                <option value="" disabled>
                  Choose the Pathway That&apos;s Right for You
                </option>
                {pathways.map((pathway) => (
                  <option key={pathway} value={pathway} className="bg-[#252222] text-foreground">
                    {pathway}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 16 16"
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-foreground"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="m3 6 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <textarea name="details" rows={4} placeholder="Enter Details" className={`${inputClasses} resize-none`} />

            <button
              type="submit"
              className="rounded-full bg-[linear-gradient(180deg,#e9cf96_0%,#cda558_100%)] px-9 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-[#171106] transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
