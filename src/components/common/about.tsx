'use client';

import Link from 'next/link';
import MyAge from 'src/components/common/age';
import { buttonVariants } from 'src/components/ui/button';
import { cn } from 'src/lib/utils';
import CountUpNumber from './countnumber';

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
            <h1 className="mb-4 mt-10 text-center text-sm font-semibold uppercase tracking-[.3em] text-slate-400 ">
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
              target="_blank"
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
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                    <p className="">Projects</p>
                  </dt>
                  <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                    <p className="">+</p>
                    <CountUpNumber duration={5000} endValue={1000} />
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                    <p className="">Design Creatives</p>
                  </dt>
                  <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                    <p className="">+</p>
                    <CountUpNumber duration={5000} endValue={10000} />
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="ml-6 text-sm font-semibold uppercase tracking-[.3em] text-slate-400">
                    <p className="">Brands</p>
                  </dt>
                  <dd className="order-first flex text-6xl font-extrabold tracking-tight text-aired">
                    <p className="">+</p>
                    <CountUpNumber duration={5000} endValue={100} />
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
