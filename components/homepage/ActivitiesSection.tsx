import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import hustleImg from "@/public/images/hustle.webp";
import chroniclesImg from "@/public/images/chronicles.webp";
import sihImg from "@/public/images/sih.webp";
import opensrcImg from "@/public/images/opensource.webp";
import cybersecImg from "@/public/images/cybersec.webp";
import innovationImg from "@/public/images/innovation.webp";

const activities = [
  {
    title: "CP Contests",
    tag: "PB Hustle",
    img: hustleImg,
    description:
      "Since 2019, Point Blank has built a strong competitive programming culture. Participation scaled rapidly, with teams qualifying for ICPC Regionals.",
  },
  {
    title: "Development",
    tag: "PB Chronicles",
    img: chroniclesImg,
    description:
      "We host hands-on workshops across web, mobile, DevOps, machine learning, and open source, focused on real skills rather than slides.",
  },
  {
    title: "Hackathons",
    tag: "Smart India Hackathon",
    img: sihImg,
    description:
      "Point Blank organizes the internal Smart India Hackathon annually, with consistent national qualifications, finals, and wins.",
  },
  {
    title: "Open Source",
    tag: "GSoC",
    img: opensrcImg,
    description:
      "Our open-source community has produced GSoC contributors, LFX scholars, and GitHub Externs across global organizations.",
  },
  {
    title: "Cybersecurity",
    tag: "PBCTF",
    img: cybersecImg,
    description:
      "We run hands-on cybersecurity sessions and host PBCTF, an in-house Capture The Flag event with wide campus participation.",
  },
  {
    title: "Innovation",
    img: innovationImg,
    tag: "Research",
    description:
      "From hardware prototypes to published research, we foster a culture of experimentation and innovation beyond the classroom.",
  },
];

export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="text-white px-4 sm:px-10 lg:px-20"
    >
      <FadeIn className="text-center my-20">
        <h2 className="text-4xl font-bold text-pbgreen">Activities</h2>
      </FadeIn>

      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map(({ title, tag, img, description }, i) => (
          <FadeIn key={i} delay={(i % 3) * 0.1} className="h-full">
            <div className="relative z-10 h-full bg-pbdarkgray bg-cover bg-center rounded-b-[16px] rounded-t-[54px] overflow-hidden border border-white/16 flex flex-col transition-all duration-300 hover:border-pbgreen">
              <div className="relative h-72 overflow-hidden m-7 mb-3.1 rounded-b-[12px] rounded-t-[30px]">
                <Image
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1 p-5 pt-1 pl-11">
                <div className="flex mb-3 mt-2 items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-white text-base">{title}</h3>
                  <span className="text-pbgreen h-7 flex items-center text-xs border-2 border-pbborder p-2 rounded-2xl">
                    {tag}
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed ">
                  {description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
