"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarContent,
} from "@/components/ui/navbar";
import { useSidebar } from "@/components/ui/sidebar";
import { ThemeDropdown } from "@/components/util/theme-dropdown";

import {
  ChartNetworkIcon,
  SidebarCloseIcon,
  SidebarOpenIcon,
} from "lucide-react";

export function Navbar() {
  const { open: sidebarIsOpen, toggleSidebar } = useSidebar();

  return (
    <NavbarComponent>
      <NavbarContent>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          {sidebarIsOpen ? (
            <SidebarCloseIcon className="size-6" />
          ) : (
            <SidebarOpenIcon className="size-6" />
          )}
        </Button>

        <Button variant="link" className="text-xl hover:no-underline">
          <ChartNetworkIcon className="size-6" />

          <Link href="/">FinUp</Link>
        </Button>

        <div className="ml-auto">
          <ThemeDropdown />
        </div>
      </NavbarContent>
    </NavbarComponent>
  );
}
