"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium uppercase tracking-wide rounded-full transition-all duration-200";
  
  const variantStyles = {
    default: "backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] text-zinc-300 border border-white/10 hover:border-[#746BFF]/50",
    accent: "bg-gradient-to-r from-[#746BFF] via-[#684DFF] to-[#461DB8] text-white font-semibold shadow-[0_0_16px_rgba(116,107,255,0.2)]",
    outline: "bg-transparent text-zinc-400 border border-white/20 hover:border-[#746BFF]/50 hover:text-zinc-300",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
}
