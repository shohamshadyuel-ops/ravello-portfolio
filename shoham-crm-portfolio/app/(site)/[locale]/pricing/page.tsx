"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { CTASection } from "@/components/cta-section";
import { Check, MessageCircle, Users, Zap, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/lib/use-locale";
import { formatPriceEstimate, usdToIls } from "@/lib/currency";

export default function PricingPage() {
  const { locale, t } = useLocale();

  // Base pricing in USD
  const pricingTiersBase = [
    {
      usd: 600,
      name: t("pricing.tiers.starter.name"),
      description: t("pricing.tiers.starter.description"),
      icon: Users,
      features: [
        t("pricing.tiers.starter.features.leads"),
        t("pricing.tiers.starter.features.pipeline"),
        t("pricing.tiers.starter.features.notes"),
        t("pricing.tiers.starter.features.email"),
        t("pricing.tiers.starter.features.automations"),
        t("pricing.tiers.starter.features.dashboard"),
        t("pricing.tiers.starter.features.delivery"),
      ],
    },
    {
      usd: 1500,
      name: t("pricing.tiers.growth.name"),
      description: t("pricing.tiers.growth.description"),
      icon: TrendingUp,
      features: [
        t("pricing.tiers.growth.features.everything"),
        t("pricing.tiers.growth.features.pipelines"),
        t("pricing.tiers.growth.features.followups"),
        t("pricing.tiers.growth.features.tasks"),
        t("pricing.tiers.growth.features.roles"),
        t("pricing.tiers.growth.features.dashboards"),
        t("pricing.tiers.growth.features.integrations"),
        t("pricing.tiers.growth.features.delivery"),
      ],
      popular: true,
    },
    {
      usd: 3000,
      name: t("pricing.tiers.advanced.name"),
      description: t("pricing.tiers.advanced.description"),
      icon: Zap,
      features: [
        t("pricing.tiers.advanced.features.everything"),
        t("pricing.tiers.advanced.features.workflows"),
        t("pricing.tiers.advanced.features.automations"),
        t("pricing.tiers.advanced.features.permissions"),
        t("pricing.tiers.advanced.features.api"),
        t("pricing.tiers.advanced.features.reporting"),
        t("pricing.tiers.advanced.features.support"),
        t("pricing.tiers.advanced.features.delivery"),
      ],
    },
  ];

  // Format pricing based on locale
  const pricingTiers = pricingTiersBase.map((tier) => ({
    ...tier,
    estimate: formatPriceEstimate(
      locale === "he" ? usdToIls(tier.usd) : tier.usd,
      locale
    ),
  }));

  const pricingFactors = [
    {
      icon: Database,
      title: t("pricing.factors.dataComplexity"),
      description: t("pricing.factors.dataComplexityDesc"),
    },
    {
      icon: Zap,
      title: t("pricing.factors.integrations"),
      description: t("pricing.factors.integrationsDesc"),
    },
    {
      icon: Users,
      title: t("pricing.factors.userScale"),
      description: t("pricing.factors.userScaleDesc"),
    },
    {
      icon: TrendingUp,
      title: t("pricing.factors.automation"),
      description: t("pricing.factors.automationDesc"),
    },
  ];

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
            {t("pricing.title")}
            <br />
            <span className="text-white">{t("pricing.pricing")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={tier.popular ? "md:-mt-4" : ""}
            >
              <GlowCard
                className={`h-full ${tier.popular ? "border-arctic-mint/50" : ""}`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-[#746BFF] via-[#684DFF] to-[#461DB8] text-white text-sm font-semibold px-5 py-2 rounded-full inline-block mb-6 shadow-[0_0_16px_rgba(116,107,255,0.3)]">
                    {t("pricing.tiers.growth.popular")}
                  </div>
                )}

                <tier.icon className="w-14 h-14 text-[#746BFF] mb-6" />

                <h3 className="text-3xl font-heading font-bold text-white mb-3">{tier.name}</h3>
                <p className="text-lg text-zinc-400 mb-8 leading-relaxed">{tier.description}</p>

                <div className="mb-8">
                  <p className="text-4xl font-bold text-white mb-2">{tier.estimate}</p>
                  <p className="text-sm text-zinc-500">{t("pricing.oneTime")}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#746BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/${locale}/contact`}>
                  <NeonButton
                    variant={tier.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {t("pricing.requestQuote")}
                  </NeonButton>
                </Link>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* What Affects Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6 text-center px-2">
            {t("pricing.factors.title")} <span className="text-white">{t("pricing.factors.pricing")}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 text-center mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-4">
            {t("pricing.factors.subtitle")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <GlowCard hover={false} className="h-full text-center">
                  <factor.icon className="w-12 h-12 text-[#746BFF] mx-auto mb-6" />
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{factor.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <GlowCard>
            <h2 className="text-3xl font-heading font-bold text-white mb-6 text-center">
              {t("pricing.exactQuote.title")} <span className="text-white">{t("pricing.exactQuote.exact")}</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto text-center">
              {t("pricing.exactQuote.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <NeonButton variant="primary">{t("pricing.exactQuote.cta")}</NeonButton>
              </Link>

              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="outline">
                  <MessageCircle size={20} />
                  {t("contact.whatsapp.cta")}
                </NeonButton>
              </a>
            </div>
          </GlowCard>
        </motion.div>

        {/* Optional CTA section */}
        <CTASection />
      </div>
    </div>
  );
}