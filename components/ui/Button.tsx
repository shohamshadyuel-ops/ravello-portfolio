"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-text-primary border-primary/30 hover:bg-primary-light hover:border-primary/50 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_24px_rgba(107,36,84,0.25)]",
  secondary:
    "bg-surface-elevated text-text-primary border-border hover:border-border-hover hover:bg-surface-subtle",
  ghost: "bg-transparent text-text-secondary border-border/60 hover:text-text-primary hover:border-border-hover",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonClassName({
  variant = "secondary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
  }
) {
  const { variant = "secondary", size = "md", className, ...rest } = props;
  return <button {...rest} className={buttonClassName({ variant, size, className })} />;
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "secondary",
  size = "md",
  ...rest
}: React.ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={buttonClassName({ variant, size, className })}
      {...rest}
    >
      {children}
    </Link>
  );
}

