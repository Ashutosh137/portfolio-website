"use client";
import { cn } from "@/utiles/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Children, useState } from "react";
import { GlareCard } from "./glard-card";
import { title } from "process";
import { FlipWords } from "./fip-words";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Meteors } from "./card";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    github_link: string;
    live_link: string;
    tech: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 auto-row-[12rem]  py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <section
          key={item?.live_link}
          className="relative    block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <GlareCard className="h-96 overflow-y-scroll text-white ">
            <Card className="mx-auto ">
              <CardTitle className="text-2xl pb-2 capitalize text-center">
                {item.title}
              </CardTitle>
              <ul className="flex space-x-2 capitalize flex-wrap w-full my-2 justify-center">
                {item.tech.map((tech, index) => {
                  return (
                    <Card_list key={index} className="capitalize">
                      {tech}
                    </Card_list>
                  );
                })}
              </ul>
              <CardDescription className="">{item.description}</CardDescription>

              <div className=" mt-8 flex justify-center space-x-6">
                <Card_button link={item.github_link}>github</Card_button>
                <Card_button link={item.live_link}>link</Card_button>
              </div>
            </Card>
          </GlareCard>
        </section>
      ))}
    </div>
  );
};

export function Card_button({
  link,
  children,
}: {
  className?: string;
  link: string;
  children: React.ReactNode;
}) {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl capitalize  shadow-zinc-900 rounded-full p-px font-semibold leading-6  text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className=" relative px-8 py-2 flex space-x-2  items-center z-10 rounded-full bg-zinc-950  ring-1 ring-white/10 ">
        <a target="_blank" href={link}>
          {children}
        </a>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}
export default function Card_list({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <HoverBorderGradient className="px-3 py-1 capitalize">
      {children}
    </HoverBorderGradient>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden border border-transparent  z-20",
        className
      )}
    >
      <Meteors />

      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide my-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-400   tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
