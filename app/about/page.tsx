import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { CoreSkills } from "@/components/about/CoreSkills";
import { Philosophy } from "@/components/about/Philosophy";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Ravello Studio — About",
  description: "Custom CRM systems. Workflow-driven. Business-focused.",
  openGraph: {
    title: "Ravello Studio — About",
    description: "Custom CRM systems. Workflow-driven. Business-focused.",
    url: "https://www.ravellostudio.com/about",
    siteName: "Ravello Studio",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <CoreSkills />
      <Philosophy />
      <HomeCTA />
    </>
  );
}
