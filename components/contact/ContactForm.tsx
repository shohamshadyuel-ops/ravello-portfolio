"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BudgetDropdown, type BudgetOption } from "@/components/contact/BudgetDropdown";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, "Please add a few details about your project."),
  honeypot: z.string().optional(),
});

type FormState = z.infer<typeof schema>;

const budgetOptions: BudgetOption[] = [
  { label: "Select a range", value: "" },
  { label: "Under $600", value: "Under $600" },
  { label: "$600–$1,500", value: "$600–$1,500" },
  { label: "$1,500–$3,000", value: "$1,500–$3,000" },
  { label: "$3,000+", value: "$3,000+" },
  { label: "Not sure", value: "Not sure" },
];

function FieldLabel({ children }: { children: string }) {
  return <div className="text-xs tracking-[0.18em] uppercase text-text-muted">{children}</div>;
}

function inputClassName(hasError: boolean) {
  return [
    "mt-2 h-11 w-full rounded-lg border bg-surface-elevated px-4 text-[15px] text-text-primary placeholder:text-text-muted",
    "border-border focus:border-accent/60 focus:outline-none",
    hasError ? "border-primary/60" : "",
  ].join(" ");
}

function textAreaClassName(hasError: boolean) {
  return [
    "mt-2 w-full rounded-lg border bg-surface-elevated px-4 py-3 text-[15px] text-text-primary placeholder:text-text-muted",
    "border-border focus:border-accent/60 focus:outline-none",
    hasError ? "border-primary/60" : "",
  ].join(" ");
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    budgetRange: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const canSubmit = useMemo(() => status !== "loading", [status]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() || "form";
        if (!map[key]) map[key] = issue.message;
      }
      setFieldErrors(map);
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: parsed.data.fullName,
          email: parsed.data.email,
          phone: parsed.data.phone,
          company: parsed.data.company,
          budget: parsed.data.budgetRange,
          details: parsed.data.message,
          locale: "en",
          honeypot: parsed.data.honeypot,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        budgetRange: "",
        message: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-10">
        <div className="font-display text-2xl text-text-primary">Contact form</div>
        <p className="mt-3 text-sm text-text-secondary">
          The more specific you are, the faster we can propose the right architecture.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-2xl border border-border/70 bg-surface-subtle/30 p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
            <div className="mt-4 font-display text-2xl text-text-primary">Message sent</div>
            <p className="mt-2 text-sm text-text-secondary">We’ll reply within 24 hours.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-border/70 bg-surface-subtle/30 px-6 text-sm text-text-primary hover:border-border-hover"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-7">
            <input
              type="text"
              name="honeypot"
              value={form.honeypot || ""}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <FieldLabel>Full Name *</FieldLabel>
              <input
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                placeholder="Jane Doe"
                className={inputClassName(Boolean(fieldErrors.fullName))}
                required
              />
              {fieldErrors.fullName && <div className="mt-2 text-sm text-primary">{fieldErrors.fullName}</div>}
            </div>

            <div>
              <FieldLabel>Email Address *</FieldLabel>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="jane@company.com"
                className={inputClassName(Boolean(fieldErrors.email))}
                required
              />
              {fieldErrors.email && <div className="mt-2 text-sm text-primary">{fieldErrors.email}</div>}
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <FieldLabel>Phone Number</FieldLabel>
                <input
                  name="phone"
                  value={form.phone || ""}
                  onChange={onChange}
                  placeholder="+1 555 123 4567"
                  className={inputClassName(false)}
                />
              </div>
              <div>
                <FieldLabel>Company Name</FieldLabel>
                <input
                  name="company"
                  value={form.company || ""}
                  onChange={onChange}
                  placeholder="Company"
                  className={inputClassName(false)}
                />
              </div>
            </div>

            <div>
              <FieldLabel>Budget Range</FieldLabel>
              <div className="mt-2">
                <BudgetDropdown
                  value={form.budgetRange || ""}
                  onChange={(v) => setForm((s) => ({ ...s, budgetRange: v }))}
                  options={budgetOptions}
                />
              </div>
            </div>

            <div>
              <FieldLabel>Project Details *</FieldLabel>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your business and what you need..."
                rows={6}
                className={textAreaClassName(Boolean(fieldErrors.message))}
                required
              />
              {fieldErrors.message && <div className="mt-2 text-sm text-primary">{fieldErrors.message}</div>}
            </div>

            {error && (
              <div className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/10 p-4 text-sm text-text-secondary">
                <AlertCircle className="mt-0.5 h-5 w-5 text-primary" />
                <div>{error}</div>
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-primary/35 bg-primary/25 text-[15px] font-medium text-text-primary transition-colors hover:bg-primary/35 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </Card>
    </motion.div>
  );
}

