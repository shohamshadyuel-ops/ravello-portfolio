"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NeonButton } from "@/components/ui/neon-button";
import { GlowCard } from "@/components/ui/glow-card";
import { CTASection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/content/projects";
import {
  Database,
  Zap,
  BarChart,
  Users,
  Settings,
  Lock,
  ArrowRight,
  CheckCircle,
  Mail,
} from "lucide-react";
import { useLocale } from "@/lib/use-locale";

const moduleIconKeys = [
  "customDataModels",
  "workflowAutomation",
  "analyticsReporting",
  "roleBasedAccess",
  "apiIntegrations",
  "enterpriseSecurity",
] as const;

const moduleIcons = {
  customDataModels: Database,
  workflowAutomation: Zap,
  analyticsReporting: BarChart,
  roleBasedAccess: Users,
  apiIntegrations: Settings,
  enterpriseSecurity: Lock,
} as const;

export default function HomePage() {
  const { locale, t, tArray } = useLocale();
  const featuredProjects = getFeaturedProjects(locale);

  const crmModules = tArray("home.modulesList").map((mod: any, index: number) => {
    const iconKey = moduleIconKeys[index] as keyof typeof moduleIcons;
    return {
      icon: moduleIcons[iconKey] || Database,
      title: mod.title,
      description: mod.description,
    };
  });

  const processSteps = tArray("home.processSteps");
  const whyCustomCRM = tArray("home.benefitsList");

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2">
              {t("home.title")}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-zinc-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t("home.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 px-4"
          >
            <Link href={`/${locale}/contact`}>
              <NeonButton size="lg" variant="primary">
                <Mail size={20} />
                {t("home.ctaQuote")}
              </NeonButton>
            </Link>
            <Link href={`/${locale}/work`}>
              <NeonButton size="lg" variant="outline">
                {t("home.ctaWork")}
                <ArrowRight size={20} />
              </NeonButton>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto w-full px-4"
          >
            <GlowCard
              hover={false}
              disableInlineShadow
              className="p-5 md:p-6 min-h-[110px] flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:shadow-[0_0_28px_rgba(168,85,247,0.22)] transition-shadow duration-200"
            >
              <div className="text-xl md:text-2xl font-heading font-semibold text-white mb-1">
                {t("home.stats.deliveryTimeValue")}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-normal text-white/60 font-medium">
                {t("home.stats.deliveryTime")}
              </div>
            </GlowCard>

            <GlowCard
              hover={false}
              disableInlineShadow
              className="p-5 md:p-6 min-h-[110px] flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:shadow-[0_0_28px_rgba(168,85,247,0.22)] transition-shadow duration-200"
            >
              <div className="text-xl md:text-2xl font-heading font-semibold text-white mb-1">100%</div>
              <div className="text-xs md:text-sm uppercase tracking-normal text-white/60 font-medium">
                {t("home.stats.customBuilt")}
              </div>
            </GlowCard>

            <GlowCard
              hover={false}
              disableInlineShadow
              className="p-5 md:p-6 min-h-[110px] flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:shadow-[0_0_28px_rgba(168,85,247,0.22)] transition-shadow duration-200"
            >
              <div className="text-xl md:text-2xl font-heading font-semibold text-white mb-1">
                {t("home.stats.premiumBuild")}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-normal text-white/60 font-medium">
                {t("home.stats.crafted")}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* CRM Modules Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              {t("home.sections.everything")}
              <br />
              <span className="text-white">{t("home.sections.inOneSystem")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
              {t("home.sections.everythingDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {crmModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <module.icon className="w-12 h-12 text-[#746BFF] mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{module.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              {t("home.sections.featured")}
              <br />
              <span className="text-white">{t("home.sections.projects")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
              {t("home.sections.featuredDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href={`/${locale}/work`}>
              <NeonButton variant="outline" size="lg">
                {t("common.viewAll")}
                <ArrowRight size={20} />
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              {t("home.sections.howWeBuild")}
              <br />
              <span className="text-white">{t("home.sections.yourCRM")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
              {t("home.sections.howWeBuildDesc")}
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {processSteps.map((step: any, index: number) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: locale === "he" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard hover={false} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-0 sm:pt-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">{step.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom CRM Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              {t("home.sections.whyChoose")}
              <br />
              <span className="text-white">{t("home.sections.custom")}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
              {t("home.sections.whyChooseDesc")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyCustomCRM.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 sm:gap-4"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#746BFF] flex-shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

