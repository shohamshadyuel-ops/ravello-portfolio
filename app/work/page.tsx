import type { Metadata } from "next";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkPageClient } from "@/components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Ravello Studio — Project Portfolio",
  description:
    "Custom CRM systems we've built for businesses across different industries — engineered around real workflows, delivered with ownership.",
  openGraph: {
    title: "Ravello Studio — Project Portfolio",
    description: "Custom CRM systems we've built for businesses across different industries.",
    url: "https://www.ravellostudio.com/work",
    siteName: "Ravello Studio",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkPageClient />
    </>
  );
}
