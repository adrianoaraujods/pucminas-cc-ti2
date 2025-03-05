import { redirect } from "next/navigation";

import { user } from "@/lib/mock-db"; // remove

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Navbar } from "./_navbar";
import { Sidebar } from "./_sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  if (!user.id) redirect("/login");

  return (
    <SidebarProvider className="flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar user={user} />

        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
