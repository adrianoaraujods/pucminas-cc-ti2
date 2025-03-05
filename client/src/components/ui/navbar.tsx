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
        "bg-background sticky top-0 z-50 flex h-[var(--navbar-height)] w-full items-center justify-center border-b py-2",
        className
      )}
      {...props}
    />
  );
}

function NavbarContent({
  className,
  maxWidth = "xl",
  ...props
}: React.ComponentProps<typeof Section>) {
  return (
    <Section
      data-slot="navbar-content"
      maxWidth={maxWidth}
      className={cn("flex items-center gap-2 py-0", className)}
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
