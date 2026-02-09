"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function HomeCTA() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-primary/25"
        style={{
          background:
            "linear-gradient(135deg, rgba(64,14,47,0.55) 0%, rgba(15,15,15,1) 55%, rgba(196,168,130,0.10) 100%)",
        }}
      >
        <div className="px-7 py-14 sm:px-12 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl tracking-tight text-text-primary sm:text-5xl">
              Ready to own your operations?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
              Let’s discuss how a system built for you — and only you — can transform your business.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href="https://wa.me/972504242641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="inline-flex h-12 items-center gap-2 rounded-full border border-border/70 bg-surface-elevated/60 px-6 text-[15px] text-text-primary transition-colors hover:border-border-hover">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

