"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { MessageCircle, Mail, CheckCircle, AlertCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a custom CRM?",
    answer: "Typically 3-5 months depending on complexity. Simpler systems can be ready in 6-8 weeks.",
  },
  {
    question: "Do I need technical knowledge to use the CRM?",
    answer: "No. I design intuitive interfaces and provide full training for your team.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer: "Yes. I can integrate with WhatsApp, email, payment systems, calendars, and most third-party APIs.",
  },
  {
    question: "What happens after the CRM is built?",
    answer: "You get the complete source code, documentation, and post-launch support. You own everything.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes. I offer optional maintenance packages for updates, new features, and technical support.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budgetRange: "",
    honeypot: "", // Anti-spam field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          budgetRange: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Your CRM
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Tell me about your business and I'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowCard>
              <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>

              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <NeonButton onClick={() => setStatus("idle")} variant="outline">
                    Send Another Message
                  </NeonButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-zinc-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="+972 50-123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-zinc-400 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select a range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-20k">$10,000 - $20,000</option>
                      <option value="20k-plus">$20,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your business and what you need..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <NeonButton
                    type="submit"
                    variant="primary"
                    disabled={status === "loading"}
                    className="w-full"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Mail size={20} />
                        Send Message
                      </>
                    )}
                  </NeonButton>
                </form>
              )}
            </GlowCard>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp */}
            <GlowCard>
              <MessageCircle className="w-12 h-12 text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Prefer WhatsApp?
              </h2>
              <p className="text-zinc-400 mb-6">
                Get instant responses. Let's chat about your project.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="outline" className="w-full">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </NeonButton>
              </a>
            </GlowCard>

            {/* FAQ */}
            <GlowCard>
              <h2 className="text-2xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-white font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-zinc-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
