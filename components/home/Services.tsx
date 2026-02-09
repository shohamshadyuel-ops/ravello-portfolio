"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/animations";

const offers = [
  {
    label: "Service: CRM Design & Development",
    title: "A system built around your exact workflow",
    desc: "From database architecture to user interface — fully custom, fully yours.",
    href: "/work",
  },
  {
    label: "Service: Automation & Integration",
    title: "Eliminate the manual. Amplify the human.",
    desc: "WhatsApp, email, payments, calendars — connected and automated intelligently.",
    href: "/work",
  },
  {
    label: "Service: Analytics & Reporting",
    title: "Decisions backed by real-time truth",
    desc: "Dashboards and reports that surface what matters, when it matters.",
    href: "/work",
  },
];

export function Services() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>What we build</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8"
        >
          <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="font-display text-4xl tracking-tight text-text-primary sm:text-5xl">
                We transform complexity into clarity
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
                We fuse technical precision, business strategy, and design thinking to build systems
                that don’t just manage — they accelerate.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Book a call <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <Link href="/work" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary">
                Explore <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((o, idx) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <Card className="h-full p-8 transition-colors hover:border-border-hover">
                  <div className="text-xs tracking-[0.18em] uppercase text-text-muted">
                    {o.label}
                  </div>
                  <div className="mt-5 font-display text-2xl leading-tight text-text-primary">
                    {o.title}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">{o.desc}</p>
                  <div className="mt-7">
                    <Link
                      href={o.href}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-text-primary"
                    >
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

