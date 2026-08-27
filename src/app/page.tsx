import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Hero from "@/components/sections/Hero";
import FounderCard from "@/components/sections/FounderCard";
import Pathways from "@/components/sections/Pathways";
import PowerYourSelf from "@/components/sections/PowerYourSelf";
import PowerYourPeople from "@/components/sections/PowerYourPeople";
import PowerYourBusiness from "@/components/sections/PowerYourBusiness";
import LeadWithPurpose from "@/components/sections/LeadWithPurpose";
import ShiftWeCreate from "@/components/sections/ShiftWeCreate";
import Testimonial from "@/components/sections/Testimonial";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
       
        <Reveal>
          <Pathways />
        </Reveal>
        <Reveal>
          <PowerYourSelf />
        </Reveal>
        <Reveal>
          <PowerYourPeople />
        </Reveal>
        <Reveal>
          <PowerYourBusiness />
        </Reveal>
         <Reveal>
          <FounderCard />
        </Reveal>
        <Reveal>
          <LeadWithPurpose />
        </Reveal>
        <Reveal>
          <ShiftWeCreate />
        </Reveal>
        <Reveal>
          <Testimonial />
        </Reveal>
        <Reveal>
          <CtaBanner />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
