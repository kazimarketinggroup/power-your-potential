const items = [
  ["12 private", "1:1 sessions"],
  ["Women’s", "PowerType® profile"],
  ["Personalised", "integration blueprint"],
  ["Nervous system", "recalibration tools"],
  ["Voice note", "support"],
  ["A confidential, high-", "trust container"],
];

export default function WhatYouReceive() {
  return (
    <section className="flex min-h-100 items-center bg-[#f3ecdf] text-[#2b1420]">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="text-center font-serif text-2xl font-semibold sm:text-[1.625rem]">
          What You Receive
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-7 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-9">
          {items.map(([lineOne, lineTwo]) => (
            <div key={lineOne + lineTwo} className="text-center">
              <div className="mx-auto w-fit pb-3 text-sm font-light leading-6">
                {lineOne}
                <br />
                {lineTwo}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-9 text-center font-serif text-2xl font-medium leading-snug sm:text-[1.625rem]">
          Strategic.
          <br />
          Not transactional.
        </p>
      </div>
    </section>
  );
}
