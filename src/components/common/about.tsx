'use client';

import Link from 'next/link';
import MyAge from 'src/components/common/age';
import { buttonVariants } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import CountUpNumber from './countnumber';

import { Icons } from 'src/components/icons';
import { AISeparator } from '../ui/seperator';

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

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-black hover:dark:text-white dark:text-slate-400 `;

const About = () => {
  return (

    <section id="about">
      <div className="relative py-8 w-full h-full border border-slate-200 dark:border-slate-800">
        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-aired text-white" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-aired text-white" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-aired text-white" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-aired text-white" />
        <div className="absolute -bottom-1.5 left-1/2 border border-slate-200 dark:border-slate-800 h-2.5 w-2.5 bg-black dark:bg-white text-white" />
        <div className="absolute -top-1.5 left-1/2 border border-slate-200 dark:border-slate-800 h-2.5 w-2.5 bg-black dark:bg-white text-white" />

        <div className="animation-delay-8 my-1">

          <div className="flex flex-col items-center">
            <h3 className="inline-flex items-baseline pb-1 mt-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600 dark:bg-clip-text dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-200 dark:to-slate-600">
              <span className="text-2xl md:text-4xl">Greetings!</span>
            </h3>
            <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-aired"></hr>
          </div>

          <div className=" items-center justify-center text-center align-top md:flex-row">
            <div className="mx-auto max-w-5xl px-8 mb-8">

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
              <p className="text-sm text-slate-600 dark:text-slate-400 grid gap-4">
                <span>
                  I am a visionary graphic designer on a mission to transform concepts into captivating visual
                  stories. With a passion for design that goes beyond pixels, I immerse myself in the
                  realm of creativity, bringing digital products and experiences to life.

                </span>
                <span>
                  As a design enthusiast, my journey is marked by a relentless pursuit of perfection,
                  particularly in the intricate world of pixel-perfect UI and the dynamic realm of graphic design.
                  My dedication to merging form with function is evident in every project I undertake.
                </span>

              </p>
            </div>
            <div className='relative my-8'>
              <Icons.add strokeWidth={1} className="absolute -top-3 -left-3 h-6 w-6 text-aired" />
              <Icons.add strokeWidth={1} className="absolute -top-3 -right-3 h-6 w-6 text-aired" />
              <AISeparator />
            </div>
            <h1 className="mt-6 text-center text-lg font-bold">My Age</h1>
            <MyAge />

            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/Ali-CV.pdf"
                download={true}
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: 'aibutton',
                    size: 'sm'
                  })
                )}
              >
                <span className="flex gap-2 px-1">
                  <Icons.download size={14} />
                  Download CV
                </span>
              </Link>
              <Link
                href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
                className={cn(
                  buttonVariants({
                    variant: 'aibutton',
                    size: 'sm'
                  })
                )}
              >
                <span className="flex gap-2 px-1">
                  <Icons.whatsapp className="w-3 " />
                  Join Whatsapp
                </span>
              </Link>
            </div>

            <h1 className="mb-4 mt-10 text-center text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
              Tools
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-2">
              <Link
                href="https://www.adobe.com/in/products/photoshop.html"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.photoshop strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.adobe.com/in/products/illustrator.html"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.illustrator strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.adobe.com/in/products/aftereffects.html"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.aftereffects className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.adobe.com/in/products/premiere.html"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.premierepro strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.maxon.net/en/cinema-4d"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.cinema4d className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.autodesk.in/products/maya/"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.maya className="h-5 w-5" />
              </Link>
              <Link
                href="https://code.visualstudio.com/"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.visualstudio className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.typescriptlang.org/"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <Icons.typescript className="h-5 w-5" />
              </Link>
              <Link href="https://react.dev/" rel="noreferrer" target="_blank" className={Underline}>
                <Icons.react className="h-5 w-5" />
              </Link>
            </div>

            <div className="pt-10 px-4">
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

            <div className='relative my-8'>
              <Icons.add strokeWidth={1} className="absolute -top-3 -left-3 h-6 w-6 text-aired" />
              <Icons.add strokeWidth={1} className="absolute -top-3 -right-3 h-6 w-6 text-aired" />
              <AISeparator />
            </div>

            <div className="mt-10">
              <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 gap-y-10 text-center lg:grid-cols-3">
                  <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                    <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                      <p className="">Projects</p>
                    </dt>
                    <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                      <p className="">+</p>
                      <CountUpNumber value={1000} />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                    <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                      <p className="">Design Creatives</p>
                    </dt>
                    <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                      <p className="">+</p>
                      <CountUpNumber value={10000} />
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                    <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                      <p className="">Brands</p>
                    </dt>
                    <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                      <p className="">+</p>
                      <CountUpNumber value={100} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
