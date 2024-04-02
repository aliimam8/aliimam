import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, DoorClosed, Home, Settings } from "lucide-react";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";
import { Icons } from "@/components/icons";

export const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="mr-2 relative h-7 w-7 rounded-full">
          <Avatar className="h-7 w-7 rounded-full">
            <AvatarImage className="object-cover bg-aired w-full h-full" src={image} alt="" />
            <AvatarFallback>Ali</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between space-y-4 items-center"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4" />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <LogoutLink>
            Logout{" "}
            <span>
              <DoorClosed className="w-4 h-4" />
            </span>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function LoginNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="mr-2 relative h-6 w-6 bg-aired rounded-full">
         
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end" forceMount>
      <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <LoginLink>
            Login
            <Icons.login className="w-5" />
          </LoginLink>
          </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="w-full flex justify-between items-center"
          asChild
        >
          <RegisterLink>
            Registration
            <Icons.logout className="w-5" />
          </RegisterLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}