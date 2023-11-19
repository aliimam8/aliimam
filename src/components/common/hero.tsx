"use client"; // this is a client component
import Link from "next/link";
import { useEffect } from "react";
import { Icons } from "src/components/icons";
import { buttonVariants } from "src/components/ui/button";
import { cn } from "src/lib/utils";
import "src/styles/text.css";
import { renderCanvas } from "./render";

const Hero = () => {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="flex mt-20 flex-col md:mt-40 text-center items-center justify-center animate-fadeIn animation-delay-8 ">
        <div className="sm:mb-8 mt-10 sm:mt-10 z-10 sm:justify-center">
          <div className="relative flex whitespace-nowrap rounded-full items-center text-slate-600 dark:text-slate-400 px-3 py-1 text-xs leading-6 bg-white dark:bg-black ring-1 ring-slate-200 dark:ring-slate-800">
            Coming Soon{" "}
            <Icons.youTube className="p-1 h-5 text-aired"/>{" "}
            Youtube Videos.
            <a
              href="https://www.youtube.com/channel/UCZYm9jYmDesAGzbyFacUSfA"
              rel="noreferrer"
              target="_blank"
              className="ml-1 font-semibold hover:text-aired"
            >
              <span className="absolute inset-0 " aria-hidden="true" />
              Subscribe <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="md:mt-6 mt-4 md:w-50% mb-10 ">
          <div className="">
            <h1 className="py-2 text-6xl flex flex-col lg:flex-row md:flex-col text-center sm:text-8xl leading-none select-none tracking-tightest font-extrabold">
              <span
                data-content="Coffee."
                className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 sm:before:top-0  before:px-2 before:bottom-4 before:left-0  before:animate-gradient-background-1"
              >
                <span className="px-2 sm:px-5 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
                  Coffee.
                </span>
              </span>
              <span
                data-content="Think."
                className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 sm:before:top-0 before:px-2 before:bottom-0 before:left-0 before:animate-gradient-background-2"
              >
                <span className="px-2 sm:px-5 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
                  Think.
                </span>
              </span>
              <span
                data-content="Create."
                className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 sm:before:top-0 before:px-2 before:bottom-1 before:left-0 before:animate-gradient-background-3"
              >
                <span className="px-2 sm:px-5 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
                  Create.
                </span>
              </span>
            </h1>
          </div>

          <h1 className="text-xl sm:text-3xl font-semibold md:mt-0 md:text-4xl">
            Hello and welcome! I&#39;m{" "}
            <span className="font-bold text-aired">Ali </span>
          </h1>

          <p className="text-lg mx-auto max-w-2xl px-4 text-slate-600 dark:text-slate-400 sm:px-6 md:max-w-4xl mt-2 mb-16 md:text-1xl">
            I&#39;m an{" "}
            <span className="font-regular">Art Director </span>
            looking for opportunities as a Level Artist. I have a passion for
            Graphic Design, UI UX, 3D, Animation and tools like{" "}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              className={cn(
                buttonVariants({
                  variant: "aibutton",
                  size: "lg",
                })
              )}
            >
              Know More
              <span className="sr-only">Buy now</span>
            </Link>
          </div>
        </div>
      </div>

      
      <canvas
        className="bg-skin-base mx-auto pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Hero;
