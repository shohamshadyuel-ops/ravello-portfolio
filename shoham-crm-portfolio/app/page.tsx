"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
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
  MessageCircle,
  Mail,
} from "lucide-react";

const ThreeHeroScene = dynamic(
  () => import("@/components/three-hero-scene").then((mod) => mod.ThreeHeroScene),
  { ssr: false }
);

const crmModules = [
  {
    icon: Database,
    title: "Custom Data Models",
    description: "Tailored database structures that match your exact business logic",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and create intelligent workflow sequences",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and custom reports for data-driven decisions",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions and user management for team collaboration",
  },
  {
    icon: Settings,
    title: "API Integrations",
    description: "Connect with WhatsApp, Email, Payment systems, and third-party tools",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level security with encryption, backups, and compliance",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We analyze your workflow, pain points, and business requirements",
  },
  {
    number: "02",
    title: "System Design",
    description: "Creating data models, workflows, and integration architecture",
  },
  {
    number: "03",
    title: "Development",
    description: "Building your custom CRM with regular check-ins and iterations",
  },
  {
    number: "04",
    title: "Testing & Training",
    description: "Quality assurance, team training, and documentation",
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Smooth deployment with ongoing maintenance and optimization",
  },
];

const whyCustomCRM = [
  "No monthly per-user fees - you own the system",
  "Built exactly for your workflow, not generic templates",
  "Unlimited customization as your business evolves",
  "Complete data ownership and control",
  "Integrates with your existing tools",
  "Scales with your business growth",
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <ThreeHeroScene />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Custom CRM Systems
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Built For Your Business Workflow
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto"
          >
            I design and build fully tailored CRM platforms with automation and integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <NeonButton size="lg" variant="primary">
                <Mail size={20} />
                Request a Custom CRM Quote
              </NeonButton>
            </Link>
            <Link href="/work">
              <NeonButton size="lg" variant="outline">
                View Work
                <ArrowRight size={20} />
              </NeonButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-4 text-sm text-zinc-400"
          >
            <a
              href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            >
              <MessageCircle size={16} />
              Or chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* CRM Modules Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need in One System
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Build a complete business management platform tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <module.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {module.title}
                  </h3>
                  <p className="text-zinc-400">{module.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real CRM systems built for real businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/work">
              <NeonButton variant="outline" size="lg">
                View All Projects
                <ArrowRight size={20} />
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Build Your CRM
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A proven process from concept to deployment
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard hover={false} className="flex items-start gap-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom CRM Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Custom Over Off-the-Shelf?
            </h2>
            <p className="text-xl text-zinc-400">
              Stop adapting your business to software limitations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyCustomCRM.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-zinc-300">{benefit}</p>
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
