"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { CTASection } from "@/components/cta-section";
import { getAllTags, getProjects } from "@/content/projects";
import { useLocale } from "@/lib/use-locale";

export default function WorkPage() {
  const { locale, t } = useLocale();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const localizedProjects = getProjects(locale);
  const allTags = [t("work.all"), ...getAllTags(locale)];

  const filteredProjects = selectedTag && selectedTag !== t("work.all")
    ? localizedProjects.filter((project) => project.tags.includes(selectedTag))
    : localizedProjects;

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t("work.title")}
            <br />
            <span className="text-white">{t("work.portfolio")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
            {t("work.subtitle")}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === t("work.all") ? null : tag)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  (tag === t("work.all") && !selectedTag) || selectedTag === tag
                    ? "bg-gradient-to-r from-[#746BFF] via-[#684DFF] to-[#461DB8] text-white shadow-lg shadow-[#746BFF]/30"
                    : "backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-lg">
              {t("work.noProjects")}
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <CTASection
        title={t("cta.needCRM")}
        description={t("cta.needCRMDesc")}
      />
    </div>
  );
}