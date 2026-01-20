"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, Calendar, CheckCircle, MessageCircle } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { CTASection } from "@/components/cta-section";
import { getProjectBySlug } from "@/content/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Work
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
            <div className="flex items-center gap-2 text-sm text-purple-400 mb-4">
              <Lock size={16} />
              <span>Confidential Client Project</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-zinc-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-purple-400">Industry:</span>
              {project.industry}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="font-semibold text-purple-400">Timeline:</span>
              {project.timeline}
            </div>
          </div>

          <p className="text-xl text-zinc-300">{project.summary}</p>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <GlowCard>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>

        {/* Integrations & Automations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Integrations</h2>
            <GlowCard>
              <ul className="space-y-2">
                {project.integrations.map((integration, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-zinc-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    {integration}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Automations</h2>
            <GlowCard>
              <ul className="space-y-2">
                {project.automations.map((automation, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-zinc-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    {automation}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
          <GlowCard>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Results & Outcomes</h2>
          <GlowCard>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300">{outcome}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>

        {/* Demo Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <GlowCard className="text-center">
            <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.demoPolicy}
            </h3>
            <p className="text-zinc-400 mb-6">
              Due to client confidentiality, full system access is available only after NDA.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NeonButton variant="primary">
                <MessageCircle size={20} />
                Request Private Demo
              </NeonButton>
            </a>
          </GlowCard>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection
        title="Interested in a Similar System?"
        description="Let's discuss how we can build a custom CRM tailored to your business needs."
      />
    </div>
  );
}
