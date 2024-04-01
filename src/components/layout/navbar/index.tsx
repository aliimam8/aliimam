
import { Suspense } from 'react';
import SiteHeader from './mobile';
import { NavMenu } from './navmenu';
import Link from 'next/link';
import { Icons } from 'src/components/icons';
import CommandMenu from './search';
import { ThemeToggle } from './themetoggle';
import { Separator } from 'src/components/ui/seperator';
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import { Button } from '@/components/ui/button';

export async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-aired/25 bg-white/80 backdrop-blur-md backdrop-filter dark:bg-black/80">

      <div className="mx-auto flex items-center md:px-20">
        <div className="mx-auto flex h-14 max-w-5xl flex-1 items-center px-2">
          <Link href="/" className="flex items-center justify-center space-x-4 lg:flex">
            <span className="sr-only">Your Company</span>
            <Icons.aiLogo className="w-7" />
            <span className="sr-only">Home</span>
          </Link>
          <NavMenu />
          <div className="mx-auto flex h-12 flex-1 items-center justify-end gap-3 px-12 md:px-0">

            <ThemeToggle />
            <div className="flex items-center">

                {(await isAuthenticated()) ? (
                  <UserNav
                    email={user?.email as string}
                    image={user?.picture as string}
                    name={user?.given_name as string}
                  />
                ) : (
                  <div className="flex items-center gap-x-3">
                    <LoginLink>
                    <Icons.login className="w-5" />
                    </LoginLink>

                    <RegisterLink>
                    <Icons.logout className="w-5" />
                    </RegisterLink>
                  </div>
                )}
              </div>
            <Separator orientation="vertical" className="mr-2 h-6 bg-slate-400 dark:bg-slate-600" />
            <div className="pr-2 text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white">
              <CommandMenu />
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex flex-1 items-center">
        <SiteHeader />
      </div>
    </nav>
  );
}
