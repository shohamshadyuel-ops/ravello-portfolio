"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const industries = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Consulting",
  "Logistics",
  "Education",
  "SaaS",
  "Professional Services",
  "Finance",
  "Construction",
  "Legal",
  "Marketing Agencies",
  "Hospitality",
  "Non-Profit",
];

export function Industries() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Industries we serve</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl tracking-tight text-text-primary sm:text-5xl"
          >
            Custom systems at the service of ambitious businesses
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-[15px] leading-relaxed text-text-secondary">
            We’ve engineered operational platforms for businesses across industries — each one built
            from the ground up to match their unique reality.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 overflow-hidden">
            <div className="flex flex-wrap gap-3">
              {industries.map((i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-full border border-border/70 bg-surface-subtle/50 px-5 py-2.5",
                    "text-sm text-text-secondary transition-colors",
                    "hover:border-primary/40 hover:text-text-primary",
                    "hover:shadow-[0_0_18px_rgba(107,36,84,0.18)]"
                  )}
                >
                  {i}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

