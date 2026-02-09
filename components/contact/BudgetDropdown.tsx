"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type BudgetOption = { label: string; value: string };

export function BudgetDropdown({
  value,
  onChange,
  options,
  className,
  buttonClassName,
  hasError,
}: {
  value: string;
  onChange: (value: string) => void;
  options: BudgetOption[];
  className?: string;
  buttonClassName?: string;
  hasError?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const selected = useMemo(() => {
    const found = options.find((o) => o.value === value);
    return found || options[0];
  }, [options, value]);

  const isPlaceholder = selected.value === "";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "flex h-11 w-full items-center justify-between gap-3 rounded-lg border bg-surface-elevated px-4 text-[15px]",
          "border-border focus:outline-none focus:border-accent/60",
          hasError && "border-primary/60",
          buttonClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={cn(isPlaceholder ? "text-text-muted" : "text-text-primary")}>
          {selected.label}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-text-secondary transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-lg border border-border",
              "bg-surface-elevated shadow-2xl"
            )}
            role="listbox"
          >
            <div className="max-h-80 overflow-auto py-1">
              {options.map((o) => {
                const active = o.value === value;
                const placeholder = o.value === "";
                return (
                  <div
                    key={o.label}
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(o.value);
                      setOpen(false);
                    }}
                    className={cn(
                      "px-4 py-3 cursor-pointer select-none transition-colors",
                      "text-text-secondary hover:bg-surface-subtle hover:text-text-primary",
                      active && !placeholder && "text-primary-light",
                      active && placeholder && "text-text-muted",
                      placeholder && !active && "text-text-muted"
                    )}
                  >
                    {o.label}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
