import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <Card
      className={cn("flex w-full max-w-md flex-col gap-6", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-2xl">Criar conta</CardTitle>
        <CardDescription>
          Entre com seus dados abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" autoComplete="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Criar
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta?
            <Button
              variant="link"
              className="ml-auto inline-block h-fit text-sm underline-offset-4 hover:underline"
              asChild
            >
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
