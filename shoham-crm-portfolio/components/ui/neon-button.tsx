"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  const baseStyles =
    "relative font-semibold rounded-xl transition-all duration-300 ease-out inline-flex items-center justify-center gap-2";
  
  const sizeStyles = {
    sm: "px-6 py-3 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#7B5CFF] via-[#9A6BFF] to-[#B68CFF] text-white shadow-[0_8px_30px_rgba(123,92,255,0.45)] hover:shadow-[0_12px_40px_rgba(123,92,255,0.65)] hover:scale-105",
    secondary:
      "bg-transparent border border-[rgba(123,92,255,0.6)] text-[#B68CFF] hover:bg-[rgba(123,92,255,0.08)] hover:shadow-[0_0_20px_rgba(123,92,255,0.35)] hover:text-[#C8A8FF]",
    outline:
      "bg-transparent border border-[rgba(123,92,255,0.6)] text-[#B68CFF] hover:bg-[rgba(123,92,255,0.08)] hover:shadow-[0_0_20px_rgba(123,92,255,0.35)] hover:text-[#C8A8FF]",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none";

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
        {children}
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
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {/* Glow effect */}
      {variant === "primary" && !disabled && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7B5CFF] via-[#9A6BFF] to-[#B68CFF] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      )}
      
      <span className="relative z-10">{children}</span>
    </MotionComponent>
  );
}
