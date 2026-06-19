import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-border bg-panel-elevated text-text-secondary",
        blue: "border-blue/30 bg-blue/10 text-blue",
        green: "border-green/30 bg-green/10 text-green",
        red: "border-red/30 bg-red/10 text-red",
        yellow: "border-yellow/30 bg-yellow/10 text-yellow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
