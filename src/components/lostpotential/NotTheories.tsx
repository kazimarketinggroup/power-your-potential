import Image from "next/image";

export default function NotTheories() {
  return (
    <section className="bg-[#eef0f1] px-4 pb-16 text-[#2b2b2b] sm:px-6">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* These aren't theories — image left */}
        <article className="grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.22)] md:grid-cols-[42%_1fr]">
          <div className="relative min-h-56">
            <Image
              src="/images/lostpotential/office-team.png"
              alt="Animal-headed professionals working together in a bright modern office"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-7 py-8 sm:px-10 sm:py-10">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl">
              These aren&rsquo;t theories.
            </h3>
            <div className="mt-4 space-y-4 text-sm font-light leading-6 text-[#5b5b5b]">
              <p>
                These stories are inspired by real workplace moments.
                <br />
                The uncomfortable, human dynamics that don&rsquo;t fit neatly into
                frameworks, leadership models, or tidy slides.
              </p>
              <p>
                They&rsquo;re drawn from decades working inside and alongside corporate
                organisations, observing what actually shapes behaviour, power, and
                potential.
              </p>
            </div>
          </div>
        </article>

        {/* Why the inbox matters — image right */}
        <article className="grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.22)] md:grid-cols-[1fr_42%]">
          <div className="order-2 px-7 py-8 sm:px-10 sm:py-10 md:order-1">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl">
              Why the inbox matters
            </h3>
            <div className="mt-4 space-y-1 text-sm font-light leading-6 text-[#5b5b5b]">
              <p>Lost Potential Files are published on LinkedIn but</p>
              <p>seeing them there is hit and miss.</p>
              <p>LinkedIn decides who sees what.</p>
              <p>Your inbox doesn&rsquo;t.</p>
              <p>
                Subscribers receive every story first with Private Notes that are never
                shared publicly.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-56 md:order-2">
            <Image
              src="/images/lostpotential/inbox-lioness.png"
              alt="Lioness-headed professional reading emails at a desktop computer"
              fill
              className="object-cover"
            />
          </div>
        </article>

        {/* Why these stories hit differently — image left */}
        <article className="grid overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-35px_rgba(0,0,0,0.22)] md:grid-cols-[42%_1fr]">
          <div className="relative min-h-56">
            <Image
              src="/images/lostpotential/celebrate.png"
              alt="Fox, bear and rabbit professionals celebrating a win in an office"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-7 py-8 sm:px-10 sm:py-10">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl">
              Why these stories hit differently
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-light leading-6 text-[#5b5b5b]">
              <li>&bull; They say the things people think but don&rsquo;t usually say</li>
              <li>
                &bull; They surface patterns that get glossed over in &ldquo;best
                practice&rdquo;
              </li>
              <li>
                &bull; They offer perspective without oversimplifying complex situations
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-sm font-light leading-6 text-[#5b5b5b]">
              <p>This isn&rsquo;t about fixing yourself.</p>
              <p>It&rsquo;s about seeing more clearly.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
