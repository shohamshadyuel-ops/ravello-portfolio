"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";

const principles = [
  {
    title: "Precision over features",
    body: "We don’t build bloated systems. Every element exists because your workflow demands it.",
  },
  {
    title: "Ownership over dependency",
    body: "No subscriptions, no vendor lock-in. You own the code, the data, the system — completely.",
  },
  {
    title: "Partnership over transaction",
    body: "We don’t just deliver and disappear. We build relationships and systems that grow with you.",
  },
];

export function Philosophy() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Our philosophy</SectionLabel>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principles.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
            >
              <Card className="h-full p-8">
                <div className="font-display text-2xl text-text-primary">“{p.title}”</div>
                <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">{p.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

