"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp } from "@/lib/animations";

const items = [
  "Full source code ownership",
  "Dedicated project manager",
  "Comprehensive documentation",
  "Team training sessions",
  "30-day post-launch support",
  "Performance optimization",
];

export function Reassurance() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Included</SectionLabel>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8 font-display text-4xl tracking-tight text-text-primary sm:text-5xl"
        >
          Every project includes
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <Card className="flex items-start gap-3 p-6">
                <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-surface-subtle/60">
                  <Check className="h-4 w-4 text-accent" />
                </span>
                <div className="text-[15px] text-text-secondary">{t}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

