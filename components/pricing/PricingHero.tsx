"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function PricingHero() {
  return (
    <section className="px-4 pb-10 pt-6 sm:pb-14 sm:pt-10">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
          <h1 className="font-display text-5xl tracking-tight text-text-primary sm:text-6xl">
            Transparent Pricing
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Delivered in 3 days to 4 weeks • One-time investment • No recurring fees
          </p>
        </motion.div>
      </div>
    </section>
  );
}

