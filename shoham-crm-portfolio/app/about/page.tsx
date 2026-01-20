"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { CTASection } from "@/components/cta-section";
import { Code2, Zap, Target, Heart, Database, Cloud, Workflow, Lock } from "lucide-react";

const skills = [
  { icon: Code2, name: "Full-Stack Development", level: "Expert" },
  { icon: Database, name: "Database Design", level: "Expert" },
  { icon: Workflow, name: "Workflow Automation", level: "Expert" },
  { icon: Cloud, name: "Cloud Infrastructure", level: "Advanced" },
  { icon: Zap, name: "API Integrations", level: "Expert" },
  { icon: Lock, name: "Security & Compliance", level: "Advanced" },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js",
  "PostgreSQL", "MongoDB", "Redis", "Prisma",
  "AWS", "Vercel", "Docker", "Git",
  "WhatsApp API", "Stripe", "Twilio", "SendGrid",
];

const values = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Technology serves your business goals, not the other way around. Every feature is designed with ROI in mind.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is my success. I'm invested in building systems that truly transform your operations.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Fast turnaround times without compromising quality. Get your CRM live in weeks, not months.",
  },
  {
    icon: Lock,
    title: "Security & Reliability",
    description: "Enterprise-grade security, regular backups, and 99.9% uptime. Your data is always protected.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Building custom CRM systems that actually work for your business
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <GlowCard>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Hi, I'm <span className="text-purple-400 font-semibold">Shoham Emanuel</span>, a 19-year-old custom CRM systems developer specializing in building workflow-based platforms for businesses.
              </p>
              <p>
                I don't believe in one-size-fits-all solutions. Every business has unique processes, and your software should reflect that. That's why I build fully custom CRM systems from the ground up—tailored to your exact workflow, integrated with your existing tools, and designed to scale with your growth.
              </p>
              <p>
                From real estate agencies to e-commerce operations, healthcare clinics to logistics companies, I've helped businesses across industries streamline their operations with custom-built systems. My approach combines technical expertise with a deep understanding of business operations, ensuring that every feature adds real value.
              </p>
              <p>
                When I'm not coding, I'm studying business processes, learning about new industries, and finding innovative ways to automate workflows. I'm passionate about helping businesses work smarter, not harder.
              </p>
            </div>
          </GlowCard>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <GlowCard hover={false}>
                  <skill.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-zinc-400">{skill.level}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <value.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
          <GlowCard>
            <p className="text-zinc-400 mb-6 text-center">
              Modern, battle-tested technologies for reliable and scalable systems
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-purple-500/50 transition-colors"
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
        title="Let's Work Together"
        description="Ready to build a CRM system that transforms your business? Let's talk."
      />
    </div>
  );
}
