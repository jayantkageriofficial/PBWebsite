import Events from "@/components/events/Events";
import ReviewMarquee from "@/components/events/ReviewMarquee";

export default function EventsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-pbpages text-white flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center justify-center pt-24">
          <h1 className="text-center text-white tracking-tight select-none text-5xl md:text-6xl lg:text-7xl font-normal leading-tight md:leading-snug">
            Events
          </h1>
        </div>
      </section>
      <Events />
      <div className="bg-pbpages text-white py-14 overflow-hidden">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal leading-tight md:leading-snug text-white mb-8 text-center px-6">
          Events experience
        </h2>
        <ReviewMarquee />
      </div>
    </>
  );
}
