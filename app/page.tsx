import Image from "next/image";
import { Lexend_Tera } from "next/font/google";
import ThreeBackground from "@/components/ThreeBackground";
import mission from "@/public/mission.webp";
import vision from "@/public/vision.webp";
import connectImg from "@/public/connect.webp";
import { CardStack } from "@/components/CardStack";
import {
  Terminal,
  Cpu,
  BarChart2,
  Brain,
  Computer,
  Atom,
  Trophy,
  Layers,
  Users,
  Share2,
  BookOpen,
  FileText,
  Play,
  Code2,
} from "lucide-react";
import Link from "next/link";

export const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
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
        id="mission-vision"
        className="bg-pbgray text-white overflow-hidden px-3"
      >
        <div className="pt-14 px-6 sm:px-10 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-pbgreen">
            Our Mission, together.
          </h2>
          <p className="pt-3 text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed">
            In Point Blank, we believe in the concept of no spoon-feeding. We
            are here to help you learn and grow together. We are a community of
            coders, hackers, developers, and tech enthusiasts passionate about
            technology and learning.
          </p>
        </div>

        {/* Mission - Image Left */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center py-14 sm:py-20 px-6 sm:px-10 lg:px-20">
          <div className="relative w-full lg:w-1/2 shrink-0">
            <div className="relative w-full max-w-140 mx-auto lg:mx-0 aspect-4/3 sm:aspect-16/10 lg:aspect-5/4 rounded-4xl overflow-hidden">
              <Image
                src={mission}
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-l-2 border-pbgreen pt-6 lg:pt-0 lg:pl-12">
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
          </div>
        </div>

        {/* Vision - Image Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center md:py-14 sm:py-20 px-6 sm:px-10 lg:px-20">
          <div className="w-full lg:w-1/2 border-t-2 lg:border-t-0 lg:border-r-2 border-pbgreen pt-6 lg:pt-0 lg:pr-12">
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
          </div>

          <div className="relative w-full lg:w-1/2 shrink-0">
            <div className="relative w-full max-w-140 mx-auto lg:ml-auto aspect-4/3 sm:aspect-16/10 lg:aspect-5/4 rounded-4xl overflow-hidden">
              <Image
                src={vision}
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="cards">
        <CardStack />
      </section>

      <section id="domains" className="bg-pbgray text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pbgreen mb-3">
            Domains we Love
          </h2>
          <p className="text-white/70 text-sm">
            we will write some sub heading here
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto bg-pbcard rounded-3xl overflow-hidden border border-white/16">
          {/* Corner dot gradients */}
          {[
            "top-0 left-0 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]",
            // "top-0 right-0 [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_70%)]",
            // "bottom-0 left-0 [mask-image:radial-gradient(ellipse_at_bottom_left,black_30%,transparent_70%)]",
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
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { name: "DevOps", Icon: Terminal },
              { name: "IOT-ML", Icon: Cpu },
              { name: "Kaggle", Icon: BarChart2 },
              { name: "ML-Research", Icon: Brain },
              { name: "Open Source Hackathon", Icon: Computer },
              { name: "React Development", Icon: Atom },
              { name: "ACM - ICPC", Icon: Trophy },
              { name: "Flutter Development", Icon: Layers },
            ].map(({ name, Icon }, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center py-10 px-4 gap-4 border-white/16
                  not-nth-[2n]:border-r sm:not-nth-[2n]:border-r-0
                  sm:not-nth-[4n]:border-r
                  border-b nth-last-[-n+2]:border-b-0 sm:nth-last-[-n+2]:border-b sm:nth-last-[-n+4]:border-b-0`}
              >
                <div
                  className="relative w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(55,255,0,0.22) 0%, rgba(55,255,0,0.08) 45%, transparent 70%)",
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-pbdark border border-pbgreen/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <span className="text-sm text-white text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="bg-pbdark text-white py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pbgreen">Activities</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "CP Contests",
              tag: "PB Hustle",
              description:
                "Since 2019, Point Blank has built a strong competitive programming culture. Participation scaled rapidly, with teams qualifying for ICPC Regionals.",
            },
            {
              title: "Development",
              tag: "PB Chronicles",
              description:
                "We host hands-on workshops across web, mobile, DevOps, machine learning, and open source, focused on real skills rather than slides.",
            },
            {
              title: "Hackathons",
              tag: "Smart India Hackathon",
              description:
                "Point Blank organizes the internal Smart India Hackathon annually, with consistent national qualifications, finals, and wins.",
            },
            {
              title: "Open Source",
              tag: "GSoC",
              description:
                "Our open-source community has produced GSoC contributors, LFX scholars, and GitHub Externs across global organizations.",
            },
            {
              title: "Cybersecurity",
              tag: "PBCTF",
              description:
                "We run hands-on cybersecurity sessions and host PBCTF, an in-house Capture The Flag event with wide campus participation.",
            },
            {
              title: "Innovation",
              tag: "Research",
              description:
                "From hardware prototypes to published research, we foster a culture of experimentation and innovation beyond the classroom.",
            },
          ].map(({ title, tag, description }, i) => (
            <div
              key={i}
              className="bg-pbcard rounded-3xl overflow-hidden border border-white/16 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={connectImg}
                  alt={title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="p-5 flex flex-col gap-2 flex-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-bold text-white text-base">{title}</h3>
                  <span className="text-pbgreen text-xs border border-pbgreen/20 p-2 rounded-xl">
                    {tag}
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="founding-members"
        className="bg-pbgray text-white py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-white">
              Our <span className="text-pbgreen">Founding</span> Members
            </h2>
          </div>
          <p className="text-center text-white/70 text-sm max-w-xl mx-auto mb-12">
            Point Blank is a passion project, born from a shared excitement to
            build and lead a platform for like-minded, driven students to come
            together and learn from each other.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mx-auto">
            {[
              {
                name: "Mohit Agarwal",
                bio: "Mohit, SDE2 at Glance, is the driving force behind Point Blank's Competitive Programming culture. He has won several contests, including the Nokia Collegiate Code Rally, and qualified for ACM-ICPC Regionals.",
              },
              {
                name: "Soumya Pattanayak",
                bio: "A top coder at Point Blank, Soumya has worked at Amazon and Verse Innovation. He's an ACM-ICPC regionalist known for his problem-solving skills and innovative projects.",
              },
              {
                name: "Ashutosh Pandey",
                bio: "Ashutosh, Compiler Engineer at AMD, excelled in Open Source and Hackathons. As a student, he did GSoC with Arduino, won the Smart India Hackathon, and mentored students for prestigious programs.",
              },
            ].map(({ name, bio }, i) => (
              <div
                key={i}
                className="bg-pbcard border border-white/16 rounded-3xl p-5 flex flex-col items-center text-center gap-4"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={connectImg}
                    alt={name}
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
                <span className="px-4 py-1 rounded-full border border-gray-900 bg-pbsurface text-pbgreen text-sm font-medium">
                  {name}
                </span>
                <p className="text-white/70 text-xs leading-relaxed pb-2">
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section id="stay-connected" className="bg-pbdark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Stay <span className="text-pbgreen">Connected</span>
            </h2>
          </div>
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
              <Link
                key={i}
                className="bg-pbcard rounded-2xl border border-white/16 p-5 flex flex-col gap-3 cursor-pointer hover:border-pbgreen/30 transition-colors"
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
