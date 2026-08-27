import PathwayTabs, { type PathwayTab } from "./PathwayTabs";

const tabs: PathwayTab[] = [
  {
    label: "You’ve reached the ceiling of being self-taught",
    body: (
      <>
        <p>
          You have built a service you are proud of, but you&apos;re still not sure your dream
          customers see your service as the solution to their need.
        </p>
        <p>
          That uncertainty is what keeps brilliant businesses like yours small. Not a lack of
          capability to deliver. Not a lack of ambition.
        </p>
        <p>
          You have built this yourself, figured it out as you went and achieved more than your
          younger self ever imagined possible when you first started out, but there is a ceiling
          to what self-taught gets you, and you have felt it for quite a while now.
        </p>
      </>
    ),
  },
  {
    label: "You have nagging doubts",
    body: (
      <>
        <p>
          It&apos;s the quiet, nagging doubt that when you put yourself in front of the next
          level client, they will not be convinced.
        </p>
        <p>
          Or maybe you have already put yourself out there, and your pitch didn&apos;t convert
          because they told you they don&apos;t understand it.
        </p>
      </>
    ),
  },
  {
    label: "The opportunities you’re missing",
    body: (
      <>
        <p>
          So you keep delivering brilliantly at the level you are at. While the bigger contracts
          &ndash; the ones that would change everything, the ones that keep going to someone
          else.
        </p>
        <p>It does not have to stay that way.</p>
      </>
    ),
  },
  {
    label: "It’s time to back yourself and your business",
    body: (
      <>
        <p>
          Power Your Business was built for this moment. The moment you decide to back yourself
          and go for bigger.
        </p>
        <p>
          Built on over twenty years of sitting on the other side of the table &ndash; being
          pitched to by the good, the bad and the ugly &ndash; our system gives you the certainty
          and the commercial edge to walk into any room with the confidence to win.
        </p>
        <p>
          You know your products and services are good. It&apos;s time the right people knew it
          too.
        </p>
      </>
    ),
  },
];

export default function PowerYourBusinessTabs() {
  return <PathwayTabs tabs={tabs} theme="orange" id="pyb" />;
}
