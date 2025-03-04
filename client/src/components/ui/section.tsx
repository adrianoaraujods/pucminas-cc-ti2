import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const sectionVariants = cva("mx-auto w-full p-4 py-8", {
  variants: {
    variant: {
      default: "",
      background: "bg-background text-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      primary: "bg-primary text-primary-foreground",
      muted: "bg-muted text-foreground",
    },
    maxWidth: {
      sm: "md:px-[calc((100vw-768px)/2)]",
      md: "lg:px-[calc((100vw-1024px)/2)]",
      lg: "xl:px-[calc((100vw-1280px)/2)]",
      xl: "2xl:px-[calc((100vw-1536px)/2)]",
    },
  },
  defaultVariants: {
    variant: "default",
    maxWidth: "xl",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

function Section({
  className,
  variant,
  maxWidth,
  asChild = false,
  ...props
}: React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "section";

  return (
    <Comp
      data-slot="card"
      className={cn(sectionVariants({ variant, maxWidth, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
