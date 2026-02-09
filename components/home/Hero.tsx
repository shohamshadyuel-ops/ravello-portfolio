"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { ButtonLink } from "@/components/ui/Button";
import { fadeIn, fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

function HeroObject() {
  return (
    <motion.div
      variants={scaleIn}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative aspect-[4/3] w-full"
      >
        {/* Soft ambient halo — no rectangular container */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(64,14,47,0.28) 0%, rgba(196,168,130,0.10) 25%, transparent 65%)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-[240px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(90,24,67,0.85) 0%, rgba(64,14,47,0.9) 45%, rgba(26,26,26,0.85) 100%)",
            boxShadow:
              "0 30px 80px rgba(64,14,47,0.35), 0 2px 0 rgba(255,255,255,0.05) inset, 0 -18px 40px rgba(0,0,0,0.55) inset",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #0a0a0a 0%, #0f0f0f 55%, #050505 100%)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.05) inset",
          }}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-border/80 bg-surface-elevated/40 backdrop-blur">
            <ArrowUpRight className="h-6 w-6 text-accent" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(64,14,47,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(196,168,130,0.10) 0%, transparent 50%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14"
      >
        <div className="order-2 lg:order-1">
          <HeroObject />
        </div>

        <div className="order-1 lg:order-2">
          <motion.div variants={fadeIn} className="mb-4">
            <div className="text-xs tracking-[0.18em] uppercase text-text-secondary">
              Growth-stage companies, SaaS, agencies
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <AnimatedHeadline
              lines={["Architect", "your growth"]}
              className="text-[clamp(3.1rem,7vw,6.8rem)]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-6 text-[15px] leading-relaxed text-text-secondary sm:grid-cols-2"
          >
            <p>
              We build the operational backbone that turns growing companies into scalable
              businesses.
            </p>
            <p>
              Custom CRM systems engineered around your exact workflow — owned entirely by you.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="primary" size="lg">
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/work" variant="ghost" size="lg">
              Explore work
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

