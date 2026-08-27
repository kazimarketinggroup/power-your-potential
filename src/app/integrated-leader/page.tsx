import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import IntegratedHero from "@/components/integrated/IntegratedHero";
import HighLevel from "@/components/integrated/HighLevel";
import RealIssue from "@/components/integrated/RealIssue";
import WhatIsIntegrated from "@/components/integrated/WhatIsIntegrated";
import Tension from "@/components/integrated/Tension";
import Container from "@/components/integrated/Container";
import ApplyCta from "@/components/integrated/ApplyCta";
import TwelveWeeks from "@/components/integrated/TwelveWeeks";
import WhatChanges from "@/components/integrated/WhatChanges";
import ILTestimonial from "@/components/integrated/ILTestimonial";
import MeetYourGuide from "@/components/integrated/MeetYourGuide";
import WhatYouReceive from "@/components/integrated/WhatYouReceive";
import AreYouReady from "@/components/integrated/AreYouReady";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Integrated Leader | Power Your Potential",
  description:
    "A private, high-touch 1:1 leadership experience with Rachel Power for senior women leading in high-pressure environments. Application only.",
};

export default function IntegratedLeaderPage() {
  return (
    <main className="flex-1">
      <IntegratedHero />
      <Reveal>
        <HighLevel />
      </Reveal>
      <Reveal>
        <RealIssue />
      </Reveal>
      <Reveal>
        <WhatIsIntegrated />
      </Reveal>
      <Reveal>
        <Tension />
      </Reveal>
      <Reveal>
        <Container />
      </Reveal>
      <Reveal>
        <ApplyCta />
      </Reveal>
      <Reveal>
        <TwelveWeeks />
      </Reveal>
      <Reveal>
        <WhatChanges />
      </Reveal>
      <Reveal>
        <ILTestimonial />
      </Reveal>
      <Reveal>
        <MeetYourGuide />
      </Reveal>
      <Reveal>
        <WhatYouReceive />
      </Reveal>
      <Reveal>
        <AreYouReady />
      </Reveal>
      <Footer variant="light" />
    </main>
  );
}
