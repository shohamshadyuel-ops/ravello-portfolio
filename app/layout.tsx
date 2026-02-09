import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravello Studio — Custom CRM Systems for Growing Businesses",
  description:
    "We build fully custom CRM systems tailored to your exact business workflow. One-time investment, no subscriptions, complete ownership. Delivered in 3 days to 4 weeks.",
  keywords: [
    "Custom CRM",
    "CRM development",
    "Workflow automation",
    "Business systems",
    "Operational software",
    "Integrations",
  ],
  authors: [{ name: "Ravello Studio" }],
  openGraph: {
    title: "Ravello Studio — Custom CRM Systems",
    description: "Custom CRM systems engineered around your exact workflow — owned entirely by you.",
    url: "https://www.ravellostudio.com",
    siteName: "Ravello Studio",
    type: "website",
  },
  twitter: {
    title: "Ravello Studio — Custom CRM Systems",
    description: "Custom CRM systems engineered around your exact workflow — owned entirely by you.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `function initApollo(){
  var n=Math.random().toString(36).substring(7),
  o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
  o.async=!0,o.defer=!0,
  o.onload=function(){
    window.trackingFunctions.onLoad({appId:"69723fa16ad353001daa32ef"})
  },
  document.head.appendChild(o)
}
initApollo();`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen overflow-x-hidden pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
