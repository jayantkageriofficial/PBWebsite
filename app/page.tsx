import Image from "next/image";
import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ThreeBackground";
import mission from "@/public/mission.webp";
import vision from "@/public/vision.webp";

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[90vh] overflow-hidden cursor-grab text-white"
      >
        <ThreeBackground />
        <div className="flex justify-center items-center absolute inset-0 flex-col">
          <h1
            className={`text-7xl text-center tracking-[-22%] text-white p-5 rounded-4xl select-none ${lexendTera.className}`}
          >
            We are
            <br />
            <span className="text-pbgreen">&lt;. &gt;</span>{" "}
            <span className="text-pbgreen">Point</span> Blank
            <p className="text-base text-white italic pt-2">
              Student run Open Source Community from India
            </p>
          </h1>
        </div>
      </section>

      <section
        id="mission-vission"
        className="bg-pbgray text-white overflow-hidden"
      >
        <div className="pt-14 px-10 lg:px-20">
          <h2 className="text-4xl font-semibold text-pbgreen">
            Our Mission, together.
          </h2>
          <p className="pt-3 text-[#B3B3B3] max-w-3xl text-base leading-relaxed">
            In Point Blank, we believe in the concept of no spoon-feeding. We
            are here to help you learn and grow together. We are a community of
            coders, hackers, developers, and tech enthusiasts passionate about
            technology and learning.
          </p>
        </div>

        {/* Mission - Image Left */}
        <div className="flex flex-col lg:flex-row items-center py-20 px-10 lg:px-20 space-x-0">
          <div className="relative w-full lg:w-1/2 shrink-0">
            <div className={`relative rounded-4xl overflow-hidden`}>
              <Image
                src={mission}
                alt="Mission"
                className="h-99 object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 border-l-2 border-pbgreen pl-10 lg:pl-20">
            <h3 className="text-4xl mb-6">Mission</h3>
            <p className="text-[#B3B3B3] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula, nunc id varius fermentum, justo erat facilisis nunc, a
              dictum sapien lorem at elit. Sed tincidunt, nisl at convallis
              cursus, metus erat posuere arcu, vitae ultrices magna turpis in
              nibh. Curabitur non urna vitae odio tempor hendrerit. Vivamus
              efficitur, sapien non tristique luctus, eros libero gravida
              tortor, at facilisis augue est vel metus. Proin at turpis.
            </p>
          </div>
        </div>

        {/* Vision - Image Right */}
        <div className="flex flex-col lg:flex-row items-center py-20 px-10 lg:px-20 space-x-0">
          <div className="w-full lg:w-1/2 border-r-2 border-pbgreen pl-10 lg:pl-20">
            <h3 className="text-4xl mb-6">Vision</h3>
            <p className="text-[#B3B3B3] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vehicula, nunc id varius fermentum, justo erat facilisis nunc, a
              dictum sapien lorem at elit. Sed tincidunt, nisl at convallis
              cursus, metus erat posuere arcu, vitae ultrices magna turpis in
              nibh. Curabitur non urna vitae odio tempor hendrerit. Vivamus
              efficitur, sapien non tristique luctus, eros libero gravida
              tortor, at facilisis augue est vel metus. Proin at turpis.
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 shrink-0">
            <div className={`relative rounded-4xl overflow-hidden`}>
              <Image src={vision} alt="Vision" className="h-99 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
