import type { Metadata } from "next";
import BookHero from "@/components/freebook/BookHero";
import BookForm from "@/components/freebook/BookForm";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Download Redefining Career Success | Power Your Potential",
  description:
    "Download your free copy of Redefining Career Success — practical tools to grow confidence, drive performance, and create success on your own terms.",
  // Private page: not meant for public discovery. Keep it out of search engines.
  robots: { index: false, follow: false },
};

export default function DownloadYourFreeEbookPage() {
  return (
    <main className="flex-1">
      <BookHero />
      <Reveal>
        <BookForm />
      </Reveal>
      <Footer variant="light" />
    </main>
  );
}
