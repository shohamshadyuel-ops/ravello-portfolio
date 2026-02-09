"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";

const tiers = [
  {
    name: "Starter",
    price: "Starting from $600",
    label: "One-time project cost",
    desc: "For businesses that need focused lead tracking and foundational automation",
    features: [
      "Leads & contacts management",
      "Status pipeline",
      "Notes & follow-ups",
      "Email integration",
      "Basic automations",
      "Admin dashboard",
      "Delivery: 3–7 days",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "Starting from $1,500",
    label: "One-time project cost",
    desc: "For growing businesses that need structure, automation, and integrations",
    features: [
      "Everything in Starter",
      "Advanced pipelines & stages",
      "Automated follow-ups & reminders",
      "Task management",
      "User roles & permissions",
      "Dashboards & reporting",
      "WhatsApp + Email integration",
      "Delivery: 1–3 weeks",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    price: "Starting from $3,000",
    label: "One-time project cost",
    desc: "For complex businesses that need enterprise-grade workflows and deep integrations",
    features: [
      "Everything in Growth",
      "Custom workflow logic",
      "Complex automation sequences",
      "Advanced permissions & roles",
      "API integrations with external tools",
      "Custom reporting modules",
      "Priority support",
      "Delivery: up to 4 weeks",
    ],
    popular: false,
  },
];

export function PricingCards() {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.07 }}
              className={t.popular ? "lg:-mt-3" : ""}
            >
              <Card
                className={[
                  "h-full p-8",
                  t.popular
                    ? "border-primary/35 shadow-[0_0_44px_rgba(107,36,84,0.14)]"
                    : "hover:border-border-hover",
                ].join(" ")}
              >
                {t.popular && (
                  <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs tracking-[0.14em] uppercase text-text-primary">
                    Most Popular
                  </div>
                )}

                <div className="font-display text-3xl text-text-primary">{t.name}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{t.desc}</p>

                <div className="mt-8">
                  <div className="text-3xl font-semibold text-text-primary">{t.price}</div>
                  <div className="mt-1 text-sm text-text-muted">{t.label}</div>
                </div>

                <ul className="mt-8 space-y-3 text-[15px] text-text-secondary">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-surface-subtle/60">
                        <Check className="h-4 w-4 text-accent" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className={[
                      "inline-flex h-12 w-full items-center justify-center rounded-full border text-sm font-medium transition-colors",
                      t.popular
                        ? "border-primary/35 bg-primary/25 text-text-primary hover:bg-primary/35"
                        : "border-border/70 bg-surface-subtle/30 text-text-primary hover:border-border-hover",
                    ].join(" ")}
                  >
                    Request Quote
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

