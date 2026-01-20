import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoham Emanuel - Custom CRM Systems Developer",
  description: "Custom CRM systems built for your business workflow. Fully tailored platforms with automation and integrations.",
  keywords: ["CRM", "Custom Software", "Business Automation", "Workflow Management", "Integrations"],
  authors: [{ name: "Shoham Emanuel" }],
  openGraph: {
    title: "Shoham Emanuel - Custom CRM Systems Developer",
    description: "Custom CRM systems built for your business workflow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
