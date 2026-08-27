import VideoPlayer from "@/components/ui/VideoPlayer";

export default function Testimonial() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#141110] px-6 py-7 sm:px-12 sm:py-8">
        <h2 className="mx-auto max-w-3xl text-center text-base font-medium leading-relaxed sm:text-[1.1875rem]">
          Philippa Lazenby shares how Power Your Potential helped
          <br className="hidden sm:block" /> her unlock clarity, confidence, and impact.
        </h2>

        <VideoPlayer
          src="/videos/philippa-lazenby.mp4"
          poster="/images/poster-philippa.png"
          className="mx-auto mt-6 max-w-[47.5rem]"
        />
      </div>
    </section>
  );
}
