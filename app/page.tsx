"use client";

import React from "react";
import Image from "next/image";
import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ui/ThreeBackground";
import { CardStack } from "@/components/ui/CardStack";
import { Users, Share2, BookOpen, FileText, Play, Code2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import FoundingMemberCard from "@/components/FoundingMemberCard";

// Images
import mission from "@/public/images/mission.webp";
import vision from "@/public/images/vision.webp";
import hustleImg from "@/public/images/hustle.webp";
import chroniclesImg from "@/public/images/chronicles.webp";
import sihImg from "@/public/images/sih.webp";
import opensrcImg from "@/public/images/opensource.webp";
import cybersecImg from "@/public/images/cybersec.webp";
import innovationImg from "@/public/images/innovation.webp";
import mohitImg from "@/public/images/mohit.webp";
import soumyaImg from "@/public/images/soumya.webp";
import ashutoshImg from "@/public/images/ashutosh.webp";

import {
  DevOps,
  Flutter,
  ICPC,
  IOT,
  Kaggle,
  ML,
  OpenSource,
  ReactIcon,
} from "@/components/Icons";
import Link from "next/link";

export const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [flippedIndex, setFlippedIndex] = React.useState<number | null>(null);

  const handleFlip = (i: number) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

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
        {/* Fade transition to mission section
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-b from-transparent to-pbgray pointer-events-none" /> */}
      </section>

      <section
        id="mission-vision"
        className="bg-pbpages text-white overflow-hidden px-3"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="pt-14 px-6">
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center py-14 sm:py-20 px-6 sm:px-10 lg:px-20">
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center md:py-14 sm:py-20 px-6 sm:px-10 lg:px-20">
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

      <section id="cards">
        <CardStack />
      </section>

      <section id="domains" className="bg-pbpages text-white py-20 px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pbgreen mb-3">
            Domains we Love
          </h2>
          <p className="text-white/70 text-sm">
            we will write some sub heading here
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative max-w-5xl mx-auto  rounded-3xl overflow-hidden">
            {/* Corner dot gradients */}
            {[
              "top-0 left-0 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]",
              "bottom-0 right-0 [mask-image:radial-gradient(ellipse_at_bottom_right,black_30%,transparent_70%)]",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-40 h-40 opacity-40 pointer-events-none`}
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-pbgreen) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
            ))}
            <div className="bg-pbdarkgray p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "DevOps", Icon: DevOps },
                  { name: "IOT-ML", Icon: IOT },
                  { name: "Kaggle", Icon: Kaggle },
                  { name: "ML-Research", Icon: ML },
                  { name: "Open Source Hackathon", Icon: OpenSource },
                  { name: "React Development", Icon: ReactIcon },
                  { name: "ACM - ICPC", Icon: ICPC },
                  { name: "Flutter Development", Icon: Flutter },
                ].map(({ name, Icon }, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center py-8 px-6 gap-3 z-10 w-full/4 bg-pbcard border-white/16 border rounded-2xl transition-all duration-300 hover:border-pbgreen/50 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)]`}
                  >
                    <div
                      className="w-17.5 h-17.5 rounded-full p-2 flex"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(55, 255, 0, 0.05) 0%, rgba(55, 255, 0, 0) 100%)",
                      }}
                    >
                      <div
                        className="w-13.5 h-13.5 rounded-full p-3 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(55, 255, 0, 0.1) -66.22%, rgba(55, 255, 0, 0) 85.46%)",
                        }}
                      >
                        <Icon
                          className="w-7.5 h-7.5 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-white text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="activities" className="bg-pbpages text-white py-20 px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pbgreen">Activities</h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
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
          ].map(({ title, tag, img, description }, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.1}>
              <div className="bg-pbdarkgray min-h-100 bg-cover bg-center rounded-3xl overflow-hidden border border-white/16 flex flex-col transition-all duration-300 hover:border-pbgreen/50 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover grayscale"
                    draggable={false}
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1 p-5">
                  <div className="flex mb-3 mt-2 items-center gap-2 flex-wrap ">
                    <h3 className="font-bold text-white text-base">{title}</h3>
                    <span className="text-pbgreen h-7 flex items-center text-xs border-2 border-pbborder p-2 rounded-2xl">
                      {tag}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="founding-members"
        className="bg-pbpages text-white py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <h2 className="text-4xl font-bold text-white">
              Our <span className="text-pbgreen">Founding</span> Members
            </h2>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="text-center text-white/70 text-sm max-w-xl mx-auto mb-12"
          >
            <p>
              Point Blank is a passion project, born from a shared excitement to
              build and lead a platform for like-minded, driven students to come
              together and learn from each other.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
            {[
              {
                name: "Mohit Agarwal",
                bio: "Mohit, SDE2 at Glance, is the driving force behind Point Blank's Competitive Programming culture. He has won several contests, including the Nokia Collegiate Code Rally, and qualified for ACM-ICPC Regionals.",
                img: mohitImg,
                linkedin: "https://linkedin.com/in/mohit-agarwal1",
              },
              {
                name: "Soumya Pattanayak",
                bio: "A top coder at Point Blank, Soumya has worked at Amazon and Verse Innovation. He's an ACM-ICPC regionalist known for his problem-solving skills and innovative projects.",
                img: soumyaImg,
                linkedin: "https://linkedin.com/in/soumya713",
              },
              {
                name: "Ashutosh Pandey",
                bio: "Ashutosh, Compiler Engineer at AMD, excelled in Open Source and Hackathons. As a student, he did GSoC with Arduino, won the Smart India Hackathon, and mentored students for prestigious programs.",
                img: ashutoshImg,
                linkedin: "https://linkedin.com/in/ashupdsce",
              },
            ].map(({ name, bio, img, linkedin }, i) => (
              <FadeIn key={i} delay={i * 0.12} className="h-full">
                <FoundingMemberCard
                  name={name}
                  bio={bio}
                  img={img}
                  linkedin={linkedin}
                  isFlipped={flippedIndex === i}
                  onFlip={() => handleFlip(i)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section id="stay-connected" className="bg-pbpages text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Stay <span className="text-pbgreen">Connected</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                Icon: Users,
                title: "Join Us",
                description:
                  "Come join us as a member, we will ensure you always stay connected and grow with our expertise.",
                link: "https://whatsapp.com",
              },
              {
                Icon: Share2,
                title: "Connect with Us",
                description:
                  "Follow us on our social platforms to get notified on Events, Blogs, and the community highlights.",
                link: "https://linktr.ee/",
              },
              {
                Icon: BookOpen,
                title: "Read Our Blog",
                description:
                  "Point Blank has a active blog channel. Get the latest tech articles and community adventures.",
                link: "https://blog.pointblank.club",
              },
              {
                Icon: FileText,
                title: "Brochure",
                description:
                  "Want to know more about Point Blank? Download our official brochure to get a quick overview.",
                link: "/brochure.pdf",
              },
              {
                Icon: Play,
                title: "Join Us on YouTube",
                description:
                  "Never miss an update from our channel. We post recorded talks, sessions, and event highlights.",
                link: "https://youtube.com/@pointblank_club",
              },
              {
                Icon: Code2,
                title: "GitHub",
                description:
                  "Want to contribute to this project with the codebase and network of open source contributors.",
                link: "https://github.com/pointblank-club",
              },
            ].map(({ Icon, title, description, link }, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.1}>
                <Link
                  className="bg-pbgray rounded-2xl border border-white/16 p-5 flex flex-col gap-3 cursor-pointer hover:border-pbgreen/30 transition-colors h-full"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-9 h-9 rounded-lg bg-pbgreen/10 border border-pbgreen/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-pbgreen" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
