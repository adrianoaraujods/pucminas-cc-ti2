"use client";

import * as React from "react";

import { User } from "@/schemas/user";

import { Button } from "@/components/ui/button";
import {
  Sidebar as SidebarComponet,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { LogOutIcon, UserCircle2Icon } from "lucide-react";

export function Sidebar({
  user,
  ...props
}: React.ComponentProps<typeof SidebarComponet> & { user: User }) {
  return (
    <SidebarComponet
      className="top-[var(--navbar-height)] !h-[calc(100svh-var(--navbar-height))]"
      {...props}
    >
      <SidebarContent></SidebarContent>
      <SidebarFooter className="flex-row pb-4 pl-4">
        <UserCircle2Icon className="!size-8 stroke-[1.5]" />

        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.name}</span>
          <span className="truncate text-xs">{user.email}</span>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // TODO, logout user
          }}
        >
          <LogOutIcon className="size-6" />
        </Button>
      </SidebarFooter>
    </SidebarComponet>
  );
}
