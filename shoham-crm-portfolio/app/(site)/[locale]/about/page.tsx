"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { CTASection } from "@/components/cta-section";
import { Code2, Zap, Target, Heart, Database, Cloud, Workflow, Lock } from "lucide-react";
import { useLocale } from "@/lib/use-locale";

const skillIcons = {
  "Full-Stack Development": Code2,
  "Database Design": Database,
  "Workflow Automation": Workflow,
  "Cloud Infrastructure": Cloud,
  "API Integrations": Zap,
  "Security & Compliance": Lock,
};

const valueIcons = {
  "Business-First Approach": Target,
  "Client Success": Heart,
  "Speed & Efficiency": Zap,
  "Security & Reliability": Lock,
};

export default function AboutPage() {
  const { locale, t, tArray } = useLocale();

  const skills = [
    { name: t("about.skills.fullStack"), level: t("about.skills.expert") },
    { name: t("about.skills.database"), level: t("about.skills.expert") },
    { name: t("about.skills.workflow"), level: t("about.skills.expert") },
    { name: t("about.skills.cloud"), level: t("about.skills.advanced") },
    { name: t("about.skills.api"), level: t("about.skills.expert") },
    { name: t("about.skills.security"), level: t("about.skills.advanced") },
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Redis", "Prisma",
    "AWS", "Vercel", "Docker", "Git",
    "WhatsApp API", "Stripe", "Twilio", "SendGrid",
  ];

  const values = [
    {
      title: t("about.values.businessFirst"),
      description: t("about.values.businessFirstDesc"),
    },
    {
      title: t("about.values.clientSuccess"),
      description: t("about.values.clientSuccessDesc"),
    },
    {
      title: t("about.values.speed"),
      description: t("about.values.speedDesc"),
    },
    {
      title: t("about.values.security"),
      description: t("about.values.securityDesc"),
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t("about.title")}
            <br />
            <span className="text-white">{t("about.studio")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <GlowCard>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">{t("about.studio")}</span> {t("about.bio.p1").replace("Ravello Studio", "").trim()}
              </p>
              <p>
                {t("about.bio.p2")}
              </p>
              <p>
                {t("about.bio.p3")}
              </p>
              <p>
                {t("about.bio.p4")}
              </p>
            </div>
          </GlowCard>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 sm:mb-12 text-center px-2">
            <span className="text-white">{t("about.skills.title")}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.name as keyof typeof skillIcons] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <GlowCard hover={false}>
                    <Icon className="w-10 h-10 text-[#746BFF] mb-4" />
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-base text-zinc-400">{skill.level}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 sm:mb-12 text-center px-2">
            <span className="text-white">{t("about.values.valuesTitle")}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const Icon = valueIcons[value.title as keyof typeof valueIcons] || Target;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <GlowCard className="h-full">
                    <Icon className="w-12 h-12 text-[#746BFF] mb-6" />
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">{value.description}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8 sm:mb-12 text-center px-2">
            {t("about.techStack.technology")} <span className="text-white">{t("about.techStack.title").replace(t("about.techStack.technology"), "").trim()}</span>
          </h2>
          <GlowCard>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 text-center px-4">
              {t("about.techStack.subtitle")}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-5 py-2 sm:py-3 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] border border-white/10 text-sm sm:text-base text-zinc-300 hover:border-[#50FDE4]/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection
        title={t("cta.workTogether")}
        description={t("cta.workTogetherDesc")}
      />
    </div>
  );
}