"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function WorkHero() {
  return (
    <section className="px-4 pb-12 pt-6 sm:pb-16 sm:pt-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl tracking-tight text-text-primary sm:text-6xl">
            Project Portfolio
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Custom CRM systems we’ve built for businesses across different industries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

