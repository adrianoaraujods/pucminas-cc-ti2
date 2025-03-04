import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { NavigationLink } from "@/lib/config";

import { Section } from "./section";

function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        "bg-background flex w-full items-center justify-center border-b py-2",
        className
      )}
      {...props}
    />
  );
}

function NavbarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <Section
      data-slot="navbar-content"
      className={cn("flex w-full max-w-7xl justify-between p-0", className)}
      {...props}
    />
  );
}

function NavbarNavigation({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navbar-navigation"
      className={cn("", className)}
      {...props}
    />
  );
}

function NavbarLinks({
  className,
  links,
  ...props
}: Omit<React.ComponentProps<"ul"> & { links: NavigationLink[] }, "children">) {
  return (
    <ul data-slot="navbar-links" className={cn("", className)} {...props}>
      {links.map(({ href, title }) => (
        <li key={href}>
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export { Navbar, NavbarContent, NavbarNavigation, NavbarLinks };
