"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/layout/navbar/UserNav";

export function DashboardNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex justify-center items-start gap-3">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "flex items-center rounded-full px-6 py-3 text-sm font-medium hover:bg-aired hover:text-white dark:hover:bg-aired dark:hover:text-white",
              pathname === item.href ? "bg-aired text-white" : "bg-slate-100 dark:bg-slate-900"
            )}
          >
            <item.icon className="mr-2 h-4 w-4 text-primary" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
