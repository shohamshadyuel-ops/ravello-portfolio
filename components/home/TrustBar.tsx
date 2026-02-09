"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp } from "@/lib/animations";

const clients = [
  "Real Estate Co.",
  "E-commerce Brand",
  "Healthcare Group",
  "Consulting Firm",
  "Logistics Corp",
  "Education Platform",
  "SaaS Operator",
  "Professional Services",
];

function Item({ text }: { text: string }) {
  return (
    <div className="shrink-0 rounded-full border border-border/70 bg-surface-subtle/40 px-6 py-3 text-sm text-text-secondary">
      {text}
    </div>
  );
}

export function TrustBar() {
  const loop = [...clients, ...clients];

  return (
    <section className="px-4 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Trusted by forward-thinking businesses</SectionLabel>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8 overflow-hidden"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />

            <div className="flex w-[200%] gap-4 py-2 animate-marquee">
              {loop.map((c, idx) => (
                <Item key={`${c}-${idx}`} text={c} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

