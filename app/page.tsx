import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ValuePillars } from "@/components/home/ValuePillars";
import { Industries } from "@/components/home/Industries";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Comparison } from "@/components/home/Comparison";
import { Process } from "@/components/home/Process";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Ravello Studio — Custom CRM Systems for Growing Businesses",
  description:
    "We build fully custom CRM systems tailored to your exact business workflow. One-time investment, no subscriptions, complete ownership. Delivered in 3 days to 4 weeks.",
  openGraph: {
    title: "Ravello Studio — Custom CRM Systems",
    description: "Custom CRM systems engineered around your exact workflow — owned entirely by you.",
    url: "https://www.ravellostudio.com",
    siteName: "Ravello Studio",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValuePillars />
      <Industries />
      <Services />
      <Testimonials />
      <Comparison />
      <Process />
      <HomeCTA />
    </>
  );
}
