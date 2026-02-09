"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink, buttonClassName } from "@/components/ui/Button";

const nav = [
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const chrome = useMemo(
    () =>
      cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-colors duration-300",
        scrolled
          ? "bg-surface/75 border-b border-border/70 backdrop-blur-xl"
          : "bg-transparent"
      ),
    [scrolled]
  );

  return (
    <header className={chrome}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span
              className={cn(
                "h-8 w-8 rounded-md border border-border/80",
                "bg-gradient-to-br from-transparent to-primary/10",
                "shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
              )}
              aria-hidden="true"
            />
            <span className="font-body text-[15px] font-medium tracking-wide text-text-primary">
              Ravello Studio
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <ButtonLink
              href="/work"
              variant="ghost"
              className={cn(
                pathname === "/work" && "text-text-primary border-border-hover bg-surface-subtle/60"
              )}
            >
              Our Work
            </ButtonLink>
            <ButtonLink
              href="/about"
              variant="ghost"
              className={cn(
                pathname === "/about" && "text-text-primary border-border-hover bg-surface-subtle/60"
              )}
            >
              About
            </ButtonLink>
            <ButtonLink
              href="/pricing"
              variant="ghost"
              className={cn(
                pathname === "/pricing" &&
                  "text-text-primary border-border-hover bg-surface-subtle/60"
              )}
            >
              Pricing
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary" className="ml-1">
              Contact <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </nav>

          <button
            type="button"
            className={buttonClassName({ variant: "ghost", size: "md", className: "md:hidden" })}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-surface-deep/70 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 border-b border-border/70 bg-surface/85"
            >
              <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <span className="h-8 w-8 rounded-md border border-border/80" />
                  <span className="font-body text-[15px] font-medium text-text-primary">
                    Ravello Studio
                  </span>
                </Link>
                <button
                  type="button"
                  className={buttonClassName({ variant: "ghost", size: "md" })}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-10 pt-24"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                }}
                className="space-y-4"
              >
                {nav.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl border border-border/70 bg-surface-elevated/70 px-5 py-4",
                        "text-2xl font-display text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="pt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl border border-primary/35 bg-primary/20 px-5 py-4",
                      "text-2xl font-display text-text-primary"
                    )}
                  >
                    Contact <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

