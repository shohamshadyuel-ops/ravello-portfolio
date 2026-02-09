"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";

const faqs = [
  {
    q: "How long does it take to build a custom CRM?",
    a: "Most systems are delivered within 3 days to 4 weeks, depending on complexity. Focused builds can be ready in days; advanced enterprise systems may take up to a month.",
  },
  {
    q: "Do I need technical knowledge to use the CRM?",
    a: "Absolutely not. We design intuitive interfaces and provide comprehensive training for your entire team.",
  },
  {
    q: "Can you integrate with my existing tools?",
    a: "Yes. We connect with WhatsApp, email providers, payment systems, calendars, and virtually any third‑party API.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of post-launch support. We’re also available for ongoing maintenance, updates, and scaling as your business grows.",
  },
];

export function FAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <Card className="p-10">
        <div className="font-display text-2xl text-text-primary">FAQ</div>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border/70 bg-surface-subtle/30 px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] text-text-primary">
                <span>{f.q}</span>
                <ChevronDown className="h-4 w-4 text-text-secondary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{f.a}</p>
            </details>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

