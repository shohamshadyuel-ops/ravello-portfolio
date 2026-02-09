"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp } from "@/lib/animations";

const items = Array.from({ length: 3 }).map((_, i) => ({
  name: "Client Name",
  role: "CEO at Company",
  source: i === 0 ? "Google Review" : i === 1 ? "LinkedIn" : "Referral",
  quote:
    "Working with Ravello Studio transformed how we operate. The system they built isn’t just software — it’s the backbone of our growth.",
}));

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 text-accent" fill="currentColor" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Testimonials</SectionLabel>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8 font-display text-4xl tracking-tight text-text-primary sm:text-5xl"
        >
          What our clients say
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-10"
        >
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((t, idx) => (
              <Card
                key={idx}
                className="relative w-[88%] shrink-0 snap-start p-8 sm:w-[420px]"
              >
                <div className="pointer-events-none absolute right-6 top-6 font-display text-7xl text-border/40">
                  “
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="h-12 w-12 rounded-full border border-border/70"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(90,24,67,0.6) 0%, rgba(196,168,130,0.18) 100%)",
                      }}
                    />
                    <div>
                      <div className="text-sm font-medium text-text-primary">{t.name}</div>
                      <div className="text-xs tracking-[0.12em] uppercase text-text-muted">
                        {t.role}
                      </div>
                    </div>
                  </div>
                  <Stars />
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-text-secondary">{t.quote}</p>

                <div className="mt-6 inline-flex rounded-full border border-border/70 bg-surface-subtle/60 px-4 py-2 text-xs tracking-[0.14em] uppercase text-text-secondary">
                  {t.source}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

