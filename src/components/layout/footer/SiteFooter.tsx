/* eslint-disable unicorn/filename-case */
import Link from "next/link";
import { Icons } from "src/components/icons";
import { Coffee } from "./coffee";
import ThemeToogle from "./theme";

const Underline = `hover:-translate-y-1 transition-transform text-slate-600 hover:text-black hover:dark:text-white dark:text-slate-400 `;

export interface Menus {
  text: string;
  href: string;
  target: string;
}

export const items: Menus[] = [
  {
    text: "About AI",
    href: "/about",
    target: "",
  },
  {
    text: "Gallery",
    href: "/gallery",
    target: "",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
    target: "",
  },
  {
    text: "Products",
    href: "/products",
    target: "",
  },
  {
    text: "Contact",
    href: "/contact",
    target: "",
  },
  {
    text: "Terms",
    href: "/terms",
    target: "",
  },
  {
    text: "Privacy",
    href: "/privacy",
    target: "",
  },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-20 px-2 sm:px-4 border-aired/25 border-t">
      <div className="flex mt-10 flex-wrap justify-center gap-8 ">
        <Link href="/">
          <Icons.aiLogo className="w-10" />
        </Link>
      </div>
      <div className="flex mt-10 flex-wrap justify-center gap-8 ">
        <Coffee />
      </div>

      <div className="flex flex-wrap gap-y-4 p-8 gap-x-8 justify-center">
        {items.map((Menus) => (
          <figure key={Menus.text}>
            <div className="text-sm text-slate-600 hover:text-black hover:dark:text-white dark:text-slate-400 ">
              <span className="">
                <Link href={Menus.href}>{Menus.text}</Link>
              </span>
            </div>
          </figure>
        ))}
        <Link
          href="/Ali-CV.pdf"
          target="_blank"
          className="text-slate-600 hover:text-black hover:dark:text-white dark:text-slate-400"
          download={true}
        >
          <p className="text-sm">Download CV</p>
        </Link>
      </div>

      <div className="flex flex-wrap px-8 justify-center gap-8 gap-y-4">
        <Link
          href="tel:+919650133705"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.phone className="w-6" />
        </Link>
        <Link
          href="mailto:aliimam.original@gmail.com"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.mail className="w-6" />
        </Link>
        <Link
          href="https://wa.me/message/6XOEA2NCD5OFB1"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.whatsapp className="w-6" />
        </Link>
        <Link
          href="https://www.instagram.com/aliimam.in/"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.insta className="w-6" />
        </Link>
        <Link
          href="https://www.facebook.com/ali.imam.1804"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.fb className="w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ali-imam-579396180/"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.Linked className="w-5 mt-1" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCZYm9jYmDesAGzbyFacUSfA"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.youTube className="w-6 h-7" />
        </Link>
        <Link
          href="https://twitter.com/aiimamoriginal"
          rel="noreferrer"
          target="_blank"
          className={Underline}
        >
          <Icons.TweetX className="w-5 mt-1" />
        </Link>
      </div>

      <ThemeToogle />

      <div className="mx-auto mt-10 mb-10 flex md:max-w-5xl dark:bg-zinc-950  flex-col text-center text-amber-900 justify-between">
        <div className="flex gap-1 flex-row items-center justify-center text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <span className="animate-pulse text-aired">❤</span>
          <span> by </span>
          <span className="hover:text-aired text-black dark:text-white font-bold cursor-pointer">
            Ali Imam<a href="/" className="hover:underline "></a>
          </span>
        </div>
      </div>
    </footer>
  );
}
