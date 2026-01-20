"use client";

import Link from "next/link";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "WhatsApp",
      href: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/972504242641",
      icon: MessageCircle,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Shoham Emanuel
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Custom CRM Systems Developer
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
                <li key={item.name}>
                  <Link
                    href={item.href}
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
                href="/contact"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors"
              >
                <Mail size={16} />
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Shoham Emanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
