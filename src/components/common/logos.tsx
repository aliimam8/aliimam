import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function Logos() {
  return (
    <div className="lg:mt-20">
      <h1 className="my-10 uppercase font-semibold tracking-[.3em] text-slate-400 text-sm text-center ">
        Worked with Brands Like
      </h1>
      <div>
        <Marquee direction="left" speed={40} delay={0} pauseOnHover={true}>
          <div className="w-full lg:mt-6 relative mx-auto image_wrapper justify-start overflow-hidden gap-6 sm:gap-10 flex mb-10 ">
            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c1-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c1-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c2-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c2-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c3-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c3-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c5-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c5-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c7-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c7-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c8-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c8-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden mt-2">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c10-2.png"
                />
              </span>
              <span className="hidden dark:block mt-2">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c10-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={120}
                  width={120}
                  src="/logos/c4-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={120}
                  width={120}
                  src="/logos/c4-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c15-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c15-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c12-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c12-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c18-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c18-1.png"
                />
              </span>
            </Link>

            <Link href="/" passHref>
              <span className="block dark:hidden">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c26-2.png"
                />
              </span>
              <span className="hidden dark:block">
                <Image
                  alt="Ali Imam"
                  height={100}
                  width={100}
                  src="/logos/c26-1.png"
                />
              </span>
            </Link>
          </div>
        </Marquee>
      </div>
    </div>
  );
}