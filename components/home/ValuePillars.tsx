"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";

function DashboardMock() {
  return (
    <Card
      className={cn(
        "relative h-[280px] overflow-hidden",
        "bg-gradient-to-br from-surface-elevated via-surface-elevated to-primary/10"
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(196,168,130,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(196,168,130,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0">
        <div className="absolute left-8 top-8 h-2 w-28 rounded-full bg-border/70" />
        <div className="absolute left-8 top-14 h-2 w-40 rounded-full bg-border/50" />
        <div className="absolute bottom-10 left-8 right-8 h-20 rounded-2xl border border-border/70 bg-surface-subtle/50" />
      </div>
      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-accent/60"
            style={{
              left: `${12 + (i * 6) % 76}%`,
              top: `${18 + (i * 9) % 62}%`,
              opacity: 0.25 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>
    </Card>
  );
}

function WorkflowMock() {
  return (
    <Card className="relative h-[280px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(90,24,67,0.35) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(196,168,130,0.12) 0%, transparent 55%)",
        }}
      />
      <svg viewBox="0 0 600 360" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="wg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c4a882" stopOpacity="0.35" />
            <stop offset="1" stopColor="#400e2f" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <motion.path
          d="M90 240 C 160 120, 250 110, 320 170 S 470 280, 520 150"
          fill="none"
          stroke="url(#wg)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {[
          [90, 240],
          [210, 150],
          [320, 170],
          [430, 240],
          [520, 150],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill="#161616" stroke="#2a1f26" strokeWidth="3" />
            <circle cx={x} cy={y} r="5" fill="#c4a882" opacity="0.9" />
          </g>
        ))}
      </svg>
    </Card>
  );
}

function SovereignMock() {
  return (
    <Card className="relative h-[280px] overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(64,14,47,0.30) 0%, transparent 55%), radial-gradient(circle at 70% 75%, rgba(196,168,130,0.12) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-primary/10 blur-2xl" />
          <svg width="160" height="160" viewBox="0 0 64 64" className="relative">
            <path
              d="M32 6c10 7 18 7 22 8v18c0 14-10 22-22 26C20 54 10 46 10 32V14c4-1 12-1 22-8z"
              fill="none"
              stroke="rgba(196,168,130,0.75)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M32 22c4 0 7 3 7 7v6H25v-6c0-4 3-7 7-7z"
              fill="none"
              stroke="rgba(245,240,243,0.85)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M28.5 35v-3.3a3.5 3.5 0 1 1 7 0V35"
              fill="none"
              stroke="rgba(245,240,243,0.55)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
}

type Pillar = {
  title: string;
  lead: string;
  body: string;
  cta: { label: string; href: string };
  visual: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Be Precise",
    lead: "Your business isn’t generic. Your systems shouldn’t be either.",
    body: "Every data model, every automation, every interface — architected around how you actually work.",
    cta: { label: "See our approach", href: "/about" },
    visual: <DashboardMock />,
  },
  {
    title: "Be Relentless",
    lead: "Iterate fast. Scale without friction.",
    body: "From day one, your CRM adapts to your growth — not the other way around.",
    cta: { label: "View our work", href: "/work" },
    visual: <WorkflowMock />,
  },
  {
    title: "Be Sovereign",
    lead: "Own every pixel. Own every byte.",
    body: "No subscriptions. No per-user fees. No vendor lock‑in. The system is yours — forever.",
    cta: { label: "See pricing", href: "/pricing" },
    visual: <SovereignMock />,
  },
];

export function ValuePillars() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>The manifesto</SectionLabel>

        <div className="mt-10 space-y-16 sm:space-y-24">
          {pillars.map((p, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <motion.div
                key={p.title}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                className={cn("grid items-center gap-10 lg:grid-cols-2", flipped && "lg:[&>*:first-child]:order-2")}
              >
                <motion.div variants={scaleIn}>{p.visual}</motion.div>

                <motion.div variants={fadeUp} className="max-w-xl">
                  <div className="font-display text-5xl tracking-tight text-text-primary sm:text-6xl">
                    {p.title}
                  </div>
                  <p className="mt-6 text-lg text-text-primary/90">{p.lead}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                    {p.body}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={p.cta.href}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-text-primary"
                    >
                      {p.cta.label} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

