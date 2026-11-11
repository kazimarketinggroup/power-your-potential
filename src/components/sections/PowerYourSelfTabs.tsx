import PathwayTabs, { type PathwayTab } from "./PathwayTabs";

const tabs: PathwayTab[] = [
  {
    label: "You have spent years delivering for everyone else",
    body: (
      <>
        <p>
          Hitting targets. Holding everyone together. Always showing up.
        </p>
        <p>
          Yet despite everything you&apos;ve achieved, something doesn&apos;t feel right. The
          success looks good from the outside, but it doesn&apos;t feel right on the inside.
        </p>
        <p>
          The pressure is relentless. The recognition from others is never quite enough. You can
          feel this in your body even if you can&apos;t find the words to name it, and the thought
          of starting over feels like too high a price to pay. This is what it costs to build a
          career on other people&apos;s terms.
        </p>
      </>
    ),
  },
  {
    label: "The thing is, no-one is coming to save you",
    body: (
      <>
        <p>That is not a threat. It is the most freeing thing you will ever hear.</p>
        <p>
          Because the moment you stop waiting for permission is the moment everything changes.
          Clarity replaces the noise. Confidence stops being something you perform and starts
          being something you own.
        </p>
        <p>Success starts to feel like something you chose, not something that chose you.</p>
      </>
    ),
  },
  {
    label: "This is not about starting over",
    body: (
      <>
        <p>It&apos;s about deciding what you are actually capable of.</p>
      </>
    ),
  },
];

export default function PowerYourSelfTabs() {
  return <PathwayTabs tabs={tabs} theme="purple" id="pys" />;
}
