"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="px-4 pb-10 pt-6 sm:pb-14 sm:pt-10">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="max-w-3xl">
          <h1 className="font-display text-5xl tracking-tight text-text-primary sm:text-6xl">
            Let’s Build Your System
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Tell us about your business and we’ll respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

