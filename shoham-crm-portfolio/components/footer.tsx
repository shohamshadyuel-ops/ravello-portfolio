"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/use-locale";
import { type Locale } from "@/lib/i18n";

export function Footer() {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";
  const { t } = useLocale();

  const navigation = {
    main: [
      { name: t("nav.home"), href: "/" },
      { name: t("nav.work"), href: "/work" },
      { name: t("nav.about"), href: "/about" },
      { name: t("nav.pricing"), href: "/pricing" },
      { name: t("nav.contact"), href: "/contact" },
    ],
    social: [
      {
        name: "WhatsApp",
        href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641",
        icon: MessageCircle,
      },
    ],
  };

  return (
    <footer className="border-t border-zinc-800/50 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ravello Studio
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Custom systems for growth
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Building tailored solutions for businesses
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={16} />
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Ravello Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
