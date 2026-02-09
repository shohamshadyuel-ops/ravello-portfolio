"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const saas = [
  "Monthly fees that compound forever",
  "Features you’ll never use",
  "Your data on someone else’s servers",
  "One-size-fits-none workflows",
  "You adapt to the software",
];

const ravello = [
  "One investment. Lifetime ownership.",
  "Every feature built for your process",
  "Your data. Your servers. Your rules.",
  "Workflows that mirror how you actually work",
  "The software adapts to you",
];

export function Comparison() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Ownership</SectionLabel>

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
            Stop renting. Start owning.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-8">
              <div className="text-xs tracking-[0.18em] uppercase text-text-muted">The SaaS trap</div>
              <div className="mt-4 font-display text-2xl text-text-primary/90">Restrictive by design</div>
              <ul className="mt-6 space-y-3 text-[15px] text-text-secondary">
                {saas.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-surface-subtle/60">
                      <X className="h-4 w-4 text-text-muted" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm text-text-muted">
                Every month you pay for SaaS, you’re funding someone else’s roadmap — and renting your
                own operations back.
              </p>
            </Card>

            <Card className="p-8 border-primary/25 shadow-[0_0_40px_rgba(107,36,84,0.10)]">
              <div className="text-xs tracking-[0.18em] uppercase text-text-muted">The Ravello way</div>
              <div className="mt-4 font-display text-2xl text-text-primary">Built to liberate</div>
              <ul className="mt-6 space-y-3 text-[15px] text-text-secondary">
                {ravello.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full border border-primary/25 bg-primary/10">
                      <Check className="h-4 w-4 text-accent" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm text-text-muted">
                Your competitors are building custom. Are you still renting?
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

