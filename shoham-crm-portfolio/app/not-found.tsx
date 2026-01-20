"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/neon-button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-zinc-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <NeonButton variant="primary">
              <Home size={20} />
              Go Home
            </NeonButton>
          </Link>
          <button onClick={() => window.history.back()}>
            <NeonButton variant="outline">
              <ArrowLeft size={20} />
              Go Back
            </NeonButton>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
