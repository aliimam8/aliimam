'use client'

import React from 'react'
import Marquee from 'react-fast-marquee';
import { Icons } from 'src/components/icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Avegra } from '@/app/fonts';
import Link from 'next/link';
import { AIExp } from 'src/components/common/exp';
import { Particles } from "src/components/ui/particles";

const Underline = `hover:-translate-y-1 border border-slate-100 dark:border-slate-900 rounded-xl p-2.5 transition-transform text-slate-600 hover:border-slate-200 dark:hover:border-slate-800 hover:text-black hover:dark:text-white dark:text-slate-400 `;


export const Graaadients = () => {
    return (
        <>
            <Link href="/products/graaadients">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <Image
                                src="/images/products/p-grad.jpg"
                                alt="Your Image"
                                height={300}
                                width={500}
                                className="h-[70px] rounded-lg object-cover "
                            />
                            <h1 className={cn(
                                Avegra.className,
                                'absolute mt-2 text-4xl text-white'
                            )}>
                                Graaadients
                            </h1>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            Free Download
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={50}
                            />
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const PeachFuzz = () => {
    return (
        <>
            <Link href="/colors">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <Image
                                src="/images/products/peach-fuzz.jpg"
                                alt="Your Image"
                                height={300}
                                width={500}
                                className="h-[70px] rounded-lg object-cover "
                            />
                            <h1 className={cn(
                                Avegra.className,
                                'absolute mt-2 text-4xl text-white'
                            )}>
                                Peach Fuzz
                            </h1>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={50}
                            />
                            The Colors
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const AICV = () => {
    return (
        <>
            <Link href="/Ali-CV.pdf"
                download={true}
                target="_blank">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-2 py-[13px] items-center justify-center'>
                                <Icons.download className='h-4 w-4 text-slate-400 dark:slate-600' />
                                <p className='text-lg text-aired font-semibold'>Resume AI</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={100}
                            />
                            Download
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const Insta = () => {
    return (
        <>
            <Link href="https://www.instagram.com/aliimam.in/"
                download={true}
                target="_blank">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-2 py-[13px] items-center justify-center'>
                                <Icons.insta className='h-4 w-4 text-slate-400 dark:slate-600' />
                                <p className='text-lg text-aired font-semibold'>aliimam.in</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={100}
                            />
                            Instagram
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export const Exp = () => {
    return (
        <>
            <Link href="/about">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative p-2 py-4 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>
                            <div className='flex gap-1 py-[9px] items-center justify-center'>
                                <p className='text-slate-400 dark:slate-600 text-center text-xs'>Experience</p>
                                <AIExp />
                                <p className='text-slate-400 dark:slate-600 text-center text-xs'>Years</p>
                            </div>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={50}
                            />
                            About Me
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}


export const Tools = () => {
    return (
        <>
            <Link href="/about">
                <div className='flex gap-2 w-full'>
                    <div className='group w-full relative py-5 overflow-hidden bg-white dark:bg-black rounded-2xl border border-slate-100 dark:border-slate-900 transition-colors duration-150 hover:bg-accent'>
                        <div className='flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-24 group-focus:-translate-y-24'>

                            <Marquee direction="right" speed={40} delay={0} pauseOnHover={true}>
                                <div className="flex flex-wrap items-center justify-center gap-3 px-2">
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
                            </Marquee>
                        </div>
                        <span className='absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-24 items-center gap-1 text-sm font-semibold uppercase tracking-[.3em] opacity-0 transition duration-300 group-hover:-translate-y-1/2 group-hover:opacity-100 group-focus:-translate-y-1/2 group-focus:opacity-100'>
                            <Particles
                                className="absolute -inset-20 -z-10"
                                quantity={50}
                            />
                            Tools
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}
