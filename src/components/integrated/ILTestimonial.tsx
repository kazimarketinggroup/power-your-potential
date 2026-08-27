import VideoPlayer from "@/components/ui/VideoPlayer";

export default function ILTestimonial() {
  return (
    <section className="flex min-h-100 items-center bg-[#f5efe6]">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
        <VideoPlayer
          src="/videos/philippa-lazenby.mp4"
          poster="/images/poster-philippa.png"
          className="mx-auto max-w-[45rem]"
        />
      </div>
    </section>
  );
}
