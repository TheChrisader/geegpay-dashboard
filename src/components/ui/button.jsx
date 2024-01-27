import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        unstyled: "block p-0 border-0",
        icon: "rounded-[27px] border border-[0.77px] p-[11px] border-darkBorder",
        profile: "rounded-[28px] border border-[1px] border-darkBorder gap-3 ",
        drop: "rounded-[20px] border border-[1px] border-dropBorder gap-[10px] ",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        unstyled: "",
        icon: "h-10 w-10 ",
        profile: "py-[6px] px-2",
        drop: "py-[6px] px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
