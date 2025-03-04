import Link from "next/link";

import { ChartNetworkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar, NavbarContent } from "@/components/ui/navbar";
import { Section } from "@/components/ui/section";
import { BackgroundPattern } from "@/components/util/background-pattern";
import { ThemeDropdown } from "@/components/util/theme-dropdown";

import { LoginForm } from "./_form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar className="fixed top-0">
        <NavbarContent>
          <Button variant="link" className="text-xl hover:no-underline">
            <ChartNetworkIcon className="size-6" />

            <Link href="/">FinUp</Link>
          </Button>

          <ThemeDropdown />
        </NavbarContent>
      </Navbar>

      <Section className="flex grow items-center justify-center" asChild>
        <main>
          <LoginForm />
        </main>
      </Section>

      <BackgroundPattern />
    </div>
  );
}
