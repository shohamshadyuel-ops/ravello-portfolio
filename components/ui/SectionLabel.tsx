"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideInLeft } from "@/lib/animations";

export function SectionLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={cn("flex items-center gap-3", className)}
    >
      <span className="h-px w-8 bg-gradient-to-r from-primary/80 to-transparent" />
      <span className="text-xs tracking-[0.18em] uppercase text-text-secondary">
        {children}
      </span>
    </motion.div>
  );
}

