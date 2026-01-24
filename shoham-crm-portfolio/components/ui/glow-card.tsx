"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
  disableInlineShadow?: boolean;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(168, 85, 247, 0.4)",
  hover = true,
  disableInlineShadow = false,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-6",
        "bg-gradient-to-br from-zinc-900/90 to-zinc-950/90",
        "backdrop-blur-xl border border-zinc-800/50",
        "shadow-2xl",
        hover && "transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20",
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={
        disableInlineShadow
          ? undefined
          : {
              boxShadow: hover
                ? `0 10px 40px -10px ${glowColor}`
                : `0 4px 20px -4px ${glowColor}`,
            }
      }
    >
      {/* Gradient border effect */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ padding: "1px" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
