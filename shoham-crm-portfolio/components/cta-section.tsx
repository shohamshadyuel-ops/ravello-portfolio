"use client";

import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/neon-button";
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export function CTASection({
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how a custom CRM system can streamline your operations and accelerate growth.",
  primaryCTA = { text: "Request a Quote", href: "/contact" },
  secondaryCTA = { text: "Chat on WhatsApp", href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641" },
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20" />
      
      {/* Animated Glow */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={primaryCTA.href}>
            <NeonButton size="lg" variant="primary">
              <Mail size={20} />
              {primaryCTA.text}
            </NeonButton>
          </Link>

          <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer">
            <NeonButton size="lg" variant="outline">
              <MessageCircle size={20} />
              {secondaryCTA.text}
            </NeonButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
