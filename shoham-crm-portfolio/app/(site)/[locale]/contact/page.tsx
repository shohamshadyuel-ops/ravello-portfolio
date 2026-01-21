"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/glow-card";
import { NeonButton } from "@/components/ui/neon-button";
import { MessageCircle, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useLocale } from "@/lib/use-locale";
import { formatBudgetRange, ilsToUsd } from "@/lib/currency";

export default function ContactPage() {
  const { locale, t } = useLocale();
  
  const faqs = [
    {
      question: t("contact.faq.q1"),
      answer: t("contact.faq.a1"),
    },
    {
      question: t("contact.faq.q2"),
      answer: t("contact.faq.a2"),
    },
    {
      question: t("contact.faq.q3"),
      answer: t("contact.faq.a3"),
    },
    {
      question: t("contact.faq.q4"),
      answer: t("contact.faq.a4"),
    },
    {
      question: t("contact.faq.q5"),
      answer: t("contact.faq.a5"),
    },
  ];

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
        setErrorMessage(data.error || t("contact.form.error"));
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(t("contact.form.error"));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Budget ranges - English options are fixed USD values
  const budgetRanges = [
    { value: "", min: null, max: null }, // placeholder
    { value: "under_1000", min: null, max: 1000 },
    { value: "1000_2000", min: 1000, max: 2000 },
    { value: "2000_3000", min: 2000, max: 3000 },
    { value: "3000_plus", min: 3000, max: null },
  ];

  const budgetOptions = budgetRanges.map((range) => {
    if (range.value === "") {
      return { value: "", label: t("contact.form.selectRange") };
    }
    
    if (locale === "he") {
      // Use Hebrew translation for Hebrew locale (keep existing Hebrew options)
      const key = range.value === "under_1000" ? "under5k" :
                   range.value === "1000_2000" ? "5k10k" :
                   range.value === "2000_3000" ? "10k20k" : "20kPlus";
      return { value: range.value, label: t(`contact.form.${key}`) };
    } else {
      // English labels - exact values as specified
      if (range.value === "under_1000") {
        return { value: range.value, label: "Under $1,000" };
      } else if (range.value === "1000_2000") {
        return { value: range.value, label: "$1,000 – $2,000" };
      } else if (range.value === "2000_3000") {
        return { value: range.value, label: "$2,000 – $3,000" };
      } else if (range.value === "3000_plus") {
        return { value: range.value, label: "$3,000+" };
      }
      return { value: range.value, label: "" };
    }
  });

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            {t("contact.title")}
            <br />
            <span className="text-white">{t("contact.yourCRM")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto px-4">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: locale === "he" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlowCard>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                {t("contact.form.title")} <span className="text-white">{t("contact.form.message")}</span>
              </h2>

              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#746BFF] mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {t("contact.form.success.title")}
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    {t("contact.form.success.message")}
                  </p>
                  <NeonButton onClick={() => setStatus("idle")} variant="outline">
                    {t("contact.form.success.another")}
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
                      {t("contact.form.fullName")} *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                      placeholder="+972 50-123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-2">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                      placeholder={t("contact.form.company")}
                    />
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-medium text-zinc-400 mb-2">
                      {t("contact.form.budgetRange")}
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl text-white focus:outline-none transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                    >
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value} style={{ background: "#141414", color: "#ffffff" }}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                      {t("contact.form.projectDetails")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/40 focus:outline-none transition-all duration-300 resize-none"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(116, 107, 255, 0.5)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.1), 0 0 0 3px rgba(116, 107, 255, 0.15), 0 8px 16px -4px rgba(116, 107, 255, 0.2)";
                        e.currentTarget.style.filter = "brightness(1.05)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.currentTarget.style.boxShadow = "inset 0 1px 0 0 rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.1)";
                        e.currentTarget.style.filter = "brightness(1)";
                      }}
                      placeholder={t("contact.form.placeholder")}
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
                      t("contact.form.sending")
                    ) : (
                      <>
                        <Mail size={20} />
                        {t("contact.form.send")}
                      </>
                    )}
                  </NeonButton>
                </form>
              )}
            </GlowCard>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: locale === "he" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp */}
            <GlowCard>
              <MessageCircle className="w-14 h-14 text-[#746BFF] mb-6" />
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                {t("contact.whatsapp.title")} <span className="text-white">{t("contact.whatsapp.whatsapp")}</span>
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                {t("contact.whatsapp.subtitle")}
              </p>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NeonButton variant="outline" className="w-full">
                  <MessageCircle size={20} />
                  {t("contact.whatsapp.cta")}
                </NeonButton>
              </a>
            </GlowCard>

            {/* FAQ */}
            <GlowCard>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                {t("contact.faq.title")} <span className="text-white">{t("contact.faq.questions")}</span>
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-white font-heading font-bold text-lg mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed">{faq.answer}</p>
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