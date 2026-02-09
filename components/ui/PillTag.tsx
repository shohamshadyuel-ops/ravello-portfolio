import * as React from "react";
import { cn } from "@/lib/utils";

export function PillTag({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-surface-subtle/60 px-4 py-2",
        "text-xs tracking-[0.14em] uppercase text-text-secondary",
        className
      )}
      {...props}
    />
  );
}

