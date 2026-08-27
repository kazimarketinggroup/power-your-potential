import Image from "next/image";
import PhoneField from "./PhoneField";

const bullets = [
  "Clear steps to grow confidence and clarity",
  "Tools to help drive performance without burning out",
];

export default function BookForm() {
  return (
    <section id="claim" className="bg-[#f4f2ee] px-4 pb-12 pt-6 text-[#2b2b2b] sm:px-6 lg:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        {/* Left: cover + copy */}
        <div>
          <Image
            src="/images/freebook/book-cover.png"
            alt="Redefining Career Success book by Rachel Power"
            width={270}
            height={331}
            className="h-auto w-40 drop-shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] sm:w-48"
          />

          <h2 className="mt-8 font-serif text-xl leading-snug sm:text-[1.375rem]">
            Inside Redefining Career Success: Taking Charge with The P.O.W.E.R. Approach,
            you&rsquo;ll discover:
          </h2>

          <ul className="mt-5 space-y-2 text-sm font-light leading-6 text-[#4b4b4b]">
            {bullets.map((b) => (
              <li key={b}>&bull; {b}</li>
            ))}
            <li>
              &bull; A framework for creating success on your own terms Use it to spark your
              own breakthrough, or share it with those you lead.
            </li>
          </ul>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl bg-[#efe9dd] px-6 py-10 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.25)] sm:px-9">
          <h3 className="text-center font-serif text-xl font-semibold leading-snug sm:text-2xl">
            Get Your Free Copy of Redefining Career Success Now
          </h3>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-xs font-medium text-[#3a3a3a]">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                className="mt-2 w-full rounded-md border border-[#e0dccf] bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#c2a262]"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
              <div>
                <label className="block text-xs font-medium text-[#3a3a3a]">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-md border border-[#e0dccf] bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-[#c2a262]"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-xs font-medium text-[#3a3a3a]">Phone</label>
                <div className="mt-2 h-[2.625rem]">
                  <PhoneField />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#3a3a3a]">
                I want a copy of this book to help me focus on: *
              </label>
              <select
                name="focus"
                required
                defaultValue=""
                className="mt-2 w-full appearance-none rounded-md border border-[#e0dccf] bg-white bg-position-[right_0.75rem_center] bg-no-repeat px-3 py-2.5 text-sm text-[#2b2b2b] outline-none transition-colors focus:border-[#c2a262]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%236b6b6b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                }}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="self">Myself</option>
                <option value="team">My team</option>
                <option value="organisation">My organisation</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[linear-gradient(180deg,#b9985a_0%,#a9863f_100%)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get your free eBook now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
