"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`}>
        <GlowCard className="h-full group cursor-pointer">
          {/* Confidentiality Badge */}
          {project.confidentialityLevel === "high" && (
            <div className="flex items-center gap-2 text-xs text-purple-400 mb-3">
              <Lock size={12} />
              <span>Confidential Client</span>
            </div>
          )}

          {/* Title & Industry */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-purple-400 mb-3">{project.industry}</p>

          {/* Summary */}
          <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <div className="flex items-center gap-2 text-sm text-purple-400 group-hover:gap-3 transition-all">
            <span>View Project</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}
