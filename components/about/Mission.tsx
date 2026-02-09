"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp } from "@/lib/animations";

export function Mission() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Mission</SectionLabel>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8"
        >
          <Card className="p-10 sm:p-12">
            <div className="space-y-4 text-[15px] leading-relaxed text-text-secondary">
              <p>
                <span className="text-text-primary font-medium">Ravello Studio</span> builds custom
                CRM systems — fully tailored platforms that transform how businesses manage
                workflows, automate processes, and drive growth.
              </p>
              <p>
                We reject one-size-fits-all. Every business has unique processes, and your software
                should reflect that. We build fully custom systems from the ground up — tailored to
                your exact workflow, integrated with your existing tools, and designed to scale with
                your growth.
              </p>
              <p>
                From real estate agencies to e-commerce operations, healthcare clinics to logistics
                companies — we’ve helped businesses streamline operations with precision-built
                systems. Our approach fuses technical depth with business understanding, ensuring
                that every feature delivers real value.
              </p>
              <p>
                We deliver fast — from focused builds in <span className="text-text-primary">3 days</span>{" "}
                to complex enterprise systems in <span className="text-text-primary">4 weeks</span>.
                Every system features clean, premium interface design, intelligent automations,
                seamless integrations, and architecture that puts your business processes first.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

