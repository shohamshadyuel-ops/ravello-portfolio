"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/content/projects";
import { Card } from "@/components/ui/Card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="px-4 pb-16 pt-10 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <Link href={`/work/${p.slug}`} className="group block">
                <Card className="h-full p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_34px_rgba(107,36,84,0.14)]">
                  {p.confidentialityLevel === "high" && (
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-subtle/60 px-4 py-2 text-xs tracking-[0.12em] uppercase text-text-secondary">
                      <Lock className="h-3.5 w-3.5" />
                      Confidential Client
                    </div>
                  )}

                  <div className="font-body text-xl font-semibold text-text-primary group-hover:text-text-primary">
                    {p.title}
                  </div>
                  <div className="mt-2 text-xs tracking-[0.18em] uppercase text-primary">
                    {p.industry}
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-text-secondary line-clamp-3">
                    {p.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 bg-surface-subtle/50 px-4 py-2 text-xs text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm text-accent">
                    View Project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

