import Link from "next/link";

const items = [
  {
    label: (
      <>
        Inbox-first access
        <br />
        to every Lost
        <br />
        Potential File
      </>
    ),
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M12 8v4m0 0-2.2-2.2M12 12l2.2-2.2M7 20h10" />
      </>
    ),
  },
  {
    label: (
      <>
        Private Notes exploring
        <br />
        what doesn&rsquo;t make it into
        <br />
        public posts
      </>
    ),
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3v18M5 8h4M5 12h4M5 16h4" />
      </>
    ),
  },
  {
    label: (
      <>
        Thought-provoking
        <br />
        prompts you can carry into
        <br />
        real work conversations
      </>
    ),
    icon: (
      <>
        <path d="M9.5 3a5.5 5.5 0 0 1 2.5 10.4V16a1 1 0 0 1-1 1H9" />
        <path d="M9 17v3M12.5 8.2a1.6 1.6 0 1 0-2.4-1.4" />
        <circle cx="9.7" cy="11.3" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: (
      <>
        Early access to
        <br />
        selected work, events,
        <br />
        and ideas
      </>
    ),
    icon: (
      <>
        <path d="M4 5h11a3 3 0 0 1 3 3v9" />
        <path d="m14 13 4 4 4-4M4 5v10" />
      </>
    ),
  },
];

export default function WhatSubscribersReceive() {
  return (
    <section className="bg-[#eef0f1] px-4 py-16 text-[#2b2b2b] sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-2xl font-semibold sm:text-[1.75rem]">
          What subscribers receive
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-6 text-[#5b5b5b] sm:text-[0.9375rem]">
          Subscribers receive every story first.
          <br />
          Before it&rsquo;s published on LinkedIn, PLUS private notes that are never shared
          publicly.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl bg-white px-5 py-8 text-center shadow-[0_15px_45px_-30px_rgba(0,0,0,0.25)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 stroke-[#2b2b2b]"
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {item.icon}
              </svg>
              <p className="mt-6 text-sm font-light leading-6 text-[#4b4b4b]">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center">
          <p className="text-xs font-medium text-[#2b2b2b] sm:text-sm">Never miss another story</p>
          <Link
            href="/#contact"
            className="mt-3 inline-block rounded-full bg-[#2b2b2b] px-7 py-3 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-white shadow-lg transition-opacity hover:opacity-90"
          >
            Get the Files First
          </Link>
        </div>
      </div>
    </section>
  );
}
