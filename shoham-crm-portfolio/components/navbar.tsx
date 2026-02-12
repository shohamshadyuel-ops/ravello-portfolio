"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/use-locale";
import { type Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/language-switcher";

export function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";
  const { t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.work"), href: "/work" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 min-w-0">
            <Image
              src="/logo.png"
              alt="Ravello Studio"
              width={28}
              height={28}
              priority
              className="h-7 w-7 object-contain select-none pointer-events-none shrink-0"
            />
            <span className="text-sm font-semibold tracking-tight text-white/90 whitespace-nowrap">
              Ravello Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const href = `/${locale}${item.href}`;
              const isActive = pathname === href || (item.href === "/" && pathname === `/${locale}`);
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    isActive
                      ? "text-purple-400"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center ml-4">
            <LanguageSwitcher locale={locale} />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-zinc-900 border-t border-zinc-800"
        >
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => {
              const href = `/${locale}${item.href}`;
              const isActive = pathname === href || (item.href === "/" && pathname === `/${locale}`);
              return (
                <Link
                  key={item.href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            {/* Language Switcher Mobile */}
            <div className="pt-2 border-t border-zinc-800">
              <div onClick={() => setMobileMenuOpen(false)}>
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
