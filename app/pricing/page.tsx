import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { Reassurance } from "@/components/pricing/Reassurance";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Ravello Studio — Pricing",
  description:
    "Transparent, one-time pricing for custom CRM systems. No subscriptions, no per-user fees — complete ownership.",
  openGraph: {
    title: "Ravello Studio — Pricing",
    description:
      "Delivered in 3 days to 4 weeks • One-time investment • No recurring fees",
    url: "https://www.ravellostudio.com/pricing",
    siteName: "Ravello Studio",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <Reassurance />
      <HomeCTA />
    </>
  );
}
