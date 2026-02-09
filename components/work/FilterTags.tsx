"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FilterTags({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="px-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => onChange(t)}
                className={cn(
                  "h-11 rounded-full border px-5 text-sm transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/15 text-text-primary shadow-[0_0_20px_rgba(107,36,84,0.18)]"
                    : "border-border/70 bg-surface-elevated/30 text-text-secondary hover:border-border-hover hover:text-text-primary"
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

