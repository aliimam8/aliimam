'use client';

import Link from 'next/link';
import MyAge from 'src/components/common/age';
import { buttonVariants } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';

import { Icons } from 'src/components/icons';

const skills = [
  { skill: 'Graphic Design' },
  { skill: '3D Modeling' },
  { skill: 'Logo & Units' },
  { skill: 'Storyboard' },
  { skill: 'Packaging' },
  { skill: 'Video Editing' },
  { skill: 'Photography' },
  { skill: 'Motion Graphic' },
  { skill: 'UI-UX' },
  { skill: 'Website Develop' },
  { skill: 'Mockups' },
  { skill: 'Animations' },
  { skill: 'eBooks' },
  { skill: 'Brochures' }
];

const stats = [
  { id: 1, name: 'Projects', value: '+1000' },
  { id: 2, name: 'Design Creatives', value: '+10,000' },
  { id: 3, name: 'Brands', value: '+100' }
];

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-black hover:dark:text-white dark:text-slate-400 `;

const About = () => {
  return (
    <section id="about">
      <div className="animation-delay-8 my-1 animate-fadeIn">
        <h1 className="text-center text-2xl font-bold sm:mb-10 sm:text-4xl">
          About Me
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-aired"></hr>
        </h1>

        <div className="items-center justify-center px-6 text-center align-top  md:flex-row">
          <div className="">
            <h1 className="my-10 text-center text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
              Get to know me!
            </h1>
            <p className="text-md">
              Hi, my name is
              <span className="font-bold text-aired">{' Ali Imam '}</span>
              and I am a <span className="font-bold">{'highly ambitious'}</span>,
              <span className="font-bold">{' self-motivated'}</span>, and
              <span className="font-bold">{' driven'}</span>
              <span className="font-bold text-aired">{' Art Director '}</span>
              based in New Delhi, India.
            </p>
            <br />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              I believe that you should never stop growing and that&#39;s what I strive to do, I
              have a passion for graphic design and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am always open to new
              opportunities.
            </p>
          </div>
          <h1 className="mt-6 text-center text-lg font-bold">My Age</h1>
          <MyAge />

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/Ali-CV.pdf"
              download={true}
              className={cn(
                buttonVariants({
                  variant: 'aibutton',
                  size: 'md'
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
                  variant: 'aibutton',
                  size: 'md'
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
                    className="m-1 rounded border border-slate-200 px-2 py-1 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400"
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
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
                    <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
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
