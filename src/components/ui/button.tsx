import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-deep disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue text-white hover:bg-blue-glow shadow-lg shadow-blue/20",
        outline:
          "border border-border bg-transparent text-text-secondary hover:border-blue hover:text-text-primary hover:bg-panel-elevated",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-panel-elevated",
        accent: "bg-green text-deep hover:bg-green-dim font-semibold",
        gradient:
          "gradient-border bg-panel-elevated text-text-primary hover:text-blue",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    if (asChild) {
      return (
        <span
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        />
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
