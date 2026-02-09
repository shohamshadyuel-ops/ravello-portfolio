"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedHeadline({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <h1 className={cn("font-display text-text-primary leading-[0.95]", className)}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 * idx }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

