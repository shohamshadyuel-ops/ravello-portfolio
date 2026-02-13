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
  ArrowUpRight,
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
      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:pb-20 sm:pt-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(64,14,47,0.18) 0%, transparent 55%), radial-gradient(circle at 80% 30%, rgba(196,168,130,0.10) 0%, transparent 50%)",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[720px]">
              <div className="relative w-full h-[42vh] max-h-[420px] sm:h-[50vh] sm:max-h-[520px] lg:h-[560px]">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{
                    width: "clamp(320px, 82vw, 520px)",
                    height: "clamp(220px, 54vw, 340px)",
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(64,14,47,0.28) 0%, rgba(196,168,130,0.10) 25%, transparent 65%)",
                  }}
                />
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: "clamp(280px, 72vw, 420px)",
                    height: "clamp(160px, 42vw, 240px)",
                    background:
                      "linear-gradient(135deg, rgba(90,24,67,0.85) 0%, rgba(64,14,47,0.9) 45%, rgba(26,26,26,0.85) 100%)",
                    boxShadow:
                      "0 30px 80px rgba(64,14,47,0.35), 0 2px 0 rgba(255,255,255,0.05) inset, 0 -18px 40px rgba(0,0,0,0.55) inset",
                  }}
                />
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: "clamp(120px, 30vw, 180px)",
                    height: "clamp(120px, 30vw, 180px)",
                    background:
                      "radial-gradient(circle at 30% 30%, #0a0a0a 0%, #0f0f0f 55%, #050505 100%)",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.05) inset",
                  }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full border border-border/80 bg-white/5 backdrop-blur">
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-white/90" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 text-xs tracking-[0.18em] uppercase text-white/60">
              Growth-stage companies, SaaS, agencies
            </div>

            <h1 className="font-heading text-white text-[clamp(3.1rem,7vw,6.8rem)] leading-[0.98] tracking-tight">
              <span className="block">Architect</span>
              <span className="block">your growth</span>
            </h1>

            <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-white/70 sm:grid-cols-2">
              <p>
                We build the operational backbone that turns growing companies into scalable businesses.
              </p>
              <p>{t("home.subtitle")}</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`}>
                <NeonButton size="lg" variant="primary">
                  {t("home.ctaQuote")}
                  <ArrowUpRight size={18} />
                </NeonButton>
              </Link>
              <Link href={`/${locale}/work`}>
                <NeonButton size="lg" variant="outline">
                  {t("home.ctaWork")}
                </NeonButton>
              </Link>
            </div>
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

