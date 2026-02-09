import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/contact/FAQ";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Ravello Studio — Contact",
  description: "Tell us about your business and we'll respond within 24 hours.",
  openGraph: {
    title: "Ravello Studio — Contact",
    description: "Tell us about your business and we'll respond within 24 hours.",
    url: "https://www.ravellostudio.com/contact",
    siteName: "Ravello Studio",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <ContactForm />
          <div className="space-y-8">
            <Card className="p-10">
              <MessageCircle className="h-9 w-9 text-accent" />
              <div className="mt-5 font-display text-2xl text-text-primary">Prefer WhatsApp?</div>
              <p className="mt-3 text-sm text-text-secondary">
                Get instant responses. Let’s talk about your project.
              </p>
              <a
                href="https://wa.me/972504242641"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full border border-border/70 bg-surface-subtle/30 text-[15px] font-medium text-text-primary hover:border-border-hover"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </span>
              </a>
            </Card>
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
