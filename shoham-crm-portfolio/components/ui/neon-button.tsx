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
  const baseStyles = "relative font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105",
    secondary: "bg-zinc-800 text-white border border-zinc-700 hover:border-purple-500/50 hover:bg-zinc-700",
    outline: "bg-transparent text-purple-400 border-2 border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none";

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabled && disabledStyles,
    className
  );

  const MotionComponent = motion.button;

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

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
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      )}
      
      <span className="relative z-10">{children}</span>
    </MotionComponent>
  );
}
