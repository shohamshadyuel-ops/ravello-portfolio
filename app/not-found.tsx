"use client";

import { motion } from "framer-motion";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <h1 className="font-display text-8xl sm:text-9xl tracking-tight text-text-primary mb-4">
          404
        </h1>
        <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-4">Page not found</h2>
        <p className="text-[15px] leading-relaxed text-text-secondary mb-10 mx-auto">
          The page you’re looking for doesn’t exist — or it has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink href="/" variant="primary" size="lg">
            <Home className="h-4 w-4" />
            Go home
          </ButtonLink>
          <button onClick={() => window.history.back()}>
            <Button variant="ghost" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Go back
            </Button>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
