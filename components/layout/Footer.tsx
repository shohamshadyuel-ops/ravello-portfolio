import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/80 bg-surface/60">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-md border border-border/80" aria-hidden="true" />
              <div className="font-body text-[15px] font-medium text-text-primary">
                Ravello Studio
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-text-secondary">
              Systems that think like you do.
            </p>
          </div>

          <div className="md:justify-self-center">
            <div className="text-xs tracking-[0.18em] uppercase text-text-secondary">
              Quick links
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link className="text-text-secondary hover:text-text-primary" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-text-secondary hover:text-text-primary" href="/work">
                  Our Work
                </Link>
              </li>
              <li>
                <Link className="text-text-secondary hover:text-text-primary" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-text-secondary hover:text-text-primary" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-text-secondary hover:text-text-primary" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <div className="text-xs tracking-[0.18em] uppercase text-text-secondary">
              Start a project
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <ButtonLink href="/contact" variant="primary">
                Start a Project <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href="https://wa.me/972504242641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border/70 pt-8 text-sm text-text-muted">
          © {new Date().getFullYear()} Ravello Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

