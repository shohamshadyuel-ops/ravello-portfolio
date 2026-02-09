"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp } from "@/lib/animations";

const steps = [
  { n: "01", title: "Discovery", desc: "We study your workflow, your pain points, your ambitions." },
  { n: "02", title: "Architecture", desc: "We design the data models, automations, and integrations." },
  { n: "03", title: "Development", desc: "We build — with regular check-ins and zero surprises." },
  { n: "04", title: "Quality Assurance", desc: "Rigorous testing, team training, and full documentation." },
  { n: "05", title: "Launch & Beyond", desc: "Smooth deployment with ongoing support as you scale." },
];

export function Process() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Process</SectionLabel>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8"
        >
          <h2 className="font-display text-4xl tracking-tight text-text-primary sm:text-5xl">
            How we build your system
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
            A proven method from discovery to deployment.
          </p>
        </motion.div>

        <div className="mt-12 space-y-5">
          {steps.map((s, idx) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
            >
              <Card className="flex flex-col gap-5 p-8 sm:flex-row sm:items-start sm:gap-8">
                <div className="font-display text-5xl leading-none text-primary">{s.n}</div>
                <div className="flex-1">
                  <div className="font-display text-2xl text-text-primary">{s.title}</div>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{s.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

