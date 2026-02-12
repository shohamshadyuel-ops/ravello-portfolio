"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { CTASection } from "@/components/cta-section";
import { projects, getAllTags } from "@/content/projects";

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = ["All", ...getAllTags()];

  const filteredProjects = selectedTag && selectedTag !== "All"
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Project Portfolio
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Custom CRM platforms I've built for businesses across different industries
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === "All" ? null : tag)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  (tag === "All" && !selectedTag) || selectedTag === tag
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-400 text-lg">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <CTASection
        title="Need a Custom CRM for Your Industry?"
        description="Every business is unique. Let's build a system that fits yours perfectly."
      />
    </div>
  );
}
