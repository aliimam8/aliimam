import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';

export default function Logos() {

  return (
    <div className="mt-6 [mask-image:radial-gradient(10rem_24rem_at_center,white,transparent)] md:[mask-image:radial-gradient(22rem_24rem_at_center,white,transparent)]">
      <Marquee direction="left" speed={40} delay={0} pauseOnHover={true}>
        <div className="image_wrapper relative mx-auto flex w-full justify-start gap-8 overflow-hidden">
          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c1-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c1-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c2-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c2-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c3-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c3-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c5-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c5-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c7-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c7-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c8-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c8-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="mt-2 block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c10-2.png" />
            </span>
            <span className="mt-2 hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c10-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={120} width={120} src="/logos/c4-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={120} width={120} src="/logos/c4-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c15-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c15-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c12-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c12-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c18-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c18-1.png" />
            </span>
          </Link>

          <Link href="/" passHref>
            <span className="block dark:hidden">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c26-2.png" />
            </span>
            <span className="hidden dark:block">
              <Image alt="Ali Imam" height={100} width={100} src="/logos/c26-1.png" />
            </span>
          </Link>
        </div>
      </Marquee>
    </div>
  );
}

