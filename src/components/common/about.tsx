"use client";

import Link from "next/link";
import MyAge from "src/components/common/age";
import { buttonVariants } from "src/components/ui/button";
import { cn } from "src/lib/utils";

import { Icons } from "src/components/icons";

const skills = [
  { skill: "Graphic Design" },
  { skill: "3D Modeling" },
  { skill: "Logo & Units" },
  { skill: "Storyboard" },
  { skill: "Packaging" },
  { skill: "Video Editing" },
  { skill: "Photography" },
  { skill: "Motion Graphic" },
  { skill: "UI-UX" },
  { skill: "Website Develop" },
  { skill: "Mockups" },
  { skill: "Animations" },
  { skill: "eBooks" },
  { skill: "Brochures" },
];

const stats = [
  { id: 1, name: "Projects", value: "+1000" },
  { id: 2, name: "Design Creatives", value: "+10,000" },
  { id: 3, name: "Brands", value: "+100" },
];

const About = () => {
  return (
    <section id="about">
      <div className="my-1 animate-fadeIn animation-delay-8">
        <h1 className="text-center font-bold text-2xl sm:text-4xl sm:mb-10">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-aired border-0 rounded"></hr>
        </h1>

        <div className="items-center text-center justify-center align-top  md:flex-row">
          <div className="">
            <h1 className="text-center text-1xl font-semi-bold mb-6">
              Get to know me!
            </h1>
            <p className="">
              Hi, my name is
              <span className="font-bold text-aired">{" Ali Imam "}</span>
              and I am a <span className="font-bold">{"highly ambitious"}</span>
              ,<span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span>
              <span className="font-bold text-aired">{" Art Director "}</span>
              based in New Delhi, India.
            </p>
            <br />
            <p className="text-slate-600 dark:text-slate-400">
              I believe that you should{" "}
              <span className="font-bold ">never stop growing</span> and
              that&#39;s what I strive to do, I have a passion for graphic
              design and a desire to always push the limits of what is possible.
              I am excited to see where my career takes me and am always open to
              new opportunities.
            </p>
          </div>
          <h1 className="text-center text-lg font-bold mt-6">My Age</h1>
          <MyAge />

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/Ali-CV.pdf"
              download={true}
              className={cn(
                buttonVariants({
                  variant: "aibutton",
                  size: "md",
                })
              )}
            >
              <span className="flex gap-2 px-1">
                <Icons.download size={17} />
                Download CV
              </span>
            </Link>
            <Link
              href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
              className={cn(
                buttonVariants({
                  variant: "aibutton",
                  size: "md",
                })
              )}
            >
              <span className="flex gap-2 px-1">
                <Icons.whatsapp className="w-4 " />
                Join Whatsapp
              </span>
            </Link>
          </div>

          <div className="pt-10">
            <div className="flex flex-wrap justify-center">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-xs px-2 py-1 m-1 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-800"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <div className="mx-auto max-w-7xl">
              <dl className="grid grid-cols-1 gap-y-10 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-2"
                  >
                    <dt className="text-sm ml-6 uppercase font-semibold tracking-[.3em] text-slate-400">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-6xl font-extrabold tracking-tight text-aired">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
