"use client";

import { motion } from "framer-motion";
import { Code2, Database, Workflow, Cloud, ShieldCheck, PlugZap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";

const skills = [
  { icon: Code2, title: "Full-Stack Development", level: "Expert" },
  { icon: Database, title: "Database Architecture", level: "Expert" },
  { icon: Workflow, title: "Workflow Automation", level: "Expert" },
  { icon: Cloud, title: "Cloud Infrastructure", level: "Expert" },
  { icon: PlugZap, title: "API Engineering", level: "Expert" },
  { icon: ShieldCheck, title: "Security & Compliance", level: "Expert" },
];

export function CoreSkills() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Core skills</SectionLabel>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <Card className="p-8 transition-colors hover:border-border-hover">
                <s.icon className="h-7 w-7 text-accent" />
                <div className="mt-5 text-lg font-medium text-text-primary">{s.title}</div>
                <div className="mt-2 inline-flex rounded-full border border-border/70 bg-surface-subtle/60 px-4 py-2 text-xs tracking-[0.14em] uppercase text-text-secondary">
                  {s.level}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

