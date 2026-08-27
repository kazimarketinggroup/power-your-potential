import type { Metadata } from "next";
import LostHero from "@/components/lostpotential/LostHero";
import StoryQuote from "@/components/lostpotential/StoryQuote";
import WorkHarder from "@/components/lostpotential/WorkHarder";
import NotTheories from "@/components/lostpotential/NotTheories";
import WhatSubscribersReceive from "@/components/lostpotential/WhatSubscribersReceive";
import MessierBanner from "@/components/lostpotential/MessierBanner";
import SignupCta from "@/components/lostpotential/SignupCta";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lost Potential Files | Stories from the Corporate Wild",
  description:
    "Weekly leadership stories inspired by real workplace moments — where potential gets lost, found, and redefined.",
  // Private page: not meant for public discovery. Keep it out of search engines.
  robots: { index: false, follow: false },
};

export default function LostPotentialPage() {
  return (
    <main className="flex-1">
      <LostHero />
      <StoryQuote />
      <WorkHarder />
      <NotTheories />
      <WhatSubscribersReceive />
      <MessierBanner />
      <SignupCta />
      <Footer variant="light" />
    </main>
  );
}
