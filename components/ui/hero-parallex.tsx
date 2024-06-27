"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { FlipWords } from "./fip-words";
import { cn } from "@/utiles/cn";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh]  overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl z-40 relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className=" text-2xl md:text-7xl font-bold text-white">
        Hi , I am <br />
        <span className="text-emerald-600">Ashutosh Sharma</span>
      </h1>

      <h5 className="text-2xl mx-1 text-white mt-7">
        I am a{" "}
        <FlipWords
         
          words={[
            "Web-Developer",
            "Learner",
            "Problem-Solver",
            "Freelancer",
            "MERN-Stack-Developer",
            "React-Developer",
            "Software-developer",
          ]}
        />
      </h5>

      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        I'm passionate about crafting digital solutions. As a dedicated web
        developer, I thrive on creating impactful and user-centric online
        experiences. I'm deeply engaged in the process of building innovative
        and accessible solutions. Currently, I'm honing my skills and
        contributing to the world of technology.
      </p>
      <button className="inline-flex h-12 mt-5  animate-shimmer items-center justify-center rounded-md border border-slate-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400  hover:scale-105 transition-all ease  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
        <a href="">Resume</a>
      </button>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  className
}: {
  product: {
    title: string;
    link: string;
    thumbnail: ImageData;
  };
  translate: MotionValue<number>;
  className:string
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={cn('group/product z-40 h-full aspect-video w-[30rem] relative flex-shrink-0',className)}
    >
      <motion.div className="block group-hover/product:shadow-2xl w-full ">
        <Image
          src={product.thumbnail}
          height="300"
          width="300"
          className="object-contain mx-auto object-left-top  brightness-105 absolute h-full w-full inset-0"
          alt={product.title}
        />
      </motion.div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute capitalize bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
