"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import background from "@/public/space.jpg";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { MdCall } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [mnubar, setmnubar] = useState<boolean>(true);
  return (
    <Fragment>
      <div className="fixed left-0  top-0 w-full h-full -z-20">
        <Image
          src={background}
          alt="background image"
          className="w-full h-screen"
        />
      </div>
      <nav className="flex fixed z-50 top-0 left-0 text-base justify-around w-full my-8 px-5">
        <div className="md:hidden mr-auto">
          <i
            className={`${
              !mnubar ? "hidden" : "block"
            } text-3xl cursor-pointer`}
            onClick={() => setmnubar((prev) => !prev)}
          >
            <CiMenuFries />
          </i>
          <i
            className={`${
              !mnubar ? "block" : "hidden"
            } text-3xl cursor-pointer`}
            onClick={() => setmnubar((prev) => !prev)}
          >
            <IoMdClose />
          </i>
        </div>

        <div className="fixed text-white inset-0 my-auto w-20 h-screen  flex flex-col justify-center align-middle">
          <i className="m-1 text-4xl">
            <FaGithub />
          </i>
          <i className="m-1 text-4xl">
            <FaLinkedinIn />
          </i>
          <i className="m-1 text-4xl">
            <MdMail />
          </i>
          <i className="m-1 text-4xl">
            <MdCall />
          </i>
        </div>

        {!mnubar && (
          <nav className="absolute z-50 flex mt-20 h-full text-neutral-400 flex-col left-0 top-0 bg-black w-40 h-full backdrop-blur-sm">
            <div className="px-5 py-2 rounded-md transition-all ease-in-out hover:scale-110 ">
              <Link
                className=""
                onClick={() => {
                  setmnubar(!mnubar);
                }}
                href="/#about"
              >
                About
              </Link>
            </div>
            <div className="px-5 py-2 rounded-md transition-all ease-in-out hover:scale-110 ">
              <Link
                onClick={() => {
                  setmnubar(!mnubar);
                }}
                href="/#projects"
              >
                Projects
              </Link>
            </div>
            <div className="px-5 py-2  rounded-md transition-all ease-in-out hover:scale-110 ">
              <Link
                onClick={() => {
                  setmnubar(!mnubar);
                }}
                href="/#skills"
              >
                Skills
              </Link>
            </div>
            <div className="px-5 py-2 rounded-md transition-all ease-in-out hover:scale-110 ">
              <Link
                onClick={() => {
                  setmnubar(!mnubar);
                }}
                href="/#contact"
              >
                Contact Me
              </Link>
            </div>
          </nav>
        )}
        <ul className="justify-between backdrop-blur-xl hidden sm:flex ml-auto space-x-5">
          <div className="inline-flex hover:scale-105 transition-all ease h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/">Home</Link>
          </div>
          <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400  hover:scale-105 transition-all ease  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            <Link href="/#projects">Projects</Link>
          </div>
          <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400  hover:scale-105 transition-all ease  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            <Link href="/#skills">Skills</Link>
          </div>
          <div className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400  hover:scale-105 transition-all ease  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            <Link href="/#contact">education </Link>
          </div>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navbar;
