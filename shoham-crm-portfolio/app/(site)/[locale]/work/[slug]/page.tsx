"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { CTASection } from "@/components/cta-section";
import { getProjectBySlug } from "@/content/projects";
import { useLocale } from "@/lib/use-locale";

export default function ProjectPage({ params }: { params: { slug: string; locale: string } }) {
  const { locale, t } = useLocale();
  const project = getProjectBySlug(params.slug, locale);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: locale === "he" ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t("project.backToProjects")}</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {project.confidentialityLevel === "high" && (
            <div className="flex items-center gap-2 text-sm text-[#746BFF] mb-6">
              <Lock size={16} />
              <span>{t("project.confidentialClient")}</span>
            </div>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-[#746BFF] mb-8">{project.industry}</p>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] border border-white/10 text-sm text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlowCard>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">{t("project.challenge")}</h2>
              <p className="text-zinc-400 leading-relaxed">{project.summary}</p>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlowCard>
              <h2 className="text-2xl font-heading font-bold text-white mb-6">{t("project.solution")}</h2>
              <p className="text-zinc-400 leading-relaxed">
                {project.keyFeatures.slice(0, 3).join(" • ") || project.summary}
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <GlowCard>
              <h2 className="text-2xl font-heading font-bold text-white mb-8">{t("project.keyFeatures")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#746BFF] flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <GlowCard>
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              {t("project.needSimilar")}
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              {t("project.needSimilarDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <NeonButton variant="primary">
                  <MessageCircle size={20} />
                  {t("project.getInTouch")}
                </NeonButton>
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="outline">
                  {t("contact.whatsapp.cta")}
                </NeonButton>
              </a>
            </div>
          </GlowCard>
        </motion.div>

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}