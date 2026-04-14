"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import connect from "@/public/images/connect.webp";
import learn from "@/public/images/learn.webp";
import bored from "@/public/images/bored.webp";

type Card = {
  title: React.ReactNode;
  description: string;
  image: StaticImageData;
  imagePosition: "left" | "right";
};

const cards: Card[] = [
  {
    title: (
      <>
        Connect with other <span className="text-pbgreen">Coders</span>
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisl, non nonummy felis. Sed scelerisque nisl, non nonummy felis. Praesent sapien aliquis fermentum, at pulvinar. Cras vehicula, sapien cun commodo tristique, arcu erat suscipit massa, et adipisalin pula lorem quis elit. Vivamus tempor neque ut ant.",
    image: connect,
    imagePosition: "right",
  },
  {
    title: (
      <>
        Want to learn <span className="text-pbgreen">something</span> new?
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisl, non nonummy felis. Sed scelerisque nisl, non nonummy felis. Praesent sapien aliquis fermentum, at pulvinar. Cras vehicula, sapien cun commodo tristique, arcu erat suscipit massa, et adipisalin pula lorem quis elit.",
    image: learn,
    imagePosition: "left",
  },
  {
    title: (
      <>
        Feeling <span className="text-pbgreen">bored?</span>
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nisl, non nonummy felis. Sed scelerisque nisl, non nonummy felis. Praesent sapien aliquis fermentum, at pulvinar. Cras vehicula, sapien cun commodo tristique, arcu erat suscipit massa, et adipisalin pula lorem quis elit.",
    image: bored,
    imagePosition: "right",
  },
];

const StickyCard = ({
  i,
  card,
  progress,
  range,
  targetScale,
  isLast,
}: {
  i: number;
  card: Card;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isLast: boolean;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const blurRange: [number, number] = [range[0] + 1 / cards.length, 1];
  const blurAmount = useTransform(progress, isLast ? range : blurRange, [
    0,
    isLast ? 0 : 5,
  ]);
  const blur = useTransform(blurAmount, (v) => `blur(${v}px)`);

  const isLCP = card.image === bored;

  const imageEl = (
    <div className="relative w-full h-full min-h-52 rounded-2xl overflow-hidden">
      <Image
        src={card.image}
        alt=""
        className="inset-0 w-full h-full object-cover grayscale-70"
        loading={isLCP ? "eager" : "lazy"}
        draggable={false}
      />
    </div>
  );

  const textEl = (
    <div className="flex flex-col justify-center h-full px-2">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
        {card.title}
      </h2>
      <p className="text-pbtext text-sm sm:text-base leading-relaxed">
        {card.description}
      </p>
    </div>
  );

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center h-screen"
    >
      <motion.div
        style={{
          scale,
          filter: blur,
          top: `calc(-5vh + ${i * 24}px)`,
        }}
        className="relative w-full max-w-5xl mx-4 sm:mx-8 bg-pbgray rounded-3xl overflow-hidden shadow-2xl"
      >
        <div
          className={`flex flex-col ${
            card.imagePosition === "left"
              ? "md:flex-row-reverse"
              : "md:flex-row"
          } gap-0`}
        >
          <div className="flex-1 p-8 sm:p-10 lg:p-14">{textEl}</div>

          <div className="flex-1 relative min-h-64 md:min-h-80">{imageEl}</div>
        </div>
      </motion.div>
    </div>
  );
};

export const CardStack = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div
        ref={container}
        style={{ height: `${(cards.length + 1) * 100}vh` }}
        className="relative w-full bg-pbpages"
      >
        {cards.map((card, i) => {
          const targetScale = Math.max(0.75, 1 - (cards.length - i - 1) * 0.08);
          return (
            <StickyCard
              key={i}
              i={i}
              card={card}
              progress={scrollYProgress}
              range={[i / cards.length, 1]}
              targetScale={targetScale}
              isLast={i === cards.length - 1}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
};
