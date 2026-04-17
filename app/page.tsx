"use client";

import React from "react";
import Image from "next/image";
import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ui/ThreeBackground";
import { CardStack } from "@/components/ui/CardStack";
import { Share2, NotebookText } from "lucide-react";
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
  Bulb,
  DevOps,
  Flutter,
  GitHub,
  HireUs,
  ICPC,
  IOT,
  Kaggle,
  ML,
  OpenSource,
  ReactIcon,
  YouTube,
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

      <section id="cards">
        <CardStack />
      </section>

      <section id="domains" className="bg-pbpages text-white py-20 px-20">
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

      <section id="activities" className="bg-pbpages text-white py-20 px-20">
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
                    className="w-full h-full object-cover grayscale-70"
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
        className="bg-pbpages text-white py-20 px-20"
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
      <section
        id="stay-connected"
        className="bg-pbpages text-white py-20 px-20"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Stay <span className="text-pbgreen">Connected</span>
            </h2>
          </FadeIn>

          <div
            className="flex flex-col p-7.5"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='%23505050' stroke-width='1.5' stroke-dasharray='8%2c12' stroke-linecap='butt'/%3e%3c/svg%3e\")",
            }}
          >
            <div className="flex items-stretch">
              {/* Hire Us */}
              <FadeIn className="flex-1 flex flex-col min-w-0">
                <Link
                  href="https://careers.pointblank.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-tl-[40px] rounded-tr-[14px] rounded-br-[40px] rounded-bl-[14px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <HireUs
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      Hire Us
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    Let&apos;s discuss how we can bring your ideas to life and
                    help your business succeed with our expertise.
                  </p>
                </Link>
              </FadeIn>

              {/* Vertical dashed separator */}
              <div
                className="w-px mx-3.75 self-stretch shrink-0 bg-[repeating-linear-gradient(to_bottom,#262626_0px,#262626_8px,transparent_8px,transparent_20px)]"
              />

              {/* Connect with Us */}
              <FadeIn delay={0.1} className="flex-1 flex flex-col min-w-0">
                <Link
                  href="https://linktr.ee/pointblank_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-[14px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <Share2
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      Connect With Us
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    Follow us across all our social platforms to stay updated
                    with events, releases and community highlights.
                  </p>
                </Link>
              </FadeIn>

              {/* Vertical dashed separator */}
              <div
                className="w-px mx-3.75 self-stretch shrink-0 bg-[repeating-linear-gradient(to_bottom,#262626_0px,#262626_8px,transparent_8px,transparent_20px)]"
              />

              {/* Read Blog */}
              <FadeIn delay={0.2} className="flex-1 flex flex-col min-w-0">
                <Link
                  href="https://blog.pointblank.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-tl-[14px] rounded-tr-[40px] rounded-br-[14px] rounded-bl-[40px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <Bulb
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      Read Our Blog
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    Explore stories and experiences shared by our members on
                    their tech journey and community adventures.
                  </p>
                </Link>
              </FadeIn>
            </div>

            {/* Horizontal dashed separator between rows */}
            <div
              className="h-px w-full my-3.75 shrink-0 bg-[repeating-linear-gradient(to_right,#262626_0px,#262626_8px,transparent_8px,transparent_20px)]"
            />

            {/* Row 2 */}
            <div className="flex items-stretch">
              {/* Brochure */}
              <FadeIn delay={0.1} className="flex-1 flex flex-col min-w-0">
                <Link
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-tl-[14px] rounded-tr-[40px] rounded-br-[14px] rounded-bl-[40px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <NotebookText
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      Brochure
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    We have listed all of recent events, activities, and other
                    stats in our brochure.
                  </p>
                </Link>
              </FadeIn>

              {/* Vertical dashed separator */}
              <div
                className="w-px mx-3.75 self-stretch shrink-0 bg-[repeating-linear-gradient(to_bottom,#262626_0px,#262626_8px,transparent_8px,transparent_20px)]"
              />

              {/* Join Us on YouTube */}
              <FadeIn delay={0.2} className="flex-1 flex flex-col min-w-0">
                <Link
                  href="https://youtube.com/@pointblank_club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-[14px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <YouTube
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      Join Us on YouTube
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    We upload event recaps, fun activities and vibes of mixtapes
                    on YouTube. Check it out now!
                  </p>
                </Link>
              </FadeIn>

              {/* Vertical dashed separator */}
              <div
                className="w-px mx-3.75 self-stretch shrink-0 bg-[repeating-linear-gradient(to_bottom,#262626_0px,#262626_8px,transparent_8px,transparent_20px)]"
              />

              {/* GitHub */}
              <FadeIn delay={0.3} className="flex-1 flex flex-col min-w-0">
                <Link
                  href="https://github.com/pointblank-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-10 gap-6 flex-1 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(55,255,0,0.12)] bg-[linear-gradient(106.06deg,rgba(55,255,0,0.05)_-29.45%,rgba(55,255,0,0)_27.86%),linear-gradient(267.5deg,#1C1C1C_40.67%,rgba(28,28,28,0)_99.81%)] rounded-tl-[40px] rounded-tr-[14px] rounded-br-[40px] rounded-bl-[14px]"
                >
                  <div className="flex items-center gap-3.5 w-full">
                    <div
                      className="w-18 h-18 shrink-0 rounded-full p-2 flex bg-[linear-gradient(180deg,rgba(202,255,51,0.05)_0%,rgba(202,255,51,0)_100%)]"
                    >
                      <div
                        className="w-14 h-14 rounded-full p-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(55,255,0,0.1)_-66.22%,rgba(55,255,0,0)_85.46%)]"
                      >
                        <GitHub
                          className="w-6 h-6 text-pbgreen"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold leading-[150%] flex-1">
                      GitHub
                    </h3>
                  </div>
                  <p className="text-pbtext text-sm font-light leading-[150%] text-center">
                    Meet the amazing contributors who have helped shape this
                    project with their dedication and hard work.
                  </p>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
