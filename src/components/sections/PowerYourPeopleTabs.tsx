import PathwayTabs, { type PathwayTab } from "./PathwayTabs";

const tabs: PathwayTab[] = [
  {
    label: "You've seen it all before",
    body: (
      <>
        <p>
          The away day, the workshop, the programme that everyone attends and nobody remembers
          three months later.
        </p>
        <p>
          The budget spent. The boxes ticked. The quiet, uncomfortable feeling that nothing has
          really changed.
        </p>
      </>
    ),
  },
  {
    label: "The cost nobody is talking about",
    body: (
      <>
        <p>
          Your people are still under pressure. Still burning through their reserves. Still
          delivering but at a cost nobody is talking about.
        </p>
        <p>
          That feeling is not just frustration. It is the weight of knowing you let your people
          down. Your business down. Yourself down.
        </p>
        <p>It doesn&apos;t have to be that way.</p>
      </>
    ),
  },
  {
    label: "Performance and wellbeing are not a trade-off",
    body: (
      <>
        <p>
          Power Your People is built on one belief: that performance and wellbeing are not a
          trade-off.
        </p>
        <p>
          When people feel supported as whole human beings, not just as job titles, they show up
          differently. They lead differently. They deliver differently, and it sticks.
        </p>
      </>
    ),
  },
  {
    label: "Not a tick box. Not a one-day wonder.",
    body: (
      <>
        <p>
          From keynotes that shift mindsets in a room to bespoke workshops and programmes built
          around your specific people and culture &ndash; every Power Your People experience is
          about getting to the root of what is really going on.
        </p>
        <p>Not a tick box. Not a one-day wonder. The real thing.</p>
      </>
    ),
  },
];

export default function PowerYourPeopleTabs() {
  return <PathwayTabs tabs={tabs} theme="green" id="pyp" />;
}
