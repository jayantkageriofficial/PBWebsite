import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import mission from "@/public/images/mission.webp";
import vision from "@/public/images/vision.webp";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="bg-pbpages text-white overflow-hidden px-3"
    >
      <div className="max-w-8xl mx-auto">
        <FadeIn className="pt-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-pbgreen">
            Our Mission, together.
          </h2>
          <p className="pt-3 text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed">
            In Point Blank, we believe in the concept of no spoon-feeding. We
            are here to help you learn and grow together. We are a community
            of coders, hackers, developers, and tech enthusiasts passionate
            about technology and learning.
          </p>
        </FadeIn>

        {/* Mission - Image Left */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center py-14 sm:py-20">
          <FadeIn className="relative w-full lg:w-1/2 shrink-0">
            <div className="relative w-full max-w-140 mx-auto lg:mx-0 aspect-4/3 sm:aspect-16/10 lg:aspect-5/4 rounded-4xl overflow-hidden">
              <Image
                src={mission}
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                draggable={false}
              />
            </div>
          </FadeIn>

          <FadeIn
            delay={1}
            className="w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 border-pbgreen pt-6 lg:pt-0 lg:pl-12"
          >
            <h3 className="text-3xl sm:text-4xl mb-4 sm:mb-6">Mission</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula, nunc id varius fermentum, justo erat facilisis nunc, a
              dictum sapien lorem at elit. Sed tincidunt, nisl at convallis
              cursus, metus erat posuere arcu, vitae ultrices magna turpis in
              nibh. Curabitur non urna vitae odio tempor hendrerit. Vivamus
              efficitur, sapien non tristique luctus, eros libero gravida
              tortor, at facilisis augue est vel metus. Proin at turpis.
            </p>
          </FadeIn>
        </div>

        {/* Vision - Image Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center md:py-14 sm:py-20">
          <FadeIn className="w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-r-2 border-pbgreen pt-6 lg:pt-0 lg:pr-12">
            <h3 className="text-3xl sm:text-4xl mb-4 sm:mb-6">Vision</h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula, nunc id varius fermentum, justo erat facilisis nunc, a
              dictum sapien lorem at elit. Sed tincidunt, nisl at convallis
              cursus, metus erat posuere arcu, vitae ultrices magna turpis in
              nibh. Curabitur non urna vitae odio tempor hendrerit. Vivamus
              efficitur, sapien non tristique luctus, eros libero gravida
              tortor, at facilisis augue est vel metus. Proin at turpis.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="relative w-full lg:w-1/2 shrink-0">
            <div className="relative w-full max-w-140 mx-auto lg:ml-auto aspect-4/3 sm:aspect-16/10 lg:aspect-5/4 rounded-4xl overflow-hidden">
              <Image
                src={vision}
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                draggable={false}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
