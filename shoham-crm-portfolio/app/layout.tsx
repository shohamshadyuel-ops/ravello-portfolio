import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravello Studio - Custom CRM Systems Developer",
  description:
    "Ravello Studio builds custom CRM systems for your business workflow. Fully tailored platforms with automation and integrations.",
  keywords: ["CRM", "Custom Software", "Business Automation", "Workflow Management", "Integrations"],
  authors: [{ name: "Ravello Studio" }],
  openGraph: {
    title: "Ravello Studio - Custom CRM Systems Developer",
    description: "Custom CRM systems built for your business workflow",
    type: "website",
  },
  twitter: {
    title: "Ravello Studio - Custom CRM Systems Developer",
    description: "Custom CRM systems built for your business workflow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
