import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface-elevated/90 border border-border/80 backdrop-blur-sm",
        "shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]",
        className
      )}
      {...props}
    />
  );
}

