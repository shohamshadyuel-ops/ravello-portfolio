"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { type Locale } from "@/lib/i18n";

interface NeonButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export function NeonButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  href,
}: NeonButtonProps) {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";
  const isRtl = locale === "he";

  const contentClassName = cn(
    "relative z-10 inline-flex items-center justify-center gap-2",
    // Normalize icons + prevent stacking
    "[&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
    // Some usages might wrap label in <p>/<div>
    "[&>p]:m-0 [&>p]:inline [&>div]:inline",
    // Larger icons for large buttons only
    size === "lg" && "[&>svg]:h-5 [&>svg]:w-5",
    // Hebrew (RTL): icon should sit to the right of text
    isRtl && "flex-row-reverse"
  );

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 rounded-xl h-11 px-6 py-2.5 text-sm font-medium leading-none transition-all duration-200 ease-out select-none";
  
  const sizeStyles = {
    sm: "h-10 px-5 py-2 text-sm",
    md: "h-11 px-6 py-2.5 text-sm",
    lg: "h-12 px-7 py-3 text-sm",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-[0_0_0px_rgba(139,92,246,0)] hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:-translate-y-[1px]",
    secondary:
      "bg-transparent border border-white/15 text-white/90 hover:border-white/25 hover:bg-white/5 hover:-translate-y-[1px]",
    outline:
      "bg-transparent border border-white/15 text-white/90 hover:border-white/25 hover:bg-white/5 hover:-translate-y-[1px]",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:shadow-[0_0_0px_rgba(139,92,246,0)] hover:translate-y-0";

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabled && disabledStyles,
    className
  );

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName}>
        <span className={contentClassName}>{children}</span>
      </a>
    );
  }

  const MotionComponent = motion.button;

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileTap={disabled ? {} : { scale: 0.99 }}
    >
      <span className={contentClassName}>{children}</span>
    </MotionComponent>
  );
}
