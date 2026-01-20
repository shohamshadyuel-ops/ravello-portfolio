"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { CTASection } from "@/components/cta-section";
import { Check, MessageCircle, Users, Zap, Database, TrendingUp } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with CRM",
    icon: Users,
    features: [
      "Up to 3 custom modules",
      "Basic workflow automation",
      "2-3 third-party integrations",
      "User management & permissions",
      "Basic reporting dashboard",
      "Email support",
      "3 months of support",
    ],
    estimate: "Starting at $5,000",
  },
  {
    name: "Growth",
    description: "For growing businesses with complex workflows",
    icon: TrendingUp,
    features: [
      "Up to 8 custom modules",
      "Advanced workflow automation",
      "5-7 third-party integrations",
      "Role-based access control",
      "Advanced analytics & reporting",
      "WhatsApp & Email integration",
      "Data migration assistance",
      "6 months of support",
    ],
    estimate: "Starting at $12,000",
    popular: true,
  },
  {
    name: "Advanced",
    description: "Enterprise-grade systems for established operations",
    icon: Zap,
    features: [
      "Unlimited custom modules",
      "Complex workflow automation",
      "Unlimited integrations",
      "Multi-tenant architecture",
      "Custom analytics & AI insights",
      "API access for external systems",
      "Priority support",
      "12 months of support",
      "Training for your team",
    ],
    estimate: "Starting at $25,000",
  },
];

const pricingFactors = [
  {
    icon: Database,
    title: "Data Complexity",
    description: "Number of custom entities, relationships, and data models required",
  },
  {
    icon: Zap,
    title: "Integrations",
    description: "Third-party services (WhatsApp, Stripe, APIs) and custom connections",
  },
  {
    icon: Users,
    title: "User Scale",
    description: "Number of users, roles, and permission complexity",
  },
  {
    icon: TrendingUp,
    title: "Automation & Logic",
    description: "Workflow complexity, business rules, and automation sequences",
  },
];

export default function PricingPage() {
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
            Transparent Pricing
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Custom CRM systems built to fit your needs and budget. No hidden fees, no per-user charges.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={tier.popular ? "md:-mt-4" : ""}
            >
              <GlowCard
                className={`h-full ${tier.popular ? "border-purple-500/50 shadow-purple-500/30" : ""}`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}

                <tier.icon className="w-12 h-12 text-purple-400 mb-4" />
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-zinc-400 mb-6">{tier.description}</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-white">{tier.estimate}</p>
                  <p className="text-sm text-zinc-500">One-time project cost</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <NeonButton
                    variant={tier.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Get Started
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
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Affects Pricing?
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Every project is unique. Here are the main factors that influence the final cost:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingFactors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <GlowCard hover={false} className="h-full text-center">
                  <factor.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{factor.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <GlowCard>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              What's Included in Every Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Complete Ownership</p>
                    <p className="text-zinc-400 text-sm">You own the code and all intellectual property</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">No Monthly Fees</p>
                    <p className="text-zinc-400 text-sm">One-time cost, no per-user charges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Deployment Assistance</p>
                    <p className="text-zinc-400 text-sm">Help with hosting setup and configuration</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Documentation</p>
                    <p className="text-zinc-400 text-sm">Complete technical and user documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Team Training</p>
                    <p className="text-zinc-400 text-sm">Training sessions for your team</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Post-Launch Support</p>
                    <p className="text-zinc-400 text-sm">Bug fixes and adjustments included</p>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <GlowCard>
            <h2 className="text-2xl font-bold text-white mb-4">
              Need a Custom Quote?
            </h2>
            <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
              Every business is different. Let's discuss your specific needs and I'll provide a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <NeonButton variant="primary">
                  Request a Quote
                </NeonButton>
              </Link>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="outline">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </NeonButton>
              </a>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </div>
  );
}
