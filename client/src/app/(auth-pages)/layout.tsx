import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Navbar, NavbarContent } from "@/components/ui/navbar";
import { Section } from "@/components/ui/section";
import { BackgroundPattern } from "@/components/util/background-pattern";
import { ThemeDropdown } from "@/components/util/theme-dropdown";

import { ChartNetworkIcon } from "lucide-react";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className="fixed top-0">
        <NavbarContent>
          <Button variant="link" className="text-xl hover:no-underline">
            <ChartNetworkIcon className="size-6" />

            <Link href="/">FinUp</Link>
          </Button>

          <div className="ml-auto">
            <ThemeDropdown />
          </div>
        </NavbarContent>
      </Navbar>

      <Section
        className="flex min-h-svh grow items-center justify-center"
        asChild
      >
        <main>{children}</main>
      </Section>

      <BackgroundPattern />
    </>
  );
}
