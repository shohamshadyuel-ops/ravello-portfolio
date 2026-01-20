import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import "../../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NexioBackground } from "@/components/background/nexio-background";
import { LocaleHtmlAttributes } from "@/components/locale-html-attributes";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <>
      <LocaleHtmlAttributes locale={locale} />
      <div className={`${inter.variable} ${manrope.variable} ${inter.className} overflow-x-hidden w-full ${dir}`}>
        <NexioBackground />
        <Navbar />
        <main className="min-h-screen pt-16 sm:pt-20 lg:pt-24 w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}